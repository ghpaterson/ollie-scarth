"use client";

import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

import "./Loader.css";
export default function Loader({ timeline }) {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  return (
    <div className="loader-wrapper">
      {/* <div className="loader-progressWrapper">
        <div className="loader-progress" ref={progressRef}></div>
        <span className="loader-progressNumber" ref={progressNumberRef}>
          0
        </span>
      </div> */}
      <div className="loader" ref={loaderRef}>
        <div className="loader-words">
          <div className="loader-overlay"></div>
          <div className="loader-wordsGroup" ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className="loader-word">
                  {word}
                  <span className="text-red-500">.</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
