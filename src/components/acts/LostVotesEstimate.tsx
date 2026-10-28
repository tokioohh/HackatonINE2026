"use client";

import { motion } from "framer-motion";
import { getLostVotes, elections } from "@/lib/data";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { PostItNote } from "@/components/ui/NotebookPaper";
import { Sparkles, Calculator } from "lucide-react";

export function LostVotesEstimate() {
  const lostVotes = getLostVotes();
  const e2024 = elections.find((e) => e.year === 2024)!;
  const actual = e2024.youthVoters;
  const hypothetical = actual + lostVotes;

  return (
    <section
      id="votos-perdidos"
      className="relative py-20 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
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
              <span>ESCENARIO HIPOTÉTICO · PROYECCIÓN MATEMÁTICA</span>
            </span>
          </div>

          <h3 className="font-poster text-3xl sm:text-5xl text-[#141312] uppercase leading-tight">
            EL CONTADOR DE VOTOS PERDIDOS
          </h3>

          <p className="font-serif italic text-base sm:text-xl text-[#4B5563] mt-3">
            ¿Qué habría pasado si los jóvenes de 2024 hubieran votado con el entusiasmo cívico de 2012, cuando la tasa juvenil alcanzó su máximo histórico (55.6%)?
          </p>
        </motion.div>

        {/* Tarjeta principal estilo hoja de cálculo / libreta escolar */}
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
                VOTARON EN 2024 (DATO REAL)
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#141312] leading-none">
                {(actual / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#4B5563]">MILLONES</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#4B5563]">
                Jóvenes de 18 a 24 años que acudieron a la casilla (<strong>47.1%</strong> de participación efectiva).
              </p>
            </div>

            {/* Escenario Proyectado con tasa de 2012 */}
            <div className="space-y-2 text-center md:text-left md:border-l md:border-dashed md:border-neutral-300 md:pl-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DC2626] block flex items-center justify-center md:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HABRÍAN VOTADO (CON TASA DE 2012)</span>
              </span>
              <div className="font-poster text-6xl sm:text-7xl text-[#DC2626] leading-none">
                {(hypothetical / 1_000_000).toFixed(1)}{" "}
                <span className="text-3xl sm:text-4xl text-[#DC2626]">MILLONES</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#4B5563]">
                Proyección si se hubiera repetido la afluencia del movimiento #YoSoy132 (<strong>55.6%</strong>).
              </p>
            </div>
          </div>

          {/* Bloque con Resaltador Amarillo: La Brecha en Votos */}
          <div className="bg-[#FEF08A] border-2 border-[#EAB308] p-5 sm:p-6 shadow-md rotate-[-0.5deg] text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#854D0E] block mb-1">
              VOLUMEN DE ABSTENCIÓN JUVENIL GENERACIONAL:
            </span>
            <div className="font-poster text-4xl sm:text-6xl text-[#141312] leading-none my-1">
              <DoodleCircle color="#DC2626">
                <span>~{(lostVotes / 1_000_000).toFixed(1)}</span>
              </DoodleCircle>{" "}
              <span className="text-2xl sm:text-4xl text-[#DC2626]">MILLONES DE VOTOS</span>
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#713F12] pt-2">
              Más de un millón doscientas mil boletas que se quedaron sin marcar respecto al momento más participativo de las juventudes en México.
            </p>
          </div>

          {/* Explicación metodológica oficial */}
          <div className="mt-6 pt-4 border-t border-dashed border-neutral-300 text-[11px] font-mono text-[#6B7280] leading-relaxed">
            <strong>Fórmula de cálculo CCPC:</strong> Lista nominal juvenil de 2024 (14.9 millones) × tasa de participación de 2012 (55.58%) − votos reales de 18 a 24 años en 2024 (7.02 millones). Ejercicio de simulación cívica basada en microdatos oficiales del INE.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
