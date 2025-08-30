
// // // // // // // // import type { Metadata } from 'next'
// // // // // // // // import './styles/index.css'
// // // // // // // // import ClientProviders from '@/components/ClientProviders'
// // // // // // // // import ClientLayout from '@/components/ClientLayout'
// // // // // // // // import { Toaster } from 'sonner' // ✅ Add this

// // // // // // // // export const metadata: Metadata = {
// // // // // // // //   title: 'Travaky',
// // // // // // // //   description: 'Visa on Autopilot',
// // // // // // // //   icons: '/img/favicon.svg',
// // // // // // // // }

// // // // // // // // export default function RootLayout({ children }: { children: React.ReactNode }) {
// // // // // // // //   return (
// // // // // // // //     <html lang="en" suppressHydrationWarning>
// // // // // // // //       <body>
// // // // // // // //         <ClientProviders>
// // // // // // // //           <ClientLayout>{children}</ClientLayout>
// // // // // // // //         </ClientProviders>

// // // // // // // //         {/* ✅ Sonner Toast Notification Provider */}
// // // // // // // //         <Toaster richColors position="top-center" />
// // // // // // // //       </body>
// // // // // // // //     </html>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // "use client"

// // // // // // // import { usePathname } from "next/navigation"
// // // // // // // import Navbar from "@/components/nav/Navbar"             // ✅ keep
// // // // // // // import { AuthProvider } from "@/context/AuthContext"     // ✅ new
// // // // // // // import './styles/index.css'

// // // // // // // /**
// // // // // // //  * Root layout
// // // // // // //  * - wraps everything in <AuthProvider> so useAuth() works
// // // // // // //  * - hides Navbar (and optional Footer) on /dashboard/*
// // // // // // //  */
// // // // // // // export default function RootLayout({
// // // // // // //   children,
// // // // // // // }: {
// // // // // // //   children: React.ReactNode
// // // // // // // }) {
// // // // // // //   const inDashboard = usePathname()?.startsWith("/dashboard") ?? false

// // // // // // //   return (
// // // // // // //     <html lang="en">
// // // // // // //       <body className="min-h-screen flex flex-col">
// // // // // // //         <AuthProvider>
// // // // // // //           {/* site header */}
// // // // // // //           {!inDashboard && <Navbar />}

// // // // // // //           {/* routed pages */}
// // // // // // //           <main className="flex-1 flex flex-col">{children}</main>

// // // // // // //           {/* add a footer below if/when you actually create one */}
// // // // // // //           {/* {!inDashboard && <Footer />}  */}
// // // // // // //         </AuthProvider>
// // // // // // //       </body>
// // // // // // //     </html>
// // // // // // //   )
// // // // // // // }

// // // // // "use client"

// // // // // import { usePathname } from "next/navigation"
// // // // // import Navbar from "@/components/nav/Navbar"
// // // // // import { AuthProvider } from "@/context/AuthContext"
// // // // // import { LoadingProvider } from '@/context/LoadingContext'
// // // // // import './styles/index.css'
// // // // // import './styles/index.css'
// // // // // import GlobalLoader from "@/components/ui/GlobalLoader"
// // // // // import {Footer} from '@/components/ui/footer-section'


// // // // // /*  Tailwind h-14 = 56 px  (your Navbar’s height)  */
// // // // // const NAVBAR_HEIGHT = 56

// // // // // export default function RootLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode
// // // // // }) {
// // // // //   const pathname  = usePathname()
// // // // //   const inDashboard = pathname?.startsWith("/dashboard") ?? false

// // // // //   return (
// // // // //     <html lang="en">
// // // // //       <body className="min-h-screen flex flex-col">
// // // // //         <AuthProvider>
// // // // //         <LoadingProvider>
// // // // //         <AuthProvider>

        

// // // // //           {/* site header – hidden inside dashboard */}
// // // // //           {!inDashboard && <Navbar />}

// // // // //           {/* main wrapper – adds uniform top-gap when navbar is shown */}
// // // // //           <main
// // // // //             style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
// // // // //             className="flex-1 flex flex-col"
// // // // //           >
// // // // //             {children}
// // // // //           </main>
// // // // //           <Footer />
// // // // //         </AuthProvider>
// // // // //         </LoadingProvider>
// // // // //         </AuthProvider>
// // // // //       </body>
// // // // //     </html>
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import { usePathname } from "next/navigation"
// // // // import Navbar from "@/components/nav/Navbar"
// // // // import { AuthProvider } from "@/context/AuthContext"
// // // // import { LoadingProvider } from "@/context/LoadingContext"
// // // // import "./styles/index.css"
// // // // import { Footer } from "@/components/ui/footer-section"

// // // // const NAVBAR_HEIGHT = 64 // h-16 = 64px to match Navbar

// // // // export default function RootLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode
// // // // }) {
// // // //   const pathname = usePathname()
// // // //   const inDashboard = pathname?.startsWith("/dashboard") ?? false

// // // //   return (
// // // //     <html lang="en">
// // // //       <body className="min-h-screen flex flex-col">
// // // //         <AuthProvider>
// // // //           <LoadingProvider>
// // // //             {!inDashboard && <Navbar />}
// // // //             <main
// // // //               style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
// // // //               className="flex-1 flex flex-col"
// // // //             >
// // // //               {children}
// // // //             </main>
// // // //             <Footer />
// // // //           </LoadingProvider>
// // // //         </AuthProvider>
// // // //       </body>
// // // //     </html>
// // // //   )
// // // // }



// // // "use client"

// // // import { usePathname } from "next/navigation"
// // // import Navbar from "@/components/nav/Navbar"
// // // import { AuthProvider } from "@/context/AuthContext"
// // // import { LoadingProvider } from "@/context/LoadingContext"
// // // import "./styles/index.css"
// // // import './styles/tokens-uihero.css'
// // // import GlobalLoader from "@/components/ui/GlobalLoader"
// // // import { Footer } from "@/components/ui/footer-section"

// // // const NAVBAR_HEIGHT = 64 // h-16 => 64px, matches your Navbar

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode
// // // }) {
// // //   const pathname = usePathname()
// // //   const inDashboard = pathname?.startsWith("/dashboard") ?? false

// // //   return (
// // //     <html lang="en">
// // //       <head>
// // //         {/* Exact UI-Hero font */}
// // //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// // //         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
// // //         <link
// // //           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
// // //           rel="stylesheet"
// // //         />
// // //       </head>
// // //       <body className="min-h-screen flex flex-col">
// // //         <AuthProvider>
// // //           <LoadingProvider>
// // //             {!inDashboard && <Navbar />}
// // //             <main
// // //               style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
// // //               className="flex-1 flex flex-col"
// // //             >
// // //               {children}
// // //             </main>
// // //             {/* Render your global overlay/loader (non-blocking) */}
// // //             <GlobalLoader />
// // //             <Footer />
// // //           </LoadingProvider>
// // //         </AuthProvider>
// // //       </body>
// // //     </html>
// // //   )
// // // }


// // "use client"

// // import { usePathname } from "next/navigation"
// // import Navbar from "@/components/nav/Navbar"
// // import { AuthProvider } from "@/context/AuthContext"
// // import { LoadingProvider } from "@/context/LoadingContext"
// // import GlobalLoader from "@/components/ui/GlobalLoader"
// // import ThemeLock from "./ThemeLock"

// // import "./styles/index.css"
// // import "./styles/ui-hero-animations.css" // <- add this line
// // import "./styles/ui-hero-index.css" // <- ensure this loads AFTER index.css


// // import "./styles/index.css"
// // import "./styles/ui-hero-tokens.css" // <- ensure this loads AFTER index.css

// // import { Plus_Jakarta_Sans } from "next/font/google"
// // const plusJakarta = Plus_Jakarta_Sans({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "700", "800"],
// //   display: "swap",
// //   variable: "--font-plus-jakarta",
// // })

// // /* Tailwind h-16 = 64 px : navbar visual height */
// // const NAVBAR_HEIGHT = 64

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   const pathname = usePathname()
// //   const inDashboard = pathname?.startsWith("/dashboard") ?? false

// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={`${plusJakarta.variable} font-sans min-h-screen flex flex-col`}>
// //         {/* Force light UI_Hero theme */}
// //         <ThemeLock />

// //         <AuthProvider>
// //           <LoadingProvider>
// //             {!inDashboard && <Navbar />}
// //             <main
// //               style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
// //               className="flex-1 flex flex-col"
// //             >
// //               {children}
// //             </main>
// //             <GlobalLoader />
// //           </LoadingProvider>
// //         </AuthProvider>
// //       </body>
// //     </html>
// //   )
// // }




// "use client"

// import { usePathname } from "next/navigation"
// import Navbar from "@/components/nav/Navbar"
// import { AuthProvider } from "@/context/AuthContext"
// import { LoadingProvider } from "@/context/LoadingContext"
// import GlobalLoader from "@/components/ui/GlobalLoader"

// import "./styles/index.css"
// import "./styles/ui-hero-index.css"       // <-- must come AFTER index.css
// import "./styles/ui-hero-animations.css"  // (from the previous step)
// import "./styles/ui-hero-override.css"

// import { Plus_Jakarta_Sans } from "next/font/google"
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "800"],
//   display: "swap",
//   variable: "--font-sans",
// })

// const NAVBAR_HEIGHT = 64 // h-16

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname()
//   const inDashboard = pathname?.startsWith("/dashboard") ?? false

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${plusJakarta.variable} font-sans min-h-screen flex flex-col`}>
//       >
//         <AuthProvider>
//           <LoadingProvider>
//             {!inDashboard && <Navbar />}
//             <main
//               style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
//               className="flex-1 flex flex-col"
//             >
//               {children}
//             </main>
//             <GlobalLoader />
//           </LoadingProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   )
// }


"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/nav/Navbar"
import { AuthProvider } from "@/context/AuthContext"
import  {LoadingProvider}  from "@/context/LoadingContext"
import GlobalLoader from "@/components/ui/GlobalLoader"
import ThemeLightLock from "./ThemeLightLock"
import { AuthDialogProvider } from '@/context/AuthDialogProvider'
import Footer from "@/components/ui/footer-section"
// import AuthDialogs  from "@/context/AuthDialogs"
// import { AuthProvider } from "@/context/AuthContext"
// import { LoadingProvider } from '@/context/LoadingContext'

// styles: base first, then animations/tokens
import "./styles/index.css"
import "./styles/ui-hero-animations.css"  // keep your hero utils
import "./styles/ui-hero-hard.css"
import "./styles/nav-hard.css"


import { Plus_Jakarta_Sans } from "next/font/google"
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-sans",
})

const NAVBAR_HEIGHT = 64

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const inDashboard = pathname?.startsWith("/dashboard") ?? false

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans min-h-screen flex flex-col`}>
        {/* Force LIGHT theme so ui_hero palette is used */}
        <ThemeLightLock />

        <AuthProvider>
          <LoadingProvider>
            <AuthDialogProvider>
            {!inDashboard && <Navbar />}
            <main
              // style={!inDashboard ? { paddingTop: NAVBAR_HEIGHT } : undefined}
              className="flex-1 flex flex-col"
            >
              {children}
            </main>
            <Footer />
            {/* GlobalLoader is non-blocking so page content is still interactive */}
            <GlobalLoader />
            </AuthDialogProvider>
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
