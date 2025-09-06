"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const HomepageHero = dynamic(() => import('@/components/HomepageHero'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
})

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <HomepageHero />
    </Suspense>
  )
}


// // // src/app/page.tsx

// // "use client"

// // import { useRef, useMemo, useState } from 'react'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'
// // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// // import { Button } from '@/components/ui/button'
// // import { AuthDialog } from '@/components/ui/auth-dialogs'
// // import { useAuth } from '@/context/AuthContext'
// // import { countryData } from '@/data/countries'
// // import { faqs } from '@/content/data'
// // import { motion } from "framer-motion"
// // import { Badge } from "@/components/ui/badge"
// // import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'
// // import { FeaturesSectionWithHoverEffects } from '@/components/ui/service'
// // import { WorldMapDemo } from '@/components/ui/world-map-demo'
// // import { PanelParticles } from '@/components/PanelParticles'

// // function Section({ title, description, children, className }: { title: string, description?: string, children: React.ReactNode, className?: string }) {
// //   return (
// //     <section className={`py-16 sm:py-24 ${className}`}>
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
// //           {description && <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
// //         </div>
// //         {children}
// //       </div>
// //     </section>
// //   )
// // }

// // export default function HomePage() {
// //   const [showAll, setShowAll] = useState(false)
// //   const countryRef = useRef<HTMLDivElement>(null)
// //   const [authRedirect, setAuthRedirect] = useState<string | null>(null)
// //   const [showAuthModal, setShowAuthModal] = useState(false)
// //   const { session, refreshSession } = useAuth()
// //   const router = useRouter()

// //   const processedFeatureList = useMemo(() => {
// //     return countryData.map((item) => ({
// //       ...item,
// //       backgroundPhoto: item.backgroundPhoto || '/images/default-country.jpg',
// //     }))
// //   }, [])

// //   const handleCardClick = async (target: string) => {
// //     if (session) {
// //       router.push(target)
// //     } else {
// //       toast('Please log in to access this form.')
// //       setAuthRedirect(target)
// //       setShowAuthModal(true)
// //     }
// //   }

// //   const handleAuthSuccess = async () => {
// //     await refreshSession()
// //     if (authRedirect) {
// //       router.push(authRedirect)
// //       setAuthRedirect(null)
// //     } else {
// //       router.push('/')
// //     }
// //     setShowAuthModal(false)
// //   }

// //   const handleToggle = () => {
// //     setShowAll(!showAll)
// //     if (showAll && countryRef.current) {
// //       countryRef.current.scrollIntoView({ behavior: 'smooth' })
// //     }
// //   }

// //   const visibleCountries = showAll ? processedFeatureList : processedFeatureList.slice(0, 8)

// //   return (
// //     <div className="bg-background text-foreground">
// //       <div className="relative bg-primary/5">
// //         <PanelParticles />
// //         <div className="container mx-auto px-4 py-24 sm:py-32 text-center">
// //           <Badge variant="secondary" className="mb-4">Visa on Autopilot</Badge>
// //           <motion.h1 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="text-4xl md:text-6xl font-bold tracking-tighter"
// //           >
// //             Your Gateway to Global Travel
// //           </motion.h1>
// //           <motion.p 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
// //           >
// //             Effortless visa applications for your next adventure. We handle the paperwork, so you can focus on the journey.
// //           </motion.p>
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="mt-8 flex justify-center gap-4"
// //           >
// //             <Button size="lg" onClick={() => countryRef.current?.scrollIntoView({ behavior: 'smooth' })}>
// //               Sticker Visa
// //             </Button>
// //             <div className="relative">
// //               <Button size="lg" variant="outline" disabled>
// //                 E-Visa
// //               </Button>
// //               <Badge className="absolute -top-2 -right-4">Coming Soon</Badge>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       <Section title="Choose your country" description="Select any country from the list below and get started with your visa application.">
// //         <div ref={countryRef} className="relative">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //           {visibleCountries.map((feature, index) => (
// //             <button
// //               key={index}
// //               onClick={() => handleCardClick(feature.buttonLink)}
// //               className="block transition-transform hover:scale-105 text-left"
// //               >
// //               <div className="rounded-lg overflow-hidden border-2 border-primary flex flex-col bg-white dark:bg-gray-800">
// //                 <div className="h-40 w-full shadow-md">
// //                   <img src={feature.backgroundPhoto} alt={feature.countryName} className="object-cover w-full h-full" />
// //                 </div>
// //                 <div className="border-t border-gray-200 dark:border-gray-700" />
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-bold text-foreground">{feature.countryName}</h3>
// //                 </div>
// //               </div>
// //             </button>
// //           ))}
// //           </div>

// //           {!showAll && (
// //             <div className="relative mt-[-40px] h-32 bg-gradient-to-t from-background to-transparent flex justify-center items-end pointer-events-none">
// //               <button
// //                 onClick={handleToggle}
// //                 className="pointer-events-auto z-10 mt-8 px-4 py-2 bg-primary text-white rounded-md shadow-lg hover:bg-primary/80 transition-all"
// //               >
// //                 See More
// //               </button>
// //             </div>
// //           )}

// //           {showAll && (
// //             <div className="flex justify-center mt-6">
// //               <button onClick={handleToggle} className="text-primary underline hover:no-underline">
// //                 Show Less
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </Section>

// //       <Section title="Services Offered" description="Explore our range of services to find the perfect fit for your needs.">
// //         <FeaturesSectionWithHoverEffects />
// //       </Section>

// //       <Section title="Trusted by people across India" description="Get your visa at your home without any hassle just like 12k+ happy customers">
// //         <TestimonialsSectionDemo />
// //       </Section>

// //       <Section title="Countries we support">
// //         <WorldMapDemo />
// //       </Section>

// //       <Section title="Frequently Asked Questions">
// //         <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
// //           {faqs.map((faqItem, index) => (
// //             <AccordionItem value={faqItem.question} key={index}>
// //               <AccordionTrigger>{faqItem.question}</AccordionTrigger>
// //               <AccordionContent>{faqItem.answer}</AccordionContent>
// //             </AccordionItem>
// //           ))}
// //         </Accordion>
// //       </Section>

// //       {showAuthModal && (
// //         <AuthDialog
// //           mode="login"
// //           toggleMode={() => {}}
// //           onSuccess={handleAuthSuccess}
// //           onClose={() => setShowAuthModal(false)}
// //         />
// //       )}
// //     </div>
// //   )
// // }



// // src/app/page.tsx

// "use client"

// import { useRef, useMemo, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Button } from '@/components/ui/button'
// import { AuthDialog } from '@/components/ui/auth-dialogs'
// import { useAuth } from '@/context/AuthContext'
// import { countryData } from '@/data/countries'
// import { faqs } from '@/content/data'
// import { motion } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
// import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'
// import { FeaturesSectionWithHoverEffects } from '@/components/ui/service'
// import { WorldMapDemo } from '@/components/ui/world-map-demo'
// import { PanelParticles } from '@/components/PanelParticles'
// import { Pricing } from '@/components/pricing'

// function Section({ title, description, children, className }: { title: string, description?: string, children: React.ReactNode, className?: string }) {
//   return (
//     <section className={`py-16 sm:py-24 ${className}`}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
//           {description && <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
//         </div>
//         {children}
//       </div>
//     </section>
//   )
// }

// export default function HomePage() {
//   const [showAll, setShowAll] = useState(false)
//   const countryRef = useRef<HTMLDivElement>(null)
//   const [authRedirect, setAuthRedirect] = useState<string | null>(null)
//   const [showAuthModal, setShowAuthModal] = useState(false)
//   const { session, refreshSession } = useAuth()
//   const router = useRouter()

//   const processedFeatureList = useMemo(() => {
//     return countryData.map((item) => ({
//       ...item,
//       backgroundPhoto: item.backgroundPhoto || '/images/default-country.jpg',
//     }))
//   }, [])

//   const handleCardClick = async (target: string) => {
//     if (session) {
//       router.push(target)
//     } else {
//       toast('Please log in to access this form.')
//       setAuthRedirect(target)
//       setShowAuthModal(true)
//     }
//   }

//   const handleAuthSuccess = async () => {
//     await refreshSession()
//     if (authRedirect) {
//       router.push(authRedirect)
//       setAuthRedirect(null)
//     } else {
//       router.push('/')
//     }
//     setShowAuthModal(false)
//   }

//   const handleToggle = () => {
//     setShowAll(!showAll)
//     if (showAll && countryRef.current) {
//       countryRef.current.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   const visibleCountries = showAll ? processedFeatureList : processedFeatureList.slice(0, 8)

//   return (
//     <div className="bg-background text-foreground">
//         <div className="bg-primary text-primary-foreground text-center p-2 text-sm">
//             🎉 Get 20% off on all plans! Use code: <span className="font-bold">SUMMER20</span>
//         </div>
//       <div className="relative bg-primary/5">
//         <PanelParticles />
//         <div className="container mx-auto px-4 py-24 sm:py-32 text-center">
//           <Badge variant="secondary" className="mb-4">Visa on Autopilot</Badge>
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-6xl font-bold tracking-tighter"
//           >
//             Your Gateway to Global Travel
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
//           >
//             Effortless visa applications for your next adventure. We handle the paperwork, so you can focus on the journey.
//           </motion.p>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-8 flex justify-center gap-4"
//           >
//             <Button size="lg" onClick={() => countryRef.current?.scrollIntoView({ behavior: 'smooth' })}>
//               Sticker Visa
//             </Button>
//             <div className="relative">
//               <Button size="lg" variant="outline" disabled>
//                 E-Visa
//               </Button>
//               <Badge className="absolute -top-2 -right-4">Coming Soon</Badge>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <Section title="Choose your country" description="Select any country from the list below and get started with your visa application.">
//         <div ref={countryRef} className="relative">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {visibleCountries.map((feature, index) => (
//             <button
//               key={index}
//               onClick={() => handleCardClick(feature.buttonLink)}
//               className="block transition-transform hover:scale-105 text-left"
//               >
//               <div className="rounded-lg overflow-hidden border-2 border-primary flex flex-col bg-white dark:bg-gray-800">
//                 <div className="h-40 w-full shadow-md">
//                   <img src={feature.backgroundPhoto} alt={feature.countryName} className="object-cover w-full h-full" />
//                 </div>
//                 <div className="border-t border-gray-200 dark:border-gray-700" />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold text-foreground">{feature.countryName}</h3>
//                 </div>
//               </div>
//             </button>
//           ))}
//           </div>

//           {!showAll && (
//             <div className="relative mt-[-40px] h-32 bg-gradient-to-t from-background to-transparent flex justify-center items-end pointer-events-none">
//               <button
//                 onClick={handleToggle}
//                 className="pointer-events-auto z-10 mt-8 px-4 py-2 bg-primary text-white rounded-md shadow-lg hover:bg-primary/80 transition-all"
//               >
//                 See More
//               </button>
//             </div>
//           )}

//           {showAll && (
//             <div className="flex justify-center mt-6">
//               <button onClick={handleToggle} className="text-primary underline hover:no-underline">
//                 Show Less
//               </button>
//             </div>
//           )}
//         </div>
//       </Section>

//       <Section title="Services Offered" description="Explore our range of services to find the perfect fit for your needs.">
//         <FeaturesSectionWithHoverEffects />
//       </Section>
      
//       <Section title="Visa Service Packages" description="Choose the best visa support package tailored to your needs!">
//         <Pricing
//           plans={[
//             {
//               name: 'Docs on Call',
//               price: '3550',
//               features: [
//                 'Full support over a call',
//                 'Visa specialist assists until documentation completion',
//                 'All necessary steps explained over the call',
//                 'Final documentation packet delivered to your home',
//               ],
//               description: 'Full support over a call with visa specialist until documentation is complete.',
//               buttonText: 'Get Docs on Call',
//               href: '/apply?plan=docs-on-call',
//               isPopular: false,
//             },
//             {
//               name: 'Docs on Door',
//               price: '19890',
//               features: [
//                 'In-person visa assistance at home',
//                 'Visa expert visits your home for document guidance',
//                 'Personalized consultation for all concerns',
//                 'Support until application submission at Visa Center',
//                 'Dedicated officer at the Visa Center',
//               ],
//               description: 'In-person expert comes to your home and supports till visa center submission.',
//               buttonText: 'Get Docs on Door',
//               href: '/apply?plan=docs-on-door',
//               isPopular: true,
//             },
//             {
//               name: 'VAD (Visa at Doorstep)',
//               price: '28950',
//               features: [
//                 'Embassy authorized visa officer comes to your home',
//                 'No need to visit the Visa Center',
//                 'VFS team visits home for biometrics & submission',
//                 'Visa delivered to your home after approval',
//               ],
//               description: 'End-to-end premium visa service — you never have to leave home!',
//               buttonText: 'Get VAD Now',
//               href: '/apply?plan=vad',
//               isPopular: false,
//             },
//           ]}
//         />
//       </Section>

//       <Section title="Trusted by people across India" description="Get your visa at your home without any hassle just like 12k+ happy customers">
//         <TestimonialsSectionDemo />
//       </Section>

//       <Section title="Countries we support">
//         <WorldMapDemo />
//       </Section>

//       <Section title="Frequently Asked Questions">
//         <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
//           {faqs.map((faqItem, index) => (
//             <AccordionItem value={faqItem.question} key={index}>
//               <AccordionTrigger>{faqItem.question}</AccordionTrigger>
//               <AccordionContent>{faqItem.answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </Section>

//       {showAuthModal && (
//         <AuthDialog
//           mode="login"
//           toggleMode={() => {}}
//           onSuccess={handleAuthSuccess}
//           onClose={() => setShowAuthModal(false)}
//         />
//       )}
//     </div>
//   )
// }
