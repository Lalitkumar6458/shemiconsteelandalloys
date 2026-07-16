'use client'
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiPhone } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    image: '/Images/base/slider1.jpg',
    eyebrow: 'NICKEL & COBALT ALLOYS SPECIALIST',
    title: ["India's Trusted", 'Nickel Alloy Scrap Partner'],
    description: 'Inconel • Hastelloy • Monel • Nimonic — we buy and sell high nickel alloy scrap at the best rates, graded to foundry standards.',
    primary: { text: 'View Products', link: '/product' },
    secondary: { text: 'Get a Quote', link: '/contact' }
  },
  {
    id: 2,
    image: '/Images/base/bannerImg.jpg',
    eyebrow: 'ALL TYPES OF ALLOY SCRAP',
    title: ['Solids, Turnings,', 'Plates & Much More'],
    description: 'Every industrial form - sorted, spectro-tested and delivered foundry-ready across India and worldwide.',
    primary: { text: 'Explore Range', link: '/product/metal-scraps' },
    secondary: { text: 'Contact Us', link: '/contact' }
  },
  {
    id: 3,
    image: '/Images/base/slider2.jpg',
    eyebrow: 'ISO 9001:2015 CERTIFIED',
    title: ['Quality You Can Melt', 'With Confidence'],
    description: 'Every lot is sorted, grade-verified and quality checked before dispatch - trusted by foundries and AOD plants.',
    primary: { text: 'Our Quality Policy', link: '/quality' },
    secondary: { text: 'Get a Quote', link: '/contact' }
  },
  {
    id: 4,
    image: '/Images/base/BaseImg.jpg',
    eyebrow: 'PURE & SPECIALTY METALS',
    title: ['Titanium, Tungsten', '& Molybdenum'],
    description: 'Plus Stellite cobalt base alloys, ferro alloys and pure metals - the complete raw material basket for superalloy industries.',
    primary: { text: 'Learn More', link: '/product/high-nickel-alloys-scrap' },
    secondary: { text: 'Contact Us', link: '/contact' }
  }
];

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/15 hover:bg-easternBlue backdrop-blur-sm border border-white/20 transition-all duration-300"
      aria-label="Next Slide"
    >
      <FiChevronRight className="w-6 h-6 text-white" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/15 hover:bg-easternBlue backdrop-blur-sm border border-white/20 transition-all duration-300"
      aria-label="Previous Slide"
    >
      <FiChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
}

export default function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="h-2 w-2 bg-white/50 rounded-full hover:bg-white transition-all duration-300" />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative h-[520px] sm:h-[calc(100vh-88px)] lg:h-[calc(100vh-52px)] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-[520px] sm:h-[calc(100vh-88px)] lg:h-[calc(100vh-52px)]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title.join(' ')}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto h-full flex items-center px-4 sm:px-8 md:px-12">
              <AnimatePresence mode="wait">
                {currentSlide === index && (
                  <motion.div
                    key={slide.id}
                    className="max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {/* Eyebrow badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="inline-flex items-center gap-2 mb-4 sm:mb-6"
                    >
                      <span className="h-[3px] w-8 sm:w-12 bg-gradient-sunset rounded-full" />
                      <span className="text-tacao text-xs sm:text-sm md:text-base font-poppins font-semibold tracking-[0.2em] uppercase">
                        {slide.eyebrow}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <div className="mb-4 sm:mb-6">
                      {slide.title.map((line, i) => (
                        <motion.h2
                          key={i}
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + (i * 0.12) }}
                          className="text-3xl sm:text-5xl md:text-6xl font-bold font-poppins text-white leading-tight"
                        >
                          {line}
                        </motion.h2>
                      ))}
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.65 }}
                      className="text-sm sm:text-base md:text-lg text-gray-200 font-roboto max-w-xl mb-6 sm:mb-9 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap gap-3 sm:gap-4"
                    >
                      <a
                        href={slide.primary.link}
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-sunset text-white text-sm sm:text-base font-bold font-poppins rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        {slide.primary.text}
                        <FiArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={slide.secondary.link}
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/40 text-white text-sm sm:text-base font-bold font-poppins rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300"
                      >
                        <FiPhone className="w-4 h-4" />
                        {slide.secondary.text}
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
