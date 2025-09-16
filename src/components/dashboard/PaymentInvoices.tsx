// import { Receipt, Download, Eye, CreditCard, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { DashboardSection } from "./DashboardSection";

// const invoices = [
//   {
//     id: "INV-2024-001245",
//     applicationId: "VSA-2024-001245",
//     country: "Germany",
//     visaType: "Student Visa",
//     amount: "₹45,000",
//     date: "2024-01-15",
//     status: "Paid",
//     paymentMethod: "Credit Card",
//     description: "Visa application processing fee"
//   },
//   {
//     id: "INV-2024-001246", 
//     applicationId: "VSA-2024-001246",
//     country: "Canada",
//     visaType: "Work Visa",
//     amount: "₹52,000",
//     date: "2024-01-12",
//     status: "Paid",
//     paymentMethod: "UPI",
//     description: "Visa application + documentation service"
//   },
//   {
//     id: "INV-2024-001247",
//     applicationId: "VSA-2024-001247", 
//     country: "Australia",
//     visaType: "Tourist Visa",
//     amount: "₹38,000",
//     date: "2024-01-10",
//     status: "Refunded",
//     paymentMethod: "Net Banking",
//     description: "Visa application fee (Refunded due to cancellation)"
//   }
// ];

// export const PaymentInvoices = () => {
//   return (
//     <DashboardSection
//       title="Payment Invoices"
//       description="View and download all payment receipts and invoices"
//       icon={Receipt}
//       primaryAction={{
//         label: "Download All",
//         onClick: () => console.log("Download all invoices")
//       }}
//     >
//       <div className="space-y-4">
//         {invoices.map((invoice) => (
//           <div 
//             key={invoice.id} 
//             className="p-6 bg-gradient-card rounded-xl border hover-lift"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h4 className="font-bold text-lg text-foreground mb-1">{invoice.id}</h4>
//                 <p className="text-sm text-muted-foreground">
//                   {invoice.country} • {invoice.visaType} • {invoice.date}
//                 </p>
//               </div>
              
//               <div className="text-right">
//                 <div className="text-xl font-bold text-primary mb-1">{invoice.amount}</div>
//                 <Badge 
//                   variant={invoice.status === "Paid" ? "default" : invoice.status === "Refunded" ? "secondary" : "destructive"}
//                   className="text-xs"
//                 >
//                   {invoice.status}
//                 </Badge>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <CreditCard className="h-4 w-4 text-muted-foreground" />
//                   <span className="text-sm text-muted-foreground">Payment Method:</span>
//                   <span className="text-sm font-medium text-foreground">{invoice.paymentMethod}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Receipt className="h-4 w-4 text-muted-foreground" />
//                   <span className="text-sm text-muted-foreground">Application ID:</span>
//                   <span className="text-sm font-medium text-primary">{invoice.applicationId}</span>
//                 </div>
//               </div>
              
//               <div>
//                 <p className="text-sm text-muted-foreground mb-1">Description:</p>
//                 <p className="text-sm text-foreground">{invoice.description}</p>
//               </div>
//             </div>
            
//             <div className="flex gap-3 pt-4 border-t border-border">
//               <Button variant="outline" size="sm" className="flex-1">
//                 <Eye className="h-4 w-4 mr-2" />
//                 View Details
//               </Button>
//               <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-gradient-hover text-primary-foreground">
//                 <Download className="h-4 w-4 mr-2" />
//                 Download Invoice
//               </Button>
//             </div>
//           </div>
//         ))}
        
//         <div className="pt-6 border-t border-border">
//           <div className="bg-primary/5 rounded-xl p-4 text-center">
//             <h4 className="font-medium text-foreground mb-2">Need help with payments?</h4>
//             <p className="text-sm text-muted-foreground mb-3">
//               Contact our billing support for any payment related queries
//             </p>
//             <Button variant="outline" size="sm">
//               <MessageCircle className="h-4 w-4 mr-2" />
//               Contact Billing Support
//             </Button>
//           </div>
//         </div>
//       </div>
//     </DashboardSection>
//   );
// };


'use client'
import { useEffect, useState } from 'react'
import { Receipt, Download, Eye, CreditCard, MessageCircle, AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Invoice {
  id: string
  booking_id: string
  amount: number
  status: string
  issued_at: string
  pdf_url?: string
  razorpay_payment_id?: string
  application?: {
    country: string
    reference_code: string
    visa_type: string
  }
}

export default function PaymentInvoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const res = await fetch('/api/invoices', {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      })
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      }
      
      const data = await res.json()
      setInvoices(Array.isArray(data) ? data : [])
    } catch (err: any) {
      console.error('Error fetching invoices:', err)
      setError(err.message || 'Failed to fetch invoices')
      setInvoices([])
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'pending':
      case 'unpaid':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'failed':
      case 'refunded':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Receipt className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      paid: { label: 'Paid', variant: 'default' },
      pending: { label: 'Pending', variant: 'secondary' },
      unpaid: { label: 'Unpaid', variant: 'outline' },
      failed: { label: 'Failed', variant: 'destructive' },
      refunded: { label: 'Refunded', variant: 'secondary' },
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

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-muted-foreground">Loading your invoices...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Failed to load invoices</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={fetchInvoices}>Try Again</Button>
        </div>
      </div>
    )
  }

  if (invoices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Receipt className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No invoices yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Your payment invoices and receipts will appear here once you complete an application.
        </p>
        <Button asChild>
          <a href="/apply">Start New Application</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Payment Invoices</h2>
          <p className="text-muted-foreground">View and download all payment receipts and invoices</p>
        </div>
        <Badge variant="secondary">{invoices.length} Invoice{invoices.length > 1 ? 's' : ''}</Badge>
      </div>

      <div className="grid gap-4">
        {invoices.map((invoice) => (
          <Card key={invoice.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Receipt className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">Invoice #{invoice.id}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>Issued {formatDate(invoice.issued_at)}</span>
                      {invoice.application && (
                        <>
                          <span>•</span>
                          <span>{invoice.application.country} • {invoice.application.visa_type}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(invoice.status)}
                      {getStatusBadge(invoice.status)}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {formatAmount(invoice.amount)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  {invoice.application?.reference_code && (
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Reference:</span>
                      <span className="text-sm font-medium text-primary">{invoice.application.reference_code}</span>
                    </div>
                  )}
                  {invoice.razorpay_payment_id && (
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Payment ID:</span>
                      <span className="text-sm font-mono text-foreground">{invoice.razorpay_payment_id}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Description:</p>
                  <p className="text-sm text-foreground">
                    Visa application processing fee for {invoice.application?.country || 'visa application'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                {invoice.pdf_url && (
                  <Button asChild size="sm" className="flex-1">
                    <a href={invoice.pdf_url} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download Invoice
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-6 border-t">
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
            <h4 className="font-medium mb-2">Need help with payments?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our billing support for any payment related queries or refund requests.
            </p>
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Billing Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
