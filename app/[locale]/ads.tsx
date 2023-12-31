'use client'
import 'swiper/css'

import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { memo, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import ArrowButton from '@/components/ui/arrow-button'

interface AD {
  imgsrc: ImageProps['src']
  alt: string
}

const ADs = memo(function ADd() {
  const ads: AD[] = [
    { imgsrc: '/images/home-ad-placeholder1.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder2.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder3.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder4.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder5.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder1.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder2.png', alt: 'place-holder' },
    { imgsrc: '/images/home-ad-placeholder3.png', alt: 'place-holder' },
  ]
  const [swiper, setSwiper] = useState<SwiperClass | undefined>()

  return (
    <Swiper
      onSwiper={(swiper) => setSwiper(swiper)}
      className="group rounded-xl"
      slidesPerView={1}
      loop
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
        1800: {
          slidesPerView: 5,
        },
      }}
    >
      {/* 依据官方文档 slide 数量应大于 preview*2 */}
      {ads.concat(ads).map((ad, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                src={ad.imgsrc}
                alt={ad.alt}
                width={336}
                height={160}
                className="h-auto w-auto cursor-pointer px-1 lg:px-2"
              />
            </div>
          </SwiperSlide>
        )
      })}

      <ArrowButton
        direction="tl"
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:left-5"
        onClick={() => swiper?.slidePrev()}
      />
      <ArrowButton
        direction="tr"
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:right-5"
        onClick={() => swiper?.slideNext()}
      />
    </Swiper>
  )
})

export default ADs
