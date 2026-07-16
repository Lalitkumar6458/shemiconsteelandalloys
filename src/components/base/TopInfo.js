'use client'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const TopInfo = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or near top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`bg-gradient-ocean hidden lg:block text-white py-2 sm:py-3 shadow-lg 
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        fixed top-0 left-0 right-0 z-50`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
              Nickel & Cobalt Alloys Specialist
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center group">
              <FaPhone className="mr-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hover:text-yellow-400 transition-colors">+91 78210 31398</span>
            </div>
            <div className="flex items-center group">
              <FaEnvelope className="mr-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hover:text-yellow-400 transition-colors">semiconsteelandalloys@gmail.com</span>
            </div>
            <div className="flex gap-4 sm:gap-5">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInfo