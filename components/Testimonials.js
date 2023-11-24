import { elementFade } from "@/utils/motions";
import { motion as m } from "framer-motion";

export default function Testimonials() {
  return (
    <m.section
      variants={elementFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 font-neueHaas md:text-lg gap-10 md:gap-20 md:px-40 py-20"
    >
      <div className=" col-span-4 flex flex-col items-start justify-start gap-4">
        <p>{`Ollie is absolute top shagger! Couldn't recommed him (*enough) 10/10 would hire`}</p>
        <p className="text-gray-600"> - Jamie Oliver</p>
      </div>
      <div className=" col-span-4 flex flex-col items-start justify-start gap-4">
        <p>
          This one time I got bitten on the penis by a Viper and Ollie refused
          to suck it out.. Jks he did it. Trust the man with my life
        </p>
        <p className="text-gray-600"> - Bear Grylls</p>
      </div>
      <div className=" col-span-4 flex flex-col items-start justify-start gap-4">
        <p>
          I thought I was a dab-hand in the kitchen but after Ollie produced my
          show I realised I knew nothing. Let the man cook! He also
          single-handedly delivered all ten piglets on the farm without a shirt
          on. Didn't want it filmed, didn't want the credit
        </p>
        <p className="text-gray-600"> - Marcus Waring</p>
      </div>
    </m.section>
  );
}
