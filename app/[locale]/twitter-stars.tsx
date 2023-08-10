import { memo } from 'react'

import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: 'twitter达人',
}
const TwitterStars = memo(function TwitterStars() {
  const t = getT(json)

  return (
    <div>
      <Title>{t('title')}</Title>

      {/* <div className="pt-12">test</div> */}
    </div>
  )
})

export default TwitterStars
