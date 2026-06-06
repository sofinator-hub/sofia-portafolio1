"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      overflow-hidden
      px-6
      py-32
      text-white
      "
    >
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
        {/* Antena */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative"
        >
          <div className="relative text-8xl">
            📡
          </div>
        </motion.div>

        {/* Header */}

        <span
          className="
          mt-10
          text-sm
          tracking-[0.4em]
          text-zinc-400
          "
        >
          COMMUNICATION CENTER
        </span>

        <h2
          className="
          mt-6
          text-5xl
          font-bold

          md:text-6xl
          lg:text-7xl
          "
        >
          Centro de Comunicaciones
        </h2>

        <p
          className="
          mt-8
          max-w-3xl
          text-lg
          leading-relaxed
          text-zinc-400
          "
        >
          ¿Tienes una idea, proyecto o colaboración
          en mente?
          <br />
          <br />
          Estoy disponible para construir
          experiencias digitales modernas,
          funcionales y memorables.
        </p>

        {/* Botones */}

        <div
          className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >
          <a
            href="mailto:sof.mirandaa11@gmail.com"
            className="
            rounded-full
            border
            border-white/10

            px-6
            py-3

            transition-all
            duration-300

            hover:border-white/30
            hover:bg-white/5
            "
          >
            Email
          </a>

          <a
            href="https://github.com/sofinator-hub"
            target="_blank"
            rel="noreferrer"
            className="
            rounded-full
            border
            border-white/10

            px-6
            py-3

            transition-all
            duration-300

            hover:border-white/30
            hover:bg-white/5
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sofia-miranda-rendón-7247a2346"
            target="_blank"
            rel="noreferrer"
            className="
            rounded-full
            border
            border-white/10

            px-6
            py-3

            transition-all
            duration-300

            hover:border-white/30
            hover:bg-white/5
            "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}