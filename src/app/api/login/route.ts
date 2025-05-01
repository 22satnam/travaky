
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
