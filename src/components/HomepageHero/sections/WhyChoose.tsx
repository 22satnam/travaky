// 'use client'

// import { Award, Users, MapPin, Clock, Star, Shield } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'

// export default function WhyChoose() {
//   const highlights = [
//     {
//       icon: Award,
//       title: "World's First",
//       subtitle: 'Visa Doorstep Facilitation',
//       stat: 'First in Industry',
//       gradient: 'from-primary to-primary-600',
//     },
//     { icon: Users,  title: 'Experts On-Call',  subtitle: 'Real Visa Specialists',  stat: '24×7',   gradient: 'from-emerald-500 to-emerald-600' },
//     { icon: MapPin, title: '20+ Cities',       subtitle: 'Doorstep Pickup',        stat: 'Expanding', gradient: 'from-blue-500 to-blue-600' },
//     { icon: Clock,  title: '24–48 Hours',      subtitle: 'Appointment Confirmed',  stat: 'Priority',  gradient: 'from-orange-500 to-orange-600' },
//     { icon: Star,   title: 'Loved by Users',   subtitle: 'High CSAT',              stat: '4.9/5',     gradient: 'from-yellow-500 to-yellow-600' },
//     { icon: Shield, title: 'Secure & Compliant', subtitle: 'Trusted Process',      stat: '99%+',     gradient: 'from-purple-500 to-purple-600' },
//   ]

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why choose Travaky</h2>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {highlights.map((h) => (
//             <Card key={h.title} className="border hover:shadow-lg transition-shadow">
//               <CardContent className="p-6">
//                 <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${h.gradient} text-white mb-4`}>
//                   <h.icon className="h-5 w-5" />
//                 </div>
//                 <div className="font-semibold">{h.title}</div>
//                 <div className="text-sm text-muted-foreground">{h.subtitle}</div>
//                 <div className="mt-3 inline-flex rounded-md bg-muted px-2 py-1 text-xs">{h.stat}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





import { Award, UsersRound, MapPin, Clock3 } from "lucide-react"

type Feature = {
  title: string
  big?: string
  sub: string
  desc: string
  chip: string
  bubble: string
  chipTone: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  highlight?: boolean
}

const FEATURES: Feature[] = [
  {
    title: "World's First",
    sub: "Visa Doorstep Facilitation",
    big: undefined,
    desc:
      "Revolutionary service model that brings visa processing to your doorstep.",
    chip: "First in Industry",
    chipTone:
      "bg-primary-600/10 text-primary-800 ring-1 ring-primary-500/20",
    bubble:
      "bg-primary-600/15 text-primary-800 ring-1 ring-primary-500/25",
    Icon: Award,
    highlight: true,
  },
  {
    title: "10,000+",
    sub: "Visas Processed Successfully",
    big: "10,000+",
    desc:
      "Trusted by thousands of travelers worldwide for their visa needs.",
    chip: "99% Success Rate",
    chipTone:
      "bg-emerald-500/12 text-emerald-800 ring-1 ring-emerald-600/25",
    bubble:
      "bg-emerald-500/18 text-emerald-800 ring-1 ring-emerald-600/30",
    Icon: UsersRound,
  },
  {
    title: "20+ Cities",
    sub: "Doorstep Pickup Available",
    big: "20+ Cities",
    desc:
      "Convenient doorstep service across major cities in India.",
    chip: "Expanding Daily",
    chipTone: "bg-blue-500/12 text-blue-800 ring-1 ring-blue-600/25",
    bubble:
      "bg-blue-500/18 text-blue-800 ring-1 ring-blue-600/30",
    Icon: MapPin,
  },
  {
    title: "24–48 Hours",
    sub: "Appointment Confirmation",
    big: "24–48 Hours",
    desc:
      "Fastest appointment booking with guaranteed slots.",
    chip: "Average: 36 hrs",
    chipTone:
      "bg-violet-500/12 text-violet-800 ring-1 ring-violet-600/25",
    bubble:
      "bg-violet-500/18 text-violet-800 ring-1 ring-violet-600/30",
    Icon: Clock3,
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Why Choose Travaky?
          </h2>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Experience the future of visa processing with our innovative
            doorstep facilitation services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const commonCard =
              "relative rounded-2xl p-6 sm:p-8 shadow-sm transition " +
              "border ring-1 backdrop-blur-sm " +
              "hover:shadow-md hover:ring-primary/35"

            const baseCard =
              "bg-white/70 dark:bg-primary-900/10 border-black/5 ring-black/5"

            const hiCard =
              "bg-gradient-to-b from-primary-50/80 to-primary-100/60 " +
              "dark:from-primary-900/25 dark:to-primary-800/20 " +
              "border-primary/30 ring-primary/30"

            return (
              <article
                key={i}
                className={`${commonCard} ${f.highlight ? hiCard : baseCard}`}
              >
                {/* Icon bubble */}
                <div className="mb-5">
                  <span
                    className={`inline-grid place-items-center w-12 h-12 rounded-2xl shadow-inner ${f.bubble}`}
                    aria-hidden
                  >
                    <f.Icon className="h-6 w-6" />
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {f.big ?? f.title}
                </h3>
                <div className="mt-1 text-primary/90 font-semibold">
                  {f.sub}
                </div>

                {/* Body */}
                <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* Chip */}
                <div className="mt-6">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${f.chipTone}`}
                  >
                    {f.chip}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
