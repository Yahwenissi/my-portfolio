"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  "const",
  "useEffect",
  "useState",
  "<div>",
  "</>",
  "{}",
  "=>",
  "async",
];

type CodeItem = {
  top: string;
  left: string;
  fontSize: string;
  delay: string;
  text: string;
};

export default function CodeBackground() {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<CodeItem[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      setMounted(true);

      const generated = codeSnippets.map((text, i) => ({
        text,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        fontSize: `${12 + Math.random() * 18}px`,
        delay: `${i * 1.5}s`,
      }));

      setItems(generated);
    }, 0);

    return () => clearTimeout(id);
  }, []);

  // 🚫 Prevent server render entirely
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute text-gray-400 opacity-10 font-mono animate-float"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.fontSize,
            animationDelay: item.delay,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
