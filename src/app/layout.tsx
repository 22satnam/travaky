
// import type { Metadata } from 'next'
// import './styles/index.css'
// import ClientProviders from '@/components/ClientProviders'
// import ClientLayout from '@/components/ClientLayout'
// import { Toaster } from 'sonner' // ✅ Add this

// export const metadata: Metadata = {
//   title: 'Travaky',
//   description: 'Visa on Autopilot',
//   icons: '/img/favicon.svg',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ClientProviders>
//           <ClientLayout>{children}</ClientLayout>
//         </ClientProviders>

//         {/* ✅ Sonner Toast Notification Provider */}
//         <Toaster richColors position="top-center" />
//       </body>
//     </html>
//   )
// }

"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/nav/Navbar"             // ✅ keep
import { AuthProvider } from "@/context/AuthContext"     // ✅ new
import './styles/index.css'

/**
 * Root layout
 * - wraps everything in <AuthProvider> so useAuth() works
 * - hides Navbar (and optional Footer) on /dashboard/*
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const inDashboard = usePathname()?.startsWith("/dashboard") ?? false

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          {/* site header */}
          {!inDashboard && <Navbar />}

          {/* routed pages */}
          <main className="flex-1 flex flex-col">{children}</main>

          {/* add a footer below if/when you actually create one */}
          {/* {!inDashboard && <Footer />}  */}
        </AuthProvider>
      </body>
    </html>
  )
}
