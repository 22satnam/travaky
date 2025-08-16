// theme.config.tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Travaky</span>,
  project: {
    link: 'https://github.com/pdsuwwz/nextjs-nextra-starter',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/pdsuwwz/nextjs-nextra-starter',
  footer: {
    text: 'Travaky Visa Services',
  },
}

export default config