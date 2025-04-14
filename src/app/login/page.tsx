// "use client"

// import { useState } from 'react'
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { cn } from '@/lib/utils'

// export default function LoginForm() {
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

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="mx-auto w-full max-w-md space-y-6 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
//     >
//       <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
//         Log in to your account
//       </h2>

//       <div>
//         <Label htmlFor="email">Email address</Label>
//         <Input id="email" type="email" value={form.email} onChange={handleChange} required />
//       </div>

//       <div>
//         <Label htmlFor="password">Password</Label>
//         <Input id="password" type="password" value={form.password} onChange={handleChange} required />
//       </div>

//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <button
//         type="submit"
//         className="h-10 w-full rounded-md bg-black text-white font-medium hover:bg-gray-900 disabled:opacity-50"
//         disabled={loading}
//       >
//         {loading ? 'Logging in...' : 'Log In'}
//       </button>
//     </form>
//   )
// }

// app/login/page.tsx
'use client'
import { useState } from 'react'
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Login failed')
      } else {
        alert('Login successful! JWT: ' + json.token)
        // Store token: localStorage.setItem('token', json.token)
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
    <div className="max-w-md mx-auto py-10 text-center space-y-6">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-6 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
          Log in to your account
        </h2>

        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={form.password} onChange={handleChange} required />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="h-10 w-full rounded-md bg-black text-white font-medium hover:bg-gray-900 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <div className="text-center space-y-2">
        <Button onClick={() => handleOAuth("google")} disabled={loading} className="w-full">
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </Button>
        <Button onClick={() => handleOAuth("github")} disabled={loading} className="w-full">
          {loading ? 'Signing in...' : 'Sign in with GitHub'}
        </Button>
      </div>
    </div>
  )
}

