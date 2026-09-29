import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CatalogBanner from "@/components/sections/CatalogBanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Solutions from "@/components/sections/Solutions";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import dynamic from "next/dynamic";

// Memuat komponen berat / yang berada di bawah layar secara dinamis (Lazy Load)
// untuk meningkatkan performa awal loading website (FCP & TTI).
const Technologies = dynamic(() => import("@/components/sections/Technologies"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CatalogBanner />
        <WhyChooseUs />
        <Solutions />
        <Portfolio />
        <Process />
        <Technologies />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
