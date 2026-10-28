"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CollageTitleProps {
  text: string;
  className?: string;
  highlightWord?: string;
  highlightColor?: string;
}

// Available font styles to cycle through
const FONT_STYLES = [
  "font-poster tracking-tight",
  "font-serif italic font-normal tracking-normal",
  "font-mono font-bold tracking-widest",
  "font-sans font-black uppercase tracking-tight",
];

export function CollageTitle({
  text,
  className = "",
  highlightWord,
  highlightColor = "#B84A28",
}: CollageTitleProps) {
  // Store an array of font indices for each letter
  const [fontMap, setFontMap] = useState<number[]>([]);
  const [flickerIndex, setFlickerIndex] = useState<number | null>(null);

  // Initialize randomized collage fonts
  useEffect(() => {
    const initialMap = text.split("").map((char, i) => {
      // Keep spaces normal
      if (char === " ") return 0;
      // Some letters take typewriter or serif naturally
      if (i % 7 === 2) return 1; // serif italic
      if (i % 7 === 5) return 2; // typewriter mono
      return 0; // poster default
    });
    setFontMap(initialMap);
  }, [text]);

  // Periodic kinetic glitch/newspaper type shift
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random non-space character to shift font
      const eligibleIndices: number[] = [];
      text.split("").forEach((char, idx) => {
        if (char !== " " && char !== "\n") eligibleIndices.push(idx);
      });

      if (eligibleIndices.length === 0) return;

      const targetIdx = eligibleIndices[Math.floor(Math.random() * eligibleIndices.length)];
      setFlickerIndex(targetIdx);

      setFontMap((prev) => {
        const next = [...prev];
        next[targetIdx] = (next[targetIdx] + 1) % FONT_STYLES.length;
        return next;
      });

      setTimeout(() => setFlickerIndex(null), 400);
    }, 1800);

    return () => clearInterval(interval);
  }, [text]);

  const words = text.split(" ");

  return (
    <h2 className={`${className} select-none`}>
      {words.map((word, wordIdx) => {
        const isHighlighted = highlightWord && word.toUpperCase().includes(highlightWord.toUpperCase());
        const startCharIdx = text.indexOf(word);

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
            {word.split("").map((char, charIdx) => {
              const globalCharIdx = startCharIdx + charIdx;
              const currentFontIdx = fontMap[globalCharIdx] || 0;
              const isFlickering = flickerIndex === globalCharIdx;
              
              // Collage paper cutout style for certain characters
              const isCutout = (globalCharIdx % 9 === 3) && char !== " ";

              return (
                <motion.span
                  key={charIdx}
                  animate={
                    isFlickering
                      ? { scale: [1, 1.15, 1], rotate: [0, -3, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  style={{
                    color: isHighlighted ? highlightColor : undefined,
                  }}
                  className={`inline-block transition-colors duration-200 ${FONT_STYLES[currentFontIdx]} ${
                    isCutout
                      ? "px-1 mx-0.5 bg-[#111110] text-[#F5EFE6] -rotate-1 shadow-sm"
                      : ""
                  }`}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h2>
  );
}
