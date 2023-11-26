import React from "react";
import { words } from "./data";

import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-progressWrapper">
        <div className="loader-progress"></div>
        <span className="loader-progressNumber"></span>
      </div>
      <div className="loader">
        <div className="loader-words">
          <div className="loader-overlay"></div>
          <div className="loader-wordsGroup">
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
