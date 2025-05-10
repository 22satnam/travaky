// // 'use client'
// // import { useRouter } from 'next/navigation'
// // import useSWR from 'swr'
// // import { Loader2 } from 'lucide-react'
// // import DataTable from '@/components/ui/table/demo'
// // import { TableColumnDef } from '@tanstack/react-table'

// // const fetcher = (u:string)=>fetch(u).then(r=>r.json())

// // export default function BookingsPage() {
// //   const { data, error } = useSWR('/api/bookings', fetcher)
// //   const router = useRouter()

// //   if (!data && !error) return (
// //     <div className="flex justify-center py-10"><Loader2 className="animate-spin"/></div>
// //   )
// //   if (error) return <p className="text-red-600 text-center py-10">{error.message}</p>

// //   const rows = data.data || []

// //   if (!rows.length) return (
// //     <div className="py-20 text-center space-y-2">
// //       <h2 className="text-xl font-semibold">No bookings yet</h2>
// //       <p className="text-muted-foreground">Complete your first visa application to see it here.</p>
// //     </div>
// //   )

// //   /* --- columns tailored to visa_applications --- */
// //   const columns: TableColumnDef<any>[] = [
// //     { header:'Country', accessorKey:'country' },
// //     { header:'Appointment', accessorKey:'appointment_date' },
// //     { header:'Plan', accessorKey:'plan' },
// //     { header:'Status', accessorKey:'status' },
// //     { header:'Total', accessorKey:'traveler_count',
// //       cell: ({ row }) =>
// //         `₹ ${(row.original.traveler_count * row.original.total_per_person).toLocaleString()}`
// //     },
// //   ]

// //   return (
// //     <>
// //       <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>
// //       <DataTable
// //         items={rows}
// //         columns={columns}
// //         onRowClick={(row)=>router.push(`/dashboard/bookings?id=${row.id}`)}
// //       />
// //     </>
// //   )
// // }


// 'use client'

// import useSWR from 'swr'
// import DataTable from '@/components/ui/table/DataTable'
// import { ColumnDef } from '@tanstack/react-table'
// import { Loader2 } from 'lucide-react'
// import { useRouter } from 'next/navigation'

// type Booking = {
//   id: number
//   country: string
//   appointment_date: string
//   plan: string
//   status: string
//   traveler_count: number
//   total_per_person?: number
// }

// const fetcher = (u: string) => fetch(u).then(r => r.json())

// export default function BookingsPage() {
//   const { data, error } = useSWR('/api/bookings', fetcher)
//   const router = useRouter()

//   if (!data && !error) return (
//     <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
//   )
//   if (error) return <p className="text-red-600 text-center py-10">{error.message}</p>

//   const rows: Booking[] = data.data || []

//   if (!rows.length) {
//     return (
//       <div className="py-20 text-center space-y-2">
//         <h2 className="text-xl font-semibold">No bookings yet</h2>
//         <p className="text-muted-foreground">Complete your first visa application to see it here.</p>
//       </div>
//     )
//   }

//   const cols: ColumnDef<Booking>[] = [
//     { header: 'Country',          accessorKey: 'country' },
//     { header: 'Appointment',      accessorKey: 'appointment_date' },
//     { header: 'Plan',             accessorKey: 'plan' },
//     { header: 'Status',           accessorKey: 'status' },
//     { header: 'Travellers',       accessorKey: 'traveler_count' },
//   ]

//   return (
//     <>
//       <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>
//       <DataTable
//         data={rows}
//         columns={cols}
//         onRowClick={row => router.push(`/dashboard/bookings?id=${row.id}`)}
//       />
//     </>
//   )
// }


'use client'

import useSWR from 'swr'
import DataTable from '@/components/ui/table/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import BookingModal from '@/components/booking/BookingModal'

type Booking = {
  id: number
  country: string
  appointment_date: string
  plan: string
  status: string
  traveler_count: number
}

const fetcher = (u: string) => fetch(u).then(r => r.json())

export default function BookingsPage() {
  const router       = useRouter()
  const search       = useSearchParams()
  const modalId      = search.get('id')

  const { data, error, mutate } = useSWR('/api/bookings', fetcher)

  if (!data && !error) return (
    <div className="flex justify-center py-10">
      <Loader2 className="animate-spin" />
    </div>
  )
  if (error) return (
    <p className="text-red-600 text-center py-10">
      {error.message}
    </p>
  )

  const rows: Booking[] = data.data || []

  if (!rows.length) {
    return (
      <div className="py-20 text-center space-y-2">
        <h2 className="text-xl font-semibold">No bookings yet</h2>
        <p className="text-muted-foreground">
          Complete your first visa application to see it here.
        </p>
      </div>
    )
  }

  const columns: ColumnDef<Booking>[] = [
    { header: 'Country',     accessorKey: 'country' },
    { header: 'Appointment', accessorKey: 'appointment_date' },
    { header: 'Plan',        accessorKey: 'plan' },
    { header: 'Status',      accessorKey: 'status' },
    { header: 'Travellers',  accessorKey: 'traveler_count' },
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>

      <DataTable
        data={rows}
        columns={columns}
        onRowClick={row => {
          router.push(`/dashboard/bookings?id=${row.id}`)
        }}
      />

      {modalId && (
        <BookingModal
          id={modalId}
          onClose={() => {
            router.replace('/dashboard/bookings')  // remove ?id=
            mutate()                               // refresh list
          }}
        />
      )}
    </>
  )
}
