"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    name: "Next.js",
    size: 90,
    x: "50%",
    y: "50%",
    description: "Framework principal para desarrollo web moderno.",
    color: "#7dd3fc",
  },

  {
    name: "React",
    size: 60,
    x: "30%",
    y: "35%",
    description: "Interfaces dinámicas e interactivas.",
    color: "#7dd3fc",
  },

  {
    name: "TypeScript",
    size: 60,
    x: "70%",
    y: "35%",
    description: "Código más seguro y escalable.",
    color: "#7dd3fc",
  },

  {
    name: "Tailwind",
    size: 45,
    x: "20%",
    y: "20%",
    description: "Diseño moderno y rápido.",
    color: "#7dd3fc",
  },

  {
    name: "JavaScript",
    size: 50,
    x: "80%",
    y: "20%",
    description: "Lenguaje base del ecosistema web.",
    color: "#7dd3fc",
  },

  {
    name: "Node.js",
    size: 55,
    x: "20%",
    y: "60%",
    description: "Backend y APIs.",
    color: "#a78bfa",
  },

  {
    name: "Express",
    size: 40,
    x: "12%",
    y: "75%",
    description: "Desarrollo de servicios web.",
    color: "#a78bfa",
  },

  {
    name: "MySQL",
    size: 45,
    x: "18%",
    y: "90%",
    description: "Bases de datos relacionales.",
    color: "#a78bfa",
  },

  {
    name: "Python",
    size: 60,
    x: "80%",
    y: "60%",
    description: "Automatización e IA.",
    color: "#4ade80",
  },

  {
    name: "OpenAI",
    size: 50,
    x: "88%",
    y: "75%",
    description: "Integración de IA.",
    color: "#4ade80",
  },

  {
    name: "Claude",
    size: 45,
    x: "70%",
    y: "82%",
    description: "Workflows inteligentes.",
    color: "#4ade80",
  },

  {
    name: "Linux",
    size: 50,
    x: "5%",
    y: "50%",
    description: "Infraestructura.",
    color: "#f59e0b",
  },

  {
    name: "Docker",
    size: 45,
    x: "95%",
    y: "50%",
    description: "Contenedores.",
    color: "#f59e0b",
  },

  {
    name: "Git",
    size: 35,
    x: "10%",
    y: "30%",
    description: "Control de versiones.",
    color: "#f59e0b",
  },

  {
    name: "GitHub",
    size: 35,
    x: "90%",
    y: "30%",
    description: "Colaboración.",
    color: "#f59e0b",
  },

  {
    name: "OWASP",
    size: 35,
    x: "5%",
    y: "20%",
    description: "Buenas prácticas de seguridad.",
    color: "#ef4444",
  },

  {
    name: "Networking",
    size: 40,
    x: "95%",
    y: "20%",
    description: "Redes y conectividad.",
    color: "#ef4444",
  },

  {
    name: "Cybersecurity",
    size: 50,
    x: "50%",
    y: "8%",
    description: "Seguridad ofensiva y defensiva.",
    color: "#ef4444",
  },

  {
    name: "Automation",
    size: 45,
    x: "50%",
    y: "95%",
    description: "Automatización de procesos.",
    color: "#ec4899",
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="
      relative
      min-h-screen
      overflow-hidden
      px-6
      py-32
      text-white
      "
    >
      {/* Glow de fondo */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[1000px]
        w-[1000px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-sky-500/5
        blur-[280px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        <span
          className="
          text-sm
          tracking-[0.4em]
          text-sky-400
          "
        >
          TECHNOLOGY GALAXY
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
          Arsenal de habilidades
        </h2>

        <p
          className="
          mt-6
          max-w-2xl
          text-zinc-400
          "
        >
          Explora las tecnologías que impulsan cada misión,
          proyecto y sistema dentro de mi universo digital.
        </p>

        <div
          className="
          relative
          mt-24
          h-[900px]
          hidden
          lg:block
          "
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
              cursor-pointer
              "
              style={{
                left: skill.x,
                top: skill.y,
              }}
              whileHover={{
                scale: 1.15,
              }}
              onMouseEnter={() =>
                setActiveSkill(skill.name)
              }
              onMouseLeave={() =>
                setActiveSkill(null)
              }
            >
              <div className="flex flex-col items-center">

                <div className="relative">

                  <div
                    className="
                    absolute
                    inset-0
                    animate-pulse
                    rounded-full
                    blur-xl
                    "
                    style={{
                      width: skill.size,
                      height: skill.size,
                      backgroundColor: skill.color,
                      opacity: 0.35,
                    }}
                  />

                  <div
                    className="
                    relative
                    rounded-full
                    "
                    style={{
                      width: skill.size,
                      height: skill.size,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 40px ${skill.color}`,
                    }}
                  />
                </div>

                <h3 className="mt-4 font-semibold">
                  {skill.name}
                </h3>

                {activeSkill === skill.name && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                    absolute
                    top-full
                    mt-4
                    w-64

                    rounded-2xl
                    border
                    border-white/10

                    bg-black/70

                    p-4

                    backdrop-blur-xl
                    "
                  >
                    <h4 className="font-semibold">
                      {skill.name}
                    </h4>

                    <p
                      className="
                      mt-2
                      text-sm
                      text-zinc-400
                      "
                    >
                      {skill.description}
                    </p>
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}

        <div
          className="
          mt-16
          grid
          gap-4

          lg:hidden
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
              rounded-2xl
              border
              border-white/10

              bg-white/5

              p-4
              "
            >
              <h3 className="font-semibold">
                {skill.name}
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-zinc-400
                "
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}