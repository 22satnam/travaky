// // // // // 'use client'

// // // // // import Link from 'next/link'
// // // // // import { useState } from 'react'
// // // // // import { useRouter } from 'next/navigation'
// // // // // import { LogOut } from 'lucide-react'
// // // // // import {
// // // // //   DropdownMenu, DropdownMenuTrigger,
// // // // //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // // // // } from '@/components/ui/dropdown-menu'           
// // // // // import { userSections, adminSections } from '@/config/dashboardSections'
// // // // // import { useAuth } from '@/context/AuthContext'
// // // // // import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


// // // // // export default function Navbar() {
// // // // //   const router = useRouter()
// // // // //   const { session, logout } = useAuth()
// // // // //   const [open, setOpen] = useState(false)

// // // // //   /* not logged-in → old CTA */
// // // // //   if (!session) {
// // // // //     return (
// // // // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // //         <Link href="/" className="font-bold text-xl">Travaky</Link>
// // // // //         <Link href="/login" className="text-sm underline">Login&nbsp;/&nbsp;Sign&nbsp;up</Link>
// // // // //       </header>
// // // // //     )
// // // // //   }

// // // // //   const sections = session.role === 'admin' ? adminSections : userSections

// // // // //   return (
// // // // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // // //       <DropdownMenu open={open} onOpenChange={setOpen}>
// // // // //         <DropdownMenuTrigger asChild>
// // // // //           <Avatar className="cursor-pointer">
// // // // //             <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${session.email}`} />
// // // // //             <AvatarFallback>{session.email[0]?.toUpperCase()}</AvatarFallback>
// // // // //           </Avatar>
// // // // //         </DropdownMenuTrigger>

// // // // //         <DropdownMenuContent align="end" className="w-48">
// // // // //           {sections.map(sec => (
// // // // //             <DropdownMenuItem key={sec.key} onClick={() => router.push(sec.path)}>
// // // // //               {sec.label}
// // // // //             </DropdownMenuItem>
// // // // //           ))}

// // // // //           {session.role === 'admin' && (
// // // // //             <>
// // // // //               <DropdownMenuSeparator />
// // // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// // // // //                 Admin
// // // // //               </DropdownMenuItem>
// // // // //             </>
// // // // //           )}

// // // // //           <DropdownMenuSeparator />
// // // // //           <DropdownMenuItem
// // // // //             onClick={() => {
// // // // //               logout()
// // // // //               router.push('/')
// // // // //             }}
// // // // //           >
// // // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // // //           </DropdownMenuItem>
// // // // //         </DropdownMenuContent>
// // // // //       </DropdownMenu>
// // // // //     </header>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import Link from 'next/link'
// // // // import { useState } from 'react'
// // // // import { useRouter } from 'next/navigation'
// // // // import { LogOut, User } from 'lucide-react'
// // // // import {
// // // //   DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
// // // //   DropdownMenuItem, DropdownMenuSeparator,
// // // // } from '@/components/ui/dropdown-menu'
// // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // import { userSections, adminSections } from '@/config/dashboardSections'
// // // // import { useAuth } from '@/context/AuthContext'

// // // // export default function Navbar() {
// // // //   const { session, logout } = useAuth()
// // // //   const router               = useRouter()
// // // //   const [open, setOpen]      = useState(false)

// // // //   /* ───────── public-view header ───────── */
// // // //   if (!session) {
// // // //     return (
// // // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // //         <Link href="/"  className="font-bold text-xl">Travaky</Link>
// // // //         <Link href="/login" className="text-sm underline">Login&nbsp;/&nbsp;Sign-up</Link>
// // // //       </header>
// // // //     )
// // // //   }

// // // //   const sections = session.role === 'admin' ? adminSections : userSections

// // // //   return (
// // // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // // //       {/* logo */}
// // // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // // //       {/* country search */}
// // // //       <div className="hidden md:block w-full max-w-md mx-8">
// // // //         <JollySearchField />
// // // //       </div>

// // // //       {/* user dropdown */}
// // // //       <DropdownMenu open={open} onOpenChange={setOpen}>
// // // //         <DropdownMenuTrigger asChild>
// // // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // // //             <User className="w-5 h-5" />      {/* ⬅︎ neutral icon, not orange */}
// // // //           </button>
// // // //         </DropdownMenuTrigger>

// // // //         <DropdownMenuContent align="end" className="w-48">
// // // //           {sections.map(s => (
// // // //             <DropdownMenuItem key={s.key} onClick={() => router.push(s.path)}>
// // // //               {s.label}
// // // //             </DropdownMenuItem>
// // // //           ))}

// // // //           {session.role === 'admin' && (
// // // //             <>
// // // //               <DropdownMenuSeparator />
// // // //               <DropdownMenuItem onClick={() => router.push('/admin')}>Admin</DropdownMenuItem>
// // // //             </>
// // // //           )}

// // // //           <DropdownMenuSeparator />
// // // //           <DropdownMenuItem
// // // //             onClick={async () => { await logout(); router.push('/') }}
// // // //           >
// // // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // // //           </DropdownMenuItem>
// // // //         </DropdownMenuContent>
// // // //       </DropdownMenu>
// // // //     </header>
// // // //   )
// // // // }


// // // /* ------------------------------------------------------------------
// // //    Navbar – brings back inline AuthDialog & fixes logout dropdown
// // // ------------------------------------------------------------------- */
// // // "use client"

// // // import Link            from "next/link"
// // // import { useRouter }   from "next/navigation"
// // // import { useState }    from "react"
// // // import { Menu, Moon, Sun, LogOut, User } from "lucide-react"
// // // import {
// // //   DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
// // //   DropdownMenuItem, DropdownMenuSeparator,
// // // } from "@/components/ui/dropdown-menu"
// // // import { Button }      from "@/components/ui/button"
// // // import { JollySearchField } from "@/components/ui/searchfield"
// // // import { AuthDialog }  from "@/components/ui/auth-dialogs"
// // // import { useAuth }     from "@/context/AuthContext"

// // // export default function Navbar() {
// // //   const { session, logout, refreshSession } = useAuth()
// // //   const router               = useRouter()
// // //   const [showAuth, setShowAuth] = useState(false)
// // //   const [authMode, setAuthMode] = useState<"login" | "signup">("login")

// // //   /* ------------ handle auth success ---------------- */
// // //   const handleAuthSuccess = async (redirect: string) => {
// // //     setShowAuth(false)
// // //     await refreshSession()
// // //     router.push(redirect || "/dashboard")
// // //   }

// // //   /* ------------ PUBLIC header (no session) ---------- */
// // //   if (!session) {
// // //     return (
// // //       <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // //         <Link href="/" className="font-bold text-xl">Travaky</Link>

// // //         <div className="hidden md:block w-full max-w-md mx-8">
// // //           <JollySearchField />
// // //         </div>

// // //         <button onClick={() => setShowAuth(true)} className="text-sm underline">
// // //           Login&nbsp;/&nbsp;Sign-up
// // //         </button>

// // //         {showAuth && (
// // //           <AuthDialog
// // //             mode={authMode}
// // //             toggleMode={() => setAuthMode(authMode === "login" ? "signup" : "login")}
// // //             onSuccess={handleAuthSuccess}
// // //           />
// // //         )}
// // //       </header>
// // //     )
// // //   }

// // //   /* ------------ AUTHENTICATED header ---------------- */
// // //   return (
// // //     <header className="border-b px-4 h-14 flex items-center justify-between bg-background">
// // //       {/* logo */}
// // //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// // //       {/* country search */}
// // //       <div className="hidden md:block w-full max-w-md mx-8">
// // //         <JollySearchField />
// // //       </div>

// // //       {/* user dropdown */}
// // //       <DropdownMenu>
// // //         <DropdownMenuTrigger asChild>
// // //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// // //             <User className="w-5 h-5" />
// // //           </button>
// // //         </DropdownMenuTrigger>

// // //         <DropdownMenuContent align="end" className="w-48">
// // //           <DropdownMenuItem onClick={() => router.push("/dashboard")}>
// // //             Dashboard
// // //           </DropdownMenuItem>
// // //           {session.role === "admin" && (
// // //             <>
// // //               <DropdownMenuSeparator />
// // //               <DropdownMenuItem onClick={() => router.push("/admin")}>
// // //                 Admin
// // //               </DropdownMenuItem>
// // //             </>
// // //           )}
// // //           <DropdownMenuSeparator />
// // //           <DropdownMenuItem
// // //             onClick={async () => { await logout(); router.push("/") }}
// // //           >
// // //             <LogOut className="mr-2 h-4 w-4" /> Logout
// // //           </DropdownMenuItem>
// // //         </DropdownMenuContent>
// // //       </DropdownMenu>
// // //     </header>
// // //   )
// // // }


// // 'use client'

// // import Link            from 'next/link'
// // import { useRouter }   from 'next/navigation'
// // import { useState }    from 'react'
// // import { LogOut, User } from 'lucide-react'
// // import {
// //   DropdownMenu, DropdownMenuTrigger,
// //   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// // } from '@/components/ui/dropdown-menu'
// // import { JollySearchField } from '@/components/ui/searchfield'
// // import { AuthDialog }  from '@/components/ui/auth-dialogs'
// // import { useAuth }     from '@/context/AuthContext'

// // export default function Navbar() {
// //   const { session, logout, refreshSession } = useAuth()
// //   const router = useRouter()
// //   const [showAuth, setShowAuth] = useState(false)
// //   const [mode, setMode]         = useState<'login' | 'signup'>('login')

// //   const onAuthSuccess = async (redirect = '/dashboard') => {
// //     setShowAuth(false)
// //     await refreshSession()
// //     router.push(redirect)
// //   }

// //   /* ───── public view (not logged-in) ───── */
// //   if (!session) {
// //     return (
// //       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// //         <Link href="/" className="font-bold text-xl">Travaky</Link>

// //         <div className="w-full max-w-md mx-auto hidden md:block">
// //           <JollySearchField />
// //         </div>

// //         <button onClick={() => setShowAuth(true)} className="text-sm underline">
// //           Login&nbsp;/&nbsp;Sign-up
// //         </button>

// //         {showAuth && (
// //           <AuthDialog
// //             mode={mode}
// //             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// //             onSuccess={onAuthSuccess}
// //             onClose={() => setShowAuth(false)}
// //           />
// //         )}
// //       </header>
// //     )
// //   }

// //   /* ───── signed-in header ───── */
// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
// //       <Link href="/" className="font-bold text-xl">Travaky</Link>

// //       <div className="w-full max-w-md mx-auto hidden md:block">
// //         <JollySearchField />
// //       </div>

// //       <DropdownMenu>
// //         <DropdownMenuTrigger asChild>
// //           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
// //             <User className="w-5 h-5" />
// //           </button>
// //         </DropdownMenuTrigger>

// //         <DropdownMenuContent align="end" className="w-48">
// //           <DropdownMenuItem onClick={() => router.push('/dashboard/bookings')}>
// //             Bookings
// //           </DropdownMenuItem>
// //           <DropdownMenuItem onClick={() => router.push('/dashboard/invoices')}>
// //             Invoices
// //           </DropdownMenuItem>
// //           {session.role === 'admin' && (
// //             <>
// //               <DropdownMenuSeparator />
// //               <DropdownMenuItem onClick={() => router.push('/admin')}>
// //                 Admin
// //               </DropdownMenuItem>
// //             </>
// //           )}
// //           <DropdownMenuSeparator />
// //           <DropdownMenuItem onClick={async () => { await logout(); router.push('/') }}>
// //             <LogOut className="mr-2 h-4 w-4" /> Logout
// //           </DropdownMenuItem>
// //         </DropdownMenuContent>
// //       </DropdownMenu>
// //     </header>
// //   )
// // }



// 'use client'

// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import Image             from 'next/image'               
// import { useState } from 'react'
// import { LogOut, User } from 'lucide-react'
// import {
//   DropdownMenu, DropdownMenuTrigger,
//   DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
// } from '@/components/ui/dropdown-menu'
// import { JollySearchField } from '@/components/ui/searchfield'
// import { AuthDialog }  from '@/components/ui/auth-dialogs'
// import { useAuth }     from '@/context/AuthContext'

// export default function Navbar() {
//   const { session, logout, refreshSession } = useAuth()
//   const router            = useRouter()
//   const [showAuth, setShowAuth] = useState(false)
//   const [mode, setMode]   = useState<'login' | 'signup'>('login')

//   /* ───── public view ───── */
//   if (!session) {
//     return (
//       <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
//         <Link href="/" className="flex items-center gap-3">
//           <Image src="/img/logo.png" alt="Travaky" width={72} height={72} className="w-[72px] h-[72px]" Travaky />
//           <span className="sr-text-2xl font-bold text-foreground">Travaky</span>
//         </Link>
//         <div className="w-full max-w-md mx-auto hidden md:block">
//           <JollySearchField />
//         </div>
//         <button onClick={() => setShowAuth(true)} className="text-sm underline">
//           Login&nbsp;/&nbsp;Sign-up
//         </button>
//         {showAuth && (
//           <AuthDialog
//             mode={mode}
//             toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
//             onSuccess={async (redirect = '/dashboard') => {
//               setShowAuth(false); await refreshSession(); router.push(redirect)
//             }}
//             onClose={() => setShowAuth(false)}
//           />
//         )}
//       </header>
//     )
//   }

//   /* ───── signed-in view ───── */
//   return (
//     <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background h-16 flex items-center px-4">
//         <Link href="/" className="flex items-center gap-3">
//           <Image src="/img/logo.png" alt="Travaky" width={72} height={72}  className="w-[72px] h-[72px]"  Travaky />
//           <span className="sr-text-2xl font-bold text-foreground">Travaky</span>
//         </Link>

//       <div className="hidden md:block w-full max-w-md mx-auto">
//         <JollySearchField />
//       </div>

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <button className="rounded-full p-2 hover:bg-muted focus:outline-none">
//             <User className="h-5 w-5" />
//           </button>
//         </DropdownMenuTrigger>

//         <DropdownMenuContent align="end" className="w-48">
//           <DropdownMenuItem onClick={() => router.push('/dashboard')}>
//             Dashboard
//           </DropdownMenuItem>
//           {/* keep the Admin shortcut if relevant */}
//           {session.role === 'admin' && (
//             <>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={() => router.push('/admin')}>
//                 Admin
//               </DropdownMenuItem>
//             </>
//           )}
//           <DropdownMenuSeparator />
//           <DropdownMenuItem
//             onClick={async () => { await logout(); router.push('/') }}
//           >
//             <LogOut className="mr-2 h-4 w-4" /> Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </header>
//   )
// }


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogOut, User } from 'lucide-react'
import {
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { JollySearchField } from '@/components/ui/searchfield'
import { AuthDialog } from '@/components/ui/auth-dialogs'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { session, logout, refreshSession } = useAuth()

  const [showAuth, setShowAuth] = useState(false)
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkBase =
    'px-3 py-2 text-[16.5px] font-medium transition-colors duration-200'
  const navLink = (href: string) =>
    `${navLinkBase} ${
      pathname === href ? 'text-[#0b0f14]' : 'text-[#2b2f36]'
    } hover:text-[#0aa8ff]`

  const openLogin = () => { setMode('login'); setShowAuth(true) }
  const openSignup = () => { setMode('signup'); setShowAuth(true) }
  const gotoDashboard = () => {
    if (session) router.push('/dashboard')
    else openLogin()
  }

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b',
        'transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_12px_30px_rgba(13,110,177,0.08)]'
          : 'bg-white/60 backdrop-blur-md',
      ].join(' ')}
      style={{
        borderColor: 'rgba(0,0,0,0.06)',
        // same font vibe as UI-hero
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex h-[68px] items-center gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/img/logo.png"
              alt="Travaky"
              width={36}
              height={36}
              className="rounded-full"
              priority
            />
            <span
              className="text-2xl font-extrabold leading-none"
              style={{
                background: 'linear-gradient(90deg,#12baff 0%, #67e0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '.2px',
              }}
            >
              Travaky
            </span>
          </Link>

          {/* Center nav links (Contact removed) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3 ml-3">
            <Link href="/" className={navLink('/')}>Home</Link>
            <Link href="/about" className={navLink('/about')}>About</Link>
            <button
              onClick={gotoDashboard}
              className={navLinkBase + ' text-[#2b2f36] hover:text-[#0aa8ff]'}
            >
              Dashboard
            </button>
          </nav>

          {/* Shorter search */}
          <div className="hidden md:block w-full max-w-[260px] md:max-w-sm mx-auto">
            <JollySearchField />
          </div>

          {/* Right side actions */}
          <div className="ml-auto flex items-center gap-4">
            {!session ? (
              <>
                <button
                  onClick={openLogin}
                  className={navLinkBase + ' text-[#2b2f36] hover:text-[#0aa8ff]'}
                >
                  Login
                </button>
                <button
                  onClick={openSignup}
                  className="inline-flex h-10 items-center rounded-[14px] px-5 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg,#6FEAFF 0%, #22C1EE 100%)',
                    boxShadow: '0 12px 24px rgba(10,168,255,0.35)',
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full p-2 hover:bg-black/5 focus:outline-none">
                    <User className="h-5 w-5 text-[#2b2f36]" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>

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
                    onClick={async () => {
                      await logout()
                      router.push('/')
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>

      {/* Auth modal */}
      {showAuth && (
        <AuthDialog
          mode={mode}
          toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
          onSuccess={async (redirect = '/dashboard') => {
            setShowAuth(false)
            await refreshSession()
            router.push(redirect)
          }}
          onClose={() => setShowAuth(false)}
        />
      )}
    </header>
  )
}
