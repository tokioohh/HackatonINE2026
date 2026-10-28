"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number; // average ms per char
  delay?: number; // ms initial delay after entering view
  className?: string;
  cursorColor?: string;
  triggerImmediately?: boolean;
}

export function TypewriterText({
  text,
  speed = 65,
  delay = 150,
  className = "",
  cursorColor = "#DC2626",
  triggerImmediately = false,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(triggerImmediately);
  const [isInView, setIsInView] = useState(triggerImmediately);

  const startTyping = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsInView(true);
  };

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));

          const char = text[currentIndex - 1];
          const jitter = char === " " ? 80 : (Math.random() * 24 - 12);
          const nextDelay = Math.max(30, speed + jitter);

          timer = setTimeout(typeNextChar, nextDelay);
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
    };
  }, [isInView, text, speed, delay]);

  return (
    <motion.div
      onViewportEnter={startTyping}
      viewport={{ once: true, margin: "60px" }}
      className={`inline-flex items-center font-typewriter select-none ${className}`}
      aria-label={text}
    >
      <span className="relative tracking-[0.10em] sm:tracking-[0.18em] uppercase">
        {displayedText || "\u00A0"}
        {/* Typewriter blinking mechanical cursor */}
        <span
          style={{ color: cursorColor }}
          className="inline-block font-mono font-bold animate-[blink_0.9s_step-start_infinite] ml-1 scale-y-110"
          aria-hidden="true"
        >
          |
        </span>
      </span>
    </motion.div>
  );
}

export const TypewriterHeroText = TypewriterText;
