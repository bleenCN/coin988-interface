'use client'
import 'swiper/css'

import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { memo, useState } from 'react'
import Swiper from 'swiper'
import { Swiper as SwiperFC, SwiperSlide } from 'swiper/react'

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
  const [swiper, setSwiper] = useState<Swiper | undefined>()

  return (
    <SwiperFC
      spaceBetween={12}
      slidesPerView={1}
      breakpoints={{
        768: {
          spaceBetween: 24,
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
      onSwiper={(swiper) => setSwiper(swiper)}
      loop
      className="group rounded-xl"
    >
      {ads.map((ad, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={ad.imgsrc}
              alt={ad.alt}
              width={336}
              height={160}
              className="block cursor-pointer"
            />
          </SwiperSlide>
        )
      })}

      <ArrowButton
        direction="left"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:left-5"
        onClick={() => swiper?.slidePrev()}
      />
      <ArrowButton
        direction="right"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:right-5"
        onClick={() => swiper?.slideNext()}
      />
    </SwiperFC>
  )
})

export default ADs
