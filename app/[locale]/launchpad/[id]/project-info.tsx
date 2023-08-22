import clsx from 'clsx'
import { memo } from 'react'

import { getT } from '@/lib/utils'

const json = {
  title: '项目详情',
  subtitle1: '关键指标',
  subtitle2: '参与数据',
  subtitle3: '质押COB',
  tokenName: '代币名称',
  supportNet: '支持网络',
  totalSupply: '总量',
  tokenFlow: '流通量',
  originPrice: '初始价格',
  marketValue: '流通市值',
  totalCoin: '总质押',
  minLimit: '初始门槛',
  maxLimit: '高级门槛',
  expectedNumOfPeople: '预计参与人数',
}

interface ProjectInfoProps {
  tokenName?: string
  supportNet?: string
  totalSupply?: string
  tokenFlow?: string
  originPrice?: string
  marketValue?: string
  totalCoin?: string
  minLimit?: string
  maxLimit?: string
  expectedNumOfPeople?: string
}

const ProjectInfo = memo(function ProjectInfo(props: ProjectInfoProps) {
  const t = getT(json)
  return (
    <div className="relative mt-12 rounded-xl border border-c4 p-4 dark:border-c2 md:p-6">
      <h1 className="absolute -top-12 left-0 text-xl font-semibold md:text-2xl">
        {t('title')}
      </h1>

      <h2 className="text-lg font-semibold md:text-xl">{t('subtitle1')}</h2>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Label label={t('tokenName')} value={props.tokenName} wrap />
        <Label label={t('supportNet')} value={props.supportNet} wrap />
        <Label label={t('totalSupply')} value={props.totalSupply} wrap />
        <Label label={t('tokenFlow')} value={props.tokenFlow} wrap />
        <Label label={t('originPrice')} value={props.originPrice} wrap />
        <Label label={t('marketValue')} value={props.marketValue} wrap />
      </div>

      <h2 className="mt-8 text-lg font-semibold md:text-xl">{t('subtitle2')}</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-1">
        <Label label={t('totalCoin')} value={props.totalCoin} />
        <Label label={t('minLimit')} value={props.minLimit} />
        <Label label={t('maxLimit')} value={props.maxLimit} />
        <Label label={t('expectedNumOfPeople')} value={props.expectedNumOfPeople} />
      </div>
    </div>
  )
})

interface LabelProps {
  label: string
  value?: string
  wrap?: boolean
}
const Label = memo(function Label(props: LabelProps) {
  return (
    <div
      className={clsx(
        { 'flex items-center justify-between': !props.wrap },
        'rounded-lg bg-c1/5 p-3 text-sm',
      )}
    >
      <div className="font-normal">{props.label}</div>
      <div className={clsx('font-semibold text-c1', { 'mt-1': props.wrap })}>
        {props.value ?? ''}
      </div>
    </div>
  )
})

export default ProjectInfo
