"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  depth: number;
  opacity: number;
};

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  const stars = useMemo<Star[]>(
    () =>
      Array.from(
        { length: isMobile ? 40 : 60 },
        () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          depth: Math.random() * 15 + 5,
          opacity: Math.random() * 0.6 + 0.4,
        })
      ),
    [isMobile]
  );

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;

    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-star]")
    );

    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x =
          (e.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (e.clientY / window.innerHeight - 0.5) * 2;

        elements.forEach((el) => {
          const depth = Number(el.dataset.depth);

          el.style.transform = `translate(
            ${x * depth}px,
            ${y * depth}px
          )`;
        });
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

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
          className={`
            absolute
            rounded-full
            bg-white
            ${isMobile ? "animate-pulse" : ""}
          `}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            willChange: isMobile
              ? "auto"
              : "transform",
          }}
        />
      ))}
    </div>
  );
}