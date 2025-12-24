'use client'

import {
  ChevronDown,
  Cloud,
  Globe,
  Home,
  Mail,
  Server,
  Settings,
  X
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import MobileHeader from './MobileHeader'

interface Props {
  open: boolean
  onClose: () => void
}

function Sidebar({ open, onClose }: Props) {
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
        fixed z-50 top-0 left-0 h-full w-[260px]
        bg-[#0b63b6] text-white
        transition-transform duration-300
        md:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="text-lg font-semibold">thotool.com</span>
          <button className="md:hidden" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-3 py-4 space-y-1 text-[15px]">
          <Item href='/' icon={<Home size={18} />} label="Trang chủ" />
          <div>
            <button
              onClick={() => setOpenService(!openService)}
              className="flex w-full items-center justify-between px-4 py-2 rounded-full hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Settings size={18} />
                <span>Dịch vụ facebook</span>
              </div>
              <ChevronDown
                size={16}
                className={`transition ${openService ? 'rotate-180' : ''}`}
              />
            </button>

            {openService && (
              <div className="ml-6 mt-1 space-y-1">
                <SubItem href='/facebook/find-post-info' icon={<Globe size={16} />} label="Lấy thông tin bài viết" />
                <SubItem href='/facebook/find-comment-post' icon={<Server size={16} />} label="Lấy comment bài viết" />
              </div>
            )}            
          </div>
          <div>
            <button
              onClick={() => setOpenService(!openService)}
              className="flex w-full items-center justify-between px-4 py-2 rounded-full hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Settings size={18} />
                <span>Blog</span>
              </div>
              <ChevronDown
                size={16}
                className={`transition ${openService ? 'rotate-180' : ''}`}
              />
            </button>

            {openService && (
              <div className="ml-6 mt-1 space-y-1">
                <SubItem href='/blog/cach-cao-comment-facebook' icon={<Globe size={16} />} label="Tên miền" />
                <SubItem href='/blog/cach-lay-id-bai-viet-facebook' icon={<Server size={16} />} label="Hosting" />
                <SubItem href='/blog/lay-thong-tin-bai-viet-facebook' icon={<Mail size={16} />} label="Email Server" />
                <SubItem href='/blog/tool-cao-comment-facebook' icon={<Cloud size={16} />} label="Cloud" />
              </div>
            )}            
          </div>
        </nav>
      </aside>
    </>
  )
}

function Item({
  icon,
  label,
  href
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10">
      {icon}
      <span>{label}</span>
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
    <Link href={href} className="flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 text-sm">
      {icon}
      <span>{label}</span>
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
