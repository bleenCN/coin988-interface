import { gql } from 'graphql-request'
import { z } from 'zod'

import { gqlClient } from '@/lib/graphql-client'

import { CategoryFiltersClient } from './category-filters.client'

const CategorysSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      count: z.number().nullable(),
      subcategories: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          count: z.number().nullable(),
        }),
      ),
    }),
  ),
})

const query = gql`
  query ProjectsCategories($projectCategoryInputArgs: ProjectCategoryInputArgs) {
    data: queryProjectCategoryList(projectCategoryInputArgs: $projectCategoryInputArgs) {
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
`

const variables = {
  projectCategoryInputArgs: {
    chainName: 'BASE',
    isParent: true,
  },
}

export async function CategoryFilters() {
  let data
  try {
    data = await gqlClient.request(query, variables)
  } catch (error) {
    return <div>Error</div>
  }

  const categoriesData = CategorysSchema.parse(data)

  return <CategoryFiltersClient categories={categoriesData} />
}
