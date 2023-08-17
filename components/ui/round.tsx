import clsx from 'clsx'
import { ReactNode } from 'react'

const Round = ({
  children,
  size = 'normal',
}: {
  children: ReactNode
  size?: 'normal' | 'sm'
}) => {
  return (
    <div
      tabIndex={0}
      className={clsx(
        'cursor-pointer rounded-full bg-[#EDEFF6] p-2 hover:bg-light-foreground-hover dark:bg-dark-background',
        { 'md:p-4': size === 'normal' },
      )}
    >
      {children}
    </div>
  )
}

export default Round
