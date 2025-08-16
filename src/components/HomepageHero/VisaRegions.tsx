'use client'

export default function VisaRegions() {
  const cardWrap: React.CSSProperties = { textAlign: 'center' }
  const bubble: React.CSSProperties = {
    width: 88, height: 88, borderRadius: 999,
    display: 'grid', placeItems: 'center',
    background: 'linear-gradient(180deg,#e9f7ff, #f7fdff)',
    boxShadow: '0 8px 24px rgba(17,132,198,0.12), inset 0 1px 0 #fff'
  }
  const title: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 18 }
  const sub: React.CSSProperties = { color: '#7c8b9a', marginTop: 8, fontSize: 18 }

  return (
    <section className="py-16 md:py-24"
             style={{ background: 'linear-gradient(180deg,#f9fdff 0%, #ffffff 100%)' }}>
      <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* EU */}
        <div style={cardWrap}>
          <div style={bubble}><span style={{ fontSize: 22, fontWeight: 700, color: '#0aa8ff' }}>EU</span></div>
          <div style={title}>Europe (Schengen)</div>
          <div style={sub}>26 countries, single visa access</div>
        </div>

        {/* Asia Pacific */}
        <div style={cardWrap}>
          <div style={bubble}>
            <span style={{ fontSize: 26 }}>🌍</span>
          </div>
          <div style={title}>Asia Pacific</div>
          <div style={sub}>Business & tourist visas</div>
        </div>

        {/* Americas */}
        <div style={cardWrap}>
          <div style={bubble}>
            <span style={{ fontSize: 26 }}>🌎</span>
          </div>
          <div style={title}>Americas</div>
          <div style={sub}>USA, Canada & Latin America</div>
        </div>
      </div>
    </section>
  )
}
