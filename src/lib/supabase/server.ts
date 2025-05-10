import { createClient } from '@supabase/supabase-js'

export function supabaseServer(service = false) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    service ? process.env.SUPABASE_SERVICE_ROLE_KEY! : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
