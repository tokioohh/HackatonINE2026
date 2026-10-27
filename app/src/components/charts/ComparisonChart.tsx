"use client";

import { motion } from "framer-motion";
import type { AgeGroupParticipation } from "@/lib/data";

interface ComparisonChartProps {
  before: AgeGroupParticipation;
  after: AgeGroupParticipation;
  beforeLabel: string;
  afterLabel: string;
}

const groups = ["18-24", "25-34", "35-44", "45-59", "60+"] as const;

export function ComparisonChart({ before, after, beforeLabel, afterLabel }: ComparisonChartProps) {
  const maxValue = 80;

  return (
    <div>
      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--muted)] opacity-30" />
          <span className="text-[var(--muted)] text-[var(--step-small)]">{beforeLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--accent)]" />
          <span className="text-[var(--muted)] text-[var(--step-small)]">{afterLabel}</span>
        </div>
      </div>

      <div className="space-y-5">
        {groups.map((group, i) => {
          const beforeVal = before[group];
          const afterVal = after[group];
          const diff = afterVal - beforeVal;
          return (
            <div key={group}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[var(--muted)] text-[var(--step-small)]">{group}</span>
                <span
                  className={`text-[var(--step-small)] font-medium ${
                    diff > 0 ? "text-[var(--accent)]" : "text-[var(--muted)]"
                  }`}
                >
                  {diff > 0 ? "+" : ""}
                  {diff.toFixed(1)}pp
                </span>
              </div>
              <div className="relative h-[28px] bg-[rgba(255,255,255,0.05)]">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[var(--muted)] opacity-20"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(beforeVal / maxValue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                />
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[var(--accent)] h-[4px] top-[12px]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(afterVal / maxValue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[var(--muted)] text-[13px] mt-4">
        Fuente: CCPC INE
      </p>
    </div>
  );
}
