"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ransomManifest from "@/lib/ransom-manifest.json";
import ransomDimensions from "@/lib/ransom-dimensions.json";

interface RansomLetterProps {
  char: string;
  sizeClass: string;
  baseRotation: number;
}

const typedManifest = ransomManifest as Record<string, string[]>;
const typedDimensions = ransomDimensions as Record<string, { width: number; height: number; aspectRatio: number }>;

function SingleRansomLetter({ char, sizeClass, baseRotation }: RansomLetterProps) {
  const upper = char.toUpperCase();
  const normalizedKey = upper.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const variations = typedManifest[upper] || typedManifest[normalizedKey] || [];
  const charDimension = typedDimensions[upper] || typedDimensions[normalizedKey] || { aspectRatio: 0.9 };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(baseRotation);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Independent asynchronous random timer per letter (tuned speed + lively analog tilt)
  useEffect(() => {
    if (variations.length > 1) {
      setCurrentIndex(Math.floor(Math.random() * variations.length));
    }

    if (variations.length <= 1) return;

    let timeoutId: NodeJS.Timeout;

    const scheduleNextFlip = () => {
      // Tuned flip rate: slightly faster (2.2s to 4.8s per letter)
      const delay = 2200 + Math.random() * 2600;

      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => {
          let next = Math.floor(Math.random() * variations.length);
          if (next === prev && variations.length > 1) {
            next = (prev + 1) % variations.length;
          }
          return next;
        });

        // Visible analog tilt on change (-5.5° to +5.5°)
        const nextTilt = (Math.random() * 11 - 5.5);
        setCurrentRotation(nextTilt);

        // Subtle positional jitter (-2.5px to +2.5px via GPU transform, zero layout shift)
        setOffset({
          x: Math.round((Math.random() * 5 - 2.5) * 10) / 10,
          y: Math.round((Math.random() * 5 - 2.5) * 10) / 10,
        });

        scheduleNextFlip();
      }, delay);
    };

    // Staggered initial start so letters don't all flip in synchronization
    const initialDelay = 350 + Math.random() * 2000;
    const initialTimer = setTimeout(scheduleNextFlip, initialDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [variations.length, baseRotation]);

  if (char === " ") {
    return <span className="inline-block w-2 sm:w-4 md:w-6" />;
  }

  if (variations.length === 0) {
    return (
      <span className={`inline-block font-poster text-white ${sizeClass}`}>
        {char}
      </span>
    );
  }

  const imageSrc = variations[currentIndex] || variations[0];

  return (
    <motion.span
      animate={{
        rotate: currentRotation,
        x: offset.x,
        y: offset.y,
      }}
      whileHover={{ scale: 1.15, rotate: 0, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-block relative select-none align-middle cursor-pointer drop-shadow-[2px_3px_2px_rgba(0,0,0,0.35)] flex-shrink-0 ${sizeClass}`}
      style={{
        aspectRatio: charDimension.aspectRatio,
        transformOrigin: "center center",
      }}
    >
      <img
        src={imageSrc}
        alt={char}
        className="w-full h-full object-contain pointer-events-none"
        loading="eager"
      />
    </motion.span>
  );
}

interface RansomNoteTitleProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const ROTATIONS = [-3.2, 2.4, -1.8, 3.1, -2.2, 1.6, -3.5, 2.7, -1.4, 2.5, -2.8, 3.2];

export function RansomNoteTitle({ text, size = "xl", className = "" }: RansomNoteTitleProps) {
  const heightClasses = {
    sm: "h-7 sm:h-9 md:h-11",
    md: "h-9 sm:h-12 md:h-15 lg:h-18",
    lg: "h-11 sm:h-16 md:h-20 lg:h-24",
    xl: "h-12 sm:h-18 md:h-24 lg:h-30 xl:h-34",
  };

  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap items-center justify-center gap-y-2 sm:gap-y-3 ${className}`}>
      {words.map((word, wordIdx) => {
        const startIdx = text.indexOf(word);
        return (
          <span key={wordIdx} className="inline-flex items-center mx-1 sm:mx-2.5 whitespace-nowrap flex-shrink-0">
            {word.split("").map((char, charIdx) => {
              const globalIdx = startIdx + charIdx;
              const baseRot = ROTATIONS[globalIdx % ROTATIONS.length];

              return (
                <SingleRansomLetter
                  key={charIdx}
                  char={char}
                  sizeClass={heightClasses[size]}
                  baseRotation={baseRot}
                />
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
