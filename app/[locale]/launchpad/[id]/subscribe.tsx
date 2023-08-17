import clsx from 'clsx'
import { memo } from 'react'

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
  round1: '',
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
          <h6></h6>
        </div>
      </div>
    </div>
  )
})

interface LabelProps {
  label: string
  value?: string
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
export default Subscribe
