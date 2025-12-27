import SeoLayout from '@/common/components/layout/SeoLayout'
import {
  ArrowRightIcon,
  BoltIcon,
  DocumentIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cách Lấy ID Bài Viết Facebook #1 2025 - Siêu Nhanh & Chính Xác',
  description: '🚀 Hướng dẫn lấy ID bài viết Facebook realtime cho profile, fanpage, group. Tool demo miễn phí + tích hợp cào comment hàng loạt fb.quetso.com',
  keywords: [
    'cách lấy id bài viết facebook 2025',
    'lấy id post facebook nhanh',
    'facebook post id extractor',
    'lấy id bài viết fanpage',
    'quetso facebook tools'
  ],
  openGraph: {
    title: '🔍 Cách Lấy ID Bài Viết Facebook Siêu Nhanh 2025',
    description: '1 link → ID chính xác 100% • Profile/Page/Group • Private OK • Ready cào comment',
    type: 'article',
    images: ['/og/facebook-post-id.jpg'],
  },
}

export default function Page() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          
          {/* Mobile-First Breadcrumb */}
          <nav className="flex items-center text-sm text-slate-600 mb-6 sm:mb-8 pb-4 border-b border-slate-200">
            <Link href="/blog" className="hover:text-emerald-600 flex items-center gap-1 font-medium text-xs sm:text-sm">
              📚 Blog
            </Link>
            <ArrowRightIcon className="w-3 h-3 mx-1 text-slate-400 flex-shrink-0" />
            <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
              Lấy ID Post FB
            </span>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full mb-6 font-bold text-sm shadow-lg mx-auto">
              <StarIcon className="w-4 h-4 mr-2" />
              #1 HƯỚNG DẪN 2025
            </div>
            
            <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              Cách Lấy ID
              <br className="sm:hidden" />
              <span className="block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">
                  Bài Viết Facebook
                </span>
              </span>
            </h1>

            <div className="max-w-lg mx-auto mb-8 px-2">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-balance">
                <strong>3 cách đơn giản</strong> lấy ID post Facebook → 
                <br className="sm:hidden" />
                <span className="text-emerald-600 font-bold">Ready cào comment realtime</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs sm:text-sm text-slate-600 mb-8 px-2">
              <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl font-semibold">
                <BoltIcon className="w-4 h-4" />
                100% Chính Xác
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl font-semibold">
                🆓 Hoàn Toàn Miễn Phí
              </div>
            </div>

            <a
              href="/facebook/find-post-info"
              className="block w-full max-w-xs mx-auto sm:w-auto bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-bold py-4 px-8 text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mx-auto"
            >
              <PlayIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              🧪 Tool Lấy ID Ngay
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>

          {/* 3 Methods Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              3 Cách Lấy ID Post Nhanh Nhất
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  number: '1️⃣',
                  title: 'Từ Link Facebook',
                  desc: 'Copy link → Tìm số sau /posts/ → Done!',
                  icon: DocumentIcon,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  number: '2️⃣',
                  title: 'Inspect Element (F12)',
                  desc: 'Mở DevTools → Search "post_id" → Copy',
                  icon: BoltIcon,
                  color: 'from-orange-500 to-yellow-600'
                },
                {
                  number: '3️⃣',
                  title: 'Tool Online (Khuyên dùng)',
                  desc: 'Dán link → 1 click → ID chính xác 100%',
                  icon: PlayIcon,
                  color: 'from-emerald-500 to-green-600'
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
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{method.desc}</p>
                    {i === 2 && (
                      <a href="/facebook/find-post-info" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-sm">
                        🚀 Thử tool ngay
                        <ArrowRightIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Example */}
          <section className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-200 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8">
              💡 Ví Dụ Thực Tế
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border">
                <div className="flex items-center gap-3 mb-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">L</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 truncate">Link Facebook Post</div>
                    <div className="text-xs text-slate-500 break-all">
                      facebook.com/quetsotools/posts/1234567890123456
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl">
                  <div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">🔍 Post ID:</div>
                    <div className="font-mono bg-slate-900 text-emerald-400 px-4 py-2 rounded-xl text-lg font-bold">
                      1234567890123456
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">✅ Ready cho:</div>
                    <div className="space-y-1 text-xs text-slate-600">
                      <div>• Cào comment realtime</div>
                      <div>• Phân tích tương tác</div>
                      <div>• Marketing automation</div>
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
              <h3 className="text-2xl font-black mb-4 leading-tight">Tool Lấy ID</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Dán link → Copy ID → Done!</p>
              <a href="/facebook/find-post-info" className="inline-flex items-center justify-center gap-2 w-full bg-white text-emerald-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Thử Ngay Miễn Phí
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Cào Comment Pro</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Dùng ID vừa lấy → Cào ∞ comment</p>
              <a href="https://fb.quetso.com/" className="inline-flex items-center justify-center gap-2 w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all">
                Dashboard Chuyên Nghiệp
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-10 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              ❓ FAQ Nhanh
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { q: 'Lấy được ID bài viết private?', a: '✅ Có! Nếu bạn xem được bài viết' },
                { q: 'Cần đăng nhập Facebook?', a: '❌ Không! Chỉ cần link public' },
                { q: 'ID post có thay đổi không?', a: '🔒 Không bao giờ! ID vĩnh viễn' },
                { q: 'Dùng ID để làm gì?', a: '🚀 Cào comment, analytics, automation' }
              ].map((faq, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-white/80 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all hover:border-blue-300">
                  <h3 className="font-bold text-lg mb-2 leading-tight line-clamp-2">{faq.q}</h3>
                  <p className="text-slate-700 text-sm font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12 sm:py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent leading-tight">
                Sẵn sàng lấy ID post
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  realtime ngay?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto">
                15K+ marketers đã sử dụng phương pháp này
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-emerald-600 p-8 rounded-3xl shadow-2xl mb-8">
                <a
                  href="/facebook/find-post-info"
                  className="block w-full max-w-sm mx-auto bg-white text-blue-900 font-black py-5 px-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  🚀 LẤY ID POST NGAY
                  <ArrowRightIcon className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-slate-500 space-y-1 max-w-md mx-auto">
                <p>✅ Tool demo miễn phí • Không cần đăng ký</p>
                <p>✅ Hỗ trợ tất cả loại bài viết • Chính xác 100%</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </SeoLayout>
  )
}
