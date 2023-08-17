import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'

import { TwitterAuthIcon } from './icons.b'

export interface TwitterUserProps {
  avatar: string
  name: string
  subtitle: string
  authentication?: boolean
}

const TwitterUser = memo(function TwitterUser({ user }: { user: TwitterUserProps }) {
  return (
    <div className="group m-4 shrink-0 cursor-pointer text-center lg:mx-10 lg:my-6">
      <Image
        src={user.avatar}
        alt={''}
        width={80}
        height={80}
        className={clsx(
          'mx-auto h-12 w-12 overflow-hidden rounded-full transition-all',
          'border-2 border-transparent group-hover:border-dark-foreground-active lg:h-20 lg:w-20',
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

      <div className="text-xs opacity-50">{user.subtitle}</div>
    </div>
  )
})

export default TwitterUser
