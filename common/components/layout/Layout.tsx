// app/Layout.tsx (RootLayout + Sidebar + menu items)
'use client'

import {
  BookOpen,
  ChevronDown,
  Home,
  MessageCircle,
  Search,
  X
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import MobileHeader from './MobileHeader'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

function Sidebar({ open, onClose }: SidebarProps) {
  const [openService, setOpenService] = useState(true)

  return (
    <>
      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden ${
          open ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      />

      <aside
        className={`
        fixed z-40 top-14 md:top-0 left-0
        h-[calc(100vh-56px)] md:h-full
        w-[280px]
        bg-gradient-to-b from-[#0b63b6] to-[#1e3a8a] text-white
        backdrop-blur-xl border-r border-white/10
        transition-transform duration-300 shadow-2xl
        md:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        {/* Logo & Close */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-xl font-black text-emerald-400">🚀</span>
            </div>
            <div>
              <span className="text-xl font-black block">ThoTool</span>
              <span className="text-xs opacity-75 block">FB Scraper #1</span>
            </div>
          </div>
          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/20 transition-all"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-4 py-6 space-y-1 text-sm">
          <Item
            href="/"
            icon={<Home size={20} className="text-emerald-300" />}
            label="Trang chủ"
          />

          <Item
            href="/blog"
            icon={<BookOpen size={20} className="text-blue-300" />}
            label="Blog"
          />

          <div>
            <button
              onClick={() => setOpenService(!openService)}
              className="group flex w-full items-center justify-between px-5 py-4 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-4">
                <MessageCircle
                  size={20}
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">FB Tools</span>
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openService ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openService ? 'max-h-96 mt-2' : 'max-h-0 mt-0'
              }`}
            >
              {openService && (
                <div className="ml-8 space-y-1 py-2">
                  <SubItem
                    href="/facebook/find-post-info"
                    icon={<Search size={18} className="text-blue-400" />}
                    label="Lấy ID Post"
                  />
                  <SubItem
                    href="/facebook/find-comment-post"
                    icon={
                      <MessageCircle size={18} className="text-emerald-400" />
                    }
                    label="Cào Comment"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="https://fb.quetso.com/"
            className="group flex items-center gap-3 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-5 rounded-2xl font-bold text-sm shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all backdrop-blur-sm border border-emerald-400/50"
          >
            <span className="text-lg">🚀</span>
            <span>Nâng cấp Pro</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

function Item({
  icon,
  label,
  href,
  badge,
  active = false
}: {
  icon: React.ReactNode
  label: string
  href: string
  badge?: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer 
        transition-all duration-200 backdrop-blur-sm border border-white/10
        hover:bg-white/20 hover:shadow-xl hover:-translate-x-1
        ${active ? 'bg-white/20 shadow-xl border-emerald-400/50' : ''}
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {badge && (
        <span className="ml-auto px-3 py-1 bg-emerald-500/80 text-xs font-bold rounded-full shadow-lg">
          {badge}
        </span>
      )}
    </Link>
  )
}

function SubItem({
  icon,
  label,
  href
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-all ml-2 text-sm border-r-4 border-transparent hover:border-emerald-400 hover:pl-7"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  )
}

export default function RootLayout() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      <MobileHeader onOpen={() => setOpenSidebar(true)} />
    </>
  )
}
