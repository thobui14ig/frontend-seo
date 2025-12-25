import DemoNotice from '@/common/components/DemoNotice'
import SeoLayout from '@/common/components/layout/SeoLayout'
import {
  ArrowRightIcon,
  BoltIcon,
  IdentificationIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Link from 'next/link'
import Description from './Description'
import UidForm from './UidForm'
import UidResult from './UidResult'

export const metadata: Metadata = {
  title: '🔍 Tool Lấy ID Post Facebook Realtime #1 2025 - Miễn Phí & Chính Xác',
  description: '🚀 Dán 1 link → Lấy ID post, UID, nội dung realtime &lt;1s. Không cần login, private post OK. Tool extract Facebook #1 2025.',
  keywords: [
    'lấy id bài viết facebook 2025',
    'tool lấy uid facebook miễn phí',
    'facebook post id extractor',
    'lấy thông tin bài viết fb realtime'
  ],
  robots: 'index, follow',
  openGraph: {
    title: '🔍 Tool Lấy ID Post Facebook Realtime #1 2025',
    description: 'Dán link → ID post + UID + Nội dung &lt;1s • Private OK • Ready cào comment',
    type: 'website',
    images: ['/og/fb-post-id-extractor.jpg'],
  },
}

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Hero Header */}
          <section className="text-center mb-12 sm:mb-16 lg:mb-10">
            <div className="inline-flex items-center bg-emerald-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 font-bold text-lg shadow-2xl mx-auto">
              <StarIcon className="w-6 h-6 mr-3" />
              LIVE DEMO #1 2025
            </div>
            
            <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Lấy ID Post Facebook
              <br className="sm:hidden" />
              <span className="block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Realtime Siêu Nhanh
                </span>
              </span>
            </h1>

            <div className="max-w-2xl mx-auto mb-8 px-2">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-balance">
                <strong>Dán link → &lt;1s → Full info</strong>
                <br className="sm:hidden" />
                <span className="text-emerald-600 font-bold">ID Post + UID + Nội dung</span>
              </p>
            </div>
          </section>
          <DemoNotice />
          <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 mb-16 border border-slate-200 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Input Form */}
              <div>
                <UidForm />
              </div>

              {/* Result Panel */}
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-2xl bg-emerald-500 text-white text-sm font-semibold shadow-md">
                  ✨ Kết quả
                </div>
                <div className="pt-6">
                  <UidResult />
                </div>
              </div>
            </div>
          </section>


          {/* Description & SEO Content */}
          <section className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-16 border border-slate-200 shadow-2xl">
            <Description />
          </section>

          {/* Upgrade CTA */}
          <section className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-3xl mb-12 font-black text-xl shadow-2xl">
                <StarIcon className="w-8 h-8 mr-3" />
                TOOL ĐƯỢC 25K+ MARKETERS YÊU THÍCH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                Demo đã chuẩn?
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Nâng cấp Pro ngay!
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed">
                ∞ Xử lý hàng triệu link • Cực nhanh • Hoạt động 24/24
              </p>
              <Link
                href="https://fb.quetso.com/"
                className="block w-full max-w-lg mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-7 px-12 text-2xl rounded-4xl shadow-3xl hover:shadow-4xl hover:-translate-y-4 transition-all flex items-center justify-center gap-6 mx-auto group"
              >
                🚀 NÂNG CẤP PHIÊN BẢN PRO
                <ArrowRightIcon className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
              </Link>
            </div>
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-slate-200">
              <Link
                href="/facebook/find-comment-post"
                className="group p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 hover:shadow-2xl hover:-translate-y-3 transition-all text-center hover:border-emerald-400"
              >
                <div className="text-3xl mb-4">💬</div>
                <div className="font-black text-xl text-slate-900 mb-2 group-hover:text-emerald-600">Cào Comment</div>
                <div className="text-emerald-700 font-bold text-lg">Realtime live</div>
              </Link>
              
              <Link
                href="https://fb.quetso.com/"
                className="group p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all text-center hover:border-blue-400"
              >
                <div className="text-3xl mb-4">⚡</div>
                <div className="font-black text-xl text-slate-900 mb-2 group-hover:text-emerald-600">Dashboard Pro</div>
                <div className="text-blue-700 font-bold text-lg">∞ link 24/7</div>
              </Link>

              <div className="group p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-2xl hover:-translate-y-3 transition-all text-center cursor-pointer hover:border-purple-400">
                <div className="text-3xl mb-4">📋</div>
                <div className="font-black text-xl text-slate-900 mb-2 group-hover:text-emerald-600">Copy JSON</div>
                <div className="text-purple-700 font-bold text-lg">Ready API</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
