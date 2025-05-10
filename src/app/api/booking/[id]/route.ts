// import { cookies } from 'next/headers'
// import { NextRequest, NextResponse } from 'next/server'
// import { verify } from 'jsonwebtoken'
// import { supabaseServer } from '@/lib/supabase/server'

// export async function GET(req: NextRequest, { params }: { params:{ id:string } }) {
//   try {
//     const token = (await cookies()).get('token')?.value
//     if (!token) throw new Error('Not authenticated')

//     const { id:userId, role } = verify(token, process.env.JWT_SECRET!) as { id:number; role?:string }
//     const supabase = supabaseServer(role === 'admin')

//     const query = supabase
//       .from('visa_applications')
//       .select('*, invoices(*)')
//       .eq('id', params.id)
//       .single()

//     if (role !== 'admin') query.eq('user_id', userId)

//     const { data, error } = await query
//     if (error || !data) throw error || new Error('Not found')

//     return NextResponse.json({ data })
//   } catch (err:any) {
//     return NextResponse.json({ error: err.message }, { status: 401 })
//   }
// }


import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },          // ← NEW: params provided here
) {
  try {
    /* ─── auth ────────────────────────────────────────────── */
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Unauthorised')

    const { id: userId, role } = verify(token, process.env.JWT_SECRET!) as {
      id: number; role?: string
    }

    /* ─── query ───────────────────────────────────────────── */
    const supabase = supabaseServer(true)
    const bookingId = Number(params.id)                       // ← ensure numeric

    let query = supabase
      .from('visa_applications')
      .select(`
        *,
        invoices(*),
        flight_options(*),
        hotel_options(*),
        user_documents(*)
      `)
      .eq('id', bookingId)

    if (role !== 'admin') query = query.eq('user_id', userId)

    const { data, error } = await query.single()
    if (error) throw error
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({ data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 })
  }
}
