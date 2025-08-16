'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently&nbsp;Asked&nbsp;
            <span className="text-brand-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of the most common questions we get. Still have more? Contact us!
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does the visa process take?</AccordionTrigger>
            <AccordionContent>The visa process generally takes between 7 to 30 days depending on the country.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I track my visa application?</AccordionTrigger>
            <AccordionContent>Yes, you can track the status of your application via the Travaky platform.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What if my visa is denied?</AccordionTrigger>
            <AccordionContent>If your visa is denied, we will assist you with the re-application process.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
