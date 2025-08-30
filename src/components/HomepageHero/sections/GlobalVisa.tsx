// 'use client'

// import { World } from '@/components/ui/globe'
// import { CheckCircle2, Shield, Globe2 } from 'lucide-react'
// import React from 'react'

// /** small, meaningful arcs that match our story (India ↔ Schengen/US/SEA)  */
// const arcs = [
//   // India -> Schengen hubs
//   { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 48.8566, endLng: 2.3522,  arcAlt: 0.25, color: '#1e90ff' }, // Paris
//   { order: 2, startLat: 28.6139, startLng: 77.2090, endLat: 52.5200, endLng: 13.4050, arcAlt: 0.22, color: '#0ea5e9' }, // Berlin
//   { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 41.9028, endLng: 12.4964, arcAlt: 0.24, color: '#22d3ee' }, // Rome

//   // India -> UK / US / Canada
//   { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.28, color: '#1e90ff' },
//   { order: 4, startLat: 28.6139, startLng: 77.2090, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3,  color: '#0ea5e9' },
//   { order: 5, startLat: 28.6139, startLng: 77.2090, endLat: 43.6532, endLng: -79.3832, arcAlt: 0.26, color: '#22d3ee' },

//   // India -> SEA / Gulf
//   { order: 6, startLat: 28.6139, startLng: 77.2090, endLat: 1.3521,  endLng: 103.8198, arcAlt: 0.22, color: '#1e90ff' }, // Singapore
//   { order: 7, startLat: 28.6139, startLng: 77.2090, endLat: 25.2048, endLng: 55.2708,  arcAlt: 0.18, color: '#0ea5e9' }, // Dubai
// ]

// export default function GlobalVisa() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: '#062056',          // deep Travaky blue globe
//     polygonColor: 'rgba(255,255,255,0.65)',
//     showAtmosphere: true,
//     atmosphereColor: '#9acbff',
//     atmosphereAltitude: 0.11,
//     emissive: '#03122e',
//     emissiveIntensity: 0.12,
//     shininess: 0.95,
//     ambientLight: '#5cc8ff',
//     directionalLeftLight: '#ffffff',
//     directionalTopLight: '#ffffff',
//     pointLight: '#ffffff',
//     arcTime: 1400,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   }

//   return (
//     <section id="global-visa" className="relative py-16 sm:py-20">
//       {/* Section heading kept consistent with your style */}
//       <div className="text-center mb-10 sm:mb-12">
//         <p className="text-sm font-semibold text-primary/70">Global network</p>
//         <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
//           Global Visa Services
//         </h2>
//         <p className="mt-3 text-foreground/70 max-w-3xl mx-auto">
//           We help travelers across <span className="font-semibold">150+ countries</span> —
//           doorstep pickup, expert review, and fast scheduling.
//         </p>
//       </div>

//       {/* Two column: Globe (left) + brand proof (right) */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Globe */}
//         <div className="relative rounded-3xl ring-1 ring-primary/10 bg-gradient-to-br from-primary/5 via-sky-50 to-transparent overflow-hidden shadow-[0_10px_40px_-15px_rgba(2,95,200,.35)]">
//           <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,.15),transparent_55%)]" />
//           <div className="relative h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem]">
//             <World data={arcs} globeConfig={globeConfig} />
//           </div>
//         </div>

//         {/* Right content – Schengen expertise + trust badges + CTAs */}
//         <div className="lg:pl-6">
//           <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
//             <Shield className="h-3.5 w-3.5" />
//             Schengen Specialists
//           </span>

//           <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
//             Visa on Autopilot — from India to the world
//           </h3>
//           <p className="mt-3 text-foreground/70">
//             End-to-end facilitation: expert documents, priority appointments,
//             and doorstep pickup. We’ve streamlined Schengen and global visas so
//             you focus on your trip — not the paperwork.
//           </p>

//           <ul className="mt-6 space-y-3">
//             <li className="flex items-start gap-3">
//               <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
//               <div>
//                 <p className="font-semibold">99%+ Approval-aligned documentation</p>
//                 <p className="text-sm text-foreground/70">Expert review for every application</p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
//               <div>
//                 <p className="font-semibold">Doorstep pickup in 20+ cities</p>
//                 <p className="text-sm text-foreground/70">No center visits just to submit papers</p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
//               <div>
//                 <p className="font-semibold">150+ Countries, one platform</p>
//                 <p className="text-sm text-foreground/70">Schengen, US/UK/Canada, SEA & more</p>
//               </div>
//             </li>
//           </ul>

//           {/* trust counters */}
//           <div className="mt-7 grid grid-cols-3 gap-4">
//             <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
//               <div className="text-2xl font-extrabold">99%</div>
//               <div className="text-xs text-foreground/70">Approval-aligned docs</div>
//             </div>
//             <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
//               <div className="text-2xl font-extrabold">10,000+</div>
//               <div className="text-xs text-foreground/70">Visas processed</div>
//             </div>
//             <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
//               <div className="text-2xl font-extrabold">20+</div>
//               <div className="text-xs text-foreground/70">Pickup cities</div>
//             </div>
//           </div>

//           {/* CTAs */}
//           <div className="mt-7 flex flex-wrap items-center gap-3">
//             <a
//               href="/countries"
//               className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white font-semibold shadow-[0_8px_24px_-10px_rgba(2,95,200,.55)] hover:shadow-[0_12px_30px_-10px_rgba(2,95,200,.65)] transition"
//             >
//               <Globe2 className="mr-2 h-5 w-5" />
//               Explore Countries
//             </a>
//             <a
//               href="/auth/login"
//               className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/60 dark:bg-transparent px-5 py-2.5 font-semibold text-primary hover:bg-primary/5 transition"
//             >
//               Check Eligibility
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { World } from '@/components/ui/globe'
import { CheckCircle2, Shield } from 'lucide-react'
import React from 'react'

const arcs = [
  // Schengen / UK
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 48.8566, endLng: 2.3522,   arcAlt: 0.25, color: '#1e90ff' }, // Delhi → Paris
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 52.5200, endLng: 13.4050,  arcAlt: 0.24, color: '#0ea5e9' }, // Delhi → Berlin
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 41.9028, endLng: 12.4964,  arcAlt: 0.24, color: '#22d3ee' }, // Delhi → Rome
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 45.4642, endLng: 9.1900,   arcAlt: 0.24, color: '#38bdf8' }, // Delhi → Milan
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 40.4168, endLng: -3.7038,  arcAlt: 0.23, color: '#1e90ff' }, // Delhi → Madrid
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 52.3676, endLng: 4.9041,   arcAlt: 0.23, color: '#0ea5e9' }, // Delhi → Amsterdam
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 46.2044, endLng: 6.1432,   arcAlt: 0.23, color: '#22d3ee' }, // Delhi → Geneva
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 59.3293, endLng: 18.0686,  arcAlt: 0.26, color: '#38bdf8' }, // Delhi → Stockholm
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 55.6761, endLng: 12.5683,  arcAlt: 0.26, color: '#1e90ff' }, // Delhi → Copenhagen
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 60.1699, endLng: 24.9384,  arcAlt: 0.26, color: '#0ea5e9' }, // Delhi → Helsinki
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 48.2082, endLng: 16.3738,  arcAlt: 0.23, color: '#22d3ee' }, // Delhi → Vienna
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 37.9838, endLng: 23.7275,  arcAlt: 0.25, color: '#38bdf8' }, // Delhi → Athens
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 39.9526, endLng: -75.1652, arcAlt: 0.28, color: '#1e90ff' }, // Delhi → Philadelphia (sample US alt)
  { order: 1, startLat: 28.6139, startLng: 77.2090, endLat: 51.5072, endLng: -0.1276,  arcAlt: 0.28, color: '#0ea5e9' }, // Delhi → London

  // US / Canada
  { order: 2, startLat: 28.6139, startLng: 77.2090, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.30, color: '#22d3ee' }, // Delhi → New York
  { order: 2, startLat: 28.6139, startLng: 77.2090, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.30, color: '#38bdf8' }, // Delhi → Los Angeles
  { order: 2, startLat: 28.6139, startLng: 77.2090, endLat: 43.6532, endLng: -79.3832, arcAlt: 0.29, color: '#1e90ff' }, // Delhi → Toronto
  { order: 2, startLat: 28.6139, startLng: 77.2090, endLat: 45.5019, endLng: -73.5674, arcAlt: 0.29, color: '#0ea5e9' }, // Delhi → Montreal
  { order: 2, startLat: 19.0760, startLng: 72.8777, endLat: 49.2827, endLng: -123.1207, arcAlt: 0.31, color: '#22d3ee' }, // Mumbai → Vancouver

  // Middle East
  { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 25.2048, endLng: 55.2708,  arcAlt: 0.18, color: '#38bdf8' }, // Delhi → Dubai
  { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 24.7136, endLng: 46.6753,  arcAlt: 0.18, color: '#1e90ff' }, // Delhi → Riyadh
  { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 31.9636, endLng: 35.9062,  arcAlt: 0.19, color: '#0ea5e9' }, // Delhi → Amman
  { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: 30.0444, endLng: 31.2357,  arcAlt: 0.20, color: '#22d3ee' }, // Delhi → Cairo

  // SEA / East Asia
  { order: 4, startLat: 28.6139, startLng: 77.2090, endLat: 1.3521,  endLng: 103.8198, arcAlt: 0.22, color: '#38bdf8' }, // Delhi → Singapore
  { order: 4, startLat: 28.6139, startLng: 77.2090, endLat: 3.1390,  endLng: 101.6869, arcAlt: 0.22, color: '#1e90ff' }, // Delhi → Kuala Lumpur
  { order: 4, startLat: 28.6139, startLng: 77.2090, endLat: 13.7563, endLng: 100.5018, arcAlt: 0.22, color: '#0ea5e9' }, // Delhi → Bangkok
  { order: 4, startLat: 12.9716, startLng: 77.5946, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.25, color: '#22d3ee' }, // Bengaluru → Tokyo
  { order: 4, startLat: 12.9716, startLng: 77.5946, endLat: 37.5665, endLng: 126.9780, arcAlt: 0.24, color: '#38bdf8' }, // Bengaluru → Seoul
  { order: 4, startLat: 19.0760, startLng: 72.8777, endLat: -6.2088, endLng: 106.8456, arcAlt: 0.23, color: '#1e90ff' }, // Mumbai → Jakarta
  { order: 4, startLat: 19.0760, startLng: 72.8777, endLat: 21.0285, endLng: 105.8542, arcAlt: 0.23, color: '#0ea5e9' }, // Mumbai → Hanoi

  // Oceania
  { order: 5, startLat: 28.6139, startLng: 77.2090, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.27, color: '#22d3ee' }, // Delhi → Sydney
  { order: 5, startLat: 28.6139, startLng: 77.2090, endLat: -37.8136, endLng: 144.9631, arcAlt: 0.27, color: '#38bdf8' }, // Delhi → Melbourne
  { order: 5, startLat: 28.6139, startLng: 77.2090, endLat: -36.8485, endLng: 174.7633, arcAlt: 0.30, color: '#1e90ff' }, // Delhi → Auckland

  // Africa
  { order: 6, startLat: 28.6139, startLng: 77.2090, endLat: -26.2041, endLng: 28.0473, arcAlt: 0.28, color: '#0ea5e9' }, // Delhi → Johannesburg
  { order: 6, startLat: 28.6139, startLng: 77.2090, endLat: -33.9249, endLng: 18.4241, arcAlt: 0.28, color: '#22d3ee' }, // Delhi → Cape Town
  { order: 6, startLat: 28.6139, startLng: 77.2090, endLat: -1.2921,  endLng: 36.8219,  arcAlt: 0.26, color: '#38bdf8' }, // Delhi → Nairobi

  // LATAM
  { order: 7, startLat: 28.6139, startLng: 77.2090, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.33, color: '#1e90ff' }, // Delhi → Buenos Aires
  { order: 7, startLat: 28.6139, startLng: 77.2090, endLat: -23.5505, endLng: -46.6333, arcAlt: 0.33, color: '#0ea5e9' }, // Delhi → São Paulo
  { order: 7, startLat: 28.6139, startLng: 77.2090, endLat: 19.4326,  endLng: -99.1332, arcAlt: 0.31, color: '#22d3ee' }, // Delhi → Mexico City
]

const COUNTRY_CHIPS = [
  'Schengen (EU)','United Kingdom','United States','Canada',
  'UAE','Singapore','Japan','Australia',
  'Switzerland','France','Germany','Italy','Spain','Netherlands',
]

export default function GlobalVisa() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    polygonColor: 'rgba(255,255,255,0.65)',
    showAtmosphere: true,
    atmosphereColor: '#9acbff',
    atmosphereAltitude: 0.11,
    emissive: '#03122e',
    emissiveIntensity: 0.12,
    shininess: 0.95,
    ambientLight: '#5cc8ff',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1400,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  return (
    <section id="global-visa" className="relative py-16 sm:py-20">
      {/* Removed the small “Global network” line */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Global Visa Services
        </h2>
        <p className="mt-3 text-foreground/70 max-w-3xl mx-auto">
          Built in India. Trusted worldwide. We streamline visas for{' '}
          <span className="font-semibold">150+ countries</span> with expert review,
          priority scheduling, and doorstep pickup.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Globe only */}
        <div className="relative rounded-3xl ring-1 ring-primary/10 bg-gradient-to-br from-primary/5 via-sky-50 to-transparent overflow-hidden shadow-[0_10px_40px_-15px_rgba(2,95,200,.35)]">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,.15),transparent_55%)]" />
          <div className="relative h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem]">
            <World data={arcs} globeConfig={globeConfig} />
          </div>
        </div>

        {/* Brand proof / voice */}
        <div className="lg:pl-6">
          {/* Stronger bluish “Schengen Specialists” pill */}
          <span
            aria-label="Schengen Specialists"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3.5 py-1.5 text-xs font-semibold shadow-sm ring-1 ring-blue-500/20"
          >
            <Shield className="h-3.5 w-3.5" />
            Schengen Specialists
          </span>

          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
            Visa on Autopilot — from India to the world
          </h3>
          <p className="mt-3 text-foreground/70">
            Travel-ready documents. Zero guesswork. Our team aligns your file to
            approval standards and locks slots quickly, so you can focus on the trip—
            not the paperwork.
          </p>

          {/* Countries list chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {COUNTRY_CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-primary/20 bg-white/60 dark:bg-transparent px-3 py-1 text-xs font-semibold text-primary"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Trust bullets */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-semibold">99%+ approval-aligned documentation</p>
                <p className="text-sm text-foreground/70">Expert review & quality checks</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-semibold">Doorstep pickup in 20+ cities</p>
                <p className="text-sm text-foreground/70">Courier collection & return</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
              <div>
                <p className="font-semibold">150+ countries on one platform</p>
                <p className="text-sm text-foreground/70">Schengen, US/UK/Canada, SEA & more</p>
              </div>
            </li>
          </ul>

          {/* Tiny counters */}
          <div className="mt-7 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
              <div className="text-2xl font-extrabold">99%</div>
              <div className="text-xs text-foreground/70">Approval-aligned docs</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
              <div className="text-2xl font-extrabold">10,000+</div>
              <div className="text-xs text-foreground/70">Visas processed</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/10 px-4 py-3 text-center">
              <div className="text-2xl font-extrabold">20+</div>
              <div className="text-xs text-foreground/70">Pickup cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
