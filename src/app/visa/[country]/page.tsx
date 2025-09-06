// // // // // // // // // // 'use client'

// // // // // // // // // // import Image from 'next/image'
// // // // // // // // // // import { useRouter, useParams } from 'next/navigation'
// // // // // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // // // // import { countryData } from '@/data/countries'          // adjust path if different
// // // // // // // // // // import { PRICE_PLANS, PlanName } from '@/config/pricing'
// // // // // // // // // // import { useState } from 'react'

// // // // // // // // // // export default function VisaInfoPage() {
// // // // // // // // // //   const router   = useRouter()
// // // // // // // // // //   const { country } = useParams<{ country: string }>()
// // // // // // // // // //   const info     = countryData.find(c =>
// // // // // // // // // //     c.buttonLink.endsWith(`/${country}`))    // quick slug lookup

// // // // // // // // // //   if (!info) return <p className="p-10">Country not supported.</p>

// // // // // // // // // //   const [travellers, setTravellers] = useState(1)
// // // // // // // // // //   const selectedPlan: PlanName = 'Docs on Call'  // default plan for sidebar math

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 lg:px-10 py-8">
// // // // // // // // // //       {/* LEFT – scrollable content */}
// // // // // // // // // //       <div className="lg:col-span-3 space-y-12">
// // // // // // // // // //         {/* hero collage */}
// // // // // // // // // //         <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
// // // // // // // // // //           <div className="relative h-80 md:row-span-2">
// // // // // // // // // //             <Image src={info.backgroundPhoto} fill alt={info.countryName}
// // // // // // // // // //                    className="object-cover rounded-lg" />
// // // // // // // // // //             <div className="absolute inset-0 bg-black/50 rounded-lg"/>
// // // // // // // // // //             <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl
// // // // // // // // // //                            font-bold text-white drop-shadow-lg">
// // // // // // // // // //               {info.countryName} Visa for Indians
// // // // // // // // // //             </h1>
// // // // // // // // // //           </div>
// // // // // // // // // //           {/* 3 filler pics – reuse same img for now */}
// // // // // // // // // //           {Array.from({ length: 3 }).map((_, i) => (
// // // // // // // // // //             <div key={i} className="relative h-40">
// // // // // // // // // //               <Image src={info.backgroundPhoto} fill alt=""
// // // // // // // // // //                      className="object-cover rounded-lg" />
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* quick facts */}
// // // // // // // // // //         <section>
// // // // // // // // // //           <h2 className="text-2xl font-semibold mb-4">
// // // // // // // // // //             {info.countryName} Visa Information
// // // // // // // // // //           </h2>
// // // // // // // // // //           <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
// // // // // // // // // //             <li><strong>Visa Type:</strong><br/>E-Visa</li>
// // // // // // // // // //             <li><strong>Stay:</strong><br/>30 days</li>
// // // // // // // // // //             <li><strong>Validity:</strong><br/>up to 2 years</li>
// // // // // // // // // //             <li><strong>Entry:</strong><br/>{info.visaVariable}</li>
// // // // // // // // // //           </ul>
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* requirements pills – simple static for now */}
// // // // // // // // // //         <section>
// // // // // // // // // //           <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
// // // // // // // // // //           <div className="flex flex-wrap gap-2">
// // // // // // // // // //             {['Photo', 'Passport', 'Bank Statement', 'Invitation Letter']
// // // // // // // // // //                .map(r => (
// // // // // // // // // //                  <span key={r}
// // // // // // // // // //                    className="px-4 py-2 bg-muted rounded-full text-sm">
// // // // // // // // // //                    {r}
// // // // // // // // // //                  </span>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* timeline – 4 static steps */}
// // // // // // // // // //         <section>
// // // // // // // // // //           <h2 className="text-2xl font-semibold mb-4">
// // // // // // // // // //             How {info.countryName} Visa Process Works
// // // // // // // // // //           </h2>
// // // // // // // // // //           <ol className="border-l-2 border-primary space-y-10 pl-6">
// // // // // // // // // //             {[
// // // // // // // // // //               ['Apply on Travaky',
// // // // // // // // // //                'Add passport information, travel details and other information required.'],
// // // // // // // // // //               ['Passport Pick-up',
// // // // // // // // // //                'Our partner collects your passport and submits it to the embassy.'],
// // // // // // // // // //               ['Visa Gets Processed',
// // // // // // // // // //                'We work with immigration to ensure you get your visa on time.'],
// // // // // // // // // //               ['Passport Delivered',
// // // // // // // // // //                'We deliver your passport & visa back to your home.'],
// // // // // // // // // //             ].map(([title, desc], idx) => (
// // // // // // // // // //               <li key={idx} className="relative">
// // // // // // // // // //                 <span className="absolute -left-[14px] top-1 w-3 h-3
// // // // // // // // // //                                  rounded-full bg-primary"/>
// // // // // // // // // //                 <h3 className="font-semibold mb-1">Step {idx + 1}</h3>
// // // // // // // // // //                 <p className="font-medium">{title}</p>
// // // // // // // // // //                 <p className="text-muted-foreground text-sm">{desc}</p>
// // // // // // // // // //               </li>
// // // // // // // // // //             ))}
// // // // // // // // // //           </ol>
// // // // // // // // // //         </section>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* RIGHT – sticky pricing card */}
// // // // // // // // // //       <div className="lg:col-span-2">
// // // // // // // // // //         <PricingSidebar
// // // // // // // // // //           variant="info"                 // ◀️ new prop (next section)
// // // // // // // // // //           selectedPlan={selectedPlan}
// // // // // // // // // //           travelerCount={travellers}
// // // // // // // // // //           onCountChange={setTravellers}
// // // // // // // // // //           onStart={() =>
// // // // // // // // // //             router.push(`/apply/${country}?travellers=${travellers}`)
// // // // // // // // // //           }
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }


// // // // // // // // // 'use client'
// // // // // // // // // import Image from 'next/image'
// // // // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // // // import { countryData } from '@/data/countries'
// // // // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // // // import { useState } from 'react'
// // // // // // // // // import { PlanName } from '@/config/pricing'

// // // // // // // // // export default function VisaInfo() {
// // // // // // // // //   const { country } = useParams<{ country: string }>()
// // // // // // // // //   const router      = useRouter()
// // // // // // // // //   const data        = countryData.find(c => c.buttonLink.endsWith(`/${country}`))

// // // // // // // // //   if (!data) return <p className="p-10">No data for this country.</p>

// // // // // // // // //   // fall-backs so nothing crashes even if you haven’t added extras yet
// // // // // // // // //   const hero        = data.hero ?? [data.backgroundPhoto, data.backgroundPhoto,
// // // // // // // // //                                      data.backgroundPhoto, data.backgroundPhoto]
// // // // // // // // //   const plan        = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // // // // // // //   const [trav, setTrav] = useState(1)

// // // // // // // // //   return (
// // // // // // // // //     <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 lg:px-12 py-8">
// // // // // // // // //       {/* LEFT column ------------------------------------------------ */}
// // // // // // // // //       <div className="lg:col-span-3 space-y-16">

// // // // // // // // //         {/* Hero collage */}
// // // // // // // // //         <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
// // // // // // // // //           <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // // // // // // //             <Image src={hero[0]} fill alt="" className="object-cover"/>
// // // // // // // // //             <div className="absolute inset-0 bg-black/50"/>
// // // // // // // // //             <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white">
// // // // // // // // //               {data.countryName} Visa for Indians
// // // // // // // // //             </h1>
// // // // // // // // //           </div>
// // // // // // // // //           {hero.slice(1).map((src, i) => (
// // // // // // // // //             <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // // // // // // //               <Image src={src} fill alt="" className="object-cover"/>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </section>

// // // // // // // // //         {/* Visa facts */}
// // // // // // // // //         <Info title={`${data.countryName} Visa Information`}>
// // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // // // // // // //             {(data.visaFacts ?? []).map(f => (
// // // // // // // // //               <div key={f.label}>
// // // // // // // // //                 <p className="text-muted-foreground">{f.label}</p>
// // // // // // // // //                 <p className="font-medium">{f.value}</p>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </Info>

// // // // // // // // //         {/* Requirements */}
// // // // // // // // //         <Info title={`${data.countryName} Visa Requirements`}>
// // // // // // // // //           <div className="flex flex-wrap gap-2">
// // // // // // // // //             {(data.requirements ?? []).map(r => (
// // // // // // // // //               <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">
// // // // // // // // //                 {r}
// // // // // // // // //               </span>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </Info>

// // // // // // // // //         {/* Timeline steps */}
// // // // // // // // //         <Info title={`How ${data.countryName} Visa Process Works`}>
// // // // // // // // //           <ol className="space-y-6 border-l-2 border-primary pl-6">
// // // // // // // // //             {(data.timeline ?? []).map((t, idx) => (
// // // // // // // // //               <li key={idx} className="relative">
// // // // // // // // //                 <span className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-primary"/>
// // // // // // // // //                 <div className="bg-white shadow border rounded p-4">
// // // // // // // // //                   <h3 className="font-semibold mb-1">Step {idx + 1}</h3>
// // // // // // // // //                   <p className="font-medium">{t.title}</p>
// // // // // // // // //                   <p className="text-muted-foreground text-sm">{t.body}</p>
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
// // // // // // // // //             ))}
// // // // // // // // //           </ol>
// // // // // // // // //         </Info>

// // // // // // // // //         {/* Reassurance blurb */}
// // // // // // // // //         <Info title="Why Travaky?">
// // // // // // // // //           <p className="text-muted-foreground">
// // // // // // // // //             We’ve processed thousands of {data.countryName} visas with a 99% approval
// // // // // // // // //             rate. Our experts handle every detail so you don’t have to worry.
// // // // // // // // //           </p>
// // // // // // // // //         </Info>
// // // // // // // // //       </div>

// // // // // // // // //       {/* RIGHT column (sticky) -------------------------------------- */}
// // // // // // // // //       <div className="lg:col-span-2">
// // // // // // // // //         <PricingSidebar
// // // // // // // // //           variant="info"
// // // // // // // // //           selectedPlan={plan}
// // // // // // // // //           travelerCount={trav}
// // // // // // // // //           onCountChange={setTrav}
// // // // // // // // //           onStart={() => router.push(`/apply/${country}?travellers=${trav}`)}
// // // // // // // // //         />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // /* tiny wrapper */
// // // // // // // // // function Info({ title, children }:{
// // // // // // // // //   title: string; children: React.ReactNode
// // // // // // // // // }) {
// // // // // // // // //   return (
// // // // // // // // //     <section>
// // // // // // // // //       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
// // // // // // // // //       {children}
// // // // // // // // //     </section>
// // // // // // // // //   )
// // // // // // // // // }


// // // // // // // // 'use client'
// // // // // // // // import Image from 'next/image'
// // // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // // import { countryData } from '@/data/countries'
// // // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // // import { useState } from 'react'
// // // // // // // // import { PlanName } from '@/config/pricing'

// // // // // // // // export default function VisaInfo() {
// // // // // // // //   const { country } = useParams<{country: string}>()
// // // // // // // //   const router      = useRouter()
// // // // // // // //   const data        = countryData.find(c => c.slug === country)
// // // // // // // //   if (!data) return <p className="p-10">No data.</p>

// // // // // // // //   const [trav, setTrav] = useState(1)
// // // // // // // //   const plan   = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // // // // // //   const hero   = data.hero ?? [data.backgroundPhoto, data.backgroundPhoto,
// // // // // // // //                                data.backgroundPhoto, data.backgroundPhoto]

// // // // // // // //   /* ------------------------------------------------------------ */
// // // // // // // //   return (
// // // // // // // //     <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 lg:px-12 py-8">
// // // // // // // //       {/* LEFT column */}
// // // // // // // //       <div className="lg:col-span-3 space-y-16">
// // // // // // // //         {/* 1️⃣  collage & title (unchanged) */}
// // // // // // // //          {/* Hero collage */}
// // // // // // // //             <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
// // // // // // // //             <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // // // // // //                 <Image src={hero[0]} fill alt="" className="object-cover"/>
// // // // // // // //                 <div className="absolute inset-0 bg-black/50"/>
// // // // // // // //                 <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white">
// // // // // // // //                 {data.countryName} Visa for Indians
// // // // // // // //                 </h1>
// // // // // // // //             </div>
// // // // // // // //             {hero.slice(1).map((src, i) => (
// // // // // // // //                 <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // // // // // //                 <Image src={src} fill alt="" className="object-cover"/>
// // // // // // // //                 </div>
// // // // // // // //             ))}
// // // // // // // //             </section>

// // // // // // // //         {/* 2️⃣  visa facts (if present) */}
// // // // // // // //         {data.visaFacts && (
// // // // // // // //           <Info title={`${data.countryName} Visa Information`}>
// // // // // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // // // // // //               {data.visaFacts.map(f => (
// // // // // // // //                 <div key={f.label}>
// // // // // // // //                   <p className="text-muted-foreground">{f.label}</p>
// // // // // // // //                   <p className="font-medium">{f.value}</p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 3️⃣  requirements */}
// // // // // // // //         {data.requirements && (
// // // // // // // //           <Info title={`${data.countryName} Visa Requirements`}>
// // // // // // // //             <div className="flex flex-wrap gap-2">
// // // // // // // //               {data.requirements.map(r => (
// // // // // // // //                 <span key={r}
// // // // // // // //                   className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 4️⃣  timeline */}
// // // // // // // //         {data.timeline && (
// // // // // // // //           <Info title={`How ${data.countryName} Visa Process Works`}>
// // // // // // // //             <ol className="space-y-6 border-l-2 border-primary pl-6">
// // // // // // // //               {data.timeline.map((t, i) => (
// // // // // // // //                 <li key={i} className="relative">
// // // // // // // //                   <span className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-primary"/>
// // // // // // // //                   <div className="bg-white shadow border rounded p-4">
// // // // // // // //                     <h3 className="font-semibold mb-1">Step {i + 1}</h3>
// // // // // // // //                     <p className="font-medium">{t.title}</p>
// // // // // // // //                     <p className="text-muted-foreground text-sm">{t.body}</p>
// // // // // // // //                   </div>
// // // // // // // //                 </li>
// // // // // // // //               ))}
// // // // // // // //             </ol>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 5️⃣  cost breakdown */}
// // // // // // // //         {data.costBreakdown && (
// // // // // // // //           <Info title={`How Much Does a ${data.countryName} Visa Cost?`}>
// // // // // // // //             <CostCard title="Pay Now on Travaky"
// // // // // // // //                       items={data.costBreakdown.payNow}/>
// // // // // // // //             {data.costBreakdown.payLater && (
// // // // // // // //               <CostCard title="Pay Later at Appointment Center"
// // // // // // // //                         items={data.costBreakdown.payLater}/>
// // // // // // // //             )}
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 6️⃣  slot alert card */}
// // // // // // // //         {data.slotAlertText && (
// // // // // // // //           <Info title="Your preferred appointment times aren't available">
// // // // // // // //             <SlotAlert text={data.slotAlertText}/>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 7️⃣  what you get preview */}
// // // // // // // //         {data.whatYouGet && (
// // // // // // // //           <Info title="What you get">
// // // // // // // //             <p className="text-muted-foreground mb-4">
// // // // // // // //               Travaky will give you a compiled application packet with all necessary documents
// // // // // // // //             </p>
// // // // // // // //             <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
// // // // // // // //             <div className="relative h-64 w-full max-w-lg">
// // // // // // // //               <Image src={data.whatYouGet.image} fill alt=""
// // // // // // // //                      className="object-contain rounded-lg shadow"/>
// // // // // // // //             </div>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 8️⃣  rejection reasons */}
// // // // // // // //         {data.rejectionReasons && (
// // // // // // // //           <Info title={`${data.countryName} Visa Rejection Reasons`}>
// // // // // // // //             <ul className="space-y-6">
// // // // // // // //               {data.rejectionReasons.map(r => (
// // // // // // // //                 <li key={r.title} className="flex gap-4">
// // // // // // // //                   <span className="w-8 h-8 flex-none rounded-full bg-muted grid
// // // // // // // //                                    place-items-center text-lg">⚠️</span>
// // // // // // // //                   <div>
// // // // // // // //                     <p className="font-semibold">{r.title}</p>
// // // // // // // //                     <p className="text-muted-foreground text-sm">{r.body}</p>
// // // // // // // //                   </div>
// // // // // // // //                 </li>
// // // // // // // //               ))}
// // // // // // // //             </ul>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 9️⃣  reviews */}
// // // // // // // //         {data.reviews && (
// // // // // // // //           <Info title="What our customers say">
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               {data.reviews.map(r => (
// // // // // // // //                 <div key={r.name}
// // // // // // // //                      className="border rounded-lg p-4 shadow bg-white">
// // // // // // // //                   <p className="font-medium">{r.name}
// // // // // // // //                     <span className="text-xs text-muted-foreground ml-2">
// // // // // // // //                       {r.date}{r.tag && ` • ${r.tag}`}
// // // // // // // //                     </span>
// // // // // // // //                   </p>
// // // // // // // //                   <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
// // // // // // // //                   <p className="text-sm mt-2">{r.body}</p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </Info>
// // // // // // // //         )}

// // // // // // // //         {/* 10️⃣  Travaky guarantee blurb */}
// // // // // // // //         <Info title="Why Travaky?">
// // // // // // // //           <p className="text-muted-foreground">
// // // // // // // //             We’ve processed thousands of {data.countryName} visas with a 99 % approval
// // // // // // // //             rate. Our experts handle every detail so you don’t have to worry.
// // // // // // // //           </p>
// // // // // // // //         </Info>
// // // // // // // //       </div>


// // // // // // // //         <div className="lg:col-span-2 lg:pl-6">
// // // // // // // //         {/* sticky wrapper */}
// // // // // // // //         <div className="sticky top-24">
// // // // // // // //             <PricingSidebar
// // // // // // // //             variant="info"
// // // // // // // //             selectedPlan={plan}
// // // // // // // //             travelerCount={trav}
// // // // // // // //             onCountChange={setTrav}
// // // // // // // //             onStart={() =>
// // // // // // // //                 router.push(`/apply/${data.slug}?travellers=${trav}`)
// // // // // // // //             }
// // // // // // // //             />
// // // // // // // //         </div>
// // // // // // // //         </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // /* ---------------- small helpers ------------------- */
// // // // // // // // function Info({ title, children }:{
// // // // // // // //   title: string; children: React.ReactNode
// // // // // // // // }) {
// // // // // // // //   return (
// // // // // // // //     <section className="space-y-4">
// // // // // // // //       <h2 className="text-2xl font-semibold">{title}</h2>
// // // // // // // //       {children}
// // // // // // // //     </section>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // function CostCard({ title, items }:{
// // // // // // // //   title: string; items: { label: string; value: string }[]
// // // // // // // // }) {
// // // // // // // //   return (
// // // // // // // //     <div className="border rounded-lg p-4 mb-6">
// // // // // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // // // // //       <ul className="space-y-1 text-sm">
// // // // // // // //         {items.map(i => (
// // // // // // // //           <li key={i.label} className="flex justify-between">
// // // // // // // //             <span>{i.label}</span><span>{i.value}</span>
// // // // // // // //           </li>
// // // // // // // //         ))}
// // // // // // // //       </ul>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // function SlotAlert({ text }:{ text: string }) {
// // // // // // // //   return (
// // // // // // // //     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
// // // // // // // //       <p className="text-lg font-semibold">Get alerted when slots open!</p>
// // // // // // // //       <p className="text-sm text-muted-foreground">{text}</p>
// // // // // // // //       <input
// // // // // // // //         className="border rounded px-3 py-2 w-60"
// // // // // // // //         placeholder="Your phone number"
// // // // // // // //       />
// // // // // // // //       <button className="bg-indigo-600 text-white px-4 py-2 rounded">
// // // // // // // //         Send alerts
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // 'use client'

// // // // // // // import Image from 'next/image'
// // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // import { useState } from 'react'
// // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // import { countryData } from '@/data/countries'
// // // // // // // import { PlanName } from '@/config/pricing'

// // // // // // // export default function VisaInfo() {
// // // // // // //   const { country } = useParams<{ country: string }>()
// // // // // // //   const router = useRouter()
// // // // // // //   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))

// // // // // // //   if (!data) return <p className="p-10">Country not supported.</p>

// // // // // // //   const hero = data.hero ?? [data.backgroundPhoto, data.backgroundPhoto, data.backgroundPhoto, data.backgroundPhoto]
// // // // // // //   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // // // // //   const [trav, setTrav] = useState(1)

// // // // // // //   return (
// // // // // // //     <div className="w-full">
// // // // // // //       {/* 1️⃣ Hero section (full width) */}
// // // // // // //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// // // // // // //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // // // // //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
// // // // // // //           <div className="absolute inset-0 bg-black/50 rounded-lg" />
// // // // // // //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// // // // // // //             {data.countryName} Visa for Indians
// // // // // // //           </h1>
// // // // // // //         </div>
// // // // // // //         {Array.from({ length: 3 }).map((_, i) => (
// // // // // // //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // // // // //             <Image src={data.backgroundPhoto} fill alt="" className="object-cover" />
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </section>

// // // // // // //       {/* 2️⃣ Main layout: scrollable left + sticky right */}
// // // // // // //       <div className="flex px-4 lg:px-12 gap-8">
// // // // // // //         {/* LEFT – scrollable */}
// // // // // // //         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 space-y-16 pb-24">
// // // // // // //           {/* Visa Info */}
// // // // // // //           <section>
// // // // // // //             <h2 className="text-2xl font-semibold mb-4">
// // // // // // //               {data.countryName} Visa Information
// // // // // // //             </h2>
// // // // // // //             <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
// // // // // // //               <li><strong>Visa Type:</strong><br />E-Visa</li>
// // // // // // //               <li><strong>Stay:</strong><br />30 days</li>
// // // // // // //               <li><strong>Validity:</strong><br />up to 2 years</li>
// // // // // // //               <li><strong>Entry:</strong><br />{data.visaVariable}</li>
// // // // // // //             </ul>
// // // // // // //           </section>

// // // // // // //           {/* Requirements */}
// // // // // // //           <section>
// // // // // // //             <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
// // // // // // //             <div className="flex flex-wrap gap-2">
// // // // // // //               {['Photo', 'Passport', 'Bank Statement', 'Invitation Letter'].map(r => (
// // // // // // //                 <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </section>

// // // // // // //           {/* Timeline */}
// // // // // // //           <section>
// // // // // // //             <h2 className="text-2xl font-semibold mb-4">
// // // // // // //               How {data.countryName} Visa Process Works
// // // // // // //             </h2>
// // // // // // //             <ol className="border-l-2 border-primary space-y-10 pl-6">
// // // // // // //               {[
// // // // // // //                 ['Apply on Travaky', 'Add passport information, travel details and other information required.'],
// // // // // // //                 ['Passport Pick-up', 'Our partner collects your passport and submits it to the embassy.'],
// // // // // // //                 ['Visa Gets Processed', 'We work with immigration to ensure you get your visa on time.'],
// // // // // // //                 ['Passport Delivered', 'We deliver your passport & visa back to your home.'],
// // // // // // //               ].map(([title, desc], idx) => (
// // // // // // //                 <li key={idx} className="relative">
// // // // // // //                   <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary" />
// // // // // // //                   <h3 className="font-semibold mb-1">Step {idx + 1}</h3>
// // // // // // //                   <p className="font-medium">{title}</p>
// // // // // // //                   <p className="text-muted-foreground text-sm">{desc}</p>
// // // // // // //                 </li>
// // // // // // //               ))}
// // // // // // //             </ol>
// // // // // // //           </section>

// // // // // // //           {/* Reassurance */}
// // // // // // //           <section>
// // // // // // //             <h2 className="text-2xl font-semibold mb-4">Why Travaky?</h2>
// // // // // // //             <p className="text-muted-foreground">
// // // // // // //               We’ve processed thousands of {data.countryName} visas with a 99% approval
// // // // // // //               rate. Our experts handle every detail so you don’t have to worry.
// // // // // // //             </p>
// // // // // // //           </section>
// // // // // // //         </div>

// // // // // // //         {/* RIGHT – sticky pricing sidebar */}
// // // // // // //         <div className="w-full lg:w-2/5 hidden lg:block">
// // // // // // //           <div className="sticky top-24">
// // // // // // //             <PricingSidebar
// // // // // // //               variant="info"
// // // // // // //               selectedPlan={plan}
// // // // // // //               travelerCount={trav}
// // // // // // //               onCountChange={setTrav}
// // // // // // //               onStart={() => router.push(`/apply/${country}?travellers=${trav}`)}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }


// // // // // // 'use client'

// // // // // // import Image from 'next/image'
// // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // import { useState } from 'react'
// // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // import { countryData } from '@/data/countries'
// // // // // // import { PlanName } from '@/config/pricing'

// // // // // // export default function VisaInfo() {
// // // // // //   const { country } = useParams<{ country: string }>()
// // // // // //   const router = useRouter()
// // // // // //   const data = countryData.find(c => c.slug === country)
// // // // // //   if (!data) return <p className="p-10">No data.</p>

// // // // // //   const [trav, setTrav] = useState(1)
// // // // // //   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // // // //   const hero = data.hero ?? [
// // // // // //     data.backgroundPhoto,
// // // // // //     data.backgroundPhoto,
// // // // // //     data.backgroundPhoto,
// // // // // //     data.backgroundPhoto,
// // // // // //   ]

// // // // // //   return (
// // // // // //     <div className="w-full">
// // // // // //       {/* 🟦 Hero section – full width */}
// // // // // //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// // // // // //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // // // //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
// // // // // //           <div className="absolute inset-0 bg-black/50 rounded-lg" />
// // // // // //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// // // // // //             {data.countryName} Visa for Indians
// // // // // //           </h1>
// // // // // //         </div>
// // // // // //         {hero.slice(1).map((src, i) => (
// // // // // //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // // // //             <Image src={src} fill alt="" className="object-cover" />
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </section>

// // // // // //       {/* 🟩 Main layout */}
// // // // // //       <div className="flex px-4 lg:px-12 gap-8">
// // // // // //         {/* LEFT – scrollable */}
// // // // // //         <div className="w-full lg:w-3/5 pr-4 overflow-y-auto scrollbar-none max-h-[calc(100vh-6rem)] space-y-16 pb-24">
// // // // // //           {/* Visa Info */}
// // // // // //           {data.visaFacts && (
// // // // // //             <Info title={`${data.countryName} Visa Information`}>
// // // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // // // //                 {data.visaFacts.map(f => (
// // // // // //                   <div key={f.label}>
// // // // // //                     <p className="text-muted-foreground">{f.label}</p>
// // // // // //                     <p className="font-medium">{f.value}</p>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Requirements */}
// // // // // //           {data.requirements && (
// // // // // //             <Info title={`${data.countryName} Visa Requirements`}>
// // // // // //               <div className="flex flex-wrap gap-2">
// // // // // //                 {data.requirements.map(r => (
// // // // // //                   <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Timeline */}
// // // // // //           {data.timeline && (
// // // // // //             <Info title={`How ${data.countryName} Visa Process Works`}>
// // // // // //               <ol className="space-y-6 border-l-2 border-primary pl-6">
// // // // // //                 {data.timeline.map((t, i) => (
// // // // // //                   <li key={i} className="relative">
// // // // // //                     <span className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-primary" />
// // // // // //                     <div className="bg-white shadow border rounded p-4">
// // // // // //                       <h3 className="font-semibold mb-1">Step {i + 1}</h3>
// // // // // //                       <p className="font-medium">{t.title}</p>
// // // // // //                       <p className="text-muted-foreground text-sm">{t.body}</p>
// // // // // //                     </div>
// // // // // //                   </li>
// // // // // //                 ))}
// // // // // //               </ol>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Cost */}
// // // // // //           {data.costBreakdown && (
// // // // // //             <Info title={`How Much Does a ${data.countryName} Visa Cost?`}>
// // // // // //               <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow} />
// // // // // //               {data.costBreakdown.payLater && (
// // // // // //                 <CostCard title="Pay Later at Appointment Center" items={data.costBreakdown.payLater} />
// // // // // //               )}
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Slot alert */}
// // // // // //           {data.slotAlertText && (
// // // // // //             <Info title="Your preferred appointment times aren't available">
// // // // // //               <SlotAlert text={data.slotAlertText} />
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* What you get */}
// // // // // //           {data.whatYouGet && (
// // // // // //             <Info title="What you get">
// // // // // //               <p className="text-muted-foreground mb-4">
// // // // // //                 Travaky will give you a compiled application packet with all necessary documents
// // // // // //               </p>
// // // // // //               <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
// // // // // //               <div className="relative h-64 w-full max-w-lg">
// // // // // //                 <Image src={data.whatYouGet.image} fill alt="" className="object-contain rounded-lg shadow" />
// // // // // //               </div>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Rejection reasons */}
// // // // // //           {data.rejectionReasons && (
// // // // // //             <Info title={`${data.countryName} Visa Rejection Reasons`}>
// // // // // //               <ul className="space-y-6">
// // // // // //                 {data.rejectionReasons.map(r => (
// // // // // //                   <li key={r.title} className="flex gap-4">
// // // // // //                     <span className="w-8 h-8 flex-none rounded-full bg-muted grid place-items-center text-lg">⚠️</span>
// // // // // //                     <div>
// // // // // //                       <p className="font-semibold">{r.title}</p>
// // // // // //                       <p className="text-muted-foreground text-sm">{r.body}</p>
// // // // // //                     </div>
// // // // // //                   </li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Reviews */}
// // // // // //           {data.reviews && (
// // // // // //             <Info title="What our customers say">
// // // // // //               <div className="space-y-4">
// // // // // //                 {data.reviews.map(r => (
// // // // // //                   <div key={r.name} className="border rounded-lg p-4 shadow bg-white">
// // // // // //                     <p className="font-medium">
// // // // // //                       {r.name}
// // // // // //                       <span className="text-xs text-muted-foreground ml-2">
// // // // // //                         {r.date}{r.tag && ` • ${r.tag}`}
// // // // // //                       </span>
// // // // // //                     </p>
// // // // // //                     <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
// // // // // //                     <p className="text-sm mt-2">{r.body}</p>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </Info>
// // // // // //           )}

// // // // // //           {/* Travaky guarantee */}
// // // // // //           <Info title="Why Travaky?">
// // // // // //             <p className="text-muted-foreground">
// // // // // //               We’ve processed thousands of {data.countryName} visas with a 99% approval
// // // // // //               rate. Our experts handle every detail so you don’t have to worry.
// // // // // //             </p>
// // // // // //           </Info>
// // // // // //         </div>

// // // // // //         {/* RIGHT – sticky pricing sidebar */}
// // // // // //         <div className="w-full lg:w-2/5 hidden lg:block">
// // // // // //           <div className="sticky top-24">
// // // // // //             <PricingSidebar
// // // // // //               variant="info"
// // // // // //               selectedPlan={plan}
// // // // // //               travelerCount={trav}
// // // // // //               onCountChange={setTrav}
// // // // // //               onStart={() =>
// // // // // //                 router.push(`/apply/${data.slug}?travellers=${trav}`)
// // // // // //               }
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // /* ---------------- small helpers ------------------- */
// // // // // // function Info({ title, children }: { title: string; children: React.ReactNode }) {
// // // // // //   return (
// // // // // //     <section className="space-y-4">
// // // // // //       <h2 className="text-2xl font-semibold">{title}</h2>
// // // // // //       {children}
// // // // // //     </section>
// // // // // //   )
// // // // // // }

// // // // // // function CostCard({ title, items }: { title: string; items: { label: string; value: string }[] }) {
// // // // // //   return (
// // // // // //     <div className="border rounded-lg p-4 mb-6">
// // // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // // //       <ul className="space-y-1 text-sm">
// // // // // //         {items.map(i => (
// // // // // //           <li key={i.label} className="flex justify-between">
// // // // // //             <span>{i.label}</span><span>{i.value}</span>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // function SlotAlert({ text }: { text: string }) {
// // // // // //   return (
// // // // // //     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
// // // // // //       <p className="text-lg font-semibold">Get alerted when slots open!</p>
// // // // // //       <p className="text-sm text-muted-foreground">{text}</p>
// // // // // //       <input className="border rounded px-3 py-2 w-60" placeholder="Your phone number" />
// // // // // //       <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send alerts</button>
// // // // // //     </div>
// // // // // //   )
// // // // // // }
// // // // // 'use client'

// // // // // import Image from 'next/image'
// // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // import { useState } from 'react'
// // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // import { countryData } from '@/data/countries'
// // // // // import { PlanName } from '@/config/pricing'

// // // // // export default function VisaInfo() {
// // // // //   const { country } = useParams<{ country: string }>()
// // // // //   const router = useRouter()
// // // // //   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))

// // // // //   if (!data) return <p className="p-10">Country not supported.</p>

// // // // //   const hero = data.hero ?? [
// // // // //     data.backgroundPhoto,
// // // // //     data.backgroundPhoto,
// // // // //     data.backgroundPhoto,
// // // // //     data.backgroundPhoto,
// // // // //   ]

// // // // //   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // // //   const [trav, setTrav] = useState(1)

// // // // //   return (
// // // // //     <div className="w-full">
// // // // //       {/* 1️⃣ Hero section (full width) */}
// // // // //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// // // // //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // // //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
// // // // //           <div className="absolute inset-0 bg-black/50 rounded-lg" />
// // // // //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// // // // //             {data.countryName} Visa for Indians
// // // // //           </h1>
// // // // //         </div>
// // // // //         {hero.slice(1).map((src, i) => (
// // // // //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // // //             <Image src={src} fill alt="" className="object-cover" />
// // // // //           </div>
// // // // //         ))}
// // // // //       </section>

// // // // //       {/* 2️⃣ Main layout: left scrollable + right sticky */}
// // // // //       <div className="flex px-4 lg:px-12 gap-8">
// // // // //         {/* LEFT – scrollable with scrollbar hidden */}
// // // // //         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide pr-4 space-y-16 pb-24">
// // // // //           {/* Visa Info */}
// // // // //           {data.visaFacts && (
// // // // //             <Info title={`${data.countryName} Visa Information`}>
// // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // // //                 {data.visaFacts.map(f => (
// // // // //                   <div key={f.label}>
// // // // //                     <p className="text-muted-foreground">{f.label}</p>
// // // // //                     <p className="font-medium">{f.value}</p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Requirements */}
// // // // //           {data.requirements && (
// // // // //             <Info title={`${data.countryName} Visa Requirements`}>
// // // // //               <div className="flex flex-wrap gap-2">
// // // // //                 {data.requirements.map(r => (
// // // // //                   <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Timeline */}
// // // // //           {data.timeline && (
// // // // //             <Info title={`How ${data.countryName} Visa Process Works`}>
// // // // //               <ol className="space-y-6 border-l-2 border-primary pl-6">
// // // // //                 {data.timeline.map((t, i) => (
// // // // //                   <li key={i} className="relative">
// // // // //                     <span className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-primary" />
// // // // //                     <div className="bg-white shadow border rounded p-4">
// // // // //                       <h3 className="font-semibold mb-1">Step {i + 1}</h3>
// // // // //                       <p className="font-medium">{t.title}</p>
// // // // //                       <p className="text-muted-foreground text-sm">{t.body}</p>
// // // // //                     </div>
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ol>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Cost Breakdown */}
// // // // //           {data.costBreakdown && (
// // // // //             <Info title={`How Much Does a ${data.countryName} Visa Cost?`}>
// // // // //               <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow} />
// // // // //               {data.costBreakdown.payLater && (
// // // // //                 <CostCard title="Pay Later at Appointment Center" items={data.costBreakdown.payLater} />
// // // // //               )}
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Slot Alert */}
// // // // //           {data.slotAlertText && (
// // // // //             <Info title="Your preferred appointment times aren't available">
// // // // //               <SlotAlert text={data.slotAlertText} />
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* What You Get */}
// // // // //           {data.whatYouGet && (
// // // // //             <Info title="What you get">
// // // // //               <p className="text-muted-foreground mb-4">
// // // // //                 Travaky will give you a compiled application packet with all necessary documents
// // // // //               </p>
// // // // //               <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
// // // // //               <div className="relative h-64 w-full max-w-lg">
// // // // //                 <Image src={data.whatYouGet.image} fill alt="" className="object-contain rounded-lg shadow" />
// // // // //               </div>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Rejection Reasons */}
// // // // //           {data.rejectionReasons && (
// // // // //             <Info title={`${data.countryName} Visa Rejection Reasons`}>
// // // // //               <ul className="space-y-6">
// // // // //                 {data.rejectionReasons.map(r => (
// // // // //                   <li key={r.title} className="flex gap-4">
// // // // //                     <span className="w-8 h-8 flex-none rounded-full bg-muted grid place-items-center text-lg">⚠️</span>
// // // // //                     <div>
// // // // //                       <p className="font-semibold">{r.title}</p>
// // // // //                       <p className="text-muted-foreground text-sm">{r.body}</p>
// // // // //                     </div>
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ul>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Reviews */}
// // // // //           {data.reviews && (
// // // // //             <Info title="What our customers say">
// // // // //               <div className="space-y-4">
// // // // //                 {data.reviews.map(r => (
// // // // //                   <div key={r.name} className="border rounded-lg p-4 shadow bg-white">
// // // // //                     <p className="font-medium">
// // // // //                       {r.name}
// // // // //                       <span className="text-xs text-muted-foreground ml-2">
// // // // //                         {r.date}{r.tag && ` • ${r.tag}`}
// // // // //                       </span>
// // // // //                     </p>
// // // // //                     <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
// // // // //                     <p className="text-sm mt-2">{r.body}</p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Info>
// // // // //           )}

// // // // //           {/* Reassurance */}
// // // // //           <Info title="Why Travaky?">
// // // // //             <p className="text-muted-foreground">
// // // // //               We’ve processed thousands of {data.countryName} visas with a 99% approval
// // // // //               rate. Our experts handle every detail so you don’t have to worry.
// // // // //             </p>
// // // // //           </Info>
// // // // //         </div>

// // // // //         {/* RIGHT – sticky pricing sidebar */}
// // // // //         <div className="w-full lg:w-2/5 hidden lg:block">
// // // // //           <div className="sticky top-24">
// // // // //             <PricingSidebar
// // // // //               variant="info"
// // // // //               selectedPlan={plan}
// // // // //               travelerCount={trav}
// // // // //               onCountChange={setTrav}
// // // // //               onStart={() => router.push(`/apply/${country}?travellers=${trav}`)}
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // /* Helper Components */
// // // // // function Info({ title, children }: { title: string; children: React.ReactNode }) {
// // // // //   return (
// // // // //     <section className="space-y-4">
// // // // //       <h2 className="text-2xl font-semibold">{title}</h2>
// // // // //       {children}
// // // // //     </section>
// // // // //   )
// // // // // }

// // // // // function CostCard({ title, items }: { title: string; items: { label: string; value: string }[] }) {
// // // // //   return (
// // // // //     <div className="border rounded-lg p-4 mb-6">
// // // // //       <h3 className="font-semibold mb-2">{title}</h3>
// // // // //       <ul className="space-y-1 text-sm">
// // // // //         {items.map(i => (
// // // // //           <li key={i.label} className="flex justify-between">
// // // // //             <span>{i.label}</span><span>{i.value}</span>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // function SlotAlert({ text }: { text: string }) {
// // // // //   return (
// // // // //     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
// // // // //       <p className="text-lg font-semibold">Get alerted when slots open!</p>
// // // // //       <p className="text-sm text-muted-foreground">{text}</p>
// // // // //       <input className="border rounded px-3 py-2 w-60" placeholder="Your phone number" />
// // // // //       <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send alerts</button>
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import Image from 'next/image'
// // // // import { useParams, useRouter } from 'next/navigation'
// // // // import { useState } from 'react'
// // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // import { countryData } from '@/data/countries'
// // // // import { PlanName } from '@/config/pricing'

// // // // export default function VisaInfo() {
// // // //   const { country } = useParams<{ country: string }>()
// // // //   const router = useRouter()
// // // //   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))

// // // //   if (!data) return <p className="p-10">Country not supported.</p>

// // // //   const hero = data.hero ?? [data.backgroundPhoto, data.backgroundPhoto, data.backgroundPhoto, data.backgroundPhoto]
// // // //   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
// // // //   const [trav, setTrav] = useState(1)

// // // //   return (
// // // //     <div className="w-full">
// // // //       {/* 1️⃣ Hero section (full width) */}
// // // //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// // // //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // // //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
// // // //           <div className="absolute inset-0 bg-black/50 rounded-lg" />
// // // //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// // // //             {data.countryName} Visa for Indians
// // // //           </h1>
// // // //         </div>
// // // //         {Array.from({ length: 3 }).map((_, i) => (
// // // //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // // //             <Image src={data.backgroundPhoto} fill alt="" className="object-cover" />
// // // //           </div>
// // // //         ))}
// // // //       </section>

// // // //       {/* 2️⃣ Main layout: scrollable left + sticky right */}
// // // //       <div className="flex px-4 lg:px-12 gap-8">
// // // //         {/* LEFT – scrollable */}
// // // //         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 space-y-16 pb-24">
// // // //           {/* Visa Info */}
// // // //           <section>
// // // //             <h2 className="text-2xl font-semibold mb-4">
// // // //               {data.countryName} Visa Information
// // // //             </h2>
// // // //             <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
// // // //               <li><strong>Visa Type:</strong><br />E-Visa</li>
// // // //               <li><strong>Stay:</strong><br />30 days</li>
// // // //               <li><strong>Validity:</strong><br />up to 2 years</li>
// // // //               <li><strong>Entry:</strong><br />{data.visaVariable}</li>
// // // //             </ul>
// // // //           </section>

// // // //           {/* Requirements */}
// // // //           <section>
// // // //             <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {['Photo', 'Passport', 'Bank Statement', 'Invitation Letter'].map(r => (
// // // //                 <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // // //               ))}
// // // //             </div>
// // // //           </section>

// // // //           {/* Timeline */}
// // // //           <section>
// // // //             <h2 className="text-2xl font-semibold mb-4">
// // // //               How {data.countryName} Visa Process Works
// // // //             </h2>
// // // //             <ol className="border-l-2 border-primary space-y-10 pl-6">
// // // //               {[
// // // //                 ['Apply on Travaky', 'Add passport information, travel details and other information required.'],
// // // //                 ['Passport Pick-up', 'Our partner collects your passport and submits it to the embassy.'],
// // // //                 ['Visa Gets Processed', 'We work with immigration to ensure you get your visa on time.'],
// // // //                 ['Passport Delivered', 'We deliver your passport & visa back to your home.'],
// // // //               ].map(([title, desc], idx) => (
// // // //                 <li key={idx} className="relative">
// // // //                   <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary" />
// // // //                   <h3 className="font-semibold mb-1">Step {idx + 1}</h3>
// // // //                   <p className="font-medium">{title}</p>
// // // //                   <p className="text-muted-foreground text-sm">{desc}</p>
// // // //                 </li>
// // // //               ))}
// // // //             </ol>
// // // //           </section>

// // // //           {/* Reassurance */}
// // // //           <section>
// // // //             <h2 className="text-2xl font-semibold mb-4">Why Travaky?</h2>
// // // //             <p className="text-muted-foreground">
// // // //               We’ve processed thousands of {data.countryName} visas with a 99% approval
// // // //               rate. Our experts handle every detail so you don’t have to worry.
// // // //             </p>
// // // //           </section>
// // // //         </div>

// // // //         {/* RIGHT – sticky pricing sidebar */}
// // // //         <div className="w-full lg:w-2/5 hidden lg:block">
// // // //           <div className="sticky top-24">
// // // //             <PricingSidebar
// // // //               variant="info"
// // // //               selectedPlan={plan}
// // // //               travelerCount={trav}
// // // //               onCountChange={setTrav}
// // // //               onStart={() => router.push(`/apply/${country}?travellers=${trav}`)}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // 'use client'

// // // import Image from 'next/image'
// // // import { useParams, useRouter } from 'next/navigation'
// // // import { useState } from 'react'
// // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // import { countryData } from '@/data/countries'
// // // import { PlanName } from '@/config/pricing'

// // // export default function VisaInfo() {
// // //   const { country } = useParams<{ country: string }>()
// // //   const router      = useRouter()
// // //   const data        = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
// // //   if (!data) return <p className="p-10">Country not supported.</p>

// // //   const hero   = data.hero ?? Array(4).fill(data.backgroundPhoto)
// // //   const plan   = (data.pricePlan ?? 'Docs on Call') as PlanName
// // //   const [trav, setTrav] = useState(1)

// // //   return (
// // //     <div className="w-full">
// // //       {/* 1️⃣  Hero collage ----------------------------------------- */}
// // //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// // //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// // //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
// // //           <div className="absolute inset-0 bg-black/50"/>
// // //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// // //             {data.countryName} Visa for Indians
// // //           </h1>
// // //         </div>
// // //         {hero.slice(1).map((src,i)=>(
// // //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// // //             <Image src={src} fill alt="" className="object-cover"/>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       {/* 2️⃣  Main layout: scrollable left, sticky right ------------ */}
// // //       <div className="flex px-4 lg:px-12 gap-8">
// // //         {/* LEFT column */}
// // //         <div
// // //           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
// // //                      space-y-16 pb-24 scrollbar-hide"
// // //           /* hide scrollbar (Firefox & WebKit) */
// // //           style={{
// // //             scrollbarWidth: 'none',
// // //             msOverflowStyle: 'none'
// // //           }}
// // //         >
// // //           {/* visa facts ------------------------------------------------ */}
// // //           {data.visaFacts && (
// // //             <Section title={`${data.countryName} Visa Information`}>
// // //               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
// // //                 {data.visaFacts.map(f=>(
// // //                   <li key={f.label}>
// // //                     <strong>{f.label}:</strong><br/>{f.value}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </Section>
// // //           )}

// // //           {/* requirements -------------------------------------------- */}
// // //           {data.requirements && (
// // //             <Section title="Requirements">
// // //               <div className="flex flex-wrap gap-2">
// // //                 {data.requirements.map(r=>(
// // //                   <span key={r}
// // //                         className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// // //                 ))}
// // //               </div>
// // //             </Section>
// // //           )}

// // //           {/* timeline ------------------------------------------------- */}
// // //           {data.timeline && (
// // //             <Section title={`How ${data.countryName} Visa Process Works`}>
// // //               <ol className="border-l-2 border-primary space-y-10 pl-6">
// // //                 {data.timeline.map((t,idx)=>(
// // //                   <li key={idx} className="relative">
// // //                     <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary"/>
// // //                     <h3 className="font-semibold mb-1">Step {idx+1}</h3>
// // //                     <p className="font-medium">{t.title}</p>
// // //                     <p className="text-muted-foreground text-sm">{t.body}</p>
// // //                   </li>
// // //                 ))}
// // //               </ol>
// // //             </Section>
// // //           )}

// // //           {/* guarantee / reassurance --------------------------------- */}
// // //           {data.guaranteeLine && (
// // //             <Section title="Travaky Guarantee">
// // //               <p className="text-muted-foreground">{data.guaranteeLine}</p>
// // //             </Section>
// // //           )}

// // //           <Section title="Why Travaky?">
// // //             <p className="text-muted-foreground">
// // //               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
// // //               Our experts handle every detail so you don’t have to worry.
// // //             </p>
// // //           </Section>
// // //         </div>

// // //         {/* RIGHT column (becomes sticky after top-24) ---------------- */}
// // //         <div className="w-full lg:w-2/5 hidden lg:block">
// // //           <div className="sticky top-24">
// // //             <PricingSidebar
// // //               variant="info"
// // //               selectedPlan={plan}
// // //               travelerCount={trav}
// // //               onCountChange={setTrav}
// // //               onStart={()=>router.push(`/apply/${data.slug}?travellers=${trav}`)}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // /* tiny reusable wrapper ---------------------------------------- */
// // // function Section({ title, children }:{
// // //   title:string; children:React.ReactNode
// // // }) {
// // //   return (
// // //     <section>
// // //       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
// // //       {children}
// // //     </section>
// // //   )
// // // }

// // // /* hide WebKit scrollbar */
// // // const styleEl = typeof document !== 'undefined' && document.createElement('style')
// // // if (styleEl) {
// // //   styleEl.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`;
// // //   document.head.appendChild(styleEl)
// // // }



// // 'use client'

// // import Image from 'next/image'
// // import { useParams, useRouter } from 'next/navigation'
// // import { useState } from 'react'
// // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // import { countryData } from '@/data/countries'
// // import { PlanName } from '@/config/pricing'

// // export default function VisaInfo() {
// //   const { country }  = useParams<{ country: string }>()
// //   const router        = useRouter()
// //   const data          = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
// //   if (!data) return <p className="p-10">Country not supported.</p>

// //   const hero    = data.hero ?? Array(4).fill(data.backgroundPhoto)
// //   const plan    = (data.pricePlan ?? 'Docs on Call') as PlanName
// //   const [trav, setTrav] = useState(1)

// //   return (
// //     <div className="w-full">
// //       {/* hero collage */}
// //       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
// //         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
// //           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
// //           <div className="absolute inset-0 bg-black/50"/>
// //           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
// //             {data.countryName} Visa for Indians
// //           </h1>
// //         </div>
// //         {hero.slice(1).map((src,i)=>(
// //           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
// //             <Image src={src} fill alt="" className="object-cover"/>
// //           </div>
// //         ))}
// //       </section>

// //       {/* main grid */}
// //       <div className="flex px-4 lg:px-12 gap-8">
// //         {/* left (scroll) */}
// //         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
// //                         space-y-16 pb-24 scrollbar-hide"
// //              style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
// //           {data.visaFacts && (
// //             <Section title={`${data.countryName} Visa Information`}>
// //               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
// //                 {data.visaFacts.map(f=>(
// //                   <li key={f.label}><strong>{f.label}:</strong><br/>{f.value}</li>
// //                 ))}
// //               </ul>
// //             </Section>
// //           )}

// //           {data.requirements && (
// //             <Section title="Requirements">
// //               <div className="flex flex-wrap gap-2">
// //                 {data.requirements.map(r=>(
// //                   <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
// //                 ))}
// //               </div>
// //             </Section>
// //           )}

// //           {data.timeline && (
// //             <Section title={`How ${data.countryName} Visa Process Works`}>
// //               <ol className="border-l-2 border-primary space-y-10 pl-6">
// //                 {data.timeline.map((t,i)=>(
// //                   <li key={i} className="relative">
// //                     <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary"/>
// //                     <h3 className="font-semibold mb-1">Step {i+1}</h3>
// //                     <p className="font-medium">{t.title}</p>
// //                     <p className="text-muted-foreground text-sm">{t.body}</p>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </Section>
// //           )}

// //           {data.guaranteeLine && (
// //             <Section title="Travaky Guarantee">
// //               <p className="text-muted-foreground">{data.guaranteeLine}</p>
// //             </Section>
// //           )}

// //           <Section title="Why Travaky?">
// //             <p className="text-muted-foreground">
// //               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
// //               Our experts handle every detail so you don’t have to worry.
// //             </p>
// //           </Section>
// //         </div>

// //         {/* right (sticky) */}
// //         <div className="w-full lg:w-2/5 hidden lg:block">
// //           <div className="sticky top-24">
// //             <PricingSidebar
// //               variant="info"
// //               selectedPlan={plan}
// //               travelerCount={trav}
// //               onCountChange={setTrav}
// //               onStart={() =>
// //                 router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)
// //               }
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // function Section({ title, children }:{
// //   title:string; children:React.ReactNode
// // }) {
// //   return (
// //     <section>
// //       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
// //       {children}
// //     </section>
// //   )
// // }

// // /* hide WebKit scrollbar */
// // if (typeof document !== 'undefined') {
// //   const style = document.createElement('style')
// //   style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
// //   document.head.appendChild(style)
// // }


// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'

// import PricingSidebar   from '@/components/ui/pricing-sidebar'
// import { countryData }  from '@/data/countries'
// import { PlanName }     from '@/config/pricing'

// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router      = useRouter()

//   /* fetch static content for this country ----------------------- */
//   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   /* local UI state --------------------------------------------- */
//   const hero         = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const defaultPlan  = (data.pricePlan ?? 'Docs on Call') as PlanName

//   const [trav, setTrav]               = useState(1)
//   const [plan, setPlan]               = useState<PlanName>(defaultPlan)

//   /* helper ------------------------------------------------------ */
//   const gotoApply = () =>
//     router.push(
//       `/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`
//     )

//   /* UI ---------------------------------------------------------- */
//   return (
//     <div className="w-full">
//       {/* hero collage */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
//           <div className="absolute inset-0 bg-black/50"/>
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src,i)=>(
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover"/>
//           </div>
//         ))}
//       </section>

//       {/* main grid */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* left (scrollable article) */}
//         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                         space-y-16 pb-24 scrollbar-hide"
//              style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//                 {data.visaFacts.map(f=>(
//                   <li key={f.label}>
//                     <strong>{f.label}:</strong><br/>{f.value}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-2">
//                 {data.requirements.map(r=>(
//                   <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <ol className="border-l-2 border-primary space-y-10 pl-6">
//                 {data.timeline.map((t,i)=>(
//                   <li key={i} className="relative">
//                     <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary"/>
//                     <h3 className="font-semibold mb-1">Step {i+1}</h3>
//                     <p className="font-medium">{t.title}</p>
//                     <p className="text-muted-foreground text-sm">{t.body}</p>
//                   </li>
//                 ))}
//               </ol>
//             </Section>
//           )}

//           {data.guaranteeLine && (
//             <Section title="Travaky Guarantee">
//               <p className="text-muted-foreground">{data.guaranteeLine}</p>
//             </Section>
//           )}

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* right (sticky sidebar) */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"            /* uses slim layout */
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onPlanChange={setPlan}
//               onStart={gotoApply}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­ helper components •–––––––––––––– */
// function Section({
//   title, children,
// }: { title:string; children:React.ReactNode }) {
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//       {children}
//     </section>
//   )
// }

// /* hide WebKit scrollbar once per session */
// if (typeof document !== 'undefined') {
//   const style = document.createElement('style')
//   style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//   document.head.appendChild(style)
// }


// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'

// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router       = useRouter()
//   const data         = countryData.find(c => c.buttonLink.endsWith(`/${country}`))

//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero           = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan           = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)

//   return (
//     <div className="w-full">
//       {/* hero collage */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
//           <div className="absolute inset-0 bg-black/50"/>
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src,i)=>(
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover"/>
//           </div>
//         ))}
//       </section>

//       {/* main grid */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* left (scroll) */}
//         <div className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                         space-y-16 pb-24 scrollbar-hide"
//              style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//                 {data.visaFacts.map(f=>(
//                   <li key={f.label}><strong>{f.label}:</strong><br/>{f.value}</li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-2">
//                 {data.requirements.map(r=>(
//                   <span key={r} className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <ol className="border-l-2 border-primary space-y-10 pl-6">
//                 {data.timeline.map((t,i)=>(
//                   <li key={i} className="relative">
//                     <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary"/>
//                     <h3 className="font-semibold mb-1">Step {i+1}</h3>
//                     <p className="font-medium">{t.title}</p>
//                     <p className="text-muted-foreground text-sm">{t.body}</p>
//                   </li>
//                 ))}
//               </ol>
//             </Section>
//           )}

//           {data.guaranteeLine && (
//             <Section title="Travaky Guarantee">
//               <p className="text-muted-foreground">{data.guaranteeLine}</p>
//             </Section>
//           )}

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* right (sticky) */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={() =>
//                 router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Section({ title, children }:{
//   title:string; children:React.ReactNode
// }) {
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//       {children}
//     </section>
//   )
// }

// /* hide WebKit scrollbar (unchanged) */
// if (typeof document !== 'undefined') {
//   const style = document.createElement('style')
//   style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//   document.head.appendChild(style)
// }
// src/app/visa/[country]/page.tsx

// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'

// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router      = useRouter()
//   const data        = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero   = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan   = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)

//   return (
//     <div className="w-full">
//       {/* 1️⃣ Hero collage ----------------------------------------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
//           <div className="absolute inset-0 bg-black/50"/>
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src,i)=>(
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover"/>
//           </div>
//         ))}
//       </section>

//       {/* 2️⃣ Main layout: scrollable left, sticky right ------------ */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* LEFT column */}
//         <div
//           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                      space-y-16 pb-24 scrollbar-hide"
//           /* hide scrollbar (Firefox & WebKit) */
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none'
//           }}
//         >
//           {/* visa facts ------------------------------------------------ */}
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//                 {data.visaFacts.map(f=>(
//                   <li key={f.label}>
//                     <strong>{f.label}:</strong><br/>{f.value}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {/* requirements -------------------------------------------- */}
//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-2">
//                 {data.requirements.map(r=>(
//                   <span key={r}
//                         className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* timeline ------------------------------------------------- */}
//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <ol className="border-l-2 border-primary space-y-10 pl-6">
//                 {data.timeline.map((t,idx)=>(
//                   <li key={idx} className="relative">
//                     <span className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-primary"/>
//                     <h3 className="font-semibold mb-1">Step {idx+1}</h3>
//                     <p className="font-medium">{t.title}</p>
//                     <p className="text-muted-foreground text-sm">{t.body}</p>
//                   </li>
//                 ))}
//               </ol>
//             </Section>
//           )}

//           {/* guarantee / reassurance --------------------------------- */}
//           {data.guaranteeLine && (
//             <Section title="Travaky Guarantee">
//               <p className="text-muted-foreground">{data.guaranteeLine}</p>
//             </Section>
//           )}

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* RIGHT column (becomes sticky after top-24) ---------------- */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={()=>router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* tiny reusable wrapper ---------------------------------------- */
// function Section({ title, children }:{
//   title:string; children:React.ReactNode
// }) {
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//       {children}
//     </section>
//   )
// }

// /* hide WebKit scrollbar */
// if (typeof document !== 'undefined') {
//   const style = document.createElement('style')
//   style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//   document.head.appendChild(style)
// }


// src/app/visa/[country]/page.tsx

// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'
// import {
//   Stepper,
//   StepperItem,
//   StepperIndicator,
//   StepperSeparator,
//   StepperTitle,
//   StepperTrigger,
// } from "@/components/ui/stepper";

// function Section({ title, children }:{
//   title:string; children:React.ReactNode
// }) {
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//       {children}
//     </section>
//   )
// }

// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router      = useRouter()
//   const data        = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero   = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan   = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)

//   return (
//     <div className="w-full">
//       {/* 1️⃣ Hero collage ----------------------------------------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
//           <div className="absolute inset-0 bg-black/50"/>
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src,i)=>(
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover"/>
//           </div>
//         ))}
//       </section>

//       {/* 2️⃣ Main layout: scrollable left, sticky right ------------ */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* LEFT column */}
//         <div
//           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                      space-y-16 pb-24 scrollbar-hide"
//           /* hide scrollbar (Firefox & WebKit) */
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none'
//           }}
//         >
//           {/* visa facts ------------------------------------------------ */}
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//                 {data.visaFacts.map(f=>(
//                   <li key={f.label}>
//                     <strong>{f.label}:</strong><br/>{f.value}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {/* requirements -------------------------------------------- */}
//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-2">
//                 {data.requirements.map(r=>(
//                   <span key={r}
//                         className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* timeline ------------------------------------------------- */}
//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <Stepper orientation="vertical" className="ml-4">
//                 {data.timeline.map((item, i) => (
//                   <StepperItem key={i} step={i + 1} className="relative items-start [&:not(:last-child)]:flex-1">
//                     <StepperTrigger className="items-start pb-12 last:pb-0">
//                       <StepperIndicator />
//                       <div className="mt-0.5 px-2 text-left">
//                         <StepperTitle>{item.title}</StepperTitle>
//                         <p className="text-sm text-muted-foreground">{item.body}</p>
//                       </div>
//                     </StepperTrigger>
//                     {i < data.timeline.length -1 && (
//                       <StepperSeparator className="absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
//                     )}
//                   </StepperItem>
//                 ))}
//               </Stepper>
//             </Section>
//           )}

//           {/* guarantee / reassurance --------------------------------- */}
//           {data.guaranteeLine && (
//             <Section title="Travaky Guarantee">
//               <p className="text-muted-foreground">{data.guaranteeLine}</p>
//             </Section>
//           )}

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* RIGHT column (becomes sticky after top-24) ---------------- */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={()=>router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// // src/app/visa/[country]/page.tsx

// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'
// import {
//   Stepper,
//   StepperItem,
//   StepperIndicator,
//   StepperSeparator,
//   StepperTitle,
//   StepperTrigger,
// } from "@/components/ui/stepper";

// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router      = useRouter()
//   const data        = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero   = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan   = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)

//   return (
//     <div className="w-full">
//       {/* 1️⃣ Hero collage ----------------------------------------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover"/>
//           <div className="absolute inset-0 bg-black/50"/>
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src,i)=>(
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover"/>
//           </div>
//         ))}
//       </section>

//       {/* 2️⃣ Main layout: scrollable left, sticky right ------------ */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* LEFT column */}
//         <div
//           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                      space-y-16 pb-24 scrollbar-hide"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {/* visa facts */}
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//                 {data.visaFacts.map(f=>(
//                   <li key={f.label}>
//                     <strong>{f.label}:</strong><br/>{f.value}
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {/* requirements */}
//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-2">
//                 {data.requirements.map(r=>(
//                   <span key={r}
//                         className="px-4 py-2 bg-muted rounded-full text-sm">{r}</span>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* timeline */}
//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <Stepper orientation="vertical" className="ml-4">
//                 {data.timeline.map((item, i) => (
//                   <StepperItem key={i} step={i + 1} className="relative items-start [&:not(:last-child)]:flex-1">
//                     <StepperTrigger className="items-start pb-12 last:pb-0">
//                       <StepperIndicator />
//                       <div className="mt-0.5 px-2 text-left">
//                         <StepperTitle>{item.title}</StepperTitle>
//                         <p className="text-sm text-muted-foreground">{item.body}</p>
//                       </div>
//                     </StepperTrigger>
//                     {i < data.timeline.length -1 && (
//                       <StepperSeparator className="absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
//                     )}
//                   </StepperItem>
//                 ))}
//               </Stepper>
//             </Section>
//           )}

//           {/* cost breakdown */}
//           {data.costBreakdown && (
//             <Section title={`How Much Does a ${data.countryName} Visa Cost?`}>
//               <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow}/>
//               {data.costBreakdown.payLater && (
//                 <CostCard title="Pay Later at Appointment Center" items={data.costBreakdown.payLater}/>
//               )}
//             </Section>
//           )}

//           {/* slot alert */}
//           {data.slotAlertText && (
//             <Section title="Your preferred appointment times aren't available">
//               <SlotAlert text={data.slotAlertText}/>
//             </Section>
//           )}

//           {/* what you get */}
//           {data.whatYouGet && (
//             <Section title="What you get">
//               <p className="text-muted-foreground mb-4">
//                 Travaky will give you a compiled application packet with all necessary documents
//               </p>
//               <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
//               <div className="relative h-64 w-full max-w-lg">
//                 <Image src={data.whatYouGet.image} fill alt="" className="object-contain rounded-lg shadow"/>
//               </div>
//             </Section>
//           )}

//           {/* rejection reasons */}
//           {data.rejectionReasons && (
//             <Section title={`${data.countryName} Visa Rejection Reasons`}>
//               <ul className="space-y-6">
//                 {data.rejectionReasons.map(r => (
//                   <li key={r.title} className="flex gap-4">
//                     <span className="w-8 h-8 flex-none rounded-full bg-muted grid
//                                      place-items-center text-lg">⚠️</span>
//                     <div>
//                       <p className="font-semibold">{r.title}</p>
//                       <p className="text-muted-foreground text-sm">{r.body}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           )}

//           {/* reviews */}
//           {data.reviews && (
//             <Section title="What our customers say">
//               <div className="space-y-4">
//                 {data.reviews.map(r => (
//                   <div key={r.name}
//                        className="border rounded-lg p-4 shadow bg-white">
//                     <p className="font-medium">{r.name}
//                       <span className="text-xs text-muted-foreground ml-2">
//                         {r.date}{r.tag && ` • ${r.tag}`}
//                       </span>
//                     </p>
//                     <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
//                     <p className="text-sm mt-2">{r.body}</p>
//                   </div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* guarantee / reassurance */}
//           {data.guaranteeLine && (
//             <Section title="Travaky Guarantee">
//               <p className="text-muted-foreground">{data.guaranteeLine}</p>
//             </Section>
//           )}

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* RIGHT column */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={()=>router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Section({ title, children }:{
//   title:string; children:React.ReactNode
// }) {
//   return (
//     <section className="space-y-4">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       {children}
//     </section>
//   )
// }

// function CostCard({ title, items }:{
//   title: string; items: { label: string; value: string }[]
// }) {
//   return (
//     <div className="border rounded-lg p-4 mb-6">
//       <h3 className="font-semibold mb-2">{title}</h3>
//       <ul className="space-y-1 text-sm">
//         {items.map(i => (
//           <li key={i.label} className="flex justify-between">
//             <span>{i.label}</span><span>{i.value}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function SlotAlert({ text }:{ text: string }) {
//   return (
//     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
//       <p className="text-lg font-semibold">Get alerted when slots open!</p>
//       <p className="text-sm text-muted-foreground">{text}</p>
//       <input
//         className="border rounded px-3 py-2 w-60"
//         placeholder="Your phone number"
//       />
//       <button className="bg-indigo-600 text-white px-4 py-2 rounded">
//         Send alerts
//       </button>
//     </div>
//   )
// }

// if (typeof document !== 'undefined') {
//   const style = document.createElement('style')
//   style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//   document.head.appendChild(style)
// }


// src/app/visa/[country]/page.tsx goood wqorking

// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState, useMemo, useEffect } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'
// import {
//   Stepper,
//   StepperItem,
//   StepperIndicator,
//   StepperSeparator,
//   StepperTitle,
//   StepperTrigger,
// } from "@/components/ui/stepper";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// // Helper function to get the date 2 weeks from now
// const getFutureDate = () => {
//   const date = new Date();
//   date.setDate(date.getDate() + 14);
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
// };

// function Section({ title, children }: {
//   title: string; children: React.ReactNode
// }) {
//   return (
//     <section className="space-y-4">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       {children}
//     </section>
//   )
// }

// function CostCard({ title, items }: {
//   title: string; items: { label: string; value: string }[]
// }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-2 text-sm">
//           {items.map(i => (
//             <li key={i.label} className="flex justify-between">
//               <span className="text-muted-foreground">{i.label}</span>
//               <span>{i.value}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   )
// }

// function SlotAlert({ text }: { text: string }) {
//   return (
//     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
//       <p className="text-lg font-semibold">Get alerted when slots open!</p>
//       <p className="text-sm text-muted-foreground">{text}</p>
//       <input
//         className="border rounded px-3 py-2 w-60"
//         placeholder="Your phone number"
//       />
//       <button className="bg-indigo-600 text-white px-4 py-2 rounded">
//         Send alerts
//       </button>
//     </div>
//   )
// }


// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router = useRouter()
//   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)
//   const guaranteeDate = useMemo(() => getFutureDate(), []);

//   useEffect(() => {
//     const style = document.createElement('style')
//     style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//     document.head.appendChild(style)
//     return () => {
//       document.head.removeChild(style)
//     }
//   }, [])


//   return (
//     <div className="w-full">
//       {/* 1️⃣ Hero collage ----------------------------------------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
//           <div className="absolute inset-0 bg-black/50" />
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src, i) => (
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover" />
//           </div>
//         ))}
//       </section>

//       {/* 2️⃣ Main layout: scrollable left, sticky right ------------ */}
//       <div className="flex px-4 lg:px-12 gap-8">
//         {/* LEFT column */}
//         <div
//           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                      space-y-16 pb-24 scrollbar-hide"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {/* visa facts */}
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {data.visaFacts.map(f => (
//                   <Card key={f.label} className="text-center">
//                     <CardHeader>
//                       <CardTitle className="text-sm text-muted-foreground">{f.label}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-lg font-semibold">{f.value}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* requirements */}
//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-3">
//                 {data.requirements.map(r => (
//                   <div key={r} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">{r}</div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* timeline */}
//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <Stepper orientation="vertical" className="ml-4">
//                 {data.timeline.map((item, i) => (
//                   <StepperItem key={i} step={i + 1} className="relative items-start [&:not(:last-child)]:flex-1">
//                     <StepperTrigger className="items-start pb-12 last:pb-0">
//                       <StepperIndicator />
//                       <div className="mt-0.5 px-2 text-left">
//                         <StepperTitle>{item.title}</StepperTitle>
//                         <p className="text-sm text-muted-foreground">{item.body}</p>
//                       </div>
//                     </StepperTrigger>
//                     {i < data.timeline.length - 1 && (
//                       <StepperSeparator className="absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
//                     )}
//                   </StepperItem>
//                 ))}
//               </Stepper>
//             </Section>
//           )}

//           {/* cost breakdown */}
//           {data.costBreakdown && (
//             <Section title={`How Much Does a ${data.countryName} Visa Cost?`}>
//               <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow} />
//               {data.costBreakdown.payLater && (
//                 <CostCard title="Pay Later at Appointment Center" items={data.costBreakdown.payLater} />
//               )}
//             </Section>
//           )}

//           {/* slot alert */}
//           {data.slotAlertText && (
//             <Section title="Your preferred appointment times aren't available">
//               <SlotAlert text={data.slotAlertText} />
//             </Section>
//           )}

//           {/* what you get */}
//           {data.whatYouGet && (
//             <Section title="What you get">
//               <p className="text-muted-foreground mb-4">
//                 Travaky will give you a compiled application packet with all necessary documents
//               </p>
//               <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
//               <div className="relative h-64 w-full max-w-lg">
//                 <Image src={data.whatYouGet.image} fill alt="" className="object-contain rounded-lg shadow" />
//               </div>
//             </Section>
//           )}

//           {/* rejection reasons */}
//           {data.rejectionReasons && (
//             <Section title={`${data.countryName} Visa Rejection Reasons`}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.rejectionReasons.map(r => (
//                   <Card key={r.title} className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50">
//                     <CardHeader className="flex-row items-center gap-4 space-y-0">
//                       <span className="text-2xl">⚠️</span>
//                       <CardTitle>{r.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-sm text-muted-foreground">{r.body}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* reviews */}
//           {data.reviews && (
//             <Section title="What our customers say">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.reviews.map(r => (
//                   <Card key={r.name} className="flex flex-col">
//                     <CardHeader>
//                       <div className="flex items-center gap-3">
//                         <Image src={r.avatar} width={40} height={40} alt={r.name} className="rounded-full" />
//                         <div>
//                           <p className="font-semibold">{r.name}</p>
//                           <p className="text-xs text-muted-foreground">{r.date}{r.tag && ` • ${r.tag}`}</p>
//                         </div>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="flex-grow">
//                       <div className="flex items-center mb-2">
//                         {'★'.repeat(r.rating).split('').map((_, i) => <span key={i} className="text-yellow-500">★</span>)}
//                       </div>
//                       <p className="text-sm text-muted-foreground">{r.body}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* guarantee / reassurance */}
//           <Section title="Travaky Guarantee">
//             <p className="text-muted-foreground">
//               {data.guaranteeLine ? data.guaranteeLine.replace('{date}', guaranteeDate) : `Get your visa by ${guaranteeDate}`}
//             </p>
//           </Section>

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* RIGHT column */}
//         <div className="w-full lg:w-2/5 hidden lg:block">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={() => router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // src/app/visa/[country]/page.tsx

// 'use client'

// import Image from 'next/image'
// import { useParams, useRouter } from 'next/navigation'
// import { useState, useMemo, useEffect } from 'react'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { countryData } from '@/data/countries'
// import { PlanName } from '@/config/pricing'
// import {
//   Stepper,
//   StepperItem,
//   StepperIndicator,
//   StepperSeparator,
//   StepperTitle,
//   StepperTrigger,
// } from "@/components/ui/stepper";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { ImageSwiper } from '@/components/ui/image-swiper'

// // Helper function to get the date 2 weeks from now
// const getFutureDate = () => {
//   const date = new Date();
//   date.setDate(date.getDate() + 14);
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
// };

// // Define a single source for the sample document images
// const SAMPLE_DOCUMENTS_IMAGES = 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800, https://images.unsplash.com/photo-1527632911563-ee5b6d5344b6?w=800, https://images.unsplash.com/photo-1506973035872-18cda5b9f5de?w=800';


// function Section({ title, children }: {
//   title: string; children: React.ReactNode
// }) {
//   return (
//     <section className="space-y-4">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       {children}
//     </section>
//   )
// }

// function CostCard({ title, items }: {
//   title: string; items: { label: string; value: string }[]
// }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-2 text-sm">
//           {items.map(i => (
//             <li key={i.label} className="flex justify-between">
//               <span className="text-muted-foreground">{i.label}</span>
//               <span>{i.value}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   )
// }

// function SlotAlert({ text }: { text: string }) {
//   return (
//     <div className="border rounded-lg p-6 text-center space-y-4 bg-muted/40">
//       <p className="text-lg font-semibold">Get alerted when slots open!</p>
//       <p className="text-sm text-muted-foreground">{text}</p>
//       <input
//         className="border rounded px-3 py-2 w-60"
//         placeholder="Your phone number"
//       />
//       <button className="bg-indigo-600 text-white px-4 py-2 rounded">
//         Send alerts
//       </button>
//     </div>
//   )
// }


// export default function VisaInfo() {
//   const { country } = useParams<{ country: string }>()
//   const router = useRouter()
//   const data = countryData.find(c => c.buttonLink.endsWith(`/${country}`))
//   if (!data) return <p className="p-10">Country not supported.</p>

//   const hero = data.hero ?? Array(4).fill(data.backgroundPhoto)
//   const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
//   const [trav, setTrav] = useState(1)
//   const guaranteeDate = useMemo(() => getFutureDate(), []);

//   useEffect(() => {
//     const style = document.createElement('style')
//     style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
//     document.head.appendChild(style)
//     return () => {
//       document.head.removeChild(style)
//     }
//   }, [])


//   return (
//     <div className="w-full">
//       {/* 1️⃣ Hero collage ----------------------------------------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pb-16">
//         <div className="relative h-80 md:row-span-2 rounded-lg overflow-hidden">
//           <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
//           <div className="absolute inset-0 bg-black/50" />
//           <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//             {data.countryName} Visa for Indians
//           </h1>
//         </div>
//         {hero.slice(1).map((src, i) => (
//           <div key={i} className="relative h-40 rounded-lg overflow-hidden">
//             <Image src={src} fill alt="" className="object-cover" />
//           </div>
//         ))}
//       </section>

//       {/* 2️⃣ Main layout: scrollable left, sticky right ------------ */}
//       <div className="flex flex-col lg:flex-row px-4 lg:px-12 gap-8">
//         {/* LEFT column */}
//         <div
//           className="w-full lg:w-3/5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4
//                      space-y-16 pb-24 scrollbar-hide"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {/* visa facts */}
//           {data.visaFacts && (
//             <Section title={`${data.countryName} Visa Information`}>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {data.visaFacts.map(f => (
//                   <Card key={f.label} className="text-center hover:shadow-lg transition-shadow">
//                     <CardHeader>
//                       <CardTitle className="text-sm text-muted-foreground">{f.label}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-lg font-semibold">{f.value}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* requirements */}
//           {data.requirements && (
//             <Section title="Requirements">
//               <div className="flex flex-wrap gap-3">
//                 {data.requirements.map(r => (
//                   <div key={r} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">{r}</div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* timeline */}
//           {data.timeline && (
//             <Section title={`How ${data.countryName} Visa Process Works`}>
//               <Stepper orientation="vertical" className="ml-4">
//                 {data.timeline.map((item, i) => (
//                   <StepperItem key={i} step={i + 1} className="relative items-start [&:not(:last-child)]:flex-1">
//                     <StepperTrigger className="items-start pb-12 last:pb-0">
//                       <StepperIndicator />
//                       <div className="mt-0.5 px-2 text-left">
//                         <StepperTitle>{item.title}</StepperTitle>
//                         <p className="text-sm text-muted-foreground">{item.body}</p>
//                       </div>
//                     </StepperTrigger>
//                     {i < data.timeline.length - 1 && (
//                       <StepperSeparator className="absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
//                     )}
//                   </StepperItem>
//                 ))}
//               </Stepper>
//             </Section>
//           )}

//           {/* cost breakdown */}
//           {data.costBreakdown && (
//             <Section title={`How Much Does a ${data.countryName} Visa Cost?`}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow} />
//                 {data.costBreakdown.payLater && (
//                   <CostCard title="Pay Later at Appointment Center" items={data.costBreakdown.payLater} />
//                 )}
//               </div>
//             </Section>
//           )}

//           {/* slot alert */}
//           {data.slotAlertText && (
//             <Section title="Your preferred appointment times aren't available">
//               <SlotAlert text={data.slotAlertText} />
//             </Section>
//           )}

//           {/* what you get */}
//           {data.whatYouGet && (
//             <Section title="What you get">
//               <p className="text-muted-foreground mb-4">
//                 Travaky will give you a compiled application packet with all necessary documents
//               </p>
//               <h3 className="text-xl font-semibold mb-4">{data.whatYouGet.heading}</h3>
//               <div className="flex items-center justify-center">
//                 <ImageSwiper images={SAMPLE_DOCUMENTS_IMAGES} />
//               </div>
//             </Section>
//           )}

//           {/* rejection reasons */}
//           {data.rejectionReasons && (
//             <Section title={`${data.countryName} Visa Rejection Reasons`}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.rejectionReasons.map(r => (
//                   <Card key={r.title} className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50">
//                     <CardHeader className="flex-row items-center gap-4 space-y-0">
//                       <span className="text-2xl">⚠️</span>
//                       <CardTitle>{r.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-sm text-muted-foreground">{r.body}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* reviews */}
//           {data.reviews && (
//             <Section title="What our customers say">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.reviews.map(r => (
//                   <Card key={r.name} className="flex flex-col hover:shadow-xl transition-shadow">
//                     <CardHeader>
//                       <div className="flex items-center gap-3">
//                         <Image src={r.avatar} width={40} height={40} alt={r.name} className="rounded-full" />
//                         <div>
//                           <p className="font-semibold">{r.name}</p>
//                           <p className="text-xs text-muted-foreground">{r.date}{r.tag && ` • ${r.tag}`}</p>
//                         </div>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="flex-grow">
//                       <div className="flex items-center mb-2">
//                         {'★'.repeat(r.rating).split('').map((_, i) => <span key={i} className="text-yellow-500">★</span>)}
//                       </div>
//                       <p className="text-sm text-muted-foreground">{r.body}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* guarantee / reassurance */}
//           <Section title="Travaky Guarantee">
//             <p className="text-muted-foreground">
//               {data.guaranteeLine ? data.guaranteeLine.replace('{date}', guaranteeDate) : `Get your visa by ${guaranteeDate}`}
//             </p>
//           </Section>

//           <Section title="Why Travaky?">
//             <p className="text-muted-foreground">
//               We’ve processed thousands of {data.countryName} visas with a&nbsp;99 % approval rate.
//               Our experts handle every detail so you don’t have to worry.
//             </p>
//           </Section>
//         </div>

//         {/* RIGHT column */}
//         <div className="w-full lg:w-2/5">
//           <div className="sticky top-24">
//             <PricingSidebar
//               variant="info"
//               selectedPlan={plan}
//               travelerCount={trav}
//               onCountChange={setTrav}
//               onStart={() => router.push(`/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useMemo, useRef, useEffect, useState } from 'react'
import PricingSidebar from '@/components/ui/pricing-sidebar'
import { countryData } from '@/data/countries'
import { PlanName } from '@/config/pricing'
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageSwiper } from '@/components/ui/image-swiper'

/* ───────────────────────────────────────────────────────────── */
/* Helpers                                                      */
/* ───────────────────────────────────────────────────────────── */

const SAMPLE_DOCUMENTS_IMAGES =
  'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800, https://images.unsplash.com/photo-1527632911563-ee5b6d5344b6?w=800, https://images.unsplash.com/photo-1506973035872-18cda5b9f5de?w=800'

const getFutureDate = () => {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  )
}

function CostCard({
  title,
  items,
}: {
  title: string
  items: { label: string; value: string }[]
}) {
  return (
    <Card className="bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_-10px_rgba(2,12,55,0.25)] ring-1 ring-sky-100">
      <CardHeader>
        <CardTitle className="font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-[15px]">
          {items.map((i) => (
            <li key={i.label} className="flex justify-between">
              <span className="text-slate-500">{i.label}</span>
              <span className="font-semibold text-slate-900">{i.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function SlotAlert({ text }: { text: string }) {
  return (
    <div className="rounded-2xl p-6 text-center space-y-4 bg-gradient-to-b from-sky-50 to-white ring-1 ring-sky-100 shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Get alerted when slots open!</p>
      <p className="text-sm text-slate-600">{text}</p>
      <div className="flex items-center justify-center gap-2">
        <input
          className="border rounded-xl px-3 py-2 w-64 bg-white/80 outline-none focus:ring-2 ring-sky-300"
          placeholder="Your phone number"
        />
        <button className="rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 font-semibold shadow">
          Send alerts
        </button>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────────────────── */
/* Page                                                         */
/* ───────────────────────────────────────────────────────────── */

export default function VisaInfo() {
  const { country } = useParams<{ country: string }>()
  const router = useRouter()

  const data = countryData.find((c) => c.buttonLink.endsWith(`/${country}`))
  if (!data) return <p className="p-10">Country not supported.</p>

  const hero = data.hero ?? Array(4).fill(data.backgroundPhoto)
  const plan = (data.pricePlan ?? 'Docs on Call') as PlanName
  const [trav, setTrav] = useState(1)
  const guaranteeDate = useMemo(() => getFutureDate(), [])

  // sticky unstick logic: when the "end" sentinel becomes visible, we unstick the box
  const stickyWrapRef = useRef<HTMLDivElement>(null)
  const endSentinelRef = useRef<HTMLDivElement>(null)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = endSentinelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setAtEnd(entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // ensure global scrollbars are visible for page; we only make the right column sticky
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `.scrollbar-hide::-webkit-scrollbar{display:none}`
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div
      className="
        relative
        bg-[radial-gradient(1200px_600px_at_20%_-100px,rgba(16,89,204,0.10),transparent),radial-gradient(1000px_500px_at_120%_-50px,rgba(14,68,150,0.10),transparent)]
        bg-white
      "
    >
      {/* Top hero – NOT sticky */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-12 pt-6 pb-12">
        <div className="relative h-80 md:row-span-2 rounded-2xl overflow-hidden">
          <Image src={hero[0]} fill alt={data.countryName} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
            {data.countryName} Visa for Indians
          </h1>
        </div>
        {hero.slice(1).map((src, i) => (
          <div key={i} className="relative h-40 rounded-2xl overflow-hidden">
            <Image src={src} fill alt="" className="object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </section>

      {/* Main 2-col layout */}
      <div className="px-4 lg:px-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT content (scrolls with the page) */}
          <div className="w-full lg:w-3/5 space-y-14">
            {/* Visa facts */}
            {data.visaFacts && (
              <Section title={`${data.countryName} Visa Information`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.visaFacts.map((f) => (
                    <Card
                      key={f.label}
                      className="text-center bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-[0_10px_30px_-12px_rgba(3,20,80,0.25)] hover:shadow-[0_16px_40px_-12px_rgba(3,20,80,0.28)] transition-shadow"
                    >
                      <CardHeader>
                        <CardTitle className="text-sm text-slate-600">{f.label}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xl font-extrabold text-slate-900">{f.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Section>
            )}

            {/* Requirements */}
            {data.requirements && (
              <Section title="Requirements">
                <div className="flex flex-wrap gap-2">
                  {data.requirements.map((r) => (
                    <div
                      key={r}
                      className="px-3 py-2 rounded-full text-sm font-medium bg-sky-50 text-sky-800 ring-1 ring-sky-100"
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Timeline (Stepper style) */}
            {data.timeline && (
              <Section title={`How ${data.countryName} Visa Process Works`}>
                <div className="bg-white/90 rounded-2xl p-4 md:p-6 ring-1 ring-sky-100 backdrop-blur-xl shadow-sm">
                  <Stepper orientation="vertical" className="ml-1">
                    {data.timeline.map((item, i) => (
                      <StepperItem
                        key={i}
                        step={i + 1}
                        className="relative items-start [&:not(:last-child)]:flex-1"
                      >
                        <StepperTrigger className="items-start pb-10 last:pb-0">
                          <StepperIndicator className="bg-sky-600 text-white ring-4 ring-sky-100" />
                          <div className="mt-0.5 px-3 text-left">
                            <StepperTitle className="text-slate-900 font-extrabold">
                              {item.title}
                            </StepperTitle>
                            <p className="text-sm text-slate-600">{item.body}</p>
                          </div>
                        </StepperTrigger>
                        {i < (data.timeline?.length || 0) - 1 && (
                          <StepperSeparator className="absolute inset-y-0 left-[0.9rem] top-[2.1rem] -order-1 m-0 -translate-x-1/2 h-[calc(100%-2.1rem)] bg-sky-200" />
                        )}
                      </StepperItem>
                    ))}
                  </Stepper>
                </div>
              </Section>
            )}

            {/* Cost */}
            {data.costBreakdown && (
              <Section title={`How Much Does a ${data.countryName} Visa Cost?`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CostCard title="Pay Now on Travaky" items={data.costBreakdown.payNow} />
                  {data.costBreakdown.payLater && (
                    <CostCard
                      title="Pay Later at Appointment Center"
                      items={data.costBreakdown.payLater}
                    />
                  )}
                </div>
              </Section>
            )}

            {/* Slot Alert */}
            {data.slotAlertText && (
              <Section title="Your preferred appointment times aren't available">
                <SlotAlert text={data.slotAlertText} />
              </Section>
            )}

            {/* What you get */}
            {data.whatYouGet && (
              <Section title="What you get">
                <p className="text-slate-600 mb-3">
                  Travaky will give you a compiled application packet with all necessary documents.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {data.whatYouGet.heading}
                </h3>
                <div className="flex items-center justify-center">
                  <ImageSwiper images={SAMPLE_DOCUMENTS_IMAGES} />
                </div>
              </Section>
            )}

            {/* Rejection reasons */}
            {data.rejectionReasons && (
              <Section title={`${data.countryName} Visa Rejection Reasons`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.rejectionReasons.map((r) => (
                    <Card
                      key={r.title}
                      className="bg-red-50/80 dark:bg-red-900/15 ring-1 ring-red-200/60"
                    >
                      <CardHeader className="flex-row items-center gap-4 space-y-0">
                        <span className="text-2xl">⚠️</span>
                        <CardTitle className="text-red-800">{r.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-red-800/80">{r.body}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Section>
            )}

            {/* Guarantee */}
            <Section title="Travaky Guarantee">
              <p className="text-slate-600">
                {data.guaranteeLine
                  ? data.guaranteeLine.replace('{date}', guaranteeDate)
                  : `Get your visa by ${guaranteeDate}`}
              </p>
            </Section>

            {/* Why Travaky */}
            <Section title="Why Travaky?">
              <p className="text-slate-600">
                We’ve processed thousands of {data.countryName} visas with a 99% approval rate. Our
                experts handle every detail so you don’t have to worry.
              </p>
            </Section>

            {/* Sentinel that triggers unstick (footer becomes reachable) */}
            <div ref={endSentinelRef} className="h-1 w-full" />
          </div>

          {/* RIGHT — Travellers box that sticks until the bottom sentinel */}
          <div className="w-full lg:w-2/5 lg:pl-1">
            <div
              ref={stickyWrapRef}
              className={
                atEnd
                  ? '' // unstick near the bottom so footer can slide in
                  : 'lg:sticky lg:top-24'
              }
            >
              <div className="rounded-2xl bg-white shadow-[0_18px_60px_-16px_rgba(5,30,90,0.35)] ring-1 ring-sky-100 overflow-hidden">
                <PricingSidebar
                  variant="info"
                  selectedPlan={plan}
                  travelerCount={trav}
                  onCountChange={setTrav}
                  onStart={() =>
                    router.push(
                      `/apply/${data.slug}?travellers=${trav}&plan=${encodeURIComponent(plan)}`,
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
