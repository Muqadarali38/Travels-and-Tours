import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import UmrahPackages from './components/pages/UmrahPackages'
import Hajj from './components/pages/Hajj'
import CustomizeUmrah from './components/pages/CustomizeUmrah'
import UmrahVisa from './components/pages/UmrahVisa'
import UmrahPackages2025 from './components/pages/UmrahPackages2025'
import DecemberUmrah from './components/pages/DecemberUmrah'
import UmrahPackages2026 from './components/pages/UmrahPackages2026'
import RamadanUmrah from './components/pages/RamadanUmrah'
import UmrahFromToronto from './components/pages/UmrahFromToronto'
import UmrahFromMontreal from './components/pages/UmrahFromMontreal'
import UmrahFromCalgary from './components/pages/UmrahFromCalgary'
import UmrahFromVancouver from './components/pages/UmrahFromVancouver'
import UmrahFromEdmonton from './components/pages/UmrahFromEdmonton'
import UmrahFromOttawa from './components/pages/UmrahFromOttawa'
import ShiftingHajj from './components/pages/ShiftingHajj'
import NonShiftingHajj from './components/pages/NonShiftingHajj'

function App() {
  const [searchFilters, setSearchFilters] = useState({
    departure: '',
    arrival: '',
    adults: 1,
    children: 0,
    infants: 0,
    makkahNights: 3,
    madinahNights: 2,
    roomType: 'Double',
    starFilter: 'All'
  })
  const [searchResults, setSearchResults] = useState(null)

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home searchFilters={searchFilters} setSearchFilters={setSearchFilters} onSearch={handleSearch} searchResults={searchResults} />} />
          <Route path="/umrah-packages" element={<UmrahPackages />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/customize-umrah" element={<CustomizeUmrah />} />
          <Route path="/umrah-visa" element={<UmrahVisa />} />
          <Route path="/umrah-packages-2025" element={<UmrahPackages2025 />} />
          <Route path="/december-umrah" element={<DecemberUmrah />} />
          <Route path="/umrah-packages-2026" element={<UmrahPackages2026 />} />
          <Route path="/ramadan-umrah" element={<RamadanUmrah />} />
          <Route path="/umrah-from-toronto" element={<UmrahFromToronto />} />
          <Route path="/umrah-from-montreal" element={<UmrahFromMontreal />} />
          <Route path="/umrah-from-calgary" element={<UmrahFromCalgary />} />
          <Route path="/umrah-from-vancouver" element={<UmrahFromVancouver />} />
          <Route path="/umrah-from-edmonton" element={<UmrahFromEdmonton />} />
          <Route path="/umrah-from-ottawa" element={<UmrahFromOttawa />} />
          <Route path="/shifting-hajj" element={<ShiftingHajj />} />
          <Route path="/non-shifting-hajj" element={<NonShiftingHajj />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

