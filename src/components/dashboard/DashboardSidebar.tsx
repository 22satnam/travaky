'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { userSections } from '@/config/dashboardSections'
import { adminSections } from '@/config/adminSections'
import { useAuth } from '@/context/AuthContext'

/**
 * Simple dashboard sidebar component
 */
export default function DashboardSidebar({ customEntries }: { customEntries?: typeof adminSections }) {
  const { session } = useAuth()
  const items = customEntries ?? (session?.role === 'admin' ? adminSections : userSections)
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-muted/40 border-r flex flex-col">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.key}>
              <Link
                href={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                  pathname.startsWith(item.path)
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
