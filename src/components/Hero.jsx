import { useState } from 'react'

const Hero = ({ searchFilters, setSearchFilters }) => {
  const airports = [
    'Calgary (YYC)', 'Edmonton (YEG)', 'Fredericton (YFC)', 'Gander (YQX)',
    'Halifax (YHZ)', 'Moncton (YQM)', 'Montreal (YUL)', 'Ottawa (YOW)',
    'Quebec City (YQB)', 'St. Johns (YYT)', 'Toronto (YYZ)', 'Vancouver (YVR)',
    'Victoria (YYJ)', 'Winnipeg (YWG)'
  ]

  const arrivalAirports = ['Jeddah', 'Dammam', 'Abha', 'Yanbu', 'Taif', 'Riyadh']
  const roomTypes = ['Single', 'Double', 'Triple', 'Quad']

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Search submitted:', searchFilters)
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
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white"
                >
                  <option value="">Select Airport</option>
                  {airports.map(airport => (
                    <option key={airport} value={airport}>{airport}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Arrival Airport</label>
                <select
                  value={searchFilters.arrival}
                  onChange={(e) => updateFilter('arrival', e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white"
                >
                  <option value="">Select Airport</option>
                  {arrivalAirports.map(airport => (
                    <option key={airport} value={airport}>{airport}</option>
                  ))}
                </select>
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:from-sky-700 hover:via-cyan-700 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
            >
              🔍 Search Packages
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero

