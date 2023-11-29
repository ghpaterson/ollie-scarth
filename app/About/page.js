"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/utils/motions";
import ScrollToTop from "@/utils/scrollToTop";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <AnimatePresence mode="wait">
      <main>
        <NavBar />
        <m.section
          variants={pageTransition}
          initial="hidden"
          whileInView="show"
        >
          <section>
            <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
              ABOUT Ollie<span className="text-red-500">.</span>
            </h1>
          </section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 font-neueHaas">
              <div className="md:col-span-6 rounded-lg px-4 py-20 md:py-20 md:px-20  flex items-center">
                <p className="text-blak md:text-2xl font-bold leading-loose">
                  Hi! I'm Ollie, a director and producer with a chameleon-like
                  approach to storytelling. I believe that the best way to
                  create impactful content is to adapt to the unique vision and
                  voice of each client. My goal is not to impose my own style,
                  but rather to seamlessly blend my expertise with your project
                  goals, crafting narratives that resonate with your target
                  audience. My primary focus lies in video directing, production
                  and editing. My versatility allows me to tackle a wide range
                  of projects with confidence and expertise
                  <span className="text-red-500">.</span>
                </p>
              </div>
              <div className="md:col-span-6 rounded-lg px-10 flex items-center justify-center py-20 bg-landing-about bg-cover bg-no-repeat"></div>
            </div>
          </section>
        </m.section>

        <ScrollToTop />
      </main>
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
    </AnimatePresence>
  );
}
