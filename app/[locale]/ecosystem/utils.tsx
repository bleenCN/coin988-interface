import {
  DiscordIcon,
  GithubIcon,
  GlobeIcon,
  TelegramIcon,
  TwitterIcon,
} from '@/components/ui/icons'

export function getSocialLinkIcon(key: string) {
  return {
    website: (
      <GlobeIcon className="text-soft-foreground duration-200 hover:text-foreground" />
    ),
    twitter: (
      <TwitterIcon className="text-soft-foreground duration-200 hover:text-foreground" />
    ),
    discord: (
      <DiscordIcon className="text-soft-foreground duration-200 hover:text-foreground" />
    ),
    telegram: (
      <TelegramIcon className="text-soft-foreground duration-200 hover:text-foreground" />
    ),
    github: (
      <GithubIcon
        className="text-soft-foreground duration-200 hover:text-foreground"
        width={16}
        height={16}
      />
    ),
  }[key]
}
