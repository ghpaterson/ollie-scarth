"use client";

import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
        <h1 className=" flex-wrap">
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
        <h1 className="text-xl font-raleway">{card.title}</h1>
      </div>
      <div>
        <h2 className="text-lg font-raleway">{`(${card.channel})`}</h2>
      </div>
      <div className="flex justify-between font-raleway">
        <p>{card.desc}</p>
        <p>Link</p>
      </div>
      {/* <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[448px] h-[280px] rounded-[16px] mt-6 ml-6 absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-transform duration-300 group-hover:cursor-pointer"
      ></div>

      <div className="group relative inset-0 z-10 ">
        <p className=" p-2 text-sm md:text-2xl font-raleway group-hover:bg-blak opacity-70 text-bone group-hover:text-honey rounded-xl">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

const cards = [
  {
    url: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    title: "Body In The Suitcase",
    channel: "BBC1",
    desc: "This is a description of the television show",
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
    url: "../images/garden-revolution-press.jpeg",
    title: "Great Garden Revolution",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/6069511/pexels-photo-6069511.jpeg",
    title: "Living With A Serial Killer",
    id: 5,
  },
  // {
  //   url: "../images/garden-perfect-press.jpeg",
  //   title: "Your Garden Made Perfect",
  //   id: 6,
  // },
  // {
  //   url: "../images/home-perfect.webp",
  //   title: "Your Home Made Perfect",
  //   id: 7,
  // },
];
