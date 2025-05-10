'use client'
import useSWR from 'swr'
import DataTable from '@/components/ui/table/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Loader2, FileDown } from 'lucide-react'
import { useRealtime } from '@/hooks/useRealtime'

type Inv = { id:number; pdf_url:string; amount:number; issued_at:string; status:string }

const fetcher = (u:string)=>fetch(u).then(r=>r.json())

export default function AdminInvoices() {
  const { data, error, mutate } = useSWR('/api/invoices', fetcher)
  useRealtime('invoices', mutate)

  if (!data && !error) return <Loader />
  if (error)           return <Error msg={error.message} />

  const rows:Inv[] = data.data
  const cols:ColumnDef<Inv>[] = [
    { header:'ID',    accessorKey:'id' },
    { header:'Issued',accessorKey:'issued_at',
      cell:({row})=>new Date(row.original.issued_at).toLocaleDateString() },
    { header:'Amount',accessorKey:'amount',
      cell:({row})=>`₹ ${row.original.amount.toLocaleString()}` },
    { header:'Status',accessorKey:'status' },
    { header:'PDF',   cell:({row})=>(
        <a href={row.original.pdf_url} target="_blank" className="underline flex items-center gap-1">
          <FileDown size={16}/> Download
        </a>
      )},
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">All Invoices (live)</h1>
      <DataTable data={rows} columns={cols}/>
    </>
  )
}

const Loader = ()=>(
  <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
)
const Error = ({msg}:{msg:string})=>(
  <p className="text-red-600 text-center py-10">{msg}</p>
)
