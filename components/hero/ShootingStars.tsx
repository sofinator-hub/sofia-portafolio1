"use client";

import { motion } from "framer-motion";

export default function ShootingStars() {
  return (
    <>
      <motion.div
        className="
        absolute
        top-[20%]
        left-[-200px]
        h-px
        w-[200px]
        rotate-[25deg]
        bg-gradient-to-r
        from-transparent
        via-white
        to-transparent
        "
        animate={{
          x: ["0vw", "140vw"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "linear",
        }}
      />

      <motion.div
        className="
        absolute
        top-[65%]
        left-[-200px]
        h-px
        w-[150px]
        rotate-[25deg]
        bg-gradient-to-r
        from-transparent
        via-violet-300
        to-transparent
        "
        animate={{
          x: ["0vw", "130vw"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear",
        }}
      />
    </>
  );
}