"use client";

import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import DummyText from "@/utils/textPassages";

export default function WorkCarousel() {
  return (
    <>
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
      className="relative h-[300vh] bg-bone pb-20 border-t-2 border-b-2 rounded-xl border-blak"
    >
      <div className="flex justify-start gap-6 py-10 px-10 text-blak font-raleway text-3xl md:text-6xl">
        <h1>{`WORK (*5)`}</h1>
      </div>
      <div className="sticky top-0 flex h-96 md:h-[600px] items-center overflow-hidden pt-40 -mt-32 md:-mt-40">
        <m.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </m.div>
      </div>
      <div className="flex flex-col items-center py-2 px-6 text-shade/10 font-raleway md:text-2xl invisible md:visible">
        <DummyText />
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[200px] w-[300px] md:h-[400px] md:w-[550px] overflow-hidden bg-shade rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-sm md:text-2xl font-raleway  text-bone">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    title: "Body In The Suitcase",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/4916163/pexels-photo-4916163.jpeg",
    title: "Tales From The Kitchen Garden",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/6193908/pexels-photo-6193908.jpeg",
    title: "Our Dementia Choir",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/1446975/pexels-photo-1446975.jpeg",
    title: "Great Garden Revolution",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/6069511/pexels-photo-6069511.jpeg",
    title: "Living With A Serial Killer",
    id: 4,
  },
];
