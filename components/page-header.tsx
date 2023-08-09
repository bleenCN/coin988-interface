'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { DiscordIcon, SlashIcon, TwitterIcon } from '@/components/ui/icons'

import { ExternalLink } from './external-link'
import { LocaleSwitcher } from './locale-switcher'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import { ThemeToggle } from './theme-toggle'
import { TopNav } from './top-nav'

export default function PageHeader({ locale }: { locale: string }) {
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-2xl supports-backdrop-blur:bg-background/5">
      <div className="container flex h-16 items-center lg:h-20">
        <Logo locale={locale} />
        <div className="ml-[60px] hidden lg:block">
          <TopNav />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="mr-10 hidden items-center gap-[30px] lg:flex">
            <Button asChild variant="default-invert" size="icon" className="rounded-full">
              <ExternalLink href="https://google.com">
                <DiscordIcon className="text-brand" />
              </ExternalLink>
            </Button>
            <Button asChild variant="default-invert" size="icon" className="rounded-full">
              <ExternalLink href="https://google.com">
                <TwitterIcon className="text-brand" />
              </ExternalLink>
            </Button>
            <Button className="min-w-[80px] rounded-full">{t('apply')}</Button>
          </div>
          <ThemeToggle />
          <SlashIcon />
          <LocaleSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
