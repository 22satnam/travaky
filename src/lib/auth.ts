// // // // lib/auth.ts
// // // import jwt from 'jsonwebtoken'

// // // const JWT_SECRET = process.env.JWT_SECRET

// // // export function generateToken(payload: object) {
// // //   return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
// // // }

// // // export function verifyToken(token: string) {
// // //   try {
// // //     return jwt.verify(token, JWT_SECRET)
// // //   } catch (err) {
// // //     return null
// // //   }
// // // }
// // // src/lib/auth.ts
// // import jwt from 'jsonwebtoken'

// // // Immediately error if the secret is missing, so JWT_SECRET is narrowed to string
// // const JWT_SECRET = process.env.JWT_SECRET
// // if (!JWT_SECRET) {
// //   throw new Error('Missing JWT_SECRET environment variable')
// // }

// // /**
// //  * Generate a JWT for the given payload, valid for 7 days.
// //  */
// // export function generateToken(payload: object): string {
// //   return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
// // }

// // /**
// //  * Verify the given token and return its decoded payload, or null if invalid.
// //  */
// // export function verifyToken(token: string): object | null {
// //   try {
// //     return jwt.verify(token, JWT_SECRET)
// //   } catch {
// //     return null
// //   }
// // }
// // src/lib/auth.ts
// import jwt, { Secret } from 'jsonwebtoken'

// // At module‐load time, throw if the env var is missing.
// // Then annotate as jwt.Secret so TS knows it's non‑undefined.
// const JWT_SECRET: Secret = process.env.JWT_SECRET || (() => {
//   throw new Error('Missing JWT_SECRET environment variable')
// })()

// /**
//  * Generate a JWT valid for 7 days.
//  */
// export function generateToken(payload: object): string {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
// }

// /**
//  * Verify a token and return its decoded payload, or null if invalid.
//  */
// export function verifyToken(token: string): object | null {
//   try {
//     return jwt.verify(token, JWT_SECRET)
//   } catch {
//     return null
//   }
// }
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
