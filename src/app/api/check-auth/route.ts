
// import { verify } from 'jsonwebtoken'
// import { NextResponse } from 'next/server'

// export async function GET(req: Request) {
//   const cookieHeader = req.headers.get('cookie')
//   const token = cookieHeader?.split('token=')[1]?.split(';')[0]

//   if (!token) {
//     return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
//   }

//   try {
//     verify(token, process.env.JWT_SECRET!)
//     return NextResponse.json({ ok: true })
//   } catch {
//     return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
//   }
// }
import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'

export async function GET(req: Request) {
  const user = await getUser(req)
  return NextResponse.json({
    authenticated: !!user,
    user,
  })
}
