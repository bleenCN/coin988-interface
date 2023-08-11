import { z } from 'zod'

export const ProjectSchema = z
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
      describe,
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
      description: describe,
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

export const RemoteProjectSchema = z.object({
  data: z.object({
    records: z.array(ProjectSchema),
  }),
})

export type Project = z.infer<typeof ProjectSchema>
