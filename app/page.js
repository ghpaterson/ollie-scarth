import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <section id="hero-navbar" className="h-screen bg-gray-200">
        <NavBar />
        <Hero />
      </section>
      <section id="work-section" className="mt-10">
        <Work />
      </section>
      <section id="about-section" className="mt-10">
        <div className="flex justify-end">
          <p className="text-5xl border border-black rounded-full py-1 px-4">
            ABOUT
          </p>
        </div>
        <div className="mt-10 h-screen grid grid-cols-12 bg-gray-300 rounded-lg">
          <div className="col-span-6 bg-slate-600 rounded-lg px-10 flex items-center">
            <p className="text-bone text-xl">
              Hi! I'm Ollie, a director and producer with a chameleon-like
              approach to storytelling. I believe that the best way to create
              impactful content is to adapt to the unique vision and voice of
              each client. My goal is not to impose my own style, but rather to
              seamlessly blend my expertise with your project goals, crafting
              narratives that resonate with your target audience. My primary
              focus lies in video directing, production and editing. My
              versatility allows me to tackle a wide range of projects with
              confidence and expertise.
            </p>
          </div>
          <div className="col-span-6 rounded-lg px-10 flex items-center justify-center">
            <p className="text-7xl">IMAGE</p>
          </div>
        </div>
      </section>
    </>
  );
}
