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
      <main className="scroll-smooth">
        <section
          id="hero-navbar"
          className="md:h-screen bg-hero-image bg-cover "
        >
          <NavBar />
          <Hero />
        </section>
        <section id="work-section" className="">
          <div className="">
            <WorkCarousel />
          </div>
          <WorkSection />
        </section>
        <section id="about-section" className="md:pb-10">
          <AboutSection />
        </section>
        <section id="footer" className="py-10">
          <Footer />
        </section>
      </main>
    </>
  );
}
