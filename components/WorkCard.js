import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function WorkCard({
  title,
  description,
  creditImage,
  slug,
  category,
  channelLogo,
  id,
}) {
  return (
    <div className="group overflow-hidden font-neueHaas   p-4 flex flex-col ">
      <Link href={`/Work/${category.categoryName}/${slug}`}>
        <div
          className="w-[300px] h-[150px] md:w-[650px] md:h-[320px] border-2 border-blak"
          style={{
            backgroundImage: `url(${creditImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="flex flex-col gap-2 px-2">
          <div className="pt-2">
            <h1 className="text-xl md:text-2xl font-neueHaasMed uppercase  text-blak">
              {title}
              <span className="text-red-500">.</span>
            </h1>
          </div>
          <div
            className="w-32 h-6"
            style={{
              backgroundImage: `url(${channelLogo.url})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-10 text-blak">
            <p>{description}</p>
            <div className="invisible md:visible text-5xl flex items-end justify-end">
              <Link
                id={id}
                href={`/Work/${category.categoryName}/${slug}`}
                alt="link to individual credit"
              >
                <BsArrowUpRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
