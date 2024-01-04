"use client";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Work() {
  return (
    <AnimatePresence mode="wait">
      <main>
        <NavBar />
        <section>
          <h1 className="invisible md:visible flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
            work<span className="text-red-500">.</span>
          </h1>
          <section className="flex flex-col items-center justify-center gap-6 font-neueHaasMed  text-blak  text-4xl md:text-9xl uppercase mt-32 md:mt-0 md:py-20">
            <Link href="/Work/Documentary" alt="link to documentary credits">
              <h2>
                documentary<span className="text-red-500">.</span>
              </h2>
            </Link>
            <Link href="/Work/FactEnt" alt="link to fact ent credits">
              <h2>
                fact ent<span className="text-red-500">.</span>
              </h2>
            </Link>
          </section>
        </section>

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
