import SeoLayout from '@/common/components/layout/SeoLayout'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  BoltIcon, 
  DocumentIcon, 
  ChatBubbleLeftIcon,
  IdentificationIcon,
  PlayIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: '🔍 Lấy Thông Tin Bài Viết Facebook Nhanh Chóng #1 2025 - Quetso.com',
  description: '🚀 Tool lấy thông tin bài viết Facebook realtime: ID post, nội dung, tên page/profile. Hỗ trợ private post + tích hợp cào comment hàng loạt fb.quetso.com',
  keywords: [
    'lấy thông tin bài viết facebook 2025',
    'facebook post id extractor',
    'lấy id bài viết facebook',
    'facebook post information tool',
    'quetso facebook scraper'
  ],
  openGraph: {
    title: '🔍 Tool Lấy Thông Tin Bài Viết Facebook Realtime',
    description: 'ID Post • Nội dung • Tên Page • Private OK • 1 click → Cào comment',
    type: 'article',
    images: ['/og/facebook-post-info.jpg'],
  },
}

const postData = {
  type: 'PUBLIC',
  name: 'Quetso FB Tools',
  postId: '1234567890123456',
  content: '🔥 Tool cào comment Facebook realtime siêu tốc chỉ với 1 link. Xử lý ∞ link 24/7, bắt lead tức thì!'
}

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Mobile-First Breadcrumb */}
          <nav className="flex items-center text-sm text-slate-600 mb-6 sm:mb-8 pb-4 border-b border-slate-200">
            <Link href="/blog" className="hover:text-emerald-600 flex items-center gap-1.5 font-medium text-xs sm:text-sm">
              📚 Blog
            </Link>
            <ArrowRightIcon className="w-3 h-3 mx-1 text-slate-400 flex-shrink-0" />
            <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
              FB Post Info
            </span>
          </nav>

          {/* Hero Section - Mobile Optimized */}
          <section className="text-center mb-12 sm:mb-16 lg:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 font-bold text-sm shadow-lg mx-auto">
              <StarIcon className="w-4 h-4 mr-2" />
              TOOL #1 NĂM 2025
            </div>
            
            {/* Title - Fluid Typography */}
            <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Lấy Thông Tin
              <br className="sm:hidden" />
              <span className="block mt-2 sm:mt-0 sm:inline-block">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Bài Viết Facebook
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-lg mx-auto mb-8 px-2">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-balance">
                Dán link → <strong>&lt;1s</strong> → Full info: 
                <br className="sm:hidden" />
                <span className="text-emerald-600 font-bold">ID Post + Nội dung + Page</span>
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs sm:text-sm text-slate-600 mb-8 px-2">
              <div className="flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-2 rounded-xl font-semibold">
                <BoltIcon className="w-4 h-4" />
                &lt;1s Response
              </div>
              <div className="flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-4 py-2 rounded-xl font-semibold">
                🆓 MIỄN PHÍ
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="/facebook/find-post-info"
              className="block w-full max-w-xs mx-auto sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold py-4 px-8 text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <PlayIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              🧪 Thử Tool Ngay
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>

          {/* Live Demo - Mobile Stacked */}
          <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 mb-16 border border-slate-200/50 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8">
              📋 Demo Kết Quả
            </h2>
            {/* Data Cards - Vertical Mobile */}
            <div className="space-y-4 sm:space-y-6">
              {/* JSON Preview - Mobile Collapsible Style */}
              <details className="group">
                <summary className="p-4 bg-slate-900/90 text-slate-100 rounded-2xl cursor-pointer font-mono text-sm font-bold hover:bg-slate-800 transition-colors">
                  📊 Xem JSON Raw Data
                </summary>
                <pre className="mt-4 p-6 bg-slate-900/95 text-slate-100 text-xs font-mono rounded-2xl overflow-x-auto">
                    {`{
                      "type": "${postData.type}",
                      "name": "${postData.name}",
                      "postId": "${postData.postId}",
                      "content": "${postData.content.substring(0, 60)}..."
                    }`}
                </pre>
              </details>
            </div>
          </section>

          {/* Features - Single Column Mobile */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Tại Sao #1 2025?
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  icon: BoltIcon,
                  title: '⚡ Siêu Tốc Realtime',
                  desc: 'Lấy full info bài viết trong chưa tới 1 giây'
                },
                {
                  icon: IdentificationIcon,
                  title: '🔑 Post ID Chuẩn Xác',
                  desc: 'Extract đúng ID để cào comment thành công 100%'
                },
                {
                  icon: ChatBubbleLeftIcon,
                  title: '✅ Private Post OK',
                  desc: 'Lấy được cả bài viết private nếu có quyền truy cập'
                }
              ].map((feature, i) => (
                <div key={i} className="group flex items-start gap-4 p-6 sm:p-8 rounded-3xl border border-slate-200/50 bg-white/70 hover:shadow-2xl hover:-translate-y-2 transition-all backdrop-blur-sm">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-all">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Cards - Stacked Mobile */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Demo Tool</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Dán link → Xem realtime → Copy ID</p>
              <a href="/facebook/find-post-info" className="inline-flex items-center justify-center gap-2 w-full bg-white text-emerald-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Thử Ngay
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Cào Comment Pro</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Dán link → Cào ∞ comment 24/24</p>
              <a href="https://fb.quetso.com/" className="inline-flex items-center justify-center gap-2 w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Dashboard Pro
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* FAQ - Mobile Cards */}
          <section className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-10 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              ❓ Hỏi Đáp Nhanh
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { q: 'Lấy được bài viết private?', a: '✅ Có! lấy được một cách dễ dàng' },
                { q: 'Chỉ cần dán link Facebook?', a: '🎯 Đúng vậy! 1 click = Full info' },
                { q: 'Post ID dùng để làm gì?', a: '🚀 Input cho tool cào comment FB' },
                { q: 'Tool demo có miễn phí?', a: '🆓 100% miễn phí dùng thử' }
              ].map((faq, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-white/80 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all hover:border-emerald-300">
                  <h3 className="font-bold text-lg mb-2 leading-tight line-clamp-2">{faq.q}</h3>
                  <p className="text-slate-700 text-sm font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12 sm:py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                Sẵn sàng lấy Post ID
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  realtime ngay?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto">
                10K+ marketers đã tăng tốc workflow
              </p>
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-8 rounded-3xl shadow-2xl mb-8">
                <a
                  href="/facebook/find-post-info"
                  className="block w-full max-w-sm mx-auto bg-white text-emerald-900 font-black py-5 px-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  🧪 DEMO TOOL NGAY
                  <ArrowRightIcon className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-slate-500 space-y-1">
                <p>✅ Không cần đăng ký • Dùng ngay</p>
                <p>✅ Hỗ trợ private post • 99.9% uptime</p>
              </div>
            </div>
          </section>

        </article>
      </div>
    </SeoLayout>
  )
}
