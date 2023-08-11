import { gql } from 'graphql-request'
import { z } from 'zod'

import { gqlClient } from '@/lib/graphql-client'

import { AllProjects as AllProjectsClient } from './all-projects'
import { Projects } from './all-projects/projects'

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

export type Categories = z.infer<typeof CategorysSchema>

export async function AllProjects({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  let data
  try {
    data = await gqlClient.request(query, variables)
  } catch (error) {
    return <div>Error</div>
  }

  const categoriesData = CategorysSchema.parse(data)

  return (
    <AllProjectsClient categories={categoriesData}>
      <Projects
        category={searchParams.category}
        isParent={searchParams.isParent === 'true'}
      />
    </AllProjectsClient>
  )
}
