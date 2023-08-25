'use client'
import React, { memo } from 'react'

import { BlueTickIcon } from './icons.b'

export type ValueType = string | number | boolean
export interface OptionType<T extends ValueType> {
  label: string
  value: T
}
interface ApplyRadioGroupProps<T extends ValueType> {
  name: string
  id?: string
  options: OptionType<T>[]
  onChange?: (value: T) => void
  value?: T
}

const ApplyRadioGroup = memo(function ApplyRadioGroup<T extends ValueType>(
  props: ApplyRadioGroupProps<T>,
) {
  return (
    <div className="mb-3 mt-6 flex gap-10">
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
}) as <T extends ValueType>(props: ApplyRadioGroupProps<T>) => JSX.Element

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
      <span className="text-sm font-semibold">{option.label}</span>
    </div>
  )
})
