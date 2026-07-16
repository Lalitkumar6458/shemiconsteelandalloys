import React from 'react'
import Link from 'next/link'
import { FiGlobe, FiTrendingUp, FiTrendingDown, FiCheckCircle, FiArrowRight, FiAnchor, FiPackage } from 'react-icons/fi'

const exportCountries = [
  'United States', 'United Kingdom', 'Germany', 'Italy', 'Spain', 'France', 'Netherlands',
  'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Turkey',
  'China', 'Japan', 'South Korea', 'Taiwan', 'Singapore', 'Malaysia', 'Indonesia',
  'Thailand', 'Vietnam', 'Australia', 'New Zealand', 'South Africa', 'Egypt',
  'Brazil', 'Mexico', 'Canada', 'Russia', 'Bangladesh', 'Sri Lanka', 'Nepal'
]

const ImportExport = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
            IMPORT & EXPORT
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue font-poppins mb-3">
            We Ship Alloy Scrap Worldwide
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-roboto max-w-2xl mx-auto">
            An ISO 9001:2015 certified import-export house - moving nickel, cobalt and specialty
            alloy scrap between global markets and Indian foundries with complete documentation.
          </p>
        </div>

        {/* Export / Import cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Export */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-easternBlue">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-easternBlue transition-colors duration-300">
                <FiTrendingUp className="w-7 h-7 text-easternBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-catalinaBlue">We Export</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-roboto">All types of alloy scrap - 90+ countries</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
              We export every grade we stock - Inconel, Hastelloy, Monel, Nimonic, Alloy 20,
              Stellite cobalt alloys, titanium, tungsten, molybdenum and ferro alloys - in solids,
              turnings, plates, pipes and flush.
            </p>
            <ul className="space-y-2.5">
              {[
                'Containerized sea freight & air cargo dispatch',
                'Complete export documentation & customs clearance',
                'Spectro test reports with every consignment',
                'Flexible lot sizes - from 1 MT to full vessel loads'
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-easternBlue flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Import */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-chathamsBlue">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-chathamsBlue transition-colors duration-300">
                <FiTrendingDown className="w-7 h-7 text-chathamsBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-catalinaBlue">We Import</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-roboto">Global sourcing for Indian foundries</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
              We import superalloy scrap, pure metals and industrial raw materials from trusted
              yards and mills across Europe, the Middle East, USA and the Far East - feeding Indian
              foundries and AOD plants with consistent quality.
            </p>
            <ul className="space-y-2.5">
              {[
                'Established supplier network in 30+ countries',
                'Pre-shipment inspection & grade verification',
                'Direct-to-foundry delivery across India',
                'Competitive pricing on bulk import consignments'
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-chathamsBlue flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Countries we serve */}
        <div className="bg-gradient-ocean rounded-2xl p-7 sm:p-10 text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FiGlobe className="w-6 h-6 text-tacao" />
            <h3 className="text-lg sm:text-2xl font-bold font-poppins text-center">Countries We Serve</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6">
            {exportCountries.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-roboto hover:bg-easternBlue hover:border-easternBlue transition-colors duration-300 cursor-default"
              >
                {country}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full bg-gradient-sunset text-xs sm:text-sm font-semibold font-poppins">
              + 60 more countries
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2"><FiAnchor className="w-4 h-4 text-tacao" /> Nhava Sheva (JNPT) & Mundra Ports</span>
            <span className="hidden sm:block h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2"><FiPackage className="w-4 h-4 text-tacao" /> Sea Freight • Air Cargo • Road Transport</span>
          </div>
          <div className="text-center mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-8 py-3.5 rounded-lg font-poppins font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Enquire for Import / Export
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImportExport
