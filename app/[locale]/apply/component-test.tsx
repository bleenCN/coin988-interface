'use client'
import { memo, useState } from 'react'

import ApplyInput from '@/components/ui/apply-input'
import ApplySelect from '@/components/ui/apply-select'

const options = [
  { label: 'test1', value: 1 },
  { label: 'test2', value: 2 },
  { label: 'test3', value: 3 },
  { label: 'test4', value: 4 },
]

const TestComponent = memo(function TestComponent() {
  const [value, setVal] = useState<number>()
  console.log(value)

  return (
    <div>
      <span>↓↓↓ test ↓↓↓</span>
      <div className="mx-auto w-[90vw]">
        <ApplyInput placeholder="test" />
        <ApplySelect
          mode="single"
          options={options}
          value={value}
          onChange={(v) => setVal(v)}
        />
      </div>
    </div>
  )
})

export default TestComponent
