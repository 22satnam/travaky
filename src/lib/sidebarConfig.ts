import { Book, FileText, FileStack, Settings, Users } from 'lucide-react'

export const userSections = [
  { key:'bookings',   label:'Bookings',   icon:<Book size={18}/>     , path:'/dashboard/bookings'  },
  { key:'invoices',   label:'Invoices',   icon:<FileText size={18}/> , path:'/dashboard/invoices'  },
  { key:'documents',  label:'Documents',  icon:<FileStack size={18}/>, path:'/dashboard/documents' },
]

export const adminSections = [
  { key:'all-bookings',  label:'All Bookings',  icon:<Book size={18}/>    , path:'/admin/bookings'  },
  { key:'all-invoices',  label:'All Invoices',  icon:<FileText size={18}/>, path:'/admin/invoices'  },
  { key:'users',         label:'Users',         icon:<Users size={18}/>   , path:'/admin/users'     },
  { key:'settings',      label:'Settings',      icon:<Settings size={18}/>, path:'/admin/settings' , disabled:true },
]
