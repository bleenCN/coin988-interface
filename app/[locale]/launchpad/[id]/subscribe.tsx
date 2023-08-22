import clsx from 'clsx'
import { memo, useMemo, useState } from 'react'

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
  status0: '加载中',
  status1: '未开启',
  status3: '已售罄',
  label1: 'Coin988 Vip轮次',
  label2: 'Coin988 白名单轮次',
  label3: 'Coin988 公开轮次',
  roundStatus1: '即将推出',
  roundStatus2: '进行中',
  roundStatus3: '等待通知',
  claim: '领取',
  claimLabel: '待领取 {symbol}',
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
  timeOn?: Date
  timeOff?: Date
  symbol?: string
}

const Subscribe = memo(function Subscribe(props: SubscribeProps) {
  const t = getT(json)
  return (
    <div className="rounded-xl border border-c4 p-4 dark:border-c2">
      <h2 className="text-xl font-semibold">{t('title')}</h2>

      <div className="mt-4 lg:flex">
        <div className="flex flex-col justify-between gap-4 rounded-lg bg-c1/5 p-4 lg:flex-1">
          <Label label={t('target')} value={props.target} />
          <Label label={t('supply')} value={props.supply} />
          <Label label={t('price')} value={props.price} />
          <Label label={t('originMarketValue')} value={props.originMarketValue} />

          <Slide currentNum={props.currentNum} targetNum={props.targetNum} />
        </div>

        <div className="line my-8 h-px bg-c4 lg:mx-4 lg:my-0 lg:h-auto lg:w-px" />

        <div className="lg:flex-1">
          <SubscribeStatus
            level={props.level}
            maxLimit={props.maxLimit}
            timeOn={props.timeOn}
            timeOff={props.timeOff}
          />
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
  level?: string
  maxLimit?: string
  symbol?: string
}

const SubscribeStatus = memo(function SubscribeStatus(props: SubscribeStatusProps) {
  const t = useMemo(() => getT(json), [])
  const [numOfToken, setNumOfToken] = useState('')

  const { status, timeOffCountdown } = useSubscribeStatus(props.timeOn, props.timeOff)

  // TODO 接入接口换算
  const translateTokenToEth = (a: string) => {
    return `${a?.[0] ?? '0.00'} ETH`
  }

  const statusTxt =
    status === 'loading' ? (
      t('status0')
    ) : status === 'completed' ? (
      <span className="text-lg font-semibold opacity-50 md:text-3xl">{t('status3')}</span>
    ) : status === 'ongoing' ? (
      <span className="text-lg font-semibold text-c1">{timeOffCountdown}</span>
    ) : (
      t('status1')
    )

  const content = useMemo(() => {
    switch (status) {
      case 'loading':
        return <span></span>
      case 'pending':
      case 'upcoming':
        return (
          <div className="mt-4 flex flex-col justify-between gap-3 text-sm font-semibold">
            <div className="rounded-lg bg-c1/5 p-3 md:p-4">
              <Label
                label={<ColorSpan>{t('label1')}</ColorSpan>}
                value={<span>{t('roundStatus1')}</span>}
              />
            </div>
            <div className="rounded-lg bg-c1/5 p-3 md:p-4">
              <Label
                label={<ColorSpan>{t('label1')}</ColorSpan>}
                value={<span className="text-[#07C877]">{t('roundStatus2')}</span>}
              />
            </div>
            <div className="rounded-lg bg-c1/5 p-3 md:p-4">
              <Label
                label={<ColorSpan>{t('label1')}</ColorSpan>}
                value={<span className="text-[#FF2EF7]">{t('roundStatus3')}</span>}
              />
            </div>
          </div>
        )
      case 'ongoing':
        return (
          <>
            <div className="flex justify-between text-sm font-semibold">
              <span>
                <span>{t('level')}</span>{' '}
                <span className="ml-2 text-c1 md:ml-6">{props.level}</span>
              </span>
              <span>
                <span>{`${t('maxLimit')}:`}</span>
                <span className="ml-2">{props.maxLimit}</span>
              </span>
            </div>

            <div className="mt-4 flex overflow-hidden text-sm font-semibold">
              <input
                value={numOfToken}
                onChange={(e) => {
                  setNumOfToken(e.target.value)
                }}
                className="w-0 flex-1 rounded-l-lg border border-black/10 py-3 pl-4"
                placeholder={t('NumInputPlacehodler')}
              />
              <span
                className={clsx(
                  'block whitespace-nowrap rounded-r-lg border border-l-0',
                  'w-28 bg-c4/30 px-2 py-3 text-black/40',
                )}
              >
                {translateTokenToEth(numOfToken)}
              </span>
            </div>

            <div className="mt-4">
              <button className="w-full rounded-lg bg-c1 py-3 text-sm font-semibold text-white">
                {t('confirm')}
              </button>
            </div>
          </>
        )
      case 'completed':
        return (
          <>
            <h4 className="text-sm font-semibold">
              {t('claimLabel', { symbol: 'COB' })}
            </h4>

            <div className="mt-4 rounded-lg border py-3">
              <span className="font-semibold">{'1000,000,000 COB'}</span>
            </div>

            <div className="mt-4">
              <button className="w-full rounded-lg bg-c1 py-3 text-white">
                {t('claim')}
              </button>
            </div>
          </>
        )
    }
  }, [numOfToken, props.level, props.maxLimit, status, t])

  return (
    <div className="flex h-full flex-col justify-between text-center">
      <h6 className="text-xs opacity-50">{t('countdown')}</h6>
      <h2 className="mt-2">{statusTxt}</h2>

      {content}
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
        'text-sm md:text-xl',
      )}
    >
      {children}
    </span>
  )
})
export default Subscribe
