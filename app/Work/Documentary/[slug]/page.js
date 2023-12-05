import NavBar from "@/components/NavBar";
import Link from "next/link";

async function getDocumentaryCredit(slug) {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query Credit($slug: String!) {
                credit(where: {slug: $slug}) {
                    id
                    title
                    slug
                    description
                    channel
                    director
                    category {
                        categoryName
                    }
                    creditImage {
                        url
                    }
                }
            }

            `,
      variables: {
        slug: slug,
      },
    }),
  });

  const data = await response.json();
  return data.data.credit;
}

export default async function DocumentaryCredit({ params }) {
  const creditData = await getDocumentaryCredit(params.slug);
  return (
    <main>
      <NavBar />

      <section className="w-full grid grid-cols-2 gap-10 px-10 py-20 text-blak font-neueHaas border-b-2 border-blak">
        <div className=" px-6 py-20">
          <h1 className="text-4xl font-neueHaasMed">{creditData.title}</h1>
          <h2 className="text-2xl">{creditData.channel}</h2>
          <p className="text-xl py-6">{creditData.description}</p>
          <p className="text-xl">
            Director:{" "}
            <span className="text-gray-700 px-1"> {creditData.director}</span>
          </p>
        </div>
        <div
          className="rounded-xl"
          style={{
            backgroundImage: `url(${creditData.creditImage.url})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <section>
        <div className="flex justify-center py-10">
          <div className="text-3xl py-4 font-neueHaasMed uppercase px-4">
            <Link href={"/Work/documentary"}>
              Back to documentaries<span className="text-red-500">.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
