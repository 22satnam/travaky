import { cookies } from 'next/headers'

export function isUserAuthed(): boolean {
  const token = cookies().get('travaky-token')?.value
  return !!token
}
