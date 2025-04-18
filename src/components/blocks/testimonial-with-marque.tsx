// // // import { cn } from "@/lib/utils"
// // // import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

// // // interface TestimonialsSectionProps {
// // //   title: string
// // //   description: string
// // //   testimonials: Array<{
// // //     author: TestimonialAuthor
// // //     text: string
// // //     href?: string
// // //   }>
// // //   className?: string
// // // }

// // // export function TestimonialsSection({ 
// // //   title,
// // //   description,
// // //   testimonials,
// // //   className 
// // // }: TestimonialsSectionProps) {
// // //   return (
// // //     <section className={cn(
// // //       "bg-background text-foreground",
// // //       "py-12 sm:py-24 md:py-32 px-0",
// // //       className
// // //     )}>
// // //       <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
// // //         <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
// // //           <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
// // //             {title}
// // //           </h2>
// // //           <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
// // //             {description}
// // //           </p>
// // //         </div>

// // //         <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
// // //           <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
// // //             <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
// // //               {[...Array(4)].map((_, setIndex) => (
// // //                 testimonials.map((testimonial, i) => (
// // //                   <TestimonialCard 
// // //                     key={`${setIndex}-${i}`}
// // //                     {...testimonial}
// // //                   />
// // //                 ))
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
// // //           <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// // // import { cn } from "@/lib/utils"
// // // import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
// // // import Marquee from "react-fast-marquee"
// // // // import dynamic from "next/dynamic"
// // // // const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false })

// // // interface TestimonialsSectionProps {
// // //   title: string
// // //   description: string
// // //   testimonials: Array<{
// // //     author: TestimonialAuthor
// // //     text: string
// // //     href?: string
// // //   }>
// // //   className?: string
// // // }

// // // export function TestimonialsSection({ 
// // //   title,
// // //   description,
// // //   testimonials,
// // //   className 
// // // }: TestimonialsSectionProps) {
// // //   return (
// // //     <section className={cn(
// // //       "bg-background text-foreground",
// // //       "py-12 sm:py-24 md:py-32",
// // //       className
// // //     )}>
// // //       <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
// // //         <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
// // //           <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
// // //             {title}
// // //           </h2>
// // //           <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
// // //             {description}
// // //           </p>
// // //         </div>

// // //         <div className="relative w-full overflow-x-hidden">
// // //           <Marquee
// // //             pauseOnHover
// // //             gradient
// // //             speed={30}
// // //             className="w-full"
// // //           >
// // //             {testimonials.map((testimonial, i) => (
// // //               <div key={i} className="px-2">
// // //                 <TestimonialCard {...testimonial} />
// // //               </div>
// // //             ))}
// // //           </Marquee>

// // //           <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
// // //           <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // import { cn } from "@/lib/utils"
// // import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
// // import Marquee from "react-fast-marquee"

// // interface Testimonial {
// //   author: TestimonialAuthor
// //   text: string
// //   rating: number         // New: Star rating (e.g., 5 for a five-star review)
// //   destination: string    // New: Destination details (e.g., "Mumbai → Paris 🇫🇷")
// //   href: string
// // }

// // interface TestimonialsSectionProps {
// //   title: string
// //   description: string
// //   testimonials: Testimonial[]
// //   className?: string
// // }

// // export function TestimonialsSection({ 
// //   title,
// //   description,
// //   testimonials,
// //   className 
// // }: TestimonialsSectionProps) {
// //   return (
// //     <section className={cn(
// //       "bg-background text-foreground",
// //       "pt-12 sm:pt-24 md:pt-32 pb-4",
// //       className
// //     )}>
// //       <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
// //         <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
// //           <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
// //             {title}
// //           </h2>
// //           {rating}
// //           <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
// //             {description}
// //           </p>
// //         </div>

// //         <div className="relative w-full overflow-x-hidden">
// //           <Marquee
// //             pauseOnHover
// //             gradient
// //             speed={30}
// //             className="w-full"
// //           >
// //             {testimonials.map((testimonial, i) => (
// //               <div key={i} className="px-2">
// //                 <TestimonialCard {...testimonial} />
// //               </div>
// //             ))}
// //           </Marquee>

// //           <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
// //           <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// import { cn } from "@/lib/utils"
// import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
// import Marquee from "react-fast-marquee"

// interface Testimonial {
//   author: TestimonialAuthor
//   text: string
//   rating: number
//   destination: string
//   href?: string
// }

// interface TestimonialsSectionProps {
//   title: string
//   description: string
//   testimonials: Testimonial[]
//   className?: string
// }

// export function TestimonialsSection({ 
//   title,
//   description,
//   testimonials,
//   className 
// }: TestimonialsSectionProps) {
//   return (
//     <section className={cn(
//       "bg-background text-foreground",
//       "pt-12 sm:pt-24 md:pt-32 pb-4",
//       className
//     )}>
//       <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
//         <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
//           <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
//             {title}
//           </h2>
//           <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
//             {description}
//           </p>
//         </div>

//         <div className="relative w-full overflow-x-hidden">
//           <Marquee
//             pauseOnHover
//             gradient
//             speed={60}
//             className="w-full"
//           >
//             {/* {testimonials.map((testimonial, i) => (
//               <div key={i} className="px-2">
//                 <TestimonialCard
//                   author={testimonial.author}
//                   text={testimonial.text}
//                   rating={testimonial.rating}
//                   destination={testimonial.destination}
//                   href={testimonial.href}
//                 />
//               </div>
//             ))}
//           </Marquee> */}
//           {[...testimonials, ...testimonials].map((testimonial, i) => (
//                 <div key={i} className="px-2">
//                   <TestimonialCard
//                     author={testimonial.author}
//                     text={testimonial.text}
//                     rating={testimonial.rating}
//                     destination={testimonial.destination}
//                     href={testimonial.href}
//                   />
//                 </div>
//               ))}
//             </Marquee>

//           <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
//         </div>
//       </div>
//     </section>
//   )
// }
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
