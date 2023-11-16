"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import WorkCarousel from "@/components/WorkCarousel";
import ScrollToTop from "@/utils/scrollToTop";

import Loading from "@/components/Loading";
import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import { elementFade } from "@/utils/motions";

export default function Home() {
  //TRYING TO FIGURE OUT LOADING STATE TO ONLY RENDER ON FIRST VISIT TO WEBPAGE
  // const [isFirstLoad, setIsFirstLoad] = useState(true);

  // useEffect(() => {
  //   if (isFirstLoad) {
  //     setTimeout(() => {
  //       setIsFirstLoad(false); // Update the state after the delay
  //       sessionStorage.setItem("isFirstLoad", false);
  //     }, 3000);
  //   }
  // }, []);

  // if (isFirstLoad) {
  //   return <Loading />; // Render the loading component on initial load
  // }
  return (
    <>
      <m.main variants={heroImageFade} initial="hidden" whileInView="show">
        <section
          id="hero-navbar"
          className="md:h-screen bg-hero-image bg-cover"
        >
          <NavBar />
          <Hero />
        </section>
        <m.section
          variants={elementFade}
          initial="hidden"
          whileInView="show"
          id="work-section"
        >
          <div className="">
            <WorkCarousel />
          </div>
          <WorkSection />
        </m.section>
        <m.section
          variants={elementFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          id="about-section"
          className="md:pb-10"
        >
          <AboutSection />
        </m.section>
        <ScrollToTop />
      </m.main>
    </>
  );
}
