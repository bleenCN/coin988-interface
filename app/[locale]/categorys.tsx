import Image from 'next/image'
import { memo } from 'react'

import {
  DiscordIcon,
  LayeredIcon,
  TwitterIcon,
  WebSiteIcon,
} from '@/components/ui/icons.b'
import RoundButton from '@/components/ui/round-button'
import Title from '@/components/ui/Title'
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
      <Title>{t('title')}</Title>

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
    <div className="flex h-20 items-center rounded-xl bg-dark-background py-2 pl-3 pr-6 text-white lg:h-[90px]">
      <span className="mr-5">{props.icon}</span>
      <span className="flex-1 font-semibold lg:text-2xl">{props.category}</span>
      <RoundButton className="text-sm">{t('more')}</RoundButton>
    </div>
  )
})

const ProjectBoard = memo(function ProjectBoard({ project }: { project: Project }) {
  return (
    <div className="flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl bg-light-foreground p-4 transition-all hover:bg-light-foreground-hover dark:bg-dark-foreground">
      <Image
        src={project.url}
        alt={project.name}
        width={50}
        height={50}
        className="h-10 w-10 overflow-hidden rounded-xl lg:h-12 lg:w-12"
      />

      <span className="flex-1 text-sm font-semibold md:text-xl">{project.name}</span>

      <div className="flex gap-3 text-xl">
        {project.website && <WebSiteIcon tabIndex={0} className="cursor-pointer" />}
        {project.twitter && <TwitterIcon tabIndex={0} className="cursor-pointer" />}
        {project.discord && <DiscordIcon tabIndex={0} className="cursor-pointer" />}
      </div>
    </div>
  )
})

export default Categorys
