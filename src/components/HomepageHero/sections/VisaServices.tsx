// 'use client'

// import Image from 'next/image'
// import { useMemo, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { countryData, type CountryData } from '@/data/countries'
// import { useAuth } from '@/context/AuthContext'
// import { toast } from 'sonner'
// import { Search, Clock3, MapPin } from 'lucide-react'
// import { useRequireAuth } from '@/lib/requireAuth'

// type Props = {
//   /** Optional — if you want to pop auth like your navbar dialog */
//   onAuthRedirect?: (next: string) => void
// }

// /** helpers */
// const df = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short' })
// const addDays = (d: Date, n: number) => {
//   const x = new Date(d)
//   x.setDate(x.getDate() + n)
//   return x
// }

// export default function VisaServices({ onAuthRedirect }: Props) {
//   const [query, setQuery] = useState('')
//   const [visible, setVisible] = useState(8) // 2 rows on desktop, then "See more"
//   const { session } = useAuth()
//   const router = useRouter()

//   const list = useMemo(() => {
//     const q = query.trim().toLowerCase()
//     const all = countryData as CountryData[]
//     if (!q) return all
//     return all.filter(c =>
//       c.countryName.toLowerCase().includes(q)
//       || (c.visaVariable ?? '').toLowerCase().includes(q)
//     )
//   }, [query])

//   const openCard = (c: CountryData) => {
//     // ✅ SAME BEHAVIOR as your base search field
//     if (session) router.push(c.buttonLink)
//     else {
//       toast('Please log in to access this form.')
//       onAuthRedirect?.(c.buttonLink)
//     }
//   }

//   return (
//     <section id="visa-services" className="relative py-14 sm:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Title */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
//             Visa Services for 150+ Countries
//           </h2>
//           <p className="mt-3 text-foreground/70">
//             Choose your destination—doorstep pickup, fast scheduling, expert review.
//           </p>
//         </div>

//         {/* Centered Search */}
//         <div className="mx-auto max-w-xl mb-8">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search countries…"
//               className="w-full rounded-full pl-11 pr-4 py-3 bg-background border outline-none
//                          focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
//             />
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {list.slice(0, visible).map((c, idx) => {
//             const leadDays = c.leadDays ?? 12
//             const byDate = df.format(addDays(new Date(), leadDays))
//             const label = c.visaLabel ?? 'Sticker visa'
//             const price = c.cost ?? (c.priceINR ? `₹${c.priceINR.toLocaleString('en-IN')}` : '—')

//             return (
//               <article
//                 key={`${c.countryName}-${idx}`}
//                 className="group card-visa cursor-pointer overflow-hidden rounded-2xl"
//                 onClick={() => openCard(c)}
//               >
//                 {/* Top image (no white band, full bleed) */}
//                 <div className="relative h-48 md:h-44 xl:h-48">
//                   <Image
//                     src={c.backgroundPhoto || '/placeholder.svg'}
//                     alt={c.countryName}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 25vw"
//                     className="object-cover"
//                     priority={false}
//                   />
//                   {/* image wash for legibility */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

//                   {/* Title + pill on top of image */}
//                   <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
//                     <div className="text-white text-xl font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
//                       {c.countryName}
//                     </div>
//                     <span
//                       className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
//                                  text-white/95 bg-white/10 border border-white/35 backdrop-blur-sm
//                                  shadow-[inset_0_1px_0_rgba(255,255,255,.35)]"
//                     >
//                       {label}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-extrabold">{c.countryName} Visa</h3>

//                   <ul className="mt-4 space-y-3 text-sm">
//                     <li className="flex items-center gap-3">
//                       <Clock3 className="h-4 w-4 text-primary" />
//                       <span className="text-foreground/90">
//                         Visa by <span className="font-semibold">{byDate}</span>
//                       </span>
//                     </li>
//                     <li className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-primary" />
//                       <span className="text-foreground/90">Doorstep pickup available</span>
//                     </li>
//                   </ul>

//                   <div className="mt-5 text-foreground/90">
//                     From <span className="font-extrabold">{price}</span>
//                   </div>
//                 </div>
//               </article>
//             )
//           })}
//         </div>

//         {/* See more / Show less */}
//         {list.length > 8 && (
//           <div className="mt-8 flex justify-center">
//             {visible < list.length ? (
//               <button
//                 onClick={() => setVisible(list.length)}
//                 className="rounded-full px-5 py-2 text-sm font-semibold border bg-background hover:bg-primary/5 transition
//                            border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,.3)]"
//               >
//                 See more
//               </button>
//             ) : (
//               <button
//                 onClick={() => setVisible(8)}
//                 className="rounded-full px-5 py-2 text-sm font-semibold border bg-background hover:bg-primary/5 transition
//                            border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,.3)]"
//               >
//                 Show less
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }



'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { countryData, type CountryData } from '@/data/countries'
import { Search, Clock3, MapPin } from 'lucide-react'
import { useRequireAuth } from '@/lib/requireAuth'

/** helpers */
const df = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short' })
const addDays = (d: Date, n: number) => {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

export default function VisaServices() {
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(8) // 2 rows on desktop, then "See more"
  const requireAuth = useRequireAuth()

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    const all = countryData as CountryData[]
    if (!q) return all
    return all.filter(
      (c) =>
        c.countryName.toLowerCase().includes(q) ||
        (c.visaVariable ?? '').toLowerCase().includes(q),
    )
  }, [query])

  const openCard = (c: CountryData) => {
    // ✅ same behavior as base code: prompt auth first if not logged-in
    requireAuth(c.buttonLink)
  }

  return (
    <section id="visa-services" className="relative py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Visa Services for 150+ Countries
          </h2>
          <p className="mt-3 text-foreground/70">
            Choose your destination—doorstep pickup, fast scheduling, expert review.
          </p>
        </div>

        {/* Centered Search */}
        <div className="mx-auto max-w-xl mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries…"
              className="w-full rounded-full pl-11 pr-4 py-3 bg-background border outline-none
                         focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.slice(0, visible).map((c, idx) => {
            const leadDays = c.leadDays ?? 12
            const byDate = df.format(addDays(new Date(), leadDays))
            const label = c.visaLabel ?? 'Sticker visa'
            const price =
              c.cost ?? (c.priceINR ? `₹${c.priceINR.toLocaleString('en-IN')}` : '—')

            return (
              <article
                key={`${c.countryName}-${idx}`}
                className="group card-visa cursor-pointer overflow-hidden rounded-2xl"
                role="button"
                tabIndex={0}
                onClick={() => openCard(c)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openCard(c)}
              >
                {/* Top image (full-bleed; no white band) */}
                <div className="relative h-48 md:h-44 xl:h-48">
                  <Image
                    src={c.backgroundPhoto || '/placeholder.svg'}
                    alt={c.countryName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                    priority={false}
                  />
                  {/* wash for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  {/* Title + pill */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="text-white text-xl font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                      {c.countryName}
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                 text-white/95 bg-white/10 border border-white/35 backdrop-blur-sm
                                 shadow-[inset_0_1px_0_rgba(255,255,255,.35)]"
                    >
                      {label}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-foreground">{c.countryName} Visa</h3>

                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Clock3 className="h-4 w-4 text-primary" />
                      <span className="text-foreground/90">
                        Visa by <span className="meta-strong">{byDate}</span>
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-foreground/90">Doorstep pickup available</span>
                    </li>
                  </ul>

                  <div className="mt-5 text-foreground/90">
                    From <span className="font-extrabold">{price}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* See more / Show less */}
        {list.length > 8 && (
          <div className="mt-8 flex justify-center">
            {visible < list.length ? (
              <button
                onClick={() => setVisible(list.length)}
                className="rounded-full px-5 py-2 text-sm font-semibold border bg-background hover:bg-primary/5 transition
                           border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,.3)]"
              >
                See more
              </button>
            ) : (
              <button
                onClick={() => setVisible(8)}
                className="rounded-full px-5 py-2 text-sm font-semibold border bg-background hover:bg-primary/5 transition
                           border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,.3)]"
              >
                Show less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
