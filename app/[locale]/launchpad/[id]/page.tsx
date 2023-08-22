'use client'
import Article from './article'
import ProjectInfo from './project-info'
import RoundInfo from './round-info'
import Subscribe from './subscribe'
import Top from './top'

interface PageParams {
  id: number
}

interface Project {
  name: string
  imgUrl: string
  website?: string
  twitter?: string
  discord?: string
  synopsis: string
  numOfPeople: number

  tokenName?: string
  supportNet?: string
  totalSupply?: string
  tokenFlow?: string
  originPrice?: string
  marketValue?: string
  totalCoin?: string
  minLimit?: string
  maxLimit?: string
  expectedNumOfPeople?: string

  target?: string
  supply?: string
  price?: string
  originMarketValue?: string
  level?: string
  currentNum?: number
  targetNum?: number

  timeOn?: Date
  timeOff?: Date
}

export default function Page({ params }: { params: PageParams }) {
  console.log(params.id)

  const p: Project = {
    name: 'COB',
    imgUrl: '/images/token-cob-symbol.png',
    website: 'string',
    twitter: 'string',
    discord: 'string',
    synopsis: `Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our high-performance Ethereum layer-2 network built`,
    numOfPeople: 1280,

    supportNet: 'BASE',
    totalSupply: '100,000,000',
    tokenFlow: '100,000,000',
    originPrice: '$0.01',
    marketValue: '$100,000 ',
    totalCoin: '100,000 COB',
    minLimit: '1000 COB',
    maxLimit: '10,000 COB',
    expectedNumOfPeople: '100,000',

    target: '1000 ETH',
    supply: '1000 ETH',
    price: '1 ETH = 10000 COB',
    originMarketValue: '$10,000,00',
    level: 'A',
    currentNum: 0,
    targetNum: 1000000,

    timeOn: new Date('2023-10-1'),
    timeOff: new Date('2023-11-2'),
  }

  return (
    <div>
      <div className="container">
        <Top
          imgUrl={p.imgUrl}
          name={p.name}
          website={p.website}
          twitter={p.twitter}
          discord={p.discord}
          synopsis={p.synopsis}
          numOfPeople={p.numOfPeople}
        />
      </div>

      <div className="container pt-20 xl:flex xl:gap-8 xl:pt-4">
        <div className="xl:min-w-[300px] 2xl:min-w-[438px]">
          <ProjectInfo
            tokenName={p.name}
            supportNet={p.supportNet}
            totalSupply={p.totalSupply}
            tokenFlow={p.tokenFlow}
            originPrice={p.originPrice}
            marketValue={p.marketValue}
            totalCoin={p.totalCoin}
            minLimit={p.minLimit}
            maxLimit={p.maxLimit}
            expectedNumOfPeople={p.expectedNumOfPeople}
          />
        </div>

        <div className="pt-12">
          <div>
            <Subscribe
              target={p.target}
              supply={p.supply}
              price={p.price}
              originMarketValue={p.originMarketValue}
              level={p.level}
              currentNum={p.currentNum}
              targetNum={p.targetNum}
              timeOn={p.timeOn}
              timeOff={p.timeOff}
              maxLimit={p.maxLimit}
            />
          </div>

          <div className="mt-6 lg:mt-10">
            <RoundInfo />
          </div>

          <div className="mt-6 lg:mt-10">
            <Article />
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <div className="line h-px bg-black/10 dark:bg-white/20" />
      </div>
    </div>
  )
}
