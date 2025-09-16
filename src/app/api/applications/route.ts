// import { NextResponse } from 'next/server'
// import { getUser } from '@/lib/auth'
// import { db } from '@/lib/db'

// export async function GET(req: Request) {
//   const user = await getUser()
//   if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

//   const url = new URL(req.url)
//   const status = url.searchParams.get('status')   // optional filter

//   let query = db.from('applications').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
//   if (status) query = query.eq('status', status)

//   const { data, error } = await query
//   if (error) return NextResponse.json({ error: error.message }, { status: 500 })
//   return NextResponse.json(data)
// }

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'
import { supabaseServer } from '@/lib/supabase/server'

// GET /api/applications  -> returns current user's visa applications (bookings)
export async function GET(req: Request) {
  try {
    // Get user from JWT token
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }

    const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }
    console.log('User ID from token:', userId)

    // Query visa_applications table (your actual bookings table)
    const supabase = supabaseServer(true)
    const { data, error } = await supabase
      .from('visa_applications')
      .select(`
        id,
        country,
        visa_type,
        status,
        plan,
        traveler_count,
        appointment_date,
        appointment_time,
        created_at,
        updated_at,
        total_amount,
        pdf_url,
        email,
        phone,
        session_id,
        reference_id
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Raw applications data:', data)
    console.log('Found applications count:', data?.length || 0)


    // Transform data to match expected format
    const applications = (data || []).map(app => ({
      id: app.id,
      country: app.country || 'Unknown',
      visa_type: app.visa_type || 'Tourist',
      status: app.status || 'pending',
      plan: app.plan || 'standard',
      traveler_count: app.traveler_count || 1,
      appointment_date: app.appointment_date,
      appointment_time: app.appointment_time,
      created_at: app.created_at,
      updated_at: app.updated_at || app.created_at,
      reference_code: app.reference_id || `TVK-${String(app.id).slice(0, 8)}`,
      started_at: app.created_at,
      total_amount: app.total_amount,
      pdf_url: app.pdf_url,
      email: app.email,
      phone: app.phone,
      session_id: app.session_id
    }))

    return NextResponse.json(applications)
  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
