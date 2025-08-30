
// 'use client'

// import 'flag-icons/css/flag-icons.min.css'
// import { useRef, useMemo, useState } from 'react'
// import { PanelParticles } from '@/components/PanelParticles'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import { cn } from '@/lib/utils'
// import { featuresDesc, faqs } from '@/content/data'
// import { countryData } from '@/data/countries' // ✅ unified source
// import { Section } from './Section'
// import { SetupHero } from './Setup'
// import { FeaturesSectionWithHoverEffects } from '@/components/ui/service'
// import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'
// import { WorldMapDemo } from '@/components/ui/world-map-demo'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { AuthDialog } from '@/components/ui/auth-dialogs'
// import { useAuth } from '@/context/AuthContext'
// import Marquee from 'react-fast-marquee'
// import { Pricing } from '@/components/pricing'

// interface StackItemProps {
//   countryCode: string
//   countryName: string
// }

// export const StackItem = ({ countryCode, countryName }: StackItemProps) => (
//   <div
//     className={cn(
//       'relative group flex items-center justify-center',
//       'w-[50px] h-[50px] mx-2',
//       'transition-transform duration-300 opacity-80',
//       'hover:scale-125 hover:opacity-100 cursor-pointer'
//     )}
//   >
//     <span
//       className={`fi fi-${countryCode.toLowerCase()}`}
//       style={{
//         width: '100%',
//         height: '100%',
//         backgroundSize: 'cover',
//         borderRadius: '6px',
//       }}
//     />
//     <div
//       className={cn(
//         'absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2',
//         'px-2 py-1 text-xs rounded-md bg-black text-white',
//         'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
//         'whitespace-nowrap pointer-events-none'
//       )}
//     >
//       {countryName}
//     </div>
//   </div>
// )

// export default function HomepageHero() {
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
//     <>
//       <PanelParticles />
//       <br />
//       <SetupHero />

//       <Section title="Choose your country" description={featuresDesc}>
//         <div ref={countryRef} className="relative">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {visibleCountries.map((feature, index) => (
//   // ✅ buttonLink used directly
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
//                   <p className="text-sm text-muted-foreground mt-1">
//                     Get visa by {feature.visaVariable} and {feature.cost}
//                   </p>
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

//       <Section className="flex flex-col items-center justify-center">
//         <Pricing
//           title="Visa Service Packages"
//           description="Choose the best visa support package tailored to your needs!"
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

//       <Section title="Countries we support" titleProps={{ disabledAnimation: true }}>
//         <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
//           <Marquee pauseOnHover autoFill gradient direction="right" gradientColor="var(--background)" speed={60}>
//             <div className="flex flex-wrap justify-center items-center gap-4 overflow-visible">
//               {[
//                 ['fr', 'France'], ['de', 'Germany'], ['it', 'Italy'], ['es', 'Spain'],
//                 ['nl', 'Netherlands'], ['be', 'Belgium'], ['lu', 'Luxembourg'], ['pt', 'Portugal'],
//                 ['at', 'Austria'], ['se', 'Sweden'], ['fi', 'Finland'], ['dk', 'Denmark'],
//                 ['pl', 'Poland'], ['cz', 'Czech Republic'], ['hu', 'Hungary'], ['sk', 'Slovakia'],
//                 ['si', 'Slovenia'], ['ee', 'Estonia'], ['lv', 'Latvia'], ['lt', 'Lithuania'],
//                 ['mt', 'Malta'], ['hr', 'Croatia'], ['is', 'Iceland'], ['no', 'Norway'],
//                 ['ch', 'Switzerland'], ['li', 'Liechtenstein'],
//               ].map(([code, name]) => (
//                 <StackItem key={code} countryCode={code} countryName={name} />
//               ))}
//             </div>
//           </Marquee>
//         </div>
//       </Section>

//       <Section
//         title="Trusted by people across India"
//         description="Get your visa at your home without any hassle just like 12k+ happy customers"
//         className="flex flex-col items-center justify-center"
//       >
//         <TestimonialsSectionDemo />
//       </Section>

//       <Section className="flex flex-col items-center justify-center">
//         <WorldMapDemo />
//       </Section>

//       <Section title="Frequently Asked Questions" tallPaddingY>
//         <Accordion type="single" collapsible className="w-full max-w-5xl">
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
//           onAuthSuccess={handleAuthSuccess}
//           onClose={() => setShowAuthModal(false)}
//         />
//       )}
//     </>
//   )
// }



'use client'

import HeroSection from './sections/HeroSection'
import VisaJourneyAnimation from './sections/VisaJourneyAnimation'
import VisaServices from './sections/VisaServices'
import TrustedBy from './sections/TrustBand2'
import CountrySelection from './sections/CountrySelection'
import TopFeatures from './sections/TopFeatures'
import TrustBand from './sections/TrustBand'
import ServicesOffered from './sections/ServicesOffered'
import ServicesInclude from './sections/ServicesInclude'
import WhyChoose from './sections/WhyChoose'
import GlobalVisa from './sections/GlobalVisa'
import HowItWorks from './sections/HowItWorks'
import GlobalReach from './sections/GlobalReach'
import ReadyToStart from './sections/ReadyToStart'


export default function HomepageHero() {
  return (
    <>
      <HeroSection />
      <VisaJourneyAnimation />
      <VisaServices />
      <TrustedBy />
      <HowItWorks />
      <TopFeatures />
      <TrustBand />
      <ServicesOffered />
      <ServicesInclude />
      <WhyChoose />
      <GlobalVisa />
      <GlobalReach />
      <ReadyToStart />
    </>
  )
}
