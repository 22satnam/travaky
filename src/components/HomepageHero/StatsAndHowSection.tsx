'use client'

import { FileText, Truck, Cog, Package } from 'lucide-react'

/* ===== 1)  Stats Banner ===== */
export function StatsBanner() {
  const stats = [
    { value: '10,000+', label: 'Visas Processed' },
    { value: '99%',     label: 'Approval Rate'   },
    { value: '20+',     label: 'Cities Coverage' },
    { value: '24/7',    label: 'Customer Support' },
  ]

  return (
    <section style={{ padding: '60px 24px' }}>
      <div className="stats-wrap">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* — inline styles — */}
      <style jsx>{`
        .stats-wrap {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          background: #f6fbfe;
          border-radius: 20px;
          padding: 40px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .stat-item {
          flex: 1 1 0;
          text-align: center;
        }
        .stat-value {
          font: 700 32px/1 'Inter', sans-serif;
          color: #0094ff;
          margin-bottom: 4px;
        }
        .stat-label {
          font: 16px/1.4 'Inter', sans-serif;
          color: #6b7280;
        }
        @media (max-width: 768px) {
          .stats-wrap {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

/* ===== 2)  How-It-Works Section ===== */
export default function HowItWorksSections1() {
  const steps = [
    {
      title: 'Apply',
      text:  'Fill our smart form once with your details. Our AI guides you through every field.',
      color: '#3B82F6',
      icon:  FileText,
    },
    {
      title: 'Pickup',
      text:  'We collect your documents from your doorstep at a convenient time for you.',
      color: '#8B5CF6',
      icon:  Truck,
    },
    {
      title: 'Processing',
      text:  'Our experts review everything, book appointments, and submit your application.',
      color: '#10B981',
      icon:  Cog,
    },
    {
      title: 'Delivery',
      text:  'Receive your approved visa delivered safely back to your location.',
      color: '#F97316',
      icon:  Package,
    },
  ]

  return (
    <section style={{ padding: '80px 24px' }}>
      {/* heading */}
      <h2
        style={{
          fontSize: 42,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 8,
          color: '#1E2A37',
        }}
      >
        How&nbsp;It&nbsp;<span style={{ color: '#00AEEF' }}>Works</span>
      </h2>

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
        Get your visa in just 4 simple steps. We handle all the complexity while
        you focus on planning your trip.
      </p>

      {/* steps grid */}
      <div className="steps-grid">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={s.title} className="step-card">
              {/* coloured circle icon */}
              <div
                className="circle"
                style={{ background: s.color + '20' /* 12% tint */ }}
              >
                <Icon size={30} color="#FFFFFF" strokeWidth={2} />
              </div>

              {/* number badge */}
              <span
                className="badge"
                style={{ background: '#00AEEF' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* copy */}
              <h3>{s.title}</h3>
              <p>{s.text}</p>

              {/* right-facing arrow except last card */}
              {i < steps.length - 1 && <span className="arrow">➜</span>}
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <button
          style={{
            border: 'none',
            padding: '14px 38px',
            font: '600 16px/1 Inter, sans-serif',
            borderRadius: 9999,
            color: '#FFFFFF',
            background: 'linear-gradient(90deg,#00AEEF 0%,#4FA4F3 100%)',
            cursor: 'pointer',
          }}
        >
          Start Your Application&nbsp;➜
        </button>
      </div>

      {/* — inline styles — */}
      <style jsx>{`
        .steps-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 880px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .step-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e0f2ff;
          border-radius: 20px;
          padding: 56px 32px 40px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(31, 65, 114, 0.05);
        }

        .circle {
          width: 88px;
          height: 88px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
        }

        .badge {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font: 700 14px/1 'Inter', sans-serif;
          color: #ffffff;
        }

        h3 {
          margin: 0 0 12px;
          font: 700 20px/1.3 'Inter', sans-serif;
          color: #1e2a37;
        }
        p {
          margin: 0;
          font: 15px/1.6 'Inter', sans-serif;
          color: #6b7280;
        }

        .arrow {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          font: 700 24px/1 'Inter', sans-serif;
          color: #00aeef;
        }
        /* hide arrow on mobile where cards stack */
        @media (max-width: 879px) {
          .arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
