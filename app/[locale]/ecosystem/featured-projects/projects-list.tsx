import Image from 'next/image'

import { ExternalLink } from '@/components/external-link'

import { fetchFeaturedProjects } from '../queries'
import { getSocialLinkIcon } from '../utils'
import { NavLink } from './nav-link'

export async function ProjectsList({ tab = 'hot' }: { tab?: 'hot' | 'latest' }) {
  let projects

  try {
    projects = await fetchFeaturedProjects(tab)
  } catch (error) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-xl bg-card">
        Error data
      </div>
    )
  }

  if (projects.length === 0) {
    return <div>Nothing here</div>
  }

  return (
    <div className="overflow-hidden">
      <div className="flex w-auto gap-6 overflow-x-auto sm:grid sm:grid-cols-[repeat(4,45%)] sm:grid-rows-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group w-10/12 shrink-0 rounded-xl bg-card p-4 sm:w-full sm:p-6"
          >
            <div className="flex items-center">
              <Image
                src={project.imageUrl}
                alt=""
                width={50}
                height={50}
                unoptimized
                className="mr-3 rounded-xl"
              />
              <div>
                <h3 className="line-clamp-1 text-xl font-semibold" title={project.name}>
                  {project.name}
                </h3>
                <div className="mt-1.5 flex items-center gap-3">
                  {project.links.map(({ brand, url }) => (
                    <ExternalLink key={brand} href={url}>
                      {getSocialLinkIcon(brand)}
                    </ExternalLink>
                  ))}
                </div>
              </div>
              <div className="ml-auto duration-150 lg:opacity-0 lg:group-hover:opacity-100">
                <NavLink href={`/ecosystem/${project.id}`} />
              </div>
            </div>
            <p className="mt-4 line-clamp-3 text-sm text-[#9EA1AC]">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
