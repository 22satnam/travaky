/* Elegant ring with rounded caps, glow, ticks, and inner glass */
export function ElegantTimerRing({
  percent,
  size = 164,
  thickness = 12,
}: { percent: number; size?: number; thickness?: number }) {
  const p = Math.min(1, Math.max(0, percent))
  const c = size / 2
  const r = c - thickness / 2 - 2
  const C = 2 * Math.PI * r
  const dash = C * p
  const gap = C - dash

  // 12 subtle ticks (every 5 minutes on a 60-mark dial)
  const ticks = Array.from({ length: 60 }, (_, i) => i).filter(i => i % 5 === 0)

  return (
    <svg
      className="ring2"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
    >
      <defs>
        {/* classy blue gradient */}
        <linearGradient id="ring2-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="hsl(219 90% 60%)" />
          <stop offset="100%" stopColor="hsl(219 85% 48%)" />
        </linearGradient>

        {/* soft glow on the progress arc */}
        <filter id="ring2-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="g1" />
          <feMerge>
            <feMergeNode in="g1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* inner glassy fill */}
        <radialGradient id="ring2-inner" cx="45%" cy="40%" r="75%">
          <stop offset="0%"  stopColor="rgba(255,255,255,.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,.55)" />
        </radialGradient>
      </defs>

      {/* ticks */}
      <g className="ring2__ticks" transform={`rotate(-90 ${c} ${c})`}>
        {ticks.map(i => {
          const a = (i / 60) * Math.PI * 2
          const x1 = c + Math.cos(a) * (r + thickness / 2 - 1)
          const y1 = c + Math.sin(a) * (r + thickness / 2 - 1)
          const x2 = c + Math.cos(a) * (r + thickness / 2 - 7)
          const y2 = c + Math.sin(a) * (r + thickness / 2 - 7)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </g>

      {/* inner disc */}
      <circle cx={c} cy={c} r={r - thickness / 2} className="ring2__inner" />

      {/* ring track + progress (start at 12 o’clock) */}
      <g transform={`rotate(-90 ${c} ${c})`}>
        <circle
          cx={c}
          cy={c}
          r={r}
          className="ring2__track"
          strokeWidth={thickness}
        />
        <circle
          cx={c}
          cy={c}
          r={r}
          className="ring2__progress"
          stroke="url(#ring2-grad)"
          strokeDasharray={`${dash} ${gap}`}
          strokeWidth={thickness}
          filter="url(#ring2-glow)"
        />
      </g>
    </svg>
  )
}
