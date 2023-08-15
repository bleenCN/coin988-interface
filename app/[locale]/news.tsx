'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, memo, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import ArrowButton from '@/components/ui/arrow-button'
import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: '最新动态',
}

interface NewsInfo {
  imgUrl: string
  title: string
  subtitle: string
  author: string
  authorAvatar: string
  authentication: boolean
  link: string
}

const newsMocker: NewsInfo[] = [
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
  {
    imgUrl: '/images/home-news-placeholder.png',
    title: 'How to install Aptos-cli？',
    subtitle: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/twitter-avatar-placeholder.png',
    link: '123',
  },
]

const maskStyle: CSSProperties = {
  WebkitMask:
    'linear-gradient(to right,transparent 0%,#fff 20px, #fff calc(100% - 20px), transparent 100%)',
}

const News = memo(function News() {
  const t = getT(json)

  const [swiper, setSwiper] = useState<SwiperClass>()

  return (
    <>
      <Title>{t('title')}</Title>

      <div className="relative mt-6 lg:mt-10">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1440: {
              slidesPerView: 4.2,
            },
          }}
          style={maskStyle}
          onSwiper={(_swiper) => setSwiper(_swiper)}
        >
          {newsMocker.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="p-1 md:p-4">
                <NewsCard news={news} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={clsx(
            'absolute left-0 top-1/2 z-10 hidden -translate-x-2/3',
            'opacity-50 transition-all hover:opacity-100 lg:block',
          )}
          onClick={() => swiper?.slidePrev()}
        >
          <ArrowButton direction="tl" />
        </div>
        <div
          className={clsx(
            'absolute right-0 top-1/2 z-10 hidden translate-x-2/3',
            'opacity-50 transition-all hover:opacity-100 lg:block',
          )}
          onClick={() => swiper?.slideNext()}
        >
          <ArrowButton direction="tr" />
        </div>
      </div>
    </>
  )
})

const NewsCard = memo(function NewsCard({ news }: { news: NewsInfo }) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-3xl shadow transition-all hover:-translate-y-1 hover:shadow-lg">
      <Image src={news.imgUrl} alt={''} width={420} height={210} />

      <div className="rounded-b-3xl border border-t-0 border-[#DEE1EA] px-3 pb-4 pt-2 dark:border-dark-foreground">
        <h1 className="mt-2 font-semibold">{news.title}</h1>
        <div className="mt-2 line-clamp-3 h-[4.5em] text-sm opacity-50">
          {news.subtitle}
        </div>

        <div className="mt-4 flex items-center">
          <Image src={news.authorAvatar} alt={''} width={42} height={42} />
          <h3 className="flex-1 overflow-hidden text-ellipsis pl-2">
            <span>{news.author}</span>
            <span className={clsx({ hidden: !news.authentication })}>icon</span>
          </h3>
          <div className="opacity-30 transition-all hover:opacity-100">
            <ArrowButton type="outline" shape="→" theme="dark" direction="tr" />
          </div>
        </div>
      </div>
    </div>
  )
})

export default News
