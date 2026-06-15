"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className={`
        fixed
        top-6
        left-1/2
        z-50
        flex
        w-[95%]
        max-w-5xl
        -translate-x-1/2
        items-center
        justify-between
        rounded-full
        px-6
        py-4
        transition-all
        duration-300

        ${
          scrolled
            ? "border border-white/10 bg-white/5 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="font-bold tracking-[0.25em]">
        SOFIA
      </div>

      <div className="hidden gap-8 md:flex">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}