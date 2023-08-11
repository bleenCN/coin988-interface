'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import Image from 'next/image'
import {
  CSSProperties,
  memo,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

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
  },
]

const maskStyle: CSSProperties = {
  WebkitMask:
    'linear-gradient(to right,transparent 0, #fff 100px, #fff calc(100% - 100px), transparent 100%)',
}
const TwitterStars = memo(function TwitterStars() {
  const t = getT(json)
  const usersUp = users
  const usersDown = users

  return (
    <div>
      <Title>{t('title')}</Title>

      <div className="pt-6 lg:pt-12">
        <div style={maskStyle}>
          <UserSwiper direction="tl" speed={20} users={usersUp} />
          <UserSwiper direction="tr" speed={20} users={usersDown} />
        </div>
      </div>
    </div>
  )
})

interface UserSwiperProps {
  users: TwitterUser[]
  direction?: 'tl' | 'tr'
  speed?: number
}

const UserSwiper = memo(function UserSwiper({
  users,
  direction = 'tl',
  speed = 50,
}: UserSwiperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [tl, setTl] = useState<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      setTl(tl)
    })
    return () => ctx.revert()
  }, [])

  const pause = useCallback(() => {
    tl?.pause()
  }, [tl])

  const resume = useCallback(() => {
    tl?.resume()
  }, [tl])

  const animate = useCallback(
    (el: HTMLDivElement) => {
      if (!tl) return
      const width = el.scrollWidth
      let x = width / 2
      const duration = width / speed / 2

      if (direction === 'tl') tl.to(el, { ease: 'linear', repeat: -1, x: -x, duration })
      if (direction === 'tr')
        tl.set(el, { x: -x }).to(el, { ease: 'linear', repeat: -1, x: 0, duration })
    },
    [direction, speed, tl],
  )

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    animate(container)
  }, [animate])

  return (
    <div onMouseEnter={pause} onMouseLeave={resume} className="w-full overflow-hidden">
      <div className="flex" ref={containerRef}>
        {users.concat(users).map((user, index) => (
          <div
            className="m-4 shrink-0 cursor-pointer text-center lg:mx-10 lg:my-6"
            key={index}
          >
            <Image
              src={user.avatar}
              alt={''}
              width={80}
              height={80}
              className={clsx(
                'mx-auto h-12 w-12 overflow-hidden rounded-full',
                'lg:h-20 lg:w-20',
              )}
            />

            <div className="relative mx-auto mt-2 w-fit">
              <span className="font-semibold lg:text-lg">{user.name}</span>
              <TwitterAuthIcon
                className={clsx(
                  { hidden: !user.authentication },
                  'absolute left-full top-1/2 -translate-y-1/2',
                )}
              />
            </div>

            <div className="text-xs opacity-50">{user.category}</div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default TwitterStars
