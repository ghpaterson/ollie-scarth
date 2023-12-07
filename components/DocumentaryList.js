import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { documentaryData } from "@/Data/documentaryData";

export default function DocumentaryList() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  return (
    <main id="documentary-list-section" className="mt-10 md:mt-0">
      <div className="flex justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-20">
        <Link href="/Work/documentary" alt="link to documentary credits">
          <h1>
            documentary<span className="text-red-500">.</span>
          </h1>
        </Link>
      </div>
      <div className=" w-full flex flex-col md:flex-row items-center md:justify-between md:items-center md:px-10 py-10 md:pb-10">
        <div id="documentary-list-image" className="">
          <div
            className=" border-2 border-blak"
            style={{
              backgroundImage: `url('${
                hoveredItem
                  ? documentaryData.find((item) => item.title === hoveredItem)
                      ?.imageUrl
                  : "/images/dementia1.jpg"
              }')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "550px", // Set the width of the container
              height: "350px", // Set the height of the container
            }}
          ></div>
          <p className="text-blak text-lg font-neueHaas">
            {hoveredItem
              ? documentaryData.find((item) => item.title === hoveredItem)
                  ?.title
              : "OUR DOCUMENTARY CHOIR"}
          </p>
        </div>

        <ul className="flex flex-col gap-4 md:gap-6 items-center md:items-end font-neueHaasMed text-md md:text-3xl text-blak">
          {documentaryData.map((item) => (
            <m.li
              variants={elementFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={item.id}
              className="group hover:text-red-500 hover:cursor-pointer md:hover:-translate-x-8 transition duration-500 ease-in flex"
              onMouseEnter={() => handleMouseEnter(item.title)}
              // onMouseLeave={handleMouseLeave}
            >
              <span
                // ref={docList}
                className="text-xs md:text-3xl px-2"
              >{`(*${item.id})`}</span>
              {item.title}
              <span className="invisible group-hover:visible px-2">
                <GoArrowUpRight />
              </span>
            </m.li>
          ))}
        </ul>
      </div>
    </main>
  );
}
