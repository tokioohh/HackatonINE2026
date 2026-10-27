"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { elections } from "@/lib/data";

/* Paleta por año: de periódico a digital */
const eraStyles = [
  // 2009 — papel puro
  { bg: "#f2ead6", text: "#1a1208", textMuted: "#6b5535", accent: "#9b1c1c", yearColor: "rgba(200,169,107,0.22)", barBg: "rgba(26,18,8,0.12)", fontFamily: "var(--font-serif)" },
  // 2012 — papel, primera mancha de color
  { bg: "#ede0cb", text: "#1a1208", textMuted: "#5c4a2a", accent: "#8b3078", yearColor: "rgba(180,150,100,0.2)", barBg: "rgba(26,18,8,0.12)", fontFamily: "var(--font-serif)" },
  // 2015 — transición (lavanda papelosa)
  { bg: "#c8b0e0", text: "#1a0840", textMuted: "#5a3a7a", accent: "#7b21a8", yearColor: "rgba(120,80,180,0.22)", barBg: "rgba(26,8,64,0.15)", fontFamily: "var(--font-serif)" },
  // 2018 — digital emergente
  { bg: "#281550", text: "#e8d5f5", textMuted: "#c09ad8", accent: "#a855f7", yearColor: "rgba(168,85,247,0.14)", barBg: "rgba(255,255,255,0.08)", fontFamily: "'General Sans', system-ui, sans-serif" },
  // 2021 — casi digital
  { bg: "#160336", text: "#ffffff", textMuted: "#9b7ab8", accent: "#a855f7", yearColor: "rgba(168,85,247,0.09)", barBg: "rgba(255,255,255,0.07)", fontFamily: "'General Sans', system-ui, sans-serif" },
  // 2024 — digital INE puro
  { bg: "#0d0221", text: "#ffffff", textMuted: "#9b7ab8", accent: "#a855f7", yearColor: "rgba(168,85,247,0.07)", barBg: "rgba(255,255,255,0.07)", fontFamily: "'General Sans', system-ui, sans-serif" },
];

/* Sub-componente para cada tarjeta de elección — permite usar hooks correctamente */
interface ElectionCardProps {
  election: (typeof elections)[0];
  i: number;
  scrollYProgress: MotionValue<number>;
  totalCount: number;
}

function ElectionCard({ election, i, scrollYProgress, totalCount }: ElectionCardProps) {
  const s = eraStyles[i] || eraStyles[eraStyles.length - 1];

  const yearOpacity = useTransform(
    scrollYProgress,
    [i / totalCount, (i + 0.5) / totalCount, Math.min(1, (i + 1) / totalCount)],
    [0.3, 1, 0.3]
  );
  const barWidth = useTransform(
    scrollYProgress,
    [Math.max(0, (i - 0.2) / totalCount), (i + 0.3) / totalCount],
    ["0%", `${election.youthParticipation}%`]
  );

  return (
    <div
      className="w-screen h-full flex items-center shrink-0"
      style={{ padding: "0 var(--margin)" }}
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Año + contexto */}
        <div>
          <motion.span
            className="block font-bold leading-[0.8] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(8rem, 20vw, 24rem)",
              color: s.yearColor,
              fontFamily: s.fontFamily,
              opacity: yearOpacity,
            }}
          >
            {election.year}
          </motion.span>
          <p
            className="font-medium mt-4"
            style={{
              fontSize: "var(--step-lead)",
              color: s.accent,
              fontFamily: s.fontFamily,
              fontStyle: i < 3 ? "italic" : "normal",
            }}
          >
            {election.milestone}
          </p>
          <p
            className="mt-3 max-w-[40ch]"
            style={{ fontSize: "var(--step-body)", color: s.textMuted, fontFamily: s.fontFamily }}
          >
            {election.milestoneDetail}
          </p>
        </div>

        {/* Métricas */}
        <div className="space-y-6">
          <div>
            <p style={{ fontSize: "var(--step-small)", color: s.textMuted, marginBottom: "8px" }}>
              Participación general
            </p>
            <div className="flex items-end gap-3">
              <span
                className="font-bold leading-none tracking-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: s.text, fontFamily: s.fontFamily }}
              >
                {election.overallParticipation}
              </span>
              <span style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", color: s.textMuted, lineHeight: 1, marginBottom: "4px" }}>
                %
              </span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "var(--step-small)", color: s.textMuted, marginBottom: "8px" }}>
              Participación juvenil (18-24)
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[48px] relative overflow-hidden" style={{ background: s.barBg }}>
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{ background: s.accent, width: barWidth }}
                />
              </div>
              <span className="font-bold w-[64px]" style={{ fontSize: "var(--step-lead)", color: s.text }}>
                {election.youthParticipation}%
              </span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "var(--step-small)", color: s.textMuted, marginBottom: "4px" }}>
              Edad promedio del votante
            </p>
            <span className="font-bold" style={{ fontSize: "var(--step-lead)", color: s.text }}>
              {election.averageVoterAge} años
            </span>
          </div>

          <div>
            <p style={{ fontSize: "var(--step-small)", color: s.textMuted, marginBottom: "4px" }}>
              Jóvenes como % del total de votantes
            </p>
            <span className="font-bold" style={{ fontSize: "var(--step-lead)", color: s.text }}>
              {election.youthShareOfVoters}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sub-componente para cada punto indicador */
interface ElectionDotProps {
  i: number;
  scrollYProgress: MotionValue<number>;
  totalCount: number;
  accent: string;
}

function ElectionDot({ i, scrollYProgress, totalCount, accent }: ElectionDotProps) {
  const bgColor = useTransform(
    scrollYProgress,
    [(i - 0.1) / totalCount, (i + 0.5) / totalCount],
    ["rgba(128,128,128,0.2)", accent]
  );
  return <motion.div className="h-[3px] flex-1" style={{ background: bgColor }} />;
}

/* Componente principal */
export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    ["#f2ead6", "#ede0cb", "#c8b0e0", "#281550", "#160336", "#0d0221"]
  );
  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["#9b1c1c", "#7b21a8", "#a855f7"]
  );
  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1a1208", "#3a1060", "#ffffff"]
  );
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <motion.div
        className="sticky top-0 h-svh overflow-hidden flex flex-col"
        style={{ background: bgColor }}
      >
        <div className="flex items-center justify-between" style={{ padding: "40px var(--margin) 0" }}>
          <motion.h2
            className="font-bold tracking-tight"
            style={{ fontSize: "var(--step-head)", color: titleColor }}
          >
            Línea del tiempo
          </motion.h2>
          <motion.span style={{ fontSize: "var(--step-small)", color: titleColor, opacity: 0.6 }}>
            2009 — 2024
          </motion.span>
        </div>

        <div style={{ height: "2px", margin: "12px var(--margin) 0", background: "rgba(128,128,128,0.15)" }}>
          <motion.div className="h-full" style={{ width: progressWidth, background: progressColor }} />
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ x, width: `${elections.length * 100}vw` }}
          >
            {elections.map((election, i) => (
              <ElectionCard
                key={election.year}
                election={election}
                i={i}
                scrollYProgress={scrollYProgress}
                totalCount={elections.length}
              />
            ))}
          </motion.div>
        </div>

        <div style={{ padding: "0 var(--margin) 32px" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            {elections.map((election, i) => (
              <ElectionDot
                key={election.year}
                i={i}
                scrollYProgress={scrollYProgress}
                totalCount={elections.length}
                accent={eraStyles[i]?.accent || "#a855f7"}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: "4px", marginTop: "6px" }}>
            {elections.map((election, i) => (
              <button
                key={election.year}
                onClick={() => {
                  if (!containerRef.current) return;
                  const top = containerRef.current.offsetTop;
                  const height = containerRef.current.offsetHeight;
                  const vh = window.innerHeight;
                  const target = top + (i / (elections.length - 1)) * (height - vh);
                  window.scrollTo({ top: target, behavior: "smooth" });
                }}
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontFamily: eraStyles[i]?.fontFamily || "inherit",
                  fontSize: "11px",
                  textAlign: "center",
                }}
                aria-label={`Ir al año ${election.year}`}
              >
                <motion.span style={{ color: titleColor, opacity: 0.55 }}>
                  {election.year}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
