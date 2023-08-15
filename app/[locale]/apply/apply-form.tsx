'use client'

import { gql, useMutation } from '@apollo/client'
import * as Accordion from '@radix-ui/react-accordion'
import * as Popover from '@radix-ui/react-popover'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import * as React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDownIcon } from '@/components/ui/icons'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import type { CategoryOption } from '@/domain/category'
import { cn } from '@/lib/utils'

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-sm font-semibold uppercase">{children}</h2>
    </div>
  )
}

export function ApplyForm({ categoryOptions }: { categoryOptions: CategoryOption[] }) {
  const t = useTranslations('apply')

  const [updateProject] = useMutation(
    gql`
      mutation updateProject(
        $projectInputArgs: ProjectInputArgs
        $projectLogo: Upload
        $projectImage: Upload
        $projectToken: Upload
      ) {
        addProject(
          projectInputArgs: $projectInputArgs
          projectLogo: $projectLogo
          projectImage: $projectImage
          projectToken: $projectToken
        ) {
          success
          message
        }
      }
    `,
    {
      onError: (error) => {
        console.log({ error })
      },
      onCompleted: (data) => {
        console.log('success', { data })
      },
    },
  )

  const [name, setName] = React.useState('')
  const [categoryIds, setCategoryIds] = React.useState<string[]>([])
  const [network, setNetwork] = React.useState('BASE')
  const [introduction, setIntroduction] = React.useState('')
  const [highlight, setHighlight] = React.useState('')
  const [logo, setLogo] = React.useState<File | null>(null)
  const [banner, setBanner] = React.useState<File | null>(null)
  const [website, setWebsite] = React.useState('')
  const [whitepaper, setWhitepaper] = React.useState('')
  const [contract, setContract] = React.useState('')
  const [audited, setAudited] = React.useState(false)
  const [isToken, setIsToken] = React.useState(false)
  const [tokenLogo, setTokenLogo] = React.useState<File | null>(null)
  const [tokenName, setTokenName] = React.useState('')
  const [tokenContract, setTokenContract] = React.useState('')

  const logoPreviewUrl = logo ? URL.createObjectURL(logo) : null
  const bannerPreviewUrl = banner ? URL.createObjectURL(banner) : null
  const tokenLogoPreviewUrl = tokenLogo ? URL.createObjectURL(tokenLogo) : null

  function handleLogoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files && files[0]) {
      setLogo(files[0])
    }
  }

  function handleBannerFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files && files[0]) {
      setBanner(files[0])
    }
  }

  function handleTokenLogoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files && files[0]) {
      setTokenLogo(files[0])
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    updateProject({
      variables: {
        projectInputArgs: {
          name,
          categoryIds,
          chainName: network,
          describe: introduction,
          feature: highlight,
        },
        projectLogo: logo,
      },
    })
  }

  return (
    <div
      className="min-h-rest container relative bg-cover bg-fixed bg-no-repeat pt-9 lg:pt-[54px]"
      style={{ backgroundImage: `url('/apply/bg.png')` }}
    >
      <div className="container max-w-[600px] pb-16">
        <header className="">
          <Image src="/icons/writing-hand.svg" alt="" width={64} height={64} />
          <h1 className="mt-5 text-[32px] font-semibold text-brand">{t('heading')}</h1>
          <p className="mt-3 text-xl">{t('tagline')}</p>
        </header>
        <form className="mt-8 lg:mt-14" onSubmit={handleSubmit}>
          <Accordion.Root type="multiple" className="grid grid-cols-1 gap-8">
            <Accordion.Item value="meta">
              <Accordion.Trigger className="marker group flex w-full border-b py-3 lg:py-5">
                {t('meta')}
                <ChevronDownIcon
                  width={32}
                  height={32}
                  className="ml-auto duration-300 group-[&[data-state=open]]:rotate-180"
                />
              </Accordion.Trigger>
              <Accordion.Content className="grid grid-cols-1 gap-6">
                <div className="h-2" />
                <div>
                  <FormLabel>{t('name')}</FormLabel>
                  <input
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                    type="text"
                    placeholder={t('name-placeholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <FormLabel>{t('categories')}</FormLabel>
                  <Popover.Root>
                    <Popover.Trigger className="flex w-full items-center rounded-lg border py-3 pl-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:min-h-[60px] lg:py-5 lg:pl-[18px]">
                      {categoryIds.length > 0 ? (
                        <div aria-hidden className="flex flex-wrap items-center gap-2">
                          {categoryIds.map((categoryId) => {
                            return (
                              <Badge
                                key={categoryId}
                                className="inline-flex items-center"
                              >
                                {
                                  categoryOptions.find(
                                    (categoryOption) =>
                                      categoryOption.value === categoryId,
                                  )?.label
                                }
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCategoryIds((categoryIds) =>
                                      categoryIds.filter((cid) => cid !== categoryId),
                                    )
                                  }}
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </Badge>
                            )
                          })}
                        </div>
                      ) : (
                        t('categories-placeholder')
                      )}
                      <div className="ml-auto flex w-6 items-center">
                        <ChevronDownIcon />
                      </div>
                    </Popover.Trigger>
                    <Popover.Content
                      sideOffset={8}
                      style={{
                        width: 'var(--radix-popper-anchor-width)',
                      }}
                      className="z-10 rounded-lg shadow"
                    >
                      <div className="max-h-64 overflow-y-auto bg-background">
                        {categoryOptions.map((categoryOption) => {
                          function handleSelect() {
                            if (categoryIds.includes(categoryOption.value)) {
                              setCategoryIds(
                                categoryIds.filter((id) => id !== categoryOption.value),
                              )
                            } else {
                              setCategoryIds([...categoryIds, categoryOption.value])
                            }
                          }

                          return (
                            <button
                              type="button"
                              key={categoryOption.value}
                              onClick={handleSelect}
                              className={cn(
                                'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                              )}
                            >
                              {categoryOption.label}
                              {categoryIds.includes(categoryOption.value) && (
                                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                  <Check className="h-4 w-4" />
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </Popover.Content>
                  </Popover.Root>
                </div>

                <div>
                  <FormLabel>{t('network')}</FormLabel>
                  <Select value={network} onValueChange={setNetwork}>
                    <SelectTrigger>{network}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BASE">BASE</SelectItem>
                      <SelectItem value="ARBITRUM">ARBITRUM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <FormLabel>{t('introduction')}</FormLabel>
                  <textarea
                    className="min-h-[130px] w-full rounded-lg border"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                  />
                </div>

                <div>
                  <FormLabel>{t('highlight')}</FormLabel>
                  <textarea
                    className="min-h-[130px] w-full rounded-lg border"
                    value={highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                  />
                </div>

                <div>
                  <FormLabel>{t('logo')}</FormLabel>
                  <input type="file" id="logo" hidden onChange={handleLogoFileChange} />
                  <label
                    htmlFor="logo"
                    className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border"
                  >
                    {logoPreviewUrl ? (
                      <Image
                        src={logoPreviewUrl}
                        alt=""
                        width={120}
                        height={120}
                        unoptimized
                      />
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 16H32" stroke="#DEE1EA" />
                        <path d="M16 0L16 32" stroke="#DEE1EA" />
                      </svg>
                    )}
                  </label>
                </div>

                <div>
                  <FormLabel>{t('banner')}</FormLabel>
                  <input
                    type="file"
                    id="banner"
                    hidden
                    onChange={handleBannerFileChange}
                  />
                  <label
                    htmlFor="banner"
                    className="relative flex h-[160px] items-center justify-center rounded-lg border"
                  >
                    {bannerPreviewUrl ? (
                      <Image
                        src={bannerPreviewUrl}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 16H32" stroke="#DEE1EA" />
                        <path d="M16 0L16 32" stroke="#DEE1EA" />
                      </svg>
                    )}
                  </label>
                </div>

                <div>
                  <FormLabel>{t('website')}</FormLabel>
                  <input
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                    type="text"
                    placeholder={t('website-placeholder')}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <FormLabel>{t('whitepaper')}</FormLabel>
                  <input
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                    type="text"
                    placeholder={t('whitepaper-placeholder')}
                    value={whitepaper}
                    onChange={(e) => setWhitepaper(e.target.value)}
                  />
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="contract">
              <Accordion.Trigger className="marker group flex w-full border-b py-3 lg:py-5">
                {t('contract-meta')}
                <ChevronDownIcon
                  width={32}
                  height={32}
                  className="ml-auto duration-300 group-[&[data-state=open]]:rotate-180"
                />
              </Accordion.Trigger>
              <Accordion.Content className="grid grid-cols-1 gap-6">
                <div className="h-2" />
                <div>
                  <FormLabel>{t('contract')}</FormLabel>
                  <input
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                    type="text"
                    placeholder={t('contract-placeholder')}
                    value={contract}
                    onChange={(e) => setContract(e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex items-center">
                    <h2 className="mr-8 text-sm font-semibold uppercase">
                      {t('audited')}
                    </h2>
                    <div className="mr-9 flex items-center gap-2">
                      <Checkbox
                        id="audited=true"
                        checked={audited}
                        onCheckedChange={() => setAudited(true)}
                      />
                      <label htmlFor="audited=true">{t('yes')}</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="audited=false"
                        checked={!audited}
                        onCheckedChange={() => setAudited(false)}
                      />
                      <label htmlFor="audited=false">{t('no')}</label>
                    </div>
                  </div>

                  {audited && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-6"
                    >
                      <FormLabel>{t('audit-company')}</FormLabel>
                      <input
                        className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                        type="text"
                        placeholder={t('audit-report-placeholder')}
                        value={contract}
                        onChange={(e) => setContract(e.target.value)}
                      />
                    </motion.div>
                  )}
                </div>

                <div>
                  <div className="flex items-center">
                    <h2 className="mr-8 text-sm font-semibold uppercase">
                      {t('is-token')}
                    </h2>
                    <div className="mr-9 flex items-center gap-2">
                      <Checkbox
                        id="is-token=true"
                        checked={isToken}
                        onCheckedChange={() => setIsToken(true)}
                      />
                      <label htmlFor="is-token=true">{t('yes')}</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="is-token=false"
                        checked={!isToken}
                        onCheckedChange={() => setIsToken(false)}
                      />
                      <label htmlFor="is-token=false">{t('no')}</label>
                    </div>
                  </div>

                  {isToken && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-6 space-y-6"
                    >
                      <div>
                        <FormLabel>{t('name')}</FormLabel>
                        <input
                          className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                          type="text"
                          placeholder={t('token-name-placeholder')}
                          value={tokenName}
                          onChange={(e) => setTokenName(e.target.value)}
                        />
                      </div>

                      <div>
                        <FormLabel>{t('logo')}</FormLabel>
                        <input
                          type="file"
                          id="token-logo"
                          hidden
                          onChange={handleTokenLogoFileChange}
                        />
                        <label
                          htmlFor="token-logo"
                          className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border"
                        >
                          {tokenLogoPreviewUrl ? (
                            <Image
                              src={tokenLogoPreviewUrl}
                              alt=""
                              width={120}
                              height={120}
                              unoptimized
                            />
                          ) : (
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 16H32" stroke="#DEE1EA" />
                              <path d="M16 0L16 32" stroke="#DEE1EA" />
                            </svg>
                          )}
                        </label>
                      </div>

                      <div>
                        <FormLabel>{t('contract')}</FormLabel>
                        <input
                          className="w-full rounded-lg border px-3 py-3 text-sm outline-none placeholder:text-input-placeholder focus:border-brand lg:px-[18px] lg:py-5"
                          type="text"
                          placeholder={t('token-contract-placeholder')}
                          value={tokenContract}
                          onChange={(e) => setTokenContract(e.target.value)}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <div className="fixed inset-x-0 bottom-0 border-t bg-background lg:hidden">
            <div className="container flex h-14 items-center">
              <Button type="submit" className="flex-1">
                {t('submit')}
              </Button>
            </div>
          </div>

          <div className="fixed right-0 top-20 mt-9 hidden pr-10 lg:block">
            <Button type="submit" className="w-[200px]">
              {t('submit')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
