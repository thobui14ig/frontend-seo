'use client'
import Link from 'next/link'

export default function SidebarLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block p-2 rounded hover:bg-gray-200"
    >
      {label}
    </Link>
  )
}
