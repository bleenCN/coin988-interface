import clsx from 'clsx'
import { memo } from 'react'
type ApplyTextareaProps = Pick<
  React.ComponentProps<'textarea'>,
  'placeholder' | 'onChange'
>

const ApplyTextarea = memo(function ApplyTextarea(props: ApplyTextareaProps) {
  return (
    <textarea
      rows={4}
      className={clsx(
        'w-full rounded-lg border border-c4 p-3 text-sm font-semibold placeholder:text-c3',
        'dark:border-c3',
      )}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
})

export default ApplyTextarea
