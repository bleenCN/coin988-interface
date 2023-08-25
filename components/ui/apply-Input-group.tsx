'use client'
import clsx from 'clsx'
import { memo, ReactNode, useState } from 'react'

import { ArrowIcon } from './icons.b'

interface InputGroupProps {
  title?: string
  expend?: boolean
  children?: ReactNode
}

const InputGroup = memo(function InputGroup(props: InputGroupProps) {
  const [expend, setExpend] = useState(props.expend ?? false)
  return (
    <div className="mt-12 max-w-[600px]">
      <h2 className="flex items-center gap-3 border-b pb-4">
        <span className="block h-6 w-1.5 bg-c1" />
        <span className="block flex-1 font-semibold">{props.title}</span>
        <span className="block px-2">
          <ArrowIcon
            tabIndex={0}
            onClick={() => setExpend(!expend)}
            className={clsx(
              'scale-150 transition-all',
              expend ? 'rotate-[270deg]' : 'rotate-90',
            )}
          />
        </span>
      </h2>
      <div
        className={clsx(
          'grid overflow-hidden transition-all',
          expend ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0">{props.children}</div>
      </div>
    </div>
  )
})

export default InputGroup
