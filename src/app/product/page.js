import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiHome, FiBox, FiLayers, FiDatabase } from 'react-icons/fi'

export const metadata = {
  title: "Products - All Types of Alloy Scrap, Nickel Alloys & Ferro Alloys",
  description: "Explore our range: Inconel 600/601/625/825 scrap, Hastelloy C276/C22 scrap, Monel 400 scrap, Alloy 20, cobalt base alloys, titanium, tungsten, molybdenum and ferro alloys. Best alloy scrap rates in India.",
  alternates: { canonical: 'https://www.semiconsteelandalloys.com/product' },
}

const productData = [
  {
    title: "Alloy Scrap",
    description: "All types of alloy scrap - Inconel, Hastelloy, Monel and Alloy 20 in solids, turnings and flush - sourced, graded and supplied to foundries worldwide.",
    link: "/product/metal-scraps",
    Icon: FiBox
  },
  {
    title: "Ferro Alloy",
    description: "Ferro Moly, Ferro Tungsten, Ferro Vanadium, Ferro Niobium, LC Fe Chrome, Tungsten Carbide, Cobalt Metals and more for steel and foundry industries.",
    link: "/product/ferro-alloy",
    Icon: FiLayers
  },
  {
    title: "High Nickel Alloys Scrap",
    description: "Our specialty - Inconel, Hastelloy, Monel, Nimonic, cobalt base alloys, pure metals and titanium scrap essential for superalloy industries.",
    link: "/product/high-nickel-alloys-scrap",
    Icon: FiDatabase
  }
];

const page = () => {
  return (
    <div>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-center">Our Products</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 text-xs sm:text-sm md:text-base">
            <Link href="/" className="flex items-center hover:text-tacao transition-colors">
              <FiHome className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-tacao">Products</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto leading-tight">
            Specialists in High Nickel Alloys & All Types of Alloy Scrap | Ferrous and Non-Ferrous Metals Importer, Exporter and Foundry Supplier
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {productData.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-tacao/20 rounded-full flex items-center justify-center mb-6">
                  <product.Icon className="w-8 h-8 text-tacao" />
                </div>
                <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600 text-center mb-6">
                  {product.description}
                </p>
                <Link 
                  href={product.link}
                  className="inline-flex items-center text-tacao hover:text-tacao/80 transition-colors"
                >
                  Read More 
                  <FiBox className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page