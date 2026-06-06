import Hero from "@/components/hero/Hero";
import Stars from "@/components/hero/Stars";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

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

      <Skills />

      <Contact />
    </main>
  );
}