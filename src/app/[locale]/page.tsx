import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import Link from 'next/link'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { Locale } from '@/lib/locales'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
      status: {
        equals: 'published',
      },
    },
    locale,
    limit: 1,
  })

  const homepage = pages.docs[0]

  if (!homepage) {
    return (
      <div className="home">
        <div className="content">
          <h1>Welcome to RestroWorks</h1>
          <p>Please create a page with slug &quot;home&quot; in the admin panel.</p>
          <Link href="/admin" className="admin">Go to Admin Panel</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {homepage.blocks && <BlockRenderer blocks={homepage.blocks} />}
      {homepage.content && (
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{homepage.title}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: homepage.content }}
          />
        </main>
      )}
    </div>
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
      status: {
        equals: 'published',
      },
    },
    locale,
    limit: 1,
  })

  const homepage = pages.docs[0]

  if (!homepage) {
    return {
      title: 'RestroWorks',
      description: 'Welcome to RestroWorks',
    }
  }

  return {
    title: homepage.meta?.title || homepage.title,
    description: homepage.meta?.description,
    openGraph: {
      title: homepage.meta?.title || homepage.title,
      description: homepage.meta?.description,
      images: homepage.meta?.image ? [
        {
          url: typeof homepage.meta.image === 'object' ? homepage.meta.image.url : '',
        }
      ] : [],
    },
  }
}
