import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { factEntData } from "@/Data/factEntData";

export default function FactEntList() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  return (
    <main id="factEnt-list-section" className="md:pb-20">
      <div className="flex justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-20">
        <Link href="/Work/factent" alt="link to fact ent credits page">
          <h1>
            fact ent<span className="text-red-500">.</span>
          </h1>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:px-10 md:items-center py-10 md:pb-10">
        <ul className="flex flex-col gap-6 md:gap-6 items-center md:items-start font-neueHaasMed text-sm md:text-3xl text-blak">
          {factEntData.map((item) => (
            <m.li
              variants={elementFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={item.id}
              className="group hover:text-red-500 hover:cursor-pointer md:hover:translate-x-8 transition duration-500 ease-in flex"
              onMouseEnter={() => handleMouseEnter(item.title)}
            >
              <span className="text-xs md:text-3xl px-2">{`(*${item.id})`}</span>
              <Link href={item.href}>{item.title}</Link>
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </m.li>
          ))}
        </ul>
        <div id="factEnt-list-image" className="">
          <div
            className="border-2 border-blak"
            style={{
              backgroundImage: `url('${
                hoveredItem
                  ? factEntData.find((item) => item.title === hoveredItem)
                      ?.imageUrl
                  : "/images/Jamie2.jpg"
              }')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "550px", // Set the width of the container
              height: "350px", // Set the height of the container
            }}
          ></div>
          <p className="text-blak text-lg font-neueHaas">
            {hoveredItem
              ? factEntData.find((item) => item.title === hoveredItem)?.title
              : "JAMIE & JIMMY'S FRIDAY NIGHT FEAST"}
          </p>
        </div>
      </div>
    </main>
  );
}
