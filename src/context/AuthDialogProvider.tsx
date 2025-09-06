// 'use client'

// import { createContext, useCallback, useContext, useMemo, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { AuthDialog } from '@/components/ui/auth-dialogs'
// import { useAuth } from '@/context/AuthContext'
// import AuthDialogs from '@/context/AuthDialogs'

// type Mode = 'login' | 'signup'

// type AuthDialogAPI = {
//   open: (next?: string, mode?: Mode) => void
//   close: () => void
// }

// const AuthDialogCtx = createContext<AuthDialogAPI | null>(null)

// export function AuthDialogRoot(){
//   return <AuthDialogs />
// }

// export function useAuthDialog() {
//   const ctx = useContext(AuthDialogCtx)
//   if (!ctx) throw new Error('useAuthDialog must be used inside <AuthDialogProvider>')
//   return ctx
// }

// export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
//   const [open, setOpen] = useState(false)
//   const [mode, setMode] = useState<Mode>('login')
//   const [nextHref, setNextHref] = useState<string>('/dashboard')

//   const router = useRouter()
//   const { refreshSession } = useAuth()

//   const api: AuthDialogAPI = useMemo(
//     () => ({
//       open: (next, m) => {
//         if (next) setNextHref(next)
//         if (m) setMode(m)
//         setOpen(true)
//       },
//       close: () => setOpen(false),
//     }),
//     []
//   )

//   const toggleMode = useCallback(() => {
//     setMode(m => (m === 'login' ? 'signup' : 'login'))
//   }, [])

//   return (
//     <AuthDialogCtx.Provider value={api}>
//       {children}
//       {open && (
//         <AuthDialog
//           mode={mode}
//           toggleMode={toggleMode}
//           onSuccess={async () => {
//             setOpen(false)
//             await refreshSession()
//             toast.success('Logged in successfully!')
//             router.push(nextHref || '/dashboard')
//           }}
//           onClose={() => setOpen(false)}
//         />
//       )}
//     </AuthDialogCtx.Provider>
//   )
// }



// 'use client'

// import { createContext, useContext, useMemo, useState, useCallback } from 'react'
// import AuthDialogs from '@/context/AuthDialogs'

// type Mode = 'login' | 'signup'

// type AuthDialogCtxShape = {
//   isOpen: boolean
//   mode: Mode
//   next: string
//   open: (next?: string, mode?: Mode) => void
//   close: () => void
//   switchMode: (m?: Mode) => void // pass a mode or toggle if omitted
// }

// const AuthDialogCtx = createContext<AuthDialogCtxShape | null>(null)

// export function useAuthDialog() {
//   const ctx = useContext(AuthDialogCtx)
//   if (!ctx) throw new Error('useAuthDialog must be used inside <AuthDialogProvider>')
//   return ctx
// }

// export function AuthDialogRoot() {
//   // Mounts the blue/branded dialog once globally
//   return <AuthDialogs />
// }

// export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
//   const [isOpen, setOpen] = useState(false)
//   const [mode, setMode] = useState<Mode>('login')
//   const [next, setNext] = useState<string>('/dashboard')

//   const open = useCallback((n?: string, m?: Mode) => {
//     if (n) setNext(n)
//     if (m) setMode(m)
//     setOpen(true)
//   }, [])

//   const close = useCallback(() => setOpen(false), [])
//   const switchMode = useCallback((m?: Mode) => {
//     setMode((prev) => (m ? m : prev === 'login' ? 'signup' : 'login'))
//   }, [])

//   const value = useMemo<AuthDialogCtxShape>(
//     () => ({ isOpen, mode, next, open, close, switchMode }),
//     [isOpen, mode, next, open, close, switchMode]
//   )

//   return (
//     <AuthDialogCtx.Provider value={value}>
//       {children}
//       {/* The dialog UI reads state from this context */}
//       <AuthDialogRoot />
//     </AuthDialogCtx.Provider>
//   )
// }


// 'use client'

// import { createContext, useContext, useMemo, useState, useCallback } from 'react'

// type Mode = 'login' | 'signup'

// type AuthDialogAPI = {
//   open: (next?: string, mode?: Mode) => void
//   close: () => void
//   switchMode: () => void
//   isOpen: boolean
//   mode: Mode
//   next: string | null
// }

// const AuthDialogCtx = createContext<AuthDialogAPI | null>(null)

// export function useAuthDialog() {
//   const ctx = useContext(AuthDialogCtx)
//   if (!ctx) throw new Error('useAuthDialog must be used inside <AuthDialogProvider>')
//   return ctx
// }

// export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
//   const [isOpen, setOpen] = useState(false)
//   const [mode, setMode] = useState<Mode>('login')
//   const [next, setNext] = useState<string | null>(null)

//   const api: AuthDialogAPI = useMemo(
//     () => ({
//       open: (n, m) => {
//         if (n) setNext(n)
//         if (m) setMode(m)
//         setOpen(true)
//       },
//       close: () => setOpen(false),
//       switchMode: () => setMode((v) => (v === 'login' ? 'signup' : 'login')),
//       isOpen,
//       mode,
//       next,
//     }),
//     [isOpen, mode, next]
//   )

//   return <AuthDialogCtx.Provider value={api}>{children}</AuthDialogCtx.Provider>
// }

// /** Mounts the dialog UI (and uses the provider state). */
// export function AuthDialogRoot() {
//   // keep this import path pointing to the file you just replaced
//   const DialogUI = require('@/context/AuthDialogs').default
//   return <DialogUI />
// }


// // src/context/AuthDialogProvider.tsx
// 'use client'

// import { createContext, useContext, useMemo, useState } from 'react'

// export type Mode = 'login' | 'signup'

// export type AuthDialogAPI = {
//   open: (next?: string, mode?: Mode) => void
//   close: () => void
//   switchMode: () => void
//   isOpen: boolean
//   mode: Mode
//   next: string | null
// }

// const AuthDialogCtx = createContext<AuthDialogAPI | undefined>(undefined)

// export function useAuthDialog() {
//   const ctx = useContext(AuthDialogCtx)
//   if (!ctx) throw new Error('useAuthDialog must be used inside <AuthDialogProvider>')
//   return ctx
// }

// export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
//   const [isOpen, setOpen] = useState(false)
//   const [mode, setMode] = useState<Mode>('login')
//   const [next, setNext] = useState<string | null>(null)

//   const value = useMemo<AuthDialogAPI>(
//     () => ({
//       open: (n, m) => {
//         if (n) setNext(n)
//         if (m) setMode(m)
//         setOpen(true)
//       },
//       close: () => setOpen(false),
//       switchMode: () => setMode((v) => (v === 'login' ? 'signup' : 'login')),
//       isOpen,
//       mode,
//       next,
//     }),
//     [isOpen, mode, next]
//   )

//   return <AuthDialogCtx.Provider value={value}>{children}</AuthDialogCtx.Provider>
// }



'use client'

import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import { AuthDialog } from '@/components/ui/auth-dialogs'

type Mode = 'login' | 'signup'

type AuthDialogAPI = {
  open: (next?: string, mode?: Mode) => void
  close: () => void
  isOpen: boolean
  mode: Mode
  next: string
  switchMode: () => void
}

const AuthDialogCtx = createContext<AuthDialogAPI | null>(null)

export function useAuthDialog() {
  const ctx = useContext(AuthDialogCtx)
  if (!ctx) throw new Error('useAuthDialog must be used inside <AuthDialogProvider>')
  return ctx
}

// Optional: keep this for compatibility with your layout
export function AuthDialogRoot() {
  return null
}

export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('login')
  const [nextHref, setNextHref] = useState('/dashboard')

  const router = useRouter()
  const { refreshSession } = useAuth()

  const toggleMode = useCallback(() => {
    setMode((m) => (m === 'login' ? 'signup' : 'login'))
  }, [])

  const api: AuthDialogAPI = useMemo(
    () => ({
      open: (next, m) => {
        if (next) setNextHref(next)
        if (m) setMode(m)
        setOpen(true)
      },
      close: () => setOpen(false),
      isOpen: open,
      mode,
      next: nextHref,
      switchMode: toggleMode,
    }),
    [open, mode, nextHref, toggleMode]
  )

  return (
    <AuthDialogCtx.Provider value={api}>
      {children}
      {open && (
        <AuthDialog
          mode={mode}
          toggleMode={toggleMode}
          onSuccess={async () => {
            setOpen(false)
            await refreshSession()
            toast.success('Logged in successfully!')
            router.push(nextHref || '/dashboard')
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </AuthDialogCtx.Provider>
  )
}
