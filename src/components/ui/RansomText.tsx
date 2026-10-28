"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RansomTextProps {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// 6 distinct paper cutout styles with authentic typography & contrasting backgrounds
const PAPER_STYLES = [
  {
    bg: "bg-[#FFFFFF]",
    text: "text-[#111110]",
    font: "font-serif font-black",
    border: "border border-black/30 shadow-[2px_2px_0px_rgba(0,0,0,0.25)]",
  },
  {
    bg: "bg-[#111110]",
    text: "text-[#F5EFE6]",
    font: "font-poster font-bold tracking-wider",
    border: "shadow-[2px_2px_0px_#B84A28]",
  },
  {
    bg: "bg-[#B84A28]",
    text: "text-white",
    font: "font-mono font-bold",
    border: "border border-black/40 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
  },
  {
    bg: "bg-[#D4973B]",
    text: "text-[#111110]",
    font: "font-sans font-black",
    border: "border border-black/30 shadow-[2px_2px_0px_rgba(0,0,0,0.2)]",
  },
  {
    bg: "bg-[#ECE3D4]",
    text: "text-[#1A1816]",
    font: "font-serif italic font-bold",
    border: "border border-black/20 shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.15)]",
  },
  {
    bg: "bg-[#1E1B18]",
    text: "text-[#D4973B]",
    font: "font-mono font-bold",
    border: "border border-[#D4973B]/40 shadow-[2px_2px_0px_rgba(0,0,0,0.4)]",
  },
];

// Seeded rotations to ensure consistent initial layout
const BASE_ROTATIONS = [-3.5, 2.5, -1.8, 3.8, -2.6, 1.9, -4.0, 3.2, -1.5, 2.8, -3.1, 4.2];

export function RansomText({ text, className = "", size = "xl" }: RansomTextProps) {
  // Letters setup
  const chars = text.split("");

  // Track stop-motion jitter offsets
  const [jitters, setJitters] = useState<number[]>(() => chars.map(() => 0));

  // Stop-motion effect loop (simulates analog frame jitter every 1.2s)
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 2-3 random characters to jitter
      setJitters((prev) => {
        const next = [...prev];
        const countToJitter = Math.min(3, chars.length);
        for (let i = 0; i < countToJitter; i++) {
          const randIdx = Math.floor(Math.random() * chars.length);
          // Random offset between -2 and +2 degrees
          next[randIdx] = (Math.random() * 4 - 2);
        }
        return next;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [chars.length]);

  // Size configurations
  const sizeClasses = {
    sm: "text-xl sm:text-2xl px-1 py-0.5 mx-0.5",
    md: "text-2xl sm:text-4xl px-1.5 py-0.5 mx-0.5",
    lg: "text-4xl sm:text-6xl md:text-7xl px-2 py-1 mx-1",
    xl: "text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] px-2 sm:px-3 py-1 sm:py-2 mx-1 sm:mx-1.5",
  };

  return (
    <span className={`inline-flex flex-wrap items-center align-middle ${className}`}>
      {chars.map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-3 sm:w-6" />;
        }

        const styleIdx = (index * 3 + index % 2) % PAPER_STYLES.length;
        const style = PAPER_STYLES[styleIdx];
        const baseRotation = BASE_ROTATIONS[index % BASE_ROTATIONS.length];
        const currentRotation = baseRotation + (jitters[index] || 0);

        return (
          <motion.span
            key={index}
            animate={{
              rotate: currentRotation,
              y: jitters[index] ? jitters[index] * 0.7 : 0,
            }}
            whileHover={{
              scale: 1.15,
              rotate: baseRotation > 0 ? baseRotation + 5 : baseRotation - 5,
              transition: { duration: 0.15 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className={`inline-block select-none transform-gpu leading-none ${sizeClasses[size]} ${style.bg} ${style.text} ${style.font} ${style.border}`}
            style={{
              transformOrigin: "center center",
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
