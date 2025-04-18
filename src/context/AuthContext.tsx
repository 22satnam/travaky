'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Session = {
  email: string
} | null

interface AuthContextType {
  session: Session
  setSession: (session: Session) => void
  refreshSession: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session>(null)

  const refreshSession = async () => {
    const res = await fetch('/api/check-auth', { credentials: 'include' })
    if (res.ok) {
      const email = decodeURIComponent(document.cookie.split('; ').find(c => c.startsWith('email='))?.split('=')[1] || '')
      setSession({ email })
    } else {
      setSession(null)
    }
  }

  useEffect(() => {
    refreshSession()
  }, [])

  return (
    <AuthContext.Provider value={{ session, setSession, refreshSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
