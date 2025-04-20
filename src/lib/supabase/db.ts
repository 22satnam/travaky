// import { supabase } from '@/lib/supabase/client'

// export async function createVisaApplication({
//   name,
//   email,
//   phone,
//   country,
//   pdfUrl,
//   submittedAt,
// }: {
//   name: string
//   email: string
//   phone: string
//   country: string
//   pdfUrl: string
//   submittedAt: string
// }) {
//   const { data, error } = await supabase
//     .from('visa_applications')
//     .insert([
//       {
//         first_name: name,
//         email,
//         phone,
//         country,
//         pdf_url: pdfUrl,
//         created_at: submittedAt,
//       },
//     ])
//     .select()

//   if (error) throw error
//   return data?.[0]?.session_id ?? ''
// }

// export async function getRedirectDataByEmailAndPaymentId(email: string, paymentId: string) {
//   const { data, error } = await supabase
//     .from('visa_applications')
//     .select('*')
//     .eq('email', email)
//     .order('submittedAt', { ascending: false })
//     .limit(1)

//   if (error || !data || data.length === 0) {
//     return null
//   }

//   const record = data[0]

//   const redirectParams = new URLSearchParams({
//     plan: record.plan || 'Docs on Call',
//     name: `${record.firstName ?? ''} ${record.lastName ?? ''}`,
//     country: record.country,
//     date: record.date ?? 'N/A',
//     time: record.time ?? 'N/A',
//     address: record.address ?? 'N/A',
//     pdf: record.pdfUrl,
//     id: paymentId,
//   }).toString()

//   return `/confirmation?${redirectParams}`
// }
import { supabase } from './client'

export async function createVisaApplication(form: Record<string, any>, pdfUrl: string, sessionId: string) {
  const { data, error } = await supabase
    .from('visa_applications')
    .insert([{
      session_id: sessionId,
      email: form["Email Address"],
      first_name: form["First Name"],
      last_name: form["Last Name"],
      country: form["visaCountry"] ?? form["Country"],
      pdf_url: pdfUrl,
      created_at: new Date().toISOString(),

      // Additional optional fields if used in confirmation:
      plan: form["selectedPlan"] ?? 'Docs on Call',
      address: form["Current Address"],
      date: form["Appointment Date"],
      time: form["Appointment Time"],
    }])
    .select()

  if (error) throw error
  return data?.[0]?.session_id ?? ''
}
