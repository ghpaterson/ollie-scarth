import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { highlightsData } from "@/Data/highlightsData";

const HighlightsCard = ({ id, title, channel, desc, href, style, url }) => (
  <div className="group h-[450px] w-[700px] overflow-hidden font-neueHaas p-4 flex flex-col">
    <Link href={href}>
      <div
        className="w-[700] h-[300px] border-2 border-blak"
        style={{
          backgroundImage: `url('${url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </Link>
    <div className="px-2">
      <div className="pt-2">
        <Link href={href}>
          <h1 className="text-2xl font-neueHaasMed uppercase text-blak">
            {title}
            <span className="text-red-500">.</span>
          </h1>
        </Link>
      </div>
      <div>
        <h2 className={style}>{channel}</h2>
      </div>
      <div className="flex justify-between gap-10 text-blak text-base">
        <p>{desc}</p>
        <div className="text-5xl flex justify-end items-end">
          <Link href={href}>
            <BsArrowUpRightCircle />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function HighlightsCarousel() {
  function nextSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove("translate-x-full");
    nextSlide.classList.add("translate-x-0");
  }

  function previousSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("translate-x-full");

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove("-translate-x-full");
    previousSlide.classList.add("translate-x-0");
  }
  return (
    <>
      <div className="flex justify-center gap-6 font-neueHaasMed text-blak text-3xl md:text-9xl uppercase md:py-10">
        <h1>
          Highlights<span className="text-red-500">.</span>
        </h1>
      </div>
      <section className="relative">
        {highlightsData.map((data, index) => (
          <div
            key={data.key}
            className={`absolute inset-0 w-screen h-[450px] flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform ${
              index === 0 ? "translate-x-0" : "translate-x-full"
            } slide`}
          >
            <HighlightsCard {...data} />
          </div>
        ))}
        <div
          onClick={nextSlide}
          className="absolute bottom-0 right-0  text-blak"
        >
          <FiArrowRightCircle className="text-6xl" />
        </div>
        <div
          onClick={previousSlide}
          className="absolute bottom-0 left-0  text-black"
        >
          <FiArrowLeftCircle className="text-6xl" />
        </div>
      </section>
    </>
  );
}
