import RootLayout from "./Layout";

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <RootLayout />
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* đẩy nội dung xuống dưới mobile header */}
        <main className="flex-1 p-4 md:p-6 mt-14 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  )
}