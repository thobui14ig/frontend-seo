// components/Header.tsx
'use client'
import { HiMenu } from 'react-icons/hi'

interface HeaderProps { 
  userName: string
  onMenuClick?: () => void
}

export default function Header({ userName, onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6 sticky top-0 z-50">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center space-x-2">
        {/* Hamburger only mobile */}
        <button
          className="md:hidden p-2 bg-blue-600 text-white rounded"
          onClick={onMenuClick}
        >
          <HiMenu size={24} />
        </button>

      </div>

      {/* Right: user + logout (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="font-medium">{userName}</span>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Đăng xuất
        </button>
      </div>
    </header>
  )
}
