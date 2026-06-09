"use client";

import { useEffect, useMemo, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  depth: number;
  opacity: number;
};

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        depth: Math.random() * 25 + 5,
        opacity: Math.random() * 0.7 + 0.3,
      })),
    []
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-star]")
    );

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let animationFrame: number;

    const animate = () => {
      elements.forEach((el) => {
        const depth = Number(el.dataset.depth);

        el.style.transform = `translate(
          ${mouseX * depth}px,
          ${mouseY * depth}px
        )`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {stars.map((star, index) => (
        <span
          key={index}
          data-star
          data-depth={star.depth}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}