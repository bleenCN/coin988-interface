'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import * as React from 'react'

import { cn } from '@/lib/utils'

import type { FeaturedProjectsTab } from '../types'

export function Tabs({ activeTab }: { activeTab: FeaturedProjectsTab }) {
  const t = useTranslations('ecosystem')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isPending, startTransition] = React.useTransition()

  function switchTab(tab: FeaturedProjectsTab) {
    /** @ts-ignore */
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.set('tab', tab)
    startTransition(() => {
      router.replace(pathname + '?' + nextSearchParams.toString(), { scroll: false })
    })
  }

  return (
    <div className="flex items-center gap-[42px]">
      <button
        className={cn(
          'relative flex items-center gap-0.5 text-2xl font-semibold duration-200',
          activeTab === 'hot' ? 'text-brand' : '',
        )}
        onClick={() => switchTab('hot')}
      >
        <span
          className={cn(
            'absolute right-0 top-full mt-2 h-1 w-[calc(100%-6px)] bg-brand duration-200',
            activeTab === 'hot' && !isPending ? 'opacity-100' : 'opacity-0',
          )}
        />
        <Image src="/icons/fire.png" alt="" width={32} height={32} />
        {t('hot')}
      </button>
      <button
        className={cn(
          'relative flex items-center gap-0.5 text-2xl font-semibold duration-200',
          activeTab === 'latest' ? 'text-brand' : '',
        )}
        onClick={() => switchTab('latest')}
      >
        <span
          className={cn(
            'absolute right-0 top-full mt-2 h-1 w-[calc(100%-6px)] bg-brand duration-200',
            activeTab === 'latest' && !isPending ? 'opacity-100' : 'opacity-0',
          )}
        />
        <Image src="/icons/clover.png" alt="" width={32} height={32} />
        {t('latest')}
      </button>
    </div>
  )
}
