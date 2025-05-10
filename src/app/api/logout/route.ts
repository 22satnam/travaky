
// import { NextResponse } from 'next/server'

// export async function GET(req: Request) {
//   const response = NextResponse.redirect(new URL('/', req.url))

//   response.cookies.set('token', '', {
//     httpOnly: true,
//     secure: true,
//     sameSite: 'lax',
//     path: '/',
//     maxAge: 0,
//   })

//   return response
// }


import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL('/', req.url))
  const expired = { ...{ httpOnly:true, secure:true, sameSite:'lax' as const, path:'/' }, maxAge:0 }
  ;['token','uid','email','role'].forEach(name => res.cookies.set(name, '', expired))
  return res
}
