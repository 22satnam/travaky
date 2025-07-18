// import { Book, FileText } from 'lucide-react'
// import React from 'react'

// export const userSections = [
//   {
//     key : 'bookings',
//     label: 'Bookings',
//     path : '/dashboard/bookings',
//     icon : <Book className="h-5 w-5" />
//   },
//   {
//     key : 'invoices',
//     label: 'Invoices',
//     path : '/dashboard/invoices',
//     icon : <FileText className="h-5 w-5" />
//   },
//   // add more user sections here
// ]

// export const adminSections = [
//   { ...userSections[0], path: '/admin/bookings', label: 'All Bookings' },
//   { ...userSections[1], path: '/admin/invoices', label: 'All Invoices' },
//   // { key:'users', label:'Users', ... }
// ]


import { Book, FileText, FileStack } from 'lucide-react'
import React from 'react'

/** items visible in user dashboard sidebar */
export const userSections = [
  {
    key : 'bookings',
    label: 'Bookings',
    path : '/dashboard/bookings',
    icon : <Book className="h-5 w-5" />,
  },
  {
    key : 'invoices',
    label: 'Invoices',
    path : '/dashboard/invoices',
    icon : <FileText className="h-5 w-5" />,
  },
  {
    key : 'documents',
    label: 'Documents',
    path : '/dashboard/documents',
    icon : <FileStack className="h-5 w-5" />,
  },
]

/** admin uses its own paths but re-uses the same icons */
export const adminSections = [
  { ...userSections[0], path: '/admin/bookings',  label: 'All Bookings' },
  { ...userSections[1], path: '/admin/invoices',  label: 'All Invoices' },
]  // add more when ready
