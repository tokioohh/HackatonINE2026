"use client";

import { motion } from "framer-motion";
import type { AgeGroupParticipation } from "@/lib/data";

interface HandDrawnBarChartProps {
  data: AgeGroupParticipation;
  highlightGroup: string;
  year: number;
}

const groups = ["18-24", "25-34", "35-44", "45-59", "60+"] as const;

const groupLabels: Record<string, string> = {
  "18-24": "18–24",
  "25-34": "25–34",
  "35-44": "35–44",
  "45-59": "45–59",
  "60+": "60+",
};

export function HandDrawnBarChart({ data, highlightGroup, year }: HandDrawnBarChartProps) {
  const maxValue = 80;

  return (
    <div className="relative">
      <div className="space-y-3">
        {groups.map((group, i) => {
          const value = data[group];
          const isHighlight = group === highlightGroup;
          const widthPct = (value / maxValue) * 100;

          return (
            <div key={group}>
              <div className="flex items-center gap-3">
                {/* Etiqueta */}
                <span
                  className="w-[52px] text-right shrink-0"
                  style={{
                    fontFamily: "var(--font-typewriter)",
                    fontSize: "12px",
                    color: isHighlight ? "var(--ink-press)" : "var(--ink-faded)",
                    fontWeight: isHighlight ? 700 : 400,
                  }}
                >
                  {groupLabels[group]}
                </span>

                {/* Barra */}
                <div
                  className="flex-1 relative"
                  style={{ height: "28px", borderBottom: "1px solid rgba(10,10,10,0.15)" }}
                >
                  <motion.div
                    className="absolute inset-y-0 left-0"
                    style={{
                      background: isHighlight
                        ? `repeating-linear-gradient(
                            45deg,
                            var(--ink-press),
                            var(--ink-press) 2px,
                            var(--paper) 2px,
                            var(--paper) 5px
                          )`
                        : `repeating-linear-gradient(
                            45deg,
                            var(--ink-faded),
                            var(--ink-faded) 1.5px,
                            transparent 1.5px,
                            transparent 6px
                          )`,
                      opacity: isHighlight ? 0.9 : 0.35,
                      borderRight: isHighlight ? "2.5px solid var(--ink-press)" : "1px solid var(--ink-faded)",
                      borderTop: isHighlight ? "1.5px solid var(--ink-press)" : "none",
                      borderBottom: isHighlight ? "1.5px solid var(--ink-press)" : "none",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Valor */}
                <motion.span
                  className="w-[44px]"
                  style={{
                    fontFamily: "var(--font-typewriter)",
                    fontSize: isHighlight ? "14px" : "12px",
                    color: isHighlight ? "var(--ink-press)" : "var(--ink-faded)",
                    fontWeight: isHighlight ? 700 : 400,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  {value}%
                </motion.span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Anotación manuscrita con flecha */}
      <motion.div
        className="mt-5 handwritten-note"
        style={{
          fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transform: "rotate(-1.5deg)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <span style={{ fontSize: "1.3em" }}>↑</span>
        <span>¿Dónde están los jóvenes?</span>
      </motion.div>

      {/* Fuente */}
      <p
        style={{
          fontSize: "11px",
          marginTop: "14px",
          color: "var(--ink-ghost)",
          fontFamily: "var(--font-typewriter)",
        }}
      >
        Fuente: CCPC INE {year}
      </p>
    </div>
  );
}
