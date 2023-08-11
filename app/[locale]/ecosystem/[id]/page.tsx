import Image from 'next/image'

import { ExternalLink } from '@/components/external-link'
import { Badge } from '@/components/ui/badge'
import { StarIcon } from '@/components/ui/icons'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n.config'

import { fetchProject } from '../queries'
import { getSocialLinkIcon } from '../utils'
import { BackButton } from './back-button'
import { BookmarkButton } from './BookmarkButton'

export default async function Page({
  params,
}: {
  params: {
    id: string
    locale: Locale
  }
}) {
  const projectPromise = fetchProject(params.id)
  const dictionaryPromise = getDictionary(params.locale)

  let project
  let dictionary

  try {
    ;[project, dictionary] = await Promise.all([projectPromise, dictionaryPromise])
  } catch (error) {
    return <div className="container">Failed to load project {params.id}, 🥲</div>
  }

  return (
    <div className="container">
      <div className="pt-5">
        <BackButton />
      </div>

      <div className="mt-4 grid grid-cols-1 items-start gap-5 lg:mt-[42px] lg:grid-cols-[320px,1fr] lg:gap-10 xl:grid-cols-[438px,1fr]">
        <div className="flex flex-col items-center rounded-xl bg-gradient-to-bl from-card-hard to-card px-6 pb-8 pt-6 lg:sticky lg:top-20">
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
          <p className="mt-4 line-clamp-3 break-words text-sm">{project.description}</p>
          <div className="mb-6 mt-8 flex items-center gap-3">
            {project.links.map((link) => (
              <ExternalLink key={link.brand} href={link.url}>
                {getSocialLinkIcon(link.brand)}
              </ExternalLink>
            ))}
          </div>

          <BookmarkButton />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:gap-10">
          <div className="aspect-h-5 aspect-w-16 overflow-hidden rounded-xl">
            <Image
              src="/ecosystem/banner.png"
              alt=""
              className="object-cover"
              fill
              unoptimized
            />
          </div>

          <section>
            <h2 className="marker flex items-center">
              {dictionary.ecosystem.introduction}
            </h2>
            <p className="mt-4 lg:mt-6">{project.description}</p>
          </section>

          <section>
            <h2 className="marker flex items-center">{dictionary.ecosystem.highlight}</h2>
            <p className="mt-4 text-soft-foreground lg:mt-6">Nothing here</p>
          </section>

          <section>
            <h2 className="marker flex items-center">{dictionary.ecosystem.team}</h2>
            <p className="mt-4 text-soft-foreground lg:mt-6">Nothing here</p>
          </section>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <section className="flex items-center gap-4 rounded-xl bg-card p-4 xl:h-20 xl:gap-10">
              <h2 className="marker flex items-center">{dictionary.ecosystem.stars}</h2>
              <div className="flex items-center gap-1 xl:gap-3">
                <StarIcon className="text-border" width={24} height={24} />
                <StarIcon className="text-border" width={24} height={24} />
                <StarIcon className="text-border" width={24} height={24} />
                <StarIcon className="text-border" width={24} height={24} />
                <StarIcon className="text-border" width={24} height={24} />
              </div>
            </section>

            <section className="flex items-center gap-4 rounded-xl bg-card p-4 xl:h-20 xl:gap-10">
              <h2 className="marker flex items-center">{dictionary.ecosystem.status}</h2>
            </section>

            <section className="flex items-center gap-4 rounded-xl bg-card p-4 xl:h-20 xl:gap-10">
              <h2 className="marker flex items-center">{dictionary.ecosystem.stars}</h2>
            </section>

            <section className="flex items-center gap-4 rounded-xl bg-card p-4 xl:h-20 xl:gap-10">
              <h2 className="marker flex items-center">{dictionary.ecosystem.audit}</h2>
            </section>

            <section className="flex items-center gap-4 rounded-xl bg-card p-4 xl:h-20 xl:gap-10">
              <h2 className="marker flex items-center">{dictionary.ecosystem.token}</h2>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20"></div>
    </div>
  )
}
