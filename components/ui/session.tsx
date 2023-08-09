import { memo, ReactNode } from 'react'

export interface SessionProps {
  children: ReactNode
  name?: string
  backgroundEl?: JSX.Element
}

const Session = memo(function Session(props: SessionProps) {
  return (
    <div className="relative">
      <div className="absolute">{props.backgroundEl}</div>
      <div className="relative max-w-[1800px] px-6">{props.children}</div>
    </div>
  )
})

export default Session
