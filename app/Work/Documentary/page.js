// "use client";

import NavBar from "@/components/NavBar";
import { motion as m, AnimatePresence } from "framer-motion";
import WorkCard from "@/components/WorkCard";

export default function Documentary() {
  return (
    // <AnimatePresence mode="wait">
    <main>
      <NavBar />
      <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
        documentary<span className="text-red-500">.</span>
      </h1>
      {/* four WorkCard Components at the moment but will be one component mapping over all the data to display however many cards required  */}
      <section className="grid grid-cols-12 px-10 gap-4 py-6">
        <div className="col-span-6 bg-gray-200">
          <WorkCard />
        </div>
      </section>
    </main>
    //   {/* Transition slide animation */}
    //   // <m.div
    //   //   className="slide-in"
    //   //   initial={{ scaleY: 0 }}
    //   //   animate={{ scaleY: 0 }}
    //   //   exit={{ scaleY: 1 }}
    //   //   transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    //   // ></m.div>
    //   // <m.div
    //   //   className="slide-out"
    //   //   initial={{ scaleY: 1 }}
    //   //   animate={{ scaleY: 0 }}
    //   //   exit={{ scaleY: 0 }}
    //   //   transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    //   // ></m.div>
    // // </AnimatePresence>
  );
}
