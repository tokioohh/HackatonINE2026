"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MaskedRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MaskedReveal({
  children,
  delay = 0,
  className = "",
}: MaskedRevealProps) {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
