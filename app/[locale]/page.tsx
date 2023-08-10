import ADs from './ads'
import Categorys from './categorys'
import InfraAndTools from './Infra&tools'
import NewTokens from './new-tokens'
import Search from './search'
import TwitterStars from './twitter-stars'

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
    </>
  )
}
