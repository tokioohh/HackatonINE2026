"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { states } from "@/lib/data";
import { FadeIn } from "../ui/FadeIn";
import { MexicoMap } from "../charts/MexicoMap";

const years = [2009, 2012, 2015, 2018, 2021, 2024] as const;

export function MapSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const hoveredData = useMemo(() => {
    if (!hoveredState) return null;
    const state = states.find((s) => s.id === hoveredState);
    if (!state) return null;
    const current = state.youthParticipation[selectedYear] ?? 0;
    const prev = selectedYear > 2009
      ? state.youthParticipation[years[years.indexOf(selectedYear as typeof years[number]) - 1]] ?? 0
      : 0;
    return { name: state.name, value: current, diff: current - prev };
  }, [hoveredState, selectedYear]);

  return (
    <section className="min-h-svh relative" style={{ padding: "120px var(--margin)" }}>
      <FadeIn>
        <h2 className="text-[var(--step-head)] font-bold tracking-tight mb-2">
          Participación juvenil por estado
        </h2>
        <p className="text-[var(--muted)] text-[var(--step-body)] max-w-[50ch] mb-12">
          El color más oscuro indica mayor participación de 18–24 años.
          Selecciona un año y haz clic en un estado para ver su dato.
        </p>
      </FadeIn>

      <div className="md:flex md:gap-12 items-start">
        <div className="md:w-[65%] relative">
          <MexicoMap
            year={selectedYear}
            onHoverState={setHoveredState}
            hoveredState={hoveredState}
          />

          <AnimatePresence>
            {hoveredData && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-4 right-4 bg-[var(--surface)] p-4 min-w-[200px]"
              >
                <p className="text-[var(--ink)] font-medium">{hoveredData.name}</p>
                <p className="text-[var(--step-lead)] font-bold mt-1">
                  {hoveredData.value}%
                </p>
                {selectedYear > 2009 && (
                  <p
                    className={`text-[var(--step-small)] mt-1 ${
                      hoveredData.diff > 0 ? "text-[var(--accent)]" : "text-[#ff6b6b]"
                    }`}
                  >
                    {hoveredData.diff > 0 ? "+" : ""}
                    {hoveredData.diff}pp vs elección previa
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="md:w-[35%] mt-8 md:mt-0">
          <p className="text-[var(--muted)] text-[var(--step-small)] mb-4">Elección</p>
          <div className="flex flex-col gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`text-left px-4 py-3 transition-colors ${
                  selectedYear === year
                    ? "bg-[var(--accent)] text-[var(--accent-ink)] font-medium"
                    : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[var(--muted)] text-[var(--step-small)] mb-3">Escala</p>
            <div className="flex items-center gap-1">
              {["#e8d5f5", "#c9a0e0", "#a66bc8", "#8338b2", "#5e1d8e", "#3b0764"].map(
                (color, i) => (
                  <div key={i} className="flex-1 h-[24px]" style={{ background: color }} />
                )
              )}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[var(--muted)] text-[13px]">20%</span>
              <span className="text-[var(--muted)] text-[13px]">65%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
