"use client";

import { motion } from "framer-motion";
import type { AgeGroupParticipation } from "@/lib/data";

interface HandDrawnBarChartProps {
  data: AgeGroupParticipation;
  highlightGroups?: string[];
  year: number;
}

const groups = ["18-24", "25-34", "35-44", "45-59", "60+"] as const;

const groupLabels: Record<string, string> = {
  "18-24": "18–24 años",
  "25-34": "25–34 años",
  "35-44": "35–44 años",
  "45-59": "45–59 años",
  "60+": "60+ años",
};

export function HandDrawnBarChart({
  data,
  highlightGroups = ["18-24", "25-34"],
  year,
}: HandDrawnBarChartProps) {
  const maxValue = 75;

  return (
    <div className="relative w-full">
      <div className="space-y-4">
        {groups.map((group, i) => {
          const value = data[group];
          const isHighlight = highlightGroups.includes(group);
          const widthPct = Math.min(100, (value / maxValue) * 100);

          return (
            <div key={group} className="space-y-1">
              <div className="flex justify-between items-baseline text-xs font-mono">
                <span
                  className={
                    isHighlight
                      ? "font-bold text-[#DC2626] flex items-center gap-1.5"
                      : "text-[#4B5563]"
                  }
                >
                  {isHighlight && (
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  )}
                  <span>{groupLabels[group]}</span>
                </span>
                <span
                  className={
                    isHighlight
                      ? "font-poster text-xl text-[#DC2626] leading-none"
                      : "font-mono font-bold text-[#141312]"
                  }
                >
                  {value}%
                </span>
              </div>

              {/* Contenedor de barra estilo trazado en hoja cuadriculada */}
              <div className="h-6 w-full bg-neutral-200/70 border border-neutral-300 relative overflow-hidden rounded-xs">
                <motion.div
                  className={`h-full ${
                    isHighlight
                      ? "bg-[#DC2626]"
                      : "bg-[#374151]"
                  }`}
                  style={{
                    backgroundImage: isHighlight
                      ? "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)"
                      : "none",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${widthPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota al pie */}
      <div className="mt-5 pt-3 border-t border-dashed border-neutral-300 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
        <span className="italic font-typewriter text-[#DC2626]">
          ↑ Ambos grupos menores de 35 comparten la base más baja de participación.
        </span>
        <span className="font-bold">CCPC INE {year}</span>
      </div>
    </div>
  );
}
