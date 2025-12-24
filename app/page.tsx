import SeoLayout from '@/common/components/layout/SeoLayout'
import { blogPosts } from '@/common/lib/blogPosts'
import {
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  PlayIcon,
  ShieldCheckIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '🚀 ThoTool - Crawl Comment Facebook & TikTok #1 2025 | Siêu Tốc & An Toàn',
  description: 'Crawl comment Facebook/TikTok realtime <2s. ∞ link 24/7, dashboard pro, xuất Excel tự động. Không checkpoint, bắt lead tức thì!',
  keywords: [
    'crawl comment facebook 2025',
    'tool cào comment tiktok',
    'facebook comment scraper',
    'thotool dashboard',
    'cào comment không checkpoint'
  ],
  openGraph: {
    title: '🚀 ThoTool - #1 Crawl Comment FB/TikTok 2025',
    description: 'Siêu tốc • ∞ Link • Không checkpoint • Dashboard Pro',
    type: 'website',
    images: ['/og/thotool-home.jpg'],
  },
}

export default function Home() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Hero Section */}
          <section className="text-center mb-16 sm:mb-24 lg:mb-32">
            <div className="inline-flex items-center bg-emerald-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 font-bold text-lg shadow-2xl mx-auto">
              <StarIcon className="w-6 h-6 mr-3" />
              #1 TOOL 2025 - 25K+ USERS
            </div>
            
            <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent">
              Crawl Comment
              <br className="sm:hidden" />
              <span className="block mt-4 sm:mt-0 sm:inline">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Facebook & TikTok
                </span>
              </span>
            </h1>

            <div className="max-w-2xl mx-auto mb-12 px-4">
              <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed mb-8 text-balance">
                <strong>1 link → ∞ comment realtime</strong> • <span className="text-emerald-600 font-bold">&lt;2s độ trễ</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base text-slate-600 mb-12">
                <div className="flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-6 py-3 rounded-2xl font-semibold">
                  <ShieldCheckIcon className="w-5 h-5" />
                  An toàn
                </div>
                <div className="flex items-center gap-2 bg-blue-100/80 text-blue-800 px-6 py-3 rounded-2xl font-semibold">
                  <BoltIcon className="w-5 h-5" />
                  ∞ Hoạt động 24/24
                </div>
              </div>
            </div>

            <a
              href="https://fb.quetso.com/"
              className="block w-full max-w-md mx-auto sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-6 px-12 text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-4 mx-auto group"
            >
              <PlayIcon className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              🚀 DASHBOARD PRO NGAY
              <ArrowRightIcon className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>
          </section>

          {/* Live Stats */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-20 border border-slate-200/50 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              📊 Thống kê
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: '25K+', label: 'Users', icon: '👥' },
                { num: '5M+', label: 'Comments', icon: '💬' },
                { num: '24/24', label: 'Hoạt động', icon: '🟢' },
                { num: '<2s', label: 'Độ trễ', icon: '⚡' }
              ].map((stat, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">{stat.num}</div>
                  <div className="text-slate-600 font-semibold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Tại Sao Chọn ThoTool?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: BoltIcon,
                  title: '⚡ Độ trễ <2s',
                  desc: 'Comment mới cập nhật tức thì. Độ trễ thấp nhất thị trường.',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  icon: ShieldCheckIcon,
                  title: '🛡️ Zero Risk',
                  desc: 'Không cần login Facebook. An toàn tuyệt đối cho tài khoản.',
                  color: 'from-blue-500 to-purple-600'
                },
                {
                  icon: ChartBarIcon,
                  title: '📊 Dashboard Pro',
                  desc: 'Quản lý ∞ link, theo dõi realtime, xuất Excel 1-click.',
                  color: 'from-purple-500 to-pink-600'
                }
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-slate-200/50 bg-white/70 hover:shadow-2xl hover:-translate-y-3 transition-all backdrop-blur-sm text-center h-full">
                  <div className={`w-20 h-20 ${feature.color} bg-gradient-to-r text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all`}>
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Cards */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-500 to-green-600 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all text-center">
              <div className="text-6xl mb-8">🧪</div>
              <h3 className="text-3xl font-black mb-6 leading-tight">Demo Nhanh</h3>
              <p className="text-xl opacity-95 mb-10 leading-relaxed">Thử 1 link → Xem comment ngay</p>
              <Link href="/facebook/find-comment-post" className="inline-flex items-center gap-3 bg-white text-emerald-900 font-black py-5 px-10 text-xl rounded-2xl hover:shadow-2xl transition-all w-full max-w-sm mx-auto">
                Demo Miễn Phí
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-purple-600 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all text-center">
              <div className="text-6xl mb-8">⚡</div>
              <h3 className="text-3xl font-black mb-6 leading-tight">Dashboard Pro</h3>
              <p className="text-xl opacity-95 mb-10 leading-relaxed">∞ Chạy hàng triệu link • 24/24 • Export excel dễ dàng</p>
              <Link href="https://fb.quetso.com/" className="inline-flex items-center gap-3 bg-white text-blue-900 font-black py-5 px-10 text-xl rounded-2xl hover:shadow-2xl transition-all w-full max-w-sm mx-auto">
                Truy Cập Dashboard
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </section>

          {/* Blog Section */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              📚 Hướng Dẫn Facebook Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 6).map((post, i) => (
                <article key={post.slug} className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:shadow-2xl hover:-translate-y-3 transition-all overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-105 transition-transform"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{post.description}</p>
                  <Link 
                    href={post.slug}
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-lg group-hover:translate-x-2 transition-all"
                  >
                    Đọc chi tiết
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </article>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-4 px-12 text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all"
              >
                📖 XEM TẤT CẢ BÀI VIẾT
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-20">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-3xl mb-12 font-black text-2xl shadow-2xl">
                <UsersIcon className="w-10 h-10 mr-4" />
                25K+ sellers tăng 5x doanh số
              </div>
              <h2 className="text-4xl sm:text-6xl font-black mb-8 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                Sẵn sàng 
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  bắt đầu ngay?
                </span>
              </h2>
              <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
                Dùng thử miễn phí. Không rủi ro. Setup 2 phút!
              </p>
              <div className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 p-12 rounded-4xl shadow-3xl mb-12">
                <Link
                  href="https://fb.quetso.com/"
                  className="block w-full max-w-lg mx-auto bg-white text-emerald-900 font-black py-8 px-12 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all flex items-center justify-center gap-6 mx-auto group"
                >
                  🚀 BẮT ĐẦU NGAY
                  <ArrowRightIcon className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
              <div className="text-xl text-slate-500 space-y-2 max-w-2xl mx-auto">
                <p>✅ Tạo tài khoản dễ dàng • Hủy mọi lúc</p>
                <p>✅ 99.99% uptime • Support 24/7 tiếng Việt</p>
                <p>✅ Facebook + TikTok • Private post OK</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
