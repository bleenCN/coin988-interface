'use client'

import { useInView } from 'react-intersection-observer'

export function StickyHeaderContainer({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  return (
    <>
      <div ref={ref} />
      <div
        className={
          'sticky top-16 z-10 border-b lg:top-20' +
          (inView
            ? ''
            : ' bg-background/90 backdrop-blur-xl supports-backdrop-blur:bg-background/80')
        }
      >
        <div className="container flex h-20 items-center gap-4">{children}</div>
      </div>
    </>
  )
}
