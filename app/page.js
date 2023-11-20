"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import WorkCarousel from "@/components/WorkCarousel";
import ScrollToTop from "@/utils/scrollToTop";

import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import { elementFade } from "@/utils/motions";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <m.main variants={heroImageFade} initial="hidden" whileInView="show">
        {/* <NavBar /> */}
        <Hero />
        <m.section
          variants={elementFade}
          initial="hidden"
          whileInView="show"
          id="work-section"
        >
          <WorkCarousel />
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
        <Testimonials />
        <ScrollToTop />
      </m.main>
    </>
  );
}
