import { ProjectsList } from './projects-list'
import { Tabs } from './tabs'

export function FeaturedProjects() {
  return (
    <section className="mt-4 lg:mt-[42px]">
      <h2 className="sr-only">Featured projects</h2>
      <Tabs />
      <div className="mt-4 md:mt-10">
        <ProjectsList />
      </div>
    </section>
  )
}
