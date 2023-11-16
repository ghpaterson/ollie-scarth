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
    <div className="flex justify-center text-3xl font-raleway">
      <button id="scrollToTopBtn">{`(*Scroll to Top)`}</button>
    </div>
  );
}
