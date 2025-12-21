import SeoLayout from '@/common/components/layout/SeoLayout'
import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts } from '@/common/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Dịch vụ crawl comment Facebook & TikTok | ThoTool',
  description:
    'ThoTool cung cấp dịch vụ crawl comment Facebook/TikTok tốc độ cao, quản lý link hàng loạt, xuất dữ liệu tự động.',
  openGraph: {
    title: 'ThoTool – Crawl comment Facebook & TikTok',
    description:
      'Crawl comment Facebook/TikTok nhanh, ổn định, không checkpoint.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <SeoLayout>
      <main className="max-w-6xl mx-auto px-4 py-14">
        {/* HERO */}
        <section className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dịch vụ crawl comment Facebook & TikTok
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nhập link bài viết, hệ thống tự động cào comment mới nhất với tốc độ
            cực nhanh. Quản lý hàng triệu link tại dashboard riêng.
          </p>
        </section>

        {/* BLOG LIST */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Hướng dẫn & kiến thức Facebook Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    href={post.slug}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>

                <Link
                  href={post.slug}
                  className="text-blue-600 font-medium"
                >
                  Đọc chi tiết →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Cào comment Facebook & TikTok <span className="text-blue-600">nhanh – ổn định – quy mô lớn</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            ThoTool giúp bạn cào comment hàng nghìn bài viết cùng lúc, tự động cập nhật
            comment mới, không cần thao tác thủ công hay copy từng link.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">⚡ Tốc độ cao</h3>
              <p className="text-sm text-gray-600">
                Xử lý hàng triệu comment mỗi ngày, tối ưu cho chiến dịch lớn.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">🛡️ Không cần đăng nhập facebook</h3>
              <p className="text-sm text-gray-600">
                Cơ chế phân tán & delay thông minh, an toàn cho tài khoản.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">📊 Quản lý dễ dàng</h3>
              <p className="text-sm text-gray-600">
                Dashboard riêng: quản lý link, tiến trình, xuất dữ liệu CSV/Excel.
              </p>
            </div>
          </div>

          <Link
            href="/dashboard/link-manager"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
          >
            🚀 Trải nghiệm dashboard ngay
          </Link>
        </section>
      </main>
    </SeoLayout>
  )
}
