"use client";
import { useScroll } from "@/utils/hook";
import dynamic from "next/dynamic";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
const Education = dynamic(() => import("./Components/Education"));
const Contact = dynamic(() => import("./Components/Contact"));
const Footer = dynamic(() => import("./Components/Footer"));
const Skills = dynamic(() => import("./Components/Skills"));
import { IoArrowUpOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const scroll = useScroll();
  useEffect(() => {
    if (scroll > 100) setScrolled(true);
    else setScrolled(false);
  }, [scroll]);
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      {scrolled && (
        <div
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5"
        >
          <a className="flex cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-3xl">
            <IoArrowUpOutline size={20} className="stroke-orange-300" />
          </a>
        </div>
      )}
    </div>
  );
}
