import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUmrahOpen, setIsUmrahOpen] = useState(false)
  const [isHajjOpen, setIsHajjOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-black sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-600 text-white py-2.5">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:4378267786" className="flex items-center gap-2 hover:text-amber-200 transition-colors font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(437) 826-7786</span>
            </a>
            <button className="flex items-center gap-2 hover:text-amber-200 transition-colors font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Me Back</span>
            </button>
            <a href="#" className="flex items-center gap-2 hover:text-amber-200 transition-colors font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <button className="flex items-center gap-2 hover:bg-white/20 transition-all bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold border border-white/30">
            <span>Beat My Quote</span>
          </button>
        </div>
      </div>

      {/* Main Header with Dark Navbar */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-white text-2xl font-bold">
                𝒯𝓇𝒶𝓋𝑒𝓁𝓈 𝒶𝓃𝒹 𝒯𝑜𝓊𝓇𝓈
              </Link>
            </div>
 
            {/* Desktop Navigation - Dark Background */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors relative ${
                  isActive('/') 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
                )}
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsUmrahOpen(true)}
                onMouseLeave={() => setIsUmrahOpen(false)}
              >
                <Link 
                  to="/umrah-packages" 
                  className={`font-medium flex items-center gap-1 transition-colors ${
                    location.pathname.startsWith('/umrah') 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  Umrah Packages
                  <span className="text-yellow-400 text-xs">▼</span>
                </Link>
                {isUmrahOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    <Link to="/umrah-packages-2025" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah Packages 2025</Link>
                    <Link to="/december-umrah" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">December Umrah</Link>
                    <Link to="/umrah-packages-2026" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah Packages 2026</Link>
                    <Link to="/ramadan-umrah" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ramadan Umrah</Link>
                    <Link to="/umrah-from-toronto" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah from Toronto</Link>
                    <Link to="/umrah-from-montreal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah from Montreal</Link>
                    <Link to="/umrah-from-calgary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah From Calgary</Link>
                    <Link to="/umrah-from-vancouver" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah from Vancouver</Link>
                    <Link to="/umrah-from-edmonton" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah from Edmonton</Link>
                    <Link to="/umrah-from-ottawa" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Umrah from Ottawa</Link>
                  </div>
                )}
              </div>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsHajjOpen(true)}
                onMouseLeave={() => setIsHajjOpen(false)}
              >
                <Link 
                  to="/hajj" 
                  className={`font-medium flex items-center gap-1 transition-colors ${
                    location.pathname.startsWith('/hajj') 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  Hajj
                  <span className="text-yellow-400 text-xs">▼</span>
                </Link>
                {isHajjOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    <Link to="/shifting-hajj" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shifting Hajj Packages</Link>
                    <Link to="/non-shifting-hajj" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Non Shifting Hajj Package</Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/customize-umrah" 
                className={`font-medium transition-colors ${
                  isActive('/customize-umrah') 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                Customize Umrah
              </Link>
              
              <Link 
                to="/umrah-visa" 
                className={`font-medium transition-colors ${
                  isActive('/umrah-visa') 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                Umrah Visa
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <Link to="/" className="block py-2 text-white hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/umrah-packages" className="block py-2 text-white hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Umrah Packages</Link>
              <Link to="/hajj" className="block py-2 text-white hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Hajj</Link>
              <Link to="/customize-umrah" className="block py-2 text-white hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Customize Umrah</Link>
              <Link to="/umrah-visa" className="block py-2 text-white hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Umrah Visa</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

