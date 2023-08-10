'use client'
import 'swiper/css'

import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, memo, useCallback, useState } from 'react'
import Swiper from 'swiper'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'

import ArrowButton from '@/components/ui/arrow-button'
import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: 'Infra&Tools',
}

interface Tool {
  iconUrl: string
  name: string
  type: string
}

const tools: Tool[] = [
  {
    iconUrl: '/images/home-tools-icon-placeholder.png',
    name: 'Rarity.tools',
    type: '交易所',
  },
  {
    iconUrl: '/images/home-tools-icon-placeholder.png',
    name: 'Rarity.tools',
    type: '交易所',
  },
  {
    iconUrl: '/images/home-tools-icon-placeholder.png',
    name: 'Rarity.tools',
    type: '交易所',
  },
  {
    iconUrl: '/images/home-tools-icon-placeholder.png',
    name: 'Rarity.tools',
    type: '交易所',
  },
  { iconUrl: '/images/home-tools-icon-placeholder.png', name: 'degame', type: '交易所' },
  { iconUrl: '/images/home-tools-icon-placeholder.png', name: 'degame', type: '交易所' },
  { iconUrl: '/images/home-tools-icon-placeholder.png', name: 'degame', type: '交易所' },
  { iconUrl: '/images/home-tools-icon-placeholder.png', name: 'degame', type: '交易所' },
]

const InfraAndTools = memo(function InfraAndTools() {
  const t = getT(json)
  return (
    <>
      <Title>{t('title')}</Title>

      <div className="pt-4 lg:pt-10">
        <ToolsSwiper />
      </div>
    </>
  )
})

const ToolsSwiper = memo(function ToolsSwiper() {
  const maskStyle: CSSProperties = {
    WebkitMask:
      'linear-gradient(to right,transparent 0%, #fff 10%, #fff 90%, transparent 100%)',
  }

  const [swiper, setSwiper] = useState<Swiper | undefined>(undefined)
  const updateSwiper = useCallback((swiper: Swiper) => {
    console.log('update')

    setSwiper(swiper)
  }, [])

  return (
    <div className="relative">
      <SwiperContainer
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 6 },
        }}
        onSwiper={updateSwiper}
        style={maskStyle}
        loop
      >
        {/* 依据官方文档 slide 数量应大于 preview*2 */}
        {tools.concat(tools).map((tool, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <ToolBoard tool={tool} />
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>

      <div
        onClick={() => swiper?.slidePrev()}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
      >
        <ArrowButton type="outline" direction="left" theme="dark" shape=">" />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
      >
        <ArrowButton type="outline" direction="right" theme="dark" shape=">" />
      </div>
      <div></div>
    </div>
  )
})

const ToolBoard = memo(function ToolBoard({ tool }: { tool: Tool }) {
  return (
    <div
      className={clsx(
        'grid place-items-center text-center',
        'bg-light-foreground hover:bg-light-foreground-hover',
        'rounded-2xl xl:rounded-3xl',
        'cursor-pointer transition-all',
        'pb-2 pt-6 lg:pb-4 lg:pt-8 xl:pb-8 xl:pt-12',
      )}
    >
      <Image
        src={tool.iconUrl}
        alt={''}
        width={120}
        height={120}
        className="h-10 w-10 lg:h-16 lg:w-16 xl:h-[80px] xl:w-[80px]"
      />
      <div className={clsx('text-sm font-semibold lg:text-lg', 'mt-2 lg:mt-6')}>
        {tool.name}
      </div>
      <div className={clsx('text-xs font-light text-black/40 lg:text-base', 'xl:mt-1')}>
        {tool.type}
      </div>
    </div>
  )
})

export default InfraAndTools
