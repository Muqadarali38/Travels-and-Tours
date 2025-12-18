import { useState, useEffect } from 'react'

const Hero = ({ searchFilters, setSearchFilters, onSearch }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [airportsData, setAirportsData] = useState({
    departureAirports: [],
    arrivalAirports: [],
    loading: true,
    error: null
  })

  const roomTypes = ['Single', 'Double', 'Triple', 'Quad']

  // Fetch airports from API
  useEffect(() => {git add .

    const fetchAirports = async () => {
      try {
        setAirportsData(prev => ({ ...prev, loading: true, error: null }))
        const response = await fetch('http://127.0.0.1:8000/api/airports/')
        
        if (!response.ok) {
          throw new Error('Failed to fetch airports')
        }

        const data = await response.json()
        
        setAirportsData({
          departureAirports: data.departure_airports || [],
          arrivalAirports: data.arrival_airports || [],
          loading: false,
          error: null
        })
      } catch (err) {
        console.error('Error fetching airports:', err)
        setAirportsData(prev => ({
          ...prev,
          loading: false,
          error: err.message
        }))
      }
    }

    fetchAirports()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Build query parameters
      const params = new URLSearchParams()
      
      // Use airport codes directly (API returns codes like "DXB", "JED")
      if (searchFilters.departure) {
        params.append('departure_airport', searchFilters.departure)
      }

      if (searchFilters.arrival) {
        params.append('arrival_airport', searchFilters.arrival)
      }

      // Convert room type to lowercase (API expects "double" not "Double")
      if (searchFilters.roomType) {
        params.append('room_type', searchFilters.roomType.toLowerCase())
      }

      // Add other parameters if needed
      if (searchFilters.adults) {
        params.append('adults', searchFilters.adults)
      }
      if (searchFilters.children) {
        params.append('children', searchFilters.children)
      }
      if (searchFilters.infants) {
        params.append('infants', searchFilters.infants)
      }
      if (searchFilters.makkahNights) {
        params.append('makkah_nights', searchFilters.makkahNights)
      }
      if (searchFilters.madinahNights) {
        params.append('madinah_nights', searchFilters.madinahNights)
      }

      // Make API call
      const response = await fetch(`http://127.0.0.1:8000/api/packages/search/?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Failed to search packages')
      }

      const data = await response.json()
      
      // Handle different response formats (array, object with results/data property)
      let results = data
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        results = data.results || data.data || data.packages || []
      }
      
      // Pass results to parent component
      if (onSearch) {
        onSearch(results)
      }

      // Scroll to packages section
      setTimeout(() => {
        const packagesSection = document.querySelector('.umrah-pkg-cover')
        if (packagesSection) {
          packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)

    } catch (err) {
      setError(err.message)
      console.error('Error searching packages:', err)
    } finally {
      setLoading(false)
    }
  }

  const updateFilter = (key, value) => {
    setSearchFilters(prev => ({ ...prev, [key]: value }))
  }

  const adjustCount = (key, delta) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }))
  }

  return (
    <div className="relative bg-gradient-travel text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white drop-shadow-lg">
            Umrah Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">Your Journey to Spiritual Fulfillment</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-gray-800 border border-white/20">
          <p className="text-center mb-6 text-xl font-semibold text-gray-800">Where do you want to go?</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Departure Airport</label>
                <select
                  value={searchFilters.departure}
                  onChange={(e) => updateFilter('departure', e.target.value)}
                  disabled={airportsData.loading}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select Airport</option>
                  {airportsData.loading ? (
                    <option disabled>Loading airports...</option>
                  ) : airportsData.error ? (
                    <option disabled>Error loading airports</option>
                  ) : (
                    airportsData.departureAirports.map(airport => (
                      <option key={airport} value={airport}>{airport}</option>
                    ))
                  )}
                </select>
                {airportsData.error && (
                  <p className="text-xs text-red-600 mt-1">{airportsData.error}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Arrival Airport</label>
                <select
                  value={searchFilters.arrival}
                  onChange={(e) => updateFilter('arrival', e.target.value)}
                  disabled={airportsData.loading}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select Airport</option>
                  {airportsData.loading ? (
                    <option disabled>Loading airports...</option>
                  ) : airportsData.error ? (
                    <option disabled>Error loading airports</option>
                  ) : (
                    airportsData.arrivalAirports.map(airport => (
                      <option key={airport} value={airport}>{airport}</option>
                    ))
                  )}
                </select>
                {airportsData.error && (
                  <p className="text-xs text-red-600 mt-1">{airportsData.error}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Adult(s)</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjustCount('adults', -1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-2 border-sky-200 rounded-lg min-w-[60px] text-center font-semibold bg-sky-50">
                    {searchFilters.adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustCount('adults', 1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Child(s)</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjustCount('children', -1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-2 border-sky-200 rounded-lg min-w-[60px] text-center font-semibold bg-sky-50">
                    {searchFilters.children}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustCount('children', 1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Infant(s)</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjustCount('infants', -1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-2 border-sky-200 rounded-lg min-w-[60px] text-center font-semibold bg-sky-50">
                    {searchFilters.infants}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustCount('infants', 1)}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all shadow-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nights in Makkah
                </label>
                <select
                  value={searchFilters.makkahNights}
                  onChange={(e) => updateFilter('makkahNights', parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} Night{n !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nights in Madinah
                </label>
                <select
                  value={searchFilters.madinahNights}
                  onChange={(e) => updateFilter('madinahNights', parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} Night{n !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Room Type</label>
              <div className="grid grid-cols-4 gap-2">
                {roomTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFilter('roomType', type)}
                    className={`px-4 py-2.5 border-2 rounded-lg font-medium transition-all ${
                      searchFilters.roomType === type
                        ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white border-transparent shadow-lg transform scale-105'
                        : 'bg-white border-gray-200 hover:border-sky-400 hover:shadow-md'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:from-sky-700 hover:via-cyan-700 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  🔍 Search Packages
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero

