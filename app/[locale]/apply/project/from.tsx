'use client'
import clsx from 'clsx'
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
  heading: '提交BASE项目',
  tagline: '我们的目标帮助Base社区快速发现您的项目和了解生态的发展',
  clear: '清空',
  submit: '提交项目',
  inputPlaceholder: '请输入{name}',
  selectPlaceholder: '请选择您的{name}',
  yes: '是',
  no: '否',

  group1: '基础信息',
  projectName: '项目名称',
  category: '项目类型',
  chain: '网络类型',
  shortIntro: '项目简介',
  feature: '主要特点',
  intro: '项目介绍',
  LOGO: 'LOGO',
  banner: '横幅',
  website: '官网',
  whiteBook: '白皮书',

  group2: '项目合约信息',
  contractAddress: '主要合约地址',
  audit: '是否审计',
  auditingFirm: '审计公司',
  hadToken: '是否Token',
  tokenSymbol: 'Token名称',
  tokenLogo: 'Token Logo',
  tokenContract: 'Token合约',

  group3: '团队信息',
  name: '姓名',
  avatar: '头像',
  xAddress: 'twitter 地址',

  group4: '关连社交',

  group5: '商务联系',
  cooperation: '是否合作需求',
}

interface FromTypes {
  projectName: string
  category: string[]
  chain: string
  shortIntro: string
  feature: string
  intro: string
  LOGO: string
  banner: string
  website: string
  whiteBook: string

  contractAddress: string
  audit: boolean
  auditingFirm: string
  hadToken: boolean
  tokenSymbol: string
  tokenLogo: string
  tokenContract: string

  tele: string
  x: string
  github: string
  discord: string
  medium: string
  email: string

  contactTele: string
  contactEmail: string
  cooperation: boolean
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
    chain: '',
    shortIntro: '',
    feature: '',
    intro: '',
    LOGO: '',
    banner: '',
    website: '',
    whiteBook: '',

    contractAddress: '',
    audit: false,
    auditingFirm: '',
    hadToken: false,
    tokenSymbol: '',
    tokenLogo: '',
    tokenContract: '',

    tele: '',
    x: '',
    github: '',
    discord: '',
    medium: '',
    email: '',

    contactTele: '',
    contactEmail: '',
    cooperation: false,
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
            <Label>{t('chain')}</Label>
            <ApplySelect
              mode="single"
              placeholder={t('inputPlaceholder', { name: '' })}
              value={from.chain}
              onChange={(vs, _) => {
                updateFrom((type) => {
                  type.chain = vs
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
            <Label>{t('shortIntro')}</Label>
            <ApplyTextarea />
          </div>

          <div>
            <Label>{t('feature')}</Label>
            <ApplyTextarea />
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
            <Label>{t('banner')}</Label>
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
        </InputGroup>

        <InputGroup title={t('group2')} expend>
          <div>
            <Label>{t('contractAddress')}</Label>
            <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
          </div>

          <div className="flex">
            <Label>{t('audit')}</Label>
            <ApplyRadioGroup
              name={'audit'}
              value={from.audit}
              options={yesOrNoOptions}
              onChange={(v) =>
                updateFrom((from) => {
                  from.audit = v
                })
              }
            />
          </div>

          <div
            className={clsx(
              'grid overflow-hidden transition-all',
              from.audit ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="min-h-0">
              <Label>{t('auditingFirm')}</Label>
              <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
            </div>
          </div>

          <div className="flex">
            <Label>{t('hadToken')}</Label>
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

          <div
            className={clsx(
              'grid overflow-hidden transition-all',
              from.hadToken ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="min-h-0">
              <div>
                <Label>{t('tokenSymbol')}</Label>
                <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
              </div>

              <div>
                <Label>{t('tokenLogo')}</Label>
                <ApplyImage />
              </div>

              <div>
                <Label>{t('tokenContract')}</Label>
                <ApplyInput placeholder={t('inputPlaceholder', { name: '' })} />
              </div>
            </div>
          </div>
        </InputGroup>

        <InputGroup title={t('group4')} expend>
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

        <InputGroup title={t('group5')} expend>
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
      </div>
    </div>
  )
})

export default From
