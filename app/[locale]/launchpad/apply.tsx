import { memo } from 'react'

import { getT } from '@/lib/utils'

const json = {
  title: '有项目想参与Launchpad?',
  subtitle: '使用Coin988 Launchpad,我们将全力支持您的首发',
  apply: '申请启动',
}

const Apply = memo(function Apply() {
  const t = getT(json)

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{t('title')}</h2>
      <h4 className="mt-8 text-sm">{t('subtitle')}</h4>
      <button className="mt-14 w-80 rounded-xl bg-c1 p-4 font-semibold text-white">
        {t('apply')}
      </button>
    </div>
  )
})

export default Apply
