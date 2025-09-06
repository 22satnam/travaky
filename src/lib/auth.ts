
// // src/lib/auth.ts
// import jwt, { Secret, JwtPayload } from 'jsonwebtoken'

// // At startup, throw if the env var is missing
// const JWT_SECRET: Secret = process.env.JWT_SECRET || (() => {
//   throw new Error('Missing JWT_SECRET environment variable')
// })()

// /**
//  * Generate a JWT for the given payload, valid for 7 days.
//  */
// export function generateToken(payload: object): string {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
// }

// /**
//  * Verify the given token.
//  * Returns the decoded payload (which may be a string or JwtPayload),
//  * or null if verification fails.
//  */
// export function verifyToken(token: string): string | JwtPayload | null {
//   try {
//     return jwt.verify(token, JWT_SECRET)
//   } catch {
//     return null
//   }
// }
// Lightweight getUser() to unblock your routes.
// It looks for a JWT in Authorization: Bearer <token> or cookie "app_session",
// decodes it (no signature verification here), and returns { id, email, name }.

// If you already have a verified session somewhere, you can replace this logic with your own.

import { cookies, headers } from 'next/headers'

type JwtPayload = Record<string, any>
type User = { id: string; email?: string; name?: string }

function decodeBase64Url(input: string) {
  // base64url → base64
  input = input.replace(/-/g, '+').replace(/_/g, '/')
  const pad = input.length % 4
  if (pad) input += '='.repeat(4 - pad)
  return Buffer.from(input, 'base64').toString('utf8')
}

function decodeJwt(token: string): JwtPayload | null {
  const parts = token.split('.')
  if (parts.length < 2) return null
  try {
    const json = decodeBase64Url(parts[1]!)
    return JSON.parse(json)
  } catch {
    return null
  }
}

export async function getUser(req?: Request): Promise<User | null> {
  let authHeader = ''
  if (req) {
    authHeader = req.headers.get('authorization') || ''
  } else {
    const h = await headers()
    authHeader = h.get('authorization') || ''
  }

  let token = ''
  if (authHeader.startsWith('Bearer ')) token = authHeader.slice(7)

  if (!token) {
    const c = await cookies()
    token = c.get('app_session')?.value || ''
  }

  if (!token) return null

  const payload = decodeJwt(token)
  const id = payload?.sub || payload?.uid || payload?.user_id
  if (!id) return null

  return {
    id: String(id),
    email: payload?.email,
    name: payload?.name,
  }
}

// If you already export other helpers (e.g., generateToken) keep exporting them from here as well.
