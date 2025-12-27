import SeoLayout from '@/common/components/layout/SeoLayout'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  ClockIcon, 
  BoltIcon, 
  UsersIcon, 
  PlayIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { 
  StarIcon 
} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Tool Cào Comment Facebook Realtime #1 2025 - Quetso.com',
  description: '🚀 Cào comment Facebook realtime siêu tốc chỉ với 1 link. Xử lý ∞ link 24/7, bắt lead tức thì. Không cài đặt, dashboard pro tại fb.quetso.com',
  keywords: [
    'tool cào comment facebook 2025',
    'cào comment realtime',
    'facebook comment scraper',
    'tool quét comment fb online',
    'quetso facebook scraper'
  ],
  openGraph: {
    title: 'Tool Cào Comment Facebook Realtime #1 2025',
    description: 'Siêu tốc • ∞ Link • 24/7 • Bắt lead realtime',
    type: 'article',
    images: ['/og/fb-comment-scraper-2025.jpg'],
  },
}

const features = [
  {
    icon: BoltIcon,
    title: 'Lấy Comment Siêu Nhanh <3s',
    desc: 'Comment mới cập nhật tức thì, độ trễ dưới 3 giây',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: PlayIcon,
    title: '∞ Link Scale',
    desc: 'Xử lý hàng triệu link cùng lúc, không giới hạn',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: UsersIcon,
    title: 'Zero Setup',
    desc: 'Chỉ dán link → Chạy ngay, không extension',
    color: 'from-purple-500 to-purple-600'
  }
]

const stats = [
  { value: '25K+', label: 'Users', icon: '👥' },
  { value: '2.5M+', label: 'Links', icon: '🔗' },
  { value: '99.99%', label: 'Uptime', icon: '🟢' },
  { value: '<3s', label: 'Latency', icon: '⚡' }
]

const steps = [
  {
    step: 1,
    title: 'Dán Link FB',
    desc: 'Copy link bài viết → Paste dashboard',
    icon: '🔗'
  },
  {
    step: 2,
    title: 'Hệ Thống Tự Động Cào Comment',
    desc: 'Comment mới tự động cập nhật liên tục',
    icon: '⚡'
  },
  {
    step: 3,
    title: 'Export & Action',
    desc: 'Xuất Excel',
    icon: '📊'
  }
]

const faqs = [
  {
    q: 'Cần login Facebook?',
    a: '❌ Không! Chỉ cần link public post'
  },
  {
    q: 'Số link tối đa?',
    a: '♾️ Không giới hạn - scale tự động'
  },
  {
    q: 'Tốc Độ Cào Siêu Nhanh?',
    a: '✅ <3s'
  },
  {
    q: 'Giá thành?',
    a: '🆓 Cực rẻ'
  }
]

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
        {/* Mobile-First Header */}

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          {/* Mobile Breadcrumb */}
          <nav className="flex items-center text-sm text-slate-500 mb-8 sm:mb-12">
            <Link href="/blog" className="hover:text-blue-600 flex items-center gap-1.5 font-medium text-xs sm:text-sm">
              📚 Blog
            </Link>
            <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-slate-400 flex-shrink-0" />
            <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
              Tool cào comment facebook Realtime
            </span>
          </nav>

          {/* Mobile-Optimized Hero */}
          <section className="text-center mb-12 sm:mb-20 lg:mb-28">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-wide shadow-lg max-w-max mx-auto">
              <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              #1 TOOL 2025
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight sm:leading-tight mb-6 sm:mb-8">
              <span className="block sm:inline">Tool cào comment</span>
              <span className="block sm:inline-block sm:ml-2 lg:ml-0">
                <span className="block lg:inline bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
                  Facebook
                </span>
                <span className="block lg:inline sm:ml-1">Realtime</span>
              </span>
            </h1>

            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6 sm:mb-8">
                Chỉ cần dán link → Cào comment realtime <strong>&lt;3s</strong>. 
                Xử lý hàng triệu link ∞ 24/24. Bắt đầu ngay!
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center text-xs sm:text-sm text-slate-600 mb-8 sm:mb-12">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl font-semibold text-xs sm:text-sm">
                  <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  15K+ Sellers
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  24/12/2025
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl font-bold text-xs sm:text-sm shadow-lg">
                  ⚡ #1 Tốc Độ
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-20">
              <a
                href="https://fb.quetso.com/"
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 max-w-sm mx-auto"
              >
                <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform flex-shrink-0" />
                Bắt Đầu Ngay
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>
          </section>

          {/* Mobile Live Demo */}
          <section className="bg-gradient-to-br from-blue-600/5 to-purple-600/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-20 mb-16 sm:mb-24 border border-blue-200/50 shadow-2xl">
            <div className="text-center">
              <p className="text-base sm:text-xl text-slate-700 mb-6 sm:mb-12 max-w-sm sm:max-w-2xl mx-auto leading-relaxed">
                Dán link → Xem Comment → Export Excel!
              </p>
              <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-200/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-200/50 order-2 lg:order-1">
                    <div className="text-lg sm:text-2xl font-mono font-bold text-blue-700 mb-3 sm:mb-2 line-clamp-2">🔗 fb.com/post/123</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2.5 p-3 bg-white rounded-xl shadow-sm">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-white flex-shrink-0 mt-0.5">A</div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-slate-900 text-sm sm:text-base truncate">Anh A</div>
                          <div className="text-xs text-slate-500">2s ago</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 p-3 bg-white rounded-xl shadow-sm -mt-1">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-white flex-shrink-0 mt-0.5">B</div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-slate-900 text-sm sm:text-base truncate">Bình B</div>
                          <div className="text-xs text-slate-500">Vừa xong</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2">
                    <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-3 sm:mb-4 animate-pulse">⚡ LIVE</div>
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center w-full max-w-md mx-auto lg:mx-0">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-slate-900">247</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Comments</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">18</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">New</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">+12%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Features */}
          <section className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Tại Sao #1 2025?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="group hover:shadow-2xl transition-all duration-500 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-transparent hover:bg-gradient-to-br bg-slate-50/50 backdrop-blur-sm h-full"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${feature.color} bg-gradient-to-r text-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl mx-auto sm:mx-0`}>
                    <feature.icon className="w-7 h-7 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors text-center sm:text-left">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-center sm:text-left">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Stats */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24 p-6 sm:p-12 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl sm:rounded-3xl">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center p-4 sm:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-300 flex flex-col items-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2 sm:mb-4 flex items-center gap-1">
                  {stat.icon}
                  <span className="text-base sm:text-2xl">{stat.value}</span>
                </div>
                <div className="text-slate-700 font-semibold tracking-wide uppercase text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Mobile Steps */}
          <section className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              3 Bước Siêu Đơn Giản
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="group text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-emerald-500 text-white rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500 font-bold text-xl sm:text-2xl border-4 sm:border-8 border-white/50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">{step.title}</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-2 sm:px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile FAQ */}
          <section className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-16 lg:p-24 mb-16 sm:mb-24 border border-slate-200/50 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-16 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ❓ FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="group p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white to-slate-50/50 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:border-blue-300">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">{faq.q}</h3>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Final CTA */}
          <section className="text-center">
            <div className="max-w-2xl sm:max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 font-bold text-base sm:text-xl shadow-2xl flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
                <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                15K+ sellers tăng 4x doanh số
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                <span>Sẵn Sàng Bắt Lead</span>
                <span className="block sm:inline bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Realtime?
                </span>
              </h2>
              <p className="text-lg sm:text-2xl text-slate-600 mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto">
                Dùng thử miễn phí. Không rủi ro!
              </p>
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 rounded-2xl sm:rounded-3xl shadow-3xl mb-8 sm:mb-12">
                <a
                  href="https://fb.quetso.com/"
                  className="bg-white text-blue-900 font-black py-5 sm:py-6 px-8 sm:px-12 text-lg sm:text-xl lg:text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3 sm:gap-4 tracking-wide w-full sm:w-auto justify-center"
                >
                  🚀 TRUY CẬP DASHBOARD
                  <ArrowRightIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </a>
                <div className="text-white text-base sm:text-lg font-semibold text-center lg:text-left whitespace-nowrap">
                  2 phút setup • Live ngay
                </div>
              </div>
              <div className="text-sm text-slate-500 space-y-1 max-w-md mx-auto">
                <p>✅ Không cần credit card • Hủy mọi lúc</p>
                <p>✅ 99.99% uptime • Support 24/7</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </SeoLayout>
  )
}
