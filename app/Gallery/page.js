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
          <h1 className="font-raleway text-3xl md:text-6xl py-6 md:py-10 md:px-6">{`GALLERY(*8)`}</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-b-2 border-blak rounded-xl gap-2 py-10 font-raleway">
          {/* below is the template to make image appear on hover */}
          <div className="group md:col-span-4 bg-gray-200 h-60 hover:bg-landing-about bg-cover bg-no-repeat grid place-content-center md:text-4xl">
            <h1 className="group-hover:hidden">{`(*1)`}</h1>
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
