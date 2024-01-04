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
                    externalLink
                    category {
                        categoryName
                    }
                    creditImage {
                        url
                    }
                    channelLogo{
                      url
                    }
                    creditGallery{
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

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 py-10 md:py-20 text-blak font-neueHaas border-b-2 border-blak">
        {/* For mobile view (1 column) */}
        <div
          id="credit-image"
          className="rounded-xl md:order-lastmb-6 md:mb-0 md:mt-0 flex flex-col justify-center"
        >
          <div
            className="h-40 md:h-80"
            style={{
              backgroundImage: `url(${creditData.creditImage.url})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div id="credit-details" className="px-4 md:py-20 md:order-first">
          <h1 className="text-xl md:text-4xl font-neueHaasMed uppercase">
            {creditData.title}
          </h1>
          <div
            className="w-32 h-6 mt-4"
            style={{
              backgroundImage: `url(${creditData.channelLogo.url})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <p className="text-xl py-6">{creditData.description}</p>

          <p className="text-xl">
            Director:{" "}
            <span className="text-gray-700 px-1"> {creditData.director}</span>
          </p>
        </div>
      </section>
      <section
        id="external-link"
        className=" pt-10 text-md md:text-2xl font-neueHaasMed"
      >
        {creditData.externalLink && (
          <Link
            href={creditData.externalLink}
            alt="external link to streaming"
            target="_blank"
            className="flex justify-center"
          >
            Watch Here on {creditData.channel}
          </Link>
        )}
      </section>

      <section className=" md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {creditData.creditGallery.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Gallery Image ${index + 1}`}
              className=""
            />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-center py-10">
          <div className="text-xl md:text-3xl py-4 font-neueHaasMed uppercase px-4">
            <Link href={"/Work/Documentary"}>
              Back to documentaries<span className="text-red-500">.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
