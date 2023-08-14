'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

export function TanstackQueryClientProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
