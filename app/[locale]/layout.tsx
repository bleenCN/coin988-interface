import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

import { LogoSvg } from '@/components/logo'
import { PageBackground } from '@/components/page-background'
import PageHeader from '@/components/page-header'
import {
  I18nProvider,
  TanstackQueryClientProvider,
  ThemeProvider,
} from '@/components/providers'
import { getDictionary } from '@/get-dictionary'
import { i18n, type Locale } from '@/i18n.config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Web3 Universe',
  description: 'The best web3 projects aggregator',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  let dictionary
  try {
    dictionary = await getDictionary(locale)
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body>
        <PageBackground />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider locale={locale} messages={dictionary}>
            <TanstackQueryClientProvider>
              <PageHeader locale={locale} />
              {children}
              <LogoSvg />
            </TanstackQueryClientProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
