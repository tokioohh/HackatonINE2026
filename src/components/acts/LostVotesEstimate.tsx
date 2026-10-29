"use client";

import { motion } from "framer-motion";
import { getLostVotes, elections } from "@/lib/data";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { Calculator } from "lucide-react";

export function LostVotesEstimate() {
  const lostVotes = getLostVotes();
  const e2024 = elections.find((e) => e.year === 2024)!;
  const actual = e2024.youthVoters;
  const hypothetical = actual + lostVotes;

  return (
    <section
      id="votos-perdidos"
      className="relative py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Doodles tenues de fondo (marcas a lápiz en la libreta) */}
      <NotebookBgDoodle
        src="/doodles/casillamarcada.png"
        alt="Casilla fondo libreta"
        width={130}
        tilt={-8}
        opacity={0.14}
        className="top-12 left-10 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/cactus.png"
        alt="Cactus fondo libreta"
        width={135}
        tilt={10}
        opacity={0.13}
        className="bottom-10 right-14 hidden md:block"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cabecera de la sección con sello de goma */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] border-2 border-[#B91C1C] px-3 py-1 rotate-[-2deg] bg-white shadow-xs inline-flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-[#B91C1C]" />
              <span>ESCENARIO HIPOTÉTICO</span>
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-[#141312] leading-snug">
            ¿Qué pasaría si los jóvenes de 2024 hubieran votado al mismo ritmo que los de 2012, cuando la participación juvenil alcanzó su máximo histórico (55.6%)?
          </h3>
        </motion.div>

        {/* Comparativa liberada sin caja contenedora exterior: directo sobre el papel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-8"
        >
          {/* Fichas comparativas asimétricas */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-10">
            {/* Real 2024: Anotación con cinta */}
            <div className="relative bg-white/90 p-6 border-2 border-black/80 shadow-[4px_4px_0px_#141312] rotate-[-1deg] text-center md:text-left">
              <ScotchTape className="-top-3 left-6 w-24 h-5" tilt="2deg" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                ● VOTOS REALES EN 2024
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#141312] leading-none">
                {(actual / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#DC2626]">MILLONES</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#4B5563] mt-2">
                jóvenes de 18–24 años acudieron a las urnas (tasa del 47.1%).
              </p>
            </div>

            {/* Escenario 2012: Recorte contrastante con inclinación opuesta */}
            <div className="relative bg-[#F3F4F6]/90 p-6 border-2 border-dashed border-neutral-400 rotate-[1.5deg] text-center md:text-left">
              <ScotchTape className="-top-3 right-6 w-24 h-5" tilt="-3deg" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
                ○ CON LA TASA PICO DE 2012 (55.6%)
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#6B7280] leading-none">
                {(hypothetical / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#9CA3AF]">MILLONES</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#6B7280] mt-2">
                habrían votado si se hubiera mantenido el récord juvenil.
              </p>
            </div>
          </div>

          {/* Bloque central de diferencia: Sello destacado tipo Post-It / Recorte */}
          <div className="relative bg-[#FFE66D] border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#141312] rotate-[-0.8deg] text-center max-w-2xl mx-auto">
            <ScotchTape className="-top-3.5 left-1/2 -translate-x-1/2 w-32 h-6" tilt="1deg" />

            {/* Doodles dibujados al margen del cálculo */}
            <DoodleStamp
              src="/doodles/3enraya.png"
              alt="Tres en raya libreta"
              width={120}
              tilt={-6}
              className="absolute -left-6 sm:-left-16 -top-8 hidden md:block"
            />
            <DoodleStamp
              src="/doodles/pulgarvoto.png"
              alt="Pulgar entintado de votación"
              width={100}
              tilt={10}
              className="absolute -right-4 sm:-right-14 -bottom-10 hidden sm:block"
            />

            <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#B91C1C] block mb-1">
              LA BRECHA INVISIBLE:
            </span>
            <p className="font-typewriter text-sm sm:text-base text-[#141312] uppercase leading-relaxed">
              Diferencia de{" "}
              <span className="font-poster text-4xl sm:text-6xl text-[#DC2626] block sm:inline sm:mx-2 underline decoration-wavy decoration-[#141312]">
                ~{(lostVotes / 1_000_000).toFixed(1)}M
              </span>{" "}
              de votos jóvenes ausentes.
            </p>
          </div>

          {/* Nota metodológica oficial de dev al margen */}
          <p className="mt-8 text-center text-xs font-typewriter text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            * Cálculo: lista nominal 18–24 de 2024 (14.9M) × tasa de participación de 2012 (55.6%) − votos reales de 18–24 en 2024 (7.0M). Ejercicio cuantitativo basado en los Conteos Censales de Participación Ciudadana (CCPC INE).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
