"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiHome, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }
//save chahes


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[200px] sm:h-[250px] md:h-[300px]">
        <Image
          src="/Images/base/bannerImg.jpg"
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-center">Contact Us</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 text-xs sm:text-sm md:text-base">
            <Link href="/" className="flex items-center hover:text-tacao transition-colors">
              <FiHome className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-tacao">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Email Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
              <div className="bg-easternBlue p-3 sm:p-4 rounded-full group-hover:bg-burntSienna transition-colors duration-300">
                <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-catalinaBlue">Email Us</h3>
            </div>
            <a href="mailto:semiconsteelandalloys@gmail.com" className="block text-sm sm:text-base text-gray-600 hover:text-burntSienna transition-colors break-all">
            semiconsteelandalloys@gmail.com
            </a>
            {/* <a href="mailto:support@example.com" className="block text-sm sm:text-base text-gray-600 hover:text-burntSienna transition-colors mt-2">
              support@example.com
            </a> */}
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
              <div className="bg-easternBlue p-3 sm:p-4 rounded-full group-hover:bg-burntSienna transition-colors duration-300">
                <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-catalinaBlue">Call Us</h3>
            </div>
            <a href="tel:+917821031398" className="block text-sm sm:text-base text-gray-600 hover:text-burntSienna transition-colors">
            +91 78210 31398 (Akash Kumar - Purchase)
            </a>
            <a href="tel:+919890613050" className="block text-sm sm:text-base text-gray-600 hover:text-burntSienna transition-colors mt-2">
              +91 98906 13050 (Vipul Bafna - Sales)
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
              <div className="bg-easternBlue p-3 sm:p-4 rounded-full group-hover:bg-burntSienna transition-colors duration-300">
                <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-catalinaBlue">Visit Us</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
             2nd Floor, Flat No. 203, Shree Sachhai Mata Park, H.No. 1639/7, Near Oswal Park, Rahnal, Bhiwandi, Dist. Thane, Maharashtra - 421302, India
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">
             GSTIN: 27LRDPK3910Q1Z6
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-catalinaBlue mb-6 sm:mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-easternBlue focus:ring-1 focus:ring-easternBlue transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-easternBlue focus:ring-1 focus:ring-easternBlue transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-easternBlue focus:ring-1 focus:ring-easternBlue transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-easternBlue focus:ring-1 focus:ring-easternBlue transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-easternBlue focus:ring-1 focus:ring-easternBlue transition-all text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-easternBlue hover:bg-burntSienna text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base"
                >
                  <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.2834173938595!2d73.0335357!3d19.270037400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd004ffcbb4d%3A0xf7cf32e4d072199e!2sSemicon%20steel%20and%20alloys!5e0!3m2!1sen!2sin!4v1784207524516!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Semicon Steel And Alloys - Rahnal, Bhiwandi, Thane"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-catalinaBlue mb-6 sm:mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="#" className="bg-easternBlue hover:bg-burntSienna text-white p-3 sm:p-4 rounded-full transition-colors duration-300">
              <FaFacebookF className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="bg-easternBlue hover:bg-burntSienna text-white p-3 sm:p-4 rounded-full transition-colors duration-300">
              <FaTwitter className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="bg-easternBlue hover:bg-burntSienna text-white p-3 sm:p-4 rounded-full transition-colors duration-300">
              <FaInstagram className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="bg-easternBlue hover:bg-burntSienna text-white p-3 sm:p-4 rounded-full transition-colors duration-300">
              <FaLinkedinIn className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
