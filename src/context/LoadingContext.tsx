// // src/context/LoadingContext.tsx
// 'use client'
// import React, { createContext, useContext, useState, useEffect } from 'react'
// import Loader from '@/components/ui/Loader'

// interface LoadingCtx {
//   show: () => void
//   hide: () => void
// }

// const Ctx = createContext<LoadingCtx | null>(null)

// export function useLoading() {
//   const ctx = useContext(Ctx)
//   if (!ctx) throw new Error('useLoading must be inside <LoadingProvider>')
//   return ctx
// }

// export function LoadingProvider({ children }: { children: React.ReactNode }) {
//   const [visible, setVisible] = useState(false)

//   // ← NEW: wrap window.fetch so that ANY fetch shows the loader
//   useEffect(() => {
//     const originalFetch = window.fetch
//     window.fetch = async (...args) => {
//       setVisible(true)
//       try {
//         const res = await originalFetch(...args)
//         return res
//       } finally {
//         setVisible(false)
//       }
//     }
//     return () => {
//       window.fetch = originalFetch
//     }
//   }, [])

//   return (
//     <Ctx.Provider value={{ show: () => setVisible(true), hide: () => setVisible(false) }}>
//       {children}
//       <Loader show={visible} />
//     </Ctx.Provider>
//   )
// }

// src/context/LoadingContext.tsx
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import Loader from '@/components/ui/Loader'

interface LoadingCtx {
  show: () => void
  hide: () => void
}

const Ctx = createContext<LoadingCtx | null>(null)

export function useLoading() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLoading must be inside <LoadingProvider>')
  return ctx
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  // ← NEW: wrap window.fetch so that ANY fetch shows the loader
  useEffect(() => {
    const originalFetch = window.fetch
    window.fetch = async (...args) => {
      setVisible(true)
      try {
        const res = await originalFetch(...args)
        return res
      } finally {
        setVisible(false)
      }
    }
    return () => {
      window.fetch = originalFetch
    }
  }, [])

  return (
    <Ctx.Provider value={{ show: () => setVisible(true), hide: () => setVisible(false) }}>
      {children}
      <Loader show={visible} />
    </Ctx.Provider>
  )
}