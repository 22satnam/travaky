// // // // src/lib/crypto.ts
// // // import crypto from 'crypto';

// // // export function hash(value: string) {
// // //   return crypto.createHash('sha256').update(value).digest('hex');
// // // }
// // // export function randomSixDigit(): string {
// // //   return ('' + Math.floor(100000 + Math.random() * 900000));
// // // }
// // // export function randomToken(): string {
// // //   return crypto.randomBytes(32).toString('hex');
// // // }


// // import crypto from 'crypto';
// // export function hash(value: string) {
// //   return crypto.createHash('sha256').update(value).digest('hex');
// // }
// // export function randomSixDigit(): string {
// //   return String(Math.floor(100000 + Math.random() * 900000));
// // }
// // src/lib/crypto.ts
// import { randomBytes } from 'crypto';

// export function randomToken(length: number = 32): string {
//   // returns a hex string of 2*length chars (length bytes)
//   return randomBytes(length).toString('hex');
// }


// src/lib/crypto.ts
import { randomBytes, createHash } from 'crypto';

/** 6-digit numeric OTP as a string (e.g. "482913") */
export function randomSixDigit(): string {
  // 000000–999999, zero-padded
  return (Math.floor(Math.random() * 1_000_000)).toString().padStart(6, '0');
}

/** Random token (hex) – default 32 bytes => 64 hex chars */
export function randomToken(length: number = 32): string {
  return randomBytes(length).toString('hex');
}

/** SHA-256 hash of a string; returns hex */
export function hash(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}
