// import { cookies } from 'next/headers'
// import { NextResponse } from 'next/server'
// import { verify } from 'jsonwebtoken'
// import { supabaseServer } from '@/lib/supabase/server'

// export async function GET() {
//   try {
//     const token = (await cookies()).get('token')?.value
//     if (!token) throw new Error('Not authenticated')

//     const { id, role } = verify(token, process.env.JWT_SECRET!) as { id:number; role?:string }

//     const supabase = supabaseServer(role === 'admin')

//     const { data, error } = role === 'admin'
//       ? await supabase.from('visa_applications').select('*').order('created_at', { ascending:false })
//       : await supabase.from('visa_applications').select('*').eq('user_id', id).order('created_at', { ascending:false })

//     if (error) throw error
//     return NextResponse.json({ data })
//   } catch (err:any) {
//     return NextResponse.json({ error: err.message }, { status: 401 })
//   }
// }


import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    const token = (await cookies()).get('token')?.value
    if (!token) throw new Error('Not authenticated')

    const { email, role } = verify(token, process.env.JWT_SECRET!) as {
      email: string
      role?: string
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const query = supabase
      .from('visa_applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (role !== 'admin') query.eq('email', email)

    const { data, error } = await query
    if (error) throw error

    return NextResponse.json({ data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 })
  }
}
