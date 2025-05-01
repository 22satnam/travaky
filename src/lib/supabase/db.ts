
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
