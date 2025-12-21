// components/ui/GenericTable.tsx
'use client'

import { flexRender, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Spin } from 'antd'

interface GenericTableProps<T> {
  table: ReturnType<typeof useReactTable<T>>
  minWidth?: number
  maxHeight?: number
}

export function GenericTable<T>({ table, minWidth = 800, maxHeight = 500 }: GenericTableProps<T>) {
  return (
    <div
      className="overflow-x-auto rounded-lg"
      style={{ maxHeight, overflowY: 'auto' }}
    >
      <Table className={`min-w-[${minWidth}]`}>
        <TableHeader>
          {table.getHeaderGroups().map(hg => (
            <TableRow key={hg.id}>
              {hg.headers.map(header => {
                const width = (header.column.columnDef).size // lấy width nếu có
                return (
                  <TableHead
                    key={header.id}
                    className="sticky top-0 bg-gray-100 z-10"
                    style={{ width }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className="text-center p-4 text-gray-500">
                <Spin />
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const width = (cell.column.columnDef).size
                  return (
                    <TableCell key={cell.id} style={{ width }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
