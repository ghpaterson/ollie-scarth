import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import Image from "next/image";
import bicycle from "../public/images/bicycle.png";
import { IoFlowerOutline } from "react-icons/io5";
import ollieHeroWarp from "../public/images/ollieHeroWarp.svg";
import ollieHeroWarpSmall from "../public/images/ollieHeroWarpSmall.svg";
export default function Hero() {
  const handleScrollToDocumentary = () => {
    const target = document.getElementById("documentary-list-section");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToFactEnt = () => {
    const target = document.getElementById("factEnt-list-section");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12 w-full  bg-sand rounded-t-3xl rounded-b-xl md:rounded-t-[100px] pt-4 pb-10 md:pt-10"
    >
      <div className="md:col-span-12 bg-transparent px-6 md:px-10 py-2 flex flex-col justify-start ">
        <div className="text-7xl md:text-[200px] font-latosce py-4 md:py-0 md:ml-12 text-bone absolute z-10">
          {/* Hero Text For Large Screen */}
          <Image
            id="warped-hero"
            src={ollieHeroWarp}
            width={1200}
            alt="Ollie Scarth"
          />
          {/* Hero Text for Mobile */}
          <Image
            id="warped-hero-small"
            src={ollieHeroWarpSmall}
            width={250}
            alt="Ollie Scarth"
            className="md:hidden ml-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-18">
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="z-0"
          >
            <Image
              id="dune-image"
              src={bicycle}
              width={700}
              alt="Image of sand dunes"
              className="border-4 border-bone mt-36 md:-ml-16 md:mt-20"
            />
            <p className="text-bone font-neueHaas text-xs py-2 flex justify-end md:px-16">
              - Peckham, South London
            </p>
          </m.div>
          <div className="flex flex-col justify-end md:mt-72 text-bone gap-6 text-sm md:text-lg md:w-[500px]">
            <div className="flex gap-8 text-xl md:pr-2 font-neueHaasMed">
              <p>Series Director</p>
              <p>Producer // Director</p>
              <p>Edit Producer</p>
            </div>
            <p className="pr-6 font-neueHaas">
              Based in South London, with over a decade of expertise,
              specialising in crafting elegant narratives within the realms of
              Documentaries and Factual Entertainment
            </p>
            <div>
              <h1 onClick={handleScrollToDocumentary}>Documentary</h1>
              <h1 onClick={handleScrollToFactEnt}>Factual Entertainment</h1>
            </div>

            <div className="text-7xl flex justify-end md:-mt-4 md:-mr-20">
              <IoFlowerOutline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
