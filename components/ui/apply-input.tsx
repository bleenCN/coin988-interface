import clsx from 'clsx'
import { memo } from 'react'
type ApplyInputProps = Pick<React.ComponentProps<'input'>, 'placeholder' | 'onChange'>

const ApplyInput = memo(function ApplyInput(props: ApplyInputProps) {
  return (
    <input
      type="text"
      className={clsx(
        'w-full rounded-lg border border-c4 p-5 text-sm font-semibold text-c3',
        'dark:border-c3',
      )}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
})

export default ApplyInput
