"use client";

import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function WorkCarousel() {
  return (
    <>
      <section>
        <div className="flex justify-start mb-10 ">
          <p className="text-xl md:text-5xl border border-black rounded-full py-1 px-4">
            WORK
          </p>
        </div>
      </section>
      <section id="scrolling-section">
        <div className="">
          <HorizontalScrollCarousel />
        </div>
      </section>
    </>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-100 pb-20"
    >
      <div className="sticky top-0 flex h-96 md:h-[500px] items-center overflow-hidden pt-40">
        <m.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </m.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[200px] w-[300px] md:h-[400px] md:w-[550px] overflow-hidden bg-gray-800"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-md md:text-2xl  text-white">{card.title}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Body In The Suitcase",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Tales From The Kitchen Garden",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Our Dementia Choir",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Great Garden Revolution",
    id: 4,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Living With A Serial Killer",
    id: 4,
  },
];
