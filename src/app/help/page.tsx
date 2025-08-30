'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function HelpPage() {
  const [q, setQ] = useState('')

  const sections = [
    {
      title: 'Getting Started',
      items: [
        ['What is Travaky?', '/faq#what-is'],
        ['Which countries are supported?', '/faq#countries'],
        ['How doorstep pickup works', '/faq#pickup'],
      ]
    },
    {
      title: 'Appointments & Documents',
      items: [
        ['Schedule or reschedule', '/faq#appt'],
        ['Required documents', '/faq#docs'],
        ['Photo & passport guidelines', '/faq#photo'],
      ]
    },
    {
      title: 'Payments & Refunds',
      items: [
        ['Supported payment methods', '/faq#pay'],
        ['Refund policy', '/legal/refund'],
        ['Promo codes', '/faq#promo'],
      ]
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
        Help Center
      </h1>
      <p className="mt-3 text-foreground/70">Search guides and FAQs, or contact support.</p>

      <div className="mt-6">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search help…"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {sections.map(s => (
          <div key={s.title} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <ul className="mt-3 space-y-2">
              {s.items
                .filter(([name]) => name.toLowerCase().includes(q.toLowerCase()))
                .map(([name, href]) => (
                  <li key={name}>
                    <Link className="text-primary underline" href={href}>{name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 ring-1 ring-black/5">
        <div className="font-semibold">Still need help?</div>
        <p className="text-foreground/70 mt-1">
          Email <a className="underline" href="mailto:support@travaky.com">support@travaky.com</a> or call <a className="underline" href="tel:+919999999999">+91 99999 99999</a>.
        </p>
      </div>
    </div>
  )
}
