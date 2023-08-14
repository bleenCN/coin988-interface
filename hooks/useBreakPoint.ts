import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

export const useLessThanWidth = (width: number) => {
  const [flag, setFlag] = useState(true)

  const resizeHandler = useCallback(() => {
    if (window.screen.width < width) setFlag(true)
    else setFlag(false)
  }, [width])

  useEffect(() => {
    console.log('effect')
  }, [])
  // 初始执行一次
  useLayoutEffect(() => {
    resizeHandler()
  }, [resizeHandler])

  useLayoutEffect(() => {
    console.log('layoutEffect')
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  return flag
}
