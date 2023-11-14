export default function Hero() {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-10 bg-transparent px-6 md:px-10 py-12">
        <div className="text-6xl md:text-9xl font-fungis py-6 text-bone">
          <h1>OLLIE</h1>
          <h2>SCARTH-</h2>
          <h3>SAUNDERS</h3>
        </div>
        <div className="flex flex-col items-start md:flex-row gap-2 md:gap-8 text-sm md:text-xl text-bone">
          <p className="border border-bone rounded-full py-1 px-2">
            SERIES DIRECTOR
          </p>
          <p className="border border-bone rounded-full py-1 px-2">
            PRODUCER // DIRECTOR
          </p>
          <p className="border border-bone rounded-full py-1 px-2">
            EDIT PRODUCER
          </p>
        </div>
      </div>
      <div className="md:col-span-2 bg-transparent flex justify-end items-center">
        <div className="bg-bone px-4 py-10">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl">OSS</p>
            <p>London, UK</p>
          </div>
        </div>
      </div>
    </section>
  );
}
