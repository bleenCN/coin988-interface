import clsx from 'clsx'
import React, { CSSProperties, memo } from 'react'

import { ArrowIcon } from './icons.b'

interface ArrowButtonProps {
  direction?: 'left' | 'right'
  size?: 'normal' | 'lg'
  type?: 'outline' | 'flat'
  className?: string
  style?: CSSProperties
  theme?: 'light' | 'dark'
  onClick?: () => void
}

const ArrowButton = memo(function ArrowButton({
  direction = 'left',
  size = 'normal',
  type = 'flat',
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
        { 'text-white': theme === 'light', 'text-black': theme === 'dark' },
        'w-fit cursor-pointer rounded-full transition-all',
        className,
      )}
      style={style}
      onClick={onClick}
    >
      <ArrowIcon type={type} className={clsx('text-2xl')} />
    </button>
  )
})

export default ArrowButton
