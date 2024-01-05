"use client";

import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

import Link from "next/link";
import { cards } from "@/Data/highlightsData";

export default function Highlights() {
  return (
    <>
      <section id="scrolling-section">
        <HorizontalScrollCarousel />
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
    <section ref={targetRef} className="relative h-[300vh] rounded-xl mt-4">
      <div className="flex justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-10">
        <h1>
          Highlights<span className="text-red-500">.</span>
        </h1>
      </div>
      <div className="sticky top-0 flex h-96 md:h-[650px] items-center overflow-hidden pt-40 -mt-32 md:-mt-52">
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
    <>
      <div
        key={card.id}
        className="group h-[450px] w-[700px]  overflow-hidden font-neueHaas   p-4 flex flex-col "
      >
        <Link href={card.href}>
          <div
            className="w-[700] h-[300px] border-2 border-blak grayscale group-hover:grayscale-0"
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </Link>
        <div className="px-2">
          <div className="pt-2">
            <Link href={card.href}>
              <h1 className="text-2xl font-neueHaasMed uppercase  text-blak">
                {card.title}
                <span className="text-red-500">.</span>
              </h1>
            </Link>
          </div>
          <div>
            <h2 className={card.style}>{card.channel}</h2>
          </div>
          <div className="flex justify-between gap-10 text-blak">
            <p>{card.desc}</p>
            <div className="text-5xl flex justify-end items-end">
              <Link href={card.href}>
                <BsArrowUpRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
