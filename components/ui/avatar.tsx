import Image from 'next/image'
import { memo, useState } from 'react'

const Avatar = memo(function Avatar(props: React.ComponentProps<typeof Image>) {
  const [loadImgError, setLoadImgError] = useState(false)

  return !loadImgError ? (
    <Image {...props} alt={props.alt} onError={() => setLoadImgError(true)} />
  ) : (
    <div className={props.className}>{props.alt.substring(0, 1)}</div>
  )
})

export default Avatar
