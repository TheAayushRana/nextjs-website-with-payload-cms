import React from 'react'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'
import { getGlobalData } from '@/lib/getGlobalData'
import { Locale } from '@/lib/locales'
import type { Header as HeaderType } from '@/payload-types'
import './styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { children, params } = props
  const { locale } = await params

  const headerData = await getGlobalData<HeaderType>('header', locale)

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-sans`}>
        {headerData && <Header headerData={headerData} />}
        <main>{children}</main>
      </body>
    </html>
  )
}
