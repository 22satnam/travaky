import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supa = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data, error } = await supa.from('users').select('*').order('created_at')
  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ data })
}
