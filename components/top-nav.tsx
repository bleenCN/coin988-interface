'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'

import { cn } from '@/lib/utils'

export function TopNav() {
  const t = useTranslations()

  return (
    <nav className="flex flex-col gap-8 lg:flex-row">
      <NavLink href="/ecosystem">{t('ecosystem')}</NavLink>
      <NavLink href="/launchpad">{t('launchpad')}</NavLink>
      <NavLink href="/market">{t('market')}</NavLink>
    </nav>
  )
}

function NavLink({ href, ...props }: React.ComponentProps<typeof Link>) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn('font-semibold', active ? 'text-brand' : 'hover:text-foreground/90')}
      {...props}
    />
  )
}
