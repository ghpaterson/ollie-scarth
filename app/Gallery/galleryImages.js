async function getGalleryData() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query Galleries {
        galleries {
          id
          title
         galleryImage{
            url
         }
        }
      }
     
        `,
    }),
  });
  console.log("response status:", response.status);
  const json = await response.json();
  console.log("data:", json.data.galleries);
  return json.data.galleries;
}

export default async function GalleryImages() {
  try {
    const galleries = await getGalleryData();

    if (!galleries || galleries.length === 0) {
      // Handle the case where galleries is undefined or an empty array
      return (
        <section>
          <h1>Gallery</h1>
          <p>No galleries available.</p>
        </section>
      );
    }

    return (
      <section className="md:px-10">
        {galleries.map((gallery, galleryIndex) => (
          <div key={galleryIndex}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.galleryImage.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Gallery Image ${index + 1}`}
                  className=""
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    // Handle errors from the API request
    console.error("Error fetching gallery data:", error);
    return (
      <section>
        <h1>Gallery</h1>
        <p>Error fetching gallery data. Please try again later.</p>
      </section>
    );
  }
}
