"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion as m } from "framer-motion";

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
      className={usePathname() === path ? "underline" : ""}
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
    textColorClass = "text-red-500";
  }

  return (
    <header className="sticky top-0 z-20 pb-2">
      <div
        className={`flex ${
          pathname === "/" ? "justify-end" : "justify-between"
        } md:justify-start text-blak h-14 w-full bg-bone items-center relative`}
      >
        {pathname === "/" && (
          <div id="doc-fact-scroll">
            <ul className="flex gap-4 font-neueHaas text-red-500">
              <li
                onClick={() => {
                  closeMenu();
                  scrollToSection("documentary-list-section");
                }}
              >
                Documentary
              </li>
              <li
                onClick={() => {
                  closeMenu();
                  scrollToSection("factEnt-list-section");
                }}
              >
                Factual Entertainment
              </li>
            </ul>
          </div>
        )}
        {pathname !== "/" && (
          <div id="logo">
            <Link href={"/"}>
              <h1
                onClick={closeMenu}
                className="text-3xl w-60 font-neueHaas text-blak z-0 pt-2 md:px-4"
              >
                {`O.S-(*S)`}
              </h1>
            </Link>
          </div>
        )}

        <button
          className={`md:hidden ${
            pathname === "/" ? "text-red-500" : "text-blak"
          } focus:outline-none font-fungis flex justify-end items-center px-4 text-2xl`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : <GiHamburgerMenu />}
        </button>
        <nav
          id="navbar"
          className={`md:flex md:justify-end md:items-center bg-blue-200 absolute top-full right-0 md:py-0 w-full md:w-[400px] py-6 md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } ${textColorClass} z-10`}
        >
          {}
          <ul className="flex flex-col items-center gap-8 md:flex-row md:items-center font-neueHaas text-2xl md:text-lg md:py-0 py-10 md:px-6 cursor-pointer">
            <NavLink path="#" text="Work" closeMenu={closeMenu} />
            <NavLink path="/About" text="About" closeMenu={closeMenu} />
            <NavLink path="/Gallery" text="Gallery" closeMenu={closeMenu} />
            <NavLink path="/Contact" text="Contact" closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
