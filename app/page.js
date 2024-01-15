"use client";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ScrollToTop from "@/utils/scrollToTop";
import DocumentaryList from "@/components/DocumentaryList";
import FactEntList from "@/components/FactEntList";
import AboutSection from "@/components/AboutSection";
import { motion as m, AnimatePresence } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import Loader from "@/components/Loader";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Footer from "@/components/Footer";
import HighlightsCarousel from "@/components/HighlightsCarousel";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

    if (hasLoadedBefore) {
      // If the page has been loaded before, set loaderFinished to true
      setLoaderFinished(true);
    } else {
      // If it's the first load, set up the loader animation
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setLoaderFinished(true);
            sessionStorage.setItem("hasLoadedBefore", "true");
          },
        });

        setTimeline(tl);
      });

      return () => context.revert();
    }
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <main>
          {loaderFinished ? (
            <>
              <Hero />

              {/* Slide in transition for hero hage */}
              <m.div
                className="slide-in-hero"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              ></m.div>
              <m.div
                className="slide-out-hero"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              ></m.div>
              <Highlights />
              {/* <HighlightsCarousel /> */}
              <DocumentaryList />
              <FactEntList />
              <AboutSection />
              <Testimonials />
              <ScrollToTop />
              <Footer />
            </>
          ) : (
            <Loader timeline={timeline} />
          )}
        </main>
      </AnimatePresence>
    </>
  );
}
