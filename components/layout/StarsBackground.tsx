"use client";

import { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
};

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 350 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 300,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
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
          }}
        />
      ))}
    </div>
  );
}