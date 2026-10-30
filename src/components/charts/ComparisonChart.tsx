"use client";

import { motion } from "framer-motion";
import type { AgeGroupParticipation } from "@/lib/data";

interface ComparisonChartProps {
  before: AgeGroupParticipation;
  after: AgeGroupParticipation;
  beforeLabel?: string;
  afterLabel?: string;
}

const groups = ["18-24", "25-34", "35-44", "45-59", "60+"] as const;

const groupLabels: Record<string, string> = {
  "18-24": "18–24 años",
  "25-34": "25–34 años",
  "35-44": "35–44 años",
  "45-59": "45–59 años",
  "60+": "60+ años",
};

export function ComparisonChart({
  before,
  after,
  beforeLabel = "2012 (Pico #YoSoy132)",
  afterLabel = "2024 (Presidencial)",
}: ComparisonChartProps) {
  const maxValue = 80;

  return (
    <div className="w-full">
      {/* Leyenda comparativa */}
      <div className="flex flex-wrap gap-4 mb-5 pb-3 border-b border-dashed border-neutral-300 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-[#DC2626]" />
          <span className="font-bold text-[#141312]">{beforeLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-[#3B82F6]" />
          <span className="font-bold text-[#141312]">{afterLabel}</span>
        </div>
      </div>

      <div className="space-y-4">
        {groups.map((group, i) => {
          const beforeVal = before[group];
          const afterVal = after[group];
          const diff = afterVal - beforeVal;
          const isYouth = group === "18-24" || group === "25-34";

          return (
            <div key={group} className="space-y-1">
              <div className="flex justify-between items-baseline text-xs font-mono">
                <span className={isYouth ? "font-bold text-[#DC2626]" : "text-[#4B5563]"}>
                  {groupLabels[group]}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-500 font-mono text-[11px]">
                    {beforeVal}% → {afterVal}%
                  </span>
                  <span
                    className={`font-mono text-xs font-bold ${
                      diff >= 0 ? "text-[#16A34A]" : "text-[#DC2626]"
                    }`}
                  >
                    {diff >= 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)} pp
                  </span>
                </div>
              </div>

              {/* Barras dobles comparativas */}
              <div className="space-y-1 bg-neutral-100 p-1.5 border border-neutral-300 rounded-xs">
                {/* Barra Before (2012) */}
                <div className="h-3 w-full bg-neutral-200 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-[#DC2626]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(beforeVal / maxValue) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                </div>

                {/* Barra After (2024) */}
                <div className="h-3 w-full bg-neutral-200 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-[#3B82F6]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(afterVal / maxValue) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-3 border-t border-dashed border-neutral-300 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
        <span className="font-typewriter text-[#DC2626]">
          La distancia entre menores y mayores de 35 se mantuvo entre 13 y 15 pp.
        </span>
        <span className="font-bold">CCPC INE</span>
      </div>
    </div>
  );
}
