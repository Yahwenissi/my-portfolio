"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Welcome to my Website!",
"I build software and blockchain enthusiast.",
  "I write about technology, Finance and Interesting topics.",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, phraseIndex]);

  return (
    <p className="text-gold text-lg md:text-xl font-mono mt-4 h-8">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}
