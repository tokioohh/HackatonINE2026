"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { elections, participationByAge, ageGroups } from "@/lib/data";
import { FadeIn } from "../ui/FadeIn";

type AgeKey = "18-24" | "25-34" | "35-44" | "45-59" | "60+";

export function ExplorerSection() {
  const [selectedGroup, setSelectedGroup] = useState<AgeKey>("18-24");

  const chartData = useMemo(() => {
    return participationByAge.map((entry) => ({
      year: entry.year,
      value: entry[selectedGroup],
      overall: elections.find((e) => e.year === entry.year)?.overallParticipation ?? 0,
    }));
  }, [selectedGroup]);

  const maxValue = 75;
  const chartHeight = 300;
  const chartWidth = 600;
  const barWidth = 60;
  const gap = (chartWidth - barWidth * chartData.length) / (chartData.length - 1);

  return (
    <section
      id="explora"
      data-ui
      className="min-h-svh"
      style={{ padding: "120px var(--margin)", background: "var(--surface)" }}
    >
      <FadeIn>
        <h2 className="text-[var(--step-head)] font-bold tracking-tight mb-2">
          Explora tú mismo
        </h2>
        <p className="text-[var(--muted)] text-[var(--step-body)] max-w-[50ch] mb-12">
          Selecciona un grupo de edad para ver cómo evolucionó su participación
          a lo largo de las 6 elecciones.
        </p>
      </FadeIn>

      <div className="md:flex md:gap-12">
        <div className="md:w-[200px] shrink-0 mb-8 md:mb-0">
          <p className="text-[var(--muted)] text-[var(--step-small)] mb-3">
            Grupo de edad
          </p>
          <div className="flex flex-row md:flex-col gap-2">
            {ageGroups.map((group) => (
              <button
                key={group.label}
                onClick={() => setSelectedGroup(group.label as AgeKey)}
                className={`text-left px-4 py-2 text-[var(--step-small)] transition-colors ${
                  selectedGroup === group.label
                    ? "bg-[var(--accent)] text-[var(--accent-ink)] font-medium"
                    : "bg-[rgba(255,255,255,0.05)] text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--accent)]" />
              <span className="text-[var(--muted)] text-[var(--step-small)]">
                {selectedGroup} años
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--muted)] opacity-30" />
              <span className="text-[var(--muted)] text-[var(--step-small)]">
                Promedio general
              </span>
            </div>
          </div>

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight + 40}`}
            className="w-full max-w-[600px] h-auto"
            role="img"
            aria-label={`Participación del grupo ${selectedGroup} por año`}
          >
            {chartData.map((d, i) => {
              const x = i * (barWidth + gap);
              const barH = (d.value / maxValue) * chartHeight;
              const overallH = (d.overall / maxValue) * chartHeight;
              return (
                <g key={d.year}>
                  <motion.rect
                    x={x}
                    width={barWidth}
                    rx={0}
                    fill="rgba(255,255,255,0.08)"
                    animate={{
                      y: chartHeight - overallH,
                      height: overallH,
                    }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                  <motion.rect
                    x={x + 8}
                    width={barWidth - 16}
                    rx={0}
                    fill="var(--accent)"
                    animate={{
                      y: chartHeight - barH,
                      height: barH,
                    }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                  />
                  <text
                    x={x + barWidth / 2}
                    y={chartHeight + 20}
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="13"
                    fontFamily="General Sans, system-ui"
                  >
                    {d.year}
                  </text>
                  <motion.text
                    x={x + barWidth / 2}
                    textAnchor="middle"
                    fill="var(--ink)"
                    fontSize="14"
                    fontWeight="700"
                    fontFamily="General Sans, system-ui"
                    animate={{ y: chartHeight - barH - 8 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                  >
                    {d.value}%
                  </motion.text>
                </g>
              );
            })}
          </svg>

          <p className="text-[var(--muted)] text-[13px] mt-6">
            Fuente: CCPC INE 2009–2024
          </p>
        </div>
      </div>
    </section>
  );
}
