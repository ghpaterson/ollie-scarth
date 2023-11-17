"use client";

import NavBar from "@/components/NavBar";
import ScrollToTop from "@/utils/scrollToTop";
import { motion as m } from "framer-motion";
import { pageTransition } from "@/utils/motions";
export default function Gallery() {
  return (
    <main>
      <NavBar />
      <m.section
        variants={pageTransition}
        initial="hidden"
        whileInView="show"
        className="pb-6"
      >
        <section>
          <h1 className="font-raleway text-3xl md:text-6xl py-6 md:py-10 md:px-6">{`GALLERY(*9)`}</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-b-2 border-blak rounded-xl gap-2 py-10 font-raleway">
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
    </main>
  );
}
