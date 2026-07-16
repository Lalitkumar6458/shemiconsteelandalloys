'use client'

import React from 'react'
import { FiShield, FiStar, FiTruck, FiUsers } from 'react-icons/fi'

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality & Innovation",
      description: "Every lot of alloy scrap is inspected, graded and quality checked before dispatch - from sourcing to delivery.",
      icon: <FiShield className="w-7 h-7" />
    },
    {
      title: "Nickel Alloy Expertise",
      description: "Deep specialization in Inconel, Hastelloy, Monel, Nimonic and cobalt base alloys with accurate grade identification.",
      icon: <FiStar className="w-7 h-7" />
    },
    {
      title: "Timely Deliveries",
      description: "Reliable logistics and on-time dispatch to foundries and industries across India and worldwide.",
      icon: <FiTruck className="w-7 h-7" />
    },
    {
      title: "Customer Focused Approach",
      description: "Flexible lot sizes, competitive rates and material customized to each client's specification.",
      icon: <FiUsers className="w-7 h-7" />
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-greenWhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
            WHY CHOOSE US
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-catalinaBlue mb-3 sm:mb-4">
            We Focus On Services That Matter
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-eternity font-roboto max-w-xl sm:max-w-2xl mx-auto px-4">
            Our hardworking team is ready to serve you from our in-stock inventory or custom material solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-easternBlue transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 text-easternBlue mb-5 group-hover:bg-easternBlue group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-catalinaBlue mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 font-roboto leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
