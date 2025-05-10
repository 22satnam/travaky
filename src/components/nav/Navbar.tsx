'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import {
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'           
import { userSections, adminSections } from '@/config/dashboardSections'
import { useAuth } from '@/context/AuthContext'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export default function Navbar() {
  const router = useRouter()
  const { session, logout } = useAuth()
  const [open, setOpen] = useState(false)

  /* not logged-in → old CTA */
  if (!session) {
    return (
      <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
        <Link href="/" className="font-bold text-xl">Travaky</Link>
        <Link href="/login" className="text-sm underline">Login&nbsp;/&nbsp;Sign&nbsp;up</Link>
      </header>
    )
  }

  const sections = session.role === 'admin' ? adminSections : userSections

  return (
    <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
      <Link href="/" className="font-bold text-xl">Travaky</Link>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${session.email}`} />
            <AvatarFallback>{session.email[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          {sections.map(sec => (
            <DropdownMenuItem key={sec.key} onClick={() => router.push(sec.path)}>
              {sec.label}
            </DropdownMenuItem>
          ))}

          {session.role === 'admin' && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/admin')}>
                Admin
              </DropdownMenuItem>
            </>
          )}

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              logout()
              router.push('/')
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
