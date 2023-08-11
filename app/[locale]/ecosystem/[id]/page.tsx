import Image from 'next/image'

import { ExternalLink } from '@/components/external-link'
import { Badge } from '@/components/ui/badge'

import { fetchProject } from '../queries'
import { getSocialLinkIcon } from '../utils'
import { BackButton } from './back-button'
import { BookmarkButton } from './BookmarkButton'

export default async function Page({
  params,
}: {
  params: {
    id: string
  }
}) {
  let project
  try {
    project = await fetchProject(params.id)
  } catch (error) {
    return <div className="container">Error data</div>
  }

  return (
    <div className="container">
      <div className="pt-5">
        <BackButton />
      </div>

      <div className="mt-4 lg:mt-[42px] lg:grid lg:grid-cols-[438px,1fr]">
        <div className="flex flex-col items-center rounded-xl bg-gradient-to-bl from-card-hard to-card px-6 pb-8 pt-6">
          <Image
            className="rounded-full"
            src={project.imageUrl}
            alt=""
            width={120}
            height={120}
            unoptimized
          />
          <h1 className="mt-3 text-2xl">{project.name}</h1>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {project.categories.map((category) => (
              <Badge key={category.id}>{category.name}</Badge>
            ))}
          </div>
          <p className="mt-4 line-clamp-3 text-sm">{project.description}</p>
          <div className="mb-6 mt-8 flex items-center gap-3">
            {project.links.map((link) => (
              <ExternalLink key={link.brand} href={link.url}>
                {getSocialLinkIcon(link.brand)}
              </ExternalLink>
            ))}
          </div>

          <BookmarkButton />
        </div>
      </div>
    </div>
  )
}
