import { motion as m } from "framer-motion";
import { pageTransition } from "@/utils/motions";

export default function Hero() {
  return (
    <m.section
      variants={pageTransition}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12"
    >
      <div className="md:col-span-10 bg-transparent px-6 md:px-10 py-6">
        <div className="text-6xl md:text-[150px] font-raleway py-12 md:py-6 text-bone">
          <h1>OLLIE</h1>
          <h2>SCARTH-</h2>
          <h3>SAUNDERS</h3>
        </div>
        <m.div className="flex flex-col items-start md:flex-row gap-2 md:gap-8 text-sm md:text-xl text-bone font-raleway">
          <p className="border-b-2 border-honey rounded-full py-1 px-2">
            SERIES DIRECTOR
          </p>
          <p className="border-b-2 border-honey rounded-full py-1 px-2">
            PRODUCER <span className="text-honey">//</span> DIRECTOR
          </p>
          <p className="border-b-2 border-honey rounded-full py-1 px-2">
            EDIT PRODUCER
          </p>
        </m.div>
      </div>
      <div className="md:col-span-2 bg-transparent flex justify-end items-center">
        <div className="bg-bone rounded-l-xl px-4 py-10 invisible md:visible">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl font-raleway font-extrabold">{`O.S-(*S)`}</p>
            <p className="font-raleway">London, UK</p>
          </div>
        </div>
      </div>
    </m.section>
  );
}
