import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'             // your auth helper
import { db } from '@/lib/db'                     // a Postgres client or Supabase server client

export async function GET() {
  const user = await getUser()
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  // if using Supabase server client, query the view with RLS:
  const { data, error } = await db
    .from('dashboard_summary')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? { ongoing_count: 0, completed_count: 0, pending_amount_cents: 0 })
}
