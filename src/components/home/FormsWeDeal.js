'use client'
import React from 'react'

// Simple inline SVG icons - stroke inherits currentColor
const icons = {
  solids: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M24 6 42 15v18L24 42 6 33V15L24 6Z" />
      <path d="M6 15l18 9 18-9M24 24v18" />
    </svg>
  ),
  tubes: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 sm:w-12 sm:h-12">
      <ellipse cx="14" cy="24" rx="6" ry="14" />
      <path d="M14 10h22c3.5 0 6 6.3 6 14s-2.5 14-6 14H14" />
      <ellipse cx="14" cy="24" rx="2.5" ry="7" />
    </svg>
  ),
  pipes: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M4 14h18a8 8 0 0 1 8 8v12" />
      <path d="M4 24h18M30 44v-6M22 44h16" />
      <path d="M4 14v10M30 34h8" />
    </svg>
  ),
  plates: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M10 30 30 20l12 6-20 10-12-6Z" />
      <path d="M8 24 28 14l12 6M6 18 26 8l12 6" />
    </svg>
  ),
  turnings: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M24 6c9 0 16 4 16 9s-7 9-16 9-16-4-16-9" />
      <path d="M24 15c6 0 11 2.7 11 6s-5 6-11 6-11-2.7-11-6" />
      <path d="M24 24c3.5 0 6 1.6 6 3.5S27.5 31 24 31s-6-1.6-6-3.5" />
      <path d="M24 33v9M20 38l4 4 4-4" />
    </svg>
  ),
  runners: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M8 8v14a6 6 0 0 0 6 6h20a6 6 0 0 0 6 6v6" />
      <path d="M8 8h8M36 40h8M24 28v-8M20 20h8" />
    </svg>
  ),
  billets: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M6 20h26l10 8-26 0-10-8Z" />
      <path d="M6 20v10l10 8V28M42 28v10H16" />
    </svg>
  ),
  sheets: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M6 14c6-6 12 6 18 0s12 6 18 0" />
      <path d="M6 24c6-6 12 6 18 0s12 6 18 0" />
      <path d="M6 34c6-6 12 6 18 0s12 6 18 0" />
    </svg>
  ),
}

const FormsWeDeal = () => {
  const forms = [
    { name: 'Solids', icon: icons.solids },
    { name: 'Tubes', icon: icons.tubes },
    { name: 'Pipes', icon: icons.pipes },
    { name: 'Plates', icon: icons.plates },
    { name: 'Turnings', icon: icons.turnings },
    { name: 'Runner-Risers', icon: icons.runners },
    { name: 'Billets', icon: icons.billets },
    { name: 'Sheets', icon: icons.sheets },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
            SOLIDS TO SHEETS
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue font-poppins mb-3 sm:mb-4">
            Forms We Deal In
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-roboto max-w-2xl mx-auto">
            We buy and sell nickel, cobalt and specialty alloy scrap in every industrial form -
            graded, sorted and ready for the furnace.
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {forms.map((form, index) => (
            <div
              key={form.name}
              className="group flex flex-col items-center justify-center py-8 sm:py-10 px-4 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-easternBlue/30 hover:-translate-y-1.5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-easternBlue mb-4 group-hover:scale-110 group-hover:text-burntUmber transition-all duration-300">
                {form.icon}
              </div>
              <h4 className="text-base sm:text-lg font-semibold font-poppins text-catalinaBlue group-hover:text-easternBlue transition-colors duration-300">
                {form.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FormsWeDeal
