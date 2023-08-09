import ADs from './ads'
import Categorys from './categorys'
import Search from './search'

export default function Home() {
  return (
    <>
      <div className="md:pt-12">
        <Search />
      </div>

      <div className="pt-11">
        <ADs />
      </div>

      <div className="pt-10">
        <Categorys />
      </div>
    </>
  )
}
