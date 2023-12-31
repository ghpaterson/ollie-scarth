"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const rootElement = document.documentElement;

    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);

    return () => {
      scrollToTopBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <div className="flex justify-center text-3xl font-neueHaasMed uppercase md:py-10">
      <button id="scrollToTopBtn" className="py-2 px-4 text-blak uppercase">
        scroll to top<span className="text-red-500 text-5xl">.</span>
      </button>
    </div>
  );
}
