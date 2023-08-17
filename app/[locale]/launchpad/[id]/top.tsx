import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

import withLink from '@/components/hocs/with-link'
import {
  ArrowIcon,
  DiscordIcon,
  FacebookIcon,
  FootIcon,
  LinkIcon,
  TelegramIcon,
  TwitterIcon,
  WebsiteIcon,
} from '@/components/ui/icons.b'
import Round from '@/components/ui/round'
import { getT } from '@/lib/utils'

const json = {
  back: '返回',
  share: '分享至',
  unlike: '踩一脚',
  peopleNum: '{peopleNum}人参与',
}

interface TopProps {
  imgUrl: string
  name: string
  website?: string
  twitter?: string
  discord?: string
  synopsis?: string
  numOfPeople?: number
}

const Top = memo(function Top(props: TopProps) {
  const t = getT(json)
  return (
    <div>
      <div className="flex justify-between">
        <Back />
        <Share />
      </div>

      <div className="mt-16 text-center">
        <Image
          src={props.imgUrl}
          alt={''}
          width={120}
          height={120}
          className="inline-block h-24 w-24 lg:h-32 lg:w-32"
        />
        <h1 className="mt-8 text-2xl font-semibold">{props.name}</h1>

        <span className="mt-4 flex justify-center gap-4 text-2xl">
          {props.website && <WebsiteIconWithLink href="1" />}
          {props.twitter && <TwitterIconWithLink href="1" />}
          {props.discord && <DiscordIconWithLink href="1" />}
        </span>

        <p className="mx-auto mt-6 max-w-2xl text-c2">{props.synopsis}</p>

        <div className="mt-8 flex cursor-pointer select-none items-center justify-center gap-4 text-c1 hover:brightness-125 active:brightness-90">
          <FootIcon className="text-2xl" />
          <span className="text-sm"> {t('unlike')}</span>
        </div>

        <span className="mt-6 block text-xs text-c3">
          {t('peopleNum', { peopleNum: props.numOfPeople || 0 })}
        </span>
      </div>
    </div>
  )
})

const Back = memo(function Back() {
  const t = getT(json)

  const router = useRouter()
  return (
    <div
      className="group relative w-fit cursor-pointer pl-10"
      onClick={() => router.back()}
    >
      <div
        className={clsx(
          'absolute left-0 top-1/2 w-fit -translate-y-1/2 rotate-180 rounded-full',
          'border border-c4 p-2 text-c1 transition-all group-hover:-left-2',
        )}
      >
        <ArrowIcon shape="→" />
      </div>

      <span className="relative block py-2 font-semibold">{t('back')}</span>
    </div>
  )
})

const TwitterIconWithLink = withLink(TwitterIcon)
const TelegramIconWithLink = withLink(TelegramIcon)
const FacebookIconWithLink = withLink(FacebookIcon)
const LinkIconWithLink = withLink(LinkIcon)
const DiscordIconWithLink = withLink(DiscordIcon)
const WebsiteIconWithLink = withLink(WebsiteIcon)

const Share = memo(function Share() {
  const t = getT(json)
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-c3">{`${t('share')}:`}</span>
      <Round size="sm">
        <TwitterIconWithLink theme="blue" href="1" />
      </Round>
      <Round size="sm">
        <TelegramIconWithLink className="text-c1" href="1" />
      </Round>
      <Round size="sm">
        <FacebookIconWithLink className="text-c1" href="1" />
      </Round>
      <Round size="sm">
        <LinkIconWithLink className="text-c1" href="1" />
      </Round>
    </div>
  )
})

export default Top
