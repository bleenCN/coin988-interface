import { SlashIcon } from '@/components/ui/icons'

import { LocaleSwitcher } from './locale-switcher'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export default function PageHeader({ locale }: { locale: string }) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center">
        <Logo locale={locale} />
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <SlashIcon />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
