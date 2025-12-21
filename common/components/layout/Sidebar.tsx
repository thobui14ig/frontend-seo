'use client'
import SidebarLink from './SidebarLink'
import SidebarSection from './SidebarSection'

export default function Sidebar({
  open,
  closeSidebar,
  isMobile,
}: {
  open: boolean
  closeSidebar: () => void
  isMobile: boolean
}) {

  const handleLinkClick = () => {
    if (isMobile) closeSidebar()
  }

  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gray-100 p-4 transform transition-transform
      ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <h2 className="font-bold mb-4 text-lg">Dịch vụ</h2>
      <SidebarLink href="/" label="Trang chủ" onClick={handleLinkClick} />
      <SidebarSection title="Dịch vụ facebook" open={true} onToggle={() => {}}>
        <SidebarLink href="/facebook/find-post-info" label="Lấy thông tin bài viết FB" onClick={handleLinkClick} />
        <SidebarLink href="/facebook/find-comment-post" label="Lấy comment bài viết FB" onClick={handleLinkClick} />
      </SidebarSection>
        <SidebarSection title="Blog" open={true} onToggle={() => {}}>
        <SidebarLink href="/blog/cach-cao-comment-facebook" label="Cách cào comment facebook" onClick={handleLinkClick} />
        <SidebarLink href="/blog/cach-lay-id-bai-viet-facebook" label="Cách lấy id bài viết facebook" onClick={handleLinkClick} />
        <SidebarLink href="/blog/lay-thong-tin-bai-viet-facebook" label="Cách lấy thông tin bài viết facebook" onClick={handleLinkClick} />
        <SidebarLink href="/blog/tool-cao-comment-facebook" label="Tool cào comment facebook" onClick={handleLinkClick} />
      </SidebarSection>

      {isMobile && (
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded mt-4">
          Đăng xuất
        </button>
      )}
    </aside>
  )
}
