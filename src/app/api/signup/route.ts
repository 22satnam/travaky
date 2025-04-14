// app/api/signup/route.ts
import { NextResponse } from 'next/server'
import { generateToken } from '@/lib/auth'

let users: any[] = [] // Replace this with a DB like Supabase/Postgres later

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password, firstname, lastname } = body

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const existing = users.find(u => u.email === email)
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const user = { id: Date.now(), email, password, firstname, lastname }
  users.push(user)

  const token = generateToken({ id: user.id, email: user.email })
  return NextResponse.json({ token })
}
