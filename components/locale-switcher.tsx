'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@/components/ui/icons'
import { Locale, localeLabelMap } from '@/i18n.config'

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = React.useTransition()

  function handleLocaleSwitch(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale, scroll: false })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isPending}>
          {localeLabelMap[locale as Locale].short}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(localeLabelMap).map(([locale, meta]) => (
          <DropdownMenuItem key={locale} onClick={() => handleLocaleSwitch(locale)}>
            {meta.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
