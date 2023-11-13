"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <div
        id="container"
        className={`flex ${
          pathname === "/" ? "justify-end" : "justify-between"
        } h-14 bg-gray-100 items-center`}
      >
        <Link href={"/"}>
          {pathname !== "/" && (
            <h1 className="text-2xl">OLLIE SCARTH-SAUNDERS</h1>
          )}
        </Link>
        <ul className="flex justify-end items-center gap-6 ">
          <Link href={"#"}>
            <li>Work</li>
          </Link>
          <Link href={"#"}>
            <li>Gallery</li>
          </Link>
          <Link href={"#"}>
            <li>About</li>
          </Link>
          <Link href={"/Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
