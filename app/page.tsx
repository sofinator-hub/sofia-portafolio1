import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";

const Stars = dynamic(
  () => import("@/components/hero/Stars"),
  {
    ssr: false,
  }
);

const About = dynamic(
  () => import("@/sections/About"),
  {
    loading: () => null,
  }
);

const Projects = dynamic(
  () => import("@/sections/Projects"),
  {
    loading: () => null,
  }
);

const Skills = dynamic(
  () => import("@/sections/Skills"),
  {
    loading: () => null,
  }
);

const Contact = dynamic(
  () => import("@/sections/Contact"),
  {
    loading: () => null,
  }
);

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