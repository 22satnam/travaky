// // // "use client"

// // // import { useState } from 'react'
// // // import { Label } from '@/components/ui/label'
// // // import { Input } from '@/components/ui/input'
// // // import { cn } from '@/lib/utils'

// // // export default function LoginForm() {
// // //   const [form, setForm] = useState({
// // //     email: '',
// // //     password: '',
// // //   })
// // //   const [loading, setLoading] = useState(false)
// // //   const [error, setError] = useState('')

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const { id, value } = e.target
// // //     setForm(prev => ({ ...prev, [id]: value }))
// // //   }

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setLoading(true)
// // //     setError('')
// // //     try {
// // //       const res = await fetch('/api/login', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(form),
// // //       })
// // //       const json = await res.json()

// // //       if (!res.ok) {
// // //         setError(json.error || 'Login failed')
// // //       } else {
// // //         alert('Login successful! JWT: ' + json.token)
// // //         // Store token: localStorage.setItem('token', json.token)
// // //       }
// // //     } catch (err) {
// // //       setError('Unexpected error')
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   return (
// // //     <form
// // //       onSubmit={handleSubmit}
// // //       className="mx-auto w-full max-w-md space-y-6 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
// // //     >
// // //       <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
// // //         Log in to your account
// // //       </h2>

// // //       <div>
// // //         <Label htmlFor="email">Email address</Label>
// // //         <Input id="email" type="email" value={form.email} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="password">Password</Label>
// // //         <Input id="password" type="password" value={form.password} onChange={handleChange} required />
// // //       </div>

// // //       {error && <p className="text-red-500 text-sm">{error}</p>}

// // //       <button
// // //         type="submit"
// // //         className="h-10 w-full rounded-md bg-black text-white font-medium hover:bg-gray-900 disabled:opacity-50"
// // //         disabled={loading}
// // //       >
// // //         {loading ? 'Logging in...' : 'Log In'}
// // //       </button>
// // //     </form>
// // //   )
// // // }

// // // app/login/page.tsx
// // 'use client'
// // import { useState } from 'react'
// // import { signIn } from "next-auth/react"
// // import { Button } from "@/components/ui/button"
// // import { Label } from '@/components/ui/label'
// // import { Input } from '@/components/ui/input'

// // export default function LoginPage() {
// //   const [form, setForm] = useState({
// //     email: '',
// //     password: '',
// //   })
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState('')

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { id, value } = e.target
// //     setForm(prev => ({ ...prev, [id]: value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setError('')
// //     try {
// //       const res = await fetch('/api/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       })
// //       const json = await res.json()

// //       if (!res.ok) {
// //         setError(json.error || 'Login failed')
// //       } else {
// //         alert('Login successful! JWT: ' + json.token)
// //         // Store token: localStorage.setItem('token', json.token)
// //       }
// //     } catch (err) {
// //       setError('Unexpected error')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const handleOAuth = async (provider: string) => {
// //     setLoading(true)
// //     await signIn(provider, { callbackUrl: '/' })
// //     setLoading(false)
// //   }

// //   return (
// //     <div className="max-w-md mx-auto py-10 text-center space-y-6">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full space-y-6 pt-30 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
// //       >
// //         <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
// //           Log in to your account
// //         </h2>

// //         <div>
// //           <Label htmlFor="email">Email address</Label>
// //           <Input id="email" type="email" value={form.email} onChange={handleChange} required />
// //         </div>

// //         <div>
// //           <Label htmlFor="password">Password</Label>
// //           <Input id="password" type="password" value={form.password} onChange={handleChange} required />
// //         </div>

// //         {error && <p className="text-red-500 text-sm">{error}</p>}

// //         <button
// //           type="submit"
// //           className="h-10 w-full rounded-md bg-black text-white font-medium hover:bg-gray-900 disabled:opacity-50"
// //           disabled={loading}
// //         >
// //           {loading ? 'Logging in...' : 'Log In'}
// //         </button>
// //       </form>

// //       <div className="text-center space-y-2">
// //         <Button onClick={() => handleOAuth("google")} disabled={loading} className="w-full">
// //           {loading ? 'Signing in...' : 'Sign in with Google'}
// //         </Button>
// //         <Button onClick={() => handleOAuth("github")} disabled={loading} className="w-full">
// //           {loading ? 'Signing in...' : 'Sign in with GitHub'}
// //         </Button>
// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useState } from 'react'
// import { signIn } from "next-auth/react"
// import { Button } from "@/components/ui/button"
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { Icons } from '@/components/ui/icons'

// export default function LoginPage() {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   })
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target
//     setForm(prev => ({ ...prev, [id]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')
//     try {
//       const res = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       })
//       const json = await res.json()

//       if (!res.ok) {
//         setError(json.error || 'Login failed')
//       } else {
//         alert('Login successful! JWT: ' + json.token)
//         // Store token: localStorage.setItem('token', json.token)
//       }
//     } catch (err) {
//       setError('Unexpected error')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleOAuth = async (provider: string) => {
//     setLoading(true)
//     await signIn(provider, { callbackUrl: '/' })
//     setLoading(false)
//   }

//   return (
//     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
//         Log in to Travaky
//       </h2>
//       <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
//         Welcome back. Let's get you logged in.
//       </p>

//       <form className="my-8 space-y-4" onSubmit={handleSubmit}>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" value={form.password} onChange={handleChange} required />
//         </div>
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? 'Logging in...' : 'Log In'}
//         </Button>
//       </form>

//       <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
//         <span className="text-xs text-muted-foreground">Or</span>
//       </div>

//       <div className="mt-6 space-y-4">
//         <Button
//           variant="outline"
//           onClick={() => handleOAuth("google")}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-2"
//         >
//           <Icons.google className="h-4 w-4" />
//           {loading ? 'Signing in...' : 'Sign in with Google'}
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => handleOAuth("github")}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-2"
//         >
//           <Icons.gitHub className="h-4 w-4" />
//           {loading ? 'Signing in...' : 'Sign in with GitHub'}
//         </Button>
//       </div>
//     </div>
//   )
// }
'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export function AuthModal() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleMode = () => setMode(mode === 'login' ? 'signup' : 'login')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const endpoint = mode === 'login' ? '/api/login' : '/api/signup'
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || `${mode} failed`)
      } else {
        alert(`${mode} successful! JWT: ` + json.token)
      }
    } catch (err) {
      setError('Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  const handleOAuth = async (provider: string) => {
    setLoading(true)
    await signIn(provider, { callbackUrl: '/' })
    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{mode === 'login' ? 'Login' : 'Signup'}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === 'login' ? 'Log in to your account' : 'Create a new account'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === 'login' ? 'Enter your credentials to continue.' : 'Fill in the details to sign up.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (mode === 'login' ? 'Logging in...' : 'Signing up...') : mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">Or</span>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={() => handleOAuth('google')}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2"
          >
            <Icons.google className="h-4 w-4" />
            {loading ? 'Signing in...' : 'Continue with Google'}
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOAuth('github')}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2"
          >
            <Icons.gitHub className="h-4 w-4" />
            {loading ? 'Signing in...' : 'Continue with GitHub'}
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-4">
          {mode === 'login' ? (
            <>
              Don’t have an account? <button onClick={toggleMode} className="underline">Sign up</button>
            </>
          ) : (
            <>
              Already have an account? <button onClick={toggleMode} className="underline">Log in</button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
