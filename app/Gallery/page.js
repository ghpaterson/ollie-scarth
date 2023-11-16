import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <main>
      <NavBar />
      <section>
        <h1 className="font-raleway text-3xl md:text-6xl py-6 md:py-10 md:px-6">{`GALLERY(*8)`}</h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-b-2 border-blak rounded-xl gap-2 py-10">
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
        <div className="md:col-span-4 bg-gray-200 h-60 hover:bg-gray-500"></div>
      </section>
    </main>
  );
}
