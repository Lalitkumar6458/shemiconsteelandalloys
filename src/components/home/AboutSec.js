'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const AboutSec = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Welcome to <span className="bg-gradient-sunset bg-clip-text text-transparent">Semicon Steel And Alloys</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-warm mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e80b14] relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-gradient-warm after:rounded-full">
                ABOUT US
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-slate-700 to-slate-500 text-transparent bg-clip-text">
                Nickel & Cobalt Alloys Specialists - ISO 9001:2015 Certified
              </h3>
            </div>
            
            <div className="space-y-5 sm:space-y-7">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Semicon Steel And Alloys is an ISO 9001:2015 certified importer, exporter and foundry supplier of ferrous & non-ferrous
                metals, with a special focus on high nickel alloys. We deal in all types of alloy scrap - Inconel 600, 625, 718 & 825,
                Hastelloy C-22, C-276 & B, Monel, nickel & cobalt alloys - in solids, turnings and industrial raw materials.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We transcend traditional trading relationships by fostering enduring partnerships built on trust and understanding.
                Our approach centers on comprehending each client's unique needs and crafting customized solutions. Based in Bhiwandi,
                Thane (Maharashtra), we efficiently serve foundries and industries across India and worldwide with unwavering reliability.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our dedicated team ensures unparalleled customer satisfaction through competitive pricing, rigorous quality assurance,
                and punctual delivery. Alongside nickel alloys, we also supply tungsten, titanium & molybdenum metals, serving the
                aerospace, chemical processing, marine and foundry industries.
              </p>
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'ISO 9001:2015 Certified',
                '50+ Alloy Grades In Stock',
                'Spectro-Tested Material',
                'PAN India & Global Delivery'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 bg-red-50/60 rounded-lg px-3.5 py-2.5">
                  <FiCheckCircle className="w-5 h-5 text-easternBlue flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800 font-roboto">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-7 py-3 rounded-lg font-poppins font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Know More About Us
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Image Column */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] group mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.03] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-700/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image
                src="/Images/base/BaseImg.jpg"
                alt="Semicon Steel And Alloys Facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-red-700/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 sm:w-40 h-32 sm:h-40 bg-red-700/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSec