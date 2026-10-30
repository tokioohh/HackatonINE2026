"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { elections } from "@/lib/data";
import { ScotchTape } from "@/components/ui/DoodleStickers";

interface ElectionSlideProps {
  election: (typeof elections)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function ElectionSlide({ election, index, total, scrollYProgress }: ElectionSlideProps) {
  // Opacidad y transición suave al pasar por el viewport
  const cardOpacity = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, Math.min(1, (index + 1) / total)],
    [0.55, 1, 0.55]
  );

  // Animación de la barra de participación juvenil sincronizada con el scroll
  const youthBarWidth = useTransform(
    scrollYProgress,
    [
      Math.max(0, (index - 0.2) / total),
      (index + 0.3) / total,
    ],
    ["0%", `${election.youthParticipation}%`]
  );

  return (
    <div className="w-screen h-full flex items-center justify-center shrink-0 px-4 sm:px-8 md:px-14 select-none">
      <motion.div
        style={{ opacity: cardOpacity }}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Carpeta / Hoja de libreta escolar para el año */}
        <div className="relative bg-[#FAF8F5] p-6 sm:p-10 md:p-12 border border-neutral-300 shadow-[4px_10px_30px_rgba(0,0,0,0.12)] rotate-[-0.3deg]">
          {/* Cintas adhesivas en las esquinas superiores */}
          <ScotchTape className="-top-3.5 left-10 w-28 h-6" tilt="-2deg" />
          <ScotchTape className="-top-3.5 right-10 w-28 h-6" tilt="2.5deg" />

          {/* Marca de agua de año gigante */}
          <div
            className="absolute top-4 right-6 sm:right-10 font-poster text-8xl sm:text-[12rem] md:text-[14rem] text-[#141312]/8 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            {election.year}
          </div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Columna Izquierda: Año en gran tamaño y narrativa oficial */}
            <div className="md:col-span-7 space-y-5">
              <h3 className="font-poster text-5xl sm:text-7xl md:text-8xl text-[#141312] leading-[0.92] uppercase tracking-wide">
                <span className="text-[#DC2626]">{election.year}</span> · {election.milestone}
              </h3>

              <p className="font-serif italic text-base sm:text-xl text-[#374151] leading-relaxed">
                {election.milestoneDetail}
              </p>

              <div className="pt-2 text-xs font-mono text-[#6B7280] flex items-center gap-4 border-t border-dashed border-neutral-300">
                <span>PADRÓN TOTAL: <strong>{(election.overallParticipation).toFixed(1)}%</strong></span>
                <span>•</span>
                <span>JÓVENES (18–24): <strong>{(election.youthParticipation).toFixed(1)}%</strong></span>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de métricas comparativas */}
            <div className="md:col-span-5 bg-white p-5 sm:p-6 border border-neutral-300 shadow-sm space-y-5 rotate-[0.5deg]">
              {/* Participación general */}
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
                  PARTICIPACIÓN GENERAL
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-poster text-5xl sm:text-6xl text-[#141312] leading-none">
                    {election.overallParticipation}
                  </span>
                  <span className="font-poster text-2xl text-[#6B7280]">%</span>
                </div>
              </div>

              {/* Barra de jóvenes (18-24) */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="font-bold text-[#DC2626] uppercase">Participación juvenil (18–24)</span>
                  <span className="font-bold text-[#DC2626]">{election.youthParticipation}%</span>
                </div>
                <div className="w-full h-5 bg-neutral-200 border border-neutral-300 relative overflow-hidden">
                  <motion.div
                    style={{ width: youthBarWidth }}
                    className="h-full bg-[#DC2626]"
                  />
                </div>
              </div>

              {/* Edad promedio del votante */}
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
                  EDAD PROMEDIO DEL VOTANTE
                </span>
                <span className="font-poster text-3xl sm:text-4xl text-[#141312] leading-none">
                  {election.averageVoterAge} <span className="text-xl text-[#6B7280]">años</span>
                </span>
              </div>

              {/* Proporción en el total de votantes */}
              <div className="pt-3 border-t border-dashed border-neutral-300 flex justify-between items-center text-xs font-mono">
                <span className="text-[#6B7280]">PESO JUVENIL EN URNAS:</span>
                <span className="font-bold text-[#141312] px-2 py-0.5 bg-yellow-100 border border-yellow-300">
                  {election.youthShareOfVoters}% de los votos
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  // useScroll mapeado a la sección de 500vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desplazamiento horizontal de las 6 tarjetas (100vw cada una)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.333%"]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        elections.length - 1,
        Math.max(0, Math.round(latest * (elections.length - 1)))
      );
      setActiveYearIndex(idx);
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="timeline" className="relative h-[500vh]">
      {/* Contenedor fijo a pantalla completa durante el scroll */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between notebook-canvas border-b border-dashed border-neutral-300">
        {/* Cabecera superior fijada */}
        <div className="relative z-20 pt-8 sm:pt-10 px-4 sm:px-8 md:px-14 flex items-center justify-between border-b border-dashed border-neutral-300/80 pb-3 bg-[#FAF8F5]/90 backdrop-blur-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="urgent-tag text-[10px]">
                LÍNEA DEL TIEMPO
              </span>
              <span className="font-mono text-xs text-[#DC2626] font-bold">
                2009 — 2024
              </span>
            </div>
            <h2 className="font-poster text-2xl sm:text-4xl text-[#141312] uppercase tracking-wide mt-1">
              SEIS ELECCIONES EN EL TIEMPO
            </h2>
          </div>

          <div className="text-right hidden sm:block font-mono text-xs text-[#6B7280]">
            <span>DESPLAZA HACIA ABAJO PARA NAVEGAR EL CRONOGRAMA LATERAL ↓</span>
          </div>
        </div>

        {/* Barra de progreso de lectura horizontal superior */}
        <div className="relative z-20 w-full h-1 bg-neutral-200">
          <motion.div
            style={{ width: progressBarWidth }}
            className="h-full bg-[#DC2626]"
          />
        </div>

        {/* Pista horizontal con las 6 elecciones */}
        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div
            style={{ x, width: `${elections.length * 100}vw` }}
            className="flex h-full items-center"
          >
            {elections.map((election, index) => (
              <ElectionSlide
                key={election.year}
                election={election}
                index={index}
                total={elections.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>

        {/* Barra inferior de navegación interactiva por años */}
        <div className="relative z-20 pb-5 pt-3 px-4 sm:px-8 md:px-14 bg-[#FAF8F5]/95 backdrop-blur-xs border-t border-dashed border-neutral-300">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
            {elections.map((election, i) => {
              const isActive = activeYearIndex === i;
              return (
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
                  className={`group flex-1 flex flex-col items-center py-1 px-1 rounded-xs transition-all cursor-pointer ${
                    isActive ? "bg-white border border-[#DC2626] shadow-xs" : "hover:bg-neutral-100"
                  }`}
                  aria-label={`Ir al año ${election.year}`}
                >
                  <div
                    className={`w-full h-1.5 rounded-full overflow-hidden mb-1 transition-colors ${
                      isActive ? "bg-[#DC2626]" : "bg-neutral-300 group-hover:bg-neutral-400"
                    }`}
                  />
                  <span
                    className={`font-poster text-sm sm:text-base leading-none transition-colors ${
                      isActive ? "text-[#DC2626]" : "text-[#141312] group-hover:text-[#DC2626]"
                    }`}
                  >
                    {election.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase hidden sm:block pt-0.5">
                    {election.milestone}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
