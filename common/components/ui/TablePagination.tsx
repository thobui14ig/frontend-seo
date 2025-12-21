'use client'

import { Table as ReactTableInstance } from '@tanstack/react-table'

interface TablePaginationProps<T> {
  table: ReactTableInstance<T>
}

export function TablePagination<T>({ table }: TablePaginationProps<T>) {
  return (
    <div className="flex items-center justify-between mt-4">
      {/* Navigation buttons */}
      <div className="space-x-2">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          {'<<'}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          {'<'}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          {'>'}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          {'>>'}
        </button>
      </div>

      {/* Page info */}
      <span className="text-sm px-2">
        Trang {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
      </span>

      {/* Page size select */}
      <select
        className="border px-2 py-1 rounded"
        value={table.getState().pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
      >
        {[5, 10, 20, 50].map((size) => (
          <option key={size} value={size}>
            {size} / trang
          </option>
        ))}
      </select>
    </div>
  )
}
