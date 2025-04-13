// import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'

// import type { Metadata } from 'next'
// import type { ReactNode } from 'react'

// import { CustomFooter } from '@/components/CustomFooter'
// import { useServerLocale } from '@/hooks'
// import LocaleToggle from '@/widgets/locale-toggle'
// import ThemeToggle from '@/widgets/theme-toggle'
// import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
// import { Banner, Head, Search } from 'nextra/components'
// import { getPageMap } from 'nextra/page-map'
// import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'

// import { ThemeProvider } from './_components/ThemeProvider'
// import { Header1 } from '@/components/ui/header'
// import CustomNavbar from '@/components/ui/CustomNavbar';

// import './styles/index.css'

// export const metadata = {
//   // Define your metadata here
//   // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
//   metadataBase: new URL('https://nextjs-nextra-starter-green.vercel.app'),
//   icons: '/img/favicon.svg',
// } satisfies Metadata

// const repo = 'https://github.com/pdsuwwz/nextjs-nextra-starter'

// const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
//   const { banner } = await useServerLocale(lang);
//   return (
//     <Banner storageKey="starter-banner">
//       <div className="flex justify-center items-center gap-1">
//         {banner.title}
//         {' '}
//         <a
//           className="max-sm:hidden text-warning hover:underline"
//           target="_blank"
//           href={repo}
//         >
//           {banner.more}
//         </a>
//       </div>
//     </Banner>
//   );

// }


// // const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
// //   const { t } = await useServerLocale(lang)
// //   return (
// //     <Navbar
// //       logo={(
// //         <span>{ t('systemTitle') }</span>
// //       )}
// //       logoLink={`/${lang}`}
// //       projectLink={repo}
// //     >
// //       <>
// //         <LocaleToggle className="max-md:hidden" />
// //         <ThemeToggle className="max-md:hidden" />
// //       </>

// //     </Navbar>
// //   )
// // }


// // export function CustomNavbar() {
// //   return (
// //     <div className="flex justify-center w-full max-w-7xl">
// //       <Header1 />
// //     </div>
// //   )
// // }
// interface Props {
//   children: ReactNode
//   params: Promise<{ lang: I18nLangKeys }>
// }

// export default async function RootLayout({ children, params }: Props) {
//   const { lang } = await params
//   const dictionary = await getDictionary(lang)
//   const pageMap = await getPageMap(lang)

//   const title = 'Travaky'
//   const description = 'Visa on Autopilot'

//   const { t } = await useServerLocale(lang)

//   return (
//     <html
//       // Not required, but good for SEO
//       lang={lang}
//       // Required to be set
//       // dir="ltr"
//       // Suggested by
//       dir={getDirection(lang)}
//       suppressHydrationWarning
//     >
//       <Head
//       // ... Your additional head options
//       >
//         {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
//         <meta property="og:title" content={title} />
//         <meta name="description" content={description} />
//         <meta property="og:description" content={description} />
//         <link rel="canonical" href={repo} />
//       </Head>
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           storageKey="starter-theme-provider"
//           disableTransitionOnChange
//         >
//           <Layout
//             banner={
//               <CustomBanner lang={lang} />
//             }
//                navbar={<CustomNavbar />}
           
//             lastUpdated={(
//               <LastUpdated>
//                 { t('lastUpdated') }
//               </LastUpdated>
//             )}
//             editLink={null}
//             docsRepositoryBase="https://www.google.com/"
//             footer={(
//               // <Footer className="bg-background py-5!">
//               //   <CustomFooter />
//               // </Footer>
//             )}
//             search={<Search />}
//             i18n={[
//               { locale: 'en', name: 'English' },
//               { locale: 'zn', name: 'Hindi' },
//             ]}
//             pageMap={pageMap}
//             feedback={{ content: '' }}
//           // ... Your additional layout options
//           >
//             {children}
//           </Layout>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
// layout.tsx

import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import LocaleToggle from '@/widgets/locale-toggle'
import ThemeToggle from '@/widgets/theme-toggle'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'

import { ThemeProvider } from './_components/ThemeProvider'
import { Header1 } from '@/components/ui/header'
import CustomNavbar from '@/components/ui/CustomNavbar'

import './styles/index.css'

export const metadata = {
  metadataBase: new URL('https://travaky.vercel.app'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/22satnam/travaky'

async function getCustomBanner(lang: I18nLangKeys) {
  const { t } = await useServerLocale(lang)
  const banner = t('banner') as unknown as { title: string; more: string }

  return (
    <Banner storageKey="starter-banner">
      <div className="flex justify-center items-center gap-1">
        {banner.title}{' '}
        <a
          className="max-sm:hidden text-warning hover:underline"
          target="_blank"
          href={repo}
        >
          {banner.more}
        </a>
      </div>
    </Banner>
  )
}


interface Props {
  children: ReactNode
  params: Promise<{ lang: I18nLangKeys }>
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const pageMap = await getPageMap(lang)
  const { t } = await useServerLocale(lang)

  const title = 'Travaky'
  const description = 'Visa on Autopilot'

  // 🛠️ Pre-render async components before JSX
  const customBanner = await getCustomBanner(lang)

  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={repo} />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="starter-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            banner={customBanner}
            navbar={<CustomNavbar />}
            lastUpdated={<LastUpdated>{t('lastUpdated')}</LastUpdated>}
            editLink={null}
            docsRepositoryBase={repo}
            footer={
              <Footer className="bg-background py-5!">
                <CustomFooter />
              </Footer>
            }
            search={<Search />}
            i18n={[
              { locale: 'en', name: 'English' },
              { locale: 'zn', name: 'Hindi' },
            ]}
            pageMap={pageMap}
            feedback={{ content: '' }}
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
