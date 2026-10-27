"use client";

import { motion } from "framer-motion";
import type { AgeGroupParticipation } from "@/lib/data";

interface AgeBarChartProps {
  data: AgeGroupParticipation;
  highlightGroup: string;
  year: number;
  era?: "paper" | "digital";
}

const groups = ["18-24", "25-34", "35-44", "45-59", "60+"] as const;

export function AgeBarChart({ data, highlightGroup, year, era = "digital" }: AgeBarChartProps) {
  const maxValue = 80;
  const isPaper = era === "paper";

  return (
    <div className="space-y-4">
      {groups.map((group, i) => {
        const value = data[group];
        const isHighlight = group === highlightGroup;
        return (
          <div key={group} className="flex items-center gap-4">
            <span
              className="w-[60px] text-right shrink-0"
              style={{
                fontSize: "var(--step-small)",
                color: isPaper
                  ? isHighlight ? "var(--ink-press)" : "var(--ink-faded)"
                  : isHighlight ? "var(--ink)" : "var(--muted)",
                fontWeight: isHighlight ? 600 : 400,
                fontFamily: isPaper ? "var(--font-serif)" : "inherit",
              }}
            >
              {group}
            </span>
            <div
              className="flex-1 relative overflow-hidden"
              style={{
                height: "36px",
                background: isPaper ? "rgba(26, 18, 8, 0.1)" : "var(--surface)",
              }}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background: isPaper
                    ? isHighlight ? "var(--headline-red)" : "var(--ink-aged)"
                    : isHighlight ? "var(--ine-purple-bright)" : "var(--muted)",
                  opacity: isHighlight ? 1 : isPaper ? 0.45 : 0.3,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(value / maxValue) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span
              className="w-[52px]"
              style={{
                fontSize: "var(--step-small)",
                color: isPaper
                  ? isHighlight ? "var(--ink-press)" : "var(--ink-faded)"
                  : isHighlight ? "var(--ink)" : "var(--muted)",
                fontWeight: isHighlight ? 700 : 400,
              }}
            >
              {value}%
            </span>
          </div>
        );
      })}
      <p
        style={{
          fontSize: "13px",
          marginTop: "16px",
          color: isPaper ? "var(--ink-faded)" : "var(--muted)",
          fontFamily: isPaper ? "var(--font-serif)" : "inherit",
          fontStyle: isPaper ? "italic" : "normal",
        }}
      >
        Fuente: CCPC INE {year}
      </p>
    </div>
  );
}
