import type { MetadataRoute } from 'next'
import { generateSitemapEntries } from '@/lib/generateSitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Generate dynamic sitemap entries from PayloadCMS
    const sitemapEntries = await generateSitemapEntries()

    return sitemapEntries
  } catch (error) {
    console.error('Error generating sitemap:', error)

    // Return basic fallback sitemap
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    return [
      {
        url: `${baseUrl}/en`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/es`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ]
  }
}