"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { states } from "@/lib/data";

interface MexicoMapProps {
  year: number;
  onHoverState: (id: string | null) => void;
  hoveredState: string | null;
}

function getColor(value: number): string {
  if (value >= 55) return "#3b0764";
  if (value >= 45) return "#5e1d8e";
  if (value >= 38) return "#8338b2";
  if (value >= 32) return "#a66bc8";
  if (value >= 28) return "#c9a0e0";
  return "#e8d5f5";
}

const statePathsData: Record<string, string> = {
  AGU: "M 185 285 l 15 -5 10 10 -5 15 -15 5 z",
  BCN: "M 30 80 l 25 -30 15 5 10 40 -10 50 -20 10 -15 -20 z",
  BCS: "M 40 180 l 20 -10 15 25 10 35 -15 20 -20 -15 -10 -30 z",
  CAM: "M 390 340 l 30 -10 15 20 5 25 -20 15 -25 -5 z",
  CHP: "M 340 380 l 25 -5 20 15 10 25 -15 20 -30 -5 -15 -20 z",
  CHH: "M 120 120 l 50 -10 30 25 10 50 -20 40 -40 10 -30 -30 z",
  COA: "M 190 140 l 40 -15 25 20 10 45 -15 25 -35 5 -25 -25 z",
  COL: "M 155 330 l 12 -8 10 8 -2 15 -14 5 z",
  CMX: "M 240 315 l 10 -5 8 8 -3 12 -12 3 z",
  DUR: "M 140 195 l 35 -10 25 15 5 35 -20 20 -30 -5 -15 -25 z",
  GUA: "M 195 275 l 20 -8 15 12 5 20 -12 12 -20 -5 z",
  GRO: "M 220 360 l 30 -5 20 15 5 25 -25 10 -25 -15 z",
  HID: "M 250 280 l 18 -8 12 10 2 18 -15 8 -15 -10 z",
  JAL: "M 155 280 l 30 -12 20 15 8 30 -15 18 -30 -8 -13 -20 z",
  MEX: "M 230 305 l 20 -8 15 10 5 18 -15 10 -18 -8 z",
  MIC: "M 190 320 l 25 -8 18 12 5 22 -18 12 -22 -10 z",
  MOR: "M 245 330 l 12 -5 10 8 -2 14 -14 5 z",
  NAY: "M 140 255 l 18 -8 12 10 3 18 -14 8 -15 -10 z",
  NLE: "M 230 150 l 30 -15 20 20 5 35 -18 15 -28 -8 z",
  OAX: "M 290 360 l 30 -5 22 12 8 28 -20 15 -30 -8 z",
  PUE: "M 265 320 l 18 -6 14 10 4 20 -15 8 -16 -10 z",
  QUE: "M 220 280 l 15 -6 10 10 -2 14 -14 5 z",
  ROO: "M 420 310 l 20 -15 15 10 8 35 5 30 -15 10 -20 -15 z",
  SLP: "M 215 240 l 22 -10 15 15 5 22 -15 12 -20 -8 z",
  SIN: "M 110 210 l 30 -15 20 12 8 40 -15 20 -28 -5 z",
  SON: "M 70 100 l 45 -15 30 20 15 55 -20 30 -40 5 -25 -35 z",
  TAB: "M 345 340 l 22 -5 15 12 3 18 -18 8 -17 -10 z",
  TAM: "M 245 180 l 25 -12 18 15 8 40 -15 18 -25 -10 z",
  TLA: "M 258 310 l 10 -4 8 7 -2 10 -10 3 z",
  VER: "M 280 260 l 20 -8 15 15 8 45 5 35 -12 18 -20 -15 -10 -40 z",
  YUC: "M 380 290 l 30 -15 25 8 10 22 -15 18 -30 5 z",
  ZAC: "M 175 230 l 25 -10 15 12 5 22 -15 12 -22 -8 z",
};

export function MexicoMap({ year, onHoverState, hoveredState }: MexicoMapProps) {
  const stateColors = useMemo(() => {
    const colors: Record<string, string> = {};
    states.forEach((state) => {
      const value = state.youthParticipation[year] ?? 30;
      colors[state.id] = getColor(value);
    });
    return colors;
  }, [year]);

  return (
    <svg
      viewBox="0 40 470 420"
      className="w-full h-auto"
      role="img"
      aria-label={`Mapa de participación juvenil en México, ${year}`}
    >
      {Object.entries(statePathsData).map(([id, d]) => (
        <motion.path
          key={id}
          d={d}
          animate={{ fill: stateColors[id] || "#1a1a1a" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          stroke={hoveredState === id ? "var(--accent)" : "var(--bg)"}
          strokeWidth={hoveredState === id ? 2 : 1}
          className="cursor-pointer"
          onMouseEnter={() => onHoverState(id)}
          onMouseLeave={() => onHoverState(null)}
        />
      ))}
    </svg>
  );
}
