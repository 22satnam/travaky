// import { MapPin } from "lucide-react";
// import { DashboardSection } from "./DashboardSection";
// import { CompletedApplications } from "./CompletedApplications";
// import { OngoingApplications } from "./OngoingApplications";

// export const TrackApplication = () => {
//   return (
//     <DashboardSection
//       title="Track Application"
//       description="See status of ongoing and completed applications"
//       icon={MapPin}
//       primaryAction={{
//         label: "New Application",
//         onClick: () => console.log("New application")
//       }}
//     >
//       <div className="space-y-8">
//         {/* Mobile-optimized: Compact view with summary first */}
//         <div className="lg:hidden">
//           <div className="bg-gradient-card rounded-xl p-4 border mb-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h4 className="font-medium text-foreground">Quick Summary</h4>
//                 <p className="text-sm text-muted-foreground">2 in progress • 2 pending</p>
//               </div>
//               <div className="text-right">
//                 <div className="text-lg font-bold text-primary">75%</div>
//                 <div className="text-xs text-muted-foreground">Avg. Progress</div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <CompletedApplications />
//         <OngoingApplications />
//       </div>
//     </DashboardSection>
//   );
// };


'use client'
import { useApplications } from '@/hooks/useApplications'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Users, FileText, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { ProgressTracker } from '@/components/dashboard/ProgressTracker'

export function TrackApplication() {
  const { data: apps, loading, error } = useApplications()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-muted-foreground">Loading your applications...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Failed to load applications</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  // Split by status
  // Treat 'paid' as an active (in-progress) application
  const inProgress = apps.filter(a => ['submitted', 'in_progress', 'payment_pending', 'on_hold', 'pending', 'paid', 'confirmed'].includes(a.status))
  const completed = apps.filter(a => ['approved', 'completed', 'delivered'].includes(a.status))
  const drafts = apps.filter(a => ['draft', 'incomplete'].includes(a.status))

  if (apps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          When you start a visa application, it will appear here for tracking and management.
        </p>
        <Button asChild>
          <Link href="/apply">Start New Application</Link>
        </Button>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      draft: { label: 'Draft', variant: 'outline' },
      incomplete: { label: 'Incomplete', variant: 'outline' },
      pending: { label: 'Pending', variant: 'secondary' },
      submitted: { label: 'Submitted', variant: 'secondary' },
      in_progress: { label: 'In Progress', variant: 'default' },
      payment_pending: { label: 'Payment Pending', variant: 'secondary' },
      on_hold: { label: 'On Hold', variant: 'destructive' },
      approved: { label: 'Approved', variant: 'default' },
      completed: { label: 'Completed', variant: 'default' },
      delivered: { label: 'Delivered', variant: 'default' },
    }
    const config = statusMap[status] || { label: status, variant: 'secondary' as const }
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  type StepStatus = 'completed' | 'processing' | 'pending'
  const stepsFrom = (app: any) => {
    const paid = ['paid','approved','completed','delivered'].includes(app.status)
    const booked = !!app.appointment_date
    const docsReady = !!(app.pdf_url)
    const steps: { name: string; status: StepStatus; date: string | null; details?: string }[] = [
      { name:'Payment Completed',     status: paid ? 'completed' : (app.status==='payment_pending'?'processing':'pending'), date: paid ? app.updated_at : null },
      { name:'Expert Connect',        status: paid && !booked ? 'processing' : paid ? 'completed' : 'pending', date: null },
      { name:'Appointment Booking',   status: booked ? 'completed' : (paid ? 'processing' : 'pending'), date: app.appointment_date },
      { name:'Documentation',         status: docsReady ? 'completed' : (booked ? 'processing' : 'pending'), date: null },
      { name:'Expert Review',         status: paid ? 'processing' : 'pending', date: null },
      { name:'Document Delivery',     status: 'pending', date: null },
      { name:'Application Submission',status: ['approved','completed','delivered'].includes(app.status) ? 'completed' : 'pending', date: null },
    ]
    return steps
  }

  return (
    <div className="space-y-8">
      {/* In Progress Applications */}
      {inProgress.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Active Applications</h2>
              <p className="text-muted-foreground">Applications currently being processed</p>
            </div>
            <Badge variant="secondary">{inProgress.length} Active</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inProgress.map(app => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{app.country}</CardTitle>
                    {getStatusBadge(app.status)}
                  </div>

                  {/* Steps tracker */}
                  <div className="pt-2 border-t mt-2">
                    {/* Import ProgressTracker at top */}
                    <ProgressTracker steps={stepsFrom(app)} />
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {app.visa_type} Visa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    {app.reference_code}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{app.traveler_count} traveler{app.traveler_count > 1 ? 's' : ''}</span>
                    </div>
                    
                    {app.appointment_date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{formatDate(app.appointment_date)}</span>
                        {app.appointment_time && (
                          <>
                            <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                            <span>{app.appointment_time}</span>
                          </>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Started {formatDate(app.started_at)}</span>
                    </div>
                  </div>

  {app.total_amount && (
                    <div className="pt-2 border-t">
                      <div className="text-sm font-semibold">
                        Total: €{app.total_amount}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Completed Applications */}
      {completed.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Completed Applications</h2>
              <p className="text-muted-foreground">Successfully processed applications</p>
            </div>
            <Badge variant="default" className="bg-green-100 text-green-800">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {completed.length} Completed
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completed.map(app => (
              <Card key={app.id} className="border-green-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{app.country}</CardTitle>
                    {getStatusBadge(app.status)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {app.visa_type} Visa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    {app.reference_code}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{app.traveler_count} traveler{app.traveler_count > 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Completed {formatDate(app.updated_at)}</span>
                    </div>
                  </div>

                  {app.pdf_url && (
                    <div className="pt-2 border-t">
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <a href={app.pdf_url} target="_blank" rel="noopener noreferrer">
                          Download Documents
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Draft Applications */}
      {drafts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Draft Applications</h2>
              <p className="text-muted-foreground">Incomplete applications you can continue</p>
            </div>
            <Badge variant="outline">{drafts.length} Draft{drafts.length > 1 ? 's' : ''}</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {drafts.map(app => (
              <Card key={app.id} className="border-dashed">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{app.country}</CardTitle>
                    {getStatusBadge(app.status)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {app.visa_type} Visa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    {app.reference_code}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{app.traveler_count} traveler{app.traveler_count > 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Started {formatDate(app.started_at)}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/apply/${app.country.toLowerCase()}?continue=${app.id}&session=${app.session_id}`}>
                        Continue Application
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
