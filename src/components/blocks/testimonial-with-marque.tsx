
// components/ui/testimonial-demo.tsx
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import PatchedMarqueeSlider from "@/components/PatchedMarqueeSlider"

interface Testimonial {
  author: TestimonialAuthor
  text: string
  rating: number
  destination: string
  href?: string
}

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "pt-12 sm:pt-24 md:pt-32 pb-4",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
      <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
        {title && (
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        )}

        <div className="relative w-full overflow-hidden">
          <PatchedMarqueeSlider
            velocity={25}
            minScale={1}
            resetAfterTries={200}
            scatterRandomly={false}
            className="w-full"
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="px-4 flex-shrink-0" style={{ width: 320 }}>
                <TestimonialCard
                  author={testimonial.author}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  destination={testimonial.destination}
                  href={testimonial.href}
                />
              </div>
            ))}
          </PatchedMarqueeSlider>
        </div>
      </div>
      </div>
    </section>
  )
}
