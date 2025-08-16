// src/components/HomepageHero/Setup.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export function SetupHero() {
  return (
    <section
      /* very-light blue background like UI-Hero */
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          'linear-gradient(90deg, #F3FAFF 0%, #FFFFFF 50%)', // subtle blue→white
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ───── Left text block ───── */}
          <div>
            {/* headline – exact blue (#0094FF) */}
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: '#0094FF' }}>
              Visa on Autopilot
            </h1>

            {/* sub-title – dark grey for readability */}
            <p className="mb-8 max-w-2xl text-xl lg:text-[22px] text-[#5E6B7E]">
              Fill once. We handle the rest — documents, appointments, and
              delivery. Get your visa approved with our expert-managed process.
            </p>

            {/* trust metrics – green ticks (#10B981) */}
            <div className="mb-8 flex flex-col sm:flex-row gap-6">
              {[
                '99% Approval Rate',
                '10,000+ Visas Processed',
                '20+ Cities Pickup',
              ].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" color="#10B981" />
                  <span className="text-sm font-medium text-[#374151]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* filled gradient button */}
              <Button
                size="lg"
                className="shadow-md"
                style={{
                  background:
                    'linear-gradient(90deg, #00AEEF 0%, #4FA4F3 100%)',
                  color: '#FFF',
                }}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* outline button in brand blue */}
              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: '#0094FF',
                  color: '#0094FF',
                }}
                className="hover:bg-[#0094FF] hover:text-white"
              >
                Explore Countries
              </Button>
            </div>
          </div>

          {/* ───── Right image & badges ───── */}
          <div className="relative">
            <img
              src={heroImage.src}
              alt="Visa flow illustration"
              className="w-full rounded-2xl shadow-lg object-cover"
            />

            {/* success badge */}
            <div className="absolute top-4 right-4 rounded-lg bg-white shadow-lg px-4 py-2 text-center">
              <div className="text-lg font-bold" style={{ color: '#0094FF' }}>
                98.9%
              </div>
              <div className="text-xs text-[#5E6B7E]">Success Rate</div>
            </div>

            {/* processing badge */}
            <div className="absolute bottom-4 left-4 rounded-lg bg-white shadow-lg px-4 py-2 text-center">
              <div className="text-lg font-bold" style={{ color: '#0094FF' }}>
                2–5 Days
              </div>
              <div className="text-xs text-[#5E6B7E]">Average Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
