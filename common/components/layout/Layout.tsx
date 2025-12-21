'use client'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <Sidebar
        open={openSidebar}
        closeSidebar={() => setOpenSidebar(false)}
        isMobile={isMobile}
      />

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
          openSidebar ? 'block' : 'hidden'
        }`}
        onClick={() => setOpenSidebar(false)}
      />  
    </>
  )
}
