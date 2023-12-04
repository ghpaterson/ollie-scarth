"use client";

import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";

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
      <div className="flex justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-20">
        <h1 className="">
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
    <div
      key={card.id}
      className="group h-[450px] w-[700px]  overflow-hidden font-neueHaas   p-4 flex flex-col "
    >
      <div
        className="w-[700] h-[300px] border-2 border-red-500 grayscale group-hover:grayscale-0"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="px-2">
        <div className="pt-2">
          <h1 className="text-2xl font-neueHaasMed uppercase  text-blak">
            {card.title}
            <span className="text-red-500">.</span>
          </h1>
        </div>
        <div>
          <h2 className="text-xl  text-blak">{card.channel}</h2>
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
  );
};

// Cards are filled with mostly dummy data! Needs to be filled correctly
const cards = [
  {
    url: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    title: "Your Home Made Perfect",
    channel: "BBC 2",
    desc: "Transforming problematic pads into heavenly homes. Cutting edge technology and innovative architects reveal the design dream ordinary houses could become.",
    href: "/Work/factent/your-home-made-perfect",
    id: 1,
  },
  {
    url: "../images/IAmAKiller.JPG",
    title: "I am a Killer",
    channel: "Netflix (UK), Crime and Investigation(US)",
    desc: " Death row inmates convicted of capital murder give firsthand accounts of their crimes in this documentary series",
    href: "/Work/documentary/i-am-a-killer",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/6193908/pexels-photo-6193908.jpeg",
    title: "Our Dementia Choir",
    channel: "BBC 1",
    desc: "The power of music. Actor Vicky McClure returns home to Nottingham to share a poignant, uplifting journey - proving people living with dementia can achieve truly remarkable things",
    href: "/Work/documentary/our-dementia-choir",
    id: 3,
  },
  {
    url: "../images/garden-revolution-press.jpeg",
    title: "Jamie & Jimmy's Friday Night Feast",
    channel: "Channel 4",
    desc: "Jamie Oliver and Jimmy Doherty join forces at their end-of-the-pier caff to make top feasts for the weekend",
    href: "/Work/factent/jamie-and-jimmys-friday-night-feast",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/6069511/pexels-photo-6069511.jpeg",
    title: "Marcus Waring: Tales from a Kitchen Garden",
    channel: "BBC 1",
    desc: "From field to fork. Restaurateur Marcus teams up with top British producers, farmers and gardeners who inspire him to expand his market garden and create delicious dishes",
    href: "/Work/factent/marcus-wareing-tales-from-a-kitchen-garden",
    id: 5,
  },
];
