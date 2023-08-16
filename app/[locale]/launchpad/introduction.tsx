import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'

import withLink from '@/components/hocs/with-link'
import { ArrowIcon, DiscordIcon, TwitterIcon, WebSiteIcon } from '@/components/ui/icons.b'
import { getT } from '@/lib/utils'

const json = {
  title: '简单入门',
  introTitle1: '准备好您的MetaMask',
  introSubtitle1: '使用兼容Base的钱包并准备好您在BASE上的代币',
  introTitle2: '获得COB',
  introSubtitle2: '使用兼容Base的钱包并准备好您在BASE上的代币',
  introTitle3: '开始质押',
  introSubtitle3: '使用兼容Base的钱包并准备好您在BASE上的代币',
  introTitle4: '购买您的分配',
  introSubtitle4: '使用兼容Base的钱包并准备好您在BASE上的代币',
  introductionToCob: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
  claim: '领取代币',
  totalSupply: '总量',
  originSupply: '初始供应量',
  originPrice: '初始单价',
  marketValue: '流通市值',
}

const Introduction = memo(function Introduction() {
  const t = getT(json)

  const intros: IntroBoard[] = [
    {
      imgsrc: '/images/icon-metamask-client.png',
      title: t('introTitle1'),
      subtitle: t('introSubtitle1'),
    },
    {
      imgsrc: '/images/icon-coin-exchange.png',
      title: t('introTitle2'),
      subtitle: t('introSubtitle2'),
    },
    {
      imgsrc: '/images/icon-invoce.png',
      title: t('introTitle3'),
      subtitle: t('introSubtitle3'),
    },
    {
      imgsrc: '/images/icon-saving.png',
      title: t('introTitle4'),
      subtitle: t('introSubtitle4'),
    },
  ]
  return (
    <div>
      <h1 className="text-center text-xl font-semibold">{t('title')}</h1>

      <div className="mt-20 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-2">
        {intros.map((intro, index) => (
          <>
            <IntroBoard {...intro} key={index} />
            {index !== intros.length - 1 && (
              <ArrowIcon className="relative rotate-90 text-3xl text-c4 md:top-12 md:rotate-0 md:self-start" />
            )}
          </>
        ))}
      </div>

      <div className="mt-20">
        <CoinBoard />
      </div>
    </div>
  )
})

interface IntroBoard {
  imgsrc: string
  title: string
  subtitle: string
}

const IntroBoard = memo(function IntroBoard(props: IntroBoard) {
  return (
    <div className="mx-auto w-60 text-center">
      <div className="grid h-32 w-full place-items-center rounded-lg border">
        <Image src={props.imgsrc} alt={''} width={80} height={80} />
      </div>

      <div>
        <h1 className="mt-8 whitespace-nowrap font-semibold">{props.title}</h1>
        <h4 className="mt-2 text-sm">{props.subtitle}</h4>
      </div>
    </div>
  )
})

const WebsiteIconWithLink = withLink(WebSiteIcon)
const TwitterIconWithLink = withLink(TwitterIcon)
const DiscordIconWithLink = withLink(DiscordIcon)

const CoinBoard = memo(function CoinBoard() {
  const t = getT(json)
  const coinIconUrl = '/images/token-cob-symbol.png'
  const coinSymbol = 'COB'
  const website = '1'
  const twitter = '1'
  const discord = '1'
  const introduceStr = t('introductionToCob')

  const icons = [
    '/images/icon-total-supply.png',
    '/images/icon-origin-supply.png',
    '/images/icon-origin-price.png',
    '/images/icon-market-value.png',
  ]
  const totalSupply = `100,000,000 ${coinSymbol}`
  const originSupply = `15,000,000 ${coinSymbol}`
  const originPrice = `1 ETH = 15,000 ${coinSymbol}`
  const marketValue = '$150,000'

  return (
    <div
      className={clsx(
        'overflow-hidden rounded-xl bg-[#292A2D] p-8 text-white',
        'md:p-10 lg:flex lg:justify-start',
      )}
    >
      <div className="flex-1 lg:max-w-[30%] xl:max-w-[50%]">
        <div className="flex">
          <Image
            src={coinIconUrl}
            alt=""
            width={80}
            height={80}
            className="mr-4 block h-[70px] w-[70px]"
          />

          <div className="flex flex-col justify-around">
            <div className="text-xl font-semibold">{coinSymbol}</div>

            <div className="flex gap-2">
              <WebsiteIconWithLink theme="light" href={website} />
              <TwitterIconWithLink theme="light" href={twitter} />
              <DiscordIconWithLink theme="light" href={discord} />
            </div>
          </div>
        </div>

        <div className="mt-4">{introduceStr}</div>

        <div className="mt-8">
          <button className="h-12 w-full rounded-lg bg-c1 text-center hover:brightness-110 active:brightness-90 lg:max-w-[240px]">
            {t('claim')}
          </button>
        </div>
      </div>

      <div className="line my-10 h-px w-full bg-[#525358] lg:my-0 lg:ml-4 lg:mr-10 lg:h-auto lg:w-px" />

      {/* board */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* 1 */}
        <div className="flex h-min">
          <Image
            src={icons[0]}
            alt={''}
            width={80}
            height={80}
            className="mr-4 h-20 w-20"
          />
          <div className="flex flex-col justify-around">
            <div className="whitespace-nowrap font-semibold">{t('totalSupply')}</div>
            <div className="whitespace-nowrap text-lg font-semibold">{totalSupply}</div>
          </div>
        </div>
        {/* 1 */}
        <div className="flex h-min">
          <Image
            src={icons[1]}
            alt={''}
            width={80}
            height={80}
            className="mr-4 h-20 w-20"
          />
          <div className="flex flex-col justify-around">
            <div className="whitespace-nowrap font-semibold">{t('originSupply')}</div>
            <div className="whitespace-nowrap text-lg font-semibold">{originSupply}</div>
          </div>
        </div>
        {/* 1 */}
        <div className="flex h-min">
          <Image
            src={icons[2]}
            alt={''}
            width={80}
            height={80}
            className="mr-4 h-20 w-20"
          />
          <div className="flex flex-col justify-around">
            <div className="whitespace-nowrap font-semibold">{t('originPrice')}</div>
            <div className="whitespace-nowrap text-lg font-semibold">{originPrice}</div>
          </div>
        </div>
        {/* 1 */}
        <div className="flex h-min">
          <Image
            src={icons[3]}
            alt={''}
            width={80}
            height={80}
            className="mr-4 h-20 w-20"
          />
          <div className="flex flex-col justify-around">
            <div className="whitespace-nowrap font-semibold">{t('marketValue')}</div>
            <div className="whitespace-nowrap text-lg font-semibold">{marketValue}</div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Introduction
