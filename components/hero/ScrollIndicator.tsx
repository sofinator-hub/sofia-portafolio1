"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
      absolute
      bottom-10
      left-1/2
      hidden
      -translate-x-1/2
      flex-col
      items-center
      md:flex
      "
    >
      <span
        className="
        text-xs
        tracking-[0.4em]
        text-zinc-500
        "
      >
        SCROLL
      </span>

      <div
        className="
        mt-3
        h-16
        w-px
        bg-gradient-to-b
        from-violet-500
        to-transparent
        "
      />
    </motion.div>
  );
}