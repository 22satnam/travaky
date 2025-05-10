// // import { Suspense } from 'react'
// // import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

// // export default function DashboardLayout({ children }:{ children: React.ReactNode }) {
// //   return (
// //     <div className="flex h-[calc(100vh-3.5rem)]"> {/* 3.5rem = navbar height */}
// //       <DashboardSidebar />
// //       <main className="flex-1 overflow-y-auto bg-background p-6">
// //         <Suspense fallback={<p className="p-6">Loading…</p>}>
// //           {children}
// //         </Suspense>
// //       </main>
// //     </div>
// //   )
// // }


// import DashboardLayout from "@/components/dashboard/DashboardLayout"

// export const metadata = { title: "Dashboard • Travaky" }

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <DashboardLayout>{children}</DashboardLayout>
// }


/* dashboard tree wrapper – mounts the sidebar once */
import { Sidebar } from "@/components/ui/sidebar"

export const metadata = { title: "Dashboard • Travaky" }

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-muted/40 p-6">{children}</main>
    </div>
  )
}
