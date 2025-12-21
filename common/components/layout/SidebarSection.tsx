'use client'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

export default function SidebarSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string
  open: boolean
  onToggle: () => void
  children?: React.ReactNode
}) {
  return (
    <div className="mt-2">
      <button
        className="flex justify-between items-center w-full p-2 font-medium rounded hover:bg-gray-200 cursor-pointer"
        onClick={onToggle}
      >
        {title}
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </button>

      {open && <ul className="pl-4 mt-2 space-y-1">{children}</ul>}
    </div>
  )
}
