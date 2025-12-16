import Hero from '../Hero'
import Packages from '../Packages'
import Features from '../Features'

const Home = ({ searchFilters, setSearchFilters }) => {
  return (
    <div>
      <Hero searchFilters={searchFilters} setSearchFilters={setSearchFilters} />
      <Packages searchFilters={searchFilters} />
      <Features />
    </div>
  )
}

export default Home

