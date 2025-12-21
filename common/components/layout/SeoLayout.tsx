import Layout from './Layout'

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Layout />
      <div className="flex-1 md:ml-64 flex flex-col">
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
