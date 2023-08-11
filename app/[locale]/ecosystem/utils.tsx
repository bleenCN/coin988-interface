import {
  DiscordIcon,
  GithubIcon,
  GlobeIcon,
  TelegramIcon,
  TwitterIcon,
} from '@/components/ui/icons'

export function getSocialLinkIcon(key: string) {
  return {
    website: <GlobeIcon className="text-[#9EA1AC]" />,
    twitter: <TwitterIcon className="text-[#9EA1AC]" />,
    discord: <DiscordIcon className="text-[#9EA1AC]" />,
    telegram: <TelegramIcon className="text-[#9EA1AC]" />,
    github: <GithubIcon className="text-[#9EA1AC]" width={16} height={16} />,
  }[key]
}
