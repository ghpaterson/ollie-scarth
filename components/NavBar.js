"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className=" sticky top-0  pb-4 z-20">
      <div
        id="container"
        className="flex justify-between text-blak
         h-14 bg-bone items-center px-2 relative"
      >
        <div id="logo">
          <Link href={"/"}>
            <h1
              onClick={closeMenu}
              className="text-2xl w-60 font-raleway text-blak z-0"
            >{`O.S-(*S)`}</h1>
          </Link>
        </div>
        <button
          className={`md:hidden ${
            pathname === "/" ? "text-blak" : "text-blak"
          }  focus:outline-none font-fungis flex justify-end items-center px-4 text-2xl`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : <GiHamburgerMenu />}
        </button>
        <nav
          id="navbar"
          className={`md:flex md:justify-end md:items-center absolute top-full right-0 md:py-0  py-6 w-96 md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } z-10`}
        >
          <ul
            className="flex flex-col items-center gap-4 md:flex-row md:items-center
               font-raleway md:px-4 text-2xl md:text-lg md:py-0 py-10 text-blak"
          >
            <Link href="#">
              <li onClick={closeMenu}>Work</li>
            </Link>
            <Link href={"/About"}>
              <li onClick={closeMenu}>About</li>
            </Link>
            <Link href={"/Gallery"}>
              <li onClick={closeMenu}>Gallery</li>
            </Link>
            <Link href={"/Contact"}>
              <li onClick={closeMenu}>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
