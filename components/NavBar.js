"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

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

  return (
    <header className="sticky top-0 z-20 pb-2">
      <div className="flex justify-between text-blak h-14 w-full bg-bone items-center relative">
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
        <button
          className={`md:hidden ${
            pathname === "/" ? "text-blak" : "text-blak"
          } focus:outline-none font-fungis flex justify-end items-center px-4 text-2xl`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : <GiHamburgerMenu />}
        </button>
        <nav
          id="navbar"
          className={`md:flex md:justify-end md:items-center absolute top-full right-0 md:py-0 w-full md:w-[800px] py-6 md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } z-10`}
        >
          <ul className="flex flex-col items-center gap-8 md:flex-row md:items-center font-neueHaas text-2xl md:text-lg md:py-0 py-10 text-blak md:px-6 cursor-pointer">
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
              Fact. Entertainment
            </li>
            <NavLink path="/About" text="About" closeMenu={closeMenu} />
            <NavLink path="/Gallery" text="Gallery" closeMenu={closeMenu} />
            <NavLink path="/Contact" text="Contact" closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
