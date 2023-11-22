import FactEntInfiniteScroll from "@/utils/FactEntInfiniteScroll";
import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const factEntData = [
  { id: 1, title: "JAMIE & JIMMY'S FRIDAY NIGHT FEAST" },
  { id: 2, title: "MARCUS WARING: Tales from a Kitchen Garden" },
  { id: 3, title: "YOUR HOME MADE PERFECT" },
  { id: 4, title: "YOUR GARDEN MADE PERFECT" },
  { id: 5, title: "BEAR GRYLLS: The Island" },
];

export default function FactEntList() {
  return (
    <main className="md:pb-10">
      <div className="grid grid-cols-12 pb-12">
        <FactEntInfiniteScroll />
        {/* <div
          id="work-sub-heading"
          className="flex justify-start pb-6 px-4 text-blak font-raleway text-3xl"
        > */}
        {/* <h1>{`WORK(*${factEntData.length})`}</h1> */}
      </div>
      <div className="col-span-12 w-full flex flex-col items-start py-20">
        <ul className="flex flex-col gap-4 md:gap-6 items-start font-neueHaas text-md md:text-5xl text-blak">
          {factEntData.map((item) => (
            <m.li
              variants={elementFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={item.id}
              className="group hover:text-shade/90 hover:cursor-pointer md:hover:translate-x-8 transition duration-500 ease-in flex"
            >
              <span className="text-xs md:text-3xl px-2">{`(*${item.id})`}</span>
              {item.title}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </m.li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </main>
  );
}
