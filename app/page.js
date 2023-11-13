import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="h-screen bg-gray-200">
      <NavBar />
      <section id="hero" className="grid grid-cols-12">
        <div className="col-span-10 bg-gray-300 px-10 py-12">
          <div className="text-9xl font-fungis">
            <h1>OLLIE</h1>
            <h2>SCARTH-</h2>
            <h3>SAUNDERS</h3>
          </div>
          <div className="flex gap-8 text-xl">
            <p className="border border-black rounded-full py-1 px-2">
              SERIES DIRECTOR
            </p>
            <p className="border border-black rounded-full py-1 px-2">
              PRODUCER // DIRECTOR
            </p>
            <p className="border border-black rounded-full py-1 px-2">
              EDIT PRODUCER
            </p>
          </div>
        </div>
        <div className="col-span-2 bg-gray-400 flex justify-end items-center">
          <div className="bg-gray-100 px-4 py-10">
            <div className="flex flex-col gap-4 items-center">
              <p className="text-3xl">OSS</p>
              <p>London, UK</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
