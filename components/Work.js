export default function Work() {
  return (
    <main>
      <div className="flex justify-start">
        <p className="text-5xl border border-black rounded-full py-1 px-4">
          WORK
        </p>
      </div>
      <div className="grid grid-cols-12 py-10">
        <div className="col-span-12 flex flex-col items-end">
          <ul className="flex flex-col gap-12 items-end font-fungis text-7xl text-gray-500">
            <li className="hover:text-black hover:cursor-pointer hover:-translate-x-32 transition duration-500 ease-in">
              BODY IN THE SUITCASE
            </li>
            <li className="hover:text-black hover:cursor-pointer hover:-translate-x-20 transition duration-500 ease-in">
              TALES FROM THE KITCHEN GARDEN
            </li>
            <li className="hover:text-black hover:cursor-pointer hover:-translate-x-32 transition duration-500 ease-in">
              OUR DEMENTIA CHOIR
            </li>
            <li className="hover:text-black hover:cursor-pointer hover:-translate-x-32 transition duration-500 ease-in">
              GREAT GARDEN REVOLUTION
            </li>
            <li className="hover:text-black hover:cursor-pointer hover:-translate-x-32 transition duration-500 ease-in">
              LIVING WITH A SERIAL KILLER
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
