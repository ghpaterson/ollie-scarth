import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Work() {
  return (
    <main>
      <NavBar />
      <section>
        <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
          work<span className="text-red-500">.</span>
        </h1>
        <section className="flex flex-col items-center justify-center gap-6 font-neueHaasMed  text-blak  text-3xl md:text-9xl uppercase md:py-20">
          <Link href="/Work/Documentary" alt="link to documentary credits">
            <h2>
              documentary<span className="text-red-500">.</span>
            </h2>
          </Link>
          <Link href="/Work/FactEnt" alt="link to fact ent credits">
            <h2>
              fact ent<span className="text-red-500">.</span>
            </h2>
          </Link>
        </section>
      </section>
    </main>
  );
}
