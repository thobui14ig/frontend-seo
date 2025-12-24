'use client'
import { Menu } from 'lucide-react'

export default function MobileHeader({
  onOpen
}: {
  onOpen: () => void
}) {
  return (
    <header
      className="
        md:hidden
        fixed top-0 left-0 right-0
        z-40
        flex items-center gap-3
        px-4 py-3
      "
    >
      <button onClick={onOpen}>
        <Menu size={22} />
      </button>
    </header>
  )
}
