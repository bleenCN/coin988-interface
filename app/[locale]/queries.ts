import { graphql } from '@/lib/gql'
import {
  PaginationInputArgs,
  ProjectCategoryInputArgs,
  ProjectInputArgs,
} from '@/lib/gql/graphql'
import { gqlClient } from '@/lib/graphql-client'

const queryProjectCategoryListDoc = graphql(`
  query queryProjectCategoryList($projectCategoryInputArgs: ProjectCategoryInputArgs) {
    queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {
      id
      name
    }
  }
`)

export const fetchCategories = async (
  projectCategoryInputArgs: ProjectCategoryInputArgs,
) => {
  const res = await gqlClient.request(queryProjectCategoryListDoc, {
    projectCategoryInputArgs,
  })

  return res.queryProjectCategoryList
}

const queryProjectPageDoc = graphql(`
  query queryProjectPage(
    $paginationInputArgs: PaginationInputArgs
    $projectInputArgs: ProjectInputArgs
  ) {
    queryProjectPage(
      paginationInputArgs: $paginationInputArgs
      projectInputArgs: $projectInputArgs
    ) {
      records {
        id
        name
        logo
        website
        twitter
        discord
        categories {
          id
        }
      }
    }
  }
`)

export const fetchProjectPage = async (params: {
  paginationInputArgs: PaginationInputArgs
  projectInputArgs: ProjectInputArgs
}) => {
  const res = await gqlClient.request(queryProjectPageDoc, params)
  return res.queryProjectPage
}
