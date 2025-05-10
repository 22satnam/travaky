// // 'use client'

// // import { createContext, useContext, useEffect, useState } from 'react'

// // type Session = {
// //   email: string
// // } | null

// // interface AuthContextType {
// //   session: Session
// //   setSession: (session: Session) => void
// //   refreshSession: () => void
// // }

// // const AuthContext = createContext<AuthContextType | null>(null)

// // export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
// //   const [session, setSession] = useState<Session>(null)

// //   const refreshSession = async () => {
// //     const res = await fetch('/api/check-auth', { credentials: 'include' })
// //     if (res.ok) {
// //       const email = decodeURIComponent(document.cookie.split('; ').find(c => c.startsWith('email='))?.split('=')[1] || '')
// //       setSession({ email })
// //     } else {
// //       setSession(null)
// //     }
// //   }

// //   useEffect(() => {
// //     refreshSession()
// //   }, [])

// //   return (
// //     <AuthContext.Provider value={{ session, setSession, refreshSession }}>
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export const useAuth = () => {
// //   const ctx = useContext(AuthContext)
// //   if (!ctx) throw new Error("useAuth must be used within AuthProvider")
// //   return ctx
// // }


// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'

// type Session = { id: number; email: string; role?: 'user' | 'admin' } | null

// interface AuthContextType {
//   session: Session
//   setSession: (s: Session) => void
//   refreshSession: () => void
//   logout: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [session, setSession] = useState<Session>(null)

//   /*  ───── helpers ─────────────────────────────────────────────── */
//   const readCookie = (name: string) =>
//     decodeURIComponent(
//       document.cookie.split('; ').find(c => c.startsWith(name + '='))?.split('=')[1] ?? ''
//     )

//   const refreshSession = async () => {
//     const ok = (await fetch('/api/check-auth', { credentials: 'include' })).ok
//     setSession(
//       ok
//         ? { id: Number(readCookie('uid')), email: readCookie('email'), role: readCookie('role') as any }
//         : null
//     )
//   }

//   const logout = async () => {
//     await fetch('/api/logout', { credentials: 'include' })
//     setSession(null)
//   }

//   /*  ───── init ────────────────────────────────────────────────── */
//   useEffect(() => { refreshSession() }, [])

//   return (
//     <AuthContext.Provider value={{ session, setSession, refreshSession, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error('useAuth must be used within AuthProvider')
//   return ctx
// }


'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Session = { id: number; email: string; role?: string } | null
interface Ctx { session: Session; refreshSession: () => void; logout: () => Promise<void> }

const AuthContext = createContext<Ctx | null>(null)

/* helper ─────────────────────────────────────────────── */
function readCookie(name: string) {
  const c = document.cookie.split('; ').find(v => v.startsWith(name + '='))
  return c ? decodeURIComponent(c.split('=')[1]) : ''
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session>(null)

  const refreshSession = async () => {
    const ok = (await fetch('/api/check-auth', { credentials: 'include' })).ok
    setSession(
      ok
        ? { id: Number(readCookie('uid')), email: readCookie('email'), role: readCookie('role') || undefined }
        : null,
    )
  }

  const logout = async () => {
    await fetch('/api/logout', { credentials: 'include' })
    setSession(null)
  }

  useEffect(() => { refreshSession() }, [])

  return <AuthContext.Provider value={{ session, refreshSession, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
