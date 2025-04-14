"use client"

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function SignupForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Signup failed')
      } else {
        alert('Signup successful! JWT: ' + json.token)
      }
    } catch (err) {
      setError('Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-6 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
        Create your account
      </h2>

      <div className="flex gap-2">
        <div className="flex flex-col w-full">
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" value={form.firstname} onChange={handleChange} required />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" value={form.lastname} onChange={handleChange} required />
        </div>
      </div>

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
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
