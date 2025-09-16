// import { FileText, Download, Upload, Receipt } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { DashboardSection } from "./DashboardSection";

// const documents = [
//   {
//     id: "1",
//     name: "Passport Copy",
//     type: "PDF",
//     size: "2.1 MB",
//     uploadDate: "2024-01-15",
//     status: "Verified"
//   },
//   {
//     id: "2", 
//     name: "Payment Receipt - VSA-2024-001245",
//     type: "PDF",
//     size: "156 KB",
//     uploadDate: "2024-01-15",
//     status: "Completed"
//   },
//   {
//     id: "3",
//     name: "Educational Certificate",
//     type: "PDF", 
//     size: "1.8 MB",
//     uploadDate: "2024-01-16",
//     status: "Under Review"
//   }
// ];

// export const MyDocuments = () => {
//   return (
//     <DashboardSection
//       title="My Documents"
//       description="Store and access all visa documents and payment invoices"
//       icon={FileText}
//       primaryAction={{
//         label: "Upload Document",
//         onClick: () => console.log("Upload document")
//       }}
//     >
//       <div className="space-y-3">
//         {documents.map((doc) => (
//           <div 
//             key={doc.id} 
//             className="flex items-center justify-between p-4 bg-gradient-card rounded-xl border hover-lift"
//           >
//             <div className="flex items-center gap-3">
//               <div className="p-2 rounded-lg bg-secondary">
//                 {doc.name.includes("Receipt") ? (
//                   <Receipt className="h-4 w-4 text-secondary-foreground" />
//                 ) : (
//                   <FileText className="h-4 w-4 text-secondary-foreground" />
//                 )}
//               </div>
//               <div>
//                 <h4 className="font-medium text-foreground">{doc.name}</h4>
//                 <p className="text-xs text-muted-foreground">
//                   {doc.type} • {doc.size} • {doc.uploadDate}
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <Badge 
//                 variant={doc.status === "Verified" || doc.status === "Completed" ? "default" : "secondary"}
//                 className="text-xs"
//               >
//                 {doc.status}
//               </Badge>
//               <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                 <Download className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         ))}
        
//         <div className="pt-4 border-t border-border">
//           <Button variant="outline" className="w-full">
//             <Upload className="h-4 w-4 mr-2" />
//             Add New Document
//           </Button>
//         </div>
//       </div>
//     </DashboardSection>
//   );
// };

'use client'
import { useEffect, useState } from 'react'
import { FileText, Download, Upload, Receipt, AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Document {
  id: string
  name: string
  url?: string
  status: string
  created_at: string
  application_id: string
  user_id: string
}

export default function MyDocuments() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState<Record<string, boolean>>({})

  async function fetchDocuments() {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/documents', {
        credentials: 'include'
      })
      if (!response.ok) {
        throw new Error('Failed to fetch documents')
      }
      const json = await response.json()
      console.log('Documents API response:', json)
      setDocuments(json)
    } catch (err: any) {
      console.error('Error fetching documents:', err)
      setError(err.message || 'Failed to fetch documents')
      setDocuments([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
      case 'verified':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'pending':
      case 'under_review':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      approved: { label: 'Approved', variant: 'default' },
      verified: { label: 'Verified', variant: 'default' },
      pending: { label: 'Pending', variant: 'secondary' },
      under_review: { label: 'Under Review', variant: 'secondary' },
      rejected: { label: 'Rejected', variant: 'destructive' },
      requested: { label: 'Requested', variant: 'outline' },
    }
    const config = statusMap[status.toLowerCase()] || { label: status, variant: 'secondary' as const }
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-muted-foreground">Loading your documents...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Failed to load documents</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={fetchDocuments}>Try Again</Button>
        </div>
      </div>
    )
  }

  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No documents yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Your uploaded documents and generated PDFs will appear here once you start an application.
        </p>
        <Button asChild>
          <a href="/apply">Start New Application</a>
        </Button>
      </div>
    )
  }

  // Group by application_id
  const groups = documents.reduce<Record<string, Document[]>>((acc, d) => {
    const key = d.application_id || 'unknown'
    acc[key] = acc[key] ? [...acc[key], d] : [d]
    return acc
  }, {})

  const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Documents</h2>
          <p className="text-muted-foreground">Manage your uploaded documents and generated PDFs</p>
        </div>
        <Badge variant="secondary">{documents.length} Document{documents.length > 1 ? 's' : ''}</Badge>
      </div>

      <div className="space-y-4">
        {Object.entries(groups).map(([appId, docs]) => (
          <Card key={appId} className="border">
            <CardHeader className="py-3 cursor-pointer" onClick={() => toggle(appId)}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Booking #{appId}</CardTitle>
                <Badge variant="outline">{docs.length} item{docs.length>1?'s':''}</Badge>
              </div>
              <CardDescription>Documents related to this booking</CardDescription>
            </CardHeader>
            {open[appId] !== false && (
              <CardContent className="p-0">
                <div className="divide-y">
                  {docs.map(doc => (
                    <div key={doc.id} className="flex items-start justify-between px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-secondary">
                          {doc.name.toLowerCase().includes('receipt') || doc.name.toLowerCase().includes('invoice') ? (
                            <Receipt className="h-4 w-4 text-secondary-foreground" />
                          ) : (
                            <FileText className="h-4 w-4 text-secondary-foreground" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-3">
                            <span>Uploaded {formatDate(doc.created_at)}</span>
                            <span className="flex items-center gap-1">{getStatusIcon(doc.status)} {getStatusBadge(doc.status)}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        {doc.url && (
                          <Button asChild variant="outline" size="sm">
                            <a href={doc.url} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

export { MyDocuments }
