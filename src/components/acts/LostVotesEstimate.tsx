"use client";

import { motion } from "framer-motion";
import { getLostVotes, elections } from "@/lib/data";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
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

        {/* Tarjeta principal estilo libreta / expediente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative bg-[#FAF8F5] p-6 sm:p-10 border border-neutral-300 shadow-[4px_8px_25px_rgba(0,0,0,0.12)] rotate-[0.3deg] rounded-xs"
        >
          <ScotchTape className="-top-3.5 left-1/2 -translate-x-1/2 w-32 h-6" tilt="-1deg" />

          <div className="grid md:grid-cols-2 gap-8 items-center border-b border-dashed border-neutral-300 pb-8 mb-8">
            {/* Dato Real 2024 */}
            <div className="space-y-2 text-center md:text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4B5563] block">
                VOTARON EN 2024
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#141312] leading-none">
                {(actual / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#4B5563]">M</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#4B5563]">
                jóvenes de 18–24 años (participación del 47.1%)
              </p>
            </div>

            {/* Escenario Proyectado con tasa de 2012 */}
            <div className="space-y-2 text-center md:text-left md:border-l md:border-dashed md:border-neutral-300 md:pl-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B7280] block">
                HABRÍAN VOTADO (CON TASA DE 2012)
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#4B5563]/60 leading-none">
                {(hypothetical / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#4B5563]/60">M</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#4B5563]">
                con participación del 55.6%
              </p>
            </div>
          </div>

          {/* Bloque de diferencia: ~1.2M votos adicionales */}
          <div className="bg-[#141312] text-[#FAF8F5] p-5 sm:p-6 shadow-md rotate-[-0.5deg] text-center max-w-xl mx-auto">
            <p className="font-typewriter text-xs sm:text-sm tracking-wider uppercase leading-relaxed">
              Diferencia:{" "}
              <span className="font-poster text-3xl sm:text-5xl text-[#FBBF24] block sm:inline sm:mx-2">
                ~{(lostVotes / 1_000_000).toFixed(1)} millones
              </span>{" "}
              de votos jóvenes adicionales.
            </p>
          </div>

          {/* Nota metodológica oficial de dev */}
          <p className="mt-6 text-center text-xs font-typewriter text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Cálculo: lista nominal 18–24 de 2024 (14.9M) × tasa de participación de 2012 (55.6%) − votos reales de 18–24 en 2024 (7.0M). Es un ejercicio simplificado: la composición del padrón y las condiciones de cada elección difieren.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
