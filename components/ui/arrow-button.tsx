import clsx from 'clsx'
import React, { CSSProperties, memo } from 'react'

import { ArrowIcon } from './icons.b'

interface ArrowButtonProps {
  direction?: 'left' | 'right'
  size?: 'normal' | 'lg'
  type?: 'outline' | 'flat'
  className?: string
  style?: CSSProperties
  onClick?: () => void
}
const ArrowButton = memo(function ArrowButton({
  direction = 'left',
  size = 'normal',
  type = 'flat',
  className,
  style,
  onClick,
}: ArrowButtonProps) {
  return (
    <div
      className={clsx(
        { 'rotate-180': direction === 'left' },
        { 'p-2': size === 'normal' },
        { 'p-3.5': size === 'lg' },
        { ' bg-black/50': type === 'flat' },
        'w-fit cursor-pointer rounded-full transition-all',
        className,
      )}
      style={style}
      onClick={onClick}
    >
      <ArrowIcon className={clsx('text-2xl')} />
    </div>
  )
})

export default ArrowButton
