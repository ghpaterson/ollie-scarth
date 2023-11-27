"use client";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ScrollToTop from "@/utils/scrollToTop";
import DocumentaryList from "@/components/DocumentaryList";
import FactEntList from "@/components/FactEntList";
import AboutSection from "@/components/AboutSection";
import { motion as m } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import Loader from "@/components/Loader";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

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
      <main>
        {loaderFinished ? (
          <>
            <Hero />
            <Highlights />
            <DocumentaryList />
            <FactEntList />
            <AboutSection />
            <Testimonials />
            <ScrollToTop />
          </>
        ) : (
          <Loader timeline={timeline} />
        )}
      </main>
    </>
  );
}
