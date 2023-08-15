import NewTokens from '@/components/new-tokens'

import NewProjects from './new-projects'

export default function LaunchpadPage() {
  return (
    <>
      <div className="container pt-6 md:pt-12">
        <NewTokens hideTitle />
      </div>

      <div className="container pt-24">
        <NewProjects />
      </div>
    </>
  )
}
