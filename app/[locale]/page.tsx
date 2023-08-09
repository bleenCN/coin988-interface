import ADs from './ads'
import Categorys from './categorys'
import Search from './search'

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
    </>
  )
}
