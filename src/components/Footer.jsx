const Footer = () => {
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 text-white py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("${patternUrl}")` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="logo-footer mb-4">
              <div>
                <img 
                  src="/userfiles/files/Kaabah-Tours12345.png" 
                  alt="Kaabah Tours Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Our Terms */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">OUR TERMS</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  Terms and Conditions
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  Payment Security
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm cursor-default">
                  Cookies Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">GET IN TOUCH</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <img 
                  src="/assets/images/list-img.png" 
                  alt="marker" 
                  className="w-4 h-4 flex-shrink-0"
                />
                <a href="tel:(437) 826-7786" className="hover:text-sky-300 transition-colors text-sm">
                  (437) 826-7786
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img 
                  src="/assets/images/list-img.png" 
                  alt="marker" 
                  className="w-4 h-4 flex-shrink-0"
                />
                <a href="mailto:info@kaabahtours.com" className="hover:text-sky-300 transition-colors text-sm">
                  info@kaabahtours.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <img 
                  src="/assets/images/list-img.png" 
                  alt="marker" 
                  className="w-4 h-4 flex-shrink-0 mt-1"
                />
                <span className="text-gray-300 text-sm">
                  10816 Macleod Trail SE Unit 312, 440 Calgary, AB, T2J 5N8, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex gap-4">
              <div className="text-gray-300 font-medium flex items-center gap-2 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.5 20.5" className="w-5 h-5 fill-current">
                  <g transform="translate(-0.975 -47.75)">
                    <g transform="translate(48.975 31.75)">
                      <path d="M20.824,16A4.813,4.813,0,0,0,16,20.824V31.676A4.813,4.813,0,0,0,20.824,36.5H31.676A4.813,4.813,0,0,0,36.5,31.676V20.824A4.813,4.813,0,0,0,31.676,16Zm11.456,3.015a1.206,1.206,0,1,1-1.206,1.206A1.206,1.206,0,0,1,32.279,19.015Zm-6.029,2.11a5.125,5.125,0,1,1-5.125,5.125A5.134,5.134,0,0,1,26.25,21.125Zm0,1.206a3.919,3.919,0,1,0,3.919,3.919A3.91,3.91,0,0,0,26.25,22.331Z" transform="translate(-64)"></path>
                    </g>
                  </g>
                </svg>
                <span className="text-sm">INSTAGRAM</span>
              </div>
              <div className="text-gray-300 font-medium flex items-center gap-2 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18.496" className="w-5 h-5 fill-current">
                  <g transform="translate(-22.077)">
                    <path d="M31.7,0,29.3,0a4.212,4.212,0,0,0-4.436,4.552v2.1H22.454a.377.377,0,0,0-.377.377v3.041a.377.377,0,0,0,.377.377h2.412v7.673a.377.377,0,0,0,.377.377h3.146a.377.377,0,0,0,.377-.377V10.446h2.82a.377.377,0,0,0,.377-.377V7.028a.377.377,0,0,0-.377-.377H28.767V4.872c0-.855.2-1.289,1.318-1.289H31.7a.377.377,0,0,0,.377-.377V.381A.377.377,0,0,0,31.7,0Z"></path>
                  </g>
                </svg>
                <span className="text-sm">FACEBOOK</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap gap-3 items-center">
              <img 
                src="/userfiles/files/Discover-logo.png" 
                alt="Discover" 
                className="h-8 w-auto object-contain"
              />
              <img 
                src="/userfiles/files/Mastercard-logo_svg-1.png" 
                alt="Mastercard" 
                className="h-8 w-auto object-contain"
              />
              <img 
                src="/userfiles/files/Visa_Logo-1.png" 
                alt="Visa" 
                className="h-8 w-auto object-contain"
              />
              <img 
                src="/userfiles/files/American-Express-logo.png" 
                alt="American Express" 
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-300">
          <p className="text-sm">All rights reserved Kaabah Tours © 2025</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

