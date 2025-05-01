// import { cookies } from 'next/headers'

// export function isUserAuthed(): boolean {
//   const token = cookies().get('travaky-token')?.value
//   return !!token
// }
// src/lib/checkAuth.ts
import { cookies } from 'next/headers'

export async function isUserAuthed(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('travaky-token')?.value
  return !!token
}
