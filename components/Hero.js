import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import Image from "next/image";
import JHDunes from "../public/images/JHDunes.jpg";
import picnic from "../public/images/picnic.JPG";
import bicycle from "../public/images/bicycle.png";
import { IoFlowerOutline } from "react-icons/io5";
export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12 w-full  bg-sand rounded-t-3xl rounded-b-xl md:rounded-t-[100px] pt-10 pb-10 md:pt-10"
    >
      <div className="md:col-span-12 bg-transparent px-6 md:px-10 py-6 flex flex-col justify-start ">
        <m.div
          // initial={{ x: "100%" }}
          // animate={{ x: "0%" }}
          // transition={{ duration: 2, ease: "easeIn" }}
          className="text-7xl md:text-[200px] font-latosce py-12 md:py-0 text-bone absolute z-10"
        >
          <div className="flex flex-col md:flex md:flex-row md:gap-12 ml-2 md:ml-0">
            <h1>OLLIE</h1>
            <h2>SCARTH</h2>
          </div>
          {/* <h3>SAUNDERS</h3> */}
        </m.div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-20">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn", delay: 0.25 }}
            className="z-0"
          >
            <Image
              id="dune-image"
              src={bicycle}
              width={700}
              alt="Image of sand dunes"
              className="border-4 border-bone mt-36 md:-ml-6 md:mt-14"
            />
            <p className="text-bone text-xs py-2 flex justify-end md:px-10">
              - Peckham, South London
            </p>
          </m.div>
          <m.div
            variants={heroImageFade}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center md:mt-40 text-bone gap-1 text-xl font-raleway"
          >
            <p>
              Ollie is a{" "}
              <span className="md:before:text-2xl font-script">
                Series Producer, Producer{" "}
              </span>
            </p>
            <p>
              <span className="md:text-2xl font-script">+ Director </span>and{" "}
              <span className="md:text-2xl font-script"> Edit Producer</span>{" "}
              based in
            </p>
            <p>South London. With over a decade of</p>
            <p>expertise, specialising in crafting elegant</p>
            <p>narratives within the realms of Documentaries</p>
            <p>and Factual Entertainment</p>
            <div className="text-7xl flex justify-end pt-10">
              <IoFlowerOutline />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
