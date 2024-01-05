import NavBar from "@/components/NavBar";
import WorkCard from "@/components/WorkCard";

async function getFactEntData() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query Credits {
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

export default async function FactEnt() {
  const credits = await getFactEntData();

  //filter through credits that equal to 'factent"
  const factEntCredits = credits.filter(
    (credit) => credit.category.categoryName === "factent"
  );
  return (
    <main>
      <NavBar />
      <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
        Fact ent<span className="text-red-500">.</span>
      </h1>
      {/* four WorkCard Components at the moment but will be one component mapping over all the data to display however many cards required  */}
      <section className="grid grid-cols-1 md:grid-cols-2 md:px-10 gap-4 py-6">
        {factEntCredits.map((credit) => (
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
      <div
        id="copyright"
        className="flex justify-center md:justify-end text-blak py-10 px-10 "
      >
        <span>&copy; Ollie Scarth-Saunders 2023</span>
      </div>
    </main>
  );
}
