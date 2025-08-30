'use client'
import { useState } from 'react'

type Status = { stage: string; at: string; note?: string }

export default function TrackPage() {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Status[] | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      // Replace with your real endpoint:
      // const r = await fetch(`/api/track?ref=${id}&email=${email}`)
      // const j = await r.json()
      // setResult(j.timeline)
      await new Promise(r => setTimeout(r, 700))
      setResult([
        { stage:'Documents verified', at:'Today, 10:05 AM' },
        { stage:'Appointment booked', at:'Today, 9:40 AM' },
        { stage:'Application received', at:'Today, 9:10 AM' },
      ])
    } finally { setLoading(false) }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">Track Application</h1>
      <p className="mt-3 text-foreground/70">Enter your reference ID and email to view status.</p>

      <form onSubmit={submit} className="mt-6 grid gap-3">
        <input
          value={id} onChange={e=>setId(e.target.value)} required
          placeholder="Reference ID (e.g., TVK-12345)"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="email" value={email} onChange={e=>setEmail(e.target.value)} required
          placeholder="Email used during booking"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button className="rounded-xl bg-primary text-white font-semibold px-4 py-2" disabled={loading}>
          {loading ? 'Fetching…' : 'Track'}
        </button>
      </form>

      {result && (
        <div className="mt-8 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
          <div className="font-semibold">Latest updates</div>
          <ul className="mt-3 space-y-2">
            {result.map((s,i)=>(
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80" />
                <div>
                  <div className="font-medium">{s.stage}</div>
                  <div className="text-sm text-foreground/70">{s.at}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
