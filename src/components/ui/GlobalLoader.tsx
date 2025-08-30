// // src/components/ui/GlobalLoader.tsx
// 'use client'

// import { useNavigation } from 'next/navigation'
// import Loader from './Loader'

// export default function GlobalLoader() {
//   const nav = useNavigation()
//   // Next.js transitions: "loading" when a route change or <Link> click is in progress
//   const isLoading = nav.state === 'loading'
//   return <Loader show={isLoading} />
// }



// src/components/ui/GlobalLoader.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Loader from './Loader'

/**
 * Next.js App Router has no `useNavigation` (that's Remix).
 * This component shows a short loader pulse whenever the pathname changes,
 * which covers route transitions without relying on unsupported hooks.
 */
export default function GlobalLoader() {
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // show loader briefly after pathname changes
    setActive(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setActive(false), 400)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  return <Loader show={active} />
}
