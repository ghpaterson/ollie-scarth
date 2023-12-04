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
          <div className="mt-10 h grid grid-cols-1 md:grid-cols-12 px-10 ">
            <div className="md:col-span-6 text-blak rounded-lg px-4 py-10 md:py-32 md:px-20  flex flex-col items-start border-blak">
              <h1 className="text-blak text-2xl md:text-6xl font-neueHaasMed uppercase">
                Get in touch<span className="text-red-500">.</span>
              </h1>
              <p className="text-2xl py-6 font-neueHaas">
                Copy my email address or contact me through one of my social
                accounts
              </p>
              <div className="flex flex-col gap-2 font-neueHaas">
                <CopyEmailAddress />
                <p className=" md:text-xl">07853341968</p>
                <Link href={linkedinURL} target="_blank">
                  <p className=" md:text-xl">Linkedin</p>
                </Link>
                <Link href={instaURL} target="_blank">
                  <p className=" md:text-xl">Instagram</p>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 rounded-lg px-10 bg-OllieMirror bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-20 text-blak"></div>
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
