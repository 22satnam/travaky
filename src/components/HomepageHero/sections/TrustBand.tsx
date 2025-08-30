'use client'

import { Star } from 'lucide-react'

export default function TrustBand() {
  return (
    <section className="py-8">
      <div className="px-4 sm:px-6">
        {/* compact, richer-blue card */}
        <div
          className="
            mx-auto max-w-5xl rounded-2xl
            border border-white/10
            text-white
            shadow-[0_10px_30px_hsl(210_100%_20%/.15)]
            px-4 sm:px-6 md:px-8 py-5
            bg-[radial-gradient(900px_300px_at_-10%_-20%,hsl(var(--accent)/.25),transparent_60%),linear-gradient(135deg,hsl(var(--primary-700))_0%,hsl(var(--primary-600))_45%,hsl(var(--primary-800))_100%)]
          "
        >
          {/* heading */}
          <h3 className="text-center text-[15px] sm:text-base font-semibold text-white/90">
            Why Choose Our Features?
          </h3>

          {/* stats */}
          <div className="mt-3 grid grid-cols-3 divide-x divide-white/10 text-center">
            {/* 24/7 */}
            <div className="px-3">
              <div className="text-[22px] sm:text-2xl font-semibold leading-none">
                24/7
              </div>
              <div className="mt-1 text-xs sm:text-[13px] text-white/70">
                Support Available
              </div>
            </div>

            {/* 5★ */}
            <div className="px-3">
              <div className="flex items-center justify-center gap-1">
                <span className="text-[22px] sm:text-2xl font-semibold leading-none">
                  5
                </span>
                <Star
                  className="h-[18px] w-[18px] sm:h-5 sm:w-5 text-[hsl(var(--accent))]"
                  fill="currentColor"
                />
              </div>
              <div className="mt-1 text-xs sm:text-[13px] text-white/70">
                Customer Rating
              </div>
            </div>

            {/* 100% */}
            <div className="px-3">
              <div className="text-[22px] sm:text-2xl font-semibold leading-none">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-[13px] text-white/70">
                Secure Process
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
