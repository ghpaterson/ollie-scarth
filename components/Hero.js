import Image from "next/image";
import NavBar from "./NavBar";
import { TbWorld } from "react-icons/tb";
export default function Hero() {
  return (
    <>
      <main className="w-full h-screen bg-bicycleHero bg-cover bg-no-repeat text-bone">
        <NavBar />
        <section className="flex flex-col justify-start w-full h-[90vh] uppercase font-neueHaasMed">
          <div className="flex justify-center -mt-10">
            <div className="grid place-content-center w-32 h-32 bg-red-500 rounded-full">
              <h1 className="text-5xl font-neueHaasMed text-bone">O.S</h1>
            </div>
          </div>
          <div className="flex justify-between items-end text-2xl px-14 -mb-10 pt-52">
            <div className="">
              {/* <div className="text-6xl text-red-600">
                <PiFilmReel />
              </div> */}
              <h2>series director</h2>
              <div className="flex">
                <h2>
                  producer <span className="text-red-500">.</span> director
                </h2>
              </div>
              <h2>edit producer</h2>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-6xl text-red-500">
                <TbWorld />
              </div>
              <h3>Based in London</h3>
              <h3>Working Worldwide</h3>
            </div>
          </div>
          <div className="flex justify-center uppercase font-neueHaasMed">
            <div className="flex gap-6">
              <h1 className="text-[200px]">Ollie</h1>
              <h1 className="text-[200px]">
                Scarth<span className="text-red-500">.</span>
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
