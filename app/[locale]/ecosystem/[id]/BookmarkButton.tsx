'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export function BookmarkButton() {
  const t = useTranslations('ecosystem')

  return (
    <Button variant="outline" className="w-full rounded-full">
      {t('bookmark')}
    </Button>
  )
}
