import NavBar from "@/components/NavBar";

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
      <div>
        <h1>Credit: {creditData.title}</h1>
        <h1>Channel: {creditData.channel}</h1>
        <h1>Description: {creditData.description}</h1>
      </div>
    </main>
  );
}
