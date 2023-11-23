"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToDocumentary = () => {
    const target = document.getElementById("documentary-list-section");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScrollToFactEnt = () => {
    const target = document.getElementById("factEnt-list-section");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // const handleScrollToDocumentary = () => {
  //   router.push("#documentary-list-section", { shallow: true });
  // };
  // const handleScrollToFactEnt = () => {
  //   router.push("#factEnt-list-section", { shallow: true });
  // };

  return (
    <header className=" sticky top-0 z-20 pb-2">
      <div
        id="container"
        className="flex justify-between text-blak
         h-14 w-full bg-bone items-center relative"
      >
        <div id="logo">
          <Link href={"/"}>
            <h1
              onClick={closeMenu}
              className="text-3xl w-60 font-neueHaas text-blak z-0 pt-2 md:px-4"
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
          className={`md:flex md:justify-end md:items-center absolute top-full right-0 md:py-0 w-full md:w-[800px]  py-6  md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } z-10`}
        >
          <ul
            className="flex flex-col items-center gap-8 md:flex-row md:items-center
               font-neueHaas text-2xl md:text-lg md:py-0 py-10 text-blak md:px-6 cursor-pointer"
          >
            <li
              onClick={() => {
                closeMenu();
                handleScrollToDocumentary();
              }}
            >
              Documentary
            </li>
            <li
              onClick={() => {
                closeMenu();
                handleScrollToFactEnt();
              }}
            >
              Fact. Entertainment
            </li>
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
