import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      /* 1.  Central colour tokens */
      colors: {
        /* 🔵  Primary Travaky blues */
        brand: {
          50:  '#F3FAFF',
          100: '#D9F0FF',
          200: '#B0E1FF',
          300: '#88D2FF',
          400: '#5FC3FF',
          500: '#00AEEF',   // ★ main logo blue
          600: '#0094FF',   // deep headline blue
        },
        /* ✅  Success tick */
        success: '#10B981',
      },

      /* 2.  Re-usable gradients */
      backgroundImage: {
        'hero-light':  'linear-gradient(90deg,#F3FAFF 0%,#FFFFFF 50%)',
        'btn-accent':  'linear-gradient(90deg,#00AEEF 0%,#4FA4F3 100%)',
      },
    },
  },
  plugins: [],
}

export default config
