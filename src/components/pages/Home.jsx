import Hero from '../Hero'
import Packages from '../Packages'
import Features from '../Features'

const Home = ({ searchFilters, setSearchFilters, onSearch, searchResults }) => {
  return (
    <div>
      <Hero searchFilters={searchFilters} setSearchFilters={setSearchFilters} onSearch={onSearch} />
      <Packages searchFilters={searchFilters} searchResults={searchResults} />
      <Features />
    </div>
  )
}

export default Home

