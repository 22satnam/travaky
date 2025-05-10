'use client'
import useSWR from 'swr'
import DataTable from '@/components/ui/table/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Loader2 } from 'lucide-react'
import { useRealtime } from '@/hooks/useRealtime'

type B = { id:number; email:string; country:string; status:string; created_at:string }

const fetcher = (u:string)=>fetch(u).then(r=>r.json())

export default function AdminBookings() {
  const { data, error, mutate } = useSWR('/api/bookings', fetcher)
  useRealtime('visa_applications', mutate)

  if (!data && !error) return <Loader />
  if (error)           return <Error msg={error.message} />

  const rows:B[] = data.data
  const columns:ColumnDef<B>[] = [
    { header:'ID',      accessorKey:'id' },
    { header:'Email',   accessorKey:'email' },
    { header:'Country', accessorKey:'country' },
    { header:'Status',  accessorKey:'status' },
    { header:'Date',    accessorKey:'created_at',
      cell: ({ row })=>new Date(row.original.created_at).toLocaleDateString() },
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">All Bookings (live)</h1>
      <DataTable data={rows} columns={columns}/>
    </>
  )
}

const Loader = ()=>(
  <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
)
const Error = ({msg}:{msg:string})=>(
  <p className="text-red-600 text-center py-10">{msg}</p>
)
