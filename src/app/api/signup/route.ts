// // // // app/api/signup/route.ts
// // // import { NextResponse } from 'next/server'
// // // import { generateToken } from '@/lib/auth'

// // // let users: any[] = [] // Replace this with a DB like Supabase/Postgres later

// // // export async function POST(req: Request) {
// // //   const body = await req.json()
// // //   const { email, password, firstname, lastname } = body

// // //   if (!email || !password) {
// // //     return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
// // //   }

// // //   const existing = users.find(u => u.email === email)
// // //   if (existing) {
// // //     return NextResponse.json({ error: 'User already exists' }, { status: 400 })
// // //   }

// // //   const user = { id: Date.now(), email, password, firstname, lastname }
// // //   users.push(user)

// // //   const token = generateToken({ id: user.id, email: user.email })
// // //   return NextResponse.json({ token })
// // // }
// // // src/app/api/signup/route.ts
// // import { NextResponse } from 'next/server'
// // import { createClient } from '@supabase/supabase-js'
// // import { generateToken } from '@/lib/auth'

// // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// // export async function POST(req: Request) {
// //   const { email, password, firstname, lastname } = await req.json()

// //   const { data: existing } = await supabase
// //     .from('users')
// //     .select('*')
// //     .eq('email', email)
// //     .single()

// //   if (existing) {
// //     return NextResponse.json({ error: 'User already exists' }, { status: 400 })
// //   }

// //   const { data, error } = await supabase.from('users').insert([
// //     { email, password, firstname, lastname },
// //   ])

// //   if (error) return NextResponse.json({ error: 'Signup failed' }, { status: 500 })

// //   const token = generateToken({ id: data?.[0]?.id, email })
// //   return NextResponse.json({ token })
// // }
// import { NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'
// import { sign } from 'jsonwebtoken'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// export async function POST(req: Request) {
//   const { email, password, firstname, lastname } = await req.json()

//   const { data: existing } = await supabase
//     .from('users')
//     .select('*')
//     .eq('email', email)
//     .single()

//   if (existing) {
//     return NextResponse.json({ error: 'User already exists' }, { status: 400 })
//   }

//   const { data, error } = await supabase.from('users').insert([
//     { email, password, firstname, lastname }
//   ])

//   if (error) {
//     return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
//   }

//   const token = sign(
//     { id: data?.[0]?.id, email },
//     process.env.JWT_SECRET!,
//     { expiresIn: '7d' }
//   )

//   return NextResponse.json({ token })
// }
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sign } from 'jsonwebtoken'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const { email, password, firstname, lastname, redirectTo } = await req.json()

  const { data: existing } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password, firstname, lastname }])
    .select()

  if (error) {
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }

  const token = sign(
    { id: data?.[0]?.id, email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  const response = NextResponse.json({ success: true, redirectTo: redirectTo || '/' })
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
