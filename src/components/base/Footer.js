"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { BsTelephone, BsClock } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoLocationSharp } from 'react-icons/io5'
import { FiChevronRight } from 'react-icons/fi'

const products = [
  { name: 'Inconel 600 / 601 Scrap', link: '/product/metal-scraps/inco_600_scrap' },
  { name: 'Inconel 625 / 825 Scrap', link: '/product/metal-scraps/inco_625_scrap' },
  { name: 'Hastelloy C22 / C276 / B', link: '/product/metal-scraps/hastelloy_c276_scrap' },
  { name: 'Monel 400 / K500 Scrap', link: '/product/metal-scraps/monel_400_scrap' },
  { name: 'Alloy 20 Scrap', link: '/product/metal-scraps/alloy_20_scrap' },
  { name: 'Cobalt Base Alloys', link: '/product/high-nickel-alloys-scrap' },
  { name: 'Titanium, Tungsten & Moly', link: '/product/high-nickel-alloys-scrap' },
  { name: 'Ferro Alloys', link: '/product/ferro-alloy' },
]

const quickLinks = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Products', link: '/product' },
  { name: 'High Nickel Alloys', link: '/product/high-nickel-alloys-scrap' },
  { name: 'Quality Policy', link: '/quality' },
  { name: 'Contact Us', link: '/contact' },
]

const Footer = () => {
  return (
    <footer className="bg-gradient-ocean text-white">
      {/* Top accent */}
      <div className="h-1 bg-gradient-sunset" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-[5%] py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand / About */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-white rounded-xl p-3 shadow-lg">
              <div className="relative w-[220px] h-[44px]">
                <Image
                  src="/Images/base/ssaLogo.png"
                  alt="Semicon Steel And Alloys"
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              ISO 9001:2015 certified importer, exporter & foundry supplier of all types of
              alloy scrap - specializing in nickel & cobalt alloys, superalloy scraps, turnings
              and industrial raw materials. Serving foundries across India & worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/+917821031398" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="bg-white/10 hover:bg-green-500 p-3 rounded-full transition-colors duration-300">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/10 hover:bg-easternBlue p-3 rounded-full transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-easternBlue p-3 rounded-full transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-easternBlue p-3 rounded-full transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-easternBlue p-3 rounded-full transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-poppins relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:rounded-full after:bg-gradient-sunset">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="group flex items-center text-sm sm:text-base text-gray-200 hover:text-tacao transition-colors duration-300">
                    <FiChevronRight className="w-4 h-4 mr-2 text-tacao group-hover:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-poppins relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:rounded-full after:bg-gradient-sunset">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="group flex items-center text-sm sm:text-base text-gray-200 hover:text-tacao transition-colors duration-300">
                    <FiChevronRight className="w-4 h-4 mr-2 text-tacao group-hover:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-poppins relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:rounded-full after:bg-gradient-sunset">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-sm sm:text-base">
              <p className="flex items-center gap-3">
                <BsTelephone className="text-tacao flex-shrink-0" />
                <a href="tel:+917821031398" className="hover:text-tacao transition-colors">+91 78210 31398 <span className="text-gray-300 text-sm">(Akash Kumar - Purchase)</span></a>
              </p>
              <p className="flex items-center gap-3">
                <BsTelephone className="text-tacao flex-shrink-0" />
                <a href="tel:+919890613050" className="hover:text-tacao transition-colors">+91 98906 13050 <span className="text-gray-300 text-sm">(Vipul Bafna - Sales)</span></a>
              </p>
              <p className="flex items-center gap-3">
                <HiMail className="text-tacao flex-shrink-0 text-lg" />
                <a href="mailto:semiconsteelandalloys@gmail.com" className="hover:text-tacao transition-colors break-all">semiconsteelandalloys@gmail.com</a>
              </p>
              <p className="flex items-start gap-3">
                <IoLocationSharp className="text-tacao flex-shrink-0 text-lg mt-1" />
                <span className="text-gray-200">2nd Floor, Flat No. 203, Shree Sachhai Mata Park, H.No. 1639/7, Near Oswal Park, Rahnal, Bhiwandi, Dist. Thane, Maharashtra - 421302, India</span>
              </p>
              <p className="flex items-center gap-3">
                <BsClock className="text-tacao flex-shrink-0" />
                <span className="text-gray-200">Mon - Sat: 9:30 AM - 7:00 PM</span>
              </p>
              <p className="inline-block bg-white/10 rounded-lg px-4 py-2 font-semibold tracking-wide">
                GSTIN: 27LRDPK3910Q1Z6
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="container mx-auto px-4 sm:px-[5%] py-5 sm:py-6">
          <p className="text-[11px] sm:text-xs text-center text-gray-300 mb-3">
            Importers, Exporters & Foundry Suppliers of Ferrous & Non-Ferrous Metals, Nickel & Cobalt Alloys, All Types of Alloy Scrap, Turnings & Industrial Raw Materials. Monel&reg; - Inconel&reg; - Incoloy&reg; - Hastelloy&reg; - Nimonic&reg; - Stellite&reg; are the registered trademarks of their respective owners.
          </p>
          <p className="text-xs sm:text-sm text-center text-gray-200">
            &copy; 2026 Semicon Steel And Alloys. All Rights Reserved. Design And Developed By <span className="text-tacao font-semibold">Lalit Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
