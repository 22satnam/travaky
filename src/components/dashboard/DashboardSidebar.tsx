// 'use client'

// import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
// import { useState } from 'react'
// import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'
// import { userSections } from '@/config/dashboardSections'
// import { adminSections } from '@/config/adminSections'
// import { useAuth } from '@/context/AuthContext'

// interface DashboardSidebarProps { customEntries?: typeof AdminSection[] }

// export default function DashboardSidebar({ customEntries }:DashboardSidebarProps) {
//   const { session } = useAuth()
//   const items = customEntries ?? (session?.role === 'admin' ? adminSections : userSections)
//   const [open, setOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <Sidebar open={open} setOpen={setOpen}>
//       <SidebarBody className="justify-between gap-10">
//         <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//           <div className="mt-8 flex flex-col gap-2">
//             {items.map(item => (
//               <SidebarLink
//                 key={item.key}
//                 link={{...item, href: item.path}}
//                 className={cn(
//                   pathname.startsWith(item.path) && 'font-semibold text-primary'
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </SidebarBody>
//     </Sidebar>
//   )
// }


'use client'

import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { userSections } from '@/config/dashboardSections'
import { adminSections } from '@/config/adminSections'
import { useAuth } from '@/context/AuthContext'

/**
 * Permanently open desktop sidebar (no width animation) to stop the rapid
 * open–close flicker that was happening every time the cursor crossed the edge.
 */
export default function DashboardSidebar({ customEntries }: { customEntries?: typeof adminSections }) {
  const { session } = useAuth()
  const items     = customEntries ?? (session?.role === 'admin' ? adminSections : userSections)
  const pathname  = usePathname()

  return (
    <Sidebar open animate={false}>
      <SidebarBody className="justify-between gap-10">
        <nav className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden mt-8 gap-2">
          {items.map(item => (
            <SidebarLink
              key={item.key}
              link={{ ...item, href: item.path }}
              className={cn(pathname.startsWith(item.path) && 'font-semibold text-primary')}
            />
          ))}
        </nav>
      </SidebarBody>
    </Sidebar>
  )
}
