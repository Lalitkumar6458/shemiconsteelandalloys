import { FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ContactSec = () => {
  return (
    <section className="w-full relative py-20 sm:py-24 bg-gradient-passion overflow-hidden">
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
      {/* Decorative blurs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <h2 className="text-center text-tacao text-lg sm:text-xl font-semibold mb-4 font-poppins tracking-widest uppercase">
          Semicon Steel And Alloys
        </h2>

        {/* Main Content */}
        <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Buying or Selling Alloy Scrap?
          </h3>

          <p className="text-base sm:text-xl mb-10 font-roboto text-greenWhite max-w-2xl mx-auto">
            Get the best rates on Inconel, Hastelloy, Monel, cobalt alloys and all types of
            alloy scrap. Send your list or photos - we respond with a quote the same day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <a
              href="tel:+917821031398"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-7 sm:px-9 py-3.5 sm:py-4 rounded-lg font-bold font-poppins shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FiPhone className="w-5 h-5" />
              +91 78210 31398
            </a>
            <a
              href="https://wa.me/+917821031398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-lg font-bold font-poppins shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-lg font-bold font-poppins hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              Send an Enquiry
              <FiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
