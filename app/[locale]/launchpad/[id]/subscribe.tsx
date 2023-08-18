import clsx from 'clsx'
import { memo, useMemo } from 'react'

import { useSubscribeStatus } from '@/hooks/useSubscribeStatus'
import { getT } from '@/lib/utils'

const json = {
  title: '认购详情',
  target: '硬顶',
  supply: '供应量',
  price: '价格',
  originMarketValue: '初始市值',
  level: '质押等级',
  maxLimit: '最大额度',
  NumInputPlacehodler: '请输入数量',
  confirm: '确认',
  countdown: '倒计时',
  status1: '未开启',
  status3: '已售罄',
  label1: 'Coin988 Vip轮次',
  upcoming: '即将推出',
  ongoing: '进行中',
  complete: '已售罄',
  // status1:'',
  // statusDesc1:'',
  // status2:'',
  // statusDesc2:'',
  // status3:'',
  // statusDesc3:'',
  // status4:'',
  // statusDesc4:'',
  // status5:'',
  // statusDesc5:'',
}
interface SubscribeProps {
  target?: string
  supply?: string
  price?: string
  originMarketValue?: string
  level?: string
  maxLimit?: string
  currentNum?: number
  targetNum?: number
}

const Subscribe = memo(function Subscribe(props: SubscribeProps) {
  const t = getT(json)
  return (
    <div className="rounded-xl border border-c4 p-4">
      <h2 className="text-xl font-semibold">{t('title')}</h2>

      <div className="mt-4">
        <div className="flex flex-col gap-4 rounded-lg bg-c1/5 p-4">
          <Label label={t('target')} value={props.target} />
          <Label label={t('supply')} value={props.supply} />
          <Label label={t('price')} value={props.price} />
          <Label label={t('originMarketValue')} value={props.originMarketValue} />

          <Slide currentNum={props.currentNum} targetNum={props.targetNum} />
        </div>

        <div className="line my-4 h-px bg-c4" />

        <div>
          <SubscribeStatus />
        </div>
      </div>
    </div>
  )
})

interface LabelProps {
  label: string | JSX.Element
  value?: string | JSX.Element
}
const Label = memo(function Label(props: LabelProps) {
  return (
    <div className="flex justify-between">
      <div className="text-sm font-normal">{props.label}</div>
      <div className="font-semibold text-c1">{props.value ?? ''}</div>
    </div>
  )
})

interface SlideProps {
  currentNum?: number
  targetNum?: number
}
const Slide = memo(function Slide({ currentNum = 0, targetNum = 0 }: SlideProps) {
  const progress = targetNum ? currentNum / targetNum : 0
  return (
    <div className="flex flex-col gap-2 text-c1">
      <div className="text-end">
        <span className="font-semibold">{`${(progress * 100).toFixed(2)}%`}</span>
      </div>

      <div className="relative rounded-full bg-c4">
        <span
          className="block h-2.5 rounded-l-full bg-c1"
          style={{ width: `${progress / 0.01}%` }}
        />

        <span
          className={clsx(
            'block h-2.5 w-2.5 rounded-full border border-c1 bg-white',
            'absolute top-0 -translate-x-1/2 scale-[2]',
          )}
          style={{ left: `${progress / 0.01}%` }}
        />
      </div>

      <div className="flex justify-between text-sm font-light">
        <span>{currentNum}</span>
        <span>{targetNum}</span>
      </div>
    </div>
  )
})

interface SubscribeStatusProps {
  timeOn?: Date
  timeOff?: Date
}
const SubscribeStatus = memo(function SubscribeStatus(props: SubscribeStatusProps) {
  const t = useMemo(() => getT(json), [])

  const { status, timeOffCountdown } = useSubscribeStatus(props.timeOn, props.timeOff)

  const statusTxt =
    status === 'completed'
      ? t('status3')
      : status === 'ongoing'
      ? timeOffCountdown
      : t('status1')

  const content = useMemo(() => {
    switch (status) {
      case 'pending':
      case 'upcoming':
        return (
          <div>
            <Label
              label={<ColorSpan>{t('label1')}</ColorSpan>}
              value={<span className="text-sm font-semibold">{t('upcoming')}</span>}
            />
          </div>
        )
      case 'ongoing':
        return <div>timeOffCountdown</div>
      case 'completed':
        return <div>com</div>
    }
  }, [status, t])

  return (
    <div className="text-center">
      <h6 className="text-xs opacity-80">{t('countdown')}</h6>
      <span className="text-lg font-semibold opacity-80 md:text-3xl">{statusTxt}</span>

      <div>{content}</div>
    </div>
  )
})

const ColorSpan = memo(function ColorSpan({
  children,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      {...props}
      className={clsx(
        'bg-gradient-to-r from-c1 to-[#FB2EFF]',
        'bg-clip-text font-semibold text-transparent',
        'text-base md:text-xl',
      )}
    >
      {children}
    </span>
  )
})
export default Subscribe
