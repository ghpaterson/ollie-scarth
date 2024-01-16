"use client";

import { useState } from "react";
import HighlightsCard from "./HighlightsCard";
import { highlightsData } from "@/Data/highlightsData";
import { motion as m } from "framer-motion";

export default function HighlightsCarousel() {
  const [activeCard, setActiveCard] = useState(0);

  const handleScrollLeft = () => {
    setActiveCard((prevCard) => (prevCard > 0 ? prevCard - 1 : 0));
  };

  const handleScrollRight = () => {
    setActiveCard((prevCard) =>
      prevCard < highlightsData.length - 1
        ? prevCard + 1
        : highlightsData.length - 1
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <button
          onClick={handleScrollLeft}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-400 text-gray-500"
        >
          &lt;
        </button>
        <button
          onClick={handleScrollRight}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-400 text-gray-500"
        >
          &gt;
        </button>
      </div>
      <div className="relative">
        <m.div
          className="overflow-x-hidden scroll-smooth relative"
          variants={{
            initial: { x: 0 },
            next: { x: -100 /* Adjust based on card width */ },
            prev: { x: 100 /* Adjust based on card width */ },
          }}
          animate={activeCard !== 0 ? "prev" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-block w-full">
            {" "}
            {/* Wrap cards in a full-width container */}
            {highlightsData.map((data, index) => (
              <HighlightsCard
                key={data.id}
                data={data}
                active={index === activeCard}
              />
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
}
