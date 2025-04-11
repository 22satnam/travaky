'use client'

import { PanelParticles } from '@/components/PanelParticles'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { useTheme } from 'nextra-theme-docs'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import { Section } from './Section'
import { SetupHero } from './Setup'
import SchengenCarousel from '@/components/schengen-carousel'
import { WorldMapDemo } from '@/components/ui/world-map-demo'
import { Pricing } from "@/components/pricing"
import { TestimonialsSectionDemo } from "@/components/ui/testimonial-demo"
import { Footerdemo } from "@/components/ui/footer-section";



export const StackItem = ({
  className,
}: {
  className: string
},
) => {
  return (
    <div className={cn(
      'mx-6 size-[50px]',
      'text-neutral-800 dark:text-neutral-100',
      'transition-all duration-300 transform opacity-75',
      'hover:scale-125 hover:opacity-100',
      className,
    )}
    >
    </div>
  )
}

export default function HomepageHero() {
  const { t } = useLocale()

  const featureList = t('featureList')
  const faqs = t('faqs')

  const { resolvedTheme } = useTheme()

  const processedFeatureList = useMemo(() => {
    const icons = [
      'icon-[material-symbols--rocket-launch-outline]',
      'icon-[icon-park-outline--international]',
      'icon-[nonicons--typescript-16]',
      'icon-[carbon--face-satisfied] hover:icon-[carbon--face-wink]',
      'icon-[teenyicons--tailwind-outline]',
      'icon-[tabler--calendar-code]',
      'icon-[carbon--color-palette]',
      'icon-[carbon--ibm-cloud-transit-gateway]',
      'icon-[carbon--flash]',
    ]
    return featureList.map((item, index) => {
      return {
        ...item,
        icon: <span className={icons[index] || icons[0]}></span>,
      }
    })
  }, [featureList])

  return (
    <>
      <PanelParticles />
      <SetupHero />
      <div className="relative z-10 pb-10 md:pb-[100px]">
        <Section
          title="Visa Availability"
          titleProps={{
            disabledAnimation: true,
          }}
        >
          <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              direction="right"
              gradientColor="var(--background)"
              speed={60}
            >
              <StackItem className="icon-[akar-icons--nextjs-fill]" />
              <StackItem className="icon-[simple-icons--react]" />
              <StackItem className="icon-[simple-icons--tailwindcss]" />
              <StackItem className="icon-[teenyicons--framer-outline]" />
              <StackItem className="icon-[simple-icons--shadcnui]" />
              <StackItem className="icon-[simple-icons--typescript]" />
              <StackItem className="icon-[fa6-brands--sass]" />
              <StackItem className="icon-[teenyicons--eslint-outline]" />
              <StackItem className="icon-[simple-icons--postcss]" />
              <StackItem className="icon-[simple-icons--nextra]" />
              <StackItem className="icon-[line-md--iconify1]" />
            </Marquee>
          </div>
        </Section>
        <Section
          title="Features"
          description={t('featuresDesc')}
        >
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={processedFeatureList} />
          </div>
        </Section>

      <Section className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8"> Visa offered for countries</h1>
      <SchengenCarousel />
      </Section>
      
      <Section className="flex flex-col items-center justify-center">
        <Pricing
          title="Visa Service Packages"
          description="Choose the best visa support package tailored to your needs!"
          plans={[
            {
              name: "Docs on Call",
              price: "3550",
              features: [
                "Full support over a call",
                "Visa specialist assists until documentation completion",
                "All necessary steps explained over the call",
                "Final documentation packet delivered to your home",
              ],
              description: "Full support over a call with visa specialist until documentation is complete.",
              buttonText: "Get Docs on Call",
              href: "/apply?plan=docs-on-call",
              isPopular: false,
            },
            {
              name: "Docs on Door",
              price: "19890",
              features: [
                "In-person visa assistance at home",
                "Visa expert visits your home for document guidance",
                "Personalized consultation for all concerns",
                "Support until application submission at Visa Center",
                "Dedicated officer at the Visa Center",
              ],
              description: "In-person expert comes to your home and supports till visa center submission.",
              buttonText: "Get Docs on Door",
              href: "/apply?plan=docs-on-door",
              isPopular: true,
            },
            {
              name: "VAD (Visa at Doorstep)",
              price: "28950",
              features: [
                "Embassy authorized visa officer comes to your home",
                "No need to visit the Visa Center",
                "VFS team visits home for biometrics & submission",
                "Visa delivered to your home after approval",
              ],
              description: "End-to-end premium visa service — you never have to leave home!",
              buttonText: "Get VAD Now",
              href: "/apply?plan=vad",
              isPopular: false,
            },
          ]}
        />

      </Section>
      <Section className="flex flex-col items-center justify-center">
      <TestimonialsSectionDemo />

      </Section>

        <Section>
        <WorldMapDemo />
        </Section>

        <Section
          title="Frequently Asked Questions"
          tallPaddingY
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-5xl"
          >
            {
              faqs.map((faqItem, index) => (
                <AccordionItem
                  value={faqItem.question}
                  key={index}
                >
                  <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                  <AccordionContent>
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </Section>



      </div>
    </>
  )
}
