import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WorkCarousel from "@/components/WorkCarousel";

export default function Home() {
  return (
    <>
      <section id="hero-navbar" className="md:h-screen bg-gray-200">
        <NavBar />
        <Hero />
      </section>
      <section id="work-section" className="py-10">
        <div className="">
          <WorkCarousel />
        </div>
        <WorkSection />
      </section>
      <section id="about-section" className="md:mt-10">
        <AboutSection />
      </section>
      <section id="footer" className="py-6">
        <Footer />
      </section>
    </>
  );
}
