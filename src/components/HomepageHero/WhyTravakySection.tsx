'use client'

import {
  ClipboardList,
  Truck,
  ShieldCheck,
  Calendar,
  Zap,
  Headphones,
} from 'lucide-react'

/* helper to map icon names to components */
const ICONS = {
  form: ClipboardList,
  pickup: Truck,
  review: ShieldCheck,
  booking: Calendar,
  fast: Zap,
  support: Headphones,
} as const

interface Feature {
  title: string
  desc: string
  icon: keyof typeof ICONS
}

/* exactly the wording shown in UI-Hero screenshot */
const features: Feature[] = [
  {
    icon: 'form',
    title: 'Easy Form Filling',
    desc: 'Smart forms that auto-populate and guide you through each step with expert recommendations.',
  },
  {
    icon: 'pickup',
    title: 'Doorstep Pickup',
    desc: 'Free document pickup from your location. No need to visit embassies or service centers.',
  },
  {
    icon: 'review',
    title: 'Expert Review',
    desc: 'Every application reviewed by visa experts to ensure maximum approval chances.',
  },
  {
    icon: 'booking',
    title: 'Appointment Booking',
    desc: 'We secure the earliest available slots and handle all embassy communications.',
  },
  {
    icon: 'fast',
    title: 'Fast Processing',
    desc: 'Track your application in real-time with priority processing and regular updates.',
  },
  {
    icon: 'support',
    title: '24/7 Support',
    desc: 'Dedicated customer-success team available round the clock for any queries.',
  },
]

export default function WhyTravakySection() {
  return (
    <section style={{ padding: '80px 24px' }}>
      {/* heading */}
      <h2
        style={{
          fontSize: 42,
          fontWeight: 700,
          textAlign: 'center',
          color: '#1E2A37',
          marginBottom: 8,
        }}
      >
        Why&nbsp;<span style={{ color: '#00AEEF' }}>Travaky?</span>
      </h2>

      {/* sub-heading */}
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.5,
          maxWidth: 640,
          color: '#6B7280',
          textAlign: 'center',
          margin: '0 auto 56px',
        }}
      >
        Experience the most comprehensive visa service that handles everything
        from application&nbsp;to&nbsp;delivery.
      </p>

      {/* grid of cards */}
      <div className="why-grid">
        {features.map(f => {
          const Icon = ICONS[f.icon]
          return (
            <div key={f.title} className="card">
              {/* icon */}
              <div className="icon-wrap">
                <Icon className="icon" size={28} strokeWidth={2.2} />
              </div>

              {/* copy */}
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          )
        })}
      </div>

      {/* ——— all CSS lives here ——— */}
      <style jsx>{`
        /* grid: 1-col mobile → 2 → 3 on desktop */
        .why-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1120px) {
          .why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* card container */
        .card {
          background: #ffffff;
          border: 1px solid #e0f2ff;
          border-radius: 20px;
          padding: 32px 28px 36px;
          text-align: left;
          box-shadow: 0 4px 10px rgba(31, 65, 114, 0.05);
          transition: transform 0.25s ease;
        }
        .card:hover {
          transform: translateY(-6px);
        }

        /* icon wrapper */
        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #e8f8ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.25s ease;
        }
        .icon {
          color: #6b7280;
          transition: color 0.25s ease;
        }
        /* hover → icon + bg turn blue */
        .card:hover .icon-wrap {
          background: #d2f0ff;
        }
        .card:hover .icon {
          color: #00aeef;
        }

        /* headings */
        .card h3 {
          margin: 0 0 8px;
          font: 700 18px/1.3 'Inter', sans-serif;
          color: #1e2a37;
        }
        .card p {
          margin: 0;
          font: 14px/1.6 'Inter', sans-serif;
          color: #6b7280;
        }
      `}</style>
    </section>
  )
}
