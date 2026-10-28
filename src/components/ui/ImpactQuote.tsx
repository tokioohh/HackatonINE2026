"use client";

import { motion } from "framer-motion";
import { ScotchTape } from "./DoodleStickers";

interface ImpactQuoteProps {
  quote: string;
  author?: string;
  className?: string;
  tilt?: string;
  color?: "yellow" | "white" | "pink";
}

export function ImpactQuote({
  quote,
  author,
  className = "",
  tilt = "rotate-[-1deg]",
  color = "yellow",
}: ImpactQuoteProps) {
  const bgStyles = {
    yellow: "bg-[#FFF9D2] border-l-4 border-[#DC2626] shadow-[3px_5px_15px_rgba(0,0,0,0.12)]",
    white: "bg-[#FAF8F5] border-l-4 border-[#1D4ED8] shadow-[3px_5px_15px_rgba(0,0,0,0.12)]",
    pink: "bg-[#FFE4E6] border-l-4 border-[#E11D48] shadow-[3px_5px_15px_rgba(0,0,0,0.12)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      className={`relative p-6 sm:p-8 my-6 transition-transform duration-300 ${tilt} ${bgStyles[color]} ${className}`}
      style={{
        borderRadius: "2px 6px 4px 5px",
      }}
    >
      {/* Scotch tape on top */}
      <ScotchTape className="-top-3.5 left-1/2 -translate-x-1/2 w-28 h-6" tilt="1.5deg" />

      {/* Decorative oversized quotation mark */}
      <div className="absolute top-1 left-2 sm:left-4 text-6xl sm:text-8xl font-serif text-[#DC2626]/25 select-none pointer-events-none leading-none -z-0">
        “
      </div>

      <div className="relative z-10 pl-4 sm:pl-6">
        <p className="font-serif text-lg sm:text-2xl text-[#141312] italic leading-snug">
          "{quote}"
        </p>

        {author && (
          <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between font-mono text-xs text-[#DC2626] font-bold">
            <span className="uppercase tracking-wider">— {author}</span>
            <span className="text-[10px] font-normal text-[#6B7280]">EXPEDIENTE CÍVICO</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
