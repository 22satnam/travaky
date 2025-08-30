'use client'

import { CheckCircle2, ShieldCheck, Clock3, PhoneCall } from 'lucide-react'

type Item = {
  title: string
  subtitle: string
  bubble: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const ITEMS: Item[] = [
  {
    title: '99% Approval Rate',
    subtitle: 'Guaranteed success',
    bubble: 'bg-emerald-500/18 text-emerald-700 ring-emerald-600/30',
    Icon: CheckCircle2,
  },
  {
    title: 'Secure Process',
    subtitle: 'Data protection',
    bubble: 'bg-primary-300/25 text-primary-800 ring-primary-600/25',
    Icon: ShieldCheck,
  },
  {
    title: 'Fast Processing',
    subtitle: 'Quick turnaround',
    bubble: 'bg-violet-500/18 text-violet-700 ring-violet-600/30',
    Icon: Clock3,
  },
  {
    title: '24/7 Support',
    subtitle: 'Always available',
    bubble: 'bg-orange-500/18 text-orange-700 ring-orange-600/30',
    Icon: PhoneCall,
  },
]

export default function ServicesInclude() {
  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-2xl border border-primary/25 shadow-lg backdrop-blur-sm
            bg-gradient-to-r from-primary-300/75 via-primary-400/70 to-primary-300/70
            dark:from-primary-700/55 dark:via-primary-700/40 dark:to-primary-600/55
            linear-gradient(90deg, hsl(var(--primary-200) / .35), hsl(var(--primary-200) / .18))
          "
          
        >
          <div className="pt-5 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              All Services Include
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-6 pt-4">
            {ITEMS.map(({ title, subtitle, bubble, Icon }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span
                  className={`inline-grid place-items-center w-10 h-10 rounded-full ring-1 ${bubble}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="text-base font-semibold">{title}</div>
                <div className="text-xs text-foreground/70">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}