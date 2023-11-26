"use client";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ScrollToTop from "@/utils/scrollToTop";
import DocumentaryList from "@/components/DocumentaryList";
import FactEntList from "@/components/FactEntList";
import AboutSection from "@/components/AboutSection";
import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import { elementFade } from "@/utils/motions";
import Testimonials from "@/components/Testimonials";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <m.main variants={heroImageFade} initial="hidden" whileInView="show">
        <Hero />
        <m.section
          variants={elementFade}
          initial="hidden"
          whileInView="show"
          id="work-section"
          viewport={{ once: true }}
        >
          <Highlights />
          <DocumentaryList />
          <FactEntList />

          <AboutSection />
          <Testimonials />
          <ScrollToTop />
        </m.section>
      </m.main>
    </>
  );
}
