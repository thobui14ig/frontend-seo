import SeoLayout from '@/common/components/layout/SeoLayout'
import { blogPosts } from '@/common/lib/blogPosts'
import {
    ArrowRightIcon,
    BoltIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '📚 Blog Facebook Marketing #1 2025 - ThoTool',
  description: 'Hướng dẫn crawl comment Facebook/TikTok, lấy ID post, tool scraper realtime. Tất cả kiến thức marketing Facebook mới nhất 2025.',
  keywords: [
    'blog facebook marketing 2025',
    'hướng dẫn cào comment facebook',
    'tool facebook scraper',
    'thotool blog',
    'lấy id bài viết facebook'
  ],
  openGraph: {
    title: '📚 Blog Facebook Marketing #1 2025 - ThoTool',
    description: 'Hướng dẫn chi tiết tool crawl comment, lấy ID post, marketing Facebook realtime.',
    type: 'website',
    images: ['/og/thotool-blog.jpg'],
  },
}

export default function BlogPage() {
  return (
    <SeoLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/50">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
          
          {/* Hero Header */}
          <section className="text-center mb-20 sm:mb-28">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-3xl mb-8 font-black text-xl shadow-2xl mx-auto">
              <StarIconSolid className="w-8 h-8 mr-3" />
              BLOG #1 FACEBOOK MARKETING 2025
            </div>
            
            <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
              Hướng Dẫn
              <br className="sm:hidden" />
              <span className="block mt-4 sm:mt-0">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Facebook Marketing
                </span>
              </span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12 px-4">
              <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed text-balance">
                Tất cả kiến thức crawl comment, lấy ID post, tool scraper realtime. 
                <span className="text-emerald-600 font-bold">25K+ marketers đã áp dụng</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/facebook/find-post-info"
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-black py-5 px-10 text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex items-center gap-3"
              >
                🧪 Tool Lấy ID Post
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/facebook/find-comment-post"
                className="group bg-white text-slate-900 font-black py-5 px-10 text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex items-center gap-3 border-2 border-slate-200"
              >
                💬 Demo Cào Comment
                <BoltIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <article 
                  key={post.slug} 
                  className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Featured Image */}
                  <div className="h-56 sm:h-64 bg-gradient-to-br from-slate-100 via-blue-100 to-emerald-100 rounded-3xl mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <BoltIcon className="w-16 h-16 text-white/60" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 max-w-max">
                    <StarIconSolid className="w-4 h-4 mr-2" />
                    TOOL 2025
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight line-clamp-2 group-hover:text-emerald-600 transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                    {post.description}
                  </p>

                  {/* Meta & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>ThoTool Team</span>
                      <span>•</span>
                      <time>24/12/2025</time>
                    </div>
                    <Link 
                      href={post.slug}
                      className="group/link inline-flex items-center gap-3 text-emerald-600 font-bold hover:text-emerald-700 text-lg transition-all duration-300"
                    >
                      Đọc chi tiết
                      <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pagination / CTA */}
          <section className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-8 bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
                Sẵn sàng áp dụng ngay?
              </h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Chọn tool phù hợp → Tăng doanh số 5x → Bắt lead realtime
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <Link
                  href="/facebook/find-post-info"
                  className="group bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center font-bold text-xl"
                >
                  <div className="text-4xl mb-4">🔍</div>
                  <div>Lấy ID Post</div>
                  <div className="text-emerald-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all">&lt;1s realtime</div>
                </Link>
                
                <Link
                  href="/facebook/find-comment-post"
                  className="group bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center font-bold text-xl"
                >
                  <div className="text-4xl mb-4">💬</div>
                  <div>Cào Comment</div>
                  <div className="text-blue-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all">Live dashboard</div>
                </Link>
                
                <Link
                  href="/dashboard/link-manager"
                  className="group bg-gradient-to-r from-purple-400 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all text-center font-bold text-xl"
                >
                  <div className="text-4xl mb-4">⚡</div>
                  <div>Dashboard Pro</div>
                  <div className="text-purple-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all">∞ link 24/7</div>
                </Link>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-10 rounded-4xl shadow-3xl">
                <Link
                  href="/dashboard/link-manager"
                  className="block w-full max-w-md mx-auto bg-white text-emerald-900 font-black py-6 px-12 text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all flex items-center justify-center gap-4 mx-auto group"
                >
                  🚀 TRẢI NGHIỆM DASHBOARD PRO
                  <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SeoLayout>
  )
}
