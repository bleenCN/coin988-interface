import { memo, ReactNode } from 'react'

import { Logo } from '@/components/logo'
import { DiscordIcon, EmailIcon, TwitterIcon } from '@/components/ui/icons.b'
import { getT } from '@/lib/utils'

const json = {
  title: 'Web3世界入口，塑造去中心化未来',
  statement:
    '免责声明：请注意，Coin988上展示的信息均由第三方提供，仅供参考之用，不应将其视为任何类型的专业或财务建议',
  copy: '© 2023 Coin988 ',
}

const Footer = memo(function Footer() {
  const t = getT(json)
  return (
    <div className="flex flex-col items-center pt-20">
      <Logo staticShow locale={'/'} />

      <div className="mt-7 text-lg font-semibold md:text-3xl">{t('title')}</div>

      <div className="mt-8 flex justify-center gap-10 text-xl lg:mt-12">
        <Round>
          <TwitterIcon theme="blue" />
        </Round>
        <Round>
          <DiscordIcon theme="blue" />
        </Round>
        <Round>
          <EmailIcon theme="blue" />
        </Round>
      </div>

      <div className="pb-10 pt-20 text-center text-xs opacity-50">
        <div>{t('statement')}</div>
        <div className="mt-4">{t('copy')}</div>
      </div>
    </div>
  )
})

const Round = ({ children }: { children: ReactNode }) => {
  return (
    <div className="cursor-pointer rounded-full bg-light-foreground p-2 hover:bg-light-foreground-hover dark:bg-dark-background md:p-4">
      {children}
    </div>
  )
}

export default Footer
