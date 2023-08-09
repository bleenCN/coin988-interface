import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PageHeader from '@/components/page-header'
import { I18nProvider, ThemeProvider } from '@/components/providers'
import { getDictionary } from '@/get-dictionary'
import { i18n, type Locale } from '@/i18n.config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Web3 Universe',
  description: 'The best web3 projects aggregator',
}

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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider locale={locale} messages={dictionary}>
            <div className="flex min-h-screen flex-col">
              <PageHeader locale={locale} />
              <div className="container mx-auto flex-1">{children}</div>
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
