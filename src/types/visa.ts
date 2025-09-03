export type AppStatus = 'paid' | 'in_progress' | 'submitted' | 'approved' | 'rejected' | 'draft'
export type PlanName = 'Basic' | 'Express' | 'Door' | string

export type VisaApplication = {
  id: string
  user_id: string
  country: string
  plan: PlanName
  travelers: number
  status: AppStatus
  created_at: string
  updated_at: string
  tracking_id?: string
  pdf_url?: string
  invoice_url?: string
}
