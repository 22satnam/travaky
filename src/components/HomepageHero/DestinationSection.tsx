'use client'

import { useMemo, useState, useRef, ChangeEvent } from 'react'
import { Search } from 'lucide-react'
import { countryData } from '@/data/countries'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import {cn} from '@/lib/utils'

export default function DestinationSection() {
  /* ── auth / routing  ────────────────────────── */
  const { session } = useAuth()
  const router      = useRouter()

  /* ── search + show-more state ───────────────── */
  const [query,   setQuery]   = useState('')
  const [showAll, setShowAll] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  /* ── filter + slice countries ───────────────── */
  const visible = useMemo(() => {
    const pool = countryData.map(c => ({
      ...c,
      backgroundPhoto: c.backgroundPhoto || '/images/default-country.jpg',
    }))

    const filtered = pool.filter(c =>
      c.countryName.toLowerCase().includes(query.toLowerCase()),
    )

    return showAll ? filtered : filtered.slice(0, 8)
  }, [query, showAll])

  /* ── click handler keeps your redirect logic ─ */
  const handle = (href: string) => {
    if (session) router.push(href)
    else toast('Please log in first')
  }

  /* ── UI ─────────────────────────────────────── */
  return (
    <section style={{ padding: '60px 24px' }}>
      {/* heading */}
      <h2
        style={{
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.2,
          textAlign: 'center',
          color: '#1E2A37',
          marginBottom: 8,
        }}
      >
        Choose&nbsp;Your&nbsp;
        <span style={{ color: '#00AEEF' }}>Destination</span>
      </h2>

      {/* sub-heading */}
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.5,
          maxWidth: 620,
          color: '#6B7280',
          textAlign: 'center',
          margin: '0 auto 40px',
        }}
      >
        Select from our most popular visa destinations or search for your
        specific country.
      </p>

      <QuickStats />



      {/* search bar */}
      <div style={{ maxWidth: 500, margin: '0 auto 48px', position: 'relative' }}>
        <input
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Search for a country…"
          style={{
            width: '100%',
            padding: '14px 48px 14px 44px',
            border: '1px solid #E5E7EB',
            borderRadius: 9999,
            fontSize: 16,
            outline: 'none',
          }}
        />
        <Search
          size={20}
          style={{ position: 'absolute', top: 14, left: 16, color: '#9CA3AF' }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{
              position: 'absolute',
              right: 20,
              top: 14,
              fontSize: 14,
              color: '#6B7280',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* card grid */}
      <div ref={listRef} className="country-grid">
        {visible.map(c => (
          <button
            key={c.buttonLink}
            onClick={() => handle(c.buttonLink)}
            className="card"
          >
            <div className="card-img">
              <img src={c.backgroundPhoto} alt={c.countryName} />
            </div>
            <div className="card-body">
              <h3>{c.countryName}</h3>
              <p>
                Get visa by {c.visaVariable} · {c.cost}
              </p>
            </div>
            <div className="card-btn">Apply&nbsp;Now</div>
          </button>
        ))}
      </div>

      {/* show-more / less */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <button
          onClick={() => {
            setShowAll(!showAll)
            if (!showAll && listRef.current)
              listRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#00AEEF',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>

      {/*  ✅  all the CSS lives right here  */}
      <style jsx>{`
        /* responsive 1-/2-/3-/4-column grid */
        .country-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .country-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 880px) {
          .country-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1120px) {
          .country-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* card container */
        .card {
          border: 1px solid #e0f2ff;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 10px rgba(31, 65, 114, 0.05);
          overflow: hidden;
          transition: transform 0.25s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-4px);
        }

        /* image */
        .card-img {
          height: 160px;
          overflow: hidden;
        }
        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .card:hover .card-img img {
          transform: scale(1.05);
        }

        /* body text */
        .card-body {
          padding: 18px;
        }
        .card-body h3 {
          margin: 0 0 4px;
          font: 700 18px/1.3 'Inter', sans-serif;
          color: #1e2a37;
        }
        .card-body p {
          margin: 0;
          font: 14px/1.4 'Inter', sans-serif;
          color: #6b7280;
        }

        /* button */
        .card-btn {
          margin: 0 18px 18px;
          padding: 12px 0;
          font: 600 14px/1 'Inter', sans-serif;
          text-align: center;
          border-radius: 8px;
          border: 2px solid #00aeef;
          color: #00aeef;
          background: #ffffff;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .card-btn:hover {
          background: linear-gradient(90deg, #00aeef 0%, #4fa4f3 100%);
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}

function QuickStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
      <StatCard label="Get your visa journey start" value="10 mins" className="bg-blue-500/10" />
      <StatCard label="Get appointment slot" value="15 mins" className="bg-teal-500/10" />
      <StatCard label="Onboard process" value="5 mins" className="bg-green-500/10" labelClass="text-green-500" />
    </div>
  );
}

function StatCard({ label, value, className, labelClass }: { label: string; value: string; className?: string; labelClass?: string; }) {
  return (
    <div className={cn("rounded-lg p-4", className)}>
      <h3 className={cn("font-bold text-lg", labelClass)}>{label}</h3>
      <p className="text-2xl font-bold text-blue-500">{value}</p>
    </div>
  );
}
