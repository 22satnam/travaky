'use client'

type Stat = { value: string; title: string; sub: string }

const STATS: Stat[] = [
  { value: '99%',     title: 'Approval Rate',    sub: 'Industry Leading' },
  { value: '10,000+', title: 'Visas Processed',  sub: 'Happy Customers' },
  { value: '20+',     title: 'Cities Covered',   sub: 'Doorstep Service' },
]

export default function TrustedBy() {
  return (
    <section className="py-5 sm:py-6">
      <div className="px-4 sm:px-6">
        <div
          className="
            mx-auto max-w-5xl
            rounded-xl border border-white/10 text-white
            shadow-[0_6px_20px_hsl(210_100%_20%/.15)]
            px-4 sm:px-6 md:px-8 py-5 md:py-6
            bg-[linear-gradient(135deg,hsl(var(--primary-700))_0%,hsl(var(--primary-600))_45%,hsl(var(--primary-800))_100%)]
          "
        >
          <h3 className="text-center text-white/90 text-base md:text-lg font-semibold tracking-tight">
            Trusted by Travelers Worldwide
          </h3>

          <div className="mt-4 md:mt-5 grid grid-cols-3 divide-x divide-white/10">
            {STATS.map((s, i) => (
              <div key={i} className="text-center px-3">
                <div className="text-2xl md:text-4xl font-extrabold leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-sm md:text-base font-medium text-white">
                  {s.title}
                </div>
                <div className="mt-0.5 text-[11px] md:text-sm text-white/70">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
