
// import { NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'
// import { sign } from 'jsonwebtoken'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// export async function POST(req: Request) {
//   const { email, password, firstname, lastname, redirectTo } = await req.json()

//   const { data: existing } = await supabase
//     .from('users')
//     .select('*')
//     .eq('email', email)
//     .single()

//   if (existing) {
//     return NextResponse.json({ error: 'User already exists' }, { status: 400 })
//   }

//   const { data, error } = await supabase
//     .from('users')
//     .insert([{ email, password, firstname, lastname }])
//     .select()

//   if (error) {
//     return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
//   }

//   const token = sign(
//     { id: data?.[0]?.id, email },
//     process.env.JWT_SECRET!,
//     { expiresIn: '7d' }
//   )

//   const response = NextResponse.json({ success: true, redirectTo: redirectTo || '/' })
//   response.cookies.set('token', token, {
//     httpOnly: true,
//     secure: true,
//     sameSite: 'lax',
//     path: '/',
//     maxAge: 60 * 60 * 24 * 7,
//   })

//   return response
// }


import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sign } from 'jsonwebtoken'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export async function POST(req: Request) {
  const { email, password, firstname, lastname, redirectTo } = await req.json()

  const { data: exists } = await supabase.from('users').select('id').eq('email', email).single()
  if (exists) return NextResponse.json({ error: 'User already exists' }, { status: 400 })

  const { data } = await supabase
    .from('users')
    .insert([{ email, password, firstname, lastname, role: 'user' }])
    .select()
    .single()

  const token = sign({ id: data.id, email: data.email, role: 'user' },
                     process.env.JWT_SECRET!, { expiresIn: '7d' })

  const res = NextResponse.json({ success: true, redirectTo: redirectTo || '/dashboard' })
  const cookie = { httpOnly: true, secure: true, sameSite: 'lax' as const, path: '/', maxAge: 60*60*24*7 }
  res.cookies.set('token', token, cookie)
  res.cookies.set('uid',   String(data.id), cookie)
  res.cookies.set('email', encodeURIComponent(data.email), cookie)
  res.cookies.set('role',  'user', cookie)
  return res
}
