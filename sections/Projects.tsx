"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { projects } from "@/data/projects";

export default function Projects() {
  const router = useRouter();

  const [loadingProject, setLoadingProject] =
    useState<string | null>(null);

  const handleTravel = (slug: string) => {
    setLoadingProject(slug);

    setTimeout(() => {
      router.push(`/projects/${slug}`);
    }, 800);
  };

  return (
    <>
      {/* Overlay de viaje espacial */}
      <AnimatePresence>
        {loadingProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#030308]
            "
          >
            <div className="text-center">

              <motion.div
                animate={{
                  x: [0, 40, -40, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="text-7xl"
              >
                🚀
              </motion.div>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                mt-8
                text-3xl
                font-bold
                "
              >
                Iniciando salto espacial...
              </motion.h3>

              <p
                className="
                mt-4
                text-zinc-400
                "
              >
                Destino:
                {" "}
                {projects.find(
                  (p) => p.slug === loadingProject
                )?.title}
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="projects"
        className="
        relative
        overflow-hidden
        px-6
        py-32
        text-white
        "
      >
        {/* Nebulosa */}
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/10
          blur-[250px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Header */}
          <div className="text-center">

            <span
              className="
              text-sm
              tracking-[0.4em]
              text-violet-400
              "
            >
              EXPLORACIONES DIGITALES
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
              Mundos que he construido
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              text-zinc-400
              "
            >
              Cada proyecto representa una misión
              distinta dentro de mi universo digital.
            </p>

          </div>

          <div className="mt-32 space-y-40">

            {projects.map((project, index) => {

              const reverse =
                index % 2 !== 0;

              return (
                <motion.article
                  key={project.slug}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className={`
                    grid
                    items-center
                    gap-16

                    lg:grid-cols-2

                    ${
                      reverse
                        ? "lg:[&>*:first-child]:order-2"
                        : ""
                    }
                  `}
                >
{/* Imagen */}
<motion.div
  whileHover={{
    scale: 1.03,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-xl
  "
>
  <div className="relative aspect-video">

 <Image
  src={project.image}
  alt={project.title}
  width={1200}
  height={675}
  className="
  h-full
  w-full
  object-cover
  transition-transform
  duration-700
  group-hover:scale-105
  "
/>

    <div
      className="
      absolute
      inset-0

      bg-black/20

      transition-all
      duration-500

      group-hover:bg-black/0
      "
    />

  </div>
</motion.div>
                  {/* Texto */}
                  <div>

                    <span
                      className="
                      text-sm
                      tracking-[0.3em]
                      text-violet-400
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                      mt-4
                      text-4xl
                      font-bold

                      md:text-5xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                      mt-6
                      leading-relaxed
                      text-zinc-400
                      "
                    >
                      {project.description}
                    </p>

                    <div
                      className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                      "
                    >
                      {project.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="
                            rounded-full
                            border
                            border-violet-500/30
                            px-4
                            py-2
                            text-sm
                            text-violet-300
                            "
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    <div
                      className="
                      mt-10
                      flex
                      flex-wrap
                      gap-4
                      "
                    >
                      <button
                        onClick={() =>
                          handleTravel(
                            project.slug
                          )
                        }
                        className="
                        rounded-full
                        bg-violet-600
                        px-6
                        py-3

                        font-medium

                        transition-all

                        hover:bg-violet-500
                        "
                      >
                        Explorar Proyecto →
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        rounded-full
                        border
                        border-white/10

                        px-6
                        py-3

                        transition-all

                        hover:border-violet-500
                        "
                      >
                        Ver Sitio
                      </a>
                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>
    </>
  );
}