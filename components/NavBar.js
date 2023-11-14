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
          pathname === "/"
            ? "justify-center md:justify-end text-bone"
            : "justify-between"
        } h-14 bg-transparent items-center md:px-6`}
      >
        <Link href={"/"}>
          {pathname !== "/" && <h1 className="text-2xl">OSS</h1>}
        </Link>
        <ul className="flex justify-end items-center gap-6 ">
          <Link href={"#"}>
            <li>Work</li>
          </Link>
          <Link href={"#"}>
            <li>Gallery</li>
          </Link>
          <Link href={"/About"}>
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
