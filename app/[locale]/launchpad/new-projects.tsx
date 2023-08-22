'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { memo, ReactNode, useCallback, useMemo, useState } from 'react'

import withLink from '@/components/hocs/with-link'
import { DiscordIcon, TwitterIcon, WebsiteIcon } from '@/components/ui/icons.b'
import { useSubscribeStatus } from '@/hooks/useSubscribeStatus'
import { getT } from '@/lib/utils'

const json = {
  upcoming: '即将推出',
  ongoing: '正在进行',
  completed: '已结束',
  target: '硬顶',
  supply: '供应量',
  price: '价格',
  marketValue: '市值',
  pledge: '质押要求',
  noPledge: '无',
  statusPending: '待开启',
  statusUpcoming: '即将开启',
  statusOngoing: '进行中',
  statusCompleted: '已售罄',
  statusLoading: '加载中',
}

const mockCards: CardProps[] = [
  {
    imgSrc: '/images/launchpad-new-project-img-placeholder.png',
    team: {
      avatar: '/images/team-avatar-placeholder.png',
      name: 'Veil',
      introduce: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
      tags: ['DEX', 'SWAP'],
      twitter: 't',
      website: 't',
      discord: 't',
    },
    financing: {
      target: '1000 ETH',
      supply: '1000,000,000 VEL',
      price: '1 ETH = 10000 VEL',
      marketValue: '$100,000',
      timeOn: new Date('2023-10-1'),
      timeOff: new Date('2023-11-2'),
    },
  },
  {
    imgSrc: '/images/launchpad-new-project-img-placeholder.png',
    team: {
      avatar: '/images/team-avatar-placeholder.png',
      name: 'Veil',
      introduce: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
      tags: ['DEX', 'SWAP'],
      twitter: 't',
      website: 't',
      discord: 't',
    },
    financing: {
      target: '1000 ETH',
      supply: '1000,000,000 VEL',
      price: '1 ETH = 10000 VEL',
      marketValue: '$100,000',
      timeOn: new Date('2023-8-1'),
      timeOff: new Date('2023-10-2'),
    },
  },
  {
    imgSrc: '/images/launchpad-new-project-img-placeholder.png',
    team: {
      avatar: '/images/team-avatar-placeholder.png',
      name: 'Veil',
      introduce: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
      tags: ['DEX', 'SWAP'],
      twitter: 't',
      website: 't',
      discord: 't',
    },
    financing: {
      target: '1000 ETH',
      supply: '1000,000,000 VEL',
      price: '1 ETH = 10000 VEL',
      marketValue: '$100,000',
      timeOn: new Date('2023-8-1'),
      timeOff: new Date('2023-8-2'),
    },
  },
  {
    imgSrc: '/images/launchpad-new-project-img-placeholder.png',
    team: {
      avatar: '/images/team-avatar-placeholder.png',
      name: 'Veil',
      introduce: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
      tags: ['DEX', 'SWAP'],
      twitter: 't',
      website: 't',
      discord: 't',
    },
    financing: {
      target: '1000 ETH',
      supply: '1000,000,000 VEL',
      price: '1 ETH = 10000 VEL',
      marketValue: '$100,000',
      timeOn: new Date('2023-8-1'),
      timeOff: new Date('2023-8-2'),
    },
  },
  {
    imgSrc: '/images/launchpad-new-project-img-placeholder.png',
    team: {
      avatar: '/images/team-avatar-placeholder.png',
      name: 'Veil',
      introduce: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
      tags: ['DEX', 'SWAP'],
      twitter: 't',
      website: 't',
      discord: 't',
    },
    financing: {
      target: '1000 ETH',
      supply: '1000,000,000 VEL',
      price: '1 ETH = 10000 VEL',
      marketValue: '$100,000',
      timeOn: new Date('2023-8-1'),
      timeOff: new Date('2023-8-2'),
    },
  },
]

const NewProjects = memo(function NewProjects() {
  const t = getT(json)
  const titles = [t('upcoming'), t('ongoing'), t('completed')]
  const [activeIndex, setActiveIndex] = useState(0)
  const tabChangehandler = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <div>
      <Tabs titles={titles} clickHandler={tabChangehandler} activeIndex={activeIndex} />

      <div className="mt-8 grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
        {mockCards.map((cardinfo, index) => (
          <Card {...cardinfo} key={index} />
        ))}
      </div>
    </div>
  )
})

interface TabsProps {
  titles: string[]
  activeIndex: number
  clickHandler: (index: number) => void
}

const Tabs = memo(function Tabs(props: TabsProps) {
  return (
    <div className="flex gap-4">
      {props.titles.map((title, index) => (
        <div
          className={clsx(
            {
              'border-b-4 border-dark-foreground-active text-dark-foreground-active':
                props.activeIndex === index,
            },
            'cursor-pointer select-none pt-1 text-lg font-extrabold md:text-2xl',
          )}
          key={index}
          onClick={() => props.clickHandler(index)}
          tabIndex={0}
        >
          {title}
        </div>
      ))}
    </div>
  )
})

interface CardProps {
  imgSrc?: string
  team: TeamProps
  financing: FinancingProps
}

const Card = memo(function Card(props: CardProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <Image
        src={props.imgSrc ?? ''}
        alt={''}
        width={876}
        height={340}
        className="h-auto w-full"
      />

      <div className="rounded-b-xl border border-t-0 border-c4 md:flex lg:flex-col 2xl:flex-row">
        <div className="flex-1 p-4 xl:p-8">
          <Team {...props.team} />
        </div>

        <div
          className={clsx(
            'line mx-4 h-px bg-c4',
            'md:mx-0 md:my-4 md:h-auto md:w-px',
            'lg:mx-8 lg:my-0 lg:h-px lg:w-auto',
            '2xl:mx-0 2xl:my-8 2xl:h-auto 2xl:w-px',
          )}
        />

        <div className="flex-1 p-4 xl:p-8">
          <Financing {...props.financing} />
        </div>
      </div>
    </div>
  )
})

const WebsiteIconWithLink = withLink(WebsiteIcon)
const TwitterIconWithLink = withLink(TwitterIcon)
const DiscordIconWithLink = withLink(DiscordIcon)

interface TeamProps {
  avatar?: string
  name: string
  website?: string
  twitter?: string
  discord?: string
  introduce?: string
  tags?: string[]
}

const Team = memo(function Team(props: TeamProps) {
  return (
    <>
      <div className="flex">
        <Image
          src={props.avatar ?? ''}
          alt={''}
          width={80}
          height={80}
          className="h-12 w-12 overflow-hidden rounded-full md:h-[70px] md:w-[70px]"
        />

        <div className="pl-4 md:pl-6">
          <h1 className="font-extrabold md:text-2xl">{props.name}</h1>
          <div>{props.tags?.map((tag, index) => <Tag tag={tag} key={index} />)}</div>
        </div>
      </div>

      <div className="mt-4 line-clamp-4 text-sm xl:mt-8">{props.introduce}</div>

      <div className="mt-4 flex gap-4 text-xl">
        {props.website && <WebsiteIconWithLink href={props.website} />}
        {props.twitter && <TwitterIconWithLink href={props.twitter} />}
        {props.discord && <DiscordIconWithLink href={props.discord} />}
      </div>
    </>
  )
})

interface FinancingProps {
  target: string
  supply: string
  price: string
  marketValue: string
  pledge?: string
  timeOn?: Date
  timeOff?: Date
}

const Financing = memo(function Financing(props: FinancingProps) {
  const t = getT(json)
  return (
    <div className="flex flex-col gap-2 md:gap-6">
      <Label label={t('target')}>
        <span className="font-semibold text-c1">{props.target}</span>
      </Label>
      <Label label={t('supply')}>
        <span className="font-semibold text-c1">{props.supply}</span>
      </Label>
      <Label label={t('price')}>
        <span className="font-semibold text-c1">{props.price}</span>
      </Label>
      <Label label={t('marketValue')}>
        <span className="font-semibold text-c1">{props.marketValue}</span>
      </Label>

      <div className="flex items-center justify-between">
        <Label label={t('pledge')} className="text-c3">
          <span>{props.pledge ?? ':无'}</span>
        </Label>

        <div>
          <FinancingStatus timeOn={props.timeOn} timeOff={props.timeOff} />
        </div>
      </div>
    </div>
  )
})

interface TagProps {
  tag: string
}
const Tag = memo(function Tag(props: TagProps) {
  return (
    <span
      className={clsx(
        'mr-2 inline-block rounded-full bg-c1/10 px-1 py-px',
        'scale-90 text-xs text-c1 last:mr-0 md:scale-100 md:font-semibold',
      )}
    >
      {props.tag}
    </span>
  )
})

interface LabelProps {
  children?: ReactNode
  label: string
  className?: string
}

const Label = memo(function Label(props: LabelProps) {
  return (
    <div className={clsx(props.className, 'flex justify-between text-sm')}>
      <span>{props.label}</span>
      <span>{props.children}</span>
    </div>
  )
})

interface FinancingStatusProps {
  timeOn?: Date
  timeOff?: Date
}

const FinancingStatus = memo(function FinancingState(props: FinancingStatusProps) {
  const { timeOn, timeOff } = props

  const t = useMemo(() => getT(json), [])

  const { status, timeOnCountdown, timeOffCountdown } = useSubscribeStatus(
    timeOn,
    timeOff,
  )

  const content = useMemo(() => {
    switch (status) {
      case 'loading':
        return <div>{t('statusLoading')}</div>
      case 'pending':
        return (
          <span className="text-sm font-semibold text-[#7F43FF]">
            {t('statusPending')}
          </span>
        )
      case 'upcoming':
        return (
          <span className="text-xs">
            {`${t('statusUpcoming')} : `}
            <span className="font-semibold">{timeOnCountdown}</span>
          </span>
        )
      case 'ongoing':
        return (
          <span className="text-xs">
            {`${t('statusOngoing')} : `}
            <span className="font-semibold">{timeOffCountdown}</span>
          </span>
        )
      case 'completed':
        return (
          <span className="text-sm font-semibold text-c3">{t('statusCompleted')}</span>
        )
    }
  }, [status, t, timeOffCountdown, timeOnCountdown])

  console.log(status)

  return (
    <div className="grid h-10 w-48 place-items-center rounded-lg border border-c4">
      {content}
    </div>
  )
})
export default NewProjects
