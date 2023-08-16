import Image from 'next/image'
import { memo } from 'react'

import { getT } from '@/lib/utils'

const json = {
  title: '了解Launchpad的新创意',
  subtitle: 'Coin88 Launchpad 为社区带来顶级解决方案，发现生态新产品',

  itemTitle1: '生态启动板',
  itemSubtitle1: '在顶级代币和NFT项目上市之前对其进行访问',
  itemTitle2: '质押与归属',
  itemSubtitle2: '具有吸引力的质押奖励和灵活的期限，奖励长期持有者',
  itemTitle3: '实验室',
  itemSubtitle3: '行业领先的早期项目孵化，提供技术和营销支持',
  itemTitle4: 'VIP首发池',
  itemSubtitle4: '这是从即将推出的项目中赚取免费代币的最简单方式',
  itemTitle5: '利益共享',
  itemSubtitle5: '与利益相关者分享平台利润',
  itemTitle6: '治理',
  itemSubtitle6: 'DAO投票和治理',
}

const Information = memo(function Information() {
  const t = getT(json)

  const illustration = '/images/launchpad-illustration.png'

  const planes: PlaneProps[] = [
    { imgSrc: '', title: t('itemTitle1'), subtitle: t('itemSubtitle1') },
    { imgSrc: '', title: t('itemTitle2'), subtitle: t('itemSubtitle2') },
    { imgSrc: '', title: t('itemTitle3'), subtitle: t('itemSubtitle3') },
    { imgSrc: '', title: t('itemTitle4'), subtitle: t('itemSubtitle4') },
    { imgSrc: '', title: t('itemTitle5'), subtitle: t('itemSubtitle5') },
    { imgSrc: '', title: t('itemTitle6'), subtitle: t('itemSubtitle6') },
  ]

  return (
    <div>
      <Image
        src={illustration}
        alt={''}
        width={328}
        height={328}
        className="mx-auto h-80 w-80"
      />

      <div className="text-center">
        <h1 className="text-xl font-extrabold text-c1">{t('title')}</h1>
        <h4 className="mt-6">{t('subtitle')}</h4>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {planes.map((plane, index) => (
          <Plane
            imgSrc={plane.imgSrc}
            title={plane.title}
            subtitle={plane.subtitle}
            key={index}
          />
        ))}
      </div>
    </div>
  )
})

interface PlaneProps {
  imgSrc: string
  title: string
  subtitle: string
}

const Plane = memo(function Plane(props: PlaneProps) {
  return (
    <div className="flex rounded-lg border border-c4 p-2 md:p-5">
      <Image
        src={props.imgSrc}
        alt={''}
        width={70}
        height={70}
        className="m-1 mr-4 h-[70px] w-[70px]"
      />

      <div>
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <h5 className="mt-2 text-sm">{props.subtitle}</h5>
      </div>
    </div>
  )
})

export default Information
