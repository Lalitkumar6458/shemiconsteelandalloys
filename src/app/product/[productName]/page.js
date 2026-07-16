import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiHome, FiBox, FiExternalLink } from 'react-icons/fi';
import { ferroAlloy, highNickelAlloysScrap, metalScraps, Nickel_Alloy_2nd_data, Nickel_Alloy_data } from '../../../../public/data/product';

export async function generateMetadata({ params }) {
    const meta = {
        "metal-scraps": {
            title: "Alloy Scrap - All Types | Inconel, Hastelloy, Monel & Alloy 20 Scrap Supplier",
            description: "Buy and sell all types of alloy scrap: Inconel 600/601/625/825, Hastelloy C276/C22, Monel 400 and Alloy 20 in solids, turnings and flush. ISO certified supplier in Bhiwandi, Thane."
        },
        "ferro-alloy": {
            title: "Ferro Alloys - Ferro Moly, Tungsten, Vanadium, Niobium & Cobalt Metals",
            description: "Importer, exporter and supplier of ferro alloys: LC Fe Chrome, Pure Moly, Ferro Tungsten, Ferro Vanadium, Ferro Niobium, Tungsten Carbide, Cobalt Metals and Misch Metal."
        },
        "high-nickel-alloys-scrap": {
            title: "High Nickel Alloys Scrap - Inconel, Hastelloy, Monel, Nimonic & Cobalt Alloys",
            description: "Our specialty: high nickel alloy scrap including Inconel, Hastelloy, Monel, Nimonic, Stellite cobalt alloys, pure metals and titanium scrap for superalloy industries. Composition charts included."
        }
    }
    const m = meta[params.productName] || meta["metal-scraps"]
    return {
        title: m.title,
        description: m.description,
        alternates: { canonical: `https://www.semiconsteelandalloys.com/product/${params.productName}` },
    }
}

const Page = ({params}) => {
    console.log(params,"params")
    console.log(params.productName,"params.productName")
    let data={}
    let title=""
    let heading=""


    

    if( params.productName === "metal-scraps"){
        data = metalScraps
        heading="Alloy Scrap"
        title="High-Quality Alloy Scrap - All Types | Exporter and Importer of Nickel Alloy Scrap | Inconel 600 Scrap, Inconel 601 Scrap, Inconel 625 Scrap, Inconel 825 Scrap, Monel 400 Scrap, Hastelloy C276 Scrap, Hastelloy C22 Scrap, Alloy 20 Scrap | Nickel & Cobalt Alloy Scrap Supplier in India."
    }else if(params.productName === "ferro-alloy"){
        data = ferroAlloy
        heading="Ferro Alloy"
        title="Ferro Alloys Importer, Supplier and Exporter | LC FE Chrome | Pure Moly | Misch Metal | Selenium Metallicum | Ferro Niobium | Ferro Vanadium | Ferro Tungsten | Tungsten Carbide | Pure Tungsten | Nitrated Ferro Chrome | Cobalt Metals | Ferrous & Non-Ferrous Metal Scrap | Alloy Metals Supplier in India"
    }else if(params.productName === "high-nickel-alloys-scrap"){
        data = highNickelAlloysScrap
        heading="High Nickel Alloys Scrap"
        title="High Nickel Alloys Scrap | Exporter and Importer of Nickel Alloys Scrap | Nickel Alloy Scrap Supplier in India"
        
        return (
            <div className="min-h-screen bg-gray-50">
                <section className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                        src="/Images/base/bannerImg.jpg"
                        alt="Products Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6 text-center">{heading}</h1>
                        
                        <div className="flex items-center space-x-3 text-sm sm:text-base md:text-lg">
                            <Link href="/" className="flex items-center hover:text-tacao transition-colors duration-300">
                                <FiHome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Home
                            </Link>
                            <span>/</span>
                            <Link href="/product" className="flex items-center hover:text-tacao transition-colors duration-300">
                                product
                            </Link>
                            <span>/</span>
                            <span className="text-tacao">{heading}</span>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto py-12 px-4 md:px-8">
                    <h1 className="text-[12px] md:text-[12px] font-bold text-center mb-12 text-gray-800">
                        {title}
                    </h1>

                    <div className="prose max-w-none mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Explore Top-Quality High Nickel Alloys Scrap
                        </h2>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <p className="text-gray-700 mb-6">
                                At <span className="font-semibold">Semicon Steel And Alloys</span>, we offer <span className="font-semibold">nickel alloys</span> that surpass all quality standards and customer expectations. Our extensive industry experience has made us a leading name in supplying <a href="#" className="text-tacao hover:text-tacao/80">Inconel 600 alloy</a>, Hastelloy, and other nickel alloys.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Our High Nickel Alloys feature extensive properties
                            </h3>
                            
                            <p className="text-gray-700 mb-6">
                                Nickel alloys are an outcome of combining nickel and other elements as per requirements. The combination of materials enhances the properties of these alloys like strength, corrosion resistance, and more.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Innovative product range</h4>
                                    <p className="text-gray-600">
                                        Our technologically advanced products are suitable for the latest industrial applications and international compatibility.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Global accessibility</h4>
                                    <p className="text-gray-600">
                                        We provide local and international delivery of versatile products per customer requirements in different batch sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map(product => (
                            <div key={product.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-4">
                                        <FiBox className="w-6 h-6 text-tacao mr-3 mt-1 flex-shrink-0" />
                                        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                                    </div>
                                    <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                                    <div className="mt-auto">
                                        <Link 
                                            href={product.link}
                                            className="inline-flex items-center text-tacao hover:text-tacao/80 font-semibold transition-colors duration-300"
                                        >
                                            Learn More
                                            <FiExternalLink className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nickel Alloy Compositions</h3>
                
                <div className="overflow-x-auto">
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Primary Nickel Alloys</h4>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Type</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ni</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cr</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Co</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mo</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fe</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Al</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ti</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Other</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Nickel_Alloy_data.map((alloy, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{alloy["Material type"]}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Ni}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Cr}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Co}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Mo}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.W}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Fe}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Al}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Ti}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Other}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Secondary Nickel Alloys</h4>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Type</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ni</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cr</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Co</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mo</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ta</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ti</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Other</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Nickel_Alloy_2nd_data.map((alloy, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{alloy["Material type"]}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Ni}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Cr}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Co}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Mo}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.W}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Ta}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Ti}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{alloy.Other}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                </div>
          
            </div>
        )
    }
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px]">
        <Image
          src="/Images/base/bannerImg.jpg"
          alt="Products Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6 text-center">{heading}</h1>
          
          <div className="flex items-center space-x-3 text-sm sm:text-base md:text-lg">
            <Link href="/" className="flex items-center hover:text-tacao transition-colors duration-300">
              <FiHome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Home
            </Link>
            <span>/</span>
            <Link href="/product" className="flex items-center hover:text-tacao transition-colors duration-300">
              product
            </Link>
            <span>/</span>
            <span className="text-tacao">{heading}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto  py-12 ">
        <h1 className="text-[12px] md:text-[12px] font-bold text-center mb-12 text-gray-800 px-[5%]">
          {title}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%]">
          {data.map(product => (
            <div key={product.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <FiBox className="w-6 h-6 text-tacao mr-3 mt-1 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                <div className="mt-auto">
                  <Link 
                    href={product.link}
                    className="inline-flex items-center text-tacao hover:text-tacao/80 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <FiExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page