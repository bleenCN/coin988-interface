import { memo, ReactNode } from 'react'

import { Logo } from '@/components/logo'
import { DiscordIcon, EmailIcon, TwitterIcon } from '@/components/ui/icons.b'
import { getT } from '@/lib/utils'

const json = {
  title: 'Web3世界入口，塑造去中心化未来',
}

const Footer = memo(function Footer() {
  const t = getT(json)
  return (
    <div>
      <Logo locale={'/'} />
      <div>{t('title')}</div>
      <div>
        <Round>
          <TwitterIcon  theme="blue"/>
        </Round>
        <Round>
          <DiscordIcon theme="blue" />
        </Round>
        <Round>
          <EmailIcon theme="blue" />
        </Round>
      </div>
    </div>
  )
})

const Round = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>
}

export default Footer
