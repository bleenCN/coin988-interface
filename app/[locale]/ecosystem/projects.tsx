import { gql } from 'graphql-request'
import Image from 'next/image'
import * as z from 'zod'

import { ExternalLink } from '@/components/external-link'
import { Badge } from '@/components/ui/badge'
import {
  DiscordIcon,
  GithubIcon,
  GlobeIcon,
  TelegramIcon,
  TwitterIcon,
} from '@/components/ui/icons'
import { gqlClient } from '@/lib/graphql-client'

const ProjectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    website: z.string().optional(),
    telegram: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    discord: z.string().optional(),
    categories: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    ),
  })
  .transform((project) => {
    const {
      id,
      name,
      imageUrl,
      website,
      telegram,
      github,
      twitter,
      discord,
      categories,
    } = project

    return {
      id,
      name,
      imageUrl,
      links: [
        { brand: 'website', url: website },
        { brand: 'twitter', url: twitter },
        { brand: 'discord', url: discord },
        { brand: 'telegram', url: telegram },
        { brand: 'github', url: github },
      ].filter((linkObj) => Boolean(linkObj.url)),
      categories,
    }
  })

const ProjectsSchema = z.object({
  data: z.object({
    records: z.array(ProjectSchema),
  }),
})

const query = gql`
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
        imageUrl
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

export async function Projects({
  category,
  isParent,
}: {
  category: string | undefined
  isParent: boolean
}) {
  const variables = {
    projectInputArgs: {
      chainName: 'BASE',
      categoryId: category,
      isParent,
    },
    paginationInputArgs: {
      current: 0,
      pageSize: 100,
    },
  }

  let data

  try {
    data = await gqlClient.request(query, variables)
  } catch (error) {
    console.log({ variables, error })

    return (
      <div className="flex h-[300px] items-center justify-center rounded-xl bg-card">
        Error
      </div>
    )
  }

  const parsedProjects = ProjectsSchema.safeParse(data)

  if (!parsedProjects.success) {
    return <div>Nothing here</div>
  }

  const {
    data: { records: projects },
  } = parsedProjects.data

  if (projects.length === 0) {
    return <div>Nothing here</div>
  }

  return (
    <>
      {projects.map((project) => (
        <article key={project.id} className="flex flex-col rounded-xl border bg-card">
          <div className="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-t-xl">
            <div
              className="bg-cover bg-no-repeat blur-lg"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
          </div>
          <div className="relative mx-auto -mt-[25px] h-[50px] w-[50px]">
            <Image
              src={project.imageUrl}
              alt=""
              width={50}
              height={50}
              unoptimized
              className="rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-col items-center px-1">
            <h3 className="mt-3 break-all text-center font-semibold">{project.name}</h3>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {project.categories.map((category) => (
                <Badge key={category.id} variant="soft">
                  {category.name}
                </Badge>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3 py-[22px]">
              {project.links.map(({ brand, url }) => (
                <ExternalLink key={brand} href={url}>
                  {getSocialLinkIcon(brand)}
                </ExternalLink>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

function getSocialLinkIcon(key: string) {
  return {
    website: <GlobeIcon className="text-[#9EA1AC]" />,
    twitter: <TwitterIcon className="text-[#9EA1AC]" />,
    discord: <DiscordIcon className="text-[#9EA1AC]" />,
    telegram: <TelegramIcon className="text-[#9EA1AC]" />,
    github: <GithubIcon className="text-[#9EA1AC]" width={16} height={16} />,
  }[key]
}
