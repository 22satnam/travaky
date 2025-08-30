// 'use client'

// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'

// const plans = [
//   {
//     name: 'Docs on Call',
//     price: 3550,
//     description: 'Full support over call. Document packet delivered after expert review.',
//     features: ['Expert call within 30 mins', 'Cover letter', 'Document packet'],
//   },
//   {
//     name: 'Docs on Door',
//     price: 19890,
//     description: 'Home visit by expert. Support till visa center.',
//     features: ['Everything in Call Plan', 'Home visit by specialist', 'Submission support'],
//   },
//   {
//     name: 'Visa at Doorstep',
//     price: 28950,
//     description: 'Embassy officer at home. No visa center visit required.',
//     features: ['Embassy at your home', 'Biometrics & documents', 'Visa delivered at home'],
//   },
// ]

// interface Props {
//   plan: string
//   setPlan: (val: string) => void
// }

// export function VisaPlanSection({ plan, setPlan }: Props) {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-center">Choose Your Visa Package</h3>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {plans.map((p) => (
//           <div
//             key={p.name}
//             onClick={() => setPlan(p.name)}
//             className={cn(
//               'cursor-pointer border rounded-lg p-6 shadow-sm transition-all',
//               plan === p.name ? 'border-blue-600 bg-blue-50' : 'hover:shadow-md'
//             )}
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h4 className="text-lg font-bold">{p.name}</h4>
//               <span className="text-primary font-semibold">₹{p.price}</span>
//             </div>
//             <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
//             <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
//               {p.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>

//             {plan === p.name && (
//               <p className="text-xs text-green-600 mt-2">✓ Selected</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



'use client'

import { PLAN_NAMES, planUiDisplay, PlanName } from '@/config/pricing'
import { cn } from '@/lib/utils'

interface Props {
  plan: PlanName
  setPlan: (val: PlanName) => void
}

const FEATURES: Record<PlanName, string[]> = {
  'Docs on Call': [
    'Expert call within 10 mins',
    'Cover letter crafted for you',
    'Compiled document packet',
  ],
  'Docs on Door': [
    'Everything in “Docs on Call”',
    'Home visit by specialist',
    'Submission support at center',
  ],
  'Visa at Doorstep': [
    'Embassy officer at your home',
    'Biometrics & documents at home',
    'Visa delivered to your door',
  ],
}

export function VisaPlanSection({ plan, setPlan }: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Choose Your Visa Package</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PLAN_NAMES.map((p) => {
          const { mrp, today, offer, savingsPct } = planUiDisplay(p)
          const selected = plan === p
          return (
            <button
              key={p}
              type="button"
              onClick={() => setPlan(p)}
              className={cn(
                'text-left rounded-2xl border bg-white/95 p-5 shadow-[0_10px_30px_-12px_rgba(9,30,66,.25)] transition',
                selected ? 'border-primary ring-2 ring-primary/20' : 'hover:shadow-[0_18px_40px_-16px_rgba(9,30,66,.28)]'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-extrabold tracking-tight">{p}</h4>
                  {offer && (
                    <p className="mt-1 text-xs text-primary font-semibold">
                      {offer.code ? (
                        <>Use code <span className="px-2 py-0.5 rounded-md bg-primary/10">{offer.code}</span> at checkout</>
                      ) : (
                        <>Limited-time offer auto-applied</>
                      )}
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <div className="text-lg font-extrabold text-primary">₹{today.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-slate-500">
                    <del>₹{mrp.toLocaleString('en-IN')}</del>
                    {savingsPct > 0 && <span className="ml-2 text-emerald-600 font-semibold">Save {savingsPct}%</span>}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm text-slate-700">
                {{
                  'Docs on Call': 'Full support over call. Expert-reviewed packet delivered.',
                  'Docs on Door': 'Home visit by expert with end-to-end guidance.',
                  'Visa at Doorstep': 'Embassy officer visits your home — no center visit needed.',
                }[p]}
              </p>

              <ul className="mt-3 text-[13px] space-y-1.5 text-slate-600 list-disc pl-5">
                {FEATURES[p].map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              {selected && <p className="mt-3 text-xs text-emerald-600 font-semibold">✓ Selected</p>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
