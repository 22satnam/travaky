// // src/lib/requireAuth.ts (new)
// 'use client'

// import { useRouter } from 'next/navigation'
// import { useAuth } from '@/context/AuthContext'
// import { useAuthDialog } from '@/context/AuthDialogProvider'
// import { toast } from 'sonner'

// export function useRequireAuth() {
//   const { session } = useAuth()
//   const auth = useAuthDialog()
//   const router = useRouter()

//   return (next: string) => {
//     if (session) router.push(next)
//     else {
//       toast('Please log in to continue.')
//       auth.open(next, 'login')
//     }
//   }
// }


'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useAuthDialog } from '@/context/AuthDialogProvider'

/**
 * Call with the desired "next" URL:
 *   const requireAuth = useRequireAuth()
 *   requireAuth('/apply/usa');
 */
export function useRequireAuth() {
  const { session } = useAuth()
  const router = useRouter()
  const authDialog = useAuthDialog() // open/close comes from the provider

  return (next?: string, mode: 'login' | 'signup' = 'login') => {
    if (session) {
      router.push(next || '/dashboard')
    } else {
      authDialog.open(next || '/dashboard', mode)
    }
  }
}
