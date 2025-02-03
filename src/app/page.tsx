"use client";
import { useScroll } from "@/utils/hook";
import dynamic from "next/dynamic";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
const Education = dynamic(() => import("./Components/Education"));
const Contact = dynamic(() => import("./Components/Contact"));
const Footer = dynamic(() => import("./Components/Footer"));
const Skills = dynamic(() => import("./Components/Skills"));
import { useEffect, useState } from "react";
import ScrollAnchor from "./Components/ScrollAnchor";
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
      {scrolled && <ScrollAnchor />}
    </div>
  );
}
