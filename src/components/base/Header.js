"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiChevronDown, FiHome, FiInfo, FiBox, FiCheckCircle, FiMail, FiChevronRight, FiSearch, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false)
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const pathname = usePathname()
    
    const headerData=[
        {
            name:"Home",
            path:"/",
            icon: <FiHome className="w-5 h-5" />
        },
        {
            name:"About",
            path:"/about",
            icon: <FiInfo className="w-5 h-5" />
        },
        {
            name:"Products",
            path:"/product",
            icon: <FiBox className="w-5 h-5" />,
            submenu:[
                {
                    name:"Alloy Scrap",
                    path:"/product/metal-scraps",
                    submenu:[
                       
                    ]
                },
                {
                    name:"Ferro Alloys",
                    path:"/product/ferro-alloy",
                    submenu:[
                    ]
                },
                {
                    name:"High Nickel Alloys Scrap",
                    path:"/product/high-nickel-alloys-scrap",
                    submenu:[
                      
                    ]
                }
            ]
        },
        {
            name:"Quality",
            path:"/quality",
            icon: <FiCheckCircle className="w-5 h-5" />
        },
        {
            name:"Contact",
            path:"/contact",
            icon: <FiMail className="w-5 h-5" />
        }
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index)
        setActiveNestedSubmenu(null)
    }

    const toggleNestedSubmenu = (index) => {
        setActiveNestedSubmenu(activeNestedSubmenu === index ? null : index)
    }

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const topInfoHeight = 52 // Adjust this value based on your TopInfo height
            
            if (currentScrollY > topInfoHeight) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`w-full transition-all duration-300 ease-in-out
                ${isScrolled
                    ? 'fixed top-0 left-0 right-0 z-40 animate-slideDown bg-white/95 backdrop-blur-md shadow-xl'
                    : 'relative bg-white shadow-md'
                }`}
            style={{
                top: isScrolled ? '0' : 'auto',
            }}
        >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-sunset" />
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="relative w-[180px] sm:w-[200px] md:w-[250px] h-[80px] sm:h-[50px] md:h-[70px] block">
                            <Image 
                                src="/Images/base/ssaLogo.png"
                                alt="Semicon Steel And Alloys"
                                fill
                                priority
                                sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 250px"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Combined Desktop Menu and Buttons */}
                    <div className="hidden lg:flex items-center justify-end flex-1 space-x-8">
                        {/* Desktop Menu */}
                        <div className="flex items-center space-x-1">
                            {headerData.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link
                                        href={item.path}
                                        className={`relative flex items-center gap-1.5 hover:text-red-700 px-3 py-2 text-[14px] font-poppins font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out rounded-lg hover:bg-red-50/60
                                            after:absolute after:-bottom-0.5 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-gradient-sunset after:origin-left after:transition-transform after:duration-300
                                            ${pathname === item.path ? 'text-red-700 after:scale-x-100' : 'text-gray-800 after:scale-x-0 hover:after:scale-x-100'}`}
                                    >
                                        <span>{item.name}</span>
                                        {item.submenu && <FiChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />}
                                    </Link>
                                    
                                    {item.submenu && item.submenu.length > 0 && (
                                        <div className="absolute left-0 mt-1 w-64 rounded-xl shadow-2xl bg-white transform opacity-0 invisible scale-95 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-[3px] border-easternBlue overflow-hidden">
                                            <div className="py-1">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <div key={subIndex} className="relative group/sub">
                                                        <Link 
                                                            href={subItem.path}
                                                            className="px-5 py-3 flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 hover:pl-6 font-roboto transition-all duration-300 border-b border-gray-50 last:border-0"
                                                        >
                                                            {subItem.name}
                                                            {subItem.submenu && <FiChevronRight className="inline ml-2 w-4 h-4" />}
                                                        </Link>
                                                        {subItem.submenu && subItem.submenu.length > 0 && (
                                                            <div className="absolute left-full top-0 w-56  shadow-xl bg-white opacity-0 invisible scale-95 group-hover/sub:scale-100 group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border">
                                                                <div className="">
                                                                    {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                                        <Link
                                                                            key={nestedIndex}
                                                                            href={nestedItem.path}
                                                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-700/10 hover:text-gray-900 font-roboto transition-all duration-300 border-b"
                                                                        >
                                                                            {nestedItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Action Buttons */}
                        <div className="flex items-center space-x-3 border-l pl-6 border-gray-200">
                            <Link
                                href="/contact"
                                className="hidden lg:inline-flex items-center gap-2 bg-gradient-sunset text-white px-5 py-2.5 rounded-md font-poppins font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                            >
                                <FiPhone className="w-4 h-4" />
                                Get a Quote
                            </Link>
                            <button
                                onClick={() => setIsSearchDrawerOpen(true)}
                                className="p-2.5 border border-gray-200 hover:border-red-200 hover:bg-red-50 rounded-full transition-all duration-300 text-gray-500 hover:text-red-700"
                                aria-label="Search"
                            >
                                <FiSearch className="w-[18px] h-[18px]" />
                            </button>
                            <button
                                onClick={() => setIsInfoDrawerOpen(true)}
                                className="p-2.5 border border-gray-200 hover:border-red-200 hover:bg-red-50 rounded-full transition-all duration-300 text-gray-500 hover:text-red-700"
                                aria-label="Information"
                            >
                                <FiInfo className="w-[18px] h-[18px]" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center space-x-1.5">
                        <a
                            href="tel:+917821031398"
                            className="p-2.5 bg-gradient-sunset text-white rounded-full shadow-md transition-all duration-300"
                            aria-label="Call us"
                        >
                            <FiPhone className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => setIsSearchDrawerOpen(true)}
                            className="p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 text-gray-600 hover:text-gray-900"
                            aria-label="Search"
                        >
                            <FiSearch className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsInfoDrawerOpen(true)}
                            className="p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 text-gray-600 hover:text-gray-900"
                            aria-label="Information"
                        >
                            <FiInfo className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 text-gray-600 hover:text-gray-900"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <FiMenu className="h-5 w-5" />
                            ) : (
                                <FiX className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Updated */}
                {isOpen && (
                    <div className="lg:hidden fixed top-[84px] left-0 right-0 bg-white shadow-xl z-50 max-h-[calc(100vh-84px)] overflow-y-auto border-t border-gray-100">
                        <div className="px-3 pt-3 pb-4 space-y-1">
                            {headerData.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className={`flex justify-between items-center px-4 py-3 rounded-xl text-base font-poppins font-semibold cursor-pointer transition-all duration-300
                                            ${pathname === item.path ? 'bg-red-50 text-red-700' : 'text-gray-800 hover:bg-gray-50 hover:text-red-700'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.submenu) {
                                                toggleSubmenu(index);
                                            } else {
                                                window.location.href = item.path;
                                            }
                                        }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className={pathname === item.path ? 'text-red-600' : 'text-gray-400'}>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </div>
                                        {item.submenu && (
                                            <FiChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180 text-red-600' : ''}`} />
                                        )}
                                    </div>
                                    {item.submenu && activeSubmenu === index && (
                                        <div className="pl-4 space-y-1">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <div key={subIndex}>
                                                    <div
                                                        className="flex justify-between items-center px-3 py-2 rounded-md text-base font-roboto text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                                                        onClick={() => subItem.submenu && toggleNestedSubmenu(subIndex)}
                                                    >
                                                        <Link href={subItem.path}>
                                                            {subItem.name}
                                                        </Link>
                                                        {subItem.submenu && (
                                                            <FiChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${activeNestedSubmenu === subIndex ? 'rotate-180' : ''}`} />
                                                        )}
                                                    </div>
                                                    {subItem.submenu && activeNestedSubmenu === subIndex && (
                                                        <div className="pl-4 space-y-1">
                                                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                                <Link
                                                                    key={nestedIndex}
                                                                    href={nestedItem.path}
                                                                    className="block px-3 py-2 rounded-md text-base font-roboto text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                                                                >
                                                                    {nestedItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA + contact */}
                            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2.5">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-sunset text-white px-5 py-3 rounded-xl font-poppins font-semibold text-sm shadow-md"
                                >
                                    <FiPhone className="w-4 h-4" />
                                    Get a Quote
                                </Link>
                                <a
                                    href="https://wa.me/+917821031398"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-5 py-3 rounded-xl font-poppins font-semibold text-sm shadow-md"
                                >
                                    WhatsApp: +91 78210 31398
                                </a>
                                <p className="text-center text-xs text-gray-500 pt-1 break-all">semiconsteelandalloys@gmail.com</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Search Drawer - Updated z-index */}
                <div className={`fixed inset-x-0 top-0 z-[60] transform transition-transform duration-300 ease-in-out ${isSearchDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="bg-white shadow-lg p-4">
                        <div className="max-w-7xl mx-auto relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-full p-4 border rounded-lg pr-12"
                            />
                            <button
                                onClick={() => setIsSearchDrawerOpen(false)}
                                className="absolute right-4 top-4"
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Drawer - Updated Design */}
                <div className={`fixed inset-y-0 right-0 z-[60] w-full md:w-96 transform transition-transform duration-300 ease-in-out ${isInfoDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="h-full bg-white shadow-lg overflow-y-auto">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-glacier pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-catalinaBlue font-poppins">Contact Us</h2>
                                    <p className="text-sm text-gray-600 mt-1">We're here to help!</p>
                                </div>
                                <button
                                    onClick={() => setIsInfoDrawerOpen(false)}
                                    className="p-2 hover:bg-glacier rounded-full transition-all duration-300"
                                >
                                    <FiX className="w-6 h-6 text-catalinaBlue" />
                                </button>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                {/* Phone Numbers */}
                                <div className="group hover:bg-glacier/20 p-4 rounded-lg transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-easternBlue p-3 rounded-full">
                                            <FiPhone className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600 mb-2">Phone Numbers</p>
                                            <div className="space-y-2">
                                                <a href="tel:+917821031398" className="flex flex-col items-start text-catalinaBlue hover:text-burntSienna font-medium transition-all duration-300">
                                                    <span className="text-xs text-gray-500">Purchase - Akash Kumar</span>
                                                    +91 78210 31398
                                                </a>
                                                <a href="tel:+919890613050" className="flex flex-col items-start text-catalinaBlue hover:text-burntSienna font-medium transition-all duration-300">
                                                    <span className="text-xs text-gray-500">Sales - Vipul Bafna</span>
                                                    +91 98906 13050
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Email Addresses */}
                                <div className="group hover:bg-glacier/20 p-4 rounded-lg transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-easternBlue p-3 rounded-full">
                                            <FiMail className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600 mb-2">Email Addresses</p>
                                            <div className="space-y-2">
                                                <a href="mailto:semiconsteelandalloys@gmail.com" className="flex items-center text-catalinaBlue hover:text-burntSienna font-medium transition-all duration-300 break-all">
                                                    semiconsteelandalloys@gmail.com
                                                </a>
                                                {/* <a href="mailto:support@example.com" className="flex items-center text-catalinaBlue hover:text-burntSienna font-medium transition-all duration-300">
                                                    <span className="text-sm text-gray-500 w-24">Support:</span>
                                                    support@example.com
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Location */}
                                <div className="group hover:bg-glacier/20 p-4 rounded-lg transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-easternBlue p-3 rounded-full">
                                            <FiMapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Location</p>
                                            <span className="text-catalinaBlue font-medium">
                                            2nd Floor, Flat No. 203, Shree Sachhai Mata Park, H.No. 1639/7, Near Oswal Park, Rahnal, Bhiwandi, Dist. Thane, Maharashtra - 421302, India
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Section */}
                                <div className="pt-6 border-t border-glacier mt-8">
                                    <h3 className="text-lg font-semibold mb-6 text-catalinaBlue">Connect With Us</h3>
                                    <div className="grid grid-cols-4 gap-4">
                                        <a href="#" className="flex items-center justify-center p-3 bg-glacier hover:bg-easternBlue rounded-lg group transition-all duration-300">
                                            <FaFacebookF className="w-5 h-5 text-catalinaBlue group-hover:text-white" />
                                        </a>
                                        <a href="#" className="flex items-center justify-center p-3 bg-glacier hover:bg-easternBlue rounded-lg group transition-all duration-300">
                                            <FaTwitter className="w-5 h-5 text-catalinaBlue group-hover:text-white" />
                                        </a>
                                        <a href="#" className="flex items-center justify-center p-3 bg-glacier hover:bg-easternBlue rounded-lg group transition-all duration-300">
                                            <FaInstagram className="w-5 h-5 text-catalinaBlue group-hover:text-white" />
                                        </a>
                                        <a href="#" className="flex items-center justify-center p-3 bg-glacier hover:bg-easternBlue rounded-lg group transition-all duration-300">
                                            <FaLinkedinIn className="w-5 h-5 text-catalinaBlue group-hover:text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header