import type Zh from '@/i18n/zh'
import 'server-only'

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types

type LocaleData = {
  systemTitle: string
  banner: { title: string; more: string }
  badgeTitle: string
  featureSupport: string
  lastUpdated: string
  getStarted: string
  featureList: {
    countryName: string
    backgroundPhoto: string
    visaVariable: string
    cost: string
    buttonLink: string
  }[]
  featuresDesc: string
  faqs: { question: string; answer: string }[]
}

const dictionaries = {
  en: () => import('@/i18n/en'),
  zh: () => import('@/i18n/zh'),
} as const satisfies Record<string, () => Promise<{ default: typeof Zh }>>

// export const getDictionary = async (
//   locale: keyof typeof dictionaries,
// ): Promise<typeof Zh> => (await dictionaries[locale]()).default

// export const getDirection = (locale: keyof typeof dictionaries) => {
//   switch (locale) {
//     case 'en':
//     case 'zh':
//     default:
//       return 'ltr' as const
//   }
// }
// const dictionaries = {
//   en: () => import('@/i18n/en'),
//   zh: () => import('@/i18n/zh').then((module) => ({
//     default: {
//       ...module.default,
//       featureList: module.default.featureList.map((item) => ({
//         countryName: item.title, // Map title to countryName
//         backgroundPhoto: '', // Provide default values if missing
//         visaVariable: '',
//         cost: '',
//         buttonLink: '',
//       })),
//     },
//   })),
// } as const satisfies Record<string, () => Promise<{ default: LocaleData }>>;


export const getDictionary = async (
  locale: keyof typeof dictionaries,
): Promise<LocaleData> => (await dictionaries[locale]()).default



export const getDirection = (locale: keyof typeof dictionaries) => {
  switch (locale) {
    case 'en':
    case 'zh':
    default:
      return 'ltr' as const
  }
}