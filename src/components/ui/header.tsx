
// // // // // // // // // 'use client'

// // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // // // import { useTheme } from 'next-themes'
// // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // import Link from 'next/link'

// // // // // // // // // function Header1() {
// // // // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // // // //   const isDarkMode = theme === 'dark'

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setIsMounted(true)
// // // // // // // // //   }, [])

// // // // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // // // //   }

// // // // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // // // //   return (
// // // // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // // // //         {/* Left: Logo + Name */}
// // // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // // // //             <span role="img" aria-label="logo">
// // // // // // // // //               🌍
// // // // // // // // //             </span>{' '}
// // // // // // // // //             Travaky
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Center: Searchbar */}
// // // // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // //             <JollySearchField />
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right: Toggle + Mobile Menu */}
// // // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // // //           {/* Theme Toggle */}
// // // // // // // // //           {isMounted && (
// // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // //               <Sun className="h-3 w-3" />
// // // // // // // // //               <Switch  id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // // // //               <Moon className="h-3 w-3" />
// // // // // // // // //               <Label htmlFor="dark-mode" className="sr-only">
// // // // // // // // //                 Toggle dark mode
// // // // // // // // //               </Label>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Mobile Menu Icon */}
// // // // // // // // //           <div className="lg:hidden">
// // // // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Nav (optional) */}
// // // // // // // // //       {isOpen && (
// // // // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // // // //           <p className="text-muted-foreground text-center">Welcome to Travaky 🌍</p>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </header>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // // export { Header1 }
// // // // // // // // // 'use client'

// // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // // // import { useTheme } from 'next-themes'
// // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // import Link from 'next/link'
// // // // // // // // // import { useSession, signOut } from 'next-auth/react'

// // // // // // // // // function Header1() {
// // // // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // // // //   const isDarkMode = theme === 'dark'
// // // // // // // // //   const { data: session, status } = useSession()

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setIsMounted(true)
// // // // // // // // //   }, [])

// // // // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // // // //   }

// // // // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // // // //   return (
// // // // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // // // //         {/* Left: Logo + Name */}
// // // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // // // //             <span role="img" aria-label="logo">
// // // // // // // // //               🌍
// // // // // // // // //             </span>{' '}
// // // // // // // // //             Travaky
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Center: Searchbar */}
// // // // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // //             <JollySearchField />
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right: Auth + Toggle + Mobile Menu */}
// // // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // // //           {/* Auth Buttons */}
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <Link href="/login">
// // // // // // // // //               <Button variant="default" size="sm">
// // // // // // // // //                 Login
// // // // // // // // //               </Button>
// // // // // // // // //             </Link>
// // // // // // // // //           )}

// // // // // // // // //           {/* Theme Toggle */}
// // // // // // // // //           {isMounted && (
// // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // //               <Sun className="h-3 w-3" />
// // // // // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // // // //               <Moon className="h-3 w-3" />
// // // // // // // // //               <Label htmlFor="dark-mode" className="sr-only">
// // // // // // // // //                 Toggle dark mode
// // // // // // // // //               </Label>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Mobile Menu Icon */}
// // // // // // // // //           <div className="lg:hidden">
// // // // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Nav (optional) */}
// // // // // // // // //       {isOpen && (
// // // // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="flex justify-between items-center">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <Link href="/login">
// // // // // // // // //               <Button variant="default" size="sm" className="w-full">
// // // // // // // // //                 Login
// // // // // // // // //               </Button>
// // // // // // // // //             </Link>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </header>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export { Header1 }

// // // // // // // // // components/ui/header.tsx
// // // // // // // // // 'use client'

// // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // // // import { useTheme } from 'next-themes'
// // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // import Link from 'next/link'
// // // // // // // // // import { useSession, signOut } from 'next-auth/react'
// // // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // // // // // // // function Header1() {
// // // // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // // // //   const isDarkMode = theme === 'dark'
// // // // // // // // //   const { data: session, status } = useSession()
// // // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setIsMounted(true)
// // // // // // // // //   }, [])

// // // // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // // // //         {/* Left: Logo + Name */}
// // // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Center: Searchbar */}
// // // // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // //             <JollySearchField />
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <div className="hidden lg:flex">
// // // // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Theme Toggle */}
// // // // // // // // //           {isMounted && (
// // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // //               <Sun className="h-3 w-3" />
// // // // // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // // // //               <Moon className="h-3 w-3" />
// // // // // // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Mobile Menu Icon */}
// // // // // // // // //           <div className="lg:hidden">
// // // // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Nav */}
// // // // // // // // //       {isOpen && (
// // // // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="flex justify-between items-center">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </header>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export { Header1 }
// // // // // // // // // components/ui/header.tsx
// // // // // // // // // 'use client'

// // // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // // // import { useTheme } from 'next-themes'
// // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // import Link from 'next/link'
// // // // // // // // // import { useSession, signOut } from 'next-auth/react'
// // // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // // // import { IconBrandGoogle } from '@tabler/icons-react'

// // // // // // // // // function Header1() {
// // // // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // // // //   const isDarkMode = theme === 'dark'
// // // // // // // // //   const { data: session, status } = useSession()
// // // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setIsMounted(true)
// // // // // // // // //   }, [])

// // // // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // // // //         {/* Left: Logo + Name */}
// // // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Center: Searchbar */}
// // // // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // // // //           <div className="w-full max-w-md">
// // // // // // // // //             <JollySearchField />
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <div className="hidden lg:flex gap-2">
// // // // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // // //               <Button
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="icon"
// // // // // // // // //                 onClick={() => signIn('google')}
// // // // // // // // //                 title="Continue with Google"
// // // // // // // // //               >
// // // // // // // // //                 <IconBrandGoogle className="w-5 h-5" />
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Theme Toggle */}
// // // // // // // // //           {isMounted && (
// // // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // // //               <Sun className="h-3 w-3" />
// // // // // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // // // //               <Moon className="h-3 w-3" />
// // // // // // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* Mobile Menu Icon */}
// // // // // // // // //           <div className="lg:hidden">
// // // // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Nav */}
// // // // // // // // //       {isOpen && (
// // // // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // // // //           {status === 'authenticated' ? (
// // // // // // // // //             <div className="flex justify-between items-center">
// // // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // // //                 {session.user?.email}
// // // // // // // // //               </span>
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="sm"
// // // // // // // // //               >
// // // // // // // // //                 Logout
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <div className="flex flex-col gap-2">
// // // // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // // //               <Button
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="icon"
// // // // // // // // //                 onClick={() => signIn('google')}
// // // // // // // // //                 title="Continue with Google"
// // // // // // // // //               >
// // // // // // // // //                 <IconBrandGoogle className="w-5 h-5" />
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </header>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export { Header1 }


// // // // // // // // 'use client'

// // // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // // import { useTheme } from 'next-themes'
// // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // import Link from 'next/link'
// // // // // // // // import { useSession, signOut } from 'next-auth/react'
// // // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // // // // // import { IconBrandGoogle } from '@tabler/icons-react'
// // // // // // // // import { signIn } from 'next-auth/react'

// // // // // // // // function Header1() {
// // // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // // //   const isDarkMode = theme === 'dark'
// // // // // // // //   const { data: session, status } = useSession()
// // // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // // //   useEffect(() => {
// // // // // // // //     setIsMounted(true)
// // // // // // // //   }, [])

// // // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // // //         {/* Left: Logo + Name */}
// // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // // // // //           </Link>
// // // // // // // //         </div>

// // // // // // // //         {/* Center: Searchbar */}
// // // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // // //           <div className="w-full max-w-md">
// // // // // // // //             <JollySearchField />
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // // // // //         <div className="flex items-center gap-4">
// // // // // // // //           {status === 'authenticated' ? (
// // // // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // //                 {session.user?.email}
// // // // // // // //               </span>
// // // // // // // //               <Button
// // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="sm"
// // // // // // // //               >
// // // // // // // //                 Logout
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <div className="hidden lg:flex gap-2">
// // // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="icon"
// // // // // // // //                 onClick={() => signIn('google')}
// // // // // // // //                 title="Continue with Google"
// // // // // // // //               >
// // // // // // // //                 <IconBrandGoogle className="w-5 h-5" />
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           {/* Theme Toggle */}
// // // // // // // //           {isMounted && (
// // // // // // // //             <div className="flex items-center space-x-2">
// // // // // // // //               <Sun className="h-3 w-3" />
// // // // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // // //               <Moon className="h-3 w-3" />
// // // // // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           {/* Mobile Menu Icon */}
// // // // // // // //           <div className="lg:hidden">
// // // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Nav */}
// // // // // // // //       {isOpen && (
// // // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // // //           {status === 'authenticated' ? (
// // // // // // // //             <div className="flex justify-between items-center">
// // // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // // //                 {session.user?.email}
// // // // // // // //               </span>
// // // // // // // //               <Button
// // // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="sm"
// // // // // // // //               >
// // // // // // // //                 Logout
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <div className="flex flex-col gap-2">
// // // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="icon"
// // // // // // // //                 onClick={() => signIn('google')}
// // // // // // // //                 title="Continue with Google"
// // // // // // // //               >
// // // // // // // //                 <IconBrandGoogle className="w-5 h-5" />
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </header>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export { Header1 }
// // // // // // // 'use client'

// // // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // // import { Button } from '@/components/ui/button'
// // // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // // import { Label } from '@/components/ui/label'
// // // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // // import { useTheme } from 'next-themes'
// // // // // // // import { useEffect, useState } from 'react'
// // // // // // // import Link from 'next/link'
// // // // // // // import { useSession, signOut } from 'next-auth/react'
// // // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // // // // // function Header1() {
// // // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // // //   const { theme, setTheme } = useTheme()
// // // // // // //   const isDarkMode = theme === 'dark'
// // // // // // //   const { data: session, status } = useSession()
// // // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // // //   const [isOpen, setOpen] = useState(false)

// // // // // // //   useEffect(() => {
// // // // // // //     setIsMounted(true)
// // // // // // //   }, [])

// // // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // // //         {/* Left: Logo + Name */}
// // // // // // //         <div className="flex items-center gap-2">
// // // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // // // //           </Link>
// // // // // // //         </div>

// // // // // // //         {/* Center: Searchbar */}
// // // // // // //         <div className="flex-1 flex justify-center">
// // // // // // //           <div className="w-full max-w-md">
// // // // // // //             <JollySearchField />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // // // //         <div className="flex items-center gap-4">
// // // // // // //           {status === 'authenticated' ? (
// // // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // //                 {session.user?.email}
// // // // // // //               </span>
// // // // // // //               <Button
// // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // //                 variant="outline"
// // // // // // //                 size="sm"
// // // // // // //               >
// // // // // // //                 Logout
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           ) : (
// // // // // // //             <div className="hidden lg:flex gap-2">
// // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Theme Toggle */}
// // // // // // //           {isMounted && (
// // // // // // //             <div className="flex items-center space-x-2">
// // // // // // //               <Sun className="h-3 w-3" />
// // // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // // //               <Moon className="h-3 w-3" />
// // // // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Mobile Menu Icon */}
// // // // // // //           <div className="lg:hidden">
// // // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Mobile Nav */}
// // // // // // //       {isOpen && (
// // // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // // //           {status === 'authenticated' ? (
// // // // // // //             <div className="flex justify-between items-center">
// // // // // // //               <span className="text-sm text-muted-foreground">
// // // // // // //                 {session.user?.email}
// // // // // // //               </span>
// // // // // // //               <Button
// // // // // // //                 onClick={() => signOut({ callbackUrl: '/' })}
// // // // // // //                 variant="outline"
// // // // // // //                 size="sm"
// // // // // // //               >
// // // // // // //                 Logout
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           ) : (
// // // // // // //             <div className="flex flex-col gap-2">
// // // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </header>
// // // // // // //   )
// // // // // // // }

// // // // // // // export { Header1 }
// // // // // // 'use client'

// // // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // // import { Button } from '@/components/ui/button'
// // // // // // import { Switch } from '@/components/ui/switch'
// // // // // // import { Label } from '@/components/ui/label'
// // // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // // import { useTheme } from 'next-themes'
// // // // // // import { useEffect, useState } from 'react'
// // // // // // import Link from 'next/link'
// // // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // // // // function Header1() {
// // // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // // //   const { theme, setTheme } = useTheme()
// // // // // //   const isDarkMode = theme === 'dark'

// // // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // // //   const [isOpen, setOpen] = useState(false)
// // // // // //   const [session, setSession] = useState<{ email: string } | null>(null)

// // // // // //   useEffect(() => {
// // // // // //     setIsMounted(true)
// // // // // //     const token = localStorage.getItem('token')
// // // // // //     const email = localStorage.getItem('email')
// // // // // //     if (token && email) {
// // // // // //       setSession({ email })
// // // // // //     }
// // // // // //   }, [])

// // // // // //   const toggleTheme = (checked: boolean) => {
// // // // // //     setTheme(checked ? 'dark' : 'light')
// // // // // //   }

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem('token')
// // // // // //     localStorage.removeItem('email')
// // // // // //     window.location.href = '/'
// // // // // //   }

// // // // // //   return (
// // // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // // //         {/* Left: Logo + Name */}
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <Link href="/" className="text-xl font-bold">
// // // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         {/* Center: Searchbar */}
// // // // // //         <div className="flex-1 flex justify-center">
// // // // // //           <div className="w-full max-w-md">
// // // // // //             <JollySearchField />
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // // //         <div className="flex items-center gap-4">
// // // // // //           {session ? (
// // // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // // //               <span className="text-sm text-muted-foreground">
// // // // // //                 {session.email}
// // // // // //               </span>
// // // // // //               <Button
// // // // // //                 onClick={handleLogout}
// // // // // //                 variant="outline"
// // // // // //                 size="sm"
// // // // // //               >
// // // // // //                 Logout
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div className="hidden lg:flex gap-2">
// // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* Theme Toggle */}
// // // // // //           {isMounted && (
// // // // // //             <div className="flex items-center space-x-2">
// // // // // //               <Sun className="h-3 w-3" />
// // // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // // //               <Moon className="h-3 w-3" />
// // // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* Mobile Menu Icon */}
// // // // // //           <div className="lg:hidden">
// // // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Nav */}
// // // // // //       {isOpen && (
// // // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // // //           {session ? (
// // // // // //             <div className="flex justify-between items-center">
// // // // // //               <span className="text-sm text-muted-foreground">
// // // // // //                 {session.email}
// // // // // //               </span>
// // // // // //               <Button
// // // // // //                 onClick={handleLogout}
// // // // // //                 variant="outline"
// // // // // //                 size="sm"
// // // // // //               >
// // // // // //                 Logout
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div className="flex flex-col gap-2">
// // // // // //               <AuthDialog mode={mode} toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </header>
// // // // // //   )
// // // // // // }

// // // // // // export { Header1 }
// // // // // 'use client'

// // // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // // import { Button } from '@/components/ui/button'
// // // // // import { Switch } from '@/components/ui/switch'
// // // // // import { Label } from '@/components/ui/label'
// // // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // // import { useTheme } from 'next-themes'
// // // // // import { useEffect, useState } from 'react'
// // // // // import Link from 'next/link'
// // // // // import { useRouter } from 'next/navigation'
// // // // // import { AuthDialog } from '@/components/ui/auth-dialogs'

// // // // // function Header1() {
// // // // //   const [isMounted, setIsMounted] = useState(false)
// // // // //   const { theme, setTheme } = useTheme()
// // // // //   const isDarkMode = theme === 'dark'
// // // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // // //   const [isOpen, setOpen] = useState(false)
// // // // //   const [session, setSession] = useState<{ email: string } | null>(null)
// // // // //   const [showAuthModal, setShowAuthModal] = useState(false)
// // // // //   const router = useRouter()

// // // // //   useEffect(() => {
// // // // //     setIsMounted(true)
// // // // //     // Use cookie token verification here if you want to check auth state
// // // // //     fetch('/api/check-auth').then(res => {
// // // // //       if (res.ok) {
// // // // //         const email = decodeURIComponent(document.cookie.split('; ').find(c => c.startsWith('email='))?.split('=')[1] || '')
// // // // //         setSession({ email })
// // // // //       }
// // // // //     })
// // // // //   }, [])

// // // // //   const toggleTheme = (checked: boolean) => {
// // // // //     setTheme(checked ? 'dark' : 'light')
// // // // //   }

// // // // //   const handleLogout = () => {
// // // // //     window.location.href = '/api/logout'
// // // // //   }

// // // // //   const handleAuthSuccess = (url: string) => {
// // // // //     setShowAuthModal(false)
// // // // //     router.push(url || '/')
// // // // //   }

// // // // //   return (
// // // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // // //         {/* Left: Logo + Name */}
// // // // //         <div className="flex items-center gap-2">
// // // // //           <Link href="/" className="text-xl font-bold">
// // // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Center: Searchbar */}
// // // // //         <div className="flex-1 flex justify-center">
// // // // //           <div className="w-full max-w-md">
// // // // //             <JollySearchField />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // // //         <div className="flex items-center gap-4">
// // // // //           {session ? (
// // // // //             <div className="hidden lg:flex items-center gap-2">
// // // // //               <span className="text-sm text-muted-foreground">
// // // // //                 {session.email}
// // // // //               </span>
// // // // //               <Button onClick={handleLogout} variant="outline" size="sm">
// // // // //                 Logout
// // // // //               </Button>
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="hidden lg:flex gap-2">
// // // // //               <Button onClick={() => setShowAuthModal(true)} variant="outline">
// // // // //                 {mode === 'login' ? 'Login' : 'Signup'}
// // // // //               </Button>
// // // // //             </div>
// // // // //           )}

// // // // //           {isMounted && (
// // // // //             <div className="flex items-center space-x-2">
// // // // //               <Sun className="h-3 w-3" />
// // // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // // //               <Moon className="h-3 w-3" />
// // // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="lg:hidden">
// // // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {isOpen && (
// // // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // // //           {session ? (
// // // // //             <div className="flex justify-between items-center">
// // // // //               <span className="text-sm text-muted-foreground">
// // // // //                 {session.email}
// // // // //               </span>
// // // // //               <Button onClick={handleLogout} variant="outline" size="sm">
// // // // //                 Logout
// // // // //               </Button>
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="flex flex-col gap-2">
// // // // //               <Button onClick={() => setShowAuthModal(true)} variant="outline">
// // // // //                 {mode === 'login' ? 'Login' : 'Signup'}
// // // // //               </Button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       )}

// // // // //       {showAuthModal && (
// // // // //         <AuthDialog
// // // // //           mode={mode}
// // // // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // // //           onAuthSuccess={handleAuthSuccess}
// // // // //         />
// // // // //       )}
// // // // //     </header>
// // // // //   )
// // // // // }

// // // // // export { Header1 }
// // // // 'use client'

// // // // import { JollySearchField } from '@/components/ui/searchfield'
// // // // import { Button } from '@/components/ui/button'
// // // // import { Switch } from '@/components/ui/switch'
// // // // import { Label } from '@/components/ui/label'
// // // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // // import { useTheme } from 'next-themes'
// // // // import { useEffect, useState } from 'react'
// // // // import Link from 'next/link'
// // // // import { useRouter } from 'next/navigation'
// // // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // // import { toast } from 'sonner'


// // // // function Header1() {
// // // //   const [isMounted, setIsMounted] = useState(false)
// // // //   const { theme, setTheme } = useTheme()
// // // //   const isDarkMode = theme === 'dark'
// // // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // // //   const [isOpen, setOpen] = useState(false)
// // // //   const [session, setSession] = useState<{ email: string } | null>(null)
// // // //   const [showAuthModal, setShowAuthModal] = useState(false)
// // // //   const router = useRouter()

// // // //   useEffect(() => {
// // // //     setIsMounted(true)
// // // //     fetch('/api/check-auth').then(res => {
// // // //       if (res.ok) {
// // // //         const email = decodeURIComponent(document.cookie.split('; ').find(c => c.startsWith('email='))?.split('=')[1] || '')
// // // //         setSession({ email })
// // // //       }
// // // //     })
// // // //   }, [])

// // // //   const toggleTheme = (checked: boolean) => {
// // // //     setTheme(checked ? 'dark' : 'light')
// // // //   }

// // // //   const handleLogout = () => {
// // // //     toast.success("Logged out successfully!", { duration: 4000 })
// // // //     window.location.href = '/api/logout'
// // // //   }

// // // //   const handleAuthSuccess = (url: string) => {
// // // //     setShowAuthModal(false)
// // // //     router.push(url || '/')
// // // //   }

// // // //   return (
// // // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // // //         {/* Left: Logo + Name */}
// // // //         <div className="flex items-center gap-2">
// // // //           <Link href="/" className="text-xl font-bold">
// // // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // // //           </Link>
// // // //         </div>

// // // //         {/* Center: Searchbar */}
// // // //         <div className="flex-1 flex justify-center">
// // // //           <div className="w-full max-w-md">
// // // //             <JollySearchField />
// // // //           </div>
// // // //         </div>

// // // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // // //         <div className="flex items-center gap-4">
// // // //           <div className="hidden lg:flex gap-2">
// // // //             <Button
// // // //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// // // //               variant="outline"
// // // //             >
// // // //               {session ? 'Logout' : 'Login'}
// // // //             </Button>
// // // //           </div>

// // // //           {isMounted && (
// // // //             <div className="flex items-center space-x-2">
// // // //               <Sun className="h-3 w-3" />
// // // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // // //               <Moon className="h-3 w-3" />
// // // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // // //             </div>
// // // //           )}

// // // //           <div className="lg:hidden">
// // // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Nav */}
// // // //       {isOpen && (
// // // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // // //           <div className="flex justify-between items-center">
// // // //             <Button
// // // //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// // // //               variant="outline"
// // // //               size="sm"
// // // //               className="w-full"
// // // //             >
// // // //               {session ? 'Logout' : 'Login'}
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {showAuthModal && (
// // // //         <AuthDialog
// // // //           mode={mode}
// // // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // // //           onAuthSuccess={handleAuthSuccess}
// // // //         />
// // // //       )}
// // // //     </header>
// // // //   )
// // // // }

// // // // export { Header1 }
// // // 'use client'

// // // import { JollySearchField } from '@/components/ui/searchfield'
// // // import { Button } from '@/components/ui/button'
// // // import { Switch } from '@/components/ui/switch'
// // // import { Label } from '@/components/ui/label'
// // // import { Sun, Moon, Menu, X } from 'lucide-react'
// // // import { useTheme } from 'next-themes'
// // // import { useEffect, useState } from 'react'
// // // import Link from 'next/link'
// // // import { useRouter } from 'next/navigation'
// // // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // // import { toast } from 'sonner'

// // // function Header1() {
// // //   const [isMounted, setIsMounted] = useState(false)
// // //   const { theme, setTheme } = useTheme()
// // //   const isDarkMode = theme === 'dark'
// // //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// // //   const [isOpen, setOpen] = useState(false)
// // //   const [session, setSession] = useState<{ email: string } | null>(null)
// // //   const [showAuthModal, setShowAuthModal] = useState(false)
// // //   const router = useRouter()

// // //   useEffect(() => {
// // //     setIsMounted(true)

// // //     fetch('/api/check-auth', {
// // //       credentials: 'include',
// // //     }).then(res => {
// // //       if (res.ok) {
// // //         const email = decodeURIComponent(document.cookie.split('; ').find(c => c.startsWith('email='))?.split('=')[1] || '')
// // //         setSession({ email })
// // //       }
// // //     })
// // //   }, [])

// // //   const toggleTheme = (checked: boolean) => {
// // //     setTheme(checked ? 'dark' : 'light')
// // //   }

// // //   const handleLogout = () => {
// // //     toast.success("Logged out successfully!", { duration: 4000 })
// // //     window.location.href = '/api/logout'
// // //   }

// // //   const handleAuthSuccess = (url: string) => {
// // //     setShowAuthModal(false)
// // //     router.push(url || '/')
// // //     router.refresh() // refresh header auth state
// // //   }

// // //   return (
// // //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// // //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// // //         {/* Left: Logo + Name */}
// // //         <div className="flex items-center gap-2">
// // //           <Link href="/" className="text-xl font-bold">
// // //             <span role="img" aria-label="logo">🌍</span> Travaky
// // //           </Link>
// // //         </div>

// // //         {/* Center: Searchbar */}
// // //         <div className="flex-1 flex justify-center">
// // //           <div className="w-full max-w-md">
// // //             <JollySearchField />
// // //           </div>
// // //         </div>

// // //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// // //         <div className="flex items-center gap-4">
// // //           <div className="hidden lg:flex gap-2">
// // //             <Button
// // //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// // //               variant="outline"
// // //             >
// // //               {session ? 'Logout' : 'Login'}
// // //             </Button>
// // //           </div>

// // //           {isMounted && (
// // //             <div className="flex items-center space-x-2">
// // //               <Sun className="h-3 w-3" />
// // //               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// // //               <Moon className="h-3 w-3" />
// // //               <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// // //             </div>
// // //           )}

// // //           <div className="lg:hidden">
// // //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// // //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Nav */}
// // //       {isOpen && (
// // //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// // //           <div className="flex justify-between items-center">
// // //             <Button
// // //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// // //               variant="outline"
// // //               size="sm"
// // //               className="w-full"
// // //             >
// // //               {session ? 'Logout' : 'Login'}
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {showAuthModal && (
// // //         <AuthDialog
// // //           mode={mode}
// // //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// // //           onAuthSuccess={handleAuthSuccess}
// // //         />
// // //       )}
// // //     </header>
// // //   )
// // // }

// // // export { Header1 }
// // 'use client'

// // import { JollySearchField } from '@/components/ui/searchfield'
// // import { Button } from '@/components/ui/button'
// // import { Switch } from '@/components/ui/switch'
// // import { Label } from '@/components/ui/label'
// // import { Sun, Moon, Menu, X } from 'lucide-react'
// // import { useTheme } from 'next-themes'
// // import { useState } from 'react'
// // import Link from 'next/link'
// // import { useRouter } from 'next/navigation'
// // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // import { toast } from 'sonner'
// // import { useAuth } from '@/context/AuthContext'

// // function Header1() {
// //   const { theme, setTheme } = useTheme()
// //   const isDarkMode = theme === 'dark'
// //   const [mode, setMode] = useState<'login' | 'signup'>('login')
// //   const [isOpen, setOpen] = useState(false)
// //   const [showAuthModal, setShowAuthModal] = useState(false)

// //   const router = useRouter()
// //   const { session, setSession, refreshSession } = useAuth()

// //   const toggleTheme = (checked: boolean) => {
// //     setTheme(checked ? 'dark' : 'light')
// //   }

// //   const handleLogout = async () => {
// //     try {
// //       const res = await fetch('/api/logout', { credentials: 'include' })
// //       if (res.ok) {
// //         toast.success('Logged out successfully!', { duration: 4000 })
// //         setSession(null)
// //         router.push('/')
// //       }
// //     } catch {
// //       toast.error('Failed to logout')
// //     }
// //   }

// //   const handleAuthSuccess = async (url: string) => {
// //     setShowAuthModal(false)
// //     await refreshSession()
// //     router.push(url || '/')
// //   }

// //   return (
// //     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
// //       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
// //         {/* Left: Logo + Name */}
// //         <div className="flex items-center gap-2">
// //           <Link href="/" className="text-xl font-bold">
// //             <span role="img" aria-label="logo">🌍</span> Travaky
// //           </Link>
// //         </div>

// //         {/* Center: Searchbar */}
// //         <div className="flex-1 flex justify-center">
// //           <div className="w-full max-w-md">
// //             <JollySearchField />
// //           </div>
// //         </div>

// //         {/* Right: Auth + Theme Toggle + Mobile Menu */}
// //         <div className="flex items-center gap-4">
// //           <div className="hidden lg:flex gap-2">
// //             <Button
// //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// //               variant="outline"
// //             >
// //               {session ? 'Logout' : 'Login'}
// //             </Button>
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <Sun className="h-3 w-3" />
// //             <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
// //             <Moon className="h-3 w-3" />
// //             <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
// //           </div>

// //           <div className="lg:hidden">
// //             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
// //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       {isOpen && (
// //         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
// //           <div className="flex justify-between items-center">
// //             <Button
// //               onClick={session ? handleLogout : () => setShowAuthModal(true)}
// //               variant="outline"
// //               size="sm"
// //               className="w-full"
// //             >
// //               {session ? 'Logout' : 'Login'}
// //             </Button>
// //           </div>
// //         </div>
// //       )}

// //       {showAuthModal && (
// //         <AuthDialog
// //           mode={mode}
// //           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
// //           onAuthSuccess={handleAuthSuccess}
// //         />
// //       )}
// //     </header>
// //   )
// // }

// // export { Header1 }
// 'use client'

// import { JollySearchField } from '@/components/ui/searchfield'
// import { Button } from '@/components/ui/button'
// import { Switch } from '@/components/ui/switch'
// import { Label } from '@/components/ui/label'
// import { Sun, Moon, Menu, X } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import { useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { AuthDialog } from '@/components/ui/auth-dialogs'
// import { toast } from 'sonner'
// import { useAuth } from '@/context/AuthContext'

// function Header1() {
//   const { theme, setTheme } = useTheme()
//   const isDarkMode = theme === 'dark'
//   const [mode, setMode] = useState<'login' | 'signup'>('login')
//   const [isOpen, setOpen] = useState(false)
//   const [showAuthModal, setShowAuthModal] = useState(false)

//   const router = useRouter()
//   const { session, setSession, refreshSession } = useAuth()

//   const toggleTheme = (checked: boolean) => {
//     setTheme(checked ? 'dark' : 'light')
//   }

//   const handleLogout = async () => {
//     try {
//       const res = await fetch('/api/logout', { credentials: 'include' })
//       if (res.ok) {
//         toast.success('Logged out successfully!', { duration: 4000 })
//         setSession(null)
//         router.push('/')
//       }
//     } catch {
//       toast.error('Failed to logout')
//     }
//   }

//   const handleAuthSuccess = async () => {
//     setShowAuthModal(false)
//     await refreshSession()
//   }

//   return (
//     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
//       <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
//         {/* Left: Logo + Name */}
//         <div className="flex items-center gap-2">
//           <Link href="/" className="text-xl font-bold">
//             <span role="img" aria-label="logo">🌍</span> Travaky
//           </Link>
//         </div>

//         {/* Center: Searchbar */}
//         <div className="flex-1 flex justify-center">
//           <div className="w-full max-w-md">
//             <JollySearchField />
//           </div>
//         </div>

//         {/* Right: Auth + Theme Toggle + Mobile Menu */}
//         <div className="flex items-center gap-4">
//           <div className="hidden lg:flex gap-2">
//             <Button
//               onClick={session ? handleLogout : () => setShowAuthModal(true)}
//               variant="outline"
//             >
//               {session ? 'Logout' : 'Login'}
//             </Button>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Sun className="h-3 w-3" />
//             <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
//             <Moon className="h-3 w-3" />
//             <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
//           </div>

//           <div className="lg:hidden">
//             <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
//           <div className="flex justify-between items-center">
//             <Button
//               onClick={session ? handleLogout : () => setShowAuthModal(true)}
//               variant="outline"
//               size="sm"
//               className="w-full"
//             >
//               {session ? 'Logout' : 'Login'}
//             </Button>
//           </div>
//         </div>
//       )}

//       {showAuthModal && (
//         <AuthDialog
//           mode={mode}
//           toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
//           onAuthSuccess={handleAuthSuccess}
//           onClose={() => setShowAuthModal(false)}
//         />
//       )}
//     </header>
//   )
// }

// export { Header1 }

'use client'

import { JollySearchField } from '@/components/ui/searchfield'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthDialog } from '@/components/ui/auth-dialogs'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'

function Header1() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [isOpen, setOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authRedirect, setAuthRedirect] = useState<string | null>(null)

  const router = useRouter()
  const { session, setSession, refreshSession } = useAuth()

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', { credentials: 'include' })
      if (res.ok) {
        toast.success('Logged out successfully!', { duration: 4000 })
        setSession(null)
        router.push('/')
      }
    } catch {
      toast.error('Failed to logout')
    }
  }

  const handleAuthSuccess = async () => {
    setShowAuthModal(false)
    await refreshSession()
    if (authRedirect) {
      router.push(authRedirect)
      setAuthRedirect(null)
    }
  }

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
      <div className="container mx-auto min-h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            <span role="img" aria-label="logo">🌍</span> Travaky
          </Link>
        </div>

        {/* Center: Searchbar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <JollySearchField
              onAuthRedirect={(next) => {
                setAuthRedirect(next)
                setShowAuthModal(true)
              }}
            />
          </div>
        </div>

        {/* Right: Auth + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-2">
            <Button
              onClick={session ? handleLogout : () => setShowAuthModal(true)}
              variant="outline"
            >
              {session ? 'Logout' : 'Login'}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Sun className="h-3 w-3" />
            <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
            <Moon className="h-3 w-3" />
            <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="icon">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background shadow-lg border-t px-4 py-6 lg:hidden">
          <div className="flex justify-between items-center">
            <Button
              onClick={session ? handleLogout : () => setShowAuthModal(true)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              {session ? 'Logout' : 'Login'}
            </Button>
          </div>
        </div>
      )}

      {showAuthModal && (
        <AuthDialog
          mode={mode}
          toggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
          onSuccess={handleAuthSuccess}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </header>
  )
}

export { Header1 }
