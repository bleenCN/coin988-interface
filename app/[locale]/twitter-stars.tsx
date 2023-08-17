'use client'

import gsap from 'gsap'
import {
  CSSProperties,
  memo,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Title from '@/components/ui/Title'
import TwitterUser, { TwitterUserProps } from '@/components/ui/twitter-user'
import { getT } from '@/lib/utils'

const json = {
  title: 'twitter达人',
}

const users: TwitterUserProps[] = [
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
    authentication: true,
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
    authentication: true,
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
  },
  {
    avatar: '/images/twitter-avatar-placeholder.png',
    name: 'baneam',
    subtitle: 'degame',
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
  users: TwitterUserProps[]
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
          <TwitterUser user={user} key={index} />
        ))}
      </div>
    </div>
  )
})

export default TwitterStars
