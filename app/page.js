"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WorkCarousel from "@/components/WorkCarousel";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { motion as m } from "framer-motion";

export default function Home() {
  //TRYING TO FIGURE OUT LOADING STATE TO ONLY RENDER ON FIRST VISIT TO WEBPAGE
  // const [isFirstLoad, setIsFirstLoad] = useState(true);

  // useEffect(() => {
  //   if (isFirstLoad) {
  //     setTimeout(() => {
  //       setIsFirstLoad(false); // Update the state after the delay
  //       sessionStorage.setItem("isFirstLoad", false);
  //     }, 3000);
  //   }
  // }, []);

  // if (isFirstLoad) {
  //   return <Loading />; // Render the loading component on initial load
  // }
  return (
    <>
      <main className="">
        <section
          id="hero-navbar"
          className="md:h-screen bg-hero-image bg-cover "
        >
          <NavBar />
          <Hero />
        </section>
        <section id="work-section" className="">
          <div className="">
            <WorkCarousel />
          </div>
          <WorkSection />
        </section>
        <section id="about-section" className="md:pb-10">
          <AboutSection />
        </section>
      </main>
    </>
  );
}
