"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      px-6
      py-32
      text-white
      "
    >
      {/* Glow superior */}
      <div
        className="
        absolute
        top-0
        left-1/2
        h-[400px]
        w-[400px]
        -translate-x-1/2
        rounded-full
        bg-violet-600/10
        blur-[180px]
        "
      />

      {/* Nebulosa izquierda */}
      <div
        className="
        absolute
        left-0
        top-40
        h-[350px]
        w-[350px]
        rounded-full
        bg-violet-500/10
        blur-[140px]
        "
      />

      {/* Nebulosa derecha */}
      <div
        className="
        absolute
        right-0
        bottom-20
        h-[350px]
        w-[350px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
        "
      />

      {/* Constelación decorativa */}
      <div
        className="
        absolute
        right-10
        top-24
        hidden
        xl:block
        opacity-40
        "
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
        >
          <line
            x1="40"
            y1="60"
            x2="180"
            y2="110"
            stroke="rgba(255,255,255,.15)"
          />

          <line
            x1="180"
            y1="110"
            x2="260"
            y2="240"
            stroke="rgba(255,255,255,.15)"
          />

          <line
            x1="40"
            y1="60"
            x2="120"
            y2="200"
            stroke="rgba(255,255,255,.15)"
          />

          <circle cx="40" cy="60" r="4" fill="white" />
          <circle cx="180" cy="110" r="4" fill="white" />
          <circle cx="260" cy="240" r="4" fill="white" />
          <circle cx="120" cy="200" r="4" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
            text-sm
            tracking-[0.4em]
            text-violet-400
            "
          >
            ABOUT
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
            Más que código.
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
            Me gusta construir experiencias digitales
            que no solo funcionen bien, sino que también
            transmitan personalidad.

            Disfruto desarrollar aplicaciones web modernas,
            experimentar con nuevas tecnologías y transformar
            ideas en productos reales que generen impacto.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
          mt-24
          grid
          gap-8

          lg:grid-cols-2
          "
        >

          {/* Card izquierda */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            "
          >
            <h3
              className="
              text-2xl
              font-semibold
              "
            >
              Mi enfoque
            </h3>

            <p
              className="
              mt-6
              leading-relaxed
              text-zinc-400
              "
            >
              Actualmente me enfoco en el desarrollo web
              moderno utilizando herramientas como Next.js,
              React, Tailwind y TypeScript.

              Me gusta construir interfaces atractivas,
              optimizar la experiencia del usuario y crear
              aplicaciones que combinen diseño, rendimiento
              y funcionalidad.
            </p>
          </motion.div>

          {/* Card derecha */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            "
          >
            <h3
              className="
              text-2xl
              font-semibold
              "
            >
              Quick Stats
            </h3>

            <div className="mt-8 space-y-8">

              <div>
                <h4 className="text-violet-400">
                  Enfoque Principal
                </h4>

                <p className="mt-2 text-zinc-400">
                  Desarrollo Web Moderno
                </p>
              </div>

              <div>
                <h4 className="text-violet-400">
                  Stack Favorito
                </h4>

                <p className="mt-2 text-zinc-400">
                  Next.js • React • Tailwind • TypeScript
                </p>
              </div>

              <div>
                <h4 className="text-violet-400">
                  Explorando
                </h4>

                <p className="mt-2 text-zinc-400">
                  IA • Automatización • Ciberseguridad
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Frase final */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
          mt-24
          text-center
          "
        >
          <p
            className="
            mx-auto
            max-w-3xl
            text-xl
            leading-relaxed
            text-zinc-500
            md:text-2xl
            "
          >
            Creo que la tecnología es más interesante
            cuando combina creatividad, funcionalidad
            y una experiencia que las personas realmente
            disfrutan usar.
          </p>
        </motion.div>

      </div>
    </section>
  );
}