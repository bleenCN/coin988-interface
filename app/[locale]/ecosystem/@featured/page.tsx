import { FeaturedProjectsTab } from '../types'
import { ProjectsList } from './projects-list'
import { Tabs } from './tabs'

export default function FeaturedProjects({
  searchParams: { tab = 'hot' },
}: {
  searchParams: { [tab: string]: FeaturedProjectsTab | undefined }
}) {
  return (
    <section className="container mt-4 lg:mt-[42px]">
      <h2 className="sr-only">Featured projects</h2>
      <Tabs activeTab={tab} />
      <div className="mt-4 md:mt-10">
        <ProjectsList tab={tab} />
      </div>
    </section>
  )
}
