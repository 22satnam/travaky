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

export function TrackApplication() {
  const { data: apps, loading } = useApplications()

  if (loading) return <div className="text-sm text-muted-foreground">Loading applications…</div>

  // Split by status according to your cards
  const inProgress = apps.filter(a => ['submitted','in_progress','payment_pending','on_hold'].includes(a.status))
  const completed  = apps.filter(a => ['approved','completed'].includes(a.status))

  return (
    <div className="space-y-6">
      {/* Example: your "Payment Completed Applications" list becomes */}
      <section className="section-card">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Payment Completed Applications</h3>
          <span className="text-sm text-muted-foreground">{inProgress.length} In Progress</span>
        </div>

        <div className="mt-4 space-y-4">
          {inProgress.map(app => (
            <article key={app.id} className="rounded-xl border p-4 hover-lift">
              <div className="text-xs font-semibold tracking-wide bg-secondary inline-flex px-3 py-1 rounded-full">
                {app.reference_code}
              </div>
              <h4 className="mt-3 text-lg font-semibold">{app.country} – {app.visa_type} Visa</h4>
              <p className="mt-1 text-muted-foreground text-sm">
                Started: {app.started_at ? new Date(app.started_at).toLocaleDateString() : '—'}
              </p>
              {/* You can also fetch steps to show 4/7 completed */}
            </article>
          ))}
        </div>
      </section>

      {/* A completed section can render completed[] exactly like your current card UI */}
    </div>
  )
}
