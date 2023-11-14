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

      <div className="mt-10 h grid grid-cols-1 md:grid-cols-12 bg-gray-300 rounded-lg ">
        <div className="md:col-span-6 bg-slate-600 rounded-lg px-4 py-10 md:py-32 md:px-20  flex flex-col items-start">
          <h1 className="text-bone text-2xl md:text-3xl">Lets Get in Touch</h1>
          <p className="text-bone py-6">
            Copy my email address or contact me through one of my social
            accounts
          </p>
          <div className="flex flex-col gap-2">
            <CopyEmailAddress />
            <p className="text-bone md:text-xl">07853341968</p>
            <Link href={linkedinURL} target="_blank">
              <p className="text-bone md:text-xl">Linkedin</p>
            </Link>
            <Link href={instaURL} target="_blank">
              <p className="text-bone md:text-xl">Instagram</p>
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 rounded-lg px-10 flex items-center justify-center py-20">
          <p className="text-7xl">IMAGE</p>
        </div>
      </div>
    </main>
  );
}
