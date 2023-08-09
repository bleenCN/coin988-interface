import request, { gql } from 'graphql-request'
import Image from 'next/image'
import * as z from 'zod'

import { ExternalLink } from '@/components/external-link'
import {
  DiscordIcon,
  GithubIcon,
  GlobeIcon,
  TelegramIcon,
  TwitterIcon,
} from '@/components/ui/icons'

const ProjectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    describe: z.string(),
    website: z.string().optional(),
    telegram: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    discord: z.string().optional(),
  })
  .transform((project) => {
    const { id, name, imageUrl, describe, website, telegram, github, twitter, discord } =
      project

    return {
      id,
      name,
      imageUrl,
      description: describe,
      links: [
        { brand: 'website', url: website },
        { brand: 'twitter', url: twitter },
        { brand: 'discord', url: discord },
        { brand: 'telegram', url: telegram },
        { brand: 'github', url: github },
      ].filter((linkObj) => Boolean(linkObj.url)),
    }
  })

const ProjectsSchema = z.object({
  data: z.object({
    records: z.array(ProjectSchema),
  }),
})

const endpoint = 'http://192.168.31.204:28051/graphqlx'

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
      }
    }
  }
`

const variables = {
  projectInputArgs: {
    chainName: 'Base',
  },
  paginationInputArgs: {
    current: 0,
    pageSize: 8,
  },
}

export async function ProjectsList() {
  let data

  try {
    data = await request(endpoint, query, variables)
  } catch (error) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-xl bg-card">
        Coming soon {'('}tomorrow{')'}
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
    <div className="overflow-hidden">
      <div className="flex w-auto gap-6 overflow-x-auto sm:grid sm:grid-cols-[repeat(4,45%)] sm:grid-rows-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="w-10/12 shrink-0 rounded-xl bg-card p-4 sm:w-full sm:p-6"
          >
            <header className="flex items-center">
              <Image
                src={project.imageUrl}
                alt=""
                width={50}
                height={50}
                unoptimized
                className="mr-3 rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div className="mt-1.5 flex items-center gap-3">
                  {project.links.map(({ brand, url }) => (
                    <ExternalLink key={brand} href={url}>
                      {getSocialLinkIcon(brand)}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </header>
            <p className="mt-4 line-clamp-3 text-sm text-[#9EA1AC]">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
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
