'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { DiscordIcon, MenuIcon, TwitterIcon } from '@/components/ui/icons'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'

import { ExternalLink } from './external-link'
import { TopNav } from './top-nav'

export function MobileMenu() {
  const t = useTranslations()

  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <Link href="/">
          <svg width={200} height={42}>
            <use href="#logo" />
            <use href="#logo-digits" />
          </svg>
        </Link>
        <div className="mt-5">
          <TopNav />
        </div>
        <SheetFooter className="mt-auto items-center gap-4 border-t">
          <Button
            asChild
            variant="default-invert"
            size="icon"
            className="rounded-full shadow"
          >
            <ExternalLink href="https://google.com">
              <DiscordIcon className="text-brand" />
            </ExternalLink>
          </Button>
          <Button
            asChild
            variant="default-invert"
            size="icon"
            className="rounded-full shadow"
          >
            <ExternalLink href="https://google.com">
              <TwitterIcon className="text-brand" />
            </ExternalLink>
          </Button>
          <Button className="flex-1 rounded-full">{t('apply')}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
