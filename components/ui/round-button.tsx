import clsx from 'clsx'
import { CSSProperties, memo, ReactNode } from 'react'

interface RoundButtonProps {
  children: ReactNode
  theme?: 'white' | 'black'
  className?: string
  style?: CSSProperties
}

const RoundButton = memo(function RoundButton({
  children,
  theme = 'white',
  className,
  style,
}: RoundButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full border-2 px-8 py-3',
        { 'border-white font-semibold text-white outline-white': theme === 'white' },
        { 'border-[#292A2D] text-[#292A2D]': theme === 'black' },
        className,
      )}
      style={style}
    >
      {children}
    </button>
  )
})

export default RoundButton
