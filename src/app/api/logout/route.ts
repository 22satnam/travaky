
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const response = NextResponse.redirect(new URL('/', req.url))

  response.cookies.set('token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })

  return response
}
