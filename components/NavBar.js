"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion as m } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";

const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLink = ({ path, text, closeMenu }) => (
  <Link href={path}>
    <li
      onClick={closeMenu}
      className={usePathname() === path ? "border-b-2 border-red-500" : ""}
    >
      {text}
    </li>
  </Link>
);

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Set the default text color
  let textColorClass = "text-blak";

  // Check if pathname is "/" and isMenuOpen is true
  if (pathname === "/" && isMenuOpen) {
    textColorClass = "text-blak";
  } else if (pathname === "/" && !isMenuOpen) {
    // Check if pathname is "/" and isMenuOpen is false
    textColorClass = "text-bone";
  }

  return (
    <header className="z-20 pb-2">
      <div
        className={`flex ${
          pathname === "/" ? "justify-end" : "justify-between"
        } md:justify-start text-blak h-14 w-full items-center relative`}
      >
        {pathname === "/" && (
          <div id="doc-fact-scroll">
            <ul className="flex gap-8 font-neueHaas text-md uppercase text-bone px-6">
              <li
                className=" cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  closeMenu();
                  scrollToSection("documentary-list-section");
                }}
              >
                Documentary
                <span>
                  <FiArrowDownCircle />
                </span>
              </li>
              <li
                className=" cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  closeMenu();
                  scrollToSection("factEnt-list-section");
                }}
              >
                Factual Entertainment
                <span>
                  <FiArrowDownCircle />
                </span>
              </li>
            </ul>
          </div>
        )}
        {pathname !== "/" && (
          <div id="logo">
            <Link href={"/"}>
              <h1
                onClick={closeMenu}
                className="text-3xl w-60 font-neueHaasMed text-blak z-0 pt-2 md:px-4"
              >
                {`O.S-(*S)`}
                <span className="text-red-500">.</span>
              </h1>
            </Link>
          </div>
        )}

        <button
          className={`md:hidden ${
            pathname === "/" ? "text-bone" : "text-blak"
          } focus:outline-none font-fungis flex justify-end items-center px-4 text-2xl`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : <GiHamburgerMenu />}
        </button>
        <nav
          id="navbar"
          className={`md:flex md:justify-end md:items-center  absolute top-full right-0 md:py-0 w-full md:w-[400px] py-6 md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } ${textColorClass} z-10`}
        >
          {}
          <ul className="flex flex-col items-center gap-8 md:flex-row md:items-center font-neueHaas uppercase text-2xl md:text-base md:py-0 py-10 md:px-6 cursor-pointer">
            <NavLink path="/Work" text="Work" closeMenu={closeMenu} />
            <NavLink path="/About" text="About" closeMenu={closeMenu} />
            <NavLink path="/Gallery" text="Gallery" closeMenu={closeMenu} />
            <NavLink path="/Contact" text="Contact" closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
