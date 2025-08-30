'use client'

import {
  FileText,
  Package,
  Shield,
  CalendarCheck2,
  BellRing,
  BadgeCheck,
} from 'lucide-react'
import clsx from 'clsx'

type Feature = {
  title: string
  desc: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  tone?: 'primary' | 'success' | 'violet' | 'amber'
  featured?: boolean
  plan?: 'Premium' | 'Included'
  available?: boolean
}

const FEATURES: Feature[] = [
  {
    title: 'Easy Form',
    desc: 'Simple one-time form filling with guided assistance and smart validation',
    icon: FileText,
    tone: 'primary',
    plan: 'Premium',
    available: true,
  },
  {
    title: 'Pickup Service',
    desc: 'Doorstep document collection at your convenience, no travel required',
    icon: Package,
    tone: 'success',
    featured: true,
    plan: 'Premium',
    available: true,
  },
  {
    title: 'Expert Review',
    desc: 'Professional document verification and application review by visa specialists',
    icon: Shield,
    tone: 'violet',
    plan: 'Premium',
    available: true,
  },
  {
    title: 'Priority Scheduling',
    desc: 'Faster slot booking with smart monitoring for earlier appointments',
    icon: CalendarCheck2,
    tone: 'primary',
    plan: 'Premium',
    available: true,
  },
  {
    title: 'Live Updates',
    desc: 'Real-time status alerts via SMS & email throughout the journey',
    icon: BellRing,
    tone: 'amber',
    plan: 'Included',
    available: true,
  },
  {
    title: 'Money-Back Guarantee*',
    desc: 'Insured service promise — if we fail service commitments, you’re protected',
    icon: BadgeCheck,
    tone: 'success',
    plan: 'Premium',
    available: true,
  },
]

export default function TopFeatures() {
  return (
    <section id="top-features" className="relative py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Top Features
          </h2>
          <p className="mt-3 text-foreground/70">
            Everything you need for a seamless visa application experience, all in one place
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <article
                key={f.title}
                className={clsx(
                  'feature-card card-visa rounded-2xl overflow-hidden border',
                  f.featured && 'feature-card--featured',
                )}
              >
                <div className="p-5 md:p-6">
                  {/* icon + title */}
                  <div className="flex items-center gap-4">
                    <div
                      className={clsx(
                        'icon-token',
                        f.tone === 'success'
                          ? 'icon-token--success'
                          : f.tone === 'violet'
                          ? 'icon-token--violet'
                          : f.tone === 'amber'
                          ? 'icon-token--amber'
                          : 'icon-token--primary',
                      )}
                      aria-hidden
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.25} />
                    </div>
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                  </div>

                  {/* description band */}
                  <div className="mt-4 rounded-xl border bg-muted/40 px-4 py-4">
                    <p className="text-[15px] leading-relaxed text-foreground/80">
                      {f.desc}
                    </p>
                  </div>

                  {/* status line */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 text-foreground/80">
                      <span className="dot-available" />
                      {f.available ? 'Available' : 'Unavailable'}
                    </span>
                    <span className="text-foreground/60">{f.plan ?? 'Included'}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
