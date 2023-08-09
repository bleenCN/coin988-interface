import Image from 'next/image'
import { memo } from 'react'

import {
  DiscordIcon,
  LayeredIcon,
  TwitterIcon,
  WebSiteIcon,
} from '@/components/ui/icons.b'
import RoundButton from '@/components/ui/round-button'
import { getT } from '@/lib/utils'
const json = {
  title: '应用分类',
  more: '查看更多',
}

const Categorys = memo(function Categorys() {
  const t = getT(json)

  const defiProjects: Project[] | undefined = [
    {
      name: 'TokenPocket',
      url: '/images/home-category-placeholder1.png',
      website: 'ww',
      discord: 's',
      twitter: 's',
    },
    { name: 'Coinbase', url: '/images/home-category-placeholder1.png' },
    { name: 'Coinbase', url: '/images/home-category-placeholder1.png' },
    { name: 'Coinbase', url: '/images/home-category-placeholder1.png' },
    { name: 'Coinbase', url: '/images/home-category-placeholder1.png' },
    { name: 'Coinbase', url: '/images/home-category-placeholder1.png' },
  ]
  return (
    <div>
      <h1 className="text-[32px] font-extrabold">{t('title')}</h1>

      <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
        <div>
          <CategoryTitle icon={<LayeredIcon />} category={'Defi'} />

          <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
            {defiProjects.map((project, index) => (
              <ProjectBoard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <CategoryTitle icon={<LayeredIcon />} category={'Defi'} />

          <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
            {defiProjects.map((project, index) => (
              <ProjectBoard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <CategoryTitle icon={<LayeredIcon />} category={'Defi'} />

          <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
            {defiProjects.map((project, index) => (
              <ProjectBoard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <CategoryTitle icon={<LayeredIcon />} category={'Defi'} />

          <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
            {defiProjects.map((project, index) => (
              <ProjectBoard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

interface Project {
  name: string
  url: string
  twitter?: string
  discord?: string
  website?: string
}

interface CategoryProps {
  icon: JSX.Element
  category: string
  more?: string
}

const CategoryTitle = memo(function Category(props: CategoryProps) {
  const t = getT(json)

  return (
    <div className="flex h-[90px] items-center rounded-xl bg-[#292A2D] py-2 pl-3 pr-6 text-white">
      {props.icon}
      <span className="flex-1">{props.category}</span>
      <RoundButton className="text-sm">{t('more')}</RoundButton>
    </div>
  )
})

const ProjectBoard = memo(function ProjectBoard({ project }: { project: Project }) {
  return (
    <div className="flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl bg-[#F6F9FF] p-4">
      <Image
        src={project.url}
        alt={project.name}
        width={50}
        height={50}
        className="overflow-hidden rounded-xl"
      />
      <span className="flex-1 text-xl font-semibold">{project.name}</span>
      <div className="flex gap-3 text-xl">
        {project.website && (
          <WebSiteIcon tabIndex={0} className="cursor-pointer text-[#9EA1AC]" />
        )}
        {project.twitter && (
          <TwitterIcon tabIndex={0} className="cursor-pointer text-[#9EA1AC]" />
        )}
        {project.discord && (
          <DiscordIcon tabIndex={0} className="cursor-pointer text-[#9EA1AC]" />
        )}
      </div>
    </div>
  )
})

export default Categorys
