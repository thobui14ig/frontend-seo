import DemoNotice from '@/common/components/DemoNotice'
import SeoLayout from '@/common/components/layout/SeoLayout'
import {
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Link from 'next/link'
import Description from './Description'
import UidForm from './UidForm'
import UidResult from './UidResult'

export const metadata: Metadata = {
  title: 'Tool Cào Comment Facebook Realtime #1 2025 - Miễn Phí & Siêu Tốc',
  description: '🚀 Dán 1 link → Cào ∞ comment realtime &lt;2s. Không checkpoint, private post OK, xuất Excel 1-click. Tool #1 Facebook scraper 2025.',
  keywords: [
    'cào comment facebook miễn phí 2025',
    'tool lấy comment facebook realtime',
    'facebook comment scraper',
    'crawl comment fb không checkpoint'
  ],
  robots: 'index, follow',
  openGraph: {
    title: '💬 Tool Cào Comment Facebook Realtime #1 2025',
    description: 'Dán link → ∞ comment live &lt;2s • Không cần login • Private OK',
    type: 'website',
    images: ['/og/fb-comment-scraper-demo.jpg'],
  },
}

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Hero Header */}
          <section className="text-center mb-12 sm:mb-16 lg:mb-10">
            <div className="inline-flex items-center bg-emerald-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 font-bold text-lg shadow-2xl mx-auto">
              <StarIcon className="w-6 h-6 mr-3" />
              LIVE DEMO #1 2025
            </div>
            
            <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Cào Comment Facebook
              <br className="sm:hidden" />
              <span className="block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Realtime Siêu Tốc
                </span>
              </span>
            </h1>

            <div className="max-w-2xl mx-auto px-2">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-balance">
                <strong>Dán link → &lt;3s → ∞ Full Comment</strong>
              </p>
            </div>
          </section>
          <DemoNotice />
          <section className="relative bg-gradient-to-br from-white/10 via-white/5 to-slate-50/20 backdrop-blur-3xl rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 mb-24 border border-white/20 shadow-2xl ring-1 ring-white/10 ring-offset-2 ring-offset-slate-50 hover:shadow-[0_35px_60px_-15px_rgba(15,23,42,0.65)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] group/section">
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse opacity-50 group-hover/section:opacity-70 transition-opacity duration-700" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse [animation-delay:1s] opacity-40 group-hover/section:opacity-60 transition-opacity duration-700" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start relative z-10">
              {/* Form */}
              <div className="group/form transform transition-all duration-500 group-hover/section:-translate-x-1 lg:group-hover/form:translate-x-0">
                <UidForm />
              </div>

              {/* Result */}
            <div className="relative">
              {/* Badge Kết quả */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-emerald-500 text-white text-sm font-semibold shadow-lg">
                  <span>✨ Kết quả</span>
                  <span className="w-1.5 h-1.5 bg-white/90 rounded-full" />
                </div>
              </div>

              <div className="pt-6">
                <UidResult />
              </div>
            </div>

            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/60 via-blue-400/60 to-purple-400/60 rounded-b-3xl blur-sm opacity-75" />
          </section>


          {/* Description & SEO Content */}
          <section className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-16 border border-slate-200 shadow-2xl">
            <Description />
          </section>

          {/* Upgrade CTA */}
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-3xl mb-8 font-black text-xl shadow-2xl">
                <StarIcon className="w-8 h-8 mr-3" />
                25K+ USERS ĐÃ DÙNG
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                Demo đã ngon?
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Nâng cấp Pro ngay!
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto">
                ∞ Xử lý hàng triệu link • Cực nhanh • Hoạt động 24/24
              </p>
              <Link
                href="https://fb.quetso.com/"
                className="block w-full max-w-lg mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-6 px-12 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all flex items-center justify-center gap-4 mx-auto group"
              >
                🚀 NÂNG CẤP PHIÊN BẢN PRO
                <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-slate-200">
              <Link
                href="/facebook/find-comment-post"
                className="group p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 hover:shadow-2xl hover:-translate-y-3 transition-all text-center hover:border-emerald-400"
              >
                <div className="text-3xl mb-4">💬</div>
                <div className="font-black text-xl text-slate-900 mb-2 group-hover:text-emerald-600">Lấy Thông Tin Bài Viết</div>
                <div className="text-emerald-700 font-bold text-lg">Siêu Nhanh</div>
              </Link>
              
              <Link
                href="https://fb.quetso.com/"
                className="group p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all text-center hover:border-blue-400"
              >
                <div className="text-3xl mb-4">⚡</div>
                <div className="font-black text-xl text-slate-900 mb-2 group-hover:text-emerald-600">Phiên Bản Pro</div>
                <div className="text-blue-700 font-bold text-lg">Xử Lý Hàng Triệu Link</div>
              </Link>

              <a
                href="#"
                className="group p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all text-center cursor-pointer"
              >
                <div className="text-2xl mb-3">📊</div>
                <div className="font-bold text-lg text-slate-900 group-hover:text-emerald-600">Export Excel</div>
                <div className="text-sm text-slate-500 mt-1">1-click download</div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
