import * as React from "react"

export const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <table
    className={`w-full text-sm border border-gray-200 rounded-lg shadow-sm bg-white ${className}`}
    {...props}
  />
)

export const TableHeader = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase tracking-wider text-left" {...props} />
)

export const TableBody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="divide-y divide-gray-200" {...props} />
)

export const TableRow = (props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="hover:bg-blue-50 transition-colors odd:bg-white even:bg-gray-50" {...props} />
)

export const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={`p-3 font-semibold text-left text-black border-b border-gray-300 ${className}`}
    {...props}
  />
)

export const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={`p-3 text-gray-700 border-b border-gray-200 ${className}`}
    {...props}
  />
)
