import { useCallback, useEffect, useState } from 'react'

import { isBeforeTime } from '@/lib/utils'

import { useCountdown } from './useCountdown'

export type Staus = 'pending' | 'upcoming' | 'ongoing' | 'completed'

export const useSubscribeStatus = (timeOn?: Date, timeOff?: Date) => {
  const [status, setStatus] = useState<Staus>('pending')

  const updateStatus = useCallback(() => {
    if (!timeOn || !timeOff) return setStatus('pending')
    if (timeOn && isBeforeTime(timeOn)) return setStatus('upcoming')
    if (timeOff && isBeforeTime(timeOff)) return setStatus('ongoing')
    if (timeOff && !isBeforeTime(timeOff)) return setStatus('completed')
  }, [timeOff, timeOn])

  useEffect(() => {
    updateStatus()
    const timer = setInterval(updateStatus, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [updateStatus])

  const { countdown: timeOnCountdown } = useCountdown(timeOn)
  const { countdown: timeOffCountdown } = useCountdown(timeOff)

  return { status, timeOnCountdown, timeOffCountdown }
}
