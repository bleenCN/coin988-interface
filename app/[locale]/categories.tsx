'use client'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'

import withLink from '@/components/hocs/with-link'
import {
  DiscordIcon,
  LayeredIcon,
  TwitterIcon,
  WebSiteIcon,
} from '@/components/ui/icons.b'
import RoundButton from '@/components/ui/round-button'
import Title from '@/components/ui/Title'
import {
  PaginationInputArgs,
  ProjectCategoryFragment,
  ProjectInputArgs,
} from '@/lib/gql/graphql'
import { getT } from '@/lib/utils'

import { fetchCategories, fetchProjectPage } from './queries'

interface Project {
  name: string
  logo: string
  twitter?: string
  discord?: string
  website?: string
}

interface CategoryProps {
  icon: JSX.Element
  category: string
  more?: string
}

const json = {
  title: '应用分类',
  more: '查看更多',
  noData: '没有数据',
  loading: '加载中...',
}

const Categories = memo(function Categories() {
  const t = getT(json)

  const paginationInputArgs: PaginationInputArgs = { pageSize: 6, current: 0 }
  const projectInputArgs: ProjectInputArgs = { chainName: 'BASE', isParent: true }

  const { data: categories } = useQuery(['categories'], () =>
    fetchCategories({ chainName: 'BASE', isParent: true }),
  )

  const nameOfCategories = {
    defi: 'Defi',
    nft: 'NFT',
    game: 'Game',
    bridges: 'Bridges',
  }

  const defiId = getCategoryId(
    categories as ProjectCategoryFragment[],
    nameOfCategories.defi,
  )
  const NftId = getCategoryId(
    categories as ProjectCategoryFragment[],
    nameOfCategories.nft,
  )
  const gameId = getCategoryId(
    categories as ProjectCategoryFragment[],
    nameOfCategories.game,
  )
  const bridgesId = getCategoryId(
    categories as ProjectCategoryFragment[],
    nameOfCategories.bridges,
  )

  const { data: defiProjects, isLoading: defiIsLoading } = useQuery(
    ['projects', defiId],
    () =>
      fetchProjectPage({
        paginationInputArgs,
        projectInputArgs: { categoryId: defiId, ...projectInputArgs },
      }),
    { enabled: !!defiId },
  )
  const { data: nftProjects, isLoading: nftIsLoading } = useQuery(
    ['projects', NftId],
    () =>
      fetchProjectPage({
        paginationInputArgs,
        projectInputArgs: { categoryId: NftId, ...projectInputArgs },
      }),
    { enabled: !!defiId },
  )
  const { data: gameProjects, isLoading: gameIsLoading } = useQuery(
    ['projects', gameId],
    () =>
      fetchProjectPage({
        paginationInputArgs,
        projectInputArgs: { categoryId: gameId, ...projectInputArgs },
      }),
    { enabled: !!defiId },
  )
  const { data: bridgesProjects, isLoading: BridgesIsLoading } = useQuery(
    ['projects', bridgesId],
    () =>
      fetchProjectPage({
        paginationInputArgs,
        projectInputArgs: { categoryId: bridgesId, ...projectInputArgs },
      }),
    { enabled: !!defiId },
  )

  return (
    <div>
      <Title>{t('title')}</Title>

      <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
        <Category
          category={nameOfCategories.defi}
          projects={defiProjects?.records as Project[]}
          isLoading={defiIsLoading}
        />
        <Category
          category={nameOfCategories.nft}
          projects={nftProjects?.records as Project[]}
          isLoading={nftIsLoading}
        />
        <Category
          category={nameOfCategories.game}
          projects={gameProjects?.records as Project[]}
          isLoading={gameIsLoading}
        />
        <Category
          category={nameOfCategories.bridges}
          projects={bridgesProjects?.records as Project[]}
          isLoading={BridgesIsLoading}
        />
      </div>
    </div>
  )
})

const Category = memo(function Category({
  projects,
  category,
  isLoading,
}: {
  projects: Project[] | undefined
  category: string
  isLoading: boolean
}) {
  const contents = isLoading ? (
    <Loading />
  ) : projects?.length ? (
    <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectBoard key={index} project={project} />
      ))}
    </div>
  ) : (
    <NoData />
  )

  return (
    <div>
      <CategoryTitle icon={<LayeredIcon />} category={category} />
      {contents}
    </div>
  )
})

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

const TwitterIconWithLink = withLink(TwitterIcon)
const DiscordIconWithLink = withLink(DiscordIcon)
const WebSiteIconWithLink = withLink(WebSiteIcon)

const ProjectBoard = memo(function ProjectBoard({ project }: { project: Project }) {
  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl p-4 transition-all',
        'bg-light-foreground hover:bg-light-foreground-hover',
        'dark:bg-dark-background dark:hover:bg-dark-foreground',
      )}
    >
      <Image
        src={project.logo}
        alt={project.name}
        width={50}
        height={50}
        className="h-10 w-10 overflow-hidden rounded-xl lg:h-12 lg:w-12"
      />

      <span className="flex-1 text-sm font-semibold md:text-xl">{project.name}</span>

      <div className="flex gap-3 text-xl">
        {project.website && (
          <div title={project.website}>
            <WebSiteIconWithLink
              href={project.website}
              tabIndex={0}
              className="cursor-pointer"
            />
          </div>
        )}
        {project.twitter && (
          <div title="twitter">
            <TwitterIconWithLink
              href={project.twitter}
              tabIndex={0}
              className="cursor-pointer"
            />
          </div>
        )}
        {project.discord && (
          <div title="discord">
            <DiscordIconWithLink
              href={project.discord}
              tabIndex={0}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  )
})

const NoData = memo(function NoData() {
  const t = getT(json)
  return (
    <div
      className={clsx(
        'mt-6 flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl p-4 transition-all',
        'grid h-40 place-items-center font-semibold',
        'bg-light-foreground hover:bg-light-foreground-hover',
        'dark:bg-dark-background dark:hover:bg-dark-foreground',
      )}
    >
      {t('noData')}
    </div>
  )
})

const Loading = memo(function Loading() {
  const t = getT(json)
  return (
    <div
      className={clsx(
        'mt-6 flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl p-4 transition-all',
        'grid h-40 place-items-center font-semibold',
        'bg-light-foreground hover:bg-light-foreground-hover',
        'dark:bg-dark-background dark:hover:bg-dark-foreground',
      )}
    >
      {t('loading')}
    </div>
  )
})

const getCategoryId = (
  categories: ProjectCategoryFragment[] | undefined,
  name: string,
) => {
  if (!categories) return
  return categories.find((category) => category.name === name)?.id
}

export default Categories
