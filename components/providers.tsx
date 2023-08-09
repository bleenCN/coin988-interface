'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function I18nProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextIntlClientProvider>) {
  return <NextIntlClientProvider {...props}>{children}</NextIntlClientProvider>
}
