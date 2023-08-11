'use client'

import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'

import { Button } from '@/components/ui/button'

export function NavLink(props: Omit<React.ComponentProps<typeof Link>, 'children'>) {
  const t = useTranslations('ecosystem')

  return (
    <Button variant="outline" className="min-w-[80px] rounded-full" asChild>
      <Link {...props}>{t('view')}</Link>
    </Button>
  )
}
