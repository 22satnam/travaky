// 'use client'

// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Clock, MapPin } from 'lucide-react'
// import { useMemo, useState } from 'react'
// import { countryData } from '@/data/countries'
// import { cn } from '@/lib/utils'

// export function ChooseDestinationSection() {
//   const [query, setQuery] = useState('')
//   const shown = useMemo(() => countryData.filter(c => c.countryName.toLowerCase().includes(query.toLowerCase())), [query])

//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Choose Your <span className="text-brand-accent">Destination</span>
//           </h2>
//           <QuickStats />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
//             Select from our most popular visa destinations or search for your specific country.
//           </p>
//           <div className="max-w-md mx-auto relative">
//             <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 13a6 6 0 11-12 0 6 6 0 0112 0z" />
//             </svg>
//             <input
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//               placeholder="Search for a country…"
//               className="pl-10 h-12 text-center w-full rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-brand-primary"
//             />
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {shown.map(c => (
//             <Card key={c.name} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50">
//               <CardContent className="p-6 text-center">
//                 <div className="text-4xl mb-3">{c.flag}</div>
//                 <h3 className="text-lg font-semibold mb-3">{c.name}</h3>
//                 <div className="space-y-2 text-sm text-muted-foreground mb-4">
//                   <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /><span>{c.timing}</span></div>
//                   <div className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4" /><span>{c.type}</span></div>
//                 </div>
//                 <div className="text-2xl font-bold text-brand-primary mb-4">{c.price}</div>
//                 <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent">
//                   Apply Now
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
//             View All Countries
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function QuickStats() {
//   return (
//     <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
//       <StatCard label="Get your visa journey start" value="10 mins" className="bg-brand-primary/10" />
//       <StatCard label="Get appointment slot" value="15 mins" className="bg-brand-accent/10" />
//       <StatCard label="Onboard process" value="5 mins" className="bg-success/10" labelClass="text-success" />
//     </div>
//   );
// }

// function StatCard({ label, value, className, labelClass }: { label: string; value: string; className?: string; labelClass?: string; }) {
//   return (
//     <div className={cn("rounded-lg p-4", className)}>
//       <h3 className={cn("font-bold text-lg", labelClass)}>{label}</h3>
//       <p className="text-2xl font-bold text-brand-secondary">{value}</p>
//     </div>
//   );
// }





// 'use client'

// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Clock, MapPin } from 'lucide-react'
// import { useMemo, useState } from 'react'
// import { countryData } from '@/data/countries'
// import { cn } from '@/lib/utils'

// export function ChooseDestinationSection() {
//   const [query, setQuery] = useState('')
//   const shown = useMemo(() => countryData.filter(c => c.countryName.toLowerCase().includes(query.toLowerCase())), [query])

//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Choose Your <span className="text-brand-accent">Destination</span>
//           </h2>
//           <QuickStats />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
//             Select from our most popular visa destinations or search for your specific country.
//           </p>
//           <div className="max-w-md mx-auto relative">
//             <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 13a6 6 0 11-12 0 6 6 0 0112 0z" />
//             </svg>
//             <input
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//               placeholder="Search for a country…"
//               className="pl-10 h-12 text-center w-full rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-brand-primary"
//             />
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {shown.map(c => (
//             <Card key={c.name} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50">
//               <CardContent className="p-6 text-center">
//                 <div className="text-4xl mb-3">{c.flag}</div>
//                 <h3 className="text-lg font-semibold mb-3">{c.name}</h3>
//                 <div className="space-y-2 text-sm text-muted-foreground mb-4">
//                   <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /><span>{c.timing}</span></div>
//                   <div className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4" /><span>{c.type}</span></div>
//                 </div>
//                 <div className="text-2xl font-bold text-brand-primary mb-4">{c.price}</div>
//                 <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent">
//                   Apply Now
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
//             View All Countries
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function QuickStats() {
//   return (
//     <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
//       <StatCard label="Get your visa journey start" value="10 mins" className="bg-brand-primary/10" />
//       <StatCard label="Get appointment slot" value="15 mins" className="bg-brand-accent/10" />
//       <StatCard label="Onboard process" value="5 mins" className="bg-success/10" labelClass="text-success" />
//     </div>
//   );
// }

// function StatCard({ label, value, className, labelClass }: { label: string; value: string; className?: string; labelClass?: string; }) {
//   return (
//     <div className={cn("rounded-lg p-4", className)}>
//       <h3 className={cn("font-bold text-lg", labelClass)}>{label}</h3>
//       <p className="text-2xl font-bold text-brand-secondary">{value}</p>
//     </div>
//   );
// }



'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import { countryData } from '@/data/countries'
import { cn } from '@/lib/utils'

export function ChooseDestinationSection() {
  const [query, setQuery] = useState('')
  const shown = useMemo(() => countryData.filter(c => c.countryName.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-blue-500">Destination</span>
          </h2>
          <QuickStats />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Select from our most popular visa destinations or search for your specific country.
          </p>
          <div className="max-w-md mx-auto relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 13a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search for a country…"
              className="pl-10 h-12 text-center w-full rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shown.map(c => (
            <Card key={c.name} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{c.flag}</div>
                <h3 className="text-lg font-semibold mb-3">{c.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /><span>{c.timing}</span></div>
                  <div className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4" /><span>{c.type}</span></div>
                </div>
                <div className="text-2xl font-bold text-blue-500 mb-4">{c.price}</div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            View All Countries
          </Button>
        </div>
      </div>
    </section>
  );
}

function QuickStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
      <StatCard label="Get your visa journey start" value="10 mins" className="bg-blue-500/10" />
      <StatCard label="Get appointment slot" value="15 mins" className="bg-teal-500/10" />
      <StatCard label="Onboard process" value="5 mins" className="bg-green-500/10" labelClass="text-green-500" />
    </div>
  );
}

function StatCard({ label, value, className, labelClass }: { label: string; value: string; className?: string; labelClass?: string; }) {
  return (
    <div className={cn("rounded-lg p-4", className)}>
      <h3 className={cn("font-bold text-lg", labelClass)}>{label}</h3>
      <p className="text-2xl font-bold text-blue-500">{value}</p>
    </div>
  );
}
