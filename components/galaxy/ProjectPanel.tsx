"use client";

import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

type Props = {
  project: Project | null;
};

export default function ProjectPanel({
  project,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="
          absolute
          bottom-10
          left-1/2
          z-20
          w-[90%]
          max-w-xl
          -translate-x-1/2
          rounded-3xl
          border
          border-white/10
          bg-black/40
          p-8
          backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold">
            {project.title}
          </h3>

          <p className="mt-4 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                border-violet-500/30
                px-3
                py-1
                text-sm
                text-violet-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}