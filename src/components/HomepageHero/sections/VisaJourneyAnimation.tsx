// 'use client'

// import { motion } from 'framer-motion'
// import { FileText, CheckCheck, CheckCircle2 } from 'lucide-react'

// const STEPS = [
//   { key: 'apply',     title: 'Apply Online',     sub: '10 minutes' },
//   { key: 'expert',    title: 'Expert Connect',   sub: '15 minutes' },
//   { key: 'pickup',    title: 'Document Pickup',  sub: '24–48 hours' },
//   { key: 'delivered', title: 'Visa Delivered',   sub: '5–7 days' },
// ] as const

// export default function VisaJourneyAnimation() {
//   return (
//     <section id="journey" className="relative not-prose py-12 sm:py-16">
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary-50/45 to-transparent dark:via-primary-900/10" />

//       <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Passport (subtle tilt, nicer lighting) */}
//         <div className="flex justify-center">
//           <motion.div
//             className="vj3-passport"
//             initial={{ y: 0, rotateZ: -3 }}
//             animate={{ y: [0, -6, 0], rotateZ: -3 }}
//             transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <div className="vj3-passport__inner">
//               <div className="vj3-icon">
//                 <FileText className="h-8 w-8 text-primary-100/90" />
//               </div>
//               <div className="vj3-title">PASSPORT</div>
//               <div className="vj3-sub">REPUBLIC OF TRAVEL</div>
//               <div className="vj3-no">No. 123456789</div>

//               <motion.div
//                 className="vj3-sticker"
//                 initial={{ rotate: 16 }}
//                 whileHover={{ rotate: 18 }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//               >
//                 <div className="vj3-sticker__title">APPROVED<br/>VISA</div>
//                 <div className="vj3-sticker__date">31.07.2025</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Approved pill */}
//         <div className="flex justify-center mt-8">
//           <div className="vj3-pill">
//             <span className="vj3-pill__icon"><CheckCheck className="h-4 w-4" /></span>
//             <span className="vj3-pill__text">Visa Approved Successfully! 🎉</span>
//           </div>
//         </div>

//         {/* Heading */}
//         <div className="mt-10 text-center">
//           <h2 className="vj3-heading">
//             Your Visa Journey <span className="gradient-text force-clip">Starts Here</span>
//           </h2>
//           <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
//             Your journey awaits — from application to approval, we handle every
//             step with precision and care.
//           </p>
//         </div>

//         {/* Curved dotted line with soft start/end caps (md+) */}
//         <div className="mt-10 hidden md:block">
//           <div className="vj3-line-wrap">
//             <svg className="vj3-line" viewBox="-60 0 1320 240" preserveAspectRatio="none" aria-hidden>
//               <defs>
//                 {/* fade mask: transparent edges, solid middle */}
//                 <linearGradient id="vj3-fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%"   stopColor="black" />
//                   <stop offset="6%"   stopColor="white" />
//                   <stop offset="94%"  stopColor="white" />
//                   <stop offset="100%" stopColor="black" />
//                 </linearGradient>
//                 <mask id="vj3-fade">
//                   <rect x="-60" y="0" width="1320" height="240" fill="url(#vj3-fade-grad)" />
//                 </mask>
//               </defs>

//               {/* extended path so caps feel complete */}
//               <path
//                 mask="url(#vj3-fade)"
//                 className="vj3-line__path"
//                 d="
//                 M -40,160
//                 C  180,60  430,220  620,140
//                 C  800,60  1020,210 1260,120
//                 "
//               />
//             </svg>

//             {/* Dot positions aligned to the curve */}
//             {[
//               { left: '8%',  top: '66%'  }, // 1
//               { left: '36%', top: '55%'  }, // 2
//               { left: '64%', top: '44%'  }, // 3
//               { left: '92%', top: '58%'  }, // 4
//             ].map((pos, i) => (
//               <div
//                 key={`dot-${i}`}
//                 className={`vj3-dot ${i === 3 ? 'vj3-dot--success' : ''}`}
//                 style={pos}
//               >
//                 {i === 3 ? <CheckCircle2 className="h-6 w-6" /> : <span className="vj3-num">{i + 1}</span>}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Step text (bold title + small subtitle) */}
//         <div className="mt-8 md:mt-4 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
//           {STEPS.map(({ key, title, sub }, i) => (
//             <div key={key} className="text-center px-4">
//               {/* a small dot appears above cards on mobile */}
//               <div className="md:hidden mb-3">
//                 <div className={`vj3-dot ${i === 3 ? 'vj3-dot--success' : ''}`}>
//                   {i === 3 ? <CheckCircle2 className="h-6 w-6" /> : <span className="vj3-num">{i + 1}</span>}
//                 </div>
//               </div>
//               <div className="text-2xl font-extrabold tracking-tight text-foreground/95">{title}</div>
//               <div className="mt-2 text-muted-foreground">{sub}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCheck, CheckCircle2 } from 'lucide-react'

type IconGif = { src: string; alt: string }

/** 👇 Update these paths if your filenames differ */
const ICON_GIFS: IconGif[] = [
  { src: '/gif/apply.gif',     alt: 'Apply Online' },
  { src: '/gif/expert.gif',    alt: 'Expert Connect' },
  { src: '/gif/pickup.gif',    alt: 'Document Pickup' },
  { src: '/gif/delivered.gif', alt: 'Visa Delivered' },
]

const STEPS = [
  { key: 'apply',     title: 'Apply Online',     sub: '10 minutes' },
  { key: 'expert',    title: 'Expert Connect',   sub: '15 minutes' },
  { key: 'pickup',    title: 'Document Pickup',  sub: '24–48 hours' },
  { key: 'delivered', title: 'Visa Delivered',   sub: '5–7 days' },
] as const

export default function VisaJourneyAnimation() {
  return (
    <section id="journey" className="relative not-prose py-12 sm:py-16">
      {/* soft bluish tint to match ui_hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary-50/45 to-transparent dark:via-primary-900/10" />

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Heading */}
        <div className="mt-10 text-center">
          <h2 className="vj3-heading">
            Your Visa Journey <span className="gradient-text force-clip">Starts Here</span>
          </h2>
          <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
            Your journey awaits — from application to approval, we handle every
            step with precision and care.
          </p>
        </div>

        {/* Curved dotted line (with soft fade caps) + GIF icons (md+) */}
        <div className="mt-10 hidden md:block">
          <div className="vj3-line-wrap">
            <svg className="vj3-line" viewBox="-60 0 1320 240" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="vj3-fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="black" />
                  <stop offset="6%"   stopColor="white" />
                  <stop offset="94%"  stopColor="white" />
                  <stop offset="100%" stopColor="black" />
                </linearGradient>
                <mask id="vj3-fade">
                  <rect x="-60" y="0" width="1320" height="240" fill="url(#vj3-fade-grad)" />
                </mask>
              </defs>

              <path
                mask="url(#vj3-fade)"
                className="vj3-line__path"
                d="
                  M -40,160
                  C 180,60  430,220  620,140
                  C 800,60  1020,210 1260,120
                "
              />
            </svg>

            {/* Positions on the curve */}
            {[
              { left: '8%',  top: '66%'  }, // step 1
              { left: '36%', top: '55%'  }, // step 2
              { left: '64%', top: '44%'  }, // step 3
              { left: '92%', top: '58%'  }, // step 4
            ].map((pos, i) => {
              const gif = ICON_GIFS[i]
              const hasGif = !!gif?.src
              return (
                <div
                  key={`dot-${i}`}
                  className={`vj3-dot ${hasGif ? 'vj3-dot--img' : i === 3 ? 'vj3-dot--success' : ''}`}
                  style={pos}
                >
                  {hasGif ? (
                    <img
                      src={gif.src}
                      alt={gif.alt}
                      className="vj3-gif"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    i === 3 ? <CheckCircle2 className="h-6 w-6" /> : <span className="vj3-num">{i + 1}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step text (and small GIF dots on mobile) */}
        <div className="mt-8 md:mt-4 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {STEPS.map(({ key, title, sub }, i) => {
            const gif = ICON_GIFS[i]
            const hasGif = !!gif?.src
            return (
              <div key={key} className="text-center px-4">
                {/* Mobile: small dot above each card */}
                <div className="md:hidden mb-3">
                  <div className={`vj3-dot ${hasGif ? 'vj3-dot--img' : i === 3 ? 'vj3-dot--success' : ''}`} style={{ width: 64, height: 64 }}>
                    {hasGif ? (
                      <img
                        src={gif.src}
                        alt={gif.alt}
                        className="vj3-gif"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      i === 3 ? <CheckCircle2 className="h-6 w-6" /> : <span className="vj3-num">{i + 1}</span>
                    )}
                  </div>
                </div>

                <div className="text-2xl font-extrabold tracking-tight text-foreground/95">{title}</div>
                <div className="mt-2 text-muted-foreground">{sub}</div>
              </div>
            )
          })}
        </div>


        {/* Passport */}
        {/* <div className="flex justify-center">
          <motion.div
            className="vj3-passport"
            initial={{ y: 0, rotateZ: -3 }}
            animate={{ y: [0, -6, 0], rotateZ: -3 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="vj3-passport__inner">
              <div className="vj3-icon">
                <FileText className="h-8 w-8 text-primary-100/90" />
              </div>
              <div className="vj3-title">PASSPORT</div>
              <div className="vj3-sub">REPUBLIC OF TRAVEL</div>
              <div className="vj3-no">No. 123456789</div>

              <motion.div
                className="vj3-sticker"
                initial={{ rotate: 16 }}
                whileHover={{ rotate: 18 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="vj3-sticker__title">APPROVED<br/>VISA</div>
                <div className="vj3-sticker__date">31.07.2025</div>
              </motion.div>
            </div>
          </motion.div>
        </div> */}

        {/* Approved pill */}
        {/* <div className="flex justify-center mt-8">
          <div className="vj3-pill">
            <span className="vj3-pill__icon"><CheckCheck className="h-4 w-4" /></span>
            <span className="vj3-pill__text">Visa Approved Successfully! 🎉</span>
          </div>
        </div> */}

      </div>
    </section>
  )
}
