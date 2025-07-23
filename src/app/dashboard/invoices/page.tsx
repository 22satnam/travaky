// // 'use client'
// // import useSWR from 'swr'
// // import { Component as DataTable } from '@/components/ui/table/demo'
// // import { Loader2 } from 'lucide-react'

// // const fetcher = (url:string)=>fetch(url).then(r=>r.json())

// // export default function InvoicesPage() {
// //   const { data, error } = useSWR('/api/invoices', fetcher)

// //   if (!data && !error) return <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
// //   if (error)           return <p className="text-center py-10 text-red-600">{error.message||'Error'}</p>
// //   if (!data.data.length) {
// //     if (typeof window!=='undefined'){
// //       setTimeout(()=>window.location.href='/',7000)
// //     }
// //     return <p className="text-center py-10">No invoices found – redirecting…</p>
// //   }

// //   return (
// //     <>
// //       <h1 className="text-2xl font-semibold mb-4">Your Invoices</h1>
// //       <DataTable items={data.data} />
// //     </>
// //   )
// // }


// 'use client'

// import useSWR from 'swr'
// import DataTable from '@/components/ui/table/DataTable'
// import { ColumnDef } from '@tanstack/react-table'
// import { Loader2, FileDown } from 'lucide-react'
// import { useRouter } from 'next/navigation'

// type Invoice = {
//   id: number
//   pdf_url: string
//   amount: number
//   issued_at: string
//   status: string
// }

// const fetcher = (u: string) => fetch(u).then(r => r.json())

// export default function InvoicesPage() {
//   const { data, error } = useSWR('/api/invoices', fetcher)
//   const router = useRouter()

//   if (!data && !error) return (
//     <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
//   )
//   if (error) return <p className="text-red-600 text-center py-10">{error.message}</p>

//   const rows: Invoice[] = data.data || []

//   if (!rows.length) {
//     return (
//       <div className="py-20 text-center space-y-2">
//         <h2 className="text-xl font-semibold">No invoices yet</h2>
//         <p className="text-muted-foreground">Pay for a booking to receive your invoice here.</p>
//       </div>
//     )
//   }

//   const cols: ColumnDef<Invoice>[] = [
//     { header: 'Issued', accessorKey: 'issued_at' },
//     { header: 'Amount', accessorKey: 'amount',
//       cell: ({ row }) => `₹ ${row.original.amount.toLocaleString()}` },
//     { header: 'Status', accessorKey: 'status' },
//     {
//       header: 'PDF',
//       cell: ({ row }) => (
//         <a href={row.original.pdf_url} target="_blank" rel="noopener" className="underline flex items-center gap-1">
//           <FileDown size={16} /> Download
//         </a>
//       )
//     },
//   ]

//   return (
//     <>
//       <h1 className="text-2xl font-semibold mb-4">Your Invoices</h1>
//       <DataTable
//         data={rows}
//         columns={cols}
//         onRowClick={row => router.push(`/dashboard/invoices?id=${row.id}`)}
//       />
//     </>
//   )
// }

// src/app/dashboard/invoices/page.tsx

'use client'

import useSWR from 'swr'
import DataTable from '@/components/ui/table/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Loader2, FileDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Invoice = {
  id: number
  pdf_url: string
  amount: number
  issued_at: string
  status: string
}

const fetcher = (u: string) => fetch(u).then(r => r.json())

export default function InvoicesPage() {
  const { data, error } = useSWR('/api/invoices', fetcher)
  const router = useRouter()

  if (!data && !error) return (
    <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
  )
  if (error) return <p className="text-red-600 text-center py-10">{error.message}</p>

  const rows: Invoice[] = data || []

  if (!rows.length) {
    return (
      <div className="py-20 text-center space-y-2">
        <h2 className="text-xl font-semibold">No invoices yet</h2>
        <p className="text-muted-foreground">Pay for a booking to receive your invoice here.</p>
      </div>
    )
  }

  const cols: ColumnDef<Invoice>[] = [
    { header: 'Issued', accessorKey: 'issued_at' },
    { header: 'Amount', accessorKey: 'amount',
      cell: ({ row }) => `₹ ${row.original.amount.toLocaleString()}` },
    { header: 'Status', accessorKey: 'status' },
    {
      header: 'PDF',
      cell: ({ row }) => (
        <a href={row.original.pdf_url} target="_blank" rel="noopener" className="underline flex items-center gap-1">
          <FileDown size={16} /> Download
        </a>
      )
    },
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Your Invoices</h1>
      <DataTable
        data={rows}
        columns={cols}
        onRowClick={row => router.push(`/dashboard/invoices?id=${row.id}`)}
      />
    </>
  )
}

