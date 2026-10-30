"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { elections } from "@/lib/data";
import { ScotchTape } from "@/components/ui/DoodleStickers";

const TIMELINE_PHOTOS: Record<number, { src: string; alt: string; credit: string; tilt: string }> = {
  2009: {
    src: "/images/elecciones-mx/04-fila-adultos-mayores-2024.jpg",
    alt: "Fila preferencial en casilla electoral",
    credit: "PetrohsW · CC BY-SA 4.0",
    tilt: "rotate-[2.5deg]",
  },
  2012: {
    src: "/images/elecciones-mx/11-ciudadano-votando-2012.jpg",
    alt: "Ciudadano depositando boleta, elecciones 2012",
    credit: "ProtoplasmaKid · CC BY-SA 4.0",
    tilt: "rotate-[-1.8deg]",
  },
  2015: {
    src: "/images/elecciones-mx/12-bloques-boletas-cdmx-2024.jpg",
    alt: "Bloques de boletas listas para usar",
    credit: "ProtoplasmaKid · CC BY-SA 4.0",
    tilt: "rotate-[3deg]",
  },
  2018: {
    src: "/images/elecciones-mx/09-votante-silla-ruedas-2018.jpg",
    alt: "Votante en silla de ruedas, elecciones 2018",
    credit: "ProtoplasmaKid · CC BY-SA 4.0",
    tilt: "rotate-[-2.2deg]",
  },
  2021: {
    src: "/images/elecciones-mx/02-casilla-edomex-2024.jpg",
    alt: "Casilla de votación en domicilio, Estado de México",
    credit: "PetrohsW · CC BY-SA 4.0",
    tilt: "rotate-[1.5deg]",
  },
  2024: {
    src: "/images/elecciones-mx/01-boleta-2024-sonora.jpg",
    alt: "Boleta de votación presidencial 2024",
    credit: "WendyAvilesR · CC0",
    tilt: "rotate-[-2.8deg]",
  },
};

interface ElectionSlideProps {
  election: (typeof elections)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function ElectionSlide({ election, index, total, scrollYProgress }: ElectionSlideProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const cardOpacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.5 / total, 1 / total]
      : isLast
        ? [index / total, (index + 0.5) / total, 1]
        : [index / total, (index + 0.5) / total, (index + 1) / total],
    isFirst
      ? [1, 1, 0.35]
      : isLast
        ? [0.35, 1, 1]
        : [0.35, 1, 0.35]
  );

  // Animación de la barra de participación juvenil sincronizada con el scroll
  const youthBarWidth = useTransform(
    scrollYProgress,
    [
      Math.max(0, (index - 0.2) / total),
      (index + 0.3) / total,
    ],
    ["0%", `${election.under35Participation}%`]
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

          {/* Foto polaroid pegada — visible en lg+ */}
          {TIMELINE_PHOTOS[election.year] && (
            <div className={`absolute -top-6 -right-4 z-20 hidden lg:block ${TIMELINE_PHOTOS[election.year].tilt}`}>
              <div className="w-48 xl:w-56 bg-white p-2 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.18)]">
                <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-24 h-5" tilt="1deg" />
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={TIMELINE_PHOTOS[election.year].src}
                    alt={TIMELINE_PHOTOS[election.year].alt}
                    fill
                    sizes="224px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
                <p className="text-[9px] font-mono text-[#9CA3AF] text-center pt-1.5 leading-tight">
                  {TIMELINE_PHOTOS[election.year].credit}
                </p>
              </div>
            </div>
          )}

          <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Columna Izquierda: Año en gran tamaño y narrativa oficial */}
            <div className="md:col-span-7 space-y-5">
              <h3 className="font-poster text-3xl sm:text-5xl md:text-8xl text-[#141312] leading-[0.92] uppercase tracking-wide">
                <span className="text-[#DC2626]">{election.year}</span> · {election.milestone}
              </h3>

              <p className="font-serif italic text-base sm:text-xl text-[#374151] leading-relaxed">
                {election.milestoneDetail}
              </p>

              <div className="pt-2 text-xs font-mono text-[#6B7280] flex items-center gap-4 border-t border-dashed border-neutral-300">
                <span>PADRÓN TOTAL: <strong>{(election.overallParticipation).toFixed(1)}%</strong></span>
                <span>•</span>
                <span>MENORES DE 35: <strong>{(election.under35Participation).toFixed(1)}%</strong></span>
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

              {/* Barra de menores de 35 */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="font-bold text-[#DC2626] uppercase">Participación menores de 35</span>
                  <span className="font-bold text-[#DC2626]">{election.under35Participation}%</span>
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
                <span className="text-[#6B7280]">PESO &lt;35 EN URNAS:</span>
                <span className="font-bold text-[#141312] px-2 py-0.5 bg-yellow-100 border border-yellow-300">
                  {election.under35ShareOfVoters}% de los votos
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
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
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
                  className={`group flex-1 min-w-0 flex flex-col items-center py-1 px-0.5 sm:px-1 rounded-xs transition-all cursor-pointer ${
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
                    className={`font-poster text-xs sm:text-base leading-none transition-colors ${
                      isActive ? "text-[#DC2626]" : "text-[#141312] group-hover:text-[#DC2626]"
                    }`}
                  >
                    {election.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase hidden sm:block pt-0.5 truncate max-w-full">
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
