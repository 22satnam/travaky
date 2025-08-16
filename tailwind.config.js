// // // tailwind.config.ts
// // import type { Config } from 'tailwindcss'
// // import typography from '@tailwindcss/typography'

// // const config: Config = {
// //   content: [
// //     './src/**/*.{js,ts,jsx,tsx,mdx}',
// //     './src/app/styles/index.css',
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [typography],
// // }
// // export default config

// // tailwind.config.js (ESM)
// import typography from '@tailwindcss/typography'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/styles/index.css',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [typography],
// }


// tailwind.config.js  (ESM)
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/styles/index.css',
  ],

  theme: {
    extend: {
      /* ---------- Brand colours ---------- */
      colors: {
        brand: {
          50:  '#F3FAFF',
          100: '#D9F0FF',
          200: '#B0E1FF',
          300: '#88D2FF',
          400: '#5FC3FF',
          500: '#00AEEF',   // logo / icon blue
          600: '#0094FF',   // headline blue
        },
        success: '#10B981', // green tick
      },

      /* ---------- Re-usable gradients ---------- */
      backgroundImage: {
        'hero-light': 'linear-gradient(90deg,#F3FAFF 0%,#FFFFFF 50%)',
        'btn-accent': 'linear-gradient(90deg,#00AEEF 0%,#4FA4F3 100%)',
      },
    },
  },

  plugins: [typography],
}
