'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-primary-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-8xl opacity-10 animate-pulse">✈️</div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-2xl text-primary-100 mb-10">
          Join thousands of satisfied travelers. Doorstep pickup, expert guidance, fast appointments.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/apply/germany">
            <Button size="lg" className="h-11 px-6">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#destinations">
            <Button size="lg" variant="outline" className="h-11 px-6 text-white border-white">
              <Globe className="mr-2 h-4 w-4" />
              Explore Visas
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-primary-100 text-sm">
          <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 99%+ approval</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 24–48h appointment</span>
        </div>
      </div>
    </section>
  )
}
