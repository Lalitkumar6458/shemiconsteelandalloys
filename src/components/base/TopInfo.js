'use client'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiAward, FiClock } from 'react-icons/fi'

const TopInfo = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`bg-gradient-ocean hidden lg:block text-white shadow-lg
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        fixed top-0 left-0 right-0 z-50`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[52px]">

          {/* Left: contact details */}
          <div className="flex items-center gap-6">
            <a href="tel:+917821031398" className="group flex items-center gap-2 text-sm hover:text-tacao transition-colors">
              <span className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                <FaPhone className="w-3 h-3 text-tacao" />
              </span>
              +91 78210 31398
            </a>
            <a href="mailto:semiconsteelandalloys@gmail.com" className="group flex items-center gap-2 text-sm hover:text-tacao transition-colors">
              <span className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                <FaEnvelope className="w-3 h-3 text-tacao" />
              </span>
              semiconsteelandalloys@gmail.com
            </a>
            <span className="hidden xl:flex items-center gap-2 text-sm text-gray-300">
              <FiClock className="w-4 h-4 text-tacao" />
              Mon - Sat: 9:30 AM - 7:00 PM
            </span>
          </div>

          {/* Right: badge + social */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1 text-xs font-semibold font-poppins tracking-wide">
              <FiAward className="w-3.5 h-3.5 text-tacao" />
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <a href="https://wa.me/+917821031398" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">
                <FaWhatsapp size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-tacao transition-all duration-300 hover:scale-110">
                <FaFacebook size={15} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-tacao transition-all duration-300 hover:scale-110">
                <FaTwitter size={15} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-tacao transition-all duration-300 hover:scale-110">
                <FaInstagram size={15} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-tacao transition-all duration-300 hover:scale-110">
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInfo
