
// src/lib/auth.ts
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'

// At startup, throw if the env var is missing
const JWT_SECRET: Secret = process.env.JWT_SECRET || (() => {
  throw new Error('Missing JWT_SECRET environment variable')
})()

/**
 * Generate a JWT for the given payload, valid for 7 days.
 */
export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

/**
 * Verify the given token.
 * Returns the decoded payload (which may be a string or JwtPayload),
 * or null if verification fails.
 */
export function verifyToken(token: string): string | JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}
