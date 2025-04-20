import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function uploadPDFToSupabase(fileName: string, pdfBytes: Uint8Array) {
  const { error } = await supabase.storage
    .from('filled-visas')
    .upload(`visas/${fileName}`, pdfBytes, {
      contentType: 'application/pdf',
      upsert: true,
    })

  if (error) throw error

  const { data } = supabase.storage.from('filled-visas').getPublicUrl(`visas/${fileName}`)
  return data
}
