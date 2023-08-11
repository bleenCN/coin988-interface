import { ExternalLink } from '@/components/external-link'
import { Badge } from '@/components/ui/badge'

import { fetchProjects } from '../queries'
import { getSocialLinkIcon } from '../utils'

export async function Projects({
  category,
  isParent,
}: {
  category: string | undefined
  isParent: boolean
}) {
  let projects
  try {
    projects = await fetchProjects(category, isParent)
  } catch (error) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-xl bg-card">
        Error
      </div>
    )
  }

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
          <div
            className="relative mx-auto -mt-[25px] h-[50px] w-[50px] rounded-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="flex flex-1 flex-col items-center px-1">
            <h3 className="mt-3 break-all text-center font-semibold">{project.name}</h3>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {project.categories.map((category) => (
                <Badge key={category.id}>{category.name}</Badge>
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
