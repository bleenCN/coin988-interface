import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useCallback, useEffect, useRef, useState } from 'react'

dayjs.extend(duration)

interface CountdownOptions {
  d?: boolean
  h?: boolean
  m?: boolean
  s?: boolean
}

interface Time {
  d: number
  h: number
  m: number
  s: number
}

export function useCountdown(
  deadline: Date,
  options: CountdownOptions = { d: true, h: true, m: true, s: true },
) {
  const TimeRef = useRef<Time>({ d: NaN, h: NaN, m: NaN, s: NaN })
  const [countdown, setCountdown] = useState('')

  const updateCountdown = useCallback(() => {
    const now = new Date()
    const diff = deadline.getTime() - now.getTime()
    const diffObj = dayjs.duration(diff)

    if (options.d) TimeRef.current.d = Math.floor(diffObj.asDays())
    if (options.h) TimeRef.current.h = diffObj.hours()
    if (options.m) TimeRef.current.m = diffObj.minutes()
    if (options.s) TimeRef.current.s = diffObj.seconds()

    setCountdown(format(TimeRef.current, options))
  }, [deadline, options])

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdown()
    }, 1000)
    return () => clearInterval(timer)
  }, [updateCountdown])

  return { countdown }
}

const format = (time: Time, options: CountdownOptions) => {
  const s: string[] = []

  if (options.d) s.push(isNaN(time.d) ? '--d' : `${time.d}d`)
  if (options.h) s.push(isNaN(time.h) ? '--h' : `${time.h}h`)
  if (options.m) s.push(isNaN(time.m) ? '--m' : `${time.m}m`)
  if (options.s) s.push(isNaN(time.s) ? '--s' : `${time.s}s`)

  return s.join(' ')
}
