'use client'
import 'swiper/css'

import Image from 'next/image'
import { memo } from 'react'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'

import { TwitterAuthIcon } from '@/components/ui/icons.b'
import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: 'twitter达人',
}

interface TwitterUser {
  avatar: string
  name: string
  category: string
  authentication?: boolean
}

const users: TwitterUser[] = [
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
    authentication: true,
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
    authentication: true,
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
  {
    avatar: '/images/home-avatar-placeholder.png',
    name: 'baneam',
    category: 'degame',
  },
]

const TwitterStars = memo(function TwitterStars() {
  const t = getT(json)
  const usersUp = users
  const usersDown = users
  return (
    <div>
      <Title>{t('title')}</Title>

      <div className="pt-6 lg:pt-12">
        <div>
          <UserSwiper users={usersUp} />
        </div>
        <div className="mt-4">
          <UserSwiper users={usersDown} />
        </div>
      </div>
    </div>
  )
})

const UserSwiper = memo(function UserSwiper({ users }: { users: TwitterUser[] }) {
  return (
    <SwiperContainer
      slidesPerView={3.5}
      loop
      breakpoints={{
        768: {
          slidesPerView: 6,
        },
      }}
      autoplay
    >
      {users.concat(users).map((user, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center">
            <Image
              src={user.avatar}
              alt={''}
              width={120}
              height={120}
              className="h-14 w-14"
            />

            <div className="relative">
              <span className="text-sm leading-4 lg:text-base">{user.name}</span>
              <TwitterAuthIcon className="absolute left-full top-1/2 mt-px -translate-y-1/2 text-sm lg:text-base" />
            </div>

            <div className="text-xs text-black/50">{user.category}</div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
})

export default TwitterStars
