import clsx from 'clsx'
import { memo } from 'react'

import { BlogIcon, CoinbaseIcon, SearchIcon, ThalaIcon } from '@/components/ui/icons.b'
import { getT } from '@/lib/utils'

const json = {
  placeHodler: 'Search in Coin988',
}

const t = getT(json)

const Searcher = memo(function Searcher() {
  return (
    <div>
      <div className="relative mx-auto mb-3 h-12 max-w-2xl md:h-14">
        <SearchIcon className="pointer-events-none absolute left-0 top-0 m-3 text-2xl md:m-4" />
        <input
          type="text"
          className={clsx(
            'mb-3 h-full w-full rounded-[10px] border border-[#6B6C7D] pl-12 pr-4',
          )}
          placeholder={t('placeHodler')}
        />
      </div>

      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-2 text-xs">
          <ThalaIcon />
          <span>Thala</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <CoinbaseIcon />
          <span>Coinbase</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <BlogIcon />
          <span>Blog</span>
        </div>
      </div>
    </div>
  )
})

export default Searcher
