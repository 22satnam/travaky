// // 'use client'

// // import { UserPlus, Users, Calendar, Package, Shield } from 'lucide-react'
// // import { Card, CardContent } from '@/components/ui/card'

// // export default function HowItWorks() {
// //   const steps = [
// //     { icon: UserPlus, title: 'Onboard',         description: 'Register & share trip/passport details',  time: '5 mins',     color: 'bg-primary' },
// //     { icon: Users,    title: 'Expert Connect',  description: 'Visa experts check documents',            time: 'Instant',    color: 'bg-emerald-600' },
// //     { icon: Calendar, title: 'Appointment',     description: 'Priority slots arranged',                 time: '24–48 hrs',  color: 'bg-blue-600' },
// //     { icon: Package,  title: 'Pickup & Submit', description: 'Doorstep pickup & application submission',time: 'Scheduled',  color: 'bg-orange-600' },
// //     { icon: Shield,   title: 'Be Appointment-Ready', description: 'Complete guidance till you’re done', time: 'On time',    color: 'bg-purple-600' },
// //   ]

// //   return (
// //     <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-primary/5">
// //       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it works</h2>
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {steps.map((s) => (
// //             <Card key={s.title} className="border">
// //               <CardContent className="p-6">
// //                 <div className="flex items-start gap-4">
// //                   <div className={`mt-1 h-10 w-10 rounded-lg ${s.color} text-white inline-flex items-center justify-center`}>
// //                     <s.icon className="h-5 w-5" />
// //                   </div>
// //                   <div>
// //                     <div className="font-semibold">{s.title}</div>
// //                     <p className="text-sm text-muted-foreground">{s.description}</p>
// //                     <div className="mt-2 text-xs text-muted-foreground">{s.time}</div>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// 'use client'

// import {
//   UserPlus,
//   Users,
//   CalendarDays,
//   Package,
//   ShieldCheck,
// } from 'lucide-react'
// import clsx from 'clsx'

// type Step = {
//   title: string
//   desc: string
//   eta: string
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
//   tone?: 'primary' | 'success'
// }

// const STEPS: Step[] = [
//   {
//     title: 'Onboard',
//     desc: 'Quick registration and document upload',
//     eta: '5 mins',
//     icon: UserPlus,
//   },
//   {
//     title: 'Expert Connect',
//     desc: 'Immediate connection with visa specialists',
//     eta: '15 mins',
//     icon: Users,
//   },
//   {
//     title: 'Get Appointment',
//     desc: 'We book your visa appointment slot',
//     eta: '24–48 hrs',
//     icon: CalendarDays,
//   },
//   {
//     title: 'Doorstep Pickup',
//     desc: 'We collect documents from your location',
//     eta: 'Same day',
//     icon: Package,
//   },
//   {
//     title: 'Confident Appearance',
//     desc: 'Appear for appointment with full confidence',
//     eta: 'Scheduled',
//     icon: ShieldCheck,
//     tone: 'success',
//   },
// ]

// export default function HowItWorks() {
//   return (
//     <section id="how-it-works" className="relative py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
//             How It Works
//           </h2>
//           <p className="mt-4 text-foreground/70">
//             Five simple steps to get your visa approved with complete peace of mind
//           </p>
//         </div>

//         {/* steps */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
//           {STEPS.map((s, i) => {
//             const Icon = s.icon
//             const isLast = i === STEPS.length - 1

//             return (
//               <div key={s.title} className="relative">
//                 {/* Card */}
//                 <article
//                   className={clsx(
//                     'card-visa h-full rounded-2xl bg-card border p-6 md:p-7 text-center',
//                     'flex flex-col items-center justify-between',
//                   )}
//                 >
//                   {/* icon bubble */}
//                   <div
//                     className={clsx(
//                       'mb-5 grid place-content-center rounded-full shadow-glow',
//                       'w-20 h-20',
//                       s.tone === 'success'
//                         ? 'bg-green-500 text-white'
//                         : 'bg-gradient-to-br from-primary to-primary-600 text-primary-foreground',
//                     )}
//                     aria-hidden
//                   >
//                     <Icon className="h-9 w-9" />
//                   </div>

//                   <h3 className="text-xl font-extrabold text-foreground">
//                     {s.title}
//                   </h3>
//                   <p className="mt-3 text-sm text-foreground/75 leading-relaxed max-w-[22ch]">
//                     {s.desc}
//                   </p>

//                   <div className="mt-5">
//                     <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,.45)]">
//                       {s.eta}
//                     </span>
//                   </div>
//                 </article>

//                 {/* connector (desktop only) */}
//                 {!isLast && (
//                   <span
//                     className="how-connector hidden lg:block"
//                     aria-hidden
//                   />
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import {
  UserPlus,
  Users,
  CalendarDays,
  Package,
  ShieldCheck,
} from 'lucide-react'
import clsx from 'clsx'

type Step = {
  title: string
  desc: string
  eta: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  tone?: 'primary' | 'success'
}

const STEPS: Step[] = [
  {
    title: 'Onboard',
    desc: 'Quick registration and document upload',
    eta: '5 mins',
    icon: UserPlus,
  },
  {
    title: 'Expert Connect',
    desc: 'Immediate connection with visa specialists',
    eta: '15 mins',
    icon: Users,
  },
  {
    title: 'Get Appointment',
    desc: 'We book your visa appointment slot',
    eta: '24–48 hrs',
    icon: CalendarDays,
  },
  {
    title: 'Doorstep Pickup',
    desc: 'We collect documents from your location',
    eta: 'Same day',
    icon: Package,
  },
  {
    title: 'Confident Appearance',
    desc: 'Appear for appointment with full confidence',
    eta: 'Scheduled',
    icon: ShieldCheck,
    tone: 'success',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="mt-3 text-foreground/70">
            Five simple steps to get your visa approved with complete peace of mind
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const isLast = i === STEPS.length - 1

            return (
              <div key={s.title} className="relative">
                <article
                  className={clsx(
                    'card-visa rounded-xl border bg-card text-center',
                    'p-5 md:p-6 h-full flex flex-col items-center',
                    'hover:translate-y-[-2px]',
                  )}
                >
                  {/* Icon token */}
                  <div
                    className={clsx(
                      'icon-token mb-4',
                      s.tone === 'success' ? 'icon-token--success' : 'icon-token--primary',
                    )}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.25} />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed max-w-[26ch]">
                    {s.desc}
                  </p>

                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,.45)]">
                      {s.eta}
                    </span>
                  </div>
                </article>

                {/* Connector (desktop) */}
                {!isLast && <span className="how-connector hidden lg:block" aria-hidden />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
