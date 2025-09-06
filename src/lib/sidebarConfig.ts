import { Book, FileText, FileStack, Settings, Users, LucideIcon } from 'lucide-react'

export const userSections = [
  { key:'bookings',   label:'Bookings',   icon: Book     , path:'/dashboard/bookings'  },
  { key:'invoices',   label:'Invoices',   icon: FileText , path:'/dashboard/invoices'  },
  { key:'documents',  label:'Documents',  icon: FileStack, path:'/dashboard/documents' },
]

export const adminSections = [
  { key:'all-bookings',  label:'All Bookings',  icon: Book    , path:'/admin/bookings'  },
  { key:'all-invoices',  label:'All Invoices',  icon: FileText, path:'/admin/invoices'  },
  { key:'users',         label:'Users',         icon: Users   , path:'/admin/users'     },
  { key:'settings',      label:'Settings',      icon: Settings, path:'/admin/settings' , disabled:true },
]
