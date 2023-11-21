import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const documentaryData = [
  { id: 1, title: "OUR DEMENTIA CHOIR" },
  { id: 2, title: "I AM A KILLER" },
  { id: 3, title: "LIVING WITH A SERIAL KILLER" },
  { id: 4, title: "THE BODY IN THE SUITCASE" },
  { id: 5, title: "SPORT RELIEF: Famously Unfit" },
  { id: 6, title: "HOMESTEAD RESCUE" },
];

export default function DocumentaryList() {
  return (
    <m.main
      variants={elementFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-12 pt-10 pb-10 md:py-20">
        <div
          id="work-sub-heading"
          className="flex justify-start pb-6 px-4 text-blak font-raleway text-3xl"
        >
          <h1>{`WORK(*${documentaryData.length})`}</h1>
        </div>
        <div className="col-span-12 w-full flex flex-col items-start md:items-end">
          <ul className="flex flex-col gap-4 md:gap-6 items-start md:items-end font-raleway text-md md:text-6xl text-blak">
            {documentaryData.map((item) => (
              <li
                key={item.id}
                className="group hover:text-shade/90 hover:cursor-pointer md:hover:-translate-x-8 transition duration-500 ease-in flex"
              >
                <span className="text-xs md:text-3xl px-2">{`(*${item.id})`}</span>
                {item.title}
                <span className="invisible group-hover:visible px-2">
                  <GoArrowUpRight />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </m.main>
  );
}
