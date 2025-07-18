// // tailwind.config.ts
// import type { Config } from 'tailwindcss'
// import typography from '@tailwindcss/typography'

// const config: Config = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/styles/index.css',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [typography],
// }
// export default config

// tailwind.config.js (ESM)
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/styles/index.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
}
