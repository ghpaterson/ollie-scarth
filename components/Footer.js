"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const linkedinURL =
    "https://www.linkedin.com/in/oliver-scarth-saunders-619aab1b0/";

  const instaURL = "https://www.instagram.com/olliescarth/";
  return (
    <main className="relative bottom-0 z-20 pt-20 md:py-4 font-neueHaas md:px-10">
      {pathname === "/" && (
        <div id="contact-details" className="flex justify-start text-blak">
          <div>
            <p>Ollie Scarth-Saunders</p>
            <p>olliescarth686@gmail.com</p>
            <p>{`(+44) 7853341968`}</p>
            <div className="flex flex-col">
              <Link href={linkedinURL} target="_blank">
                Linkedin
              </Link>
              <Link href={instaURL} target="_blank">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        id="copyright"
        className="flex justify-center md:justify-end text-blak py-10 "
      >
        <span>&copy; Ollie Scarth-Saunders 2023</span>
      </div>
    </main>
  );
}
