'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/nav/Navbar'

/** Hides the public navbar on /dashboard and /admin routes */
export default function NavbarSwitch() {
  const pathname = usePathname()
  const hide = pathname.startsWith('/dashboard') || pathname.startsWith('/admin')
  return hide ? null : <Navbar />
}
