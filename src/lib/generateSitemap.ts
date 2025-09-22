import { getPayload } from 'payload'
import config from '@/payload.config'
import type { MetadataRoute } from 'next'
import { locales } from './locales'

interface SitemapEntry {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export async function generateSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const sitemap: SitemapEntry[] = []

  try {
    const payload = await getPayload({ config })

    for (const locale of locales) {
      sitemap.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      })
    }

    for (const locale of locales) {
      try {
        const pages = await payload.find({
          collection: 'pages',
          where: {
            status: {
              equals: 'published',
            },
          },
          locale: locale,
          limit: 1000,
        })

        for (const page of pages.docs) {
          if (page.slug === 'home') continue

          sitemap.push({
            url: `${baseUrl}/${locale}/${page.slug}`,
            lastModified: page.updatedAt,
            changeFrequency: 'weekly',
            priority: 0.7,
          })
        }
      } catch (localeError) {
        console.warn(`Failed to fetch pages for locale ${locale}:`, localeError)
      }
    }

    sitemap.push({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    })

    return sitemap
  } catch (error) {
    const fallbackSitemap: SitemapEntry[] = []

    for (const locale of locales) {
      fallbackSitemap.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      })
    }

    return fallbackSitemap
  }
}

export function getStaticSitemapEntries(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const sitemap: SitemapEntry[] = []

  for (const locale of locales) {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    })

    sitemap.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return sitemap
}