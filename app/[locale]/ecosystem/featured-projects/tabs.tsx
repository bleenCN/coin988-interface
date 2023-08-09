'use client'

import { useTranslations } from 'next-intl'

export function Tabs() {
  const t = useTranslations('ecosystem')

  return (
    <div className="flex items-center gap-[42px]">
      <button className="text-2xl font-semibold">{t('hot')}</button>
      <button className="text-2xl font-semibold">{t('latest')}</button>
    </div>
  )
}
