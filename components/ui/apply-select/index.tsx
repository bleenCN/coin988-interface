'use client'
import './style.scss'

import Select, { Option, SelectProps } from 'rc-select'
import { memo } from 'react'

interface Option<ValueType = any> {
  label: string
  value: ValueType
}

type ApplySelectProps<ValueType> =
  | {
      disabled?: boolean
      placeholder?: SelectProps<ValueType[]>['placeholder']
      maxTagCount?: SelectProps<ValueType[]>['maxTagCount']
      mode: 'multiple' | 'tags'
      options: Option<ValueType>[]
      allowClear?: SelectProps<ValueType[]>['allowClear']
      removeIcon?: SelectProps<ValueType[]>['removeIcon']
      value: SelectProps<ValueType[]>['value']
      defaultValue?: SelectProps<ValueType[]>['defaultValue']
      onChange: SelectProps<ValueType[]>['onChange']
      onSelect?: SelectProps<ValueType[]>['onSelect']
      onDeselect?: SelectProps<ValueType[]>['onDeselect']
      onFocus?: SelectProps<ValueType[]>['onFocus']
      onBlur?: SelectProps<ValueType[]>['onBlur']
    }
  | {
      disabled?: boolean
      placeholder?: SelectProps<ValueType>['placeholder']
      maxTagCount?: SelectProps<ValueType>['maxTagCount']
      mode: 'single'
      options: Option<ValueType>[]
      allowClear?: SelectProps<ValueType>['allowClear']
      removeIcon?: SelectProps<ValueType>['removeIcon']
      value: SelectProps<ValueType>['value']
      defaultValue?: SelectProps<ValueType>['defaultValue']
      onChange: SelectProps<ValueType>['onChange']
      onSelect?: SelectProps<ValueType>['onSelect']
      onDeselect?: SelectProps<ValueType>['onDeselect']
      onFocus?: SelectProps<ValueType>['onFocus']
      onBlur?: SelectProps<ValueType>['onBlur']
    }

// TODO 默认样式待修改
const ApplySelect = memo(function ApplySelect<ValueType>(
  props: ApplySelectProps<ValueType>,
) {
  return (
    <Select<Option<ValueType>['value'] | Option<ValueType>['value'][]>
      placeholder={props.placeholder}
      mode={props.mode !== 'single' ? props.mode : undefined}
      disabled={props.disabled ?? false}
      maxTagCount={props.maxTagCount ?? 'responsive'}
      allowClear={props.allowClear}
      removeIcon={() => <span className="absolute right-0">×</span>}
      value={props.value}
      defaultValue={props.defaultValue}
      optionFilterProp="children"
      onChange={props.onChange as SelectProps['onChange']}
      onSelect={props.onSelect as SelectProps['onSelect']}
      onDeselect={props.onDeselect as SelectProps['onSelect']}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.options.map((option, index) => (
        <Option key={index} value={option.value} title={option.label}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}) as <ValueType>(props: ApplySelectProps<ValueType>) => JSX.Element

export default ApplySelect
