"use client";

import CopyEmailAddress from "@/utils/CopyEmailAddress";
import Link from "next/link";

import { motion as m, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/utils/motions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function Contact() {
  const linkedinURL =
    "https://www.linkedin.com/in/oliver-scarth-saunders-619aab1b0/";

  const instaURL = "https://www.instagram.com/olliescarth/";

  return (
    <AnimatePresence mode="wait">
      <main>
        <NavBar />
        <m.section
          variants={pageTransition}
          initial="hidden"
          whileInView="show"
        >
          <div className="md:mt-10 h grid grid-cols-1 md:grid-cols-12 md:px-10 ">
            <div className="md:col-span-6 text-blak rounded-lg px-4 py-10 md:py-32 md:px-20  flex flex-col items-center md:items-start border-blak">
              <h1 className=" text-blak text-3xl md:text-6xl font-neueHaasMed uppercase">
                Get in touch<span className="text-red-500">.</span>
              </h1>

              <div className="flex flex-col gap-4 font-neueHaas py-10 ">
                <CopyEmailAddress />
                <p className=" text-2xl">{`(+44) 7853341968`}</p>
                <Link href={linkedinURL} target="_blank">
                  <p className="text-2xl">Linkedin</p>
                </Link>
                <Link href={instaURL} target="_blank">
                  <p className="text-2xl">Instagram</p>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 rounded-lg px-10 bg-OllieMirror bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-32 md:py-20 text-blak"></div>
          </div>
        </m.section>
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
