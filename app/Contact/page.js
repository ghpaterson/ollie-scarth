import NavBar from "@/components/NavBar";

export default function Contact() {
  return (
    <main>
      <NavBar />

      <div className="mt-10 h grid grid-cols-1 md:grid-cols-12 bg-gray-300 rounded-lg ">
        <div className="md:col-span-6 bg-slate-600 rounded-lg px-4 py-10 md:py-32 md:px-20  flex flex-col items-start">
          <h1 className="text-bone text-2xl md:text-xl pb-4">
            Lets Get in Touch
          </h1>
          <p className="text-bone md:text-xl">olliescarth686@gmail.com</p>
          <p className="text-bone md:text-xl">07853341968</p>
          <p className="text-bone md:text-xl">Linkedin</p>
          <p className="text-bone md:text-xl">Instagram</p>
        </div>
        <div className="md:col-span-6 rounded-lg px-10 flex items-center justify-center py-20">
          <p className="text-7xl">IMAGE</p>
        </div>
      </div>
    </main>
  );
}
