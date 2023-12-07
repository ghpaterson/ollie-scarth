import NavBar from "@/components/NavBar";
import WorkCard from "@/components/WorkCard";

async function getDocumentaryData() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query CreditsAndCategorys {
      credits {
        id
        slug
        title
        channel
        description
        creditImage{
          url
        }
        category {
          id
          categoryName
        }
        channelLogo {
          url
        }
      }
    }
   
      `,
    }),
  });

  console.log("response status:", response.status);
  const json = await response.json();
  console.log("data:", json.data.credits);
  return json.data.credits;
}

export default async function Documentary() {
  const credits = await getDocumentaryData();

  //filter credits with categoryName equal to 'documentary'

  const documentaryCredits = credits.filter(
    (credit) => credit.category.categoryName === "documentary"
  );
  return (
    <main>
      <NavBar />
      <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
        documentary<span className="text-red-500">.</span>
      </h1>
      {/* four WorkCard Components at the moment but will be one component mapping over all the data to display however many cards required  */}
      <section className="grid grid-cols-2 px-10 gap-4 py-6">
        {documentaryCredits.map((credit) => (
          <WorkCard
            title={credit.title}
            channel={credit.channel}
            creditImage={credit.creditImage}
            key={credit.id}
            slug={credit.slug}
            description={credit.description}
            category={credit.category}
            channelLogo={credit.channelLogo}
          />
        ))}
      </section>
    </main>
  );
}
