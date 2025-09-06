// // // // // // // // // // // // // // // 'use client'

// // // // // // // // // // // // // // // import Link from 'next/link'
// // // // // // // // // // // // // // // import { useState } from 'react'
// // // // // // // // // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // // // // // // // // import { LogOut } from 'lucide-react'
// // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // // // // // // // // // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // // // // // // } from '@/components/ui/dropdown-menu'           
// // // // // // // // // // // // // // // import { userSections, adminSections } from '@/config/dashboardSections'
// // // // // // // // // // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // // // // // // // // // import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


// // // // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // // // //   const router = useRouter()
// // // // // // // // // // // // // // //   const { session, logout } = useAuth()
// // // // // // // // // // // // // // //   const [open, setOpen] = useState(false)

// // // // // // // // // // // // // // //   /* not logged-in → old CTA */
// // // // // // // // // // // // // // //   if (!session) {
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // // // //         <Link href="/" className="font-bold text-xl">Travaky</Link>
// // // // // // // // // // // // // // //         <Link href="/login" className="text-sm underline">Login&nbsp;/&nbsp;Sign&nbsp;up</Link>
// // // // // // // // // // // // // // //       </header>
// // // // // // // // // // // // // // //     )
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   const sections = session.role === 'admin' ? adminSections : userSections

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // // // // //       <DropdownMenu open={open} onOpenChange={setOpen}>
// // // // // // // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // // // // // // //           <Avatar className="cursor-pointer">
// // // // // // // // // // // // // // //             <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${session.email}`} />
// // // // // // // // // // // // // // //             <AvatarFallback>{session.email[0]?.toUpperCase()}</AvatarFallback>
// // // // // // // // // // // // // // //           </Avatar>
// // // // // // // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // // // // // // //           {sections.map(sec => (
// // // // // // // // // // // // // // //             <DropdownMenuItem key={sec.key} onClick={() => router.push(sec.path)}>
// // // // // // // // // // // // // // //               {sec.label}
// // // // // // // // // // // // // // //             </DropdownMenuItem>
// // // // // // // // // // // // // // //           ))}

// // // // // // // // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // // // // // // // //             <>
// // // // // // // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // // // // // // // // //                 Admin
// // // // // // // // // // // // // // //               </DropdownMenuItem>
// // // // // // // // // // // // // // //             </>
// // // // // // // // // // // // // // //           )}

// // // // // // // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // // // // // // //           <DropdownMenuItem
// // // // // // // // // // // // // // //             onClick={() => {
// // // // // // // // // // // // // // //               logout()
// // // // // // // // // // // // // // //               router.push('/')
// // // // // // // // // // // // // // //             }}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // // // // // // //       </DropdownMenu>
// // // // // // // // // // // // // // //     </header>
// // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // 'use client'

// // // // // // // // // // // // // // import Link from 'next/link'
// // // // // // // // // // // // // // import { useState } from 'react'
// // // // // // // // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // // // // // // // import { LogOut, User } from 'lucide-react'
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
// // // // // // // // // // // // // //   DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // // // // // } from '@/components/ui/dropdown-menu'
// // // // // // // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // // // // // // import { userSections, adminSections } from '@/config/dashboardSections'
// // // // // // // // // // // // // // import { useAuth } from '@/context/AuthContext'

// // // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // // //   const { session, logout } = useAuth()
// // // // // // // // // // // // // //   const router               = useRouter()
// // // // // // // // // // // // // //   const [open, setOpen]      = useState(false)

// // // // // // // // // // // // // //   /* ───────── public-view header ───────── */
// // // // // // // // // // // // // //   if (!session) {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // // //         <Link href="/"  className="font-bold text-xl">Travaky</Link>
// // // // // // // // // // // // // //         <Link href="/login" className="text-sm underline">Login&nbsp;/&nbsp;Sign-up</Link>
// // // // // // // // // // // // // //       </header>
// // // // // // // // // // // // // //     )
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   const sections = session.role === 'admin' ? adminSections : userSections

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // // //       {/* logo */}
// // // // // // // // // // // // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // // // //       {/* country search */}
// // // // // // // // // // // // // //       <div className="hidden md:block w-full max-w-md mx-8">
// // // // // // // // // // // // // //         <JollySearchField />
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* user dropdown */}
// // // // // // // // // // // // // //       <DropdownMenu open={open} onOpenChange={setOpen}>
// // // // // // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // // // // // // //             <User className="w-5 h-5" />      {/* ⬅︎ neutral icon, not orange */}
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // // // // // //           {sections.map(s => (
// // // // // // // // // // // // // //             <DropdownMenuItem key={s.key} onClick={() => router.push(s.path)}>
// // // // // // // // // // // // // //               {s.label}
// // // // // // // // // // // // // //             </DropdownMenuItem>
// // // // // // // // // // // // // //           ))}

// // // // // // // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // // // // // // //             <>
// // // // // // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // // // // // // // // // // // // //             </>
// // // // // // // // // // // // // //           )}

// // // // // // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // // // // // //           <DropdownMenuItem
// // // // // // // // // // // // // //             onClick={async () => { await logout(); router.push('/') }}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // // // // // //       </DropdownMenu>
// // // // // // // // // // // // // //     </header>
// // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // /* ------------------------------------------------------------------
// // // // // // // // // // // // //    Navbar – brings back inline AuthDialog & fixes logout dropdown
// // // // // // // // // // // // // ------------------------------------------------------------------- */
// // // // // // // // // // // // // "use client"

// // // // // // // // // // // // // import Link            from "next/link"
// // // // // // // // // // // // // import { useRouter }   from "next/navigation"
// // // // // // // // // // // // // import { useState }    from "react"
// // // // // // // // // // // // // import { Menu, Moon, Sun, LogOut, User } from "lucide-react"
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
// // // // // // // // // // // // //   DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // // // // } from "@/components/ui/dropdown-menu"
// // // // // // // // // // // // // import { Button }      from "@/components/ui/button"
// // // // // // // // // // // // // import { JollySearchField } from "@/components/ui/searchfield"
// // // // // // // // // // // // // import { AuthDialog }  from "@/components/ui/auth-dialogs"
// // // // // // // // // // // // // import { useAuth }     from "@/context/AuthContext"

// // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // // // // // // //   const router               = useRouter()
// // // // // // // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // // // // // // //   const [authMode, setAuthMode] = useState<"login" | "signup">("login")

// // // // // // // // // // // // //   /* ------------ handle auth success ---------------- */
// // // // // // // // // // // // //   const handleAuthSuccess = async (redirect: string) => {
// // // // // // // // // // // // //     setShowAuth(false)
// // // // // // // // // // // // //     await refreshSession()
// // // // // // // // // // // // //     router.push(redirect || "/dashboard")
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   /* ------------ PUBLIC header (no session) ---------- */
// // // // // // // // // // // // //   if (!session) {
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // //         <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // // //         <div className="hidden md:block w-full max-w-md mx-8">
// // // // // // // // // // // // //           <JollySearchField />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <button onClick={() => setShowAuth(true)} className="text-sm underline">
// // // // // // // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // // // // // // //         </button>

// // // // // // // // // // // // //         {showAuth && (
// // // // // // // // // // // // //           <AuthDialog
// // // // // // // // // // // // //             mode={authMode}
// // // // // // // // // // // // //             toggleMode={() => setAuthMode(authMode === "login" ? "signup" : "login")}
// // // // // // // // // // // // //             onSuccess={handleAuthSuccess}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </header>
// // // // // // // // // // // // //     )
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   /* ------------ AUTHENTICATED header ---------------- */
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // // // // // // // // // //       {/* logo */}
// // // // // // // // // // // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // // //       {/* country search */}
// // // // // // // // // // // // //       <div className="hidden md:block w-full max-w-md mx-8">
// // // // // // // // // // // // //         <JollySearchField />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* user dropdown */}
// // // // // // // // // // // // //       <DropdownMenu>
// // // // // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // // // // // //             <User className="w-5 h-5" />
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // // // // //           <DropdownMenuItem onClick={() => router.push("/dashboard")}>
// // // // // // // // // // // // //             Dashboard
// // // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // // //           {session.role === "admin" && (
// // // // // // // // // // // // //             <>
// // // // // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // // // // //               <DropdownMenuItem onClick={() => router.push("/admin")}>
// // // // // // // // // // // // //                 Admin
// // // // // // // // // // // // //               </DropdownMenuItem>
// // // // // // // // // // // // //             </>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // // // // //           <DropdownMenuItem
// // // // // // // // // // // // //             onClick={async () => { await logout(); router.push("/") }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // // // // //       </DropdownMenu>
// // // // // // // // // // // // //     </header>
// // // // // // // // // // // // //   )
// // // // // // // // // // // // // }


// // // // // // // // // // // // 'use client'

// // // // // // // // // // // // import Link            from 'next/link'
// // // // // // // // // // // // import { useRouter }   from 'next/navigation'
// // // // // // // // // // // // import { useState }    from 'react'
// // // // // // // // // // // // import { LogOut, User } from 'lucide-react'
// // // // // // // // // // // // import {
// // // // // // // // // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // // // // // // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // // // } from '@/components/ui/dropdown-menu'
// // // // // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // // // // import { AuthDialog }  from '@/components/ui/auth-dialogs'
// // // // // // // // // // // // import { useAuth }     from '@/context/AuthContext'

// // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // // // // // //   const router = useRouter()
// // // // // // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // // // // // //   const [mode, setMode]         = useState<'login' | 'signup'>('login')

// // // // // // // // // // // //   const onAuthSuccess = async (redirect = '/dashboard') => {
// // // // // // // // // // // //     setShowAuth(false)
// // // // // // // // // // // //     await refreshSession()
// // // // // // // // // // // //     router.push(redirect)
// // // // // // // // // // // //   }

// // // // // // // // // // // //   /* ───── public view (not logged-in) ───── */
// // // // // // // // // // // //   if (!session) {
// // // // // // // // // // // //     return (
// // // // // // // // // // // //       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// // // // // // // // // // // //         <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // //         <div className="w-full max-w-md mx-auto hidden md:block">
// // // // // // // // // // // //           <JollySearchField />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <button onClick={() => setShowAuth(true)} className="text-sm underline">
// // // // // // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // // // // // //         </button>

// // // // // // // // // // // //         {showAuth && (
// // // // // // // // // // // //           <AuthDialog
// // // // // // // // // // // //             mode={mode}
// // // // // // // // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // // // // // // //             onSuccess={onAuthSuccess}
// // // // // // // // // // // //             onClose={() => setShowAuth(false)}
// // // // // // // // // // // //           />
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </header>
// // // // // // // // // // // //     )
// // // // // // // // // // // //   }

// // // // // // // // // // // //   /* ───── signed-in header ───── */
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// // // // // // // // // // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // // // // // // // // //       <div className="w-full max-w-md mx-auto hidden md:block">
// // // // // // // // // // // //         <JollySearchField />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <DropdownMenu>
// // // // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // // // // //             <User className="w-5 h-5" />
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard/bookings')}>
// // // // // // // // // // // //             Bookings
// // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard/invoices')}>
// // // // // // // // // // // //             Invoices
// // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // // // // //             <>
// // // // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // // // // // //                 Admin
// // // // // // // // // // // //               </DropdownMenuItem>
// // // // // // // // // // // //             </>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // // // //           <DropdownMenuItem onClick={async () => { await logout(); router.push('/') }}>
// // // // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // // // //       </DropdownMenu>
// // // // // // // // // // // //     </header>
// // // // // // // // // // // //   )
// // // // // // // // // // // // }



// // // // // // // // // // // 'use client'

// // // // // // // // // // // import Link from 'next/link'
// // // // // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // // // // import Image             from 'next/image'               
// // // // // // // // // // // import { useState } from 'react'
// // // // // // // // // // // import { LogOut, User } from 'lucide-react'
// // // // // // // // // // // import {
// // // // // // // // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // // // // // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // // } from '@/components/ui/dropdown-menu'
// // // // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // // // import { AuthDialog }  from '@/components/ui/auth-dialogs'
// // // // // // // // // // // import { useAuth }     from '@/context/AuthContext'

// // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // // // // //   const router            = useRouter()
// // // // // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // // // // //   const [mode, setMode]   = useState<'login' | 'signup'>('login')

// // // // // // // // // // //   /* ───── public view ───── */
// // // // // // // // // // //   if (!session) {
// // // // // // // // // // //     return (
// // // // // // // // // // //       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// // // // // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // // // // //           <Image src="/img/logo.png" alt="Travaky" width={72} height={72} className="w-[72px] h-[72px]" Travaky />
// // // // // // // // // // //           <span className="sr-text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // // // //         </Link>
// // // // // // // // // // //         <div className="w-full max-w-md mx-auto hidden md:block">
// // // // // // // // // // //           <JollySearchField />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <button onClick={() => setShowAuth(true)} className="text-sm underline">
// // // // // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // // // // //         </button>
// // // // // // // // // // //         {showAuth && (
// // // // // // // // // // //           <AuthDialog
// // // // // // // // // // //             mode={mode}
// // // // // // // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // // // // // //             onSuccess={async (redirect = '/dashboard') => {
// // // // // // // // // // //               setShowAuth(false); await refreshSession(); router.push(redirect)
// // // // // // // // // // //             }}
// // // // // // // // // // //             onClose={() => setShowAuth(false)}
// // // // // // // // // // //           />
// // // // // // // // // // //         )}
// // // // // // // // // // //       </header>
// // // // // // // // // // //     )
// // // // // // // // // // //   }

// // // // // // // // // // //   /* ───── signed-in view ───── */
// // // // // // // // // // //   return (
// // // // // // // // // // //     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// // // // // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // // // // //           <Image src="/img/logo.png" alt="Travaky" width={72} height={72}  className="w-[72px] h-[72px]"  Travaky />
// // // // // // // // // // //           <span className="sr-text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // // // //         </Link>

// // // // // // // // // // //       <div className="hidden md:block w-full max-w-md mx-auto">
// // // // // // // // // // //         <JollySearchField />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <DropdownMenu>
// // // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // // // //             <User className="h-5 w-5" />
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // // // // // // // //             Dashboard
// // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // //           {/* keep the Admin shortcut if relevant */}
// // // // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // // // //             <>
// // // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // // // // //                 Admin
// // // // // // // // // // //               </DropdownMenuItem>
// // // // // // // // // // //             </>
// // // // // // // // // // //           )}
// // // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // // //           <DropdownMenuItem
// // // // // // // // // // //             onClick={async () => { await logout(); router.push('/') }}
// // // // // // // // // // //           >
// // // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // // //       </DropdownMenu>
// // // // // // // // // // //     </header>
// // // // // // // // // // //   )
// // // // // // // // // // // }



// // // // // // // // // // 'use client'

// // // // // // // // // // import Link from 'next/link'
// // // // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // // // import Image from 'next/image'
// // // // // // // // // // import { useState } from 'react'
// // // // // // // // // // import { LogOut, User } from 'lucide-react'
// // // // // // // // // // import {
// // // // // // // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // // // // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // // } from '@/components/ui/dropdown-menu'
// // // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // // // // import { useAuth } from '@/context/AuthContext'

// // // // // // // // // // export default function Navbar() {
// // // // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // // // //   const router = useRouter()
// // // // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // // // //   const [pendingLink, setPendingLink] = useState<string | null>(null)

// // // // // // // // // //   const handleAuthRedirect = (next: string) => {
// // // // // // // // // //     setPendingLink(next)
// // // // // // // // // //     setMode('login')
// // // // // // // // // //     setShowAuth(true)
// // // // // // // // // //   }

// // // // // // // // // //   /* ───── public view ───── */
// // // // // // // // // //   if (!session) {
// // // // // // // // // //     return (
// // // // // // // // // //       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center gap-4 px-4">
// // // // // // // // // //         <Link href="/" className="flex items-center gap-2">
// // // // // // // // // //           <Image src="/img/logo.png" alt="Travaky" width={40} height={40} className="w-10 h-10" />
// // // // // // // // // //           <span className="text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // // //         </Link>

// // // // // // // // // //         <div className="w-full max-w-md mx-auto hidden md:block">
// // // // // // // // // //           <JollySearchField onAuthRedirect={handleAuthRedirect} />
// // // // // // // // // //         </div>

// // // // // // // // // //         <button onClick={() => setShowAuth(true)} className="ml-auto text-sm underline">
// // // // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // // // //         </button>

// // // // // // // // // //         {showAuth && (
// // // // // // // // // //           <AuthDialog
// // // // // // // // // //             mode={mode}
// // // // // // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // // // // //             onSuccess={async () => {
// // // // // // // // // //               setShowAuth(false)
// // // // // // // // // //               await refreshSession()
// // // // // // // // // //               router.push(pendingLink ?? '/dashboard')
// // // // // // // // // //               setPendingLink(null)
// // // // // // // // // //             }}
// // // // // // // // // //             onClose={() => setShowAuth(false)}
// // // // // // // // // //           />
// // // // // // // // // //         )}
// // // // // // // // // //       </header>
// // // // // // // // // //     )
// // // // // // // // // //   }

// // // // // // // // // //   /* ───── signed-in view ───── */
// // // // // // // // // //   return (
// // // // // // // // // //     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center gap-4 px-4">
// // // // // // // // // //       <Link href="/" className="flex items-center gap-2">
// // // // // // // // // //         <Image src="/img/logo.png" alt="Travaky" width={40} height={40} className="w-10 h-10" />
// // // // // // // // // //         <span className="text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // // //       </Link>

// // // // // // // // // //       <div className="hidden md:block w-full max-w-md mx-auto">
// // // // // // // // // //         <JollySearchField />
// // // // // // // // // //       </div>

// // // // // // // // // //       <DropdownMenu>
// // // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // // //             <User className="h-5 w-5" />
// // // // // // // // // //           </button>
// // // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // // // // // // //             Dashboard
// // // // // // // // // //           </DropdownMenuItem>

// // // // // // // // // //           {/* Admin shortcut when role is admin */}
// // // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // // //             <>
// // // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // // // //                 Admin
// // // // // // // // // //               </DropdownMenuItem>
// // // // // // // // // //             </>
// // // // // // // // // //           )}

// // // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // // //           <DropdownMenuItem
// // // // // // // // // //             onClick={async () => { await logout(); router.push('/') }}
// // // // // // // // // //           >
// // // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // // //           </DropdownMenuItem>
// // // // // // // // // //         </DropdownMenuContent>
// // // // // // // // // //       </DropdownMenu>
// // // // // // // // // //     </header>
// // // // // // // // // //   )
// // // // // // // // // // }


// // // // // // // // // 'use client'

// // // // // // // // // import Link from 'next/link'
// // // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // // import Image from 'next/image'
// // // // // // // // // import { useState } from 'react'
// // // // // // // // // import { LogOut, User } from 'lucide-react'
// // // // // // // // // import {
// // // // // // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // // // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // // // // // } from '@/components/ui/dropdown-menu'
// // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // // // import { useAuth } from '@/context/AuthContext'

// // // // // // // // // export default function Navbar() {
// // // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // // //   const router = useRouter()
// // // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // // //   const [pendingLink, setPendingLink] = useState<string | null>(null)

// // // // // // // // //   const handleAuthRedirect = (next: string) => {
// // // // // // // // //     setPendingLink(next)
// // // // // // // // //     setMode('login')
// // // // // // // // //     setShowAuth(true)
// // // // // // // // //   }

// // // // // // // // //   // Public
// // // // // // // // //   if (!session) {
// // // // // // // // //     return (
// // // // // // // // //       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center gap-4 px-4">
// // // // // // // // //         <Link href="/" className="flex items-center gap-2">
// // // // // // // // //           <Image src="/img/logo.png" alt="Travaky" width={40} height={40} className="w-10 h-10" />
// // // // // // // // //           <span className="text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // //         </Link>

// // // // // // // // //         {/* UI-Hero “short” search: container limits width */}
// // // // // // // // //         <div className="w-full max-w-xs md:max-w-md mx-auto hidden md:block">
// // // // // // // // //           <JollySearchField onAuthRedirect={handleAuthRedirect} />
// // // // // // // // //         </div>

// // // // // // // // //         <button onClick={() => setShowAuth(true)} className="ml-auto text-sm underline">
// // // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // // //         </button>

// // // // // // // // //         {showAuth && (
// // // // // // // // //           <AuthDialog
// // // // // // // // //             mode={mode}
// // // // // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // // // //             onSuccess={async () => {
// // // // // // // // //               setShowAuth(false)
// // // // // // // // //               await refreshSession()
// // // // // // // // //               router.push(pendingLink ?? '/dashboard')
// // // // // // // // //               setPendingLink(null)
// // // // // // // // //             }}
// // // // // // // // //             onClose={() => setShowAuth(false)}
// // // // // // // // //           />
// // // // // // // // //         )}
// // // // // // // // //       </header>
// // // // // // // // //     )
// // // // // // // // //   }

// // // // // // // // //   // Signed-in
// // // // // // // // //   return (
// // // // // // // // //     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center gap-4 px-4">
// // // // // // // // //       <Link href="/" className="flex items-center gap-2">
// // // // // // // // //         <Image src="/img/logo.png" alt="Travaky" width={40} height={40} className="w-10 h-10" />
// // // // // // // // //         <span className="text-2xl font-bold text-foreground">Travaky</span>
// // // // // // // // //       </Link>

// // // // // // // // //       <div className="hidden md:block w-full max-w-xs md:max-w-md mx-auto">
// // // // // // // // //         <JollySearchField />
// // // // // // // // //       </div>

// // // // // // // // //       <DropdownMenu>
// // // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // // //             <User className="h-5 w-5" />
// // // // // // // // //           </button>
// // // // // // // // //         </DropdownMenuTrigger>

// // // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // // // // // //             Dashboard
// // // // // // // // //           </DropdownMenuItem>

// // // // // // // // //           {session.role === 'admin' && (
// // // // // // // // //             <>
// // // // // // // // //               <DropdownMenuSeparator />
// // // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // // //                 Admin
// // // // // // // // //               </DropdownMenuItem>
// // // // // // // // //             </>
// // // // // // // // //           )}

// // // // // // // // //           <DropdownMenuSeparator />
// // // // // // // // //           <DropdownMenuItem
// // // // // // // // //             onClick={async () => { await logout(); router.push('/') }}
// // // // // // // // //           >
// // // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // // //           </DropdownMenuItem>
// // // // // // // // //         </DropdownMenuContent>
// // // // // // // // //       </DropdownMenu>
// // // // // // // // //     </header>
// // // // // // // // //   )
// // // // // // // // // }


// // // // // // // // 'use client'

// // // // // // // // import Link from 'next/link'
// // // // // // // // import Image from 'next/image'
// // // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // // import { useState } from 'react'
// // // // // // // // import { LogOut, User } from 'lucide-react'

// // // // // // // // import {
// // // // // // // //   DropdownMenu,
// // // // // // // //   DropdownMenuTrigger,
// // // // // // // //   DropdownMenuContent,
// // // // // // // //   DropdownMenuItem,
// // // // // // // //   DropdownMenuSeparator,
// // // // // // // // } from '@/components/ui/dropdown-menu'

// // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // // import { useAuth } from '@/context/AuthContext'

// // // // // // // // /**
// // // // // // // //  * UI-Hero aesthetic wrapper (blurred, translucent, gradient brand),
// // // // // // // //  * but behavior is *unchanged*:
// // // // // // // //  * - Public state shows login/signup trigger (opens AuthDialog)
// // // // // // // //  * - On successful auth => refreshSession + redirect to pending link or /dashboard
// // // // // // // //  * - Signed-in state shows Dashboard/Admin (if admin) + Logout
// // // // // // // //  * - Search stays compact & centered, uses your JollySearchField (with onAuthRedirect)
// // // // // // // //  */
// // // // // // // // export default function Navbar() {
// // // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // // //   const router = useRouter()

// // // // // // // //   // Auth modal state + where to go after login
// // // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // //   const [pendingLink, setPendingLink] = useState<string | null>(null)

// // // // // // // //   const handleAuthRedirect = (next: string) => {
// // // // // // // //     setPendingLink(next)
// // // // // // // //     setMode('login')
// // // // // // // //     setShowAuth(true)
// // // // // // // //   }

// // // // // // // //   // ---- UI wrapper (same both states): sticky + blur + border (UI-Hero look) ----
// // // // // // // //   const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
// // // // // // // //     <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
// // // // // // // //       <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // // // // //         <div className="flex h-16 items-center justify-between gap-3">{children}</div>
// // // // // // // //       </nav>
// // // // // // // //     </header>
// // // // // // // //   )

// // // // // // // //   // =========================
// // // // // // // //   // Public (not logged in)
// // // // // // // //   // =========================
// // // // // // // //   if (!session) {
// // // // // // // //     return (
// // // // // // // //       <Shell>
// // // // // // // //         {/* Left: Brand (image + gradient wordmark) */}
// // // // // // // //         <Link href="/" className="flex items-center gap-2 shrink-0">
// // // // // // // //           <Image
// // // // // // // //             src="/img/logo.png"
// // // // // // // //             alt="Travaky"
// // // // // // // //             width={32}
// // // // // // // //             height={32}
// // // // // // // //             className="h-8 w-8"
// // // // // // // //             priority
// // // // // // // //           />
// // // // // // // //           <span className="hidden sm:inline-block text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // // // // //             Travaky
// // // // // // // //           </span>
// // // // // // // //         </Link>

// // // // // // // //         {/* Center: compact search (UI-Hero “short” width) */}
// // // // // // // //         <div className="hidden md:flex flex-1 justify-center">
// // // // // // // //           <div className="w-full max-w-xs md:max-w-sm">
// // // // // // // //             <JollySearchField onAuthRedirect={handleAuthRedirect} />
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Right: Auth trigger (kept behavior) */}
// // // // // // // //         <button onClick={() => setShowAuth(true)} className="ml-auto text-sm underline">
// // // // // // // //           Login&nbsp;/&nbsp;Sign-up
// // // // // // // //         </button>

// // // // // // // //         {showAuth && (
// // // // // // // //           <AuthDialog
// // // // // // // //             mode={mode}
// // // // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // // //             onSuccess={async () => {
// // // // // // // //               setShowAuth(false)
// // // // // // // //               await refreshSession()
// // // // // // // //               router.push(pendingLink ?? '/dashboard') // same redirect behavior as your base
// // // // // // // //               setPendingLink(null)
// // // // // // // //             }}
// // // // // // // //             onClose={() => setShowAuth(false)}
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </Shell>
// // // // // // // //     )
// // // // // // // //   }

// // // // // // // //   // =========================
// // // // // // // //   // Signed in
// // // // // // // //   // =========================
// // // // // // // //   return (
// // // // // // // //     <Shell>
// // // // // // // //       {/* Left: Brand */}
// // // // // // // //       <Link href="/" className="flex items-center gap-2 shrink-0">
// // // // // // // //         <Image
// // // // // // // //           src="/img/logo.png"
// // // // // // // //           alt="Travaky"
// // // // // // // //           width={32}
// // // // // // // //           height={32}
// // // // // // // //           className="h-8 w-8"
// // // // // // // //           priority
// // // // // // // //         />
// // // // // // // //         <span className="hidden sm:inline-block text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // // // // //           Travaky
// // // // // // // //         </span>
// // // // // // // //       </Link>

// // // // // // // //       {/* Center: compact search */}
// // // // // // // //       <div className="hidden md:flex flex-1 justify-center">
// // // // // // // //         <div className="w-full max-w-xs md:max-w-sm">
// // // // // // // //           <JollySearchField />
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Right: user dropdown (Dashboard / Admin / Logout) */}
// // // // // // // //       <DropdownMenu>
// // // // // // // //         <DropdownMenuTrigger asChild>
// // // // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // // // // // //             <User className="h-5 w-5" />
// // // // // // // //           </button>
// // // // // // // //         </DropdownMenuTrigger>

// // // // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // // // // //             Dashboard
// // // // // // // //           </DropdownMenuItem>

// // // // // // // //           {/* keep the Admin shortcut if relevant */}
// // // // // // // //           {session.role === 'admin' && (
// // // // // // // //             <>
// // // // // // // //               <DropdownMenuSeparator />
// // // // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // // //                 Admin
// // // // // // // //               </DropdownMenuItem>
// // // // // // // //             </>
// // // // // // // //           )}

// // // // // // // //           <DropdownMenuSeparator />
// // // // // // // //           <DropdownMenuItem
// // // // // // // //             onClick={async () => {
// // // // // // // //               await logout()
// // // // // // // //               router.push('/')
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // // //           </DropdownMenuItem>
// // // // // // // //         </DropdownMenuContent>
// // // // // // // //       </DropdownMenu>
// // // // // // // //     </Shell>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // // src/components/nav/Navbar.tsx
// // // // // // // 'use client'

// // // // // // // import Link from 'next/link'
// // // // // // // import Image from 'next/image'
// // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // import { useState } from 'react'
// // // // // // // import { LogOut, User } from 'lucide-react'

// // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // import {
// // // // // // //   DropdownMenu,
// // // // // // //   DropdownMenuTrigger,
// // // // // // //   DropdownMenuContent,
// // // // // // //   DropdownMenuItem,
// // // // // // //   DropdownMenuSeparator,
// // // // // // // } from '@/components/ui/dropdown-menu'

// // // // // // // export default function Navbar() {
// // // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // // //   const router = useRouter()
// // // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// // // // // // //   // UI_Hero aesthetics: sticky, blurred bg, border, max-w-7xl, 16px vertical (h-16)
// // // // // // //   // Ref: UI_Hero header container/classes
// // // // // // //   return (
// // // // // // //     <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
// // // // // // //         {/* Left: brand + logo */}
// // // // // // //         <Link href="/" className="flex items-center gap-2 shrink-0">
// // // // // // //           <Image
// // // // // // //             src="/img/logo.png"
// // // // // // //             alt="Travaky"
// // // // // // //             width={36}
// // // // // // //             height={36}
// // // // // // //             className="rounded-md"
// // // // // // //             priority
// // // // // // //           />
// // // // // // //           <span className="text-base md:text-lg font-bold text-foreground">
// // // // // // //             Travaky
// // // // // // //           </span>
// // // // // // //         </Link>

// // // // // // //         {/* Center: search (UI_Hero keeps it clean / centered on desktop) */}
// // // // // // //         <div className="hidden md:block flex-1">
// // // // // // //           <div className="w-full max-w-md mx-auto">
// // // // // // //             <JollySearchField
// // // // // // //               onAuthRedirect={(next) => {
// // // // // // //                 // preserve your base behaviour: prompt auth, then go to the country form
// // // // // // //                 setMode('login')
// // // // // // //                 setShowAuth(true)
// // // // // // //               }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Right: auth or user menu — behaviour from base stays intact */}
// // // // // // //         {!session ? (
// // // // // // //           <>
// // // // // // //             <button
// // // // // // //               onClick={() => setShowAuth(true)}
// // // // // // //               className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
// // // // // // //             >
// // // // // // //               Login / Sign-up
// // // // // // //             </button>

// // // // // // //             {showAuth && (
// // // // // // //               <AuthDialog
// // // // // // //                 mode={mode}
// // // // // // //                 toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // // //                 onSuccess={async (redirect = '/dashboard') => {
// // // // // // //                   setShowAuth(false)
// // // // // // //                   await refreshSession()
// // // // // // //                   router.push(redirect)
// // // // // // //                 }}
// // // // // // //                 onClose={() => setShowAuth(false)}
// // // // // // //               />
// // // // // // //             )}
// // // // // // //           </>
// // // // // // //         ) : (
// // // // // // //           <DropdownMenu>
// // // // // // //             <DropdownMenuTrigger asChild>
// // // // // // //               <button
// // // // // // //                 className="rounded-full p-2 hover:bg-muted focus:outline-none"
// // // // // // //                 aria-label="Account menu"
// // // // // // //               >
// // // // // // //                 <User className="h-5 w-5" />
// // // // // // //               </button>
// // // // // // //             </DropdownMenuTrigger>

// // // // // // //             <DropdownMenuContent align="end" className="w-48">
// // // // // // //               <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // // // //                 Dashboard
// // // // // // //               </DropdownMenuItem>

// // // // // // //               {session.role === 'admin' && (
// // // // // // //                 <>
// // // // // // //                   <DropdownMenuSeparator />
// // // // // // //                   <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // // // //                     Admin
// // // // // // //                   </DropdownMenuItem>
// // // // // // //                 </>
// // // // // // //               )}

// // // // // // //               <DropdownMenuSeparator />
// // // // // // //               <DropdownMenuItem
// // // // // // //                 onClick={async () => {
// // // // // // //                   await logout()
// // // // // // //                   router.push('/')
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // // //               </DropdownMenuItem>
// // // // // // //             </DropdownMenuContent>
// // // // // // //           </DropdownMenu>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Mobile search (optional but visually consistent with UI_Hero spacing) */}
// // // // // // //       <div className="md:hidden px-4 pb-3">
// // // // // // //         <JollySearchField
// // // // // // //           onAuthRedirect={(next) => {
// // // // // // //             setMode('login')
// // // // // // //             setShowAuth(true)
// // // // // // //           }}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </header>
// // // // // // //   )
// // // // // // // }


// // // // // // 'use client'

// // // // // // import Link from 'next/link'
// // // // // // import Image from 'next/image'
// // // // // // import { useRouter } from 'next/navigation'
// // // // // // import { useState } from 'react'
// // // // // // import { LogOut, User } from 'lucide-react'

// // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // import {
// // // // // //   DropdownMenu,
// // // // // //   DropdownMenuTrigger,
// // // // // //   DropdownMenuContent,
// // // // // //   DropdownMenuItem,
// // // // // //   DropdownMenuSeparator,
// // // // // // } from '@/components/ui/dropdown-menu'

// // // // // // export default function Navbar() {
// // // // // //   const { session, logout, refreshSession } = useAuth()
// // // // // //   const router = useRouter()
// // // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // //   const [pendingLink, setPendingLink] = useState<string | null>(null)

// // // // // //   const handleAuthRedirect = (next: string) => {
// // // // // //     setPendingLink(next)
// // // // // //     setMode('login')
// // // // // //     setShowAuth(true)
// // // // // //   }

// // // // // //   const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
// // // // // //     <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
// // // // // //       <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // // //         <div className="flex h-16 items-center justify-between gap-3">{children}</div>
// // // // // //       </nav>
// // // // // //     </header>
// // // // // //   )

// // // // // //   if (!session) {
// // // // // //     return (
// // // // // //       <Shell>
// // // // // //         {/* brand */}
// // // // // //         <Link href="/" className="flex items-center gap-2 shrink-0">
// // // // // //           <Image src="/img/logo.png" alt="Travaky" width={32} height={32} className="h-8 w-8" priority />
// // // // // //           <span className="hidden sm:inline-block text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // // //             Travaky
// // // // // //           </span>
// // // // // //         </Link>

// // // // // //         {/* search */}
// // // // // //         <div className="hidden md:flex flex-1 justify-center">
// // // // // //           <div className="w-full max-w-xs md:max-w-sm">
// // // // // //             <JollySearchField onAuthRedirect={handleAuthRedirect} />
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* auth */}
// // // // // //         <button onClick={() => setShowAuth(true)} className="ml-auto text-sm font-medium text-primary hover:text-primary/80">
// // // // // //           Login / Sign-up
// // // // // //         </button>

// // // // // //         {showAuth && (
// // // // // //           <AuthDialog
// // // // // //             mode={mode}
// // // // // //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // // //             onSuccess={async () => {
// // // // // //               setShowAuth(false)
// // // // // //               await refreshSession()
// // // // // //               router.push(pendingLink ?? '/dashboard')
// // // // // //               setPendingLink(null)
// // // // // //             }}
// // // // // //             onClose={() => setShowAuth(false)}
// // // // // //           />
// // // // // //         )}
// // // // // //       </Shell>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <Shell>
// // // // // //       <Link href="/" className="flex items-center gap-2 shrink-0">
// // // // // //         <Image src="/img/logo.png" alt="Travaky" width={32} height={32} className="h-8 w-8" priority />
// // // // // //         <span className="hidden sm:inline-block text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // // //           Travaky
// // // // // //         </span>
// // // // // //       </Link>

// // // // // //       <div className="hidden md:flex flex-1 justify-center">
// // // // // //         <div className="w-full max-w-xs md:max-w-sm">
// // // // // //           <JollySearchField />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <DropdownMenu>
// // // // // //         <DropdownMenuTrigger asChild>
// // // // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none" aria-label="Account menu">
// // // // // //             <User className="h-5 w-5" />
// // // // // //           </button>
// // // // // //         </DropdownMenuTrigger>
// // // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // // //           <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
// // // // // //           {session.role === 'admin' && (
// // // // // //             <>
// // // // // //               <DropdownMenuSeparator />
// // // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // // // // //             </>
// // // // // //           )}
// // // // // //           <DropdownMenuSeparator />
// // // // // //           <DropdownMenuItem
// // // // // //             onClick={async () => {
// // // // // //               await logout()
// // // // // //               router.push('/')
// // // // // //             }}
// // // // // //           >
// // // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // // //           </DropdownMenuItem>
// // // // // //         </DropdownMenuContent>
// // // // // //       </DropdownMenu>
// // // // // //     </Shell>
// // // // // //   )
// // // // // // }


// // // // // 'use client'

// // // // // import { useState } from 'react'
// // // // // import Link from 'next/link'
// // // // // import Image from 'next/image'
// // // // // import { useRouter } from 'next/navigation'
// // // // // import { Button } from '@/components/ui/button'
// // // // // import { Menu, X, User, LogIn } from 'lucide-react'

// // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // import { useAuth } from '@/context/AuthContext'
// // // // // import {
// // // // //   DropdownMenu,
// // // // //   DropdownMenuTrigger,
// // // // //   DropdownMenuContent,
// // // // //   DropdownMenuItem,
// // // // //   DropdownMenuSeparator,
// // // // // } from '@/components/ui/dropdown-menu'

// // // // // export default function Navbar() {
// // // // //   const [isOpen, setIsOpen] = useState(false)
// // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// // // // //   const router = useRouter()
// // // // //   const { session, logout, refreshSession } = useAuth()

// // // // //   const openLogin = () => {
// // // // //     setMode('login')
// // // // //     setShowAuth(true)
// // // // //   }
// // // // //   const openSignup = () => {
// // // // //     setMode('signup')
// // // // //     setShowAuth(true)
// // // // //   }

// // // // //   return (
// // // // //     <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex justify-between items-center h-16">
// // // // //           {/* Logo (add Travaky logo + gradient text exactly like ui_hero) */}
// // // // //           <div className="flex items-center gap-2 flex-shrink-0">
// // // // //             <Image
// // // // //               src="/img/logo.png"
// // // // //               alt="Travaky"
// // // // //               width={28}
// // // // //               height={28}
// // // // //               className="h-8 w-8"
// // // // //               priority
// // // // //             />
// // // // //             <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // //               Travaky
// // // // //             </h1>
// // // // //           </div>

// // // // //           {/* Desktop Navigation (exact ui_hero links) */}
// // // // //           <div className="hidden md:block">
// // // // //             <div className="ml-10 flex items-baseline space-x-8">
// // // // //               <Link href="/#home" className="text-foreground hover:text-primary transition-colors font-medium">
// // // // //                 Home
// // // // //               </Link>
// // // // //               <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // // //                 About
// // // // //               </Link>
// // // // //               <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // // //                 Services
// // // // //               </Link>
// // // // //               <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // // //                 Contact
// // // // //               </Link>
// // // // //               {/* Dashboard behaves with base logic */}
// // // // //               <button
// // // // //                 onClick={() => {
// // // // //                   if (session) router.push('/dashboard')
// // // // //                   else openLogin()
// // // // //                 }}
// // // // //                 className="text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //               >
// // // // //                 Dashboard
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Desktop CTA / Account (exact ui_hero layout; base behavior) */}
// // // // //           <div className="hidden md:flex items-center space-x-4">
// // // // //             {!session ? (
// // // // //               <>
// // // // //                 <Button
// // // // //                   variant="ghost"
// // // // //                   size="sm"
// // // // //                   className="text-muted-foreground hover:text-primary"
// // // // //                   onClick={openLogin}
// // // // //                 >
// // // // //                   <LogIn className="mr-2 h-4 w-4" />
// // // // //                   Login
// // // // //                 </Button>
// // // // //                 <Button
// // // // //                   size="sm"
// // // // //                   className="bg-primary hover:bg-primary-600 text-primary-foreground"
// // // // //                   onClick={openSignup}
// // // // //                 >
// // // // //                   <User className="mr-2 h-4 w-4" />
// // // // //                   Sign Up
// // // // //                 </Button>
// // // // //               </>
// // // // //             ) : (
// // // // //               // Signed-in: keep desktop placement, show account menu (base behavior)
// // // // //               <DropdownMenu>
// // // // //                 <DropdownMenuTrigger asChild>
// // // // //                   <Button variant="outline" size="sm" className="gap-2">
// // // // //                     <User className="h-4 w-4" />
// // // // //                     Account
// // // // //                   </Button>
// // // // //                 </DropdownMenuTrigger>
// // // // //                 <DropdownMenuContent align="end" className="w-48">
// // // // //                   <DropdownMenuItem onClick={() => router.push('/dashboard')}>
// // // // //                     Dashboard
// // // // //                   </DropdownMenuItem>
// // // // //                   {session.role === 'admin' && (
// // // // //                     <>
// // // // //                       <DropdownMenuSeparator />
// // // // //                       <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // //                         Admin
// // // // //                       </DropdownMenuItem>
// // // // //                     </>
// // // // //                   )}
// // // // //                   <DropdownMenuSeparator />
// // // // //                   <DropdownMenuItem
// // // // //                     onClick={async () => {
// // // // //                       await logout()
// // // // //                       router.push('/')
// // // // //                     }}
// // // // //                   >
// // // // //                     Logout
// // // // //                   </DropdownMenuItem>
// // // // //                 </DropdownMenuContent>
// // // // //               </DropdownMenu>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Mobile menu button (exact ui_hero) */}
// // // // //           <div className="md:hidden">
// // // // //             <Button
// // // // //               variant="ghost"
// // // // //               size="sm"
// // // // //               onClick={() => setIsOpen(!isOpen)}
// // // // //               className="text-muted-foreground"
// // // // //               aria-label="Toggle navigation"
// // // // //             >
// // // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Mobile Navigation (exact ui_hero layout) */}
// // // // //         {isOpen && (
// // // // //           <div className="md:hidden">
// // // // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
// // // // //               <Link
// // // // //                 href="/#home"
// // // // //                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Home
// // // // //               </Link>
// // // // //               <Link
// // // // //                 href="/#about"
// // // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 About
// // // // //               </Link>
// // // // //               <Link
// // // // //                 href="/#services"
// // // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Services
// // // // //               </Link>
// // // // //               <Link
// // // // //                 href="/#contact"
// // // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => setIsOpen(false)}
// // // // //               >
// // // // //                 Contact
// // // // //               </Link>

// // // // //               {/* Dashboard item with base behavior */}
// // // // //               <button
// // // // //                 className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => {
// // // // //                   setIsOpen(false)
// // // // //                   if (session) router.push('/dashboard')
// // // // //                   else openLogin()
// // // // //                 }}
// // // // //               >
// // // // //                 Dashboard
// // // // //               </button>

// // // // //               <div className="pt-4 pb-3 space-y-3">
// // // // //                 {!session ? (
// // // // //                   <>
// // // // //                     <Button
// // // // //                       variant="ghost"
// // // // //                       size="sm"
// // // // //                       className="w-full justify-start text-muted-foreground"
// // // // //                       onClick={() => {
// // // // //                         setIsOpen(false)
// // // // //                         openLogin()
// // // // //                       }}
// // // // //                     >
// // // // //                       <LogIn className="mr-2 h-4 w-4" />
// // // // //                       Login
// // // // //                     </Button>
// // // // //                     <Button
// // // // //                       size="sm"
// // // // //                       className="w-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // // // //                       onClick={() => {
// // // // //                         setIsOpen(false)
// // // // //                         openSignup()
// // // // //                       }}
// // // // //                     >
// // // // //                       <User className="mr-2 h-4 w-4" />
// // // // //                       Sign Up
// // // // //                     </Button>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <>
// // // // //                     <Button
// // // // //                       variant="ghost"
// // // // //                       size="sm"
// // // // //                       className="w-full justify-start text-muted-foreground"
// // // // //                       onClick={() => {
// // // // //                         setIsOpen(false)
// // // // //                         router.push('/dashboard')
// // // // //                       }}
// // // // //                     >
// // // // //                       <User className="mr-2 h-4 w-4" />
// // // // //                       Dashboard
// // // // //                     </Button>
// // // // //                     {session.role === 'admin' && (
// // // // //                       <Button
// // // // //                         variant="ghost"
// // // // //                         size="sm"
// // // // //                         className="w-full justify-start text-muted-foreground"
// // // // //                         onClick={() => {
// // // // //                           setIsOpen(false)
// // // // //                           router.push('/admin')
// // // // //                         }}
// // // // //                       >
// // // // //                         Admin
// // // // //                       </Button>
// // // // //                     )}
// // // // //                     <Button
// // // // //                       size="sm"
// // // // //                       className="w-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // // // //                       onClick={async () => {
// // // // //                         setIsOpen(false)
// // // // //                         await logout()
// // // // //                         router.push('/')
// // // // //                       }}
// // // // //                     >
// // // // //                       Logout
// // // // //                     </Button>
// // // // //                   </>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Auth modal (base behavior) */}
// // // // //       {showAuth && (
// // // // //         <AuthDialog
// // // // //           mode={mode}
// // // // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // //           onSuccess={async () => {
// // // // //             setShowAuth(false)
// // // // //             await refreshSession()
// // // // //             router.push('/dashboard')
// // // // //           }}
// // // // //           onClose={() => setShowAuth(false)}
// // // // //         />
// // // // //       )}
// // // // //     </nav>
// // // // //   )
// // // // // }


// // // // // // src/components/nav/Navbar.tsx
// // // // // 'use client'

// // // // // import { useState } from 'react'
// // // // // import Link from 'next/link'
// // // // // import Image from 'next/image'
// // // // // import { useRouter } from 'next/navigation'
// // // // // import { Button } from '@/components/ui/button'
// // // // // import { Menu, X, User, LogIn } from 'lucide-react'

// // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // import { useAuth } from '@/context/AuthContext'
// // // // // import {
// // // // //   DropdownMenu,
// // // // //   DropdownMenuTrigger,
// // // // //   DropdownMenuContent,
// // // // //   DropdownMenuItem,
// // // // //   DropdownMenuSeparator,
// // // // // } from '@/components/ui/dropdown-menu'

// // // // // export default function Navbar() {
// // // // //   const [isOpen, setIsOpen] = useState(false)
// // // // //   const [showAuth, setShowAuth] = useState(false)
// // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// // // // //   const router = useRouter()
// // // // //   const { session, logout, refreshSession } = useAuth()

// // // // //   const openLogin = () => { setMode('login'); setShowAuth(true) }
// // // // //   const openSignup = () => { setMode('signup'); setShowAuth(true) }

// // // // //   return (
// // // // //     // FIX: use fixed so it stays visible regardless of scroll container/overflow
// // // // //     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
// // // // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex justify-between items-center h-16">
// // // // //           {/* Logo + wordmark exactly like ui_hero */}
// // // // //           <div className="flex items-center gap-2 flex-shrink-0">
// // // // //             <Image
// // // // //               src="/img/logo.png"
// // // // //               alt="Travaky"
// // // // //               width={28}
// // // // //               height={28}
// // // // //               className="h-8 w-8"
// // // // //               priority
// // // // //             />
// // // // //             <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
// // // // //               Travaky
// // // // //             </h1>
// // // // //           </div>

// // // // //           {/* Desktop Navigation (ui_hero links) */}
// // // // //           <div className="hidden md:block">
// // // // //             <div className="ml-10 flex items-baseline space-x-8">
// // // // //               <Link href="/#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
// // // // //               <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
// // // // //               <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</Link>
// // // // //               <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</Link>
// // // // //               <button
// // // // //                 onClick={() => (session ? router.push('/dashboard') : openLogin())}
// // // // //                 className="text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //               >
// // // // //                 Dashboard
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Desktop CTA / Account (base behavior kept) */}
// // // // //           <div className="hidden md:flex items-center space-x-4">
// // // // //             {!session ? (
// // // // //               <>
// // // // //                 <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={openLogin}>
// // // // //                   <LogIn className="mr-2 h-4 w-4" />
// // // // //                   Login
// // // // //                 </Button>
// // // // //                 <Button size="sm" className="bg-primary hover:bg-primary-600 text-primary-foreground" onClick={openSignup}>
// // // // //                   <User className="mr-2 h-4 w-4" />
// // // // //                   Sign Up
// // // // //                 </Button>
// // // // //               </>
// // // // //             ) : (
// // // // //               <DropdownMenu>
// // // // //                 <DropdownMenuTrigger asChild>
// // // // //                   <Button variant="outline" size="sm" className="gap-2">
// // // // //                     <User className="h-4 w-4" />
// // // // //                     Account
// // // // //                   </Button>
// // // // //                 </DropdownMenuTrigger>
// // // // //                 <DropdownMenuContent align="end" className="w-48">
// // // // //                   <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
// // // // //                   {session.role === 'admin' && (
// // // // //                     <>
// // // // //                       <DropdownMenuSeparator />
// // // // //                       <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // // // //                     </>
// // // // //                   )}
// // // // //                   <DropdownMenuSeparator />
// // // // //                   <DropdownMenuItem
// // // // //                     onClick={async () => {
// // // // //                       await logout()
// // // // //                       router.push('/')
// // // // //                     }}
// // // // //                   >
// // // // //                     Logout
// // // // //                   </DropdownMenuItem>
// // // // //                 </DropdownMenuContent>
// // // // //               </DropdownMenu>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Mobile menu button (ui_hero) */}
// // // // //           <div className="md:hidden">
// // // // //             <Button
// // // // //               variant="ghost"
// // // // //               size="sm"
// // // // //               onClick={() => setIsOpen(!isOpen)}
// // // // //               className="text-muted-foreground"
// // // // //               aria-label="Toggle navigation"
// // // // //             >
// // // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Mobile Navigation (ui_hero) */}
// // // // //         {isOpen && (
// // // // //           <div className="md:hidden">
// // // // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
// // // // //               <Link href="/#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Home</Link>
// // // // //               <Link href="/#about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>About</Link>
// // // // //               <Link href="/#services" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Services</Link>
// // // // //               <Link href="/#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Contact</Link>

// // // // //               {/* Dashboard item (base behavior) */}
// // // // //               <button
// // // // //                 className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // // //                 onClick={() => {
// // // // //                   setIsOpen(false)
// // // // //                   session ? router.push('/dashboard') : openLogin()
// // // // //                 }}
// // // // //               >
// // // // //                 Dashboard
// // // // //               </button>

// // // // //               <div className="pt-4 pb-3 space-y-3">
// // // // //                 {!session ? (
// // // // //                   <>
// // // // //                     <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => { setIsOpen(false); openLogin() }}>
// // // // //                       <LogIn className="mr-2 h-4 w-4" />
// // // // //                       Login
// // // // //                     </Button>
// // // // //                     <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-primary-foreground" onClick={() => { setIsOpen(false); openSignup() }}>
// // // // //                       <User className="mr-2 h-4 w-4" />
// // // // //                       Sign Up
// // // // //                     </Button>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <>
// // // // //                     <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => { setIsOpen(false); router.push('/dashboard') }}>
// // // // //                       <User className="mr-2 h-4 w-4" />
// // // // //                       Dashboard
// // // // //                     </Button>
// // // // //                     {session.role === 'admin' && (
// // // // //                       <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => { setIsOpen(false); router.push('/admin') }}>
// // // // //                         Admin
// // // // //                       </Button>
// // // // //                     )}
// // // // //                     <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-primary-foreground" onClick={async () => { setIsOpen(false); await logout(); router.push('/') }}>
// // // // //                       Logout
// // // // //                     </Button>
// // // // //                   </>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </nav>

// // // // //       {/* Auth modal (base behavior) */}
// // // // //       {showAuth && (
// // // // //         <AuthDialog
// // // // //           mode={mode}
// // // // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // //           onSuccess={async () => {
// // // // //             setShowAuth(false)
// // // // //             await refreshSession()
// // // // //             router.push('/dashboard')
// // // // //           }}
// // // // //           onClose={() => setShowAuth(false)}
// // // // //         />
// // // // //       )}
// // // // //     </header>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import { useState } from 'react'
// // // // import Link from 'next/link'
// // // // import Image from 'next/image'
// // // // import { useRouter } from 'next/navigation'
// // // // import { LogOut, LogIn, Menu, User, X } from 'lucide-react'

// // // // import { Button } from '@/components/ui/button'
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuTrigger,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // //   DropdownMenuSeparator,
// // // // } from '@/components/ui/dropdown-menu'
// // // // import { useAuth } from '@/context/AuthContext'
// // // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // // export default function Navbar() {
// // // //   const router = useRouter()
// // // //   const { session, logout, refreshSession } = useAuth()

// // // //   const [isOpen, setIsOpen] = useState(false)
// // // //   const [showAuth, setShowAuth] = useState(false)
// // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// // // //   const onAuthSuccess = async (redirect = '/dashboard') => {
// // // //     setShowAuth(false)
// // // //     await refreshSession()
// // // //     router.push(redirect)
// // // //   }

// // // //   return (
// // // //     <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Row */}
// // // //         <div className="flex justify-between items-center h-16">
// // // //           {/* Brand (logo + wordmark) */}
// // // //           <Link href="/" className="flex items-center gap-3">
// // // //             {/* logo image (optional) */}
// // // //             <Image
// // // //               src="/img/logo.png"
// // // //               alt="Travaky"
// // // //               width={28}
// // // //               height={28}
// // // //               className="h-7 w-7 rounded-full object-contain"
// // // //               priority
// // // //             />
// // // //             <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent leading-none">
// // // //               Travaky
// // // //             </span>
// // // //           </Link>

// // // //           {/* Desktop nav links */}
// // // //           <div className="hidden md:block">
// // // //             <div className="ml-10 flex items-baseline space-x-8">
// // // //               <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
// // // //                 Home
// // // //               </a>
// // // //               <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // //                 About
// // // //               </a>
// // // //               <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // //                 Services
// // // //               </a>
// // // //               <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // //                 Contact
// // // //               </a>
// // // //               <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // // //                 Dashboard
// // // //               </Link>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right-side actions */}
// // // //           <div className="hidden md:flex items-center space-x-4">
// // // //             {!session ? (
// // // //               <>
// // // //                 <Button
// // // //                   variant="ghost"
// // // //                   size="sm"
// // // //                   className="text-muted-foreground hover:text-primary"
// // // //                   onClick={() => {
// // // //                     setMode('login')
// // // //                     setShowAuth(true)
// // // //                   }}
// // // //                 >
// // // //                   <LogIn className="mr-2 h-4 w-4" />
// // // //                   Login
// // // //                 </Button>
// // // //                 <Button
// // // //                   size="sm"
// // // //                   className="rounded-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // // //                   onClick={() => {
// // // //                     setMode('signup')
// // // //                     setShowAuth(true)
// // // //                   }}
// // // //                 >
// // // //                   <User className="mr-2 h-4 w-4" />
// // // //                   Sign Up
// // // //                 </Button>
// // // //               </>
// // // //             ) : (
// // // //               <DropdownMenu>
// // // //                 <DropdownMenuTrigger asChild>
// // // //                   <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-600">
// // // //                     <User className="mr-2 h-4 w-4" />
// // // //                     Account
// // // //                   </Button>
// // // //                 </DropdownMenuTrigger>
// // // //                 <DropdownMenuContent align="end" className="w-48">
// // // //                   <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
// // // //                   {session.role === 'admin' && (
// // // //                     <>
// // // //                       <DropdownMenuSeparator />
// // // //                       <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // // //                     </>
// // // //                   )}
// // // //                   <DropdownMenuSeparator />
// // // //                   <DropdownMenuItem
// // // //                     onClick={async () => {
// // // //                       await logout()
// // // //                       router.push('/')
// // // //                     }}
// // // //                   >
// // // //                     <LogOut className="mr-2 h-4 w-4" /> Logout
// // // //                   </DropdownMenuItem>
// // // //                 </DropdownMenuContent>
// // // //               </DropdownMenu>
// // // //             )}
// // // //           </div>

// // // //           {/* Mobile hamburger */}
// // // //           <div className="md:hidden">
// // // //             <Button
// // // //               variant="ghost"
// // // //               size="sm"
// // // //               onClick={() => setIsOpen((v) => !v)}
// // // //               className="text-muted-foreground"
// // // //               aria-label="Toggle menu"
// // // //             >
// // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // //             </Button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile panel */}
// // // //         {isOpen && (
// // // //           <div className="md:hidden">
// // // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
// // // //               <a
// // // //                 href="#home"
// // // //                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
// // // //                 onClick={() => setIsOpen(false)}
// // // //               >
// // // //                 Home
// // // //               </a>
// // // //               <a
// // // //                 href="#about"
// // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // //                 onClick={() => setIsOpen(false)}
// // // //               >
// // // //                 About
// // // //               </a>
// // // //               <a
// // // //                 href="#services"
// // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // //                 onClick={() => setIsOpen(false)}
// // // //               >
// // // //                 Services
// // // //               </a>
// // // //               <a
// // // //                 href="#contact"
// // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // //                 onClick={() => setIsOpen(false)}
// // // //               >
// // // //                 Contact
// // // //               </a>
// // // //               <Link
// // // //                 href="/dashboard"
// // // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // // //                 onClick={() => setIsOpen(false)}
// // // //               >
// // // //                 Dashboard
// // // //               </Link>

// // // //               <div className="pt-4 pb-3 space-y-3">
// // // //                 {!session ? (
// // // //                   <>
// // // //                     <Button
// // // //                       variant="ghost"
// // // //                       size="sm"
// // // //                       className="w-full justify-start text-muted-foreground"
// // // //                       onClick={() => {
// // // //                         setMode('login')
// // // //                         setShowAuth(true)
// // // //                         setIsOpen(false)
// // // //                       }}
// // // //                     >
// // // //                       <LogIn className="mr-2 h-4 w-4" />
// // // //                       Login
// // // //                     </Button>
// // // //                     <Button
// // // //                       size="sm"
// // // //                       className="w-full rounded-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // // //                       onClick={() => {
// // // //                         setMode('signup')
// // // //                         setShowAuth(true)
// // // //                         setIsOpen(false)
// // // //                       }}
// // // //                     >
// // // //                       <User className="mr-2 h-4 w-4" />
// // // //                       Sign Up
// // // //                     </Button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       size="sm"
// // // //                       className="w-full justify-start"
// // // //                       onClick={() => {
// // // //                         router.push('/dashboard')
// // // //                         setIsOpen(false)
// // // //                       }}
// // // //                     >
// // // //                       Dashboard
// // // //                     </Button>
// // // //                     {session.role === 'admin' && (
// // // //                       <Button
// // // //                         variant="outline"
// // // //                         size="sm"
// // // //                         className="w-full justify-start"
// // // //                         onClick={() => {
// // // //                           router.push('/admin')
// // // //                           setIsOpen(false)
// // // //                         }}
// // // //                       >
// // // //                         Admin
// // // //                       </Button>
// // // //                     )}
// // // //                     <Button
// // // //                       variant="ghost"
// // // //                       size="sm"
// // // //                       className="w-full justify-start text-destructive"
// // // //                       onClick={async () => {
// // // //                         await logout()
// // // //                         router.push('/')
// // // //                         setIsOpen(false)
// // // //                       }}
// // // //                     >
// // // //                       <LogOut className="mr-2 h-4 w-4" />
// // // //                       Logout
// // // //                     </Button>
// // // //                   </>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Auth dialog (reuses your base behaviour) */}
// // // //       {showAuth && (
// // // //         <AuthDialog
// // // //           mode={mode}
// // // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // //           onSuccess={onAuthSuccess}
// // // //           onClose={() => setShowAuth(false)}
// // // //         />
// // // //       )}
// // // //     </nav>
// // // //   )
// // // // }


// // // 'use client'

// // // import { useState } from 'react'
// // // import Link from 'next/link'
// // // import Image from 'next/image'
// // // import { useRouter } from 'next/navigation'
// // // import { LogOut, LogIn, Menu, User, X } from 'lucide-react'

// // // import { Button } from '@/components/ui/button'
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuTrigger,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuSeparator,
// // // } from '@/components/ui/dropdown-menu'
// // // import { useAuth } from '@/context/AuthContext'
// // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // const NAVBAR_HEIGHT = 64

// // // export default function Navbar() {
// // //   const router = useRouter()
// // //   const { session, logout, refreshSession } = useAuth()

// // //   const [isOpen, setIsOpen] = useState(false)
// // //   const [showAuth, setShowAuth] = useState(false)
// // //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// // //   const onAuthSuccess = async (redirect = '/dashboard') => {
// // //     setShowAuth(false)
// // //     await refreshSession()
// // //     router.push(redirect)
// // //   }

// // //   return (
// // //     <>
// // //       {/* Fixed glass bar */}
// // //       <nav
// // //         className={[
// // //           'fixed inset-x-0 top-0 z-[60]',
// // //           'h-16 border-b border-border',
// // //           'bg-background/80 backdrop-blur-lg backdrop-saturate-150',
// // //         ].join(' ')}
// // //       >
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
// // //           <div className="flex justify-between items-center h-full">
// // //             {/* Brand */}
// // //             <Link href="/" className="flex items-center gap-3">
// // //               <Image
// // //                 src="/img/logo.png"
// // //                 alt="Travaky"
// // //                 width={28}
// // //                 height={28}
// // //                 className="h-7 w-7 rounded-full object-contain"
// // //                 priority
// // //               />
// // //               <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent leading-none">
// // //                 Travaky
// // //               </span>
// // //             </Link>

// // //             {/* Desktop links */}
// // //             <div className="hidden md:block">
// // //               <div className="ml-10 flex items-baseline space-x-8">
// // //                 <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
// // //                   Home
// // //                 </a>
// // //                 <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // //                   About
// // //                 </a>
// // //                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // //                   Services
// // //                 </a>
// // //                 <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // //                   Contact
// // //                 </a>
// // //                 <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// // //                   Dashboard
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             {/* Right actions */}
// // //             <div className="hidden md:flex items-center space-x-4">
// // //               {!session ? (
// // //                 <>
// // //                   <Button
// // //                     variant="ghost"
// // //                     size="sm"
// // //                     className="text-muted-foreground hover:text-primary"
// // //                     onClick={() => { setMode('login'); setShowAuth(true) }}
// // //                   >
// // //                     <LogIn className="mr-2 h-4 w-4" />
// // //                     Login
// // //                   </Button>
// // //                   <Button
// // //                     size="sm"
// // //                     className="rounded-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // //                     onClick={() => { setMode('signup'); setShowAuth(true) }}
// // //                   >
// // //                     <User className="mr-2 h-4 w-4" />
// // //                     Sign Up
// // //                   </Button>
// // //                 </>
// // //               ) : (
// // //                 <DropdownMenu>
// // //                   <DropdownMenuTrigger asChild>
// // //                     <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-600">
// // //                       <User className="mr-2 h-4 w-4" />
// // //                       Account
// // //                     </Button>
// // //                   </DropdownMenuTrigger>
// // //                   <DropdownMenuContent align="end" className="w-48">
// // //                     <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
// // //                     {session.role === 'admin' && (
// // //                       <>
// // //                         <DropdownMenuSeparator />
// // //                         <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // //                       </>
// // //                     )}
// // //                     <DropdownMenuSeparator />
// // //                     <DropdownMenuItem
// // //                       onClick={async () => {
// // //                         await logout()
// // //                         router.push('/')
// // //                       }}
// // //                     >
// // //                       <LogOut className="mr-2 h-4 w-4" /> Logout
// // //                     </DropdownMenuItem>
// // //                   </DropdownMenuContent>
// // //                 </DropdownMenu>
// // //               )}
// // //             </div>

// // //             {/* Mobile burger */}
// // //             <div className="md:hidden">
// // //               <Button
// // //                 variant="ghost"
// // //                 size="sm"
// // //                 onClick={() => setIsOpen(v => !v)}
// // //                 className="text-muted-foreground"
// // //                 aria-label="Toggle menu"
// // //               >
// // //                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Mobile panel */}
// // //         {isOpen && (
// // //           <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
// // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // //               {[
// // //                 ['#home', 'Home'],
// // //                 ['#about', 'About'],
// // //                 ['#services', 'Services'],
// // //                 ['#contact', 'Contact'],
// // //               ].map(([href, label]) => (
// // //                 <a
// // //                   key={href}
// // //                   href={href}
// // //                   className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // //                   onClick={() => setIsOpen(false)}
// // //                 >
// // //                   {label}
// // //                 </a>
// // //               ))}
// // //               <Link
// // //                 href="/dashboard"
// // //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// // //                 onClick={() => setIsOpen(false)}
// // //               >
// // //                 Dashboard
// // //               </Link>

// // //               <div className="pt-4 pb-3 space-y-3">
// // //                 {!session ? (
// // //                   <>
// // //                     <Button
// // //                       variant="ghost"
// // //                       size="sm"
// // //                       className="w-full justify-start text-muted-foreground"
// // //                       onClick={() => { setMode('login'); setShowAuth(true); setIsOpen(false) }}
// // //                     >
// // //                       <LogIn className="mr-2 h-4 w-4" />
// // //                       Login
// // //                     </Button>
// // //                     <Button
// // //                       size="sm"
// // //                       className="w-full rounded-full bg-primary hover:bg-primary-600 text-primary-foreground"
// // //                       onClick={() => { setMode('signup'); setShowAuth(true); setIsOpen(false) }}
// // //                     >
// // //                       <User className="mr-2 h-4 w-4" />
// // //                       Sign Up
// // //                     </Button>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <Button
// // //                       variant="outline"
// // //                       size="sm"
// // //                       className="w-full justify-start"
// // //                       onClick={() => { router.push('/dashboard'); setIsOpen(false) }}
// // //                     >
// // //                       Dashboard
// // //                     </Button>
// // //                     {session.role === 'admin' && (
// // //                       <Button
// // //                         variant="outline"
// // //                         size="sm"
// // //                         className="w-full justify-start"
// // //                         onClick={() => { router.push('/admin'); setIsOpen(false) }}
// // //                       >
// // //                         Admin
// // //                       </Button>
// // //                     )}
// // //                     <Button
// // //                       variant="ghost"
// // //                       size="sm"
// // //                       className="w-full justify-start text-destructive"
// // //                       onClick={async () => {
// // //                         await logout()
// // //                         router.push('/')
// // //                         setIsOpen(false)
// // //                       }}
// // //                     >
// // //                       <LogOut className="mr-2 h-4 w-4" />
// // //                       Logout
// // //                     </Button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </nav>

// // //       {/* Spacer so content doesn't hide under fixed bar */}
// // //       <div style={{ height: NAVBAR_HEIGHT }} aria-hidden />
// // //       {/* Auth dialog */}
// // //       {showAuth && (
// // //         <AuthDialog
// // //           mode={mode}
// // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // //           onSuccess={onAuthSuccess}
// // //           onClose={() => setShowAuth(false)}
// // //         />
// // //       )}
// // //     </>
// // //   )
// // // }


// // 'use client'

// // import { useState } from 'react'
// // import Link from 'next/link'
// // import Image from 'next/image'
// // import { useRouter } from 'next/navigation'
// // import { LogOut, LogIn, Menu, User, X } from 'lucide-react'

// // import { Button } from '@/components/ui/button'
// // import {
// //   DropdownMenu,
// //   DropdownMenuTrigger,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuSeparator,
// // } from '@/components/ui/dropdown-menu'
// // import { useAuth } from '@/context/AuthContext'
// // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // const NAVBAR_HEIGHT = 64

// // export default function Navbar() {
// //   const router = useRouter()
// //   const { session, logout, refreshSession } = useAuth()

// //   const [isOpen, setIsOpen] = useState(false)
// //   const [showAuth, setShowAuth] = useState(false)
// //   const [mode, setMode] = useState<'login' | 'signup'>('login')

// //   const onAuthSuccess = async (redirect = '/dashboard') => {
// //     setShowAuth(false)
// //     await refreshSession()
// //     router.push(redirect)
// //   }

// //   return (
// //     <>
// //       {/* Fixed glass nav (ui_hero look) */}
// //       <nav
// //         className={[
// //           'fixed inset-x-0 top-0 z-[60]',
// //           'h-16 border-b border-border',
// //           'bg-background/80 backdrop-blur-lg backdrop-saturate-150',
// //         ].join(' ')}
// //         role="navigation"
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
// //           <div className="flex justify-between items-center h-full">
// //             {/* Brand */}
// //             <Link href="/" className="flex items-center gap-3">
// //               <Image
// //                 src="/img/logo.png"
// //                 alt="Travaky"
// //                 width={40}
// //                 height={40}
// //                 className="h-10 w-10 md:h-10 md:w-10 object-contain"
// //                 priority
// //               />
// //               {/* force-clip guarantees gradient text isn't overridden */}
// //               <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent force-clip leading-none tracking-tight">
// //                 Travaky
// //               </span>
// //             </Link>

// //             {/* Desktop links */}
// //             <div className="hidden md:block">
// //               <div className="ml-10 flex items-baseline space-x-8">
// //                 <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
// //                   Home
// //                 </a>
// //                 <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// //                   About
// //                 </a>
// //                 <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// //                   Services
// //                 </a>
// //                 <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// //                   Contact
// //                 </a>
// //                 <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors font-medium">
// //                   Dashboard
// //                 </Link>
// //               </div>
// //             </div>

// //             {/* Right actions */}
// //             <div className="hidden md:flex items-center space-x-4">
// //               {!session ? (
// //                 <>
// //                   {/* Login: turns blue on hover */}
// //                   <Button
// //                     variant="ghost"
// //                     size="sm"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                     onClick={() => { setMode('login'); setShowAuth(true) }}
// //                   >
// //                     <LogIn className="mr-2 h-4 w-4" />
// //                     Login
// //                   </Button>

// //                   {/* Sign Up: pill, richer blue on hover */}
// //                   <Button
// //                     size="sm"
// //                     className="rounded-full bg-primary text-primary-foreground hover:bg-primary-600 transition-colors"
// //                     onClick={() => { setMode('signup'); setShowAuth(true) }}
// //                   >
// //                     <User className="mr-2 h-4 w-4" />
// //                     Sign Up
// //                   </Button>
// //                 </>
// //               ) : (
// //                 <DropdownMenu>
// //                   <DropdownMenuTrigger asChild>
// //                     <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-600 transition-colors">
// //                       <User className="mr-2 h-4 w-4" />
// //                       Account
// //                     </Button>
// //                   </DropdownMenuTrigger>
// //                   <DropdownMenuContent align="end" className="w-48">
// //                     <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
// //                     {session.role === 'admin' && (
// //                       <>
// //                         <DropdownMenuSeparator />
// //                         <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// //                       </>
// //                     )}
// //                     <DropdownMenuSeparator />
// //                     <DropdownMenuItem
// //                       onClick={async () => {
// //                         await logout()
// //                         router.push('/')
// //                       }}
// //                     >
// //                       <LogOut className="mr-2 h-4 w-4" /> Logout
// //                     </DropdownMenuItem>
// //                   </DropdownMenuContent>
// //                 </DropdownMenu>
// //               )}
// //             </div>

// //             {/* Mobile burger */}
// //             <div className="md:hidden">
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 onClick={() => setIsOpen(v => !v)}
// //                 className="text-muted-foreground"
// //                 aria-label="Toggle menu"
// //               >
// //                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //               </Button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile panel */}
// //         {isOpen && (
// //           <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
// //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //               {[
// //                 ['#home', 'Home'],
// //                 ['#about', 'About'],
// //                 ['#services', 'Services'],
// //                 ['#contact', 'Contact'],
// //               ].map(([href, label]) => (
// //                 <a
// //                   key={href}
// //                   href={href}
// //                   className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   {label}
// //                 </a>
// //               ))}
// //               <Link
// //                 href="/dashboard"
// //                 className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Dashboard
// //               </Link>

// //               <div className="pt-4 pb-3 space-y-3">
// //                 {!session ? (
// //                   <>
// //                     <Button
// //                       variant="ghost"
// //                       size="sm"
// //                       className="w-full justify-start text-muted-foreground hover:text-primary transition-colors"
// //                       onClick={() => { setMode('login'); setShowAuth(true); setIsOpen(false) }}
// //                     >
// //                       <LogIn className="mr-2 h-4 w-4" />
// //                       Login
// //                     </Button>
// //                     <Button
// //                       size="sm"
// //                       className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-600 transition-colors"
// //                       onClick={() => { setMode('signup'); setShowAuth(true); setIsOpen(false) }}
// //                     >
// //                       <User className="mr-2 h-4 w-4" />
// //                       Sign Up
// //                     </Button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Button
// //                       variant="outline"
// //                       size="sm"
// //                       className="w-full justify-start"
// //                       onClick={() => { router.push('/dashboard'); setIsOpen(false) }}
// //                     >
// //                       Dashboard
// //                     </Button>
// //                     {session.role === 'admin' && (
// //                       <Button
// //                         variant="outline"
// //                         size="sm"
// //                         className="w-full justify-start"
// //                         onClick={() => { router.push('/admin'); setIsOpen(false) }}
// //                       >
// //                         Admin
// //                       </Button>
// //                     )}
// //                     <Button
// //                       variant="ghost"
// //                       size="sm"
// //                       className="w-full justify-start text-destructive"
// //                       onClick={async () => {
// //                         await logout()
// //                         router.push('/')
// //                         setIsOpen(false)
// //                       }}
// //                     >
// //                       <LogOut className="mr-2 h-4 w-4" />
// //                       Logout
// //                     </Button>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </nav>

// //       {/* Spacer so content doesn't hide under the fixed bar */}
// //       <div style={{ height: NAVBAR_HEIGHT }} aria-hidden />
// //       {/* Auth dialog */}
// //       {showAuth && (
// //         <AuthDialog
// //           mode={mode}
// //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// //           onSuccess={onAuthSuccess}
// //           onClose={() => setShowAuth(false)}
// //         />
// //       )}
// //     </>
// //   )
// // }


// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { LogOut, LogIn, Menu, User, X } from 'lucide-react'
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
// import { useAuth } from '@/context/AuthContext'
// import { AuthDialog } from '@/components/ui/auth-dialogs'

// const NAVBAR_HEIGHT = 64

// export default function Navbar() {
//   const router = useRouter()
//   const { session, logout, refreshSession } = useAuth()
//   const [isOpen, setIsOpen] = useState(false)
//   const [showAuth, setShowAuth] = useState(false)
//   const [mode, setMode] = useState<'login' | 'signup'>('login')

//   const onAuthSuccess = async (redirect = '/dashboard') => {
//     setShowAuth(false)
//     await refreshSession()
//     router.push(redirect)
//   }

//   return (
//     <>
//       <nav className="tvk-nav" role="navigation">
//         <div className="tvk-nav__wrap">
//           <div className="tvk-nav__row">
//             {/* Brand */}
//             <Link href="/" className="tvk-nav__brand" aria-label="Travaky Home">
//               <Image
//                 src="/img/logo.png"
//                 alt="Travaky logo"
//                 width={44}
//                 height={44}
//                 className="tvk-nav__logo"
//                 priority
//               />
//               {/* inline style duplicates gradient to guarantee visibility */}
//               <span
//                 className="tvk-nav__word"
//                 style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
//               >
//                 Travaky
//               </span>
//             </Link>

//             {/* Desktop links */}
//             <div className="tvk-nav__links">
//               <div className="tvk-nav__list">
//                 <a href="#home" className="tvk-nav__link">Home</a>
//                 <a href="#about" className="tvk-nav__link muted">About</a>
//                 <a href="#services" className="tvk-nav__link muted">Services</a>
//                 <a href="#contact" className="tvk-nav__link muted">Contact</a>
//                 <Link href="/dashboard" className="tvk-nav__link muted">Dashboard</Link>
//               </div>
//             </div>

//             {/* Right actions (desktop) */}
//             <div className="tvk-nav__actions">
//               {!session ? (
//                 <>
//                   <button
//                     type="button"
//                     className="tvk-btn--ghost"
//                     onClick={() => { setMode('login'); setShowAuth(true) }}
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <LogIn className="h-4 w-4" /> Login
//                     </span>
//                   </button>
//                   <button
//                     type="button"
//                     className="tvk-btn--pill"
//                     onClick={() => { setMode('signup'); setShowAuth(true) }}
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <User className="h-4 w-4" /> Sign Up
//                     </span>
//                   </button>
//                 </>
//               ) : (
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <button type="button" className="tvk-btn--pill">
//                       <span className="inline-flex items-center gap-2">
//                         <User className="h-4 w-4" /> Account
//                       </span>
//                     </button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end" className="w-48">
//                     <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
//                     {session.role === 'admin' && (
//                       <>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
//                       </>
//                     )}
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem
//                       onClick={async () => { await logout(); router.push('/') }}
//                     >
//                       <LogOut className="mr-2 h-4 w-4" /> Logout
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               )}
//             </div>

//             {/* Mobile burger */}
//             <button
//               type="button"
//               className="tvk-nav__burger md:hidden"
//               onClick={() => setIsOpen(v => !v)}
//               aria-label="Toggle navigation"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile panel */}
//         {isOpen && (
//           <div className="tvk-nav__panel md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {[
//                 ['#home', 'Home'],
//                 ['#about', 'About'],
//                 ['#services', 'Services'],
//                 ['#contact', 'Contact'],
//               ].map(([href, label]) => (
//                 <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
//               ))}
//               <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>

//               <div className="pt-4 pb-3 space-y-3">
//                 {!session ? (
//                   <>
//                     <button
//                       type="button"
//                       className="tvk-btn--ghost w-full text-left"
//                       onClick={() => { setMode('login'); setShowAuth(true); setIsOpen(false) }}
//                     >
//                       <span className="inline-flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</span>
//                     </button>
//                     <button
//                       type="button"
//                       className="tvk-btn--pill w-full"
//                       onClick={() => { setMode('signup'); setShowAuth(true); setIsOpen(false) }}
//                     >
//                       <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> Sign Up</span>
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       type="button"
//                       className="tvk-btn--ghost w-full text-left"
//                       onClick={() => { router.push('/dashboard'); setIsOpen(false) }}
//                     >
//                       Dashboard
//                     </button>
//                     {session.role === 'admin' && (
//                       <button
//                         type="button"
//                         className="tvk-btn--ghost w-full text-left"
//                         onClick={() => { router.push('/admin'); setIsOpen(false) }}
//                       >
//                         Admin
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       className="tvk-btn--ghost w-full text-left"
//                       onClick={async () => { await logout(); router.push('/'); setIsOpen(false) }}
//                     >
//                       <span className="inline-flex items-center gap-2"><LogOut className="h-4 w-4" /> Logout</span>
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Spacer so content doesn't hide under the fixed bar */}
//       <div style={{ height: NAVBAR_HEIGHT }} aria-hidden />
      
//       {/* Auth dialog (base behavior) */}
//       {showAuth && (
//         <AuthDialog
//           mode={mode}
//           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
//           onSuccess={onAuthSuccess}
//           onClose={() => setShowAuth(false)}
//         />
//       )}
//     </>
//   )
'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { LogOut, LogIn, Menu, User, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { useAuth } from '@/context/AuthContext'
import { AuthDialog } from '@/components/ui/auth-dialogs'

const NAVBAR_HEIGHT = 64

function NavbarContent() {
  const router = useRouter()
  const pathname = usePathname()
  const qs = useSearchParams()
  const { session, logout, refreshSession } = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [nextDest, setNextDest] = useState<string>('/dashboard')

  const onAuthSuccess = async (redirect?: string) => {
    setShowAuth(false)
    await refreshSession()
    router.push(redirect || nextDest || '/dashboard')
  }

  // Open Auth dialog when ?auth=login|signup is present; use ?next=<url> if provided
  useEffect(() => {
    const auth = qs.get('auth')
    const next = qs.get('next') || '/dashboard'

    if (auth === 'login' || auth === 'signup') {
      if (session) {
        // already logged in: go straight to next
        router.replace(pathname)
        router.push(next)
        return
      }
      setMode(auth)
      setNextDest(next)
      setShowAuth(true)
      // clean the URL so it won't reopen on refresh
      router.replace(pathname)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qs, pathname, session])

  return (
    <>
      <nav className="tvk-nav" role="navigation">
        <div className="tvk-nav__wrap">
          <div className="tvk-nav__row">
            {/* Brand */}
            <Link href="/" className="tvk-nav__brand" aria-label="Travaky Home">
              <Image
                src="/img/logo.png"
                alt="Travaky logo"
                width={52}
                height={52}
                className="tvk-nav__logo"
                priority
              />
              <span
                className="tvk-nav__word"
                style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-600)))' }}
              >
                Travaky
              </span>
            </Link>

            {/* Desktop links */}
            <div className="tvk-nav__links">
              <div className="tvk-nav__list">
                <Link href="/" className="tvk-nav__link">Home</Link>
                <Link href="/about" className="tvk-nav__link muted">About</Link>
                <a href="#services" className="tvk-nav__link muted">Services</a>
                <Link href="/support" className="tvk-nav__link muted">Contact</Link>
                <Link href="/dashboard" className="tvk-nav__link muted">Dashboard</Link>
              </div>
            </div>

            {/* Desktop actions */}
            <div className="tvk-nav__actions">
              {!session ? (
                <>
                  <button type="button" className="tvk-btn--ghost" onClick={() => { setMode('login'); setShowAuth(true) }}>
                    <span className="inline-flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</span>
                  </button>
                  <button type="button" className="tvk-btn--pill" onClick={() => { setMode('signup'); setShowAuth(true) }}>
                    <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> Sign Up</span>
                  </button>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="tvk-btn--pill">
                      <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> Account</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
                    {session.role === 'admin' && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={async () => { await logout(); router.push('/') }}>
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {/* Mobile burger — hidden on md+ via CSS */}
            <button
              type="button"
              className="tvk-nav__burger"
              onClick={() => setIsOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {isOpen && (
          <div className="tvk-nav__panel md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                ['#home', 'Home'],
                ['#about', 'About'],
                ['#services', 'Services'],
                ['#contact', 'Contact'],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
              ))}
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>

              <div className="pt-4 pb-3 space-y-3">
                {!session ? (
                  <>
                    <button type="button" className="tvk-btn--ghost w-full text-left"
                      onClick={() => { setMode('login'); setShowAuth(true); setIsOpen(false) }}>
                      <span className="inline-flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</span>
                    </button>
                    <button type="button" className="tvk-btn--pill w-full"
                      onClick={() => { setMode('signup'); setShowAuth(true); setIsOpen(false) }}>
                      <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> Sign Up</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" className="tvk-btn--ghost w-full text-left"
                      onClick={() => { router.push('/dashboard'); setIsOpen(false) }}>
                      Dashboard
                    </button>
                    {session.role === 'admin' && (
                      <button type="button" className="tvk-btn--ghost w-full text-left"
                        onClick={() => { router.push('/admin'); setIsOpen(false) }}>
                        Admin
                      </button>
                    )}
                    <button type="button" className="tvk-btn--ghost w-full text-left"
                      onClick={async () => { await logout(); router.push('/'); setIsOpen(false) }}>
                      <span className="inline-flex items-center gap-2"><LogOut className="h-4 w-4" /> Logout</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* spacer under fixed header */}
      <div style={{ height: NAVBAR_HEIGHT }} aria-hidden />

      {/* Auth dialog */}
      {showAuth && (
        <AuthDialog
          mode={mode}
          toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
          onSuccess={(redirect) => onAuthSuccess(redirect)}
          onClose={() => setShowAuth(false)}
        />
      )}
    </>
  )
}

export default function Navbar() {
  return (
    <Suspense fallback={
      <nav className="tvk-nav" role="navigation">
        <div className="tvk-nav__wrap">
          <div className="tvk-nav__row">
            <div className="tvk-nav__brand">
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="tvk-nav__actions">
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <div style={{ height: 64 }} aria-hidden />
      </nav>
    }>
      <NavbarContent />
    </Suspense>
  )
}