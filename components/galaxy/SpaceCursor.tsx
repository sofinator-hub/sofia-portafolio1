"use client";

import { useEffect, useState } from "react";

export default function SpaceCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      z-[999]
      transition-transform
      duration-75
      "
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="relative">

        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/20
          blur-xl
          "
        />

        <div className="text-xl">
          🚀
        </div>

      </div>
    </div>
  );
}