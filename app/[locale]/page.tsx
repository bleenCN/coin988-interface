import ADs from './ads'
import Categorys from './categorys'
import Footer from './footer'
import InfraAndTools from './Infra&tools'
import NewTokens from './new-tokens'
import News from './news'
import Search from './search'
import TwitterStars from './twitter-stars'
import Welcome from './welcome'

export default function Home() {
  return (
    <>
      <div className="container md:pt-12">
        <Search />
      </div>

      <div className="container pt-11">
        <ADs />
      </div>

      <div className="container pt-10">
        <Categorys />
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
