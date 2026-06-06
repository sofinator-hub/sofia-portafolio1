export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "matei",

    title: "Matei",

    category: "Industria & Manufactura",

    description:
      "Rediseño y desarrollo de una experiencia web para una empresa especializada en corte láser, conveyors, mobiliario inoxidable y soluciones de manufactura industrial. El objetivo fue transmitir capacidad técnica, precisión y confianza mediante una interfaz moderna y profesional.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],

    image: "/projects/project1.webp",

    url: "https://www.matei.mx/",
  },

  {
    slug: "aurea-grill",

    title: "Aurea Grill",

    category: "Restaurante & Branding",

    description:
      "Landing page enfocada en identidad visual, experiencia de usuario y presentación de marca. Diseñada para transmitir una imagen premium y generar una experiencia digital alineada con la personalidad del negocio.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    image: "/projects/project2.webp",

    url: "https://aurea-grill.vercel.app/",
  },

  {
    slug: "vanguarde",

    title: "Vanguarde",

    category: "Diseño Futurista",

    description:
      "Proyecto experimental centrado en animaciones, narrativa visual y diseño moderno. Explora una identidad tecnológica con una experiencia inmersiva inspirada en interfaces futuristas.",

    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],

    image: "/projects/project3.webp",

    url: "https://vanguarde-web.vercel.app/",
  },

  {
    slug: "skinlab",

    title: "SkinLab",

    category: "Experiencia Premium",

    description:
      "Sitio web para una clínica estética enfocado en elegancia visual, confianza y conversión. Diseñado para destacar servicios, fortalecer la identidad de marca y mejorar la experiencia de navegación.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],

    image: "/projects/project4.webp",

    url: "https://skinlab-web.vercel.app/",
  },
];