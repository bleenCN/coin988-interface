'use client'
import Image from 'next/image'
import { memo } from 'react'
import { useImmer } from 'use-immer'

import ApplyImage from '@/components/ui/apply-image'
import ApplyInput from '@/components/ui/apply-input'
import InputGroup from '@/components/ui/apply-Input-group'
import Label from '@/components/ui/apply-label'
import ApplyRadioGroup, { OptionType } from '@/components/ui/apply-radio-group'
import ApplySelect from '@/components/ui/apply-select'
import ApplyTextarea from '@/components/ui/apply-textarea'
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

  const yesOrNoOptions: OptionType<boolean>[] = [
    { label: t('yes'), value: true },
    { label: t('no'), value: false },
  ]

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
    <div className="relative">
      <div className="right-0 hidden lg:absolute lg:block">
        <button className="rounded-lg border border-c4 px-10 py-3 font-semibold text-c3">
          <span className="opacity-60">{t('clear')}</span>
        </button>
        <button className="rounded-lg bg-c1 px-10 py-3 font-serif font-semibold text-white">
          {t('submit')}
        </button>
      </div>

      <div className="mx-auto max-w-[600px]">
        <div>
          <Image src="/icons/writing-hand.svg" alt="" width={64} height={64} />
          <h1 className="mt-5 text-[32px] font-semibold text-brand">{t('heading')}</h1>
          <p className="mt-3 text-xl">{t('tagline')}</p>
        </div>

        {/* group */}
        <InputGroup title={t('group1')} expend>
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

          <div className="mt-6 flex">
            <Label>{t('beCollected')}</Label>
            <ApplyRadioGroup<boolean>
              name={'beCollected'}
              value={from.beCollected}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.beCollected = v
                })
              }
            />
          </div>

          <div>
            <Label>{t('address')}</Label>
            <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
          </div>
        </InputGroup>

        <InputGroup title={t('group2')}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label>Telegram</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>X</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>Github</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>Discord</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>Medium</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>Email</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>
          </div>
        </InputGroup>

        <InputGroup title={t('group3')} expend>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label>Telegram</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>

            <div>
              <Label>Email</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>
          </div>

          <div className="flex">
            <Label>{t('cooperation')}</Label>
            <ApplyRadioGroup
              name={'cooperation'}
              value={from.cooperation}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.cooperation = v
                })
              }
            />
          </div>
        </InputGroup>

        <InputGroup title={t('group4')} expend>
          <div className="flex">
            <div className="w-40">
              <Label>{t('OnChain')}</Label>
            </div>
            <ApplyRadioGroup
              name={'onChain'}
              value={from.onChain}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.onChain = v
                })
              }
            />
          </div>

          <div className="flex">
            <div className="w-40">
              <Label>{t('hadToken')}</Label>
            </div>
            <ApplyRadioGroup
              name={'hadToken'}
              value={from.hadToken}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.hadToken = v
                })
              }
            />
          </div>

          <div className="flex">
            <div className="w-40">
              <Label>{t('open')}</Label>
            </div>
            <ApplyRadioGroup
              name={'open'}
              value={from.open}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.open = v
                })
              }
            />
          </div>

          <div className="flex">
            <div className="w-40">
              <Label>{t('airDrop')}</Label>
            </div>
            <ApplyRadioGroup
              name={'airDrop'}
              value={from.airDrop}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.airDrop = v
                })
              }
            />
          </div>
        </InputGroup>
      </div>
    </div>
  )
})

export default From
