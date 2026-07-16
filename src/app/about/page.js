import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

export const metadata = {
  title: "About Us - Nickel Alloy & All Types of Alloy Scrap Supplier",
  description: "Semicon Steel And Alloys is an ISO 9001:2015 certified importer, exporter & foundry supplier of all types of alloy scrap - Inconel, Hastelloy, Monel, cobalt alloys, titanium, tungsten & molybdenum - based in Bhiwandi, Thane, Maharashtra.",
  alternates: { canonical: 'https://www.semiconsteelandalloys.com/about' },
}

const page = () => {
  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[200px] sm:h-[250px] md:h-[300px]">
        <Image
          src="/Images/base/bannerImg.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-center">About Us</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 text-xs sm:text-sm md:text-base">
            <Link href="/" className="flex items-center hover:text-tacao transition-colors">
              <FiHome className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-tacao">About</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/base/BaseImg.jpg"
                alt="Semicon Steel And Alloys"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-catalinaBlue font-poppins">SEMICON STEEL AND ALLOYS</h2>
              <p className="text-2xl text-burntSienna font-semibold">Nickel Alloys Are Our Specialty</p>
              <p className="text-gray-600 leading-relaxed">
              Semicon Steel And Alloys is an ISO 9001:2015 certified, professionally managed importer, exporter and foundry supplier of ferrous and non-ferrous metals, with a special focus on high nickel alloys. We deal in all types of alloy scrap - Inconel 600, 625, 718 & 825, Hastelloy C-22, C-276 & B, Monel, nickel & cobalt alloys - along with turnings, tungsten, titanium & molybdenum metals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are a proactive organization engaged in supplying quality products that meet and exceed customers' specific requirements. Our commitment to understanding client requirements and identifying the right products at the right price has resulted in strong relationships with major customers across India & worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-catalinaBlue mb-4 font-poppins">OUR MISSION</h3>
              <p className="text-gray-600">
                Provide technically sound solutions and create additional value in mutual interest with our customers, resulting in being the preferred nickel alloy supplier within the foundry and manufacturing industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-catalinaBlue mb-4 font-poppins">OUR VISION</h3>
              <p className="text-gray-600">
                To be India's most trusted name in nickel and cobalt alloy scrap - bringing world-class sourcing, accurate grading and reliable delivery to foundries locally and worldwide, while creating lasting value for our customers and our people.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-catalinaBlue mb-4 font-poppins">
              OUR VALUES</h3>
              <p className="text-gray-600">
              Some of the unique values of Semicon Steel And Alloys' complete combination of Ferrous and Non-Ferrous Metal products: The customer is at the center of everything we do. Complete customer satisfaction – in terms of products, services and punctuality – is our base-line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-catalinaBlue mb-12 font-poppins">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-3">Integrity First</h4>
              <p className="text-gray-600">In thought and deed.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-3">Quality Assurance</h4>
              <p className="text-gray-600">Location may vary But Quality can't.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-3">Safety</h4>
              <p className="text-gray-600">In all we do, at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-catalinaBlue mb-12 font-poppins">Products We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-4">Hi-Nickel Scrap</h4>
              <p className="text-gray-600">Inconel 600, 625, 718, 800, 825, Monel 400/K500, Hastelloy C-22/C-276/B, Nickel & Chromium, Nimonic 80A/90 Scrap</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-4">Cobalt Base Alloys Scrap</h4>
              <p className="text-gray-600">SH-4, SH-6, SH-12, SH-21, SH-25, SH-31, SH-605, F-75, FSX-414</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-4">Pure Metal</h4>
              <p className="text-gray-600">Pure Nickel, Molly, Chromium, Tungsten, Mergence, Cobalt, Niobium, Tantalum</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-4">Titanium & Refractory Metals</h4>
              <p className="text-gray-600">Titanium CP Grade 1-4, Ti 6-4, Ti 6-6-2, Tungsten, Tungsten Carbide, Molybdenum, Tantalum Scrap</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-catalinaBlue mb-4">Ferro Alloys</h4>
              <p className="text-gray-600">Ferro Moly, Niobium, Tungsten, Vanadium, Manganese, Chromium, L.C. Chromium, L.C. Manganese</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page