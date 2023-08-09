import Image, { ImageProps } from 'next/image'
import React, { memo } from 'react'

type IconProps = React.ComponentProps<'svg'>
type ImgProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>

export const SearchIcon = memo(function SearchIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z"
        stroke="#9EA1AC"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
})

export const ThalaIcon = memo(function ThalaIcon(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image
      src={'/images/icon-thala.png'}
      alt={'Thala'}
      width={24}
      height={24}
      {...props}
    />
  )
})
export const CoinbaseIcon = memo(function CoinbaseIcon(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image
      src={'/images/icon-coinbase.png'}
      alt={'Coinbase'}
      width={24}
      height={24}
      {...props}
    />
  )
})
export const BlogIcon = memo(function BlogIcon(props: ImgProps) {
  return (
    <Image src={'/images/icon-blog.png'} alt={'blog'} width={24} height={24} {...props} />
  )
})

export const ArrowIcon = memo(function ArrowIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 4L16 12L8 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export const LayeredIcon = memo(function LayeredIcon(props: ImgProps) {
  return (
    <Image src={'/images/icon-layered.png'} alt={''} width={74} height={74} {...props} />
  )
})
export const PieIcon = memo(function LayeredIcon(props: ImgProps) {
  return <Image src={'/images/icon-pie.png'} alt={''} width={74} height={74} {...props} />
})
