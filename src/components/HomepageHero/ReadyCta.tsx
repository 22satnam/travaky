'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import React from 'react'

/**
 * Ready to Get Started (UI-Hero exact)
 * - Blue gradient slab with big heading
 * - Subtitle (centered, max width)
 * - Row of 3 white pill blocks; left is the main button
 * - Guarantee line below
 */
export default function ReadyCta() {
  const slab: React.CSSProperties = {
    background: 'linear-gradient(180deg, #09B5FF 0%, #0B89BA 100%)', // exact feel from UI-hero
    borderRadius: 28,
    padding: '56px 28px',
    boxShadow: '0 16px 48px rgba(9, 142, 189, 0.25)',
    color: '#ffffff',
    textAlign: 'center',
  }

  const heading: React.CSSProperties = {
    fontWeight: 800,
    letterSpacing: '-0.5px',
    fontSize: 'clamp(34px, 5.5vw, 72px)',
    lineHeight: 1.1,
  }

  const sub: React.CSSProperties = {
    marginTop: 18,
    fontSize: 'clamp(18px, 2.2vw, 26px)',
    lineHeight: 1.5,
    color: 'rgba(255,255,255,0.92)',
    maxWidth: 1100,
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const pillBase: React.CSSProperties = {
    height: 56,
    borderRadius: 999,
    background: '#ffffff',
    boxShadow:
      '0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
  }

  const primaryBtn: React.CSSProperties = {
    ...pillBase,
    color: '#0aa8ff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 28px',
    fontWeight: 700,
    fontSize: 18,
    gap: 10,
    minWidth: 280,
  }

  const blankPill: React.CSSProperties = {
    ...pillBase,
    minWidth: 300,
  }

  const note: React.CSSProperties = {
    marginTop: 22,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
  }

  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div style={slab}>
          <h2 style={heading}>Ready to Get Started?</h2>

          <p style={sub}>
            Join thousands of travelers who&apos;ve made their visa dreams come
            true with Travaky. Start your application today and travel with
            confidence.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Primary pill button */}
            <Link
              href="/apply"
              style={primaryBtn}
              className="transition-transform hover:-translate-y-0.5"
            >
              Start Your Application
              <ArrowRight size={18} />
            </Link>

            {/* Two white pill blocks to match the screenshot exactly */}
            <div style={blankPill} />
            <div style={blankPill} />
          </div>

          <div style={note}>
            <span role="img" aria-label="idea">
              💡
            </span>{' '}
            Free consultation available • No hidden charges • 100% money-back
            guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
