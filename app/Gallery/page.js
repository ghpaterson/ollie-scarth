"use client";

import ScrollToTop from "@/utils/scrollToTop";
import { motion as m, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/utils/motions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function Gallery() {
  return (
    <AnimatePresence mode="wait">
      <main>
        <NavBar />
        <m.section
          variants={pageTransition}
          initial="hidden"
          whileInView="show"
          className="pb-6"
        >
          <section className="flex justify-center">
            <h1 className="font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
              gallery<span className="text-red-500">.</span>
            </h1>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-12  rounded-xl gap-2 py-10 font-neueHaas px-10">
            {/* below is the template to make image appear on hover on md:screen NO hover-reveal on mobile  note the globals.css stylesheet*/}
            <div
              id="gallery-card"
              className="group md:col-span-4 bg-gray-200 h-60 hover:bg-landing-about bg-cover bg-no-repeat flex flex-col items-center justify-center text-7xl md:text-8xl"
            >
              <h1 className="group-hover:hidden mt-10">{`(*1)`}</h1>
              <h2 className=" text-honey text-3xl py-2 px-4 bg-blak opacity-80 backdrop-blur-xl rounded-xl">
                Image
              </h2>
            </div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
            <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
          </section>
        </m.section>
        <ScrollToTop />
        <Footer />
        <m.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        ></m.div>
        <m.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        ></m.div>
      </main>
    </AnimatePresence>
  );
}
