'use client'
import { useState } from 'react'

export default function CareersPage() {
  const [role, setRole] = useState('')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
        Careers at <span className="text-primary">Travaky</span>
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        We’re a small team shipping fast. If you’re customer-obsessed and love
        simplifying complex ops, you’ll fit right in.
      </p>

      {/* Why Join */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          ['Impact','Own meaningful problems end-to-end.'],
          ['Speed','Ship, learn, and iterate weekly.'],
          ['Culture','Low-ego, high-trust, remote-friendly.'],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <div className="text-lg font-semibold">{t}</div>
            <p className="mt-2 text-foreground/70">{d}</p>
          </div>
        ))}
      </div>

      {/* Open roles */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Open roles</h2>
        <div className="mt-4 grid gap-4">
          {[
            {title:'Visa Operations Specialist', location:'Delhi / Hybrid'},
            {title:'Customer Success Associate', location:'Remote (India)'},
            {title:'Full-Stack Engineer (Next.js)', location:'Remote (India)'},
          ].map(r => (
            <label key={r.title} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="role"
                className="h-4 w-4 accent-primary"
                onChange={() => setRole(r.title)}
              />
              <div className="flex-1">
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-foreground/70">{r.location}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 ring-1 ring-black/5">
          <h3 className="text-lg font-semibold">How to apply</h3>
          <p className="mt-2 text-foreground/70">
            Email <a className="underline" href="mailto:careers@travaky.com">careers@travaky.com</a> with:
          </p>
          <ul className="mt-2 list-disc pl-6 text-foreground/70">
            <li>Role you’re applying for {role ? <strong>({role})</strong> : null}</li>
            <li>Your CV / LinkedIn / portfolio</li>
            <li>In 5–7 lines, how you’ll add value to Travaky customers</li>
          </ul>
          <p className="mt-2 text-xs text-foreground/50">We review every application.</p>
        </div>
      </div>
    </div>
  )
}
