'use client'
import { useState } from 'react'

export default function SupportPage() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    // hit your API /support ticket endpoint here
    setSent(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">Contact Support</h1>
      <p className="mt-3 text-foreground/70">We respond within ~10 minutes during business hours.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
          <div className="font-semibold">Business Hours</div>
          <p className="text-foreground/70 mt-2">Mon–Fri: 9:00 AM – 7:00 PM<br/>Sat–Sun: 10:00 AM – 5:00 PM</p>

          <div className="mt-6 font-semibold">Call</div>
          <a className="text-primary underline" href="tel:+919999999999">+91 99999 99999</a>

          <div className="mt-6 font-semibold">Email</div>
          <a className="text-primary underline" href="mailto:support@travaky.com">support@travaky.com</a>
        </div>

        <form onSubmit={submit} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 space-y-3">
          <div className="font-semibold">Raise a ticket</div>
          <input
            type="email"
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            required
            value={msg}
            onChange={e=>setMsg(e.target.value)}
            placeholder="Describe your issue…"
            rows={5}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="rounded-xl bg-primary text-white font-semibold px-4 py-2" type="submit">
            Submit
          </button>
          {sent && <p className="text-sm text-green-700">Thanks! We’ll get back shortly.</p>}
        </form>
      </div>
    </div>
  )
}
