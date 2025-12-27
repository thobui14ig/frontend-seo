import type { MetadataRoute } from 'next'

const SITE_URL = 'https://thotool.com'

const BLOG_SLUGS = [
  'cach-cao-comment-facebook',
  'cach-lay-id-bai-viet-facebook',
  'lay-thong-tin-bai-viet-facebook',
  'tool-cao-comment-facebook',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
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
  ]
}
