import clsx from 'clsx'
import React, { CSSProperties, memo } from 'react'

import { ArrowIcon } from './icons.b'

interface ArrowButtonProps {
  direction?: 'left' | 'right'
  size?: 'normal' | 'lg'
  type?: 'outline' | 'flat'
  shape?: '>' | '→'
  className?: string
  style?: CSSProperties
  theme?: 'light' | 'dark'
  onClick?: () => void
}

const ArrowButton = memo(function ArrowButton({
  direction = 'left',
  size = 'normal',
  type = 'flat',
  shape = '>',
  className,
  theme = 'light',
  style,
  onClick,
}: ArrowButtonProps) {
  return (
    <button
      className={clsx(
        { 'rotate-180': direction === 'left' },
        { 'p-2': size === 'normal', 'p-3.5': size === 'lg' },
        { ' bg-black/50': type === 'flat', border: type === 'outline' },
        {
          'text-white': theme === 'light',
          'border-dark-foreground text-dark-foreground hover:border-dark-foreground-active hover:text-dark-foreground-active':
            theme === 'dark',
        },
        'w-fit cursor-pointer rounded-full transition-all',
        className,
      )}
      style={style}
      onClick={onClick}
    >
      <ArrowIcon shape={shape} className={clsx('text-2xl')} />
    </button>
  )
})

export default ArrowButton
