'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label="Next products"
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white shadow-lg border border-gray-100 text-catalinaBlue hover:bg-easternBlue hover:text-white transition-all duration-300"
        >
            <FiChevronRight className="w-5 h-5" />
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label="Previous products"
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white shadow-lg border border-gray-100 text-catalinaBlue hover:bg-easternBlue hover:text-white transition-all duration-300"
        >
            <FiChevronLeft className="w-5 h-5" />
        </button>
    );
}

const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1190, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
        ],
        cssEase: "ease-in-out"
    };

    const Our_products_data = [
        // Nickel alloy specialty first
        { id: 1, img: "/Images/Our_products/IMG-20230707-WA0179.jpg", heading: "Inconel 600 Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/inco_600_scrap" },
        { id: 2, img: "/Images/Our_products/Inconel600.jpg", heading: "Inconel 601 Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/inco_601_scrap" },
        { id: 3, img: "/Images/Our_products/IMG-20230707-WA0176.jpg", heading: "Inconel 625 Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/inco_625_scrap" },
        { id: 4, img: "/Images/Our_products/IMG-20230707-WA0178.jpg", heading: "Inconel 800 Scrap", tag: "Nickel Alloy", link: "/product/high-nickel-alloys-scrap" },
        { id: 5, img: "/Images/Our_products/IMG-20230707-WA0184.jpg", heading: "Monel Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/monel_400_scrap" },
        { id: 6, img: "/Images/Our_products/platecut.jpg", heading: "Hastelloy Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/hastelloy_c276_scrap" },
        { id: 7, img: "/Images/Our_products/alloy20.jpg", heading: "Alloy 20 Scrap", tag: "Nickel Alloy", link: "/product/metal-scraps/alloy_20_scrap" },
        { id: 8, img: "/Images/Our_products/IMG-20230707-WA0190.jpg", heading: "Nimonic 80 Scrap", tag: "Superalloy", link: "/product/high-nickel-alloys-scrap" },
        { id: 9, img: "/Images/Our_products/IMG-20230708-WA0111.jpg", heading: "Nickel Scrap", tag: "Pure Metal", link: "/product/high-nickel-alloys-scrap" },
        { id: 10, img: "/Images/Our_products/IMG-20230707-WA0192.jpg", heading: "Nichrome Scrap", tag: "Nickel Alloy", link: "/product/high-nickel-alloys-scrap" },
        { id: 11, img: "/Images/Our_products/IMG-20230707-WA0174.jpg", heading: "Cobalt Scrap", tag: "Cobalt Alloy", link: "/product/high-nickel-alloys-scrap" },
        { id: 12, img: "/Images/Our_products/IMG-20230707-WA0172.jpg", heading: "Titanium Scrap", tag: "Titanium", link: "/product/high-nickel-alloys-scrap" },
        { id: 13, img: "/Images/Our_products/IMG-20230707-WA0189.jpg", heading: "Moly Metal Scrap", tag: "Pure Metal", link: "/product/high-nickel-alloys-scrap" },
        // Forms & general scrap
        { id: 14, img: "/Images/Our_products/turning.jpg", heading: "Turning Scrap", tag: "Turnings", link: "/product/metal-scraps" },
        { id: 15, img: "/Images/Our_products/IMG-20230707-WA0181.jpg", heading: "Alloy Solids Scrap", tag: "Solids", link: "/product/metal-scraps" },
        { id: 16, img: "/Images/Our_products/IMG-20230707-WA0185.jpg", heading: "Forging Flush Scrap", tag: "Flush", link: "/product/metal-scraps" },
        { id: 17, img: "/Images/Our_products/IMG-20230707-WA0171.jpg", heading: "Runner Riser Scrap", tag: "Runner-Risers", link: "/product/metal-scraps" },
        { id: 18, img: "/Images/Our_products/IMG-20230707-WA0180.jpg", heading: "Alloy Castings Scrap", tag: "Castings", link: "/product/metal-scraps" },
        { id: 19, img: "/Images/Our_products/IMG-20230708-WA0063.jpg", heading: "Alloy Cut Plate Scrap", tag: "Plates", link: "/product/metal-scraps" },
        { id: 20, img: "/Images/Our_products/IMG-20230707-WA0182.jpg", heading: "Pipe Cutting Scrap", tag: "Pipes", link: "/product/metal-scraps" },
        { id: 21, img: "/Images/Our_products/Wirescrap.jpg", heading: "Wire Scrap", tag: "Wire", link: "/product/metal-scraps" },
        { id: 22, img: "/Images/Our_products/IMG-20230707-WA0183.jpg", heading: "Superalloy Scrap", tag: "Superalloy", link: "/product/high-nickel-alloys-scrap" },
        { id: 23, img: "/Images/Our_products/IMG-20230707-WA0186.jpg", heading: "Round Cut Piece Scrap", tag: "Solids", link: "/product/metal-scraps" },
        { id: 24, img: "/Images/Our_products/IMG-20230707-WA0197.jpg", heading: "Grinding Dust", tag: "Dust", link: "/product/metal-scraps" },
    ]

    return (
        <div className="bg-greenWhite py-12 sm:py-16 md:py-20 px-[5%]">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
                        OUR INVENTORY
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue font-poppins mb-3 sm:mb-4">
                        Our Products
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-600 font-roboto max-w-2xl mx-auto">
                        Real photos from our yard - nickel, cobalt and specialty alloy scrap in every form,
                        sorted and graded, ready for dispatch.
                    </p>
                </div>

                {/* Slider */}
                <div className="product-slider-container relative px-1 sm:px-10">
                    <Slider {...settings}>
                        {Our_products_data.map((item) => (
                            <div className="px-2 sm:px-3 pb-10" key={item.id}>
                                <Link href={item.link} className="block group">
                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-1.5">
                                        {/* Image */}
                                        <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                                            <Image
                                                src={item.img}
                                                alt={`${item.heading} - Semicon Steel And Alloys`}
                                                fill
                                                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1190px) 33vw, 25vw"
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Tag badge */}
                                            <span className="absolute top-3 left-3 bg-easternBlue text-white text-[10px] sm:text-xs font-semibold font-poppins uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                                                {item.tag}
                                            </span>
                                            {/* Bottom gradient */}
                                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                        {/* Caption */}
                                        <div className="flex items-center justify-between gap-2 p-4">
                                            <h4 className="text-sm sm:text-base font-semibold font-poppins text-catalinaBlue group-hover:text-easternBlue transition-colors duration-300 leading-snug">
                                                {item.heading}
                                            </h4>
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-easternBlue flex items-center justify-center group-hover:bg-easternBlue group-hover:text-white transition-colors duration-300">
                                                <FiArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* View all CTA */}
                <div className="text-center mt-4">
                    <Link
                        href="/product"
                        className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-8 py-3.5 rounded-lg font-poppins font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        View All Products
                        <FiArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider
