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

  return (
    <header className="relative">
      <div
        id="container"
        className={`flex ${
          pathname === "/" && isMenuOpen
            ? "justify-end text-blak"
            : "justify-between text-bone"
        } h-14 bg-transparent items-center px-2 relative`}
      >
        <div id="logo">
          <Link href={"/"}>
            {pathname !== "/" && (
              <h1 className="text-2xl w-60 font-raleway text-blak z-0">{`O.S-(*S)`}</h1>
            )}
          </Link>
        </div>
        <button
          className={`md:hidden ${
            pathname === "/" ? "text-bone" : "text-blak"
          }  focus:outline-none font-raleway flex justify-end px-4 text-2xl`}
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
            className={`flex flex-col items-center gap-4 md:flex-row md:items-center
               font-raleway md:px-4 text-2xl md:py-0 py-10 ${
                 pathname === "/"
                   ? isMenuOpen
                     ? "text-blak"
                     : "text-bone"
                   : "text-blak"
               }`}
          >
            <Link href="#">
              <li>Work</li>
            </Link>
            <Link href={"/About"}>
              <li>About</li>
            </Link>
            <Link href={"/Gallery"}>
              <li>Gallery</li>
            </Link>
            <Link href={"/Contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        {/* <nav>
          <ul className="flex justify-end items-center gap-6 font-raleway">
            <Link href={"#"}>
              <li>Work</li>
            </Link>
            <Link href={"/About"}>
              <li>About</li>
            </Link>
            <Link href={"/Gallery"}>
              <li>Gallery</li>
            </Link>
            <Link href={"/Contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}
