import { memo } from 'react'

import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: '即将发布Token',
}

const NewTokens = memo(function NewTokens() {
  const t = getT(json)
  return (
    <>
      <Title>{t('title')}</Title>

      <div className="pt-8"></div>
    </>
  )
})

export default NewTokens
