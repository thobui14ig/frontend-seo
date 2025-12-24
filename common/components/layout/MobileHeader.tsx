// app/MobileHeader.tsx
'use client'

import { Menu } from 'lucide-react'

export default function MobileHeader({ onOpen }: { onOpen: () => void }) {
  return (
    <header
      className="
        md:hidden
        fixed top-0 left-0 right-0
        z-50
        bg-gradient-to-r from-slate-900/95 to-blue-900/95
        backdrop-blur-xl border-b border-white/10
        flex items-center gap-3
        px-4 py-4
        shadow-2xl
      "
    >
      <button
        onClick={onOpen}
        className="
          group relative p-3 rounded-2xl
          bg-white/20 hover:bg-white/30
          backdrop-blur-sm border border-white/30
          shadow-xl hover:shadow-2xl
          transition-all duration-300
          hover:scale-110 hover:-translate-y-1
          active:scale-95
        "
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 p-1">
          <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full group-hover:w-7 transition-all duration-300" />
          <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full group-hover:w-7 transition-all duration-300" />
          <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full group-hover:w-7 transition-all duration-300" />
        </div>
        <Menu size={22} className="absolute inset-0 opacity-0" />
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </button>
    </header>
  )
}
