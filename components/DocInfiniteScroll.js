"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DocInfiniteScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    // gsap.to(slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,

    //     start: 0,
    //     end: window.innerHeight,
    //     scrub: true,
    //     onUpdate: (e) => (direction = e.direction * -1),
    //   },
    //   x: "-=300px",
    // });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main className="main">
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Documentaries Documentaries Documentaries -</p>
          <p ref={secondText}>Documentaries Documentaries Documentaries -</p>
        </div>
      </div>
    </main>
  );
}
