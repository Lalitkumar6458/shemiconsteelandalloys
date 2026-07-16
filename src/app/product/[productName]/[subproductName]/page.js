import React from 'react'
import { DataAlloy20SS, DataInco825SS, DataInconel625SS, DataMonel400SS, DataInconel600SS, DataInconel601SS, DataHastelloyC276SS, DataHastelloyC22SS } from '../../../../../public/data/productDetails'
import Image from 'next/image'
import Link from 'next/link'
import { FiHome, FiBox, FiCircle, FiHexagon, FiShield, FiTriangle, FiGrid } from 'react-icons/fi'

const slugTitles = {
    "inco_600_scrap": "Inconel 600 Scrap Supplier & Exporter India",
    "inco_601_scrap": "Inconel 601 Scrap Supplier & Exporter India",
    "inco_625_scrap": "Inconel 625 Scrap Supplier & Exporter India",
    "inco_825_scrap": "Inconel 825 Scrap Supplier & Exporter India",
    "monel_400_scrap": "Monel 400 Scrap Supplier & Exporter India",
    "hastelloy_c276_scrap": "Hastelloy C276 Scrap Supplier & Exporter India",
    "hastelloy_c22_scrap": "Hastelloy C22 Scrap Supplier & Exporter India",
    "alloy_20_scrap": "Alloy 20 (Carpenter 20) Scrap Supplier & Exporter India",
}

export async function generateMetadata({ params }) {
    const title = slugTitles[params.subproductName] || "Alloy Scrap"
    return {
        title,
        description: `${title} - Semicon Steel And Alloys, ISO 9001:2015 certified nickel alloy scrap importer, exporter & foundry supplier. Best rates, quality graded material, worldwide delivery. Call +91 78210 31398.`,
        alternates: { canonical: `https://www.semiconsteelandalloys.com/product/metal-scraps/${params.subproductName}` },
    }
}

const Page = ({params}) => {
    const {subproductName} = params
    let data = {}
    
    const dataMap = {
        "inco_600_scrap": DataInconel600SS,
        "inco_601_scrap": DataInconel601SS,
        "inco_625_scrap": DataInconel625SS,
        "inco_825_scrap": DataInco825SS,
        "monel_400_scrap": DataMonel400SS,
        "hastelloy_c276_scrap": DataHastelloyC276SS,
        "hastelloy_c22_scrap": DataHastelloyC22SS,
        "alloy_20_scrap": DataAlloy20SS,
    }

    data = dataMap[subproductName] || {}

    const getIconForProduct = (key) => {
        const iconMap = {
            'inco': <FiTriangle className="w-5 h-5" />,
            'monel': <FiHexagon className="w-5 h-5" />,
            'hastelloy': <FiShield className="w-5 h-5" />,
            'alloy': <FiCircle className="w-5 h-5" />,
            'default': <FiGrid className="w-5 h-5" />
        }
        
        const matchingPrefix = Object.keys(iconMap).find(prefix => 
            key.toLowerCase().startsWith(prefix)
        )
        
        return iconMap[matchingPrefix] || iconMap.default
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner Section */}
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6 text-center">
                        {data.heading}
                    </h1>
                    <div className="flex items-center space-x-3 text-sm sm:text-base md:text-lg">
                        <Link href="/" className="flex items-center hover:text-tacao transition-colors duration-300">
                            <FiHome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/product" className="hover:text-tacao transition-colors duration-300">
                            Products
                        </Link>
                        <span>/</span>
                        <span className="text-tacao">{data.heading}</span>
                    </div>
                </div>
            </section>

            <div className="max-w-full mx-auto px-4 sm:px-[5%] py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Enhanced Left Side Product Menu */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-xl p-6 sticky top-4">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <FiGrid className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    Product Categories
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {Object.entries(dataMap).map(([key, value]) => {
                                    const isActive = subproductName === key
                                    return (
                                        <Link 
                                            key={key}
                                            href={`/product/scrap/${key}`}
                                            className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md'
                                                    : 'hover:bg-red-50 text-gray-600 hover:text-red-600'
                                            }`}
                                        >
                                            <div className={`flex-shrink-0 ${
                                                isActive
                                                    ? 'text-white'
                                                    : 'text-gray-400 group-hover:text-red-600'
                                            }`}>
                                                {getIconForProduct(key)}
                                            </div>
                                            <span className={`text-sm font-medium ${
                                                isActive
                                                    ? 'text-white'
                                                    : 'text-gray-600 group-hover:text-red-600'
                                            }`}>
                                                {value.heading || key.split('_').map(word => 
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                ).join(' ')}
                                            </span>
                                            {isActive && (
                                                <div className="ml-auto">
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                </div>
                                            )}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4">
                        {/* Product Images Grid */}
                 

                        {/* Main Product Description */}
                        <div className="prose max-w-none mb-12">
                            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-800 mb-6">
                                {data.title}
                            </h2>
                            {data.desc?.map((description, index) => (
                                <p key={index} className="text-gray-600 font-roboto text-base sm:text-lg mb-4 leading-relaxed">
                                    {description}
                                </p>
                            ))}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                          
                            <div className="space-y-6">
                                {data.images?.slice(1, 3).map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`${data.heading} ${index + 2}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                ))}
                            </div>
                            <div className="col-span-2">
                                <Image
                                    src={data.images?.[0] || '/fallback-image.jpg'}
                                    alt={data.heading}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-800 mb-6">
                            {data.title2}
                        </h2>

                        <div className="mb-12">
                            {data.desc2?.map((description, index) => (
                                <p key={index} className="text-gray-600 font-roboto text-base sm:text-lg mb-4 leading-relaxed">
                                    {description}
                                </p>
                            ))}
                        </div>

                        {/* Specification Chart */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">{data.heading} Specification Chart</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <tbody>
                                        {data.specifications?.map((spec, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">{spec.property}</td>
                                                <td className="border border-gray-300 px-4 py-2">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Other Types Section */}
                        {data.otherTypes && (   
                        <div className="mb-12">
                            <h3 className="text-xl font-bold mb-6">Other Types of {data.heading}</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 font-semibold text-left">Type</th>
                                            <th className="border border-gray-300 px-4 py-2 font-semibold text-left">Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.otherTypes?.map((type, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">{type.grade}</td>
                                                <td className="border border-gray-300 px-4 py-2">{type.commonUses}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        )}

                        {/* Chemical Composition */}
                        {data.chemicalComposition && (
                            data.chemicalComposition?.map((chemical, index) => (
                                <div key={index} className="mb-12">
                                    <h3 className="text-xl font-bold mb-6">{chemical.heading}</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300 px-4 py-2 font-semibold text-left">Element</th>
                                                    <th className="border border-gray-300 px-4 py-2 font-semibold text-left">Composition</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {chemical.desc.map((desc, index) => (
                                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                        <td className="border border-gray-300 px-4 py-2 font-semibold">{desc.element}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{desc.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Applications Section */}
                        {data.applications && ( 
                        <div className="mb-12">
                            <h3 className="text-xl font-bold mb-6">Applications of {data.heading}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {data.applications?.map((app, index) => (
                                    <div key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5"></div>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="text-gray-800 font-medium leading-relaxed">{app}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}

                        {/* Export Destinations */}
                        


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page