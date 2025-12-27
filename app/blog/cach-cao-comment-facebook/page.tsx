import SeoLayout from '@/common/components/layout/SeoLayout'
import {
  ArrowRightIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  PlayIcon,
  ShieldCheckIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cách Cào Comment Facebook #1 2025 - Nhanh & Không Checkpoint',
  description: '🚀 Hướng dẫn cào comment Facebook realtime an toàn 100%. Tool demo miễn phí + dashboard pro ∞ link tại fb.quetso.com. Không khóa nick!',
  keywords: [
    'cào comment facebook 2025',
    'tool cào comment facebook',
    'cách cào comment facebook an toàn',
    'cào comment không checkpoint',
    'quetso facebook scraper'
  ],
  openGraph: {
    title: '💬 Cào Comment Facebook Realtime #1 2025',
    description: 'Siêu nhanh • Không checkpoint • ∞ link • Demo free → Pro dashboard',
    type: 'article',
    images: ['/og/scrape-facebook-comments.jpg'],
  },
}

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-slate-600 mb-6 sm:mb-8 pb-4 border-b border-slate-200">
            <Link href="/blog" className="hover:text-emerald-600 flex items-center gap-1 font-medium text-xs sm:text-sm">
              📚 Blog
            </Link>
            <ArrowRightIcon className="w-3 h-3 mx-1 text-slate-400 flex-shrink-0" />
            <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
              Cào Comment FB
            </span>
          </nav>

          {/* Hero */}
          <section className="text-center mb-10 sm:mb-10 lg:mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-green-500 text-white px-4 py-2 rounded-full mb-6 font-bold text-sm shadow-lg mx-auto">
              <StarIcon className="w-4 h-4 mr-2" />
              #1 TOOL 2025 - KHÔNG CHECKPOINT
            </div>
            
            <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Cào Comment Facebook
              <br className="sm:hidden" />
              <span className="block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Realtime Siêu Nhanh
                </span>
              </span>
            </h1>

            <a
              href="/facebook/find-comment-post"
              className="block w-full max-w-xs mx-auto sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold py-4 px-8 text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mx-auto"
            >
              <PlayIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              🧪 Demo Miễn Phí
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>

          {/* 3 Methods */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              3 Cách Cào Comment (Từ Tệ → Tốt)
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  number: '1️⃣',
                  title: 'Copy Thủ Công',
                  desc: '👎 Tốn thời gian • Dễ sót data • Không scale',
                  icon: ChatBubbleLeftIcon,
                  color: 'from-slate-400 to-slate-500',
                  status: 'Không khuyến khích'
                },
                {
                  number: '2️⃣',
                  title: 'Extension',
                  desc: '⚠️ Hay lỗi • Facebook update die • Rủi ro bảo mật',
                  icon: BoltIcon,
                  color: 'from-orange-500 to-yellow-600',
                  status: 'Rủi ro cao'
                },
                {
                  number: '3️⃣',
                  title: 'Web của Thotool ✅',
                  desc: '🎯 Siêu nhanh • Xử lý hàng triệu link 24/24',
                  icon: PlayIcon,
                  color: 'from-emerald-500 to-green-600',
                  status: 'Khuyến khích 100%'
                }
              ].map((method, i) => (
                <div key={i} className="group flex items-start gap-4 p-6 sm:p-8 rounded-3xl border border-slate-200/50 bg-white/70 hover:shadow-2xl hover:-translate-y-2 transition-all backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-3 flex-shrink-0 pt-1">
                    <div className={`w-12 h-12 ${method.color} bg-gradient-to-r text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">{method.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${i === 2 ? 'bg-emerald-100 text-emerald-800' : i === 1 ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-600'}`}>
                        {method.status}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-200 shadow-xl">
            <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-emerald-500">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center font-bold text-white text-sm">A</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 truncate">Anh A: Inbox mình nhé</div>
                      <div className="text-xs text-slate-500">⚡ 2s ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-blue-500 -mt-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-sm">B</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 truncate">Bình B: 039xxxxxxx</div>
                      <div className="text-xs text-slate-500">🔥 Vừa xong</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-500 to-green-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Demo 1 Link</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Thử nghiệm nhanh • Xem comment ngay</p>
              <a href="/facebook/find-comment-post" className="inline-flex items-center justify-center gap-2 w-full bg-white text-emerald-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Demo Ngay
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Phiên bản Pro</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Xử lý hàng triệu link • 24/24 • Không giới hạn</p>
              <a href="https://fb.quetso.com/" className="inline-flex items-center justify-center gap-2 w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Dashboard Pro
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* Safety Features */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              ✅ Tại Sao Nên Chọn Thotool.com?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { icon: ShieldCheckIcon, title: 'Không Login', desc: 'Không cần tài khoản Facebook' },
                { icon: BoltIcon, title: 'Serverless', desc: 'Cloud proxy tự động' },
                { icon: UsersIcon, title: '15K+ Users', desc: 'Chạy ổn định 12 tháng' },
                { icon: ChatBubbleLeftIcon, title: 'Cực mạnh ', desc: 'Xử lý hàng triệu link 24/24' }
              ].map((feature, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-white/70 border border-slate-200 hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-10 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              ❓ Hỏi Đáp
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { q: 'Có bị khóa nick Facebook?', a: '❌ Không! Tool độc lập hoàn toàn' },
                { q: 'Cào được bài viết private?', a: '✅ Có! Nếu bạn xem được bài viết' },
                { q: 'Tốc độ bao lâu 1 comment?', a: '🚀 Dưới 3s' }
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
              <h2 className="text-3xl sm:text-4xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                Sẵn sàng cào comment
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  realtime ngay?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto">
                25K+ sellers tăng 3x doanh số nhờ tool này
              </p>
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-8 rounded-3xl shadow-2xl mb-8">
                <a
                  href="https://fb.quetso.com"
                  className="block w-full max-w-sm mx-auto bg-white text-emerald-900 font-black py-5 px-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  🚀 BẮT ĐẦU NGAY
                  <ArrowRightIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </SeoLayout>
  )
}
