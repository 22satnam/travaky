'use client'

import { TestimonialsSectionDemo } from '@/components/ui/testimonial-demo'

export default function TestimonialsBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="text-center font-extrabold leading-tight"
            style={{ fontSize: 44, letterSpacing: -0.5 }}>
          What Our{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #12baff 0%, #67e0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Customers
          </span>{' '}
          Say
        </h2>

        <p className="mt-5 text-center"
           style={{ fontSize: 20, color: '#6b7a89' }}>
          Join thousands of satisfied travelers who trusted us with their visa applications.
        </p>

        <div className="mt-12">
          <TestimonialsSectionDemo />
        </div>
      </div>
    </section>
  )
}
