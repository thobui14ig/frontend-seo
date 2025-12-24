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
          <section className="text-center mb-12 sm:mb-16 lg:mb-24">
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

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs sm:text-sm text-slate-600 mb-8 px-2">
              <div className="flex items-center gap-2 bg-blue-100/80 text-blue-800 px-5 py-3 rounded-2xl font-semibold">
                <BoltIcon className="w-5 h-5" />
                &lt;1s Response
              </div>
              <div className="flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-5 py-3 rounded-2xl font-semibold">
                🆓 MIỄN PHÍ LIVE
              </div>
            </div>
          </section>

          {/* Demo Notice */}
          <DemoNotice />

          {/* Main Tool Container */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-16 border border-slate-200/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Input Form */}
              <div className="group">
                <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl border-2 border-emerald-200 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-2xl">
                      <PlayIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 mb-1">1️⃣ DÁN LINK POST</h2>
                      <p className="text-emerald-700 font-semibold text-lg">Public/Private đều OK</p>
                    </div>
                  </div>
                </div>
                <UidForm />
              </div>

              {/* Result Panel */}
              <div className="group">
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border-2 border-blue-200 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-2xl">
                      <IdentificationIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 mb-1">2️⃣ THÔNG TIN LIVE</h2>
                      <p className="text-blue-700 font-semibold text-lg">ID Post + UID + Nội dung</p>
                    </div>
                  </div>
                </div>
                <UidResult />
              </div>
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
                ∞ post • Batch processing • API access • Export tự động 24/7
              </p>
              <Link
                href="https://fb.quetso.com/"
                className="block w-full max-w-lg mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-7 px-12 text-2xl rounded-4xl shadow-3xl hover:shadow-4xl hover:-translate-y-4 transition-all flex items-center justify-center gap-6 mx-auto group"
              >
                🚀 UPGRADE POST EXTRACTOR PRO
                <ArrowRightIcon className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
              </Link>
              <div className="text-lg text-slate-500 mt-10 space-y-3 pt-8 border-t border-slate-200 max-w-xl mx-auto">
                <p>✅ <strong>Demo miễn phí:</strong> 1 post/lần</p>
                <p>✅ <strong>Pro unlimited:</strong> ∞ post realtime 24/7</p>
                <p>✅ <strong>Private post OK</strong> • Ready cào comment</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
