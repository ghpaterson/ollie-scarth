import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CopyEmailAddress from "@/utils/CopyEmailAddress";
import Link from "next/link";

export default function Contact() {
  const linkedinURL =
    "https://www.linkedin.com/in/oliver-scarth-saunders-619aab1b0/";

  const instaURL = "https://www.instagram.com/olliescarth/";

  return (
    <main>
      <NavBar />

      <div className="mt-10 h grid grid-cols-1 md:grid-cols-12 border-t-2 border-b-2 border-blak rounded-lg ">
        <div className="md:col-span-6 text-blak rounded-lg px-4 py-10 md:py-32 md:px-20  flex flex-col items-start border-r-2 border-blak">
          <h1 className="text-blak text-2xl md:text-4xl font-raleway">
            GET IN TOUCH
          </h1>
          <p className=" py-6 font-raleway">
            Copy my email address or contact me through one of my social
            accounts
          </p>
          <div className="flex flex-col gap-2 font-raleway">
            <CopyEmailAddress />
            <p className=" md:text-xl">07853341968</p>
            <Link href={linkedinURL} target="_blank">
              <p className=" md:text-xl">Linkedin</p>
            </Link>
            <Link href={instaURL} target="_blank">
              <p className=" md:text-xl">Instagram</p>
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 rounded-lg px-10 flex flex-col items-center justify-center py-20 text-blak">
          <p className="text-7xl">IMAGE</p>
          <p>{`(or inbuilt message function)`}</p>
        </div>
      </div>
    </main>
  );
}
