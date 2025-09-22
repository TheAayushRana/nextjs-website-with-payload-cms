import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Locale } from './locales'

export async function getGlobalData<T = unknown>(
  slug: string,
  locale?: Locale
): Promise<T | null> {
  try {
    const payload = await getPayload({ config })

    const globalData = await payload.findGlobal({
      slug: slug as any,
      locale: locale as any,
    })

    return globalData as T
  } catch (_error) {
    return null
  }
}