'use client'

import { cn } from '@/lib/utils' // if you have it; otherwise remove cn and use className directly

const regions = ['Asia-Pacific', 'Europe', 'North America', 'Middle East', 'Africa'] as const

export default function GlobalReach() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          'rounded-3xl px-6 py-10 sm:px-12 sm:py-12',
          'bg-gradient-to-b from-[#0A63C9] to-[#0A3F84]',
          'text-white ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(2,45,95,0.35)]'
        )}
      >
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight">
          Expanding Our Global Reach
        </h3>

        <p className="mx-auto mt-3 max-w-3xl text-center text-white/80">
          From major metropolitan cities to emerging destinations, we’re constantly expanding our
          network to serve you better.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {regions.map((r, i) => (
            <span
              key={r}
              className={cn(
                'select-none rounded-full px-4 py-2 text-sm font-semibold',
                'bg-white/10 ring-1 ring-white/20 backdrop-blur-sm',
                'shadow-[inset_0_1px_0_rgba(255,255,255,.25)]',
                i === 1 ? 'bg-white/15' : '' // subtle emphasis on “Europe”
              )}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
