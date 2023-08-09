import createMiddleware from 'next-intl/middleware'

import { i18n } from '@/i18n.config'

export default createMiddleware({
  // @ts-ignore
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
