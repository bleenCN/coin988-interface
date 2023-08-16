'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { memo, useState } from 'react'

import ArrowButton from '@/components/ui/arrow-button'
import { DiscordIcon, TwitterIcon, WebSiteIcon } from '@/components/ui/icons.b'
import Title from '@/components/ui/Title'
import { useCountdown } from '@/hooks/useCountdown'
import { getT } from '@/lib/utils'

const json = {
  title: '即将发布',
}

interface TokenInfo {
  tokenIconUrl: string
  tokenSymbol: string
  webSite?: string
  twitter?: string
  discord?: string
  price?: number
  deadline: Date
  posterUrl: string
  rateOfEth: number
}

interface NewTokensProps {
  hideTitle?: boolean
}

const NewTokens = memo(function NewTokens(props: NewTokensProps) {
  const t = getT(json)

  const hideTitle = props.hideTitle ?? false

  const newTokens: TokenInfo[] = [
    {
      tokenIconUrl: '/images/icon-blog.png',
      tokenSymbol: 'Blog',
      webSite: '1',
      twitter: '2',
      discord: '3',
      deadline: new Date('2023-8-30'),
      posterUrl: '/images/home-token-poster-placeholder.png',
      rateOfEth: 1000,
    },
    {
      tokenIconUrl: '/images/icon-zks.png',
      tokenSymbol: 'ZKS',
      webSite: '1',
      twitter: '2',
      discord: '3',
      deadline: new Date('2023-9-30'),
      posterUrl: '/images/home-token-poster-placeholder1.png',
      rateOfEth: 1000,
    },
    {
      tokenIconUrl: '/images/icon-znn.png',
      tokenSymbol: 'ZNN',
      webSite: '1',
      twitter: '2',
      discord: '3',
      deadline: new Date('2023-9-30'),
      posterUrl: '/images/home-token-poster-placeholder.png',
      rateOfEth: 1000,
    },
    // {
    //   tokenIconUrl: '/images/icon-blog.png',
    //   tokenSymbol: 'Blog3',
    //   webSite: '1',
    //   twitter: '2',
    //   discord: '3',
    //   deadline: new Date('2023-9-30'),
    //   posterUrl: '/images/home-token-poster-placeholder.png',
    // rateOfEth:1000,
    // },
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      {!hideTitle && <Title>{t('title')}</Title>}

      <div
        className={clsx(
          'relative mb-6 mt-8 flex gap-2 rounded-3xl bg-dark-background p-3',
          'lg:mb-0 lg:p-5 xl:p-6',
        )}
      >
        <div
          className={clsx(
            'absolute left-1/2 top-full flex flex-1 -translate-x-1/2 translate-y-4 gap-4 overflow-auto pr-2',
            'lg:relative lg:left-0 lg:top-0 lg:h-[344px] lg:translate-x-0 lg:translate-y-0 lg:flex-col',
            'xl:h-[452px]',
          )}
        >
          {newTokens.map((token, index) => (
            <div key={index} onClick={() => setActiveIndex(index)}>
              <TokenBoard active={activeIndex === index} tokenInfo={token} />
            </div>
          ))}
        </div>

        <div className="relative w-max lg:max-w-[66%] xl:max-w-none">
          <TokenPoster tokenInfo={newTokens[0]} hidden />

          {newTokens.map((token, index) => (
            <div
              className={clsx('absolute left-0 top-0', { 'z-10': activeIndex === index })}
              key={index}
            >
              <TokenPoster tokenInfo={token} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
})

const TokenBoard = memo(function TokenBoard(props: {
  tokenInfo: TokenInfo
  active?: boolean
}) {
  const { countdown } = useCountdown(props.tokenInfo.deadline)

  return (
    <>
      <Image
        className={clsx(
          !!props.active ? 'border-dark-foreground-active' : 'border-transparent',
          'rounded-full border-4 transition-all lg:hidden',
        )}
        src={props.tokenInfo.tokenIconUrl}
        alt={''}
        width={40}
        height={40}
      />

      <div
        className={clsx(
          'm-1 hidden rounded-xl bg-dark-foreground p-2 text-white',
          'group cursor-pointer transition-all lg:block xl:rounded-[20px]  xl:p-4 xl:pb-2',
          !!props.active
            ? 'bg-dark-foreground-active hover:bg-dark-foreground-active'
            : ' hover:bg-dark-foreground-hover',
        )}
        tabIndex={0}
      >
        <div className="flex items-center">
          <Image
            src={props.tokenInfo.tokenIconUrl}
            alt={''}
            width={80}
            height={80}
            className="h-14 w-14 xl:h-16 xl:w-16"
          />

          <div className="flex flex-1 flex-col justify-between pl-4">
            <h1 className="text-xl font-semibold xl:text-2xl">
              {props.tokenInfo.tokenSymbol}
            </h1>
            <div className="flex gap-2 py-0.5 lg:text-xl xl:text-2xl">
              <WebSiteIcon tabIndex={0} theme="light" />
              <DiscordIcon tabIndex={0} theme="light" />
              <TwitterIcon tabIndex={0} theme="light" />
            </div>
          </div>

          <div
            className={clsx(
              'h-fit opacity-50 transition-all hover:opacity-100 group-hover:translate-x-1',
            )}
          >
            <ArrowButton type="outline" shape="→" direction="tr" />
          </div>
        </div>

        <div className="flex justify-between pt-2 text-xs xl:pt-4 xl:text-lg">
          <div
            className={clsx(
              'mr-2 xl:mr-4',
              !!props.active ? 'text-white' : 'text-[#2EFFA7]',
            )}
          >{`1 ETH = ${
            props.tokenInfo.rateOfEth
          } ${props.tokenInfo.tokenSymbol.toUpperCase()}`}</div>

          <div>{countdown}</div>
        </div>
      </div>
    </>
  )
})

const TokenPoster = memo(function TokenPoster(props: {
  tokenInfo: TokenInfo
  hidden?: boolean
}) {
  const { countdown } = useCountdown(props.tokenInfo.deadline)
  return (
    <div className="relative">
      <Image
        src={props.tokenInfo.posterUrl}
        alt={''}
        width={1034}
        height={522}
        className={clsx(
          { 'opacity-0': !!props.hidden },
          'block rounded-xl object-cover',
          'lg:h-[344px] lg:w-[682px]',
          'xl:h-[452px] xl:w-[894px]',
        )}
      />

      <div className="absolute bottom-0 w-full rounded-b-xl bg-black/20 p-2 text-white lg:hidden">
        <div className="flex items-center">
          <Image
            src={props.tokenInfo.tokenIconUrl}
            alt={''}
            width={80}
            height={80}
            className="h-10 w-10"
          />

          <div className="flex flex-1 flex-col justify-between pl-2">
            <h1 className="text-lg font-semibold">{props.tokenInfo.tokenSymbol}</h1>
            <div className="flex gap-2 py-0.5">
              <WebSiteIcon tabIndex={0} theme="light" />
              <DiscordIcon tabIndex={0} theme="light" />
              <TwitterIcon tabIndex={0} theme="light" />
            </div>
          </div>

          <div className="text-end text-xs">
            <div className="mb-2 text-[#2EFFA7]">{`1 ETH = ${
              props.tokenInfo.rateOfEth
            } ${props.tokenInfo.tokenSymbol.toUpperCase()}`}</div>
            <div>{countdown}</div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default NewTokens
