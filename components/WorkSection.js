import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

export default function WorkSection() {
  return (
    <m.main
      variants={elementFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-12 pt-10 pb-10 md:py-20 border-t-2 border-b-2 border-blak rounded-xl">
        <div className="col-span-12 flex flex-col items-start md:items-end">
          <ul className="flex flex-col gap-4 md:gap-6 items-start md:items-end font-raleway text-lg md:text-6xl text-blak">
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*1)`}</span> BODY IN
              THE SUITCASE{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*2)`}</span> TALES
              FROM THE KITCHEN GARDEN{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*3)`}</span> OUR
              DEMENTIA CHOIR{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*4)`}</span> GREAT
              GARDEN REVOLUTION{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*5)`}</span> LIVING
              WITH A SERIAL KILLER{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*6)`}</span> YOUR
              GARDEN MADE PERFECT{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
            <li className="group hover:text-shade/90 hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-8 transition duration-500 ease-in flex">
              <span className="text-xs md:text-3xl px-2">{`(*7)`}</span> YOUR
              HOME MADE PERFECT{" "}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </m.main>
  );
}
