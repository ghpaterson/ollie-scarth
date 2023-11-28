import NavBar from "@/components/NavBar";

export default function Work() {
  return (
    <main>
      <NavBar />
      <section>
        <h1 className="flex justify-center font-neueHaasMed uppercase text-3xl md:text-6xl py-6 md:py-10 md:px-6">
          work<span className="text-red-500">.</span>
        </h1>
      </section>
    </main>
  );
}
