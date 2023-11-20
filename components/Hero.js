import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import Image from "next/image";
import JHDunes from "../public/images/JHDunes.jpg";
import picnic from "../public/images/picnic.JPG";
import downArrow from "../public/images/downArrow.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12 w-full md:h-screen bg-sand rounded-t-3xl md:rounded-t-[100px] pt-10 pb-10 md:pt-20"
    >
      <div className="md:col-span-12 bg-transparent px-6 md:px-10 py-6 flex flex-col justify-start ">
        <m.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="text-7xl md:text-[200px] font-latosce py-12 md:py-6 text-bone absolute z-10"
        >
          <div className="flex flex-col md:flex md:flex-row md:gap-12 ml-2 md:ml-0">
            <h1>OLLIE</h1>
            <h2>SCARTH</h2>
          </div>
          {/* <h3>SAUNDERS</h3> */}
        </m.div>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-6">
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 2, ease: "easeIn", delay: 0.25 }}
            className="z-0"
          >
            <Image
              id="dune-image"
              src={JHDunes}
              width={350}
              alt="Image of sand dunes"
              className="border-4 border-bone md:ml-20"
            />
          </m.div>
          <m.div
            variants={heroImageFade}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center md:mt-40 md:-ml-20 text-bone gap-2 text-xl font-raleway"
          >
            <p>SERIES PRODUCER</p>
            <p>PRODUCER // DIRECTOR</p>
            <p>EDIT PRODUCER</p>
          </m.div>
          <m.div
            variants={heroImageFade}
            initial="hidden"
            animate="show"
            id="down-arrow"
            className="flex items-center mt-40 "
          >
            <Image src={downArrow} width={30} alt="down-arrow" />
          </m.div>
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, ease: "easeIn", delay: 0.5 }}
            id="picnic-image"
            className="flex items-end md:mt-60"
          >
            <Image
              src={picnic}
              width={350}
              alt="picnic"
              className="border-4 border-bone"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
