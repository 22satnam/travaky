import { TestimonialsSection } from "@/components/blocks/testimonial-with-marque"


const testimonials = [
  {
    author: {
      name: "Sunil Rao",
      handle: "@raosunil77",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this govisa platform has transformed my visa process. The speed and reliability are unprecedented.",
    href: "https://twitter.com/raosunil77"
  },
  {
    author: {
      name: "Tejas Mondal",
      handle: "@mondalteja45",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The Documentaion provided is flawless. I've reduced my average visa processing time by 60% since following govisa.",
    href: "https://twitter.com/mondalteja45"
  },
  {
    author: {
      name: "Harpreet Singh",
      handle: "@singhpreethar",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an actual doorstep service that actually understands my time's value! Never knew visa processing can be so sorted out."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by people across india"
      description="Get your visa at your home without any hassle just like 12k+ happy customers"
      testimonials={testimonials}
    />
  )
}