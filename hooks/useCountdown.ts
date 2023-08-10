import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useCallback, useEffect, useState } from 'react'

dayjs.extend(duration)

export function useCountdown(deadline: Date) {
  const [countdown, setCountdown] = useState('--d --h --m')

  const updateCountdown = useCallback(() => {
    const now = new Date()
    const diff = deadline.getTime() - now.getTime()
    const diffObj = dayjs.duration(diff)

    const days = diffObj.days()
    const hours = diffObj.hours()
    const minutes = diffObj.minutes()
    setCountdown(`${days}d ${hours}h ${minutes}m`)
  }, [deadline])

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdown()
    }, 1000)
    return () => clearInterval(timer)
  }, [updateCountdown])

  return { countdown }
}
