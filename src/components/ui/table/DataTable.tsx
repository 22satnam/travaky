"use client"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnDef,
  PaginationState
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Props<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  onRowClick?: (row: T) => void
}

export default function DataTable<T extends object>({
  data,
  columns,
  onRowClick,
}: Props<T>) {
  /* 1️⃣ React-managed pagination state */
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize : 10,
  })

  /* 2️⃣ Build table */
  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,       // 🚫 no custom logic here
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(hg => (
            <TableRow key={hg.id}>
              {hg.headers.map(h => (
                <TableHead key={h.id}>
                  {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(r => (
              <TableRow
                key={r.id}
                className={onRowClick ? "cursor-pointer" : ""}
                onClick={() => onRowClick?.(r.original)}
              >
                {r.getVisibleCells().map(c => (
                  <TableCell key={c.id}>
                    {flexRender(c.column.columnDef.cell, c.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* pagination controls */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft size={16} />
        </Button>

        <span className="text-sm">
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}
