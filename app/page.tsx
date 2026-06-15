import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";
import Stars from "@/components/hero/Stars";

const About = dynamic(() => import("@/sections/About"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Services = dynamic(() => import("@/sections/Services"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function Home() {
  return (
    <main
      className="
      relative
      overflow-hidden
      bg-[#030308]

      text-white
      "
    >
      <Stars />

      <Hero />

      <About />

      <Projects />

      <Services />

      <Skills />

      <Contact />
    </main>
  );
} 