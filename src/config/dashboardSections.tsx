import { Book, FileText } from 'lucide-react'
import React from 'react'

export const userSections = [
  {
    key : 'bookings',
    label: 'Bookings',
    path : '/dashboard/bookings',
    icon : <Book className="h-5 w-5" />
  },
  {
    key : 'invoices',
    label: 'Invoices',
    path : '/dashboard/invoices',
    icon : <FileText className="h-5 w-5" />
  },
  // add more user sections here
]

export const adminSections = [
  { ...userSections[0], path: '/admin/bookings', label: 'All Bookings' },
  { ...userSections[1], path: '/admin/invoices', label: 'All Invoices' },
  // { key:'users', label:'Users', ... }
]
