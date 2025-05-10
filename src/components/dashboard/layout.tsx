// import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar"
// import {
//   LayoutDashboard, CalendarCheck, FileText, LogOut,
// } from "lucide-react"
// import { useAuth } from "@/context/AuthContext"

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const { logout } = useAuth()

//   return (
//     <div className="flex h-screen">
//       <Sidebar>
//         <SidebarBody>
//           {/* logo / spacer */}
//           <div className="mb-6 h-8" />

//           {/* nav links */}
//           <SidebarLink link={{ label: "Dashboard", href: "/dashboard",          icon: <LayoutDashboard /> }} />
//           <SidebarLink link={{ label: "Bookings",  href: "/dashboard/bookings", icon: <CalendarCheck />   }} />
//           <SidebarLink link={{ label: "Invoices",  href: "/dashboard/invoices", icon: <FileText />       }} />
//           <SidebarLink
//             link={{
//               label: "Logout",
//               href : "/",
//               icon : <LogOut />,
//             }}
//             onClick={logout}
//           />
//         </SidebarBody>
//       </Sidebar>

//       <main className="flex-1 overflow-y-auto p-6 bg-muted/40">{children}</main>
//     </div>
//   )
// }


/* ------------------------------------------------------------------
 * Wraps every /dashboard/* page with the sidebar shell
 * ------------------------------------------------------------------ */
"use client"

import { Sidebar } from "@/components/sidebar"

export const metadata = { title: "Dashboard • Travaky" }

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-muted/40 p-6">{children}</main>
    </div>
  )
}
