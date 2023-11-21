import { motion as m } from "framer-motion";
import { heroImageFade } from "@/utils/motions";
import Image from "next/image";
import bicycle from "../public/images/bicycle.png";
import { IoFlowerOutline } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";
import ollieHeroWarp from "../public/images/ollieHeroWarp.svg";
import ollieHeroWarpSmall from "../public/images/ollieHeroWarpSmall.svg";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12 w-full  bg-sand rounded-t-3xl rounded-b-xl md:rounded-t-[100px] pt-4 pb-10 md:pt-10"
    >
      <div className="md:col-span-12 bg-transparent px-6 md:px-10 py-2 flex flex-col justify-start ">
        <m.div className="text-7xl md:text-[200px] font-latosce py-4 md:py-0 md:ml-12 text-bone absolute z-10">
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
        </m.div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-12">
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
              className="border-4 border-bone mt-36 md:-ml-6 md:mt-20"
            />
            <p className="text-bone text-xs py-2 flex justify-end md:px-10">
              - Peckham, South London
            </p>
          </m.div>
          <m.div
            variants={heroImageFade}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-end md:mt-72 text-bone gap-1 text-sm md:text-xl font-raleway md:w-[500px]"
          >
            <p>
              Ollie is a{" "}
              <span className="md:text-2xl font-script hover:text-green-900">
                Series Producer,{" "}
              </span>
              <span className="md:text-2xl font-script hover:text-green-900">
                Producer + Director
              </span>{" "}
              and{" "}
              <span className="md:text-2xl font-script hover:text-green-900">
                Edit Producer
              </span>{" "}
              based in South London. With over a decade of expertise,
              specialising in crafting elegant narratives within the realm of
              <span className="md:text-2xl font-script mx-2 flex gap-2">
                Documentaries{" "}
                <Link href="/#">
                  <BsArrowUpRightCircle />
                </Link>{" "}
                and
              </span>{" "}
              <span className="md:text-2xl font-script flex gap-2">
                Factual Entertainment{" "}
                <Link href="#">
                  <BsArrowUpRightCircle />
                </Link>
              </span>
            </p>

            <div className="text-7xl flex justify-end md:-mt-4">
              <IoFlowerOutline />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
