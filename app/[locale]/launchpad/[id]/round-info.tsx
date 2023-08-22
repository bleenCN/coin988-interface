import clsx from 'clsx'
import { memo } from 'react'

import { DoneIcon } from '@/components/ui/icons.b'

const roundStatus: RoundProps[] = [
  { title: '公示', subtitle: '开启Launchpad ', done: true },
  { title: '质押回合 ', subtitle: '准备质押获得白名单', done: true },
  { title: '报名截止', subtitle: '将您列入白名单分配额度', done: false },
  { title: '开启', subtitle: '根据分配额度开启认购', done: false },
  { title: '结束', subtitle: '领取您的Token', done: false },
]

/**
 * 轮次信息
 */
const RoundInfo = memo(function RoundInfo() {
  return (
    <div className="rounded-lg border border-c4 px-4 py-8 dark:border-c2 lg:flex">
      {roundStatus.map((item, index) => (
        <Round {...item} key={index} />
      ))}
    </div>
  )
})

export default RoundInfo

export interface RoundProps {
  done?: boolean
  title: string
  subtitle?: string
}
const Round = memo(function Round({ done = false, title, subtitle }: RoundProps) {
  const icon = done ? (
    <span className="text-xl">
      <DoneIcon />
    </span>
  ) : (
    <span className="block h-5 w-5 rounded-full border-2 border-c4" />
  )
  return (
    <div className="group h-20 w-full last:h-auto lg:h-auto">
      <div className="relative flex items-center">
        <div>{icon}</div>
        <div className="ml-2 font-semibold">{title}</div>
        <div
          className={clsx(
            'line absolute left-2.5 top-7 h-12 w-px bg-c4 group-last:hidden',
            'lg:relative lg:left-0 lg:top-0 lg:mx-2 lg:h-px lg:flex-1',
          )}
        />
      </div>

      {subtitle && <div className="ml-8 opacity-40">{subtitle}</div>}
    </div>
  )
})
