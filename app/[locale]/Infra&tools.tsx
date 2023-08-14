'use client'
import 'swiper/css'

import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, memo, useCallback, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

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
      'linear-gradient(to right,transparent 0%, #fff 100px, #fff calc(100% - 100px), transparent 100%)',
  }

  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined)
  const updateSwiper = useCallback((swiper: SwiperClass) => {
    setSwiper(swiper)
  }, [])

  return (
    <div className="relative">
      <Swiper
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
      </Swiper>

      <div
        onClick={() => swiper?.slidePrev()}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <ArrowButton type="outline" direction="tl" theme="dark" shape=">" />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <ArrowButton type="outline" direction="tr" theme="dark" shape=">" />
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
        'bg-light-foreground hover:bg-light-foreground-hover dark:bg-dark-background',
        'rounded-2xl xl:rounded-3xl',
        'cursor-pointer transition-all',
        'pb-2 pt-6 lg:pb-4 lg:pt-8 xl:pb-8 xl:pt-12',
        'shadow hover:-translate-y-1 hover:shadow-lg',
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
      <div className={clsx('text-xs font-light opacity-40 lg:text-base', 'xl:mt-1')}>
        {tool.type}
      </div>
    </div>
  )
})

export default InfraAndTools
