"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        } h-14 bg-transparent items-center px-2`}
      >
        <Link href={"/"}>
          {pathname !== "/" && (
            <h1 className="text-2xl font-raleway text-blak z-0">{`O.S-(*S)`}</h1>
          )}
        </Link>
        <button
          className={`md:hidden ${
            pathname === "/" ? "text-bone" : "text-blak"
          }  focus:outline-none font-raleway flex justify-end`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : "Menu"}
        </button>
        <nav
          className={`md:flex md:justify-end md:items-center absolute top-full right-0 md:py-0  py-6 w-full ${
            isMenuOpen ? "flex justify-center bg-bone" : "hidden"
          } z-10`}
        >
          <ul
            className={`flex flex-col items-center gap-4 md:flex-row md:items-center
               font-raleway md:px-4 text-xl ${
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
