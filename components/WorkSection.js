export default function WorkSection() {
  return (
    <main>
      <div className="grid grid-cols-12 pt-10 pb-10 md:py-20 border-t-2 border-b-2 border-blak rounded-xl px-4">
        <div className="col-span-12 flex flex-col items-start md:items-end">
          <ul className="flex flex-col gap-4 md:gap-12 items-start md:items-end font-raleway text-xl md:text-6xl text-blak">
            <li className="hover:text-honey hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-32 transition duration-500 ease-in">
              <span className="text-sm md:text-3xl">{`(*1)`}</span> BODY IN THE
              SUITCASE
            </li>
            <li className="hover:text-honey hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-20 transition duration-500 ease-in">
              <span className="text-sm md:text-3xl">{`(*2)`}</span> TALES FROM
              THE KITCHEN GARDEN
            </li>
            <li className="hover:text-honey hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-32 transition duration-500 ease-in">
              <span className="text-sm md:text-3xl">{`(*3)`}</span> OUR DEMENTIA
              CHOIR
            </li>
            <li className="hover:text-honey hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-32 transition duration-500 ease-in">
              <span className="text-sm md:text-3xl">{`(*4)`}</span> GREAT GARDEN
              REVOLUTION
            </li>
            <li className="hover:text-honey hover:cursor-pointer hover:translate-x-6 md:hover:-translate-x-32 transition duration-500 ease-in">
              <span className="text-sm md:text-3xl">{`(*5)`}</span> LIVING WITH
              A SERIAL KILLER
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
