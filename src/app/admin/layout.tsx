import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import { adminSections } from '@/config/adminSections'

export default function AdminLayout({ children }:{ children:React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      <DashboardSidebar customEntries={adminSections}/>
      <main className="flex-1 overflow-y-auto bg-background p-6">
        {children}
      </main>
    </div>
  )
}
