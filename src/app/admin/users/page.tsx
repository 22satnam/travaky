'use client'
import useSWR from 'swr'
import DataTable from '@/components/ui/table/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Loader2 } from 'lucide-react'

type U = { id:number; email:string; role:string; created_at:string }
const fetcher = (u:string)=>fetch(u).then(r=>r.json())

export default function UsersPage() {
  const { data, error } = useSWR('/api/admin-users', fetcher)

  if (!data && !error) return <Loader />
  if (error)           return <Error msg={error.message} />

  const rows:U[] = data.data
  const cols:ColumnDef<U>[] = [
    { header:'ID',        accessorKey:'id' },
    { header:'E-mail',    accessorKey:'email' },
    { header:'Role',      accessorKey:'role' },
    { header:'Joined',    accessorKey:'created_at',
      cell:({row})=>new Date(row.original.created_at).toLocaleDateString() },
  ]

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
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
