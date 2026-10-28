"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScotchTape } from "@/components/ui/DoodleStickers";

// Custom human bust icon exactly matching the user's reference sketch
function PersonFigure({
  isYouth,
  index,
}: {
  isYouth: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.005 }}
      title={isYouth ? `Joven #${index + 1} (18–24 años)` : `Adulto #${index + 1} (25+ años)`}
      className="flex items-center justify-center p-0.5 sm:p-1"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 transition-transform hover:scale-125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isYouth ? (
          // Solid rust-red figure for youth (first 13)
          <g fill="#B91C1C">
            {/* Head */}
            <circle cx="12" cy="6" r="3.2" />
            {/* Torso */}
            <path
              d="M6 19.5 C 6 15 8.5 12.5 12 12.5 C 15.5 12.5 18 15 18 19.5 C 18 20 17.5 20.5 17 20.5 L 7 20.5 C 6.5 20.5 6 20 6 19.5 Z"
            />
          </g>
        ) : (
          // Hollow gray outline figure for adults (remaining 87)
          <g stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Head */}
            <circle cx="12" cy="6" r="3" />
            {/* Torso */}
            <path
              d="M6.5 20 C 6.5 15.8 8.8 13.5 12 13.5 C 15.2 13.5 17.5 15.8 17.5 20"
            />
            {/* Base line */}
            <line x1="6.5" y1="20" x2="17.5" y2="20" />
          </g>
        )}
      </svg>
    </motion.div>
  );
}

export function PersonMatrix100() {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 select-none">
      {/* Scotch tape in top center */}
      <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-6" tilt="-0.5deg" />

      {/* Lined student notebook paper container */}
      <div
        className="relative bg-[#FAF8F5] text-[#111110] shadow-[3px_6px_20px_rgba(0,0,0,0.12)] border border-neutral-300 rounded-[2px] overflow-hidden px-4 sm:px-8 pt-6 pb-6"
        style={{
          // Horizontal ruled notebook lines
          backgroundImage:
            "linear-gradient(to bottom, transparent 96%, rgba(200, 215, 230, 0.45) 96%)",
          backgroundSize: "100% 2.25rem",
        }}
      >
        {/* Red vertical margin line of school notebook */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1.5px] bg-[#EF4444]/60 pointer-events-none" />

        {/* Header row */}
        <div className="flex justify-between items-center pl-6 sm:pl-10 pr-2 mb-4 border-b border-dashed border-neutral-300 pb-2">
          <span className="font-serif italic text-lg sm:text-xl text-[#374151] tracking-wide font-normal">
            100 personas que votaron
          </span>
          <span className="font-typewriter text-xs text-[#9CA3AF] tracking-widest">
            10 × 10
          </span>
        </div>

        {/* 10x10 Grid of 100 person icons */}
        <div className="pl-6 sm:pl-10 pr-2">
          <div className="grid grid-cols-10 gap-x-1 sm:gap-x-2 gap-y-1.5 sm:gap-y-2 place-items-center py-2">
            {Array.from({ length: 100 }).map((_, i) => (
              <PersonFigure key={i} index={i} isYouth={i < 13} />
            ))}
          </div>
        </div>

        {/* Footer caption */}
        <div className="mt-4 pt-3 border-t border-dashed border-neutral-300 pl-6 sm:pl-10 pr-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="font-typewriter text-xs text-[#6B7280]">
            Cada figura representa a 1 de cada 100 votantes.
          </span>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-[#B91C1C] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
              <span>13 Jóvenes (18–24)</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#6B7280]">
              <span className="w-2.5 h-2.5 rounded-full border border-[#9CA3AF]" />
              <span>87 Adultos (25+)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
