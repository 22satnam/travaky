// app/api/login/route.ts
import { NextResponse } from 'next/server'
import { generateToken } from '@/lib/auth'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = generateToken({ id: user.id, email: user.email })
  return NextResponse.json({ token })
}
