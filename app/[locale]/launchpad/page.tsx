import Footer from '@/components/footer'
import NewTokens from '@/components/new-tokens'

import Apply from './apply'
import Information from './infomation'
import Introduction from './introduction'
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

      <div className="container pt-20">
        <Introduction />
      </div>

      <div className="container pt-20">
        <Information />
      </div>

      <div className="container pt-20">
        <Apply />
      </div>

      <div className="container pt-20">
        <Footer />
      </div>
    </>
  )
}
