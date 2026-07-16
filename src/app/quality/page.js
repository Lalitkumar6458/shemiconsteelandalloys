import React from 'react'
import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export const metadata = {
  title: "Quality Products - Semicon Steel And Alloys",
  description: "Discover Semicon Steel And Alloys' commitment to quality and efficiency. An ISO 9001:2015 certified company with advanced technology, skilled employees, and rigorous quality control techniques ensuring top-quality metal products.",
  keywords: "quality metal products, high efficiency, Semicon Steel And Alloys, ISO 9001:2015, quality control, advanced technology, customer satisfaction, ASTM standards, BS standards, IS standards, DIN standards",
  openGraph: {
    type: 'website',
    url: 'https://www.semiconsteelandalloys.com/quality',
    title: 'Quality Products - Semicon Steel And Alloys',
    description: "Discover Semicon Steel And Alloys' commitment to quality and efficiency, with advanced technology and rigorous quality control techniques.",
    images: [
      {
        url: '/Images/base/qualityImg/img1.png',
        width: 1200,
        height: 630,
        alt: 'Semicon Steel And Alloys Quality',
      },
    ],
  },
  twitter: {
    handle: '@semiconsteel',
    site: '@semiconsteel',
    cardType: 'summary_large_image',
  },
};

const page = () => {
  const qualityData = [
    {
      id: 1,
      name: 'Quality Control',
      img: '/Images/base/qualityImg/img3.webp',
      desc: 'We ensure material quality and accurate grade identification through meticulous sorting, spectro analysis, advanced test equipment, thorough inspections, and regular calibration and maintenance.',
      icon: <BiCheck className="w-8 h-8 text-white" />
    },
    {
      id: 2,
      name: 'Inspection',
      img: '/Images/base/qualityImg/img4.jpg', 
      desc: 'Our Inspection Department is equipped with a full range of gauges, micrometers, and material testing facilities to ensure finished products meet standards for dimensional accuracy and strength.',
      icon: <BiCheck className="w-8 h-8 text-white" />
    },
    {
      id: 3,
      name: 'Packaging',
      img: '/Images/base/qualityImg/img5.webp',
      desc: 'Our flexible systems allow us to meet diverse requirements, including kitting, custom labeling, and export-worthy packaging.',
      icon: <BiCheck className="w-8 h-8 text-white" />
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[200px] sm:h-[250px] md:h-[300px]">
        <Image
          src="/Images/base/qualityImg/qualityImg.jpeg"
          alt="Quality Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-ocean opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-center">Quality Policy</h1>
          
          <div className="flex items-center space-x-3 text-xs sm:text-sm md:text-base">
            <Link href="/" className="flex items-center hover:text-tacao transition-colors">
              <FiHome className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-tacao">Quality</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-greenWhite py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-catalinaBlue font-poppins">Quality Products With High Efficiency</h2>
              <p className="text-gray-700 leading-relaxed">
                At Semicon Steel And Alloys, an ISO 9001:2015 certified company, we are committed to total customer satisfaction. Every lot of nickel, cobalt and specialty alloy scrap we handle is sorted, identified and graded by experienced professionals using advanced testing methods, delivering foundry-ready material at economical costs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alloy scrap, turnings and pure metals are delivered to customers precisely according to their specifications. Our highly qualified staff ensure rigorous quality checks at each stage - from scrap sorting and grade verification with spectro analysis to final packing and dispatch.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-easternBlue p-2 rounded-full">
                    <BiCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-catalinaBlue">In-Process Inspections</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-easternBlue p-2 rounded-full">
                    <BiCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-catalinaBlue">Custom Development</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/base/qualityImg/qualityImg.png"
                alt="Quality Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-catalinaBlue mb-12 font-poppins">Quality Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-easternBlue p-2 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-catalinaBlue">{item.name}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-gradient-cool py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold font-poppins">Our Commitments</h2>
              <p className="leading-relaxed">
                We are committed to providing consistent quality products to our customers, adhering to their quality standards, specifications, and schedules.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <BiCheck className="w-6 h-6 flex-shrink-0" />
                  <span><strong>Meeting Quality Standards:</strong> Delivering products that exceed expectations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BiCheck className="w-6 h-6 flex-shrink-0" />
                  <span><strong>On-Time Deliveries:</strong> Ensuring timely product delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BiCheck className="w-6 h-6 flex-shrink-0" />
                  <span><strong>Continuous Improvement:</strong> Enhancing quality and productivity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BiCheck className="w-6 h-6 flex-shrink-0" />
                  <span><strong>Safe Environment:</strong> Maintaining workplace safety</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/base/qualityImg/img2.jpg"
                alt="Our Commitments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page