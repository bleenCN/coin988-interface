import { gql } from 'graphql-request'
import * as z from 'zod'

import { Category } from '@/domain/category'

import { gqlClient } from './graphql-client'

export async function loadCategories() {
  const remoteData = await gqlClient.request(
    gql`
      query ProjectsCategories($projectCategoryInputArgs: ProjectCategoryInputArgs) {
        data: queryProjectCategoryList(
          projectCategoryInputArgs: $projectCategoryInputArgs
        ) {
          id
          name
          sort
          count
          subcategories {
            id
            name
            sort
            count
          }
        }
      }
    `,
    {
      projectCategoryInputArgs: {
        chainName: 'BASE',
        isParent: true,
      },
    },
  )

  const { data: categories } = z.object({ data: z.array(Category) }).parse(remoteData)

  return categories
}
