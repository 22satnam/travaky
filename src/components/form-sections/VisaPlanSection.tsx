'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Docs on Call',
    price: 3550,
    description: 'Full support over call. Document packet delivered after expert review.',
    features: ['Expert call within 30 mins', 'Cover letter', 'Document packet'],
  },
  {
    name: 'Docs on Door',
    price: 19890,
    description: 'Home visit by expert. Support till visa center.',
    features: ['Everything in Call Plan', 'Home visit by specialist', 'Submission support'],
  },
  {
    name: 'Visa at Doorstep',
    price: 28950,
    description: 'Embassy officer at home. No visa center visit required.',
    features: ['Embassy at your home', 'Biometrics & documents', 'Visa delivered at home'],
  },
]

interface Props {
  plan: string
  setPlan: (val: string) => void
}

export function VisaPlanSection({ plan, setPlan }: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Choose Your Visa Package</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            onClick={() => setPlan(p.name)}
            className={cn(
              'cursor-pointer border rounded-lg p-6 shadow-sm transition-all',
              plan === p.name ? 'border-blue-600 bg-blue-50' : 'hover:shadow-md'
            )}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-bold">{p.name}</h4>
              <span className="text-primary font-semibold">₹{p.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
            <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
              {p.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {plan === p.name && (
              <p className="text-xs text-green-600 mt-2">✓ Selected</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
