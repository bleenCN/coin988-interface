'use client'
import React, { memo } from 'react'

import { BlueTickIcon } from './icons.b'

type ValueType = string | number | boolean
interface OptionType<T extends ValueType> {
  label: string
  value: T
}
interface ApplyRadioGroupProps<T extends ValueType> {
  name: string
  id?: string
  options: OptionType<T>[]
  onChange?: (value: ValueType) => void
  value?: T
}

const ApplyRadioGroup = memo(function ApplyRadioGroup<T extends ValueType>(
  props: ApplyRadioGroupProps<T>,
) {
  return (
    <div className="flex gap-10">
      {props.options.map((option, index) => {
        return (
          <Radio
            key={index}
            option={option}
            onClick={() => props.onChange && props.onChange(option.value)}
            active={props.value === option.value}
          />
        )
      })}
    </div>
  )
})

export default ApplyRadioGroup

interface RadioProps<T extends string | number | boolean> {
  option: OptionType<T>
  active?: boolean
  onClick?: React.MouseEventHandler
}
const Radio = memo(function Radio<T extends string | number | boolean>({
  option,
  active,
  onClick,
}: RadioProps<T>) {
  return (
    <div
      tabIndex={0}
      className="flex cursor-pointer select-none items-center gap-2"
      onClick={onClick}
    >
      {active ? (
        <BlueTickIcon className="text-xl" />
      ) : (
        <span className="block h-5 w-5 rounded-full border-2 border-c4" />
      )}
      <span className="text-sm font-semibold">{String(option.value)}</span>
    </div>
  )
})
