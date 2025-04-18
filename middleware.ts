// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { verify } from 'jsonwebtoken'

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('token')?.value

//   const PUBLIC_PATHS = ['/', '/login', '/signup', '/api', '/_next', '/favicon.ico']

//   const isPublic = PUBLIC_PATHS.some((path) => req.nextUrl.pathname.startsWith(path))

//   if (isPublic) {
//     return NextResponse.next()
//   }

//   try {
//     if (!token) throw new Error("Missing token")
//     verify(token, process.env.JWT_SECRET!)
//     return NextResponse.next()
//   } catch (error) {
//     const redirectUrl = new URL('/login', req.url)
//     redirectUrl.searchParams.set('redirect', req.nextUrl.pathname)
//     return NextResponse.redirect(redirectUrl)
//   }
// }
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  const PUBLIC_PATHS = ['/', '/login', '/signup', '/api', '/_next', '/favicon.ico']

  const isPublic = PUBLIC_PATHS.some((path) => req.nextUrl.pathname.startsWith(path))

  if (isPublic) {
    return NextResponse.next()
  }

  try {
    if (!token) throw new Error("Missing token")
    verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch (error) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
}

export const config = {
  matcher: ['/visa-form/:path*', '/apply/:path*', '/confirmation/:path*'],
}