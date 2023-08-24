'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { memo, ReactNode, useState } from 'react'
import { useImmer } from 'use-immer'

import ApplyImage from '@/components/ui/apply-image'
import ApplyInput from '@/components/ui/apply-input'
import ApplyRadioGroup from '@/components/ui/apply-radio-group'
import ApplySelect from '@/components/ui/apply-select'
import ApplyTextarea from '@/components/ui/apply-textarea'
import { ArrowIcon } from '@/components/ui/icons.b'
import { getT } from '@/lib/utils'

const json = {
  heading: '提交Launchpad表单',
  tagline: '我们的目标帮助早期BASE项目快速发现和孵化，让BASE生态更加繁荣',
  clear: '清空',
  submit: '提交项目',
  inputPlaceholder: '请输入{name}',
  selectPlaceholder: '请选择您的{name}',

  group1: '基础信息',
  projectName: '项目名称',
  category: '项目类型',
  intro: '项目介绍',
  LOGO: 'LOGO',
  website: '官网',
  whiteBook: '白皮书',
  beCollected: '是否被收藏？',
  yes: '是',
  no: '否',
  address: '查看地址',

  group2: '关联社交',

  group3: '商务联系',
  cooperation: '是否合作需求',

  group4: '附加信息',
  OnChain: '项目是否上线',
  hadToken: 'Token是否已发布',
  open: '团队是否公开',
  airDrop: '是否支持空投',
}

interface FromTypes {
  projectName: string
  category: string[]
  intro: string
  LOGO: string
  website: string
  whiteBook: string
  beCollected: boolean
  address: string
  tele: string
  x: string
  github: string
  discord: string
  medium: string
  email: string

  contactTele: string
  contactEmail: string
  cooperation: boolean

  onChain: boolean
  hadToken: boolean
  open: boolean
  airDrop: boolean
}

const From = memo(function From() {
  const t = getT(json)

  const [from, updateFrom] = useImmer<FromTypes>({
    projectName: '',
    category: [],
    intro: '',
    LOGO: '',
    website: '',
    whiteBook: '',
    beCollected: false,
    address: '',
    tele: '',
    x: '',
    github: '',
    discord: '',
    medium: '',
    email: '',

    contactTele: '',
    contactEmail: '',
    cooperation: false,

    onChain: false,
    hadToken: false,
    open: false,
    airDrop: false,
  })

  return (
    <>
      <div className="flex justify-between">
        <div className="max-w-[800px]">
          <Image src="/icons/writing-hand.svg" alt="" width={64} height={64} />
          <h1 className="mt-5 text-[32px] font-semibold text-brand">{t('heading')}</h1>
          <p className="mt-3 text-xl">{t('tagline')}</p>
        </div>

        <div className="hidden lg:block">
          <button className="rounded-lg border border-c4 px-10 py-3 font-semibold text-c3">
            <span className="opacity-60">{t('clear')}</span>
          </button>
          <button className="rounded-lg bg-c1 px-10 py-3 font-serif font-semibold text-white">
            {t('submit')}
          </button>
        </div>
      </div>

      {/* group */}
      <InputGroup title={t('group1')}>
        <div>
          <Label>{t('projectName')}</Label>
          <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
        </div>

        <div>
          <Label>{t('category')}</Label>
          <ApplySelect
            mode="multiple"
            placeholder={t('inputPlaceholder', { name: '' })}
            value={from.category}
            onChange={(vs, _) => {
              updateFrom((type) => {
                type.category = vs
              })
            }}
            // 添加项目类型
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </div>

        <div>
          <Label>{t('intro')}</Label>
          <ApplyTextarea />
        </div>

        <div>
          <Label>{t('LOGO')}</Label>
          <ApplyImage />
        </div>

        <div>
          <Label>{t('website')}</Label>
          <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
        </div>

        <div>
          <Label>{t('whiteBook')}</Label>
          <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
        </div>

        <div>
          <Label>{t('beCollected')}</Label>
          <ApplyRadioGroup
            name={'beCollected'}
            value={true}
            options={[
              { label: '是', value: true },
              { label: '否', value: false },
            ]}
          />
        </div>

        <div>
          <Label>{t('address')}</Label>
          <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
        </div>
      </InputGroup>
    </>
  )
})

export default From

interface InputGroupProps {
  title?: string
  expend?: boolean
  children?: ReactNode
}

const InputGroup = memo(function InputGroup(props: InputGroupProps) {
  const [expend, setExpend] = useState(props.expend ?? false)
  return (
    <div className="mt-12 max-w-[600px]">
      <h2 className="flex items-center gap-3 border-b pb-4">
        <span className="block h-6 w-1.5 bg-c1" />
        <span className="block flex-1 font-semibold">{props.title}</span>
        <span className="block px-2">
          <ArrowIcon
            tabIndex={0}
            onClick={() => setExpend(!expend)}
            className={clsx(
              'scale-150 transition-all',
              expend ? 'rotate-90' : 'rotate-[270deg]',
            )}
          />
        </span>
      </h2>
      <div
        className={clsx(
          'grid overflow-hidden transition-all',
          expend ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0">{props.children}</div>
      </div>
    </div>
  )
})

const Label = memo(function Label({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 mt-6 block select-none pl-1 text-sm font-semibold">
      {children}
    </span>
  )
})
