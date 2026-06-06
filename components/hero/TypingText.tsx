"use client";

import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Cybersecurity",
  "App builder",
  "Problem Solver",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <h2 className="mt-6 text-xl font-medium text-violet-300 md:text-3xl">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}