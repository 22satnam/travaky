// 'use client'
// import 'flag-icons/css/flag-icons.min.css'
// import { PanelParticles } from '@/components/PanelParticles'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import { HoverEffect } from '@/components/ui/card-hover-effect'
// import { useLocale } from '@/hooks'
// import { cn } from '@/lib/utils'
// import { useTheme } from 'nextra-theme-docs'
// import { useMemo } from 'react'
// import {  useState} from 'react'
// import Marquee from 'react-fast-marquee'
// import { Section } from './Section'
// import { SetupHero } from './Setup'
// import SchengenCarousel from '@/components/schengen-carousel'
// import { WorldMapDemo } from '@/components/ui/world-map-demo'
// import { Pricing } from '@/components/pricing'
// import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'
// import { FeaturesSectionWithHoverEffects } from '@/components/ui/service'
// import Link from 'next/link'

// interface StackItemProps {
//   countryCode: string
//   countryName: string
// }

// export const StackItem = ({ countryCode, countryName }: StackItemProps) => {
//   return (
//     <div
//       className={cn(
//         'relative group flex items-center justify-center',
//         'w-[50px] h-[50px] mx-2',
//         'transition-transform duration-300 opacity-80',
//         'hover:scale-125 hover:opacity-100 cursor-pointer'
//       )}
//     >
//       <span
//         className={`fi fi-${countryCode.toLowerCase()}`}
//         style={{
//           width: '100%',
//           height: '100%',
//           backgroundSize: 'cover',
//           borderRadius: '6px',
//         }}
//       />
//       <div
//         className={cn(
//           'absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2',
//           'px-2 py-1 text-xs rounded-md bg-black text-white',
//           'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
//           'whitespace-nowrap pointer-events-none'
//         )}
//       >
//         {countryName}
//       </div>
//     </div>
//   )
// }

// export default function HomepageHero() {
//   const { t } = useLocale()
//   const featureList = t('featureList')
//   const faqs = t('faqs')

//   const processedFeatureList = useMemo(() => {
//     return featureList.map((item: any) => ({
//       ...item,
//       backgroundPhoto: item.backgroundPhoto || '/images/default-country.jpg',
//     }))
//   }, [featureList])

//   return (
//     <>
//       <PanelParticles />
//       <SetupHero />

      

//         {/* Country Services Cards */}
//       <Section title="Choose your country" description={t('featuresDesc')}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {processedFeatureList.map((feature, index) => (
//             <Link key={index} href={feature.buttonLink} className="block transition-transform hover:scale-105">
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
//             </Link>
//           ))}
//         </div>
//       </Section>



//       <Section className="flex min-h-screen flex-col items-center justify-center p-4">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8"> Services Offered</h1>
//       <FeaturesSectionWithHoverEffects />
//       </Section>

//       <Section title="Countries we support" titleProps={{ disabledAnimation: true }}>
//           <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
//             <Marquee pauseOnHover autoFill gradient direction="right" gradientColor="var(--background)" speed={60}>
//               <div className="flex flex-wrap justify-center items-center gap-4 overflow-visible">
//                 {[
//                   ['fr', 'France'],
//                   ['de', 'Germany'],
//                   ['it', 'Italy'],
//                   ['es', 'Spain'],
//                   ['nl', 'Netherlands'],
//                   ['be', 'Belgium'],
//                   ['lu', 'Luxembourg'],
//                   ['pt', 'Portugal'],
//                   ['at', 'Austria'],
//                   ['se', 'Sweden'],
//                   ['fi', 'Finland'],
//                   ['dk', 'Denmark'],
//                   ['pl', 'Poland'],
//                   ['cz', 'Czech Republic'],
//                   ['hu', 'Hungary'],
//                   ['sk', 'Slovakia'],
//                   ['si', 'Slovenia'],
//                   ['ee', 'Estonia'],
//                   ['lv', 'Latvia'],
//                   ['lt', 'Lithuania'],
//                   ['mt', 'Malta'],
//                   ['hr', 'Croatia'],
//                   ['is', 'Iceland'],
//                   ['no', 'Norway'],
//                   ['ch', 'Switzerland'],
//                   ['li', 'Liechtenstein'],
//                 ].map(([code, name]) => (
//                   <StackItem key={code} countryCode={code} countryName={name} />
//                 ))}
//               </div>
//             </Marquee>
//           </div>
//         </Section>



//       <Section className="flex flex-col items-center justify-center">
//         <Pricing
//           title="Visa Service Packages"
//           description="Choose the best visa support package tailored to your needs!"
//           plans={[
//             {
//               name: "Docs on Call",
//               price: "3550",
//               features: [
//                 "Full support over a call",
//                 "Visa specialist assists until documentation completion",
//                 "All necessary steps explained over the call",
//                 "Final documentation packet delivered to your home",
//               ],
//               description: "Full support over a call with visa specialist until documentation is complete.",
//               buttonText: "Get Docs on Call",
//               href: "/apply?plan=docs-on-call",
//               isPopular: false,
//             },
//             {
//               name: "Docs on Door",
//               price: "19890",
//               features: [
//                 "In-person visa assistance at home",
//                 "Visa expert visits your home for document guidance",
//                 "Personalized consultation for all concerns",
//                 "Support until application submission at Visa Center",
//                 "Dedicated officer at the Visa Center",
//               ],
//               description: "In-person expert comes to your home and supports till visa center submission.",
//               buttonText: "Get Docs on Door",
//               href: "/apply?plan=docs-on-door",
//               isPopular: true,
//             },
//             {
//               name: "VAD (Visa at Doorstep)",
//               price: "28950",
//               features: [
//                 "Embassy authorized visa officer comes to your home",
//                 "No need to visit the Visa Center",
//                 "VFS team visits home for biometrics & submission",
//                 "Visa delivered to your home after approval",
//               ],
//               description: "End-to-end premium visa service — you never have to leave home!",
//               buttonText: "Get VAD Now",
//               href: "/apply?plan=vad",
//               isPopular: false,
//             },
//           ]}
//         />
//         </Section>

    
//         {/* Countries we support */}


//         <Section className="flex flex-col items-center justify-center">
//         <TestimonialsSectionDemo />
//         </Section>
    


//         <Section className="flex flex-col items-center justify-center">
//         <WorldMapDemo />
//         </Section>

//         <Section
//           title="Frequently Asked Questions"
//           tallPaddingY
//         >
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full max-w-5xl"
//           >
//             {
//               faqs.map((faqItem, index) => (
//                 <AccordionItem
//                   value={faqItem.question}
//                   key={index}
//                 >
//                   <AccordionTrigger>{faqItem.question}</AccordionTrigger>
//                   <AccordionContent>
//                     {faqItem.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))
//             }
//           </Accordion>
//         </Section>
//     </>
//   )
// }
// homepagehero/index.tsx
'use client'
import 'flag-icons/css/flag-icons.min.css'
import { PanelParticles } from '@/components/PanelParticles'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { useTheme } from 'nextra-theme-docs'
import { useMemo, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Section } from './Section'
import { SetupHero } from './Setup'
import SchengenCarousel from '@/components/schengen-carousel'
import { WorldMapDemo } from '@/components/ui/world-map-demo'
import { Pricing } from '@/components/pricing'
import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/service'
import Link from 'next/link'
import { featureList, faqs,featuresDesc } from '@/content/data'


interface StackItemProps {
  countryCode: string
  countryName: string
}

export const StackItem = ({ countryCode, countryName }: StackItemProps) => {
  return (
    <div
      className={cn(
        'relative group flex items-center justify-center',
        'w-[50px] h-[50px] mx-2',
        'transition-transform duration-300 opacity-80',
        'hover:scale-125 hover:opacity-100 cursor-pointer'
      )}
    >
      <span
        className={`fi fi-${countryCode.toLowerCase()}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          borderRadius: '6px',
        }}
      />
      <div
        className={cn(
          'absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2',
          'px-2 py-1 text-xs rounded-md bg-black text-white',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
          'whitespace-nowrap pointer-events-none'
        )}
      >
        {countryName}
      </div>
    </div>
  )
}

  export default function HomepageHero() {
    const processedFeatureList = useMemo(() => {
      return featureList.map((item) => ({
        ...item,
        backgroundPhoto: item.backgroundPhoto || '/images/default-country.jpg',
      }))
    }, [])

  return (
    <>
      <PanelParticles />
      <br></br>
      <SetupHero />

      {/* Country Services Cards */}
      <Section title="Choose your country" description={featuresDesc}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processedFeatureList.map((feature, index) => (
            <Link key={index} href={feature.buttonLink} className="block transition-transform hover:scale-105">
              <div className="rounded-lg overflow-hidden border-2 border-primary flex flex-col bg-white dark:bg-gray-800">
                <div className="h-40 w-full shadow-md">
                  <img src={feature.backgroundPhoto} alt={feature.countryName} className="object-cover w-full h-full" />
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground">{feature.countryName}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Get visa by {feature.visaVariable} and {feature.cost}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
          <br></br>
      {/* <Section className="flex min-h-screen flex-col items-center justify-center p-4"> */}
      <Section title = "Services Offered" description="Explore our range of services to find the perfect fit for your needs.">
        <FeaturesSectionWithHoverEffects />
      </Section>

      <Section title="Countries we support" titleProps={{ disabledAnimation: true }}>
        <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
          <Marquee
            pauseOnHover
            autoFill
            gradient
            direction="right"
            gradientColor="var(--background)"
            speed={60}
          >
            <div className="flex flex-wrap justify-center items-center gap-4 overflow-visible">
              {[
                ['fr', 'France'],
                ['de', 'Germany'],
                ['it', 'Italy'],
                ['es', 'Spain'],
                ['nl', 'Netherlands'],
                ['be', 'Belgium'],
                ['lu', 'Luxembourg'],
                ['pt', 'Portugal'],
                ['at', 'Austria'],
                ['se', 'Sweden'],
                ['fi', 'Finland'],
                ['dk', 'Denmark'],
                ['pl', 'Poland'],
                ['cz', 'Czech Republic'],
                ['hu', 'Hungary'],
                ['sk', 'Slovakia'],
                ['si', 'Slovenia'],
                ['ee', 'Estonia'],
                ['lv', 'Latvia'],
                ['lt', 'Lithuania'],
                ['mt', 'Malta'],
                ['hr', 'Croatia'],
                ['is', 'Iceland'],
                ['no', 'Norway'],
                ['ch', 'Switzerland'],
                ['li', 'Liechtenstein'],
              ].map(([code, name]) => (
                <StackItem key={code} countryCode={code} countryName={name} />
              ))}
            </div>
          </Marquee>
        </div>
      </Section>

      <Section title= "Trusted by people across India"  description="Get your visa at your home without any hassle just like 12k+ happy customers" className="flex flex-col items-center justify-center">
        <TestimonialsSectionDemo />
      </Section>

      <Section className="flex flex-col items-center justify-center">
        <WorldMapDemo />
      </Section>

      <Section title="Frequently Asked Questions" tallPaddingY>
        <Accordion type="single" collapsible className="w-full max-w-5xl">
          {faqs.map((faqItem, index) => (
            <AccordionItem value={faqItem.question} key={index}>
              <AccordionTrigger>{faqItem.question}</AccordionTrigger>
              <AccordionContent>{faqItem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  )
}
