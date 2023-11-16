"use client";

import NavBar from "@/components/NavBar";
import { motion as m } from "framer-motion";
import { pageTransition } from "@/utils/motions";

export default function About() {
  return (
    <main>
      <NavBar />
      <m.section variants={pageTransition} initial="hidden" whileInView="show">
        <section>
          <h1 className="font-raleway text-3xl md:text-6xl py-6 md:py-10 md:px-6">
            {`ABOUT(*Ollie)`}
          </h1>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12  rounded-lg border-b-2 border-t-2 border-blak ">
            <div className="md:col-span-6 rounded-lg px-4 py-20 md:py-20 md:px-20  flex items-center">
              <p className="text-blak md:text-lg font-raleway font-bold">
                Hi! I'm Ollie, a director and producer with a chameleon-like
                approach to storytelling. I believe that the best way to create
                impactful content is to adapt to the unique vision and voice of
                each client. My goal is not to impose my own style, but rather
                to seamlessly blend my expertise with your project goals,
                crafting narratives that resonate with your target audience. My
                primary focus lies in video directing, production and editing.
                My versatility allows me to tackle a wide range of projects with
                confidence and expertise.
              </p>
            </div>
            <div className="md:col-span-6 rounded-lg px-10 flex items-center justify-center py-20 bg-landing-about bg-cover bg-no-repeat"></div>
          </div>
        </section>
      </m.section>
    </main>
  );
}
