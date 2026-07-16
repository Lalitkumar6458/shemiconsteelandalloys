import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import TopInfo from "@/components/base/TopInfo";
import WhatsAppButton from "@/components/base/WhatsAppButton";
import ScrollButtons from "@/components/base/ScrollButtons";
import { jsonLd } from "../../public/data/metaData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://www.semiconsteelandalloys.com'),
  title: {
    default: "Semicon Steel And Alloys - Nickel Alloy Scrap Supplier India | Inconel, Hastelloy, Monel Scrap - All Types of Alloy Scrap",
    template: "%s | Semicon Steel And Alloys",
  },
  description: "ISO 9001:2015 certified importer, exporter & foundry supplier of all types of alloy scrap with a special focus on nickel alloys. Inconel 600/625/718/825 scrap, Hastelloy C-22/C-276/B scrap, Monel 400/K500, nickel & cobalt alloys, titanium, tungsten & molybdenum metals, turnings & solids. Based in Bhiwandi, Thane (Maharashtra), delivering across India and worldwide. Call +91 78210 31398 for best alloy scrap rates.",
  keywords: [
    "alloy scrap supplier india",
    "all types of alloy scrap",
    "nickel alloy scrap",
    "nickel scrap buyer india",
    "nickel scrap supplier",
    "alloy 20 scrap",
    "carpenter 20 scrap",

    "inconel scrap",
    "inconel 825 scrap",
    "inconel 625 scrap",
    "inconel 600 scrap",
    "inconel 601 scrap",
    "inconel 718 scrap",
    "inconel 800 scrap",
    "incoloy scrap",

    "hastelloy scrap",
    "hastelloy C276 scrap",
    "hastelloy C22 scrap",
    "hastelloy B scrap",

    "monel 400 scrap",
    "monel K500 scrap",
    "nimonic scrap",
    "nimonic 80A scrap",

    "cobalt alloy scrap",
    "stellite scrap",
    "cobalt base alloys",
    "superalloy scrap",

    "ferroalloys",
    "LC FE chrome",
    "selenium metallicum",
    "ferro tungsten",
    "nitrated ferro chrome",
    "pure moly",
    "ferro niobium",
    "tungsten carbide",
    "cobalt metals",
    "misch metal",
    "ferro vanadium",
    "pure tungsten",
    
    "titanium scrap",
    "titanium alloys",
    "titanium CP grade",
    "tungsten scrap",
    "molybdenum scrap",

    "high nickel alloys",
    "nickel alloys supplier",
    "cobalt alloys supplier",
    "foundry suppliers india",
    "foundry raw materials",

    "Semicon Steel And Alloys",
    "metal traders india",
    "bhiwandi metal traders",
    "thane metal suppliers",
    "mumbai nickel alloy suppliers",
    "metal scrap exporters",
    "metal scrap importers",
    "industrial metal suppliers",
    "premium metal scrap",
    "metal recycling",
    "scrap metal dealers",
    "metal trading company",
    "industrial raw materials",
    "metal alloy suppliers",
    
    "aerospace grade metals",
    "industrial grade metals",
    "marine grade metals",
    "chemical processing metals",
    "high temperature alloys",
    "corrosion resistant metals",
    "heat resistant alloys",
    
    "metal scrap wholesale",
    "bulk metal suppliers",
    "metal scrap trading",
    "international metal traders",
    "certified metal suppliers",
    "quality metal scraps",
    "metal scrap certification",
    "metal analysis services"
  ].join(", "),
  authors: [{ name: "Lalit Kumar" }],
  creator: "Semicon Steel And Alloys",
  publisher: "Semicon Steel And Alloys",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "Semicon Steel And Alloys - All Types of Alloy Scrap | Nickel & Cobalt Alloys Specialist",
    description: "ISO 9001:2015 certified importer, exporter & foundry supplier of all types of alloy scrap: Inconel, Hastelloy, Monel, Nimonic, cobalt alloys, tungsten, titanium & molybdenum. Competitive pricing and worldwide delivery.",
    images: [
      {
        url: 'https://www.semiconsteelandalloys.com/Images/base/BaseImg.jpg',
        width: 1200,
        height: 630,
        alt: 'Semicon Steel And Alloys - Nickel & Cobalt Alloy Specialists',
      },
    ],
    url: 'https://www.semiconsteelandalloys.com/',
    type: "website",
    locale: "en_IN",
    siteName: "Semicon Steel And Alloys",
    category: "Industrial Supplies"
  },
  twitter: {
    card: 'summary_large_image',
    title: "Semicon Steel And Alloys - All Types of Alloy Scrap | Nickel & Cobalt Alloys Specialist",
    description: "ISO 9001:2015 certified suppliers of nickel & cobalt alloy scrap - Inconel, Hastelloy, Monel, titanium, tungsten & molybdenum. Global delivery of certified, high-quality materials for critical applications.",
    images: [
      {
        url: 'https://www.semiconsteelandalloys.com/Images/base/BaseImg.jpg',
        width: 1200,
        height: 630,
        alt: 'Semicon Steel And Alloys - Nickel & Cobalt Alloy Specialists',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.semiconsteelandalloys.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  category: 'Industrial Supplies',
  classification: 'Business to Business',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <TopInfo />
        <WhatsAppButton />
        <ScrollButtons />
        <div className="lg:pt-[52px]">
          <Header/>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
