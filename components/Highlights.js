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
    <section ref={targetRef} className="relative h-[300vh] bg-bone pb-20">
      <div className="flex justify-center gap-6 py-10 px-10 text-blak font-raleway text-3xl md:text-6xl">
        <h1 className=" flex-wrap font-ralewayLight">
          Highlights of some of Ollie's favourite projects he's worked on
        </h1>
      </div>
      <div className="sticky top-0 flex h-96 md:h-[650px] items-center overflow-hidden pt-40 -mt-32 md:-mt-40">
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
      className="group h-[450px] w-[700px]  overflow-hidden bg-sand rounded-[24px] p-4 flex flex-col "
    >
      <div
        className="w-[700] h-[300px] rounded-[16px] border-2 border-sand grayscale group-hover:grayscale-0"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="pt-2">
        <h1 className="text-xl font-raleway text-blak">{card.title}</h1>
      </div>
      <div>
        <h2 className="text-lg font-raleway text-gray-700">{`(${card.channel})`}</h2>
      </div>
      <div className="flex justify-between font-raleway text-blak">
        <p>{card.desc}</p>
        <div className="text-2xl">
          <Link href={card.href}>
            <BsArrowUpRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Cards are filled with mostly dummy data! Needs to be filled correctly
const cards = [
  {
    url: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    title: "Body In The Suitcase",
    channel: "BBC1",
    desc: "This is a description of the television show",
    href: "/About",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/4916163/pexels-photo-4916163.jpeg",
    title: "Tales From The Kitchen Garden",
    channel: "CNN",
    desc: "This is another description of the television show",
    href: "/About",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/6193908/pexels-photo-6193908.jpeg",
    title: "Our Dementia Choir",
    channel: "Channel 4 News",
    desc: "This is yet another description of the television show",
    href: "/About",
    id: 3,
  },
  {
    url: "../images/garden-revolution-press.jpeg",
    title: "Great Garden Revolution",
    channel: "The Guardian",
    desc: "This is a description of the newspaper article",
    href: "/About",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/6069511/pexels-photo-6069511.jpeg",
    title: "Living With A Serial Killer",
    channel: "Sky Arts",
    desc: "This is a description of the television show",
    href: "/About",
    id: 5,
  },
];
