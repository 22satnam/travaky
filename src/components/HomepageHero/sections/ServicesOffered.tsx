'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  CheckCircle2,
  Tag,
  TicketPercent,
  Clock3,
  ShieldCheck,
  Star,
  PhoneCall,
  Home,
  Award,
} from 'lucide-react'
import {
  PRICING,
  PLAN_NAMES,
  type PlanName,
  planUiDisplay,
  calcPrice,
} from '@/config/pricing'
import { useRequireAuth } from '@/lib/requireAuth'

/* --------- per-plan features & small header icon --------- */
const bullets: Record<PlanName, string[]> = {
  'Docs on Call': [
    'Document checklist provided',
    'Form filling assistance',
    'Expert consultation (30 mins)',
    'Email support for 7 days',
  ],
  'Docs on Door': [
    'Doorstep document pickup',
    'Professional document review',
    'Form filling & submission',
    'Appointment booking assistance',
  ],
  'Visa at Doorstep': [
    'Complete doorstep facilitation',
    'Priority appointment help',
    'Delivery back to you',
    'Premium support',
  ],
}
const HeaderIcon = ({ plan }: { plan: PlanName }) => {
  const base =
    'h-5 w-5 md:h-6 md:w-6 text-primary-foreground drop-shadow-sm'
  if (plan === 'Docs on Call') return <PhoneCall className={base} />
  if (plan === 'Docs on Door') return <Home className={base} />
  return <Award className={base} />
}

const isRecommended = (p: PlanName) => p === 'Visa at Doorstep'
const INR = (n: number) => `₹${new Intl.NumberFormat('en-IN').format(n)}`

export default function ServicesOffered() {
  const router = useRouter()
  const { requireAuth } = useRequireAuth()

  const cards = useMemo(() => {
    return PLAN_NAMES.map((plan) => {
      const ui = planUiDisplay(plan)
      const estimate = calcPrice({
        plan,
        travellers: 1,
        promoCode: ui.offer?.code ?? null, // if code-gated, reflect real estimate
      })
      const href =
        `/apply?plan=${encodeURIComponent(plan)}` +
        (ui.offer?.code ? `&promo=${encodeURIComponent(ui.offer.code)}` : '')

      return {
        plan,
        features: bullets[plan],
        mrp: ui.mrp,
        today: ui.today,
        offer: ui.offer,
        savingsAmt: ui.savingsAmt,
        savingsPct: ui.savingsPct,
        estimate: estimate.total,
        href,
        recommended: isRecommended(plan),
      }
    })
  }, [])

  const go = (href: string) => requireAuth(() => router.push(href))

  return (
    <section id="services" className="relative py-12 sm:py-16">
      {/* section bg glow, same vibe as hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40
                      bg-[radial-gradient(1200px_120px_at_50%_-20px,hsl(var(--primary-300)/.16),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Services We Offer
          </h2>
          <p className="mt-3 text-foreground/70">
            Pricing, inclusions and support are centrally managed.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c) => (
            <article
              key={c.plan}
              className={[
                'group relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm',
                'border-primary/10 shadow transition-all',
                'hover:border-primary/40 hover:shadow-[0_18px_60px_-18px_hsl(var(--primary)/.35)]',
                c.recommended ? 'ring-1 ring-primary/30' : '',
              ].join(' ')}
            >
              {/* top strip with gradient bubble */}
              <div className="p-5 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="grid place-items-center rounded-xl w-10 h-10 md:w-11 md:h-11
                               bg-gradient-to-br from-primary to-primary-600 shadow-glow"
                  >
                    <HeaderIcon plan={c.plan} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold">{c.plan}</h3>
                    <p className="text-xs md:text-sm text-foreground/70">
                      Seamless, reliable and fast
                    </p>
                  </div>
                </div>
                {c.recommended && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1
                               text-[11px] md:text-xs font-semibold
                               text-primary-foreground bg-gradient-to-r from-primary to-primary-600"
                  >
                    <Star className="h-3.5 w-3.5" />
                    Best Value
                  </span>
                )}
              </div>

              {/* price block */}
              <div className="px-5">
                {c.offer ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/60 line-through">
                        {INR(c.mrp)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5
                                   text-[11px] font-semibold bg-primary/10 text-primary
                                   border border-primary/20"
                      >
                        <Tag className="h-3.5 w-3.5" />
                        {c.offer.label}
                      </span>
                    </div>
                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-2xl md:text-3xl font-extrabold text-primary">
                        {INR(c.today)}
                      </span>
                      <span className="text-[11px] md:text-xs text-foreground/70">
                        Travaky fee
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] md:text-xs text-foreground/70">
                      You save{' '}
                      <span className="font-semibold">{INR(c.savingsAmt)}</span>
                      {c.savingsPct ? (
                        <>
                          {' '}
                          (<span className="font-semibold">{c.savingsPct}%</span>)
                        </>
                      ) : null}
                      {c.offer.code && (
                        <>
                          {' • '}
                          <span className="inline-flex items-center gap-1">
                            <TicketPercent className="h-3.5 w-3.5" />
                            use code <span className="font-semibold">{c.offer.code}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl md:text-3xl font-extrabold text-primary">
                      {INR(c.mrp)}
                    </div>
                    <div className="text-[11px] md:text-xs text-foreground/70 mt-1">
                      Travaky fee
                    </div>
                  </>
                )}

                {/* <div className="mt-2 text-[11px] md:text-xs text-foreground/70">
                  Est. total for 1 traveller:{' '}
                  <span className="font-semibold">{INR(c.estimate)}</span>{' '}
                  <span className="text-foreground/60">
                    (incl. appointment, visa/VFS & GST)
                  </span>
                </div> */}
              </div>

              {/* features with GREEN TICK */}
              <ul className="px-5 mt-4 space-y-2.5">
                {c.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* reassurance row */}
              <div className="px-5 mt-4 flex items-center gap-4 text-[11px] md:text-xs text-foreground/70">
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" /> 24–48hr response
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> 100% secure
                </span>
              </div>

              {/* CTA */}
              <div className="p-5 mt-3">
                <button
                  onClick={() => go(c.href)}
                  className="w-full rounded-xl px-4 py-3 text-sm md:text-[15px] font-semibold
                             bg-gradient-to-r from-primary to-primary-600 text-primary-foreground
                             hover:from-primary-600 hover:to-primary-700 transition
                             shadow-[var(--shadow-xl)] hover:shadow-glow"
                >
                  {c.plan === 'Visa at Doorstep'
                    ? 'Choose Visa at Door'
                    : c.plan === 'Docs on Door'
                    ? 'Choose Docs on Door'
                    : 'Choose Docs on Call'}
                </button>
              </div>

              {/* subtle hero-like blue glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                           bg-[radial-gradient(900px_160px_at_20%_-20%,hsl(var(--primary-300)/.12),transparent)]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
