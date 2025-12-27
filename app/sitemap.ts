import type { MetadataRoute } from 'next'

const SITE_URL = 'https://thotool.com'

const BLOG_SLUGS = [
  'cach-cao-comment-facebook',
  'cach-lay-id-bai-viet-facebook',
  'lay-thong-tin-bai-viet-facebook',
  'tool-cao-comment-facebook',
  'tool-cao-comment-facebook',
]
const FB_SLUGS = [
  'find-comment-post',
  'find-post-info'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const toolFbUrls = FB_SLUGS.map((slug) => ({
    url: `${SITE_URL}/facebook/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
    ...toolFbUrls
  ]
}
