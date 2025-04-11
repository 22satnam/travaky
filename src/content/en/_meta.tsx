import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  features: {
    type: 'page',
    title: 'Features',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  pricing: {
    title: 'Pricing',
    type: 'page',
  },
  customertesimonials: {
    title: 'Customer Testimonials',
    type: 'page',
  }
} satisfies MetaRecord
