"use client";

import { useState } from "react";

import GalaxyStar from "./GalaxyStar";
import ProjectPanel from "./ProjectPanel";

const projects = [
  {
    id: 1,
    title: "CNC Web",
    description:
      "Landing industrial moderna enfocada en manufactura digital.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    x: "50%",
    y: "18%",
  },

  {
    id: 2,
    title: "SkinLab",
    description:
      "Experiencia web premium para clínica estética.",
    tech: ["Next.js", "React"],
    x: "22%",
    y: "48%",
  },

  {
    id: 3,
    title: "Vanguarde",
    description:
      "Branding futurista y diseño web avanzado.",
    tech: ["Next.js", "Framer Motion"],
    x: "78%",
    y: "45%",
  },

  {
    id: 4,
    title: "Portafolio AI",
    description:
      "Exploración de IA y automatización.",
    tech: ["React", "OpenAI"],
    x: "50%",
    y: "80%",
  },
];

export default function GalaxyMap() {
  const [hovered, setHovered] =
    useState<number | null>(null);

  const [selected, setSelected] =
    useState<number | null>(null);

  const project =
    projects.find(
      (p) => p.id === selected
    ) ?? null;

  return (
    <div
      className="
      relative
      h-[900px]
      overflow-hidden
      "
    >
      {projects.map((item) => (
        <GalaxyStar
          key={item.id}
          title={item.title}
          x={item.x}
          y={item.y}
          active={hovered === item.id}
          onHover={() =>
            setHovered(item.id)
          }
          onLeave={() =>
            setHovered(null)
          }
          onClick={() =>
            setSelected(item.id)
          }
        />
      ))}

      <ProjectPanel
        project={project}
      />
    </div>
  );
}