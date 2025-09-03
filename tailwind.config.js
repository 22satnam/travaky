// // // // // // // // tailwind.config.ts
// // // // // // // import type { Config } from 'tailwindcss'
// // // // // // // import typography from '@tailwindcss/typography'

// // // // // // // const config: Config = {
// // // // // // //   content: [
// // // // // // //     './src/**/*.{js,ts,jsx,tsx,mdx}',
// // // // // // //     './src/app/styles/index.css',
// // // // // // //   ],
// // // // // // //   theme: {
// // // // // // //     extend: {},
// // // // // // //   },
// // // // // // //   plugins: [typography],
// // // // // // // }
// // // // // // // export default config

// // // // // // // tailwind.config.js (ESM)
// // // // // // import typography from '@tailwindcss/typography'

// // // // // // /** @type {import('tailwindcss').Config} */
// // // // // // export default {
// // // // // //   content: [
// // // // // //     './src/**/*.{js,ts,jsx,tsx,mdx}',
// // // // // //     './src/app/styles/index.css',
// // // // // //   ],
// // // // // //   theme: {
// // // // // //     extend: {},
// // // // // //   },
// // // // // //   plugins: [typography],
// // // // // // }


// // // // // // tailwind.config.ts
// // // // // import type, { Config } from 'tailwindcss'

// // // // // const config = {
// // // // //   darkMode: ['class'],
// // // // //   content: [
// // // // //     './src/pages/**/*.{ts,tsx}',
// // // // //     './src/components/**/*.{ts,tsx}',
// // // // //     './src/app/**/*.{ts,tsx}',
// // // // //   ],
// // // // //   theme: {
// // // // //     extend: {
// // // // //       fontFamily: {
// // // // //         // UI-Hero uses Plus Jakarta Sans; keep exact look
// // // // //         'plus-jakarta': ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
// // // // //         // (keep your existing font families below if any)
// // // // //       },
// // // // //       // If your UI-Hero used specific radii/shadows, add them here instead of changing colors
// // // // //       borderRadius: {
// // // // //         xl: '1rem',
// // // // //         '2xl': '1.25rem',
// // // // //       },
// // // // //       boxShadow: {
// // // // //         'soft-lg': '0 10px 30px rgba(0,0,0,0.08)',
// // // // //       },
// // // // //     },
// // // // //   },
// // // // //   plugins: [require('tailwindcss-animate')],
// // // // // } satisfies Config;

// // // // // export default config


// // // // /** @type {import('tailwindcss').Config} */
// // // // module.exports = {
// // // //   darkMode: ["class"],
// // // //   content: [
// // // //     "./src/**/*.{ts,tsx,js,jsx}",
// // // //     "./components/**/*.{ts,tsx,js,jsx}",
// // // //     "./app/**/*.{ts,tsx,js,jsx}",
// // // //   ],
// // // //   theme: {
// // // //     container: {
// // // //       center: true,
// // // //       padding: "2rem",
// // // //       screens: { "2xl": "1400px" },
// // // //     },
// // // //     extend: {
// // // //       colors: {
// // // //         border: "hsl(var(--border))",
// // // //         input: "hsl(var(--input))",
// // // //         ring: "hsl(var(--ring))",
// // // //         background: "hsl(var(--background))",
// // // //         foreground: "hsl(var(--foreground))",

// // // //         primary: {
// // // //           DEFAULT: "hsl(var(--primary))",
// // // //           foreground: "hsl(var(--primary-foreground))",
// // // //           50: "hsl(var(--primary-50))",
// // // //           100: "hsl(var(--primary-100))",
// // // //           200: "hsl(var(--primary-200))",
// // // //           300: "hsl(var(--primary-300))",
// // // //           400: "hsl(var(--primary-400))",
// // // //           500: "hsl(var(--primary-500))",
// // // //           600: "hsl(var(--primary-600))",
// // // //           700: "hsl(var(--primary-700))",
// // // //           800: "hsl(var(--primary-800))",
// // // //           900: "hsl(var(--primary-900))",
// // // //         },

// // // //         secondary: {
// // // //           DEFAULT: "hsl(var(--secondary))",
// // // //           foreground: "hsl(var(--secondary-foreground))",
// // // //         },

// // // //         muted: {
// // // //           DEFAULT: "hsl(var(--muted))",
// // // //           foreground: "hsl(var(--muted-foreground))",
// // // //         },

// // // //         accent: {
// // // //           DEFAULT: "hsl(var(--accent))",
// // // //           foreground: "hsl(var(--accent-foreground))",
// // // //         },

// // // //         destructive: {
// // // //           DEFAULT: "hsl(var(--destructive))",
// // // //           foreground: "hsl(var(--destructive-foreground))",
// // // //         },

// // // //         popover: {
// // // //           DEFAULT: "hsl(var(--popover))",
// // // //           foreground: "hsl(var(--popover-foreground))",
// // // //         },

// // // //         card: {
// // // //           DEFAULT: "hsl(var(--card))",
// // // //           foreground: "hsl(var(--card-foreground))",
// // // //         },
// // // //       },
// // // //       borderRadius: {
// // // //         lg: "var(--radius)",
// // // //         md: "calc(var(--radius) - 2px)",
// // // //         sm: "calc(var(--radius) - 4px)",
// // // //       },
// // // //       boxShadow: {
// // // //         sm: "var(--shadow-sm)",
// // // //         DEFAULT: "var(--shadow-md)",
// // // //         md: "var(--shadow-md)",
// // // //         lg: "var(--shadow-lg)",
// // // //         xl: "var(--shadow-xl)",
// // // //         glow: "var(--shadow-glow)",
// // // //         stamp: "var(--shadow-stamp)",
// // // //       },
// // // //       fontFamily: {
// // // //         // Bind Tailwind's `font-sans` to the Next/font variable
// // // //         sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
// // // //       },
// // // //     },
// // // //   },
// // // //   plugins: [require("tailwindcss-animate")],
// // // // }


// // // /** @type {import('tailwindcss').Config} */
// // // module.exports = {
// // //   darkMode: ["class"],
// // //   content: [
// // //     "./src/**/*.{ts,tsx,js,jsx}",
// // //     "./components/**/*.{ts,tsx,js,jsx}",
// // //     "./app/**/*.{ts,tsx,js,jsx}",
// // //   ],
// // //   theme: {
// // //     container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
// // //     extend: {
// // //       colors: {
// // //         border: "hsl(var(--border))",
// // //         input: "hsl(var(--input))",
// // //         ring: "hsl(var(--ring))",
// // //         background: "hsl(var(--background))",
// // //         foreground: "hsl(var(--foreground))",
// // //         primary: {
// // //           DEFAULT: "hsl(var(--primary))",
// // //           foreground: "hsl(var(--primary-foreground))",
// // //           50: "hsl(var(--primary-50))",
// // //           100: "hsl(var(--primary-100))",
// // //           200: "hsl(var(--primary-200))",
// // //           300: "hsl(var(--primary-300))",
// // //           400: "hsl(var(--primary-400))",
// // //           500: "hsl(var(--primary-500))",
// // //           600: "hsl(var(--primary-600))",
// // //           700: "hsl(var(--primary-700))",
// // //           800: "hsl(var(--primary-800))",
// // //           900: "hsl(var(--primary-900))",
// // //         },
// // //         secondary: {
// // //           DEFAULT: "hsl(var(--secondary))",
// // //           foreground: "hsl(var(--secondary-foreground))",
// // //         },
// // //         muted: {
// // //           DEFAULT: "hsl(var(--muted))",
// // //           foreground: "hsl(var(--muted-foreground))",
// // //         },
// // //         accent: {
// // //           DEFAULT: "hsl(var(--accent))",
// // //           foreground: "hsl(var(--accent-foreground))",
// // //         },
// // //         destructive: {
// // //           DEFAULT: "hsl(var(--destructive))",
// // //           foreground: "hsl(var(--destructive-foreground))",
// // //         },
// // //         popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
// // //         card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
// // //       },
// // //       borderRadius: {
// // //         lg: "var(--radius)",
// // //         md: "calc(var(--radius) - 2px)",
// // //         sm: "calc(var(--radius) - 4px)",
// // //       },
// // //       boxShadow: {
// // //         sm: "var(--shadow-sm)",
// // //         DEFAULT: "var(--shadow-md)",
// // //         md: "var(--shadow-md)",
// // //         lg: "var(--shadow-lg)",
// // //         xl: "var(--shadow-xl)",
// // //         glow: "var(--shadow-glow)",
// // //         stamp: "var(--shadow-stamp)",
// // //       },
// // //       fontFamily: {
// // //         sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
// // //       },
// // //     },
// // //   },
// // //   plugins: [require("tailwindcss-animate")],
// // // }



// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   darkMode: ["class"],
// //   content: [
// //     "./src/**/*.{ts,tsx,js,jsx}",
// //     "./components/**/*.{ts,tsx,js,jsx}",
// //     "./app/**/*.{ts,tsx,js,jsx}",
// //   ],
// //   theme: {
// //     container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
// //     extend: {
// //       // We keep the color scale so classes like from-primary-50 work
// //       colors: {
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "hsl(var(--primary))",
// //           foreground: "hsl(var(--primary-foreground))",
// //           50: "hsl(var(--primary-50))",
// //           100: "hsl(var(--primary-100))",
// //           200: "hsl(var(--primary-200))",
// //           300: "hsl(var(--primary-300))",
// //           400: "hsl(var(--primary-400))",
// //           500: "hsl(var(--primary-500))",
// //           600: "hsl(var(--primary-600))",
// //           700: "hsl(var(--primary-700))",
// //           800: "hsl(var(--primary-800))",
// //           900: "hsl(var(--primary-900))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //         },
// //         muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
// //         accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
// //         destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
// //         popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
// //         card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       boxShadow: {
// //         sm: "var(--shadow-sm)",
// //         DEFAULT: "var(--shadow-md)",
// //         md: "var(--shadow-md)",
// //         lg: "var(--shadow-lg)",
// //         xl: "var(--shadow-xl)",
// //         glow: "var(--shadow-glow)",
// //         stamp: "var(--shadow-stamp)",
// //       },
// //       fontFamily: {
// //         sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
// //       },
// //     },
// //   },
// //   // No plugins array — you already load plugins using @plugin in CSS (v4 style)
// // }


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: [
//     "./src/**/*.{ts,tsx,js,jsx}",
//     "./components/**/*.{ts,tsx,js,jsx}",
//     "./app/**/*.{ts,tsx,js,jsx}",
//   ],
//   theme: {
//     container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           50: "hsl(var(--primary-50))",
//           100: "hsl(var(--primary-100))",
//           200: "hsl(var(--primary-200))",
//           300: "hsl(var(--primary-300))",
//           400: "hsl(var(--primary-400))",
//           500: "hsl(var(--primary-500))",
//           600: "hsl(var(--primary-600))",
//           700: "hsl(var(--primary-700))",
//           800: "hsl(var(--primary-800))",
//           900: "hsl(var(--primary-900))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
//         accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
//         destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
//         popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
//         card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       boxShadow: {
//         sm: "var(--shadow-sm)",
//         DEFAULT: "var(--shadow-md)",
//         md: "var(--shadow-md)",
//         lg: "var(--shadow-lg)",
//         xl: "var(--shadow-xl)",
//         glow: "var(--shadow-glow)",
//         stamp: "var(--shadow-stamp)",
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
//       },
//     },
//   },
//   // Tailwind v4: plugins can be loaded via @plugin in CSS (you already do this)
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
    boxShadow: {
        // custom names used by your CSS
        card: 'var(--shadow-card, 0 8px 24px rgba(0,0,0,0.06))',
        'card-hover': 'var(--shadow-card-hover, 0 12px 32px rgba(0,0,0,0.10))',
        primary: 'var(--shadow-primary, 0 6px 20px rgba(59,130,246,0.35))',
        glow: 'var(--shadow-glow, 0 0 0 2px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.25))',
        // if you really need these sizes too, keep them here (don’t make a second boxShadow object)
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        stamp: 'var(--shadow-stamp)',
      },
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },

      backgroundImage: {
      'gradient-primary': 'var(--gradient-primary)',
      'gradient-card': 'var(--gradient-card)',
      'gradient-hero': 'var(--gradient-hero)',
      'gradient-section': 'var(--gradient-section)',
      'gradient-hover': 'var(--gradient-hover)',
    },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        glow: "var(--shadow-glow)",
        stamp: "var(--shadow-stamp)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
      },
    },
     plugins: [require('tailwindcss-animate')],
  },
};