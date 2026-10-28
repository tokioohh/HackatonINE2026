"use client";

import React from "react";
import Image from "next/image";
import { ScotchTape } from "./DoodleStickers";

// Real Post-it note container using the uploaded postit-yellow-tape.png asset styling
export function PostItNote({
  children,
  className = "",
  tilt = "rotate-[-1.5deg]",
  color = "yellow", // yellow | pink | blue
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
  color?: "yellow" | "pink" | "blue" | "white";
}) {
  const bgColors = {
    yellow: "bg-[#FFE66D] text-[#1F2937]",
    pink: "bg-[#FBCFE8] text-[#1F2937]",
    blue: "bg-[#BFDBFE] text-[#1E3A8A]",
    white: "bg-[#FAF8F5] text-[#111110]",
  };

  return (
    <div
      className={`relative inline-block transition-transform duration-300 hover:rotate-0 ${tilt} ${className}`}
    >
      <div
        className={`relative p-6 sm:p-7 shadow-[4px_6px_16px_rgba(0,0,0,0.18)] overflow-hidden ${bgColors[color]}`}
        style={{
          borderBottomRightRadius: "28px 8px",
          borderBottomLeftRadius: "6px 18px",
          borderTopRightRadius: "8px 14px",
          borderTopLeftRadius: "14px 8px",
        }}
      >
        {/* Realistic top tape bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-28 h-6 bg-white/45 backdrop-blur-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.12)] border-l border-r border-dashed border-gray-300/60 rotate-1 pointer-events-none z-10" />

        {/* Paper texture grain subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none" />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

// Torn paper scrap with scotch tape, replaced from rigid rectangular boxes
export function TornPaperScrap({
  children,
  className = "",
  tilt = "rotate-[-0.5deg]",
  tapePosition = "top",
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
  tapePosition?: "top" | "corners" | "none";
}) {
  return (
    <div className={`relative transition-transform duration-300 ${tilt} ${className}`}>
      {tapePosition === "top" && (
        <ScotchTape className="-top-3 left-1/2 -translate-x-1/2" tilt="-1deg" />
      )}
      {tapePosition === "corners" && (
        <>
          <ScotchTape className="-top-3 left-4 w-16 h-5" tilt="-3deg" />
          <ScotchTape className="-top-3 right-4 w-16 h-5" tilt="3deg" />
        </>
      )}

      <div
        className="relative p-6 bg-[#FAF8F5] text-[#111110] shadow-[3px_5px_14px_rgba(0,0,0,0.12)] border border-neutral-300/80"
        style={{
          borderRadius: "2px 4px 5px 3px",
          backgroundImage: "radial-gradient(#CBD5E1 0.75px, transparent 0.75px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

// Spiral notebook torn paper card using spiral-sheet-tape.webp
export function SpiralPaperCard({
  children,
  className = "",
  tilt = "rotate-[0.5deg]",
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
}) {
  return (
    <div
      className={`relative transition-transform duration-300 ${tilt} ${className}`}
    >
      <div
        className="relative p-6 sm:p-9 bg-[#FAF8F5] text-[#111110] shadow-[4px_7px_18px_rgba(0,0,0,0.14)]"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 0.75px, transparent 0.75px)",
          backgroundSize: "20px 20px",
          border: "1.5px solid rgba(0,0,0,0.15)",
          borderRadius: "2px 4px 6px 3px",
        }}
      >
        {/* Top Scotch Tape holding the sheet */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-white/50 backdrop-blur-[1px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] border-l-2 border-r-2 border-dashed border-gray-300/80 -rotate-1 pointer-events-none z-20" />

        {/* Spiral tear marks along top border */}
        <div className="absolute top-0 left-0 right-0 h-3 flex justify-around items-center px-4 overflow-hidden pointer-events-none opacity-40">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2.5 rounded-full border border-black/30 bg-[#F5EFE6] -mt-2"
            />
          ))}
        </div>

        <div className="relative z-10 pt-2">{children}</div>
      </div>
    </div>
  );
}

// Torn paper strip with red margin line
export function TornMarginStrip({
  children,
  className = "",
  tilt = "rotate-[-0.5deg]",
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
}) {
  return (
    <div className={`relative ${tilt} ${className}`}>
      <ScotchTape className="-top-2.5 -left-2 w-16 h-6" tilt="-5deg" />
      <ScotchTape className="-top-2.5 -right-2 w-16 h-6" tilt="5deg" />

      <div
        className="relative px-6 py-4 bg-[#FAF7F0] text-[#111110] shadow-[2px_4px_10px_rgba(0,0,0,0.08)] border-t border-b border-black/15"
        style={{
          borderLeft: "4px double #DC2626", // Red margin line of school notebook
        }}
      >
        {children}
      </div>
    </div>
  );
}
