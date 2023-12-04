import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function WorkCard({
  id,
  title,
  channel,
  description,
  creditImage,
  slug,
  category,
}) {
  return (
    <div className="group overflow-hidden font-neueHaas   p-4 flex flex-col ">
      <Link href={`/Work/${category.categoryName}/${slug}`}>
        <div
          className="w-[600] h-[280px] border-2 border-blak"
          style={{
            backgroundImage: `url(${creditImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="flex flex-col gap-2 px-2">
          <div className="pt-2">
            <h1 className="text-2xl font-neueHaasMed uppercase  text-blak">
              {title}
              <span className="text-red-500">.</span>
            </h1>
          </div>
          <div>
            <h2 className="text-xl  text-blak">{channel}</h2>
          </div>
          <div className="flex justify-end gap-10 text-blak">
            <p>{description}</p>
            <div className="text-5xl flex justify-end items-end">
              <Link href={`/Work/${category.categoryName}/${slug}`}>
                <BsArrowUpRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
