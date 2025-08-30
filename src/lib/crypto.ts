// // src/lib/crypto.ts
// import crypto from 'crypto';

// export function hash(value: string) {
//   return crypto.createHash('sha256').update(value).digest('hex');
// }
// export function randomSixDigit(): string {
//   return ('' + Math.floor(100000 + Math.random() * 900000));
// }
// export function randomToken(): string {
//   return crypto.randomBytes(32).toString('hex');
// }


import crypto from 'crypto';
export function hash(value: string) {
  return crypto.createHash('sha256').update(value).digest('hex');
}
export function randomSixDigit(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}
