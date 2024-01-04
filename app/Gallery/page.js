// "use client";

import ScrollToTop from "@/utils/scrollToTop";
import { motion as m, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/utils/motions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GalleryImages from "./galleryImages";

export default function Gallery() {
  return (
    <main>
      <NavBar />
      <section className="pb-6">
        <section className="flex justify-center">
          <h1 className="font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
            gallery<span className="text-red-500">.</span>
          </h1>
        </section>
        <GalleryImages />
      </section>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
