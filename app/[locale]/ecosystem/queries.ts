import { gql } from 'graphql-request'

import { RemoteProjectSchema } from '@/domain/projects/schema'
import { gqlClient } from '@/lib/graphql-client'

import { FeaturedProjectsTab } from './types'

const projectsQuery = gql`
  query Projects(
    $paginationInputArgs: PaginationInputArgs
    $projectInputArgs: ProjectInputArgs
  ) {
    data: queryProjectPage(
      paginationInputArgs: $paginationInputArgs
      projectInputArgs: $projectInputArgs
    ) {
      records {
        id
        name
        logo
        describe
        website
        twitter
        discord
        telegram
        github
        categories {
          id
          name
        }
      }
    }
  }
`

export async function fetchProject(id: string) {
  const remoteData = await gqlClient.request(projectsQuery, {
    projectInputArgs: {
      chainName: 'BASE',
      id,
    },
    paginationInputArgs: {
      current: 0,
      pageSize: 1,
    },
  })

  const {
    data: { records },
  } = RemoteProjectSchema.parse(remoteData)

  return records[0]
}

export async function fetchProjects(categoryId: string | undefined, isParent: boolean) {
  const remoteData = await gqlClient.request(projectsQuery, {
    projectInputArgs: {
      chainName: 'BASE',
      categoryId,
      isParent,
    },
    paginationInputArgs: {
      current: 0,
      // TODO: pagination
      pageSize: 100,
    },
  })

  const {
    data: { records },
  } = RemoteProjectSchema.parse(remoteData)

  return records
}

export async function fetchFeaturedProjects(tab: FeaturedProjectsTab) {
  const remoteData = await gqlClient.request(projectsQuery, {
    projectInputArgs: {
      chainName: 'BASE',
      isHot: tab === 'hot',
      isNew: tab === 'latest',
    },
    paginationInputArgs: {
      current: 0,
      pageSize: 8,
    },
  })

  const {
    data: { records },
  } = RemoteProjectSchema.parse(remoteData)

  return records
}
