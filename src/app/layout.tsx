
import type { Metadata } from 'next'
import './styles/index.css'
import ClientProviders from '@/components/ClientProviders'
import ClientLayout from '@/components/ClientLayout'
import { Toaster } from 'sonner' // ✅ Add this

export const metadata: Metadata = {
  title: 'Travaky',
  description: 'Visa on Autopilot',
  icons: '/img/favicon.svg',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <ClientLayout>{children}</ClientLayout>
        </ClientProviders>

        {/* ✅ Sonner Toast Notification Provider */}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
