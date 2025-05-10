import { Suspense } from 'react'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default function DashboardLayout({ children }:{ children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)]"> {/* 3.5rem = navbar height */}
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto bg-background p-6">
        <Suspense fallback={<p className="p-6">Loading…</p>}>
          {children}
        </Suspense>
      </main>
    </div>
  )
}
