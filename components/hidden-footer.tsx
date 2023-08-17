'use client'
import { memo, useEffect } from 'react'

import useUiStore from '@/store/useFooterState'

const HiddenFooter = memo(function HiddenFooter() {
  const setFooterDisplay = useUiStore((state) => state.setFooterDisplay)

  useEffect(() => {
    setFooterDisplay(false)
    return () => setFooterDisplay(true)
  }, [setFooterDisplay])

  return <> </>
})

export default HiddenFooter
