"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Navbar from "../navbar/Navbar"; 
import TypingText from "./TypingText";
import ScrollIndicator from "./ScrollIndicator";

const Stars = dynamic(
  () => import("./Stars"),
  {
    ssr: false,
  }
);

const ShootingStars = dynamic(
  () => import("./ShootingStars"),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#030308]
      px-6
      text-white
      "
    >
      <Navbar />
      <Stars /> 
      <ShootingStars />
 
      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-20
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Dots */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              white 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Nebulosa izquierda */}
      <div
        className="
        absolute
        left-0
        top-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-violet-600/15
        blur-[120px]
        "
      />

      {/* Nebulosa derecha */}
      <div
        className="
        absolute 
        bottom-0
        right-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-blue-500/10
        blur-[120px]
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-5xl
        flex-col
        items-center
        text-center
        "
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
          text-sm
          tracking-[0.35em]
          text-violet-400
          "
        >
          HOLA, SOY
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          relative
          mt-6
          font-black
          leading-none

          text-6xl
          sm:text-6xl
          md:text-7xl
          lg:text-[11rem]
          xl:text-[13rem]
          "
        >
          <span
            className="
            bg-gradient-to-b
            from-white
            via-zinc-100
            to-violet-400
            bg-clip-text
            text-transparent
            "
          >
            SOFIA
          </span>

          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            h-[250px]
            w-[250px]
            rounded-full
            bg-violet-600/15
            blur-[100px]
            "
          />
        </motion.h1>

        <TypingText />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="
          mt-8
          max-w-2xl
          text-zinc-400
          md:text-lg
          "
        >
          Desarrollo aplicaciones web, backend,
          automatizaciones e inteligencia artificial
          con enfoque en rendimiento, diseño y seguridad.
        </motion.p>

        <div
          className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
          "
        >
<button
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
  rounded-full
  bg-violet-600
  px-8
  py-4
  font-medium
  transition-colors
  hover:bg-violet-500
  "
>
  Ver proyectos
</button>

<a
  href="https://wa.me/5528287764"
  target="_blank"
  rel="noopener noreferrer"
  className="
  rounded-full
  border
  border-white/10
  px-8
  py-4
  backdrop-blur-md
  transition-all
  hover:border-violet-500
  "
>
  Contactarme
</a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}