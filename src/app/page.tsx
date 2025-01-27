import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
