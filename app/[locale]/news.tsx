import { memo } from 'react'

import Title from '@/components/ui/Title'
import { getT } from '@/lib/utils'

const json = {
  title: '最新动态',
}

interface NewsInfo {
  imgUrl: string
  title: string
  content: string
  author: string
  authorAvatar: string
  authentication: boolean
  link: string
}

const newsMocker: NewsInfo[] = [
  {
    imgUrl: '',
    title: 'How to install Aptos-cli？',
    content: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built...`,
    author: 'WalletConnect',
    authentication: true,
    authorAvatar: '/images/home-avatar-placeholder.png',
    link: '123',
  },
]

const News = memo(function News() {
  const t = getT(json)
  return (
    <>
      <Title>{t('title')}</Title>

      <div>
        {newsMocker.map((news, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </>
  )
})

const NewsCard = memo(function NewsCard() {
  return <div>card</div>
})

export default News
