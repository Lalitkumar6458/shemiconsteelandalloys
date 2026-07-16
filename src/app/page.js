'use client'
import AboutSec from "@/components/home/AboutSec";
import ContactSec from "@/components/home/ContactSec";
import FormsWeDeal from "@/components/home/FormsWeDeal";
import Manufacturing from "@/components/home/Manufacturing";
import ProductRange from "@/components/home/ProductRange";
import ProductSec from "@/components/home/ProductSec";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Slider */}
      <section className="relative">
        <Slider />
      </section>

      <section>
        <StatsBar />
      </section>

      <section className="">
        <AboutSec />
      </section>
      <section>
        <ProductSec />
      </section>
      <section>
        <FormsWeDeal />
      </section>
      <section>
        <ProductRange/>
      </section>
      <section>
        <Manufacturing />
      </section>
      <section className="">
       
          <WhyChooseUs />
      </section>
      <section> 
        <ContactSec />
      </section>
    </main>
  );
}

