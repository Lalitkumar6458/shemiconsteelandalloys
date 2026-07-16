'use client'
import React from 'react'
import { FiAward, FiGlobe, FiLayers, FiCheckCircle } from 'react-icons/fi'

const StatsBar = () => {
  const stats = [
    {
      icon: <FiAward className="w-8 h-8 sm:w-10 sm:h-10" />,
      value: 'ISO 9001:2015',
      label: 'Certified Company'
    },
    {
      icon: <FiLayers className="w-8 h-8 sm:w-10 sm:h-10" />,
      value: '50+ Grades',
      label: 'Nickel, Cobalt & Specialty Alloys'
    },
    {
      icon: <FiGlobe className="w-8 h-8 sm:w-10 sm:h-10" />,
      value: 'Import & Export',
      label: 'Serving India & Worldwide'
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
      value: '100% Tested',
      label: 'Graded & Quality Checked Scrap'
    }
  ]

  return (
    <section className="bg-gradient-ocean py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white group"
            >
              <div className="mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-white/10 text-red-300 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-lg sm:text-2xl font-bold font-poppins mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
