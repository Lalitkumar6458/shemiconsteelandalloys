import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import { FiBox, FiLayers } from 'react-icons/fi';
import ProductSlider from './ProductSlider';

const metalScrapProducts = [
  {
    id: 1,
    title: "Virgin Alloys",
    image: "/images/products/virgin-alloys.jpg",
    tooltip: "Virgin Alloys"
  },
  {
    id: 2,
    title: "Ferro Titanium Alloys", 
    image: "/images/products/ferro-titanium.jpg",
    tooltip: "Ferro Titanium Alloys"
  },
  {
    id: 3,
    title: "Ferro Chrome Alloys",
    image: "/images/products/ferro-chrome.jpg", 
    tooltip: "Ferro Chrome Alloys"
  },
  {
    id: 4,
    title: "Ferro Manganese Alloys",
    image: "/images/products/ferro-manganese.jpg",
    tooltip: "Ferro Manganese Alloys"
  },
  {
    id: 5,
    title: "Ferro Silicon Alloys",
    image: "/images/products/ferro-silicon.jpg",
    tooltip: "Ferro Silicon Alloys"
  },
  {
    id: 6,
    title: "Nickel Alloys Scrap",
    image: "/images/products/ferro-silicon.jpg",
    tooltip: "Nickel Alloys Scrap"
  },
  {
    id: 7,
    title: "Cobalt Alloys Scrap",
    image: "/images/products/ferro-silicon.jpg",
    tooltip: "Cobalt Alloys Scrap"
  }
];

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate('next');
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = useCallback((direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex === totalSlides - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;
    });
  }, [totalSlides]);

  const getVisibleProducts = useCallback(() => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    if (endIndex > products.length) {
      return [
        ...products.slice(startIndex),
        ...products.slice(0, endIndex - products.length)
      ];
    }
    
    return products.slice(startIndex, endIndex);
  }, [currentIndex, products, itemsPerPage]);

  const visibleProducts = getVisibleProducts();

  return (
    <div className="relative overflow-hidden py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 md:gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}-${index}`}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 sm:h-56 md:h-64 w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-2 sm:p-4">
                        <h3 className="text-white font-poppins font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                          {product.title}
                        </h3>
                        <p className="text-white/90 font-roboto text-sm sm:text-base">
                          {product.tooltip}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate('prev')}
              className="p-2 sm:p-3 rounded-full bg-gradient-warm text-white shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate('next')}
              className="p-2 sm:p-3 rounded-full bg-gradient-warm text-white shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-warm w-3 sm:w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductSec = () => {
  const [activeTab, setActiveTab] = useState('metalScrap');

  const tabs = [
    {
      id: 'metalScrap',
      icon: 'process',
      title: 'Alloy Scrap',
      content: {
        heading: 'Alloy Scrap - All Types',
        description: [
          {
            title: 'Nickel Alloy Scrap',
            text: 'Our specialty - we offer premium quality nickel alloys including Inconel 600/625/718/825, Hastelloy C-22/C-276/B, Monel and Alloy 20 in solids, turnings and flush, procured from trusted vendors and graded to foundry standards.'
          },
          {
            title: 'Cobalt & Specialty Alloy Scrap',
            text: 'Stellite and other cobalt base alloys, titanium, tungsten and molybdenum scraps for superalloy remelting, hardfacing and high-temperature applications - supplied in national as well as international markets.'
          }
        ],
        image: '/Images/base/slider1.jpg',
        link: '/product/metal-scraps'
      }
    },
    {
      id: 'ferroAlloy',
      icon: 'robot-arm',
      title: 'Ferro Alloy',
      content: {
        heading: 'Ferrous Alloy',
        description: [
          {
            title: 'A ferrous alloy',
            text: 'is a unique metal whose composition contains mostly iron. Although the majority of its chemical makeup is iron, a wide variety of alloying elements can be added to give it the mechanical and chemical characteristics that are required. Semicon Steel And Alloys has the experience to solve your most difficult requirements.'
          }
        ],
        image: '/Images/base/slider2.jpg',
        link: '/product/ferro-alloy'
      }
    }
  ];

  return (
    <div className="container mx-auto  py-8 sm:py-12 md:py-16 bg-greenWhite">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h3 className="text-lg sm:text-xl font-semibold text-burntSienna mb-2 sm:mb-3 font-poppins tracking-widest">WHAT WE DO</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-catalinaBlue font-poppins">All Types of Alloy Scrap</h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-sunset mx-auto mt-4 sm:mt-6"></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-9 mb-8 sm:mb-12 px-[5%]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl
              ${activeTab === tab.id 
                ? 'bg-gradient-warm text-white border-none' 
                : 'bg-white border-2 border-transparent text-gray-600 hover:border-tacao'
              }`}
          >
            {tab.id === 'metalScrap' ? <FiBox className="text-xl sm:text-2xl" /> : <FiLayers className="text-xl sm:text-2xl" />}
            <span className="text-base sm:text-lg font-medium font-poppins">{tab.title}</span>
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${activeTab === tab.id ? ' px-[5%] animate-fade-in' : 'hidden'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-catalinaBlue font-poppins">{tab.content.heading}</h2>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-passion mb-6 sm:mb-8"></div>
              
              {tab.content.description.map((desc, index) => (
                <div key={index} className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-chathamsBlue font-poppins">{desc.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-roboto text-sm sm:text-base">{desc.text}</p>
                </div>
              ))}
              
              <Link
                href={tab.content.link}
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-ocean text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 font-poppins text-sm sm:text-base"
              >
                READ MORE
              </Link>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden">
                <Image
                  src={tab.content.image}
                  alt={tab.content.heading}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      ))}
          <ProductSlider/>

    </div>
  );
};

export default ProductSec;
