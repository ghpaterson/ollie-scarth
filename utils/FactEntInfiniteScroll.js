"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function FactEntInfiniteScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = 1;
  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main className="main">
      <div className="sliderContainer">
        <div className="slider">
          <p ref={firstText}>{`Factual Entertainment(*05)`}</p>
          <p ref={secondText}>{`Factual Entertainment(*05)`}</p>
        </div>
      </div>
    </main>
  );
}
