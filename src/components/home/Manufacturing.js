'use client'
import React from 'react'
import Image from 'next/image'

const Manufacturing = () => {
    const data=[{
        id:1,
        heading:"ALLOY ROUND BARS",
        img:"/Images/manufectruing/roudbar.jpg",
        text:""
    },
    {
        id:2,
        heading:"ALLOY BILLETS",
        img:"/Images/manufectruing/IMG-20230721-WA0005.jpg",
        text:""
    },
    {
        id:3,
        heading:"ALLOY FLAT BARS",
        img:"/Images/manufectruing/Fimg1.jpg",
        text:""
    },
    {
        id:4,
        heading:"ALLOY INGOTS",
        img:"/Images/manufectruing/ingots.jpeg",
        text:""
    },
    {
        id:5,
        heading:"ALLOY SQUARE BARS",
        img:"/Images/manufectruing/img10.png",
        text:""
    },
    {
        id:6,
        heading:"ALLOY FORGING BARS",
        img:"/Images/manufectruing/IMG-20230721-WA0006.jpg",
        text:""
    }
]

  return (
    <div className='py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-[5%] bg-gradient-to-b from-chathamsBlue/5 to-transparent'>
      <div className="text-center mb-10 sm:mb-14">
        <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">FROM OUR YARD</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue font-poppins">Alloy Products We Supply</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto mt-3 sm:mt-4 rounded-full mb-4"></div>
        <p className="text-sm sm:text-base text-gray-600 font-roboto max-w-2xl mx-auto">
          Round bars, billets, flats, ingots and forged bars in nickel, cobalt and specialty alloys - supplied to your specification.
        </p>
      </div>

      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto'>
          {data.map((item) => (
            <div 
              key={item.id} 
              className='group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in'
            >
              <div className='relative aspect-[4/3] w-full overflow-hidden'>
                <Image
                  className='object-cover transform group-hover:scale-110 transition-transform duration-700'
                  src={item.img} 
                  alt={item.heading}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className='absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              </div>
              
              <div className='p-4 sm:p-5 bg-gradient-ocean'>
                <h2 className='text-white font-poppins font-semibold text-sm sm:text-base text-center tracking-wide'>
                  {item.heading}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Manufacturing