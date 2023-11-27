"use client";

import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";

import "./Loader.css";
export default function Loader() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    gsap.to(wordGroupsRef.current, {
      yPercent: -80,
      duration: 5,
    });
  }, []);

  return (
    <div className="loader-wrapper" ref={loaderRef}>
      <div className="loader-progressWrapper">
        <div className="loader-progress" ref={progressRef}></div>
        <span className="loader-progressNumber" ref={progressNumberRef}></span>
      </div>
      <div className="loader">
        <div className="loader-words">
          <div className="loader-overlay"></div>
          <div className="loader-wordsGroup" ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className="loader-word">
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
