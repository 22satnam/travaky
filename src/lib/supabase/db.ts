import { supabase } from '@/lib/supabase/client'

export async function getRedirectDataByEmailAndPaymentId(email: string, paymentId: string) {
  const { data, error } = await supabase
    .from('visa_applications')
    .select('*')
    .eq('email', email)
    .order('submittedAt', { ascending: false })
    .limit(1)

  if (error || !data || data.length === 0) {
    return null
  }

  const record = data[0]

  // Construct the confirmation URL
  const redirectParams = new URLSearchParams({
    plan: record.plan || 'Docs on Call',
    name: `${record.firstName ?? ''} ${record.lastName ?? ''}`,
    country: record.country,
    date: record.date ?? 'N/A',
    time: record.time ?? 'N/A',
    address: record.address ?? 'N/A',
    pdf: record.pdfUrl,
    id: paymentId, // override with Razorpay ID
  }).toString()

  return `/confirmation?${redirectParams}`
}
