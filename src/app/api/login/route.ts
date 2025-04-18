// // // // // app/api/login/route.ts
// // // // import { NextResponse } from 'next/server'
// // // // import { generateToken } from '@/lib/auth'

// // // // export async function POST(req: Request) {
// // // //   const body = await req.json()
// // // //   const { email, password } = body

// // // //   const user = users.find(u => u.email === email && u.password === password)
// // // //   if (!user) {
// // // //     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
// // // //   }

// // // //   const token = generateToken({ id: user.id, email: user.email })
// // // //   return NextResponse.json({ token })
// // // // }
// // // // app/api/login/route.ts
// // // import { NextResponse } from 'next/server'
// // // import { generateToken } from '@/lib/auth'

// // // // ✅ 1. Mock user data (replace with Supabase later)
// // // const users = [
// // //   { id: 1, email: 'admin@travaky.com', password: 'admin123' },
// // //   { id: 2, email: 'test@example.com', password: 'testpass' },
// // // ]

// // // export async function POST(req: Request) {
// // //   const body = await req.json()
// // //   const { email, password } = body

// // //   // ✅ 2. Check if user exists
// // //   const user = users.find(u => u.email === email)

// // //   if (!user) {
// // //     return NextResponse.json(
// // //       {
// // //         error: 'User not found. Would you like to sign up?',
// // //         signup: true,
// // //       },
// // //       { status: 404 }
// // //     )
// // //   }

// // //   if (user.password !== password) {
// // //     return NextResponse.json(
// // //       { error: 'Incorrect password' },
// // //       { status: 401 }
// // //     )
// // //   }

// // //   // ✅ 3. Successful login with real token generator
// // //   const token = generateToken({ id: user.id, email: user.email })

// // //   return NextResponse.json({
// // //     message: 'Login successful',
// // //     token,
// // //   })
// // // }
// // // src/app/api/login/route.ts
// // import { NextResponse } from 'next/server'
// // import { createClient } from '@supabase/supabase-js'
// // import { generateToken } from '@/lib/auth'

// // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// // export async function POST(req: Request) {
// //   const { email, password } = await req.json()

// //   const { data: user, error } = await supabase
// //     .from('users')
// //     .select('*')
// //     .eq('email', email)
// //     .single()

// //   if (error || !user) {
// //     return NextResponse.json({ error: 'User not found' }, { status: 404 })
// //   }

// //   if (user.password !== password) {
// //     return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
// //   }

// //   const token = generateToken({ id: user.id, email: user.email })
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
//   const { email, password } = await req.json()

//   const { data: user, error } = await supabase
//     .from('users')
//     .select('*')
//     .eq('email', email)
//     .single()

//   if (error || !user) {
//     return NextResponse.json({ error: 'User not found' }, { status: 404 })
//   }

//   if (user.password !== password) {
//     return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
//   }

//   const token = sign(
//     { id: user.id, email: user.email },
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
  const { email, password, redirectTo } = await req.json()

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (error || !user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const token = sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  const response = NextResponse.json({ success: true, redirectTo: redirectTo || '/' })
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return response
}
