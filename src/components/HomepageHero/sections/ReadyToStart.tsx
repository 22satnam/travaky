'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'sonner'
import { CheckCircle2, Clock3, Globe2, ArrowRight, Sparkles } from 'lucide-react'

type Props = { onAuthRedirect?: (next: string) => void }

export default function ReadyToStart({ onAuthRedirect }: Props) {
  const router = useRouter()
  const { session } = useAuth()

  const start = () => {
    const next = '/apply' // change if your start route differs
    if (session) router.push(next)
    else {
      toast('Please log in to continue')
      onAuthRedirect?.(next)
    }
  }

  return (
    <section
      className={[
        'relative mt-12 sm:mt-16 overflow-hidden',
        'bg-gradient-to-br from-[#0A63C9] via-[#0A4DA6] to-[#0A376F]',
        'text-white'
      ].join(' ')}
    >
      {/* nice soft radial bloom */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(800px_300px_at_50%_0%,#6DB7FF,transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/85 text-lg">
          Join thousands of satisfied travelers who chose Travaky for their visa needs. Your dream
          destination is just one application away.
        </p>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KPI icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />} title="99% Approval Rate" />
          <KPI icon={<Clock3 className="h-5 w-5 text-sky-300" />} title="24–48 Hour Response" />
          <KPI icon={<Globe2 className="h-5 w-5 text-amber-300" />} title="150+ Countries" />
        </div>

        {/* Primary CTA */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={start}
            className={[
              'group inline-flex items-center gap-2 rounded-full px-6 sm:px-8 py-3 text-base font-semibold',
              'bg-white text-[#0B3E78] hover:bg-white/95 transition',
              'shadow-[0_12px_30px_-12px_rgba(2,45,95,.45)] ring-1 ring-black/5'
            ].join(' ')}
          >
            Start Your Application
            <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* line below button */}
        <p className="mt-4 text-center text-sm text-white/85">
          <Sparkles className="inline -mt-1 mr-1 h-4 w-4" />
          Free consultation • No hidden fees • Secure process
        </p>

        {/* trust row */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-wrap items-center justify-center gap-8 text-white/85 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐️⭐️⭐️⭐️⭐️</span>
            <span>4.9/5</span>
          </div>
          <span>ISO Certified</span>
          <span>Secure Process</span>
        </div>
      </div>
    </section>
  )
}

function KPI({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-3 rounded-2xl bg-white/7.5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-sm">
      {icon}
      <span className="text-white/95">{title}</span>
    </div>
  )
}
