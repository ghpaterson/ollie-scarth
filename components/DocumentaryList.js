import DocInfiniteScroll from "@/utils/DocInfiniteScroll";
import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const documentaryData = [
  {
    id: 1,
    title: "OUR DEMENTIA CHOIR",
    imageUrl: "/images/home-perfect.webp",
  },
  { id: 2, title: "I AM A KILLER", imageUrl: "/images/picnic.JPG" },
  {
    id: 3,
    title: "LIVING WITH A SERIAL KILLER",
    imageUrl: "/images/home-perfect.webp",
  },
  {
    id: 4,
    title: "THE BODY IN THE SUITCASE",
    imageUrl: "/images/picnic.JPG",
  },
  {
    id: 5,
    title: "SPORT RELIEF: Famously Unfit",
    imageUrl: "/images/home-perfect.webp",
  },
  { id: 6, title: "HOMESTEAD RESCUE", imageUrl: "/images/picnic.JPG" },
];

export default function DocumentaryList() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  return (
    <main id="documentary-list-section">
      <div className="">
        <DocInfiniteScroll />
      </div>
      <div className=" w-full flex flex-col md:flex-row items-start md:justify-center gap-40 md md:items-center pb-10">
        <div id="documentary-list-image" className="">
          <div
            className=" border-2 border-blak"
            style={{
              backgroundImage: `url('${
                hoveredItem
                  ? documentaryData.find((item) => item.title === hoveredItem)
                      ?.imageUrl
                  : "/images/bicycle.png"
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
              : ""}
          </p>
        </div>

        <ul className="flex flex-col gap-4 md:gap-6 items-start md:items-end font-neueHaas text-md md:text-4xl text-blak">
          {documentaryData.map((item) => (
            <m.li
              variants={elementFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={item.id}
              className="group hover:text-shade/70 hover:cursor-pointer md:hover:-translate-x-8 transition duration-500 ease-in flex"
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
