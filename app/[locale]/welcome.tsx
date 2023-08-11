import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, memo } from 'react'

import { getT } from '@/lib/utils'

const json = {
  title: '更多探索欢迎使用Coin988搜索引擎',
  subtitle: 'Coin988覆盖最广的链上数据和各类Dapp、NFT、DeFi、市场等',
}

const welcomeBg: CSSProperties = {
  background:
    'radial-gradient(40% 40% at left,#A32EFF40 0%,transparent 100%),radial-gradient(40% 40% at right,#2E60FF40 0%,transparent 100%)',
}

const Welcome = memo(function Welcome() {
  const t = getT(json)

  const numOfDapp = 13123
  const numOfDefi = 24682
  const numOfNft = 28187

  return (
    <div style={welcomeBg} className="flex flex-col items-center py-20 md:py-40 xl:py-64">
      <Image
        src={'/images/home-welcome.png'}
        alt={''}
        width={320}
        height={252}
        className="h-32 w-40 md:h-64 md:w-80"
      />

      <div className="mt-8 font-semibold md:text-2xl xl:text-3xl">{t('title')}</div>
      <div className="container mt-2 text-center text-sm text-black/50 md:text-xl xl:text-2xl">
        {t('subtitle')}
      </div>

      <div className="container mt-8 flex justify-center gap-2 md:mt-10 xl:mt-16">
        <CountCard bgColor={'cyan'} category={'Dapp'} count={numOfDapp} />
        <CountCard bgColor={'pink'} category={'Defi'} count={numOfDefi} />
        <CountCard bgColor={'yellow'} category={'Nft'} count={numOfNft} />
      </div>
    </div>
  )
})

interface CountCardProps {
  bgColor: 'cyan' | 'pink' | 'yellow'
  category: string
  count: number
}

function getBgColor(color: CountCardProps['bgColor']) {
  switch (color) {
    case 'cyan':
      return {
        background: 'radial-gradient(100% 100% at 50% 15%,#2ED9FF40 0%, transparent 60%)',
      } as CSSProperties
    case 'pink':
      return {
        background: 'radial-gradient(100% 100% at 50% 15%,#FF2EB840 0%, transparent 60%)',
      } as CSSProperties
    case 'yellow':
      return {
        background: 'radial-gradient(100% 100% at 50% 15%,#FFDE2E40 0%, transparent 60%)',
      } as CSSProperties
  }
}

const CountCard = memo(function CountCard(props: CountCardProps) {
  return (
    <div
      style={getBgColor(props.bgColor)}
      className={clsx(
        'flex h-16 w-28 flex-col justify-center text-center md:mx-4 xl:h-36 xl:w-80',
        'rounded-lg border border-[#DEE1EA] lg:rounded-xl',
      )}
    >
      <div className="font-semibold xl:text-3xl">{props.count.toLocaleString()}</div>
      <div className="text-xs text-black/50 xl:mt-2 xl:text-lg">{props.category}</div>
    </div>
  )
})
export default Welcome
