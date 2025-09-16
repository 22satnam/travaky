import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'

// If your project already has a supabase server client helper, use that instead.
function supabaseServer() {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const SUPABASE_ANON = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: { persistSession: false }
  })
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    let userId = cookieStore.get('travaky_user_id')?.value
                || cookieStore.get('uid')?.value
                || ''
    if (!userId) {
      const token = cookieStore.get('token')?.value
      if (token) {
        try { userId = String((verify(token, process.env.JWT_SECRET!) as any).id) } catch {}
      }
    }
    if (!userId) {
      // In dev, don’t 401 — just return empty dashboard data
      return NextResponse.json({ stats: { total: 0, approved: 0, in_progress: 0, rejected: 0 }, recent: [], drafts: [] })
    }

    const supabase = supabaseServer()

    // recent (non-drafts) — latest 10
    const { data: recent, error: rErr } = await supabase
      .from('visa_applications')
      .select('id,country,plan,travelers,status,created_at,updated_at,tracking_id,pdf_url,invoice_url')
      .eq('user_id', userId)
      .neq('status', 'draft')
      .order('updated_at', { ascending: false })
      .limit(10)

    if (rErr) throw rErr

    // drafts
    const { data: drafts, error: dErr } = await supabase
      .from('visa_applications')
      .select('id,country,plan,travelers,status,created_at,updated_at')
      .eq('user_id', userId)
      .eq('status', 'draft')
      .order('updated_at', { ascending: false })
      .limit(10)

    if (dErr) throw dErr

    // stats
    const { data: all, error: aErr } = await supabase
      .from('visa_applications')
      .select('status')
      .eq('user_id', userId)

    if (aErr) throw aErr

    const stats = {
      total: all?.length || 0,
      approved: all?.filter(x => x.status === 'approved').length || 0,
      in_progress: all?.filter(x => x.status === 'in_progress' || x.status === 'submitted' || x.status === 'paid').length || 0,
      rejected: all?.filter(x => x.status === 'rejected').length || 0,
    }

    return NextResponse.json({ stats, recent: recent || [], drafts: drafts || [] })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unexpected error', stats: { total: 0, approved: 0, in_progress: 0, rejected: 0 }, recent: [], drafts: [] }, { status: 200 })
  }
}
