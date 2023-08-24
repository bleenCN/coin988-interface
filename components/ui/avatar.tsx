import Image, { ImageProps } from 'next/image'
import { memo, useState } from 'react'

type AvatarProps = React.ComponentProps<'div'> & {
  src: ImageProps['src']
  name: string
  width: ImageProps['width']
  height: ImageProps['height']
}

const Avatar = memo(function Avatar(props: AvatarProps) {
  const [loadImgError, setLoadImgError] = useState(false)

  return !loadImgError ? (
    <Image
      src={props.src}
      alt={props.name}
      width={props.width}
      height={props.height}
      className={props.className}
      style={props.style}
      onError={() => setLoadImgError(true)}
    />
  ) : (
    <div {...props}>{props.name[0]}</div>
  )
})

export default Avatar
