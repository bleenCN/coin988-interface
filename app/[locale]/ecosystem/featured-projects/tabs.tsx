'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'

import { cn } from '@/lib/utils'

import type { FeaturedProjectsTab } from '../types'

export function Tabs({ activeTab }: { activeTab: FeaturedProjectsTab }) {
  const t = useTranslations('ecosystem')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function switchTab(tab: FeaturedProjectsTab) {
    /** @ts-ignore */
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.set('tab', tab)
    router.replace(pathname + '?' + nextSearchParams.toString(), { scroll: false })
  }

  return (
    <div className="flex items-center gap-[42px]">
      <button
        className={cn('text-2xl font-semibold', activeTab === 'hot' ? 'text-brand' : '')}
        onClick={() => switchTab('hot')}
      >
        {t('hot')}
      </button>
      <button
        className={cn(
          'text-2xl font-semibold',
          activeTab === 'latest' ? 'text-brand' : '',
        )}
        onClick={() => switchTab('latest')}
      >
        {t('latest')}
      </button>
    </div>
  )
}
