// src/components/ui/GlobalLoader.tsx
'use client'

import { useNavigation } from 'next/navigation'
import Loader from './Loader'

export default function GlobalLoader() {
  const nav = useNavigation()
  // Next.js transitions: "loading" when a route change or <Link> click is in progress
  const isLoading = nav.state === 'loading'
  return <Loader show={isLoading} />
}
