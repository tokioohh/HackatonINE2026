"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TornTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [30, 0, -20]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{
        height: "40svh",
        background: "linear-gradient(to bottom, var(--paper) 0%, var(--paper-archive) 100%)",
      }}
    >
      {/* Texturas */}
      <div className="grain-overlay" aria-hidden="true" />
      <div className="paper-stains" aria-hidden="true" />

      {/* Pliegue sutil en el centro — como una doblez del papel */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "48%",
          height: "2px",
          background: "linear-gradient(to right, transparent 5%, var(--ink-faded) 20%, var(--ink-faded) 80%, transparent 95%)",
          opacity: 0.08,
        }}
        aria-hidden="true"
      />

      {/* Texto manuscrito que aparece al hacer scroll */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[2]"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p
          className="handwritten-note text-center"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            color: "var(--ink-aged)",
            maxWidth: "20ch",
            opacity: 0.6,
          }}
        >
          ¿A dónde se fueron los jóvenes?
        </p>
      </motion.div>
    </div>
  );
}
