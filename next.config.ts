// // import createWithNextra from 'nextra'

// // const withNextra = createWithNextra({
// //   defaultShowCopyCode: true,
// //   unstable_shouldAddLocaleToLinks: true,
// // })


// // /**
// //  * @type {import("next").NextConfig}
// //  */
// // export default withNextra({
// //   images: {
// //     unoptimized: true,
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// //   reactStrictMode: true,
// //   cleanDistDir: true,
// //   // i18n: {
// //   //   locales: ['zh', 'en'],
// //   //   defaultLocale: 'en',
// //   // },
// //   sassOptions: {
// //     silenceDeprecations: ['legacy-js-api'],
// //   },
// // })
// import createWithNextra from 'nextra'

// const withNextra = createWithNextra({
//   defaultShowCopyCode: true,
//   unstable_shouldAddLocaleToLinks: true,
// })

// /**
//  * @type {import("next").NextConfig}
//  */
// const nextConfig = {
//   images: {
//     unoptimized: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
//   cleanDistDir: true,
//   sassOptions: {
//     silenceDeprecations: ['legacy-js-api'],
//   },

//   // ✅ Here’s the important part
//   matcher: ['/visa-form/:path*', '/apply/:path*', '/confirmation/:path*'],
// }

// export default withNextra(nextConfig)
import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
})

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
}

export default withNextra(nextConfig)