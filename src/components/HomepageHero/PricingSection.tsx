'use client'

export default function PricingSection() {
  const plans = [
    {
      name: 'Docs on Call',
      price: '2,999',
      tagline: 'Perfect for DIY travelers who need expert guidance',
      popular: false,
      features: [
        'Form filling assistance',
        'Document checklist',
        'Phone & chat support',
        'Application review',
        'Embassy appointment booking',
      ],
      cta: 'Choose Docs on Call',
    },
    {
      name: 'Docs on Door',
      price: '4,999',
      tagline: 'Complete service with document pickup and delivery',
      popular: true,
      features: [
        'Everything in Docs on Call',
        'Free document pickup',
        'Document verification',
        'Priority support',
        'Application submission',
        'Status updates via WhatsApp',
      ],
      cta: 'Get Docs on Door',
    },
    {
      name: 'Visa at Door',
      price: '7,999',
      tagline: 'Premium end-to-end visa processing service',
      popular: false,
      features: [
        'Everything in Docs on Door',
        'Visa delivery to doorstep',
        'Express processing',
        'Dedicated visa expert',
        'Interview preparation (if required)',
        '100% money-back guarantee',
      ],
      cta: 'Book Visa at Door',
    },
  ]

  return (
    <section style={{ padding: '80px 24px' }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: 42,
          fontWeight: 700,
          textAlign: 'center',
          color: '#1E2A37',
          marginBottom: 8,
        }}
      >
        Simple,&nbsp;Transparent&nbsp;
        <span style={{ color: '#00AEEF' }}>Pricing</span>
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
        Choose the plan that best fits your needs.&nbsp;All plans include our
        guarantee of expert service.
      </p>

      {/* Cards grid */}
      <div className="price-grid">
        {plans.map(plan => (
          <div
            key={plan.name}
            className="card"
            style={
              plan.popular
                ? { border: '2px solid #00AEEF', position: 'relative' }
                : {}
            }
          >
            {plan.popular && (
              <span className="popular-badge">★&nbsp;Most&nbsp;Popular</span>
            )}

            <h3>{plan.name}</h3>

            <div className="price">
              ₹<span>{plan.price}</span>
              <small>/application</small>
            </div>

            <p className="tagline">{plan.tagline}</p>

            <ul className="features">
              {plan.features.map(f => (
                <li key={f}>
                  ✓&nbsp;&nbsp;<span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="cta">{plan.cta}</button>
          </div>
        ))}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .price-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .price-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 48px 36px 40px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(31, 65, 114, 0.06);
          transition: transform 0.25s;
        }
        .card:hover {
          transform: translateY(-6px);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #00aeef;
          color: #ffffff;
          padding: 6px 18px;
          border-radius: 9999px;
          font: 600 14px/1 'Inter', sans-serif;
        }

        h3 {
          margin: 0 0 24px;
          font: 700 22px/1.3 'Inter', sans-serif;
          color: #1e2a37;
        }

        .price {
          font: 28px/1 'Inter', sans-serif;
          color: #0094ff;
          margin-bottom: 6px;
        }
        .price span {
          font-size: 36px;
          font-weight: 700;
        }
        .price small {
          font: 400 16px/1.3 'Inter', sans-serif;
          color: #6b7280;
        }

        .tagline {
          font: 15px/1.5 'Inter', sans-serif;
          color: #6b7280;
          margin: 0 0 24px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          text-align: left;
        }
        .features li {
          font: 15px/1.6 'Inter', sans-serif;
          color: #1e2a37;
          margin-bottom: 10px;
        }
        .features li span {
          color: #6b7280;
        }

        .cta {
          width: 100%;
          border-radius: 9999px;
          padding: 14px 0;
          font: 600 16px/1 'Inter', sans-serif;
          border: 2px solid #00aeef;
          color: #00aeef;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cta:hover {
          background: linear-gradient(90deg, #00aeef 0%, #4fa4f3 100%);
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}
