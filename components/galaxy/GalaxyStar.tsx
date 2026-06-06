"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  x: string;
  y: string;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
};

export default function GalaxyStar({
  title,
  x,
  y,
  active,
  onHover,
  onLeave,
  onClick,
}: Props) {
  return (
    <motion.button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="
      absolute
      -translate-x-1/2
      -translate-y-1/2
      cursor-pointer
      "
      style={{
        left: x,
        top: y,
      }}
      animate={{
        scale: active ? 1.6 : 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        animate={{
          boxShadow: active
            ? "0 0 80px rgba(167,139,250,.9)"
            : "0 0 25px rgba(167,139,250,.4)",
        }}
        className="
        h-5
        w-5
        rounded-full
        bg-violet-300
        "
      />

      {active && (
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
          left-1/2
          top-8
          -translate-x-1/2
          whitespace-nowrap
          text-sm
          font-medium
          text-white
          "
        >
          {title}
        </motion.div>
      )}
    </motion.button>
  );
}