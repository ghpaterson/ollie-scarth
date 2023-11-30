// "use client";

import NavBar from "@/components/NavBar";
// import { motion as m, AnimatePresence } from "framer-motion";
import WorkCard from "@/components/WorkCard";

export default function FactEnt() {
  return (
    <main>
      <NavBar />
      <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
        fact ent<span className="text-red-500">.</span>
      </h1>
      {/* four WorkCard Components at the moment but will be one component mapping over all the data to display however many cards required  */}
      <section className="grid grid-cols-2 px-10 gap-4 py-6"></section>
    </main>
  );
}
