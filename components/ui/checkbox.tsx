import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'

export function Checkbox({ className, ...props }: CheckboxPrimitive.CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'h-5 w-5 data-[state=unchecked]:rounded-full data-[state=unchecked]:border-2',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#white-rect)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99967 0.833496C4.93717 0.833496 0.833008 4.93766 0.833008 10.0002C0.833008 15.0627 4.93717 19.1668 9.99967 19.1668C15.0622 19.1668 19.1663 15.0627 19.1663 10.0002C19.1663 4.93766 15.0622 0.833496 9.99967 0.833496ZM13.973 8.45016C14.0462 8.36653 14.1019 8.26911 14.1368 8.16364C14.1718 8.05816 14.1853 7.94676 14.1766 7.83598C14.1678 7.72521 14.137 7.6173 14.086 7.5186C14.0349 7.41991 13.9647 7.33242 13.8793 7.26128C13.7939 7.19014 13.6952 7.1368 13.5889 7.10438C13.4826 7.07196 13.3709 7.06113 13.2604 7.07252C13.1499 7.08391 13.0427 7.11728 12.9453 7.17069C12.8479 7.2241 12.7621 7.29645 12.693 7.3835L9.10967 11.6827L7.25551 9.82766C7.09834 9.67586 6.88784 9.59187 6.66934 9.59377C6.45084 9.59567 6.24183 9.68331 6.08733 9.83781C5.93282 9.99232 5.84518 10.2013 5.84328 10.4198C5.84138 10.6383 5.92538 10.8488 6.07717 11.006L8.57717 13.506C8.65905 13.5878 8.75709 13.6517 8.86502 13.6935C8.97295 13.7354 9.08842 13.7543 9.20406 13.749C9.31971 13.7438 9.43299 13.7145 9.53668 13.663C9.64038 13.6116 9.73221 13.5391 9.80634 13.4502L13.973 8.45016Z"
              fill="#2E60FF"
            />
          </g>
          <defs>
            <clipPath id="white-rect">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
