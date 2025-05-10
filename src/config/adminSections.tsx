import { Book, FileText, Users } from 'lucide-react'
export const adminSections = [
  { key: 'bookings', label: 'All Bookings', path: '/admin/bookings', icon: <Book     className="h-5 w-5" /> },
  { key: 'invoices', label: 'All Invoices', path: '/admin/invoices', icon: <FileText className="h-5 w-5" /> },
  { key: 'users',    label: 'Users',        path: '/admin/users',    icon: <Users    className="h-5 w-5" /> },
]
