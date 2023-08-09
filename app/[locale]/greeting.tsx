'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export function Greeting() {
  const t = useTranslations()

  return <Button>😎 {t('greeting')}</Button>
}
