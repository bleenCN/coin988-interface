'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { CircleBackIcon } from '@/components/ui/icons'

export function BackButton() {
  const t = useTranslations('ecosystem')
  const router = useRouter()

  return (
    <button className="group flex items-center gap-3" onClick={router.back}>
      <CircleBackIcon className="text-border duration-300 group-hover:text-brand" />
      <span className="font-semibold">{t('back')}</span>
    </button>
  )
}
