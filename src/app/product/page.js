import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiHome, FiBox, FiLayers, FiDatabase, FiArrowRight, FiCheckCircle, FiPhone } from 'react-icons/fi'

export const metadata = {
  title: "Products - All Types of Alloy Scrap, Nickel Alloys & Ferro Alloys",
  description: "Explore our range: Inconel 600/601/625/825 scrap, Hastelloy C276/C22 scrap, Monel 400 scrap, Alloy 20, cobalt base alloys, titanium, tungsten, molybdenum and ferro alloys. Best alloy scrap rates in India.",
  alternates: { canonical: 'https://www.semiconsteelandalloys.com/product' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which alloy scrap grades does Semicon Steel And Alloys buy and sell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deal in all types of alloy scrap with a specialty in nickel alloys: Inconel 600, 601, 625, 718 and 825, Hastelloy C-22, C-276 and B, Monel 400 and K500, Alloy 20, Nimonic 80A/90, Stellite cobalt base alloys, plus titanium, tungsten, molybdenum, pure metals and ferro alloys.'
      }
    },
    {
      '@type': 'Question',
      name: 'In which forms do you supply alloy scrap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We supply alloy scrap as solids, turnings, plates, pipes, tubes, sheets, billets, runner-risers, castings, wire and forging flush - sorted, spectro-tested and graded to foundry standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you deliver alloy scrap outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are an ISO 9001:2015 certified importer and exporter based in Bhiwandi, Thane (Maharashtra), supplying foundries and industries across India and worldwide.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I get a quote for buying or selling alloy scrap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or WhatsApp +91 78210 31398 (Akash Kumar - Purchase) or +91 98906 13050 (Vipul Bafna - Sales), or email semiconsteelandalloys@gmail.com with your material list or photos. We respond with a quote the same day.'
      }
    }
  ]
}

const productData = [
  {
    title: "Alloy Scrap",
    description: "All types of alloy scrap - Inconel, Hastelloy, Monel and Alloy 20 in solids, turnings and flush - sourced, graded and supplied to foundries worldwide.",
    grades: ["Inconel 600 / 601 / 625 / 825", "Hastelloy C22 / C276", "Monel 400", "Alloy 20"],
    link: "/product/metal-scraps",
    Icon: FiBox
  },
  {
    title: "Ferro Alloy",
    description: "Ferro alloys and additives for steel and foundry industries - consistent chemistry, reliable supply.",
    grades: ["Ferro Moly / Tungsten / Vanadium", "Ferro Niobium / LC Fe Chrome", "Tungsten Carbide", "Cobalt Metals & Misch Metal"],
    link: "/product/ferro-alloy",
    Icon: FiLayers
  },
  {
    title: "High Nickel Alloys Scrap",
    description: "Our specialty - superalloy scrap essential for aerospace, chemical and turbine industries, with full composition charts.",
    grades: ["Inconel & Nimonic Superalloys", "Stellite Cobalt Base Alloys", "Pure Ni / Co / Mo / W", "Titanium CP & Alloy Grades"],
    link: "/product/high-nickel-alloys-scrap",
    Icon: FiDatabase
  }
];

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Banner */}
      <section className="relative h-[220px] sm:h-[260px] md:h-[320px]">
        <Image
          src="/Images/base/bannerImg.jpg"
          alt="Alloy scrap products - Semicon Steel And Alloys"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-3 text-center">Our Products</h1>
          <p className="text-sm sm:text-base text-gray-200 mb-4 text-center max-w-xl">
            All types of alloy scrap, high nickel alloys & ferro alloys - graded and foundry-ready
          </p>
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

      {/* Categories */}
      <section className="py-14 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
            WHAT WE BUY & SELL
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue font-poppins mb-3 max-w-3xl mx-auto leading-tight">
            Specialists in High Nickel Alloys & All Types of Alloy Scrap
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {productData.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-easternBlue transition-colors duration-300">
                <product.Icon className="w-8 h-8 text-easternBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-poppins text-catalinaBlue mb-3">{product.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-2 mb-7">
                {product.grades.map((grade) => (
                  <li key={grade} className="flex items-center gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-easternBlue flex-shrink-0" />
                    {grade}
                  </li>
                ))}
              </ul>
              <Link
                href={product.link}
                className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-gradient-sunset text-white px-5 py-3 rounded-lg font-poppins font-semibold text-sm shadow-md group-hover:shadow-lg transition-all duration-300"
              >
                Explore {product.title}
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SEO content block */}
      <section className="py-14 sm:py-16 px-4 bg-greenWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-catalinaBlue mb-5 text-center">
            Trusted Alloy Scrap Supplier in India
          </h2>
          <div className="w-16 h-1 bg-gradient-warm mx-auto rounded-full mb-7"></div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Semicon Steel And Alloys is an ISO 9001:2015 certified importer, exporter and foundry supplier
            of all types of alloy scrap, based in Bhiwandi, Thane (Maharashtra). Our specialty is high nickel
            alloy scrap - <Link href="/product/metal-scraps/inco_600_scrap" className="text-red-700 font-medium hover:underline">Inconel 600</Link>,{' '}
            <Link href="/product/metal-scraps/inco_625_scrap" className="text-red-700 font-medium hover:underline">Inconel 625</Link>,{' '}
            <Link href="/product/metal-scraps/inco_825_scrap" className="text-red-700 font-medium hover:underline">Inconel 825</Link>,{' '}
            <Link href="/product/metal-scraps/hastelloy_c276_scrap" className="text-red-700 font-medium hover:underline">Hastelloy C276</Link>,{' '}
            <Link href="/product/metal-scraps/monel_400_scrap" className="text-red-700 font-medium hover:underline">Monel 400</Link> and{' '}
            <Link href="/product/metal-scraps/alloy_20_scrap" className="text-red-700 font-medium hover:underline">Alloy 20</Link> -
            supplied as solids, turnings, plates, pipes, castings and forging flush.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Every lot is sorted and grade-verified with spectro analysis before dispatch, so foundries and
            AOD plants receive furnace-ready material with predictable chemistry. Alongside nickel alloys we
            supply Stellite cobalt base alloys, titanium, tungsten, molybdenum, pure metals and the complete
            range of ferro alloys - one reliable partner for your entire raw material basket.
          </p>
        </div>
      </section>

      {/* FAQ (visible, matches JSON-LD) */}
      <section className="py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-catalinaBlue mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <summary className="flex items-center justify-between cursor-pointer px-5 sm:px-6 py-4 font-poppins font-semibold text-catalinaBlue text-sm sm:text-base list-none">
                  {faq.name}
                  <span className="ml-4 text-red-600 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 px-4 bg-gradient-ocean">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-poppins mb-1">Need a grade you don&apos;t see here?</h2>
            <p className="text-sm sm:text-base text-gray-300">Send your material list or photos - same-day quotes on all alloy scrap.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="tel:+917821031398" className="inline-flex items-center justify-center gap-2 bg-gradient-sunset text-white px-6 py-3 rounded-lg font-poppins font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <FiPhone className="w-4 h-4" />
              +91 78210 31398
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white px-6 py-3 rounded-lg font-poppins font-semibold text-sm hover:bg-white hover:text-red-700 transition-all duration-300 whitespace-nowrap">
              Send Enquiry
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
