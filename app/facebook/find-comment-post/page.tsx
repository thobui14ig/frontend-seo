import DemoNotice from '@/common/components/DemoNotice'
import SeoLayout from '@/common/components/layout/SeoLayout'
import {
  ArrowRightIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Link from 'next/link'
import Description from './Description'
import UidForm from './UidForm'
import UidResult from './UidResult'

export const metadata: Metadata = {
  title: '💬 Tool Cào Comment Facebook Realtime #1 2025 - Miễn Phí & Siêu Tốc',
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
          <section className="text-center mb-12 sm:mb-16 lg:mb-24">
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

            <div className="max-w-2xl mx-auto mb-8 px-2">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-balance">
                <strong>Dán link → &lt;2s → ∞ comment live</strong>
                <br className="sm:hidden" />
                <span className="text-emerald-600 font-bold">Không checkpoint 100%</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs sm:text-sm text-slate-600 mb-8 px-2">
              <div className="flex items-center gap-2 bg-blue-100/80 text-blue-800 px-5 py-3 rounded-2xl font-semibold">
                <BoltIcon className="w-5 h-5" />
                &lt;2s Response
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
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-200">
                  <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                    <PlayIcon className="w-8 h-8 text-emerald-600" />
                    1️⃣ DÁN LINK FACEBOOK
                  </h2>
                  <p className="text-emerald-700 font-semibold">Post public/private đều OK</p>
                </div>
                <UidForm />
              </div>

              {/* Result Panel */}
              <div className="group">
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200">
                  <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                    <ChatBubbleLeftIcon className="w-8 h-8 text-blue-600" />
                    2️⃣ COMMENT LIVE
                  </h2>
                  <p className="text-blue-700 font-semibold">Realtime update + Export Excel</p>
                </div>
                <UidResult />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-slate-200">
              <Link
                href="/facebook/find-post-info"
                className="group p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all text-center"
              >
                <div className="text-2xl mb-3">🔍</div>
                <div className="font-bold text-lg text-slate-900 group-hover:text-emerald-600">Lấy ID Post</div>
                <div className="text-sm text-slate-500 mt-1">&lt;1s extract</div>
              </Link>
              
              <Link
                href="https://fb.quetso.com/"
                className="group p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 hover:shadow-xl hover:-translate-y-2 transition-all text-center"
              >
                <div className="text-2xl mb-3">⚡</div>
                <div className="font-bold text-lg text-slate-900 group-hover:text-emerald-600">Dashboard Pro</div>
                <div className="text-sm text-emerald-700 font-semibold mt-1">∞ link 24/7</div>
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
                ∞ link • Không giới hạn • Export tự động • Support 24/7
              </p>
              <Link
                href="https://fb.quetso.com/"
                className="block w-full max-w-lg mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-6 px-12 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all flex items-center justify-center gap-4 mx-auto group"
              >
                🚀 UPGRADE DASHBOARD PRO
                <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
              </Link>
              <div className="text-lg text-slate-500 mt-8 space-y-2">
                <p>✅ Demo miễn phí: 1 link/lần</p>
                <p>✅ Pro: ∞ link realtime 24/7</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
