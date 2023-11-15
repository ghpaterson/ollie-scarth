import Link from "next/link";

export default function Footer() {
  const linkedinURL =
    "https://www.linkedin.com/in/oliver-scarth-saunders-619aab1b0/";

  const instaURL = "https://www.instagram.com/olliescarth/";
  return (
    <>
      <div className="flex justify-start py-4 text-blak font-raleway">
        <div>
          <p>Ollie Scarth-Saunders</p>
          <p>olliescarth686@gmail.com</p>
          <p>07853341968</p>
          <div className="flex flex-col">
            <Link
              href={linkedinURL}
              target="_blank"
              className="hover:text-honey"
            >
              Linkedin
            </Link>
            <Link href={instaURL} target="_blank" className="hover:text-honey">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end pt-10 text-blak font-raleway">
        <span>&copy; Ollie Scarth-Saunders 2023</span>
      </div>
    </>
  );
}
