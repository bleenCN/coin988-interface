import { memo } from 'react'

import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: 'Infra&Tools',
}

const InfraAndTools = memo(function InfraAndTools() {
  const t = getT(json)
  return (
    <>
      <Title>{t('title')}</Title>
    </>
  )
})

export default InfraAndTools
