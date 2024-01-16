import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function HighlightsCard({ data }) {
  return (
    <>
      <div
        key={data.id}
        className="group h-[450px] w-[700px]  overflow-hidden font-neueHaas   p-4 flex flex-col "
      >
        <Link href={data.href}>
          <div
            className="w-[700] h-[300px] border-2 border-blak grayscale group-hover:grayscale-0"
            style={{
              backgroundImage: `url(${data.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </Link>
        <div className="px-2">
          <div className="pt-2">
            <Link href={data.href}>
              <h1 className="text-2xl font-neueHaasMed uppercase  text-blak">
                {data.title}
                <span className="text-red-500">.</span>
              </h1>
            </Link>
          </div>
          <div>
            <h2 className={data.style}>{data.channel}</h2>
          </div>
          <div className="flex justify-between gap-10 text-blak">
            <p>{data.desc}</p>
            <div className="text-5xl flex justify-end items-end">
              <Link href={data.href}>
                <BsArrowUpRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
