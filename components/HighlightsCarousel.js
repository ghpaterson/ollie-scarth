"use client";

import Link from "next/link";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { highlightsData } from "@/Data/highlightsData";

const HighlightsCard = ({ title, channel, desc, href, style, url }) => (
  <div className="group h-[480px] w-[700px] overflow-hidden font-neueHaas p-4 flex flex-col">
    <Link href={href}>
      <div
        className="w-[700] h-[300px] rounded-lg"
        style={{
          backgroundImage: `url('${url}')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
    </Link>
    <div className="px-2">
      <div className="pt-2">
        <Link href={href}>
          <h1 className="text-2xl font-neueHaasMed uppercase text-blak">
            {title}
            <span className="text-red-500">.</span>
          </h1>
        </Link>
      </div>
      <div>
        <h2 className={style}>{channel}</h2>
      </div>
      <div className="flex justify-between gap-10 text-blak text-base">
        <p>{desc}</p>
        <div className="text-5xl flex justify-end items-end">
          <Link href={href}>
            <BsArrowUpRightCircle />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function HighlightsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === highlightsData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? highlightsData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <>
      <section id="highlights__carousel">
        <div className="flex justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-8">
          <h1>
            Highlights<span className="text-red-500">.</span>
          </h1>
        </div>
        <div className="relative group">
          <BsArrowLeftCircle
            onClick={handlePrevSlide}
            className="hidden absolute left-0 ml-60 m-auto text-5xl mt-40 cursor-pointer text-blak z-20 group-hover:block"
          />
          <BsArrowRightCircle
            onClick={handleNextSlide}
            className="hidden absolute right-0 mr-60 m-auto text-5xl mt-40 cursor-pointer text-blak z-20 group-hover:block "
          />
          <div className="w-full h-[70vh] flex overflow-hidden relative m-auto">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative z-10 w-full h-full"
            >
              {highlightsData.map((data, index) => {
                if (index === currentSlide) {
                  return (
                    <div
                      key={data.key}
                      className="absolute inset-0 w-screen h-[450px] flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform"
                    >
                      <HighlightsCard {...data} />
                    </div>
                  );
                }
              })}
            </Swipe>
          </div>

          <div className="relative flex justify-center p-2">
            {highlightsData.map((_, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-2 w-2 bg-blak rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
