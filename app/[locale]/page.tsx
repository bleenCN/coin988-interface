import Footer from '@/components/footer'
import NewTokens from '@/components/new-tokens'

import ADs from './ads'
import Categories from './categories'
import InfraAndTools from './Infra&tools'
import News from './news'
import Search from './search'
import TwitterStars from './twitter-stars'
import Welcome from './welcome'

export default function Home() {
  return (
    <>
      <div className="container pt-6 md:pt-12">
        <Search />
      </div>

      <div className="container pt-11">
        <ADs />
      </div>

      <div className="container pt-10">
        <Categories />
      </div>

      <div className="container pt-10">
        <NewTokens />
      </div>

      <div className="container pt-14">
        <InfraAndTools />
      </div>

      <div className="container pt-10">
        <TwitterStars />
      </div>

      <div className="container pt-10">
        <News />
      </div>

      <div>
        <Welcome />
      </div>

      <div className="line h-px w-full bg-[#DDDFE7] dark:bg-dark-foreground" />

      <div className="container">
        <Footer />
      </div>
    </>
  )
}
