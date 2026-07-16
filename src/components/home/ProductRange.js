import Link from "next/link";

const ProductRange = () => {
  const data = [
    {
      name: "Nickel & Cobalt Alloy Scrap",
      items: [
        { name: "Inconel 600", link: "/product/metal-scraps/inco_600_scrap" },
        { name: "Inconel 601", link: "/product/metal-scraps/inco_601_scrap" },
        { name: "Inconel 625", link: "/product/metal-scraps/inco_625_scrap" },
        { name: "Inconel 825", link: "/product/metal-scraps/inco_825_scrap" },
        { name: "Inconel 718", link: "/product/high-nickel-alloys-scrap" },
        { name: "Monel 400", link: "/product/metal-scraps/monel_400_scrap" },
        { name: "Monel K500", link: "/product/high-nickel-alloys-scrap" },
        { name: "Hastelloy C276", link: "/product/metal-scraps/hastelloy_c276_scrap" },
        { name: "Hastelloy C22", link: "/product/metal-scraps/hastelloy_c22_scrap" },
        { name: "Hastelloy B", link: "/product/high-nickel-alloys-scrap" },
        { name: "Alloy 20", link: "/product/metal-scraps/alloy_20_scrap" },
        { name: "Nimonic 80A / 90", link: "/product/high-nickel-alloys-scrap" },
        { name: "Stellite / Cobalt Alloys", link: "/product/high-nickel-alloys-scrap" },
        { name: "Titanium Scrap", link: "/product/high-nickel-alloys-scrap" },
        { name: "Tungsten & Moly", link: "/product/high-nickel-alloys-scrap" }
      ]
    },
    {
      name: "Ferro Alloys",
      items: [
        { name: "LC Fe Chrome", link: "#" },
        { name: "Pure Moly", link: "#" },
        { name: "Misch Metal", link: "#" },
        { name: "Selenium Metallicum", link: "#" },
        { name: "Ferro Niobium", link: "#" },
        { name: "Ferro Vanadium", link: "#" },
        { name: "Ferro Tungsten", link: "#" },
        { name: "Tungsten Carbide", link: "#" },
        { name: "Pure Tungsten", link: "#" },
        { name: "Nitrated Ferro Chrome", link: "#" },
        { name: "Cobalt Metals", link: "#" }
      ]
    }
  ]

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-base sm:text-lg font-semibold text-burntSienna mb-2 font-poppins tracking-widest">
            OUR COMPLETE RANGE
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-catalinaBlue mb-3 sm:mb-4 font-poppins">
            Every Grade You&apos;re Looking For
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-roboto max-w-2xl mx-auto">
            From Inconel to Stellite, ferro alloys to pure metals - click any grade to explore
            details, or call us for grades not listed here.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {data.map((category) => (
            <div key={category.name} className="space-y-2 sm:space-y-3">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.items.map((item, index) => (
                  <Link href={item.link} key={index}> 
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border-2 border-red-500 
                      text-red-500 text-xs sm:text-sm font-medium hover:bg-red-500 hover:text-white 
                      transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md
                      transform hover:-translate-y-0.5"
                  >
                    {item.name}
                  </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductRange;
