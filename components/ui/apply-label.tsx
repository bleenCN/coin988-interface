import { memo, ReactNode } from 'react'

const Label = memo(function Label({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 mr-8 mt-6 block select-none pl-1 text-sm font-semibold">
      {children}
    </span>
  )
})

export default Label
