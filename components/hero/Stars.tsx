"use client";

import { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  depth: number;
  opacity: number;
};

export default function Stars() {
  const [mounted, setMounted] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setMounted(true);

    setStars(
      Array.from({ length: 250 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        depth: Math.random() * 40 + 10,
        opacity: Math.random() * 0.8 + 0.2,
      }))
    );
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            transform: `translate(
              ${mouse.x * star.depth}px,
              ${mouse.y * star.depth}px
            )`,
            transition: "transform 0.15s linear",
          }}
        />
      ))}
    </div>
  );
}