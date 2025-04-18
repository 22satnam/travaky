// import { verify } from 'jsonwebtoken'
// import { NextResponse } from 'next/server'

// export async function GET(req: Request) {
//   const token = req.headers.get('cookie')?.split('token=')[1]?.split(';')[0]

//   if (!token) return NextResponse.json({ error: 'No token' }, { status: 401 })

//   try {
//     verify(token, process.env.JWT_SECRET!)
//     return NextResponse.json({ ok: true })
//   } catch {
//     return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
//   }
// }
import { verify } from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const cookieHeader = req.headers.get('cookie')
  const token = cookieHeader?.split('token=')[1]?.split(';')[0]

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    verify(token, process.env.JWT_SECRET!)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
