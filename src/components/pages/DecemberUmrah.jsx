import { useState, useEffect, useRef } from 'react'

const DecemberUmrah = () => {
  // Background image URL - aap yahan apni image ka URL add kar sakte hain
  const backgroundImageUrl = '/media/pages/december-umrah.webp'
  
  const [formData, setFormData] = useState({
    departureAirport: '',
    arrivalAirport: '',
    adults: 1,
    children: 0,
    infants: 0,
    departureDate: '',
    makkahNights: '',
    madinahNights: '',
    passengerName: '',
    phone: '',
    email: '',
    roomType: '',
    captchaAnswer: ''
  })

  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false)
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 7, num2: 1 })
  const passengerRef = useRef(null)

  // Close passenger dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passengerRef.current && !passengerRef.current.contains(event.target)) {
        setShowPassengerDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const airports = [
    'Calgary (YYC)', 'Edmonton (YEG)', 'Fredericton (YFC)', 'Gander (YQX)',
    'Halifax (YHZ)', 'Moncton (YQM)', 'Montreal (YUL)', 'Ottawa (YOW)',
    'Quebec City (YQB)', 'St. Johns (YYT)', 'Toronto (YYZ)', 'Vancouver (YVR)',
    'Victoria (YYJ)', 'Winnipeg (YWG)'
  ]

  const arrivalAirports = ['Jeddah', 'Dammam', 'Abha', 'Yanbu', 'Taif', 'Riyadh']
  const roomTypes = ['Single', 'Double', 'Triple', 'Quad']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const adjustPassenger = (type, delta) => {
    setFormData(prev => ({
      ...prev,
      [type]: Math.max(0, Math.min(10, prev[type] + delta))
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const getPassengerText = () => {
    return `${formData.adults.toString().padStart(2, '0')} Adt - ${formData.children.toString().padStart(2, '0')} Chd - ${formData.infants.toString().padStart(2, '0')} Inf`
  }

  return (
    <section className="search-banner relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            December Umrah Packages
          </h1>
        </div>

        {/* Search Engine Form - Dark Teal Background Design */}
        <div className="max-w-7xl mx-auto">
          <div className="search-form bg-teal-800 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="form relative z-10" noValidate>
                <div className="form-main flex gap-4 items-stretch">
                  {/* Left Side - Form Fields in Two Rows */}
                  <div className="flex-1 grid grid-rows-2 gap-3">
                    
                    {/* Top Row - 6 fields */}
                    <div className="grid grid-cols-6 gap-3">
                      {/* Departure Airport */}
                      <div className="form-input departure relative">
                        <select
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all appearance-none pr-8"
                          name="departureAirport"
                          value={formData.departureAirport}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Departure Airport</option>
                          {airports.map(airport => (
                            <option key={airport} value={airport}>{airport}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Arrival Airport */}
                      <div className="form-input arrival relative">
                        <select
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all appearance-none pr-8"
                          name="arrivalAirport"
                          value={formData.arrivalAirport}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Arrival Airport</option>
                          {arrivalAirports.map(airport => (
                            <option key={airport} value={airport}>{airport}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Passengers */}
                      <div className="form-input form-group passenger-contain relative" ref={passengerRef}>
                        <input
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm cursor-pointer focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          type="text"
                          placeholder=""
                          value={getPassengerText()}
                          readOnly
                          onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                          required
                        />
                        
                        {showPassengerDropdown && (
                          <div className="passenger-dropdown absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl p-4 z-20">
                            <div className="form-group mb-4">
                              <label className="block text-sm font-medium mb-2 text-gray-700">Adult(s)</label>
                              <div className="input-group passenger adult-pass flex items-center gap-2">
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('adults', -1)}
                                >
                                  −
                                </button>
                                <input
                                  className="form-control w-20 px-2 py-1 border-2 border-gray-200 rounded-lg text-center"
                                  type="number"
                                  min="0"
                                  max="10"
                                  name="adults"
                                  value={formData.adults}
                                  onChange={(e) => setFormData(prev => ({ ...prev, adults: parseInt(e.target.value) || 0 }))}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('adults', 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            
                            <div className="form-group mb-4">
                              <label className="block text-sm font-medium mb-2 text-gray-700">Child(s)</label>
                              <div className="input-group passenger child-pass flex items-center gap-2">
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('children', -1)}
                                >
                                  −
                                </button>
                                <input
                                  className="form-control w-20 px-2 py-1 border-2 border-gray-200 rounded-lg text-center"
                                  type="number"
                                  min="0"
                                  max="10"
                                  name="children"
                                  value={formData.children}
                                  onChange={(e) => setFormData(prev => ({ ...prev, children: parseInt(e.target.value) || 0 }))}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('children', 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            
                            <div className="form-group">
                              <label className="block text-sm font-medium mb-2 text-gray-700">Infant(s)</label>
                              <div className="input-group passenger infant-pass flex items-center gap-2">
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('infants', -1)}
                                >
                                  −
                                </button>
                                <input
                                  className="form-control w-20 px-2 py-1 border-2 border-gray-200 rounded-lg text-center"
                                  type="number"
                                  min="0"
                                  max="10"
                                  name="infants"
                                  value={formData.infants}
                                  onChange={(e) => setFormData(prev => ({ ...prev, infants: parseInt(e.target.value) || 0 }))}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg hover:from-sky-600 hover:to-teal-600 transition-all"
                                  onClick={() => adjustPassenger('infants', 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Departure Date */}
                      <div className="form-input date relative">
                        <input
                          type="date"
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Makkah Nights */}
                      <div className="form-input form-floating mk relative">
                        <label htmlFor="makkah" className="absolute top-1.5 left-3 text-xs text-gray-500 bg-white pointer-events-none z-10 px-1">Nights In</label>
                        <select
                          className="form-select w-full h-12 px-3 pt-3 pb-2 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all appearance-none pr-8"
                          id="makkah"
                          name="makkahNights"
                          value={formData.makkahNights}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Makkah</option>
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Madinah Nights */}
                      <div className="form-input form-floating md relative">
                        <label htmlFor="madinah" className="absolute top-1.5 left-3 text-xs text-gray-500 bg-white pointer-events-none z-10 px-1">Nights In</label>
                        <select
                          className="form-select w-full h-12 px-3 pt-3 pb-2 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all appearance-none pr-8"
                          id="madinah"
                          name="madinahNights"
                          value={formData.madinahNights}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Madinah</option>
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row - 5 fields */}
                    <div className="grid grid-cols-5 gap-3">
                      {/* Lead Passenger Name */}
                      <div className="form-input lead">
                        <input
                          type="text"
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          name="passengerName"
                          placeholder="Lead Passenger Name *"
                          value={formData.passengerName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="form-input phone">
                        <input
                          type="tel"
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          name="phone"
                          placeholder="Phone Number *"
                          minLength="10"
                          maxLength="35"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="form-input email">
                        <input
                          type="email"
                          className="form-control w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          name="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Room Type */}
                      <div className="form-input room relative">
                        <select
                          className="form-select w-full h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all appearance-none pr-8"
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Room-Type</option>
                          {roomTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Captcha */}
                      <div className="form-input answer flex gap-2">
                        <input
                          type="text"
                          className="form-control flex-1 h-12 px-3 bg-white border-0 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                          id="answer"
                          name="captchaAnswer"
                          placeholder="Ans *"
                          value={formData.captchaAnswer}
                          onChange={handleChange}
                          required
                        />
                        <div className="bg-gray-700 text-white px-4 h-12 rounded-lg text-sm font-semibold flex items-center justify-center min-w-[60px]">
                          {captchaQuestion.num1}+{captchaQuestion.num2}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Side - Submit Button */}
                  <div className="btn-submit flex-shrink-0">
                    <button
                      type="submit"
                      className="btn h-full bg-amber-700 text-white px-6 py-8 rounded-xl font-bold text-lg hover:bg-amber-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex flex-col items-center justify-center gap-2 min-h-[120px]"
                    >
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">Submit</span>
                    </button>
                  </div>

                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DecemberUmrah
