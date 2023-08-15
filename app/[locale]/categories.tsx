'use client'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { memo, useCallback, useState } from 'react'

import withLink from '@/components/hocs/with-link'
import {
  ArrowIcon,
  DiscordIcon,
  LayeredIcon,
  PieIcon,
  TwitterIcon,
  WebSiteIcon,
} from '@/components/ui/icons.b'
import RoundButton from '@/components/ui/round-button'
import Title from '@/components/ui/Title'
import { useLessThanWidth } from '@/hooks/useBreakPoint'
import {
  PaginationInputArgs,
  ProjectCategoryFragment,
  ProjectInputArgs,
} from '@/lib/gql/graphql'
import { getT } from '@/lib/utils'

import { fetchCategories, fetchProjectPage } from './queries'

interface Project {
  id: string
  name: string
  logo?: string
  twitter?: string
  discord?: string
  website?: string
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

  const isMobile = useLessThanWidth(768)
  const [activeCategoryName, setActiveCategoryName] = useState(nameOfCategories.defi)
  const changeFlodState = useCallback(
    (activeCategoryName: string, categoryName: string) => {
      let _categoryName = ''
      if (activeCategoryName !== categoryName) _categoryName = categoryName
      setActiveCategoryName(_categoryName)
    },
    [],
  )

  return (
    <div>
      <Title>{t('title')}</Title>

      <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
        <Category
          icon={<LayeredIcon />}
          categoryName={nameOfCategories.defi}
          categoryId={defiId as string}
          projects={defiProjects?.records as Project[]}
          isLoading={defiIsLoading}
          isMobile={isMobile}
          isFloded={activeCategoryName !== nameOfCategories.defi}
          changeFlodState={() =>
            changeFlodState(activeCategoryName, nameOfCategories.defi)
          }
        />
        <Category
          icon={<PieIcon />}
          categoryName={nameOfCategories.nft}
          categoryId={NftId as string}
          projects={nftProjects?.records as Project[]}
          isLoading={nftIsLoading}
          isMobile={isMobile}
          isFloded={activeCategoryName !== nameOfCategories.nft}
          changeFlodState={() =>
            changeFlodState(activeCategoryName, nameOfCategories.nft)
          }
        />
        <Category
          icon={<LayeredIcon />}
          categoryName={nameOfCategories.game}
          categoryId={gameId as string}
          projects={gameProjects?.records as Project[]}
          isLoading={gameIsLoading}
          isMobile={isMobile}
          isFloded={activeCategoryName !== nameOfCategories.game}
          changeFlodState={() =>
            changeFlodState(activeCategoryName, nameOfCategories.game)
          }
        />
        <Category
          icon={<PieIcon />}
          categoryName={nameOfCategories.bridges}
          categoryId={bridgesId as string}
          projects={bridgesProjects?.records as Project[]}
          isLoading={BridgesIsLoading}
          isMobile={isMobile}
          isFloded={activeCategoryName !== nameOfCategories.bridges}
          changeFlodState={() =>
            changeFlodState(activeCategoryName, nameOfCategories.bridges)
          }
        />
      </div>
    </div>
  )
})

interface CategoryProps {
  projects: Project[] | undefined
  categoryName: string
  categoryId: string | undefined
  isLoading: boolean
  isFloded: boolean
  isMobile: boolean
  icon: JSX.Element
  changeFlodState: () => void
}

const Category = memo(function Category(props: CategoryProps) {
  const numOfProjectsToSHow = props.isMobile ? 4 : 6
  const showProjects = props.projects?.slice(0, numOfProjectsToSHow)

  const router = useRouter()
  const moreBtnClickHandler = useCallback(() => {
    router.push(`/ecosystem?category=${props.categoryId}&isParent=true`)
  }, [props.categoryId, router])

  const contents = props.isLoading ? (
    <Loading />
  ) : !showProjects?.length ? (
    <NoData />
  ) : (
    <div className="grid grid-cols-1 gap-3 pt-6 xl:grid-cols-2">
      {showProjects.map((project, index) => (
        <ProjectBoard key={index} project={project} />
      ))}
      {props.isMobile && <MoreBoard onClick={moreBtnClickHandler} />}
    </div>
  )

  return (
    <div>
      <CategoryTitle
        isMobile={props.isMobile}
        isFloded={props.isFloded}
        icon={props.icon}
        categoryName={props.categoryName}
        changeFlodState={props.changeFlodState}
        onMoreBtnClick={moreBtnClickHandler}
      />
      <div
        className={clsx(
          'grid overflow-hidden transition-all',
          props.isFloded && props.isMobile ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]',
        )}
      >
        <div className="min-h-0">{contents}</div>
      </div>
    </div>
  )
})

interface CategoryTitleProps {
  icon: JSX.Element
  categoryName: string
  more?: string
  isFloded: boolean
  isMobile: boolean
  onMoreBtnClick: () => void
  changeFlodState: () => void
}

const CategoryTitle = memo(function Category(props: CategoryTitleProps) {
  const t = getT(json)

  return (
    <div
      onClick={props.changeFlodState}
      className="flex h-20 select-none items-center rounded-xl bg-dark-background py-2 pl-3 pr-6 text-white lg:h-[90px]"
    >
      <span className="mr-5">{props.icon}</span>
      <span className="flex-1 font-semibold lg:text-2xl">{props.categoryName}</span>
      {props.isMobile ? (
        <ArrowIcon
          className={clsx(
            'transition-all',
            props.isFloded ? 'rotate-90' : 'rotate-[270deg]',
          )}
          tabIndex={0}
        />
      ) : (
        <div onClick={props.onMoreBtnClick}>
          <RoundButton className="text-sm">{t('more')}</RoundButton>
        </div>
      )}
    </div>
  )
})

const TwitterIconWithLink = withLink(TwitterIcon)
const DiscordIconWithLink = withLink(DiscordIcon)
const WebSiteIconWithLink = withLink(WebSiteIcon)

const ProjectBoard = memo(function ProjectBoard({ project }: { project: Project }) {
  const router = useRouter()

  const boardClickHandler = useCallback(() => {
    router.push(`/ecosystem/${project.id}`)
  }, [project.id, router])

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl p-4 transition-all',
        'min-h-0 bg-light-foreground hover:bg-light-foreground-hover',
        'dark:bg-dark-background dark:hover:bg-dark-foreground',
      )}
      onClick={boardClickHandler}
    >
      <Image
        src={project.logo || ''}
        alt={project.name}
        width={50}
        height={50}
        className="h-10 w-10 overflow-hidden rounded-xl lg:h-12 lg:w-12"
      />

      <span className="flex-1 text-sm font-semibold md:text-xl">{project.name}</span>

      <div className="flex gap-3 text-xl">
        {project.website && (
          <div title={project.website}>
            <WebSiteIconWithLink href={project.website} className="cursor-pointer" />
          </div>
        )}
        {project.twitter && (
          <div title="twitter">
            <TwitterIconWithLink href={project.twitter} className="cursor-pointer" />
          </div>
        )}
        {project.discord && (
          <div title="discord">
            <DiscordIconWithLink href={project.discord} className="cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  )
})

const MoreBoard = memo(function MoreBoard(props: React.ComponentProps<'div'>) {
  const t = getT(json)
  return (
    <div
      {...props}
      className={clsx(
        'flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl p-4 transition-all',
        'min-h-0 bg-light-foreground hover:bg-light-foreground-hover',
        'dark:bg-dark-background dark:hover:bg-dark-foreground',
        'grid place-items-center',
      )}
    >
      {t('more')}
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
