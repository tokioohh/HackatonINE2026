"use client";

import { motion } from "framer-motion";
import { PersonMatrix100 } from "@/components/charts/PersonMatrix100";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { PostItNote } from "@/components/ui/NotebookPaper";

interface BigStatProps {
  figure?: string;
  unit?: string;
  claim?: string;
  caption?: string;
  source?: string;
}

export function BigStat({
  figure = "12.8",
  unit = "%",
  claim = "De cada 100 votos en 2024,",
  caption = "solo 13 vinieron de alguien de 18 a 24 años. El 47% de los jóvenes inscritos sí votó — pero su proporción en el total sigue siendo la menor de todos los grupos de edad.",
  source = "Fuente: CCPC INE 2024 — Conteo censal de participación ciudadana",
}: BigStatProps) {
  return (
    <section
      id="gran-estadistica"
      className="relative min-h-[90vh] py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera del BigStat */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="urgent-tag">
              CCPC 2024 // PROPORCIÓN REAL EN URNAS
            </span>
            <span className="font-mono text-xs text-[#DC2626] font-bold">
              ★ DATO DE IMPACTO
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-tight">
            {claim}
          </h3>
        </motion.div>

        {/* Bloque central: Big number + Post-It + Matriz 10x10 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="space-y-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-dashed border-neutral-300 pb-8">
            {/* Gran Cifra */}
            <div className="flex items-baseline gap-2">
              <span className="font-poster text-8xl sm:text-[11rem] md:text-[13rem] text-[#DC2626] leading-none tracking-tight">
                {figure}
              </span>
              <span className="font-poster text-4xl sm:text-6xl text-[#DC2626] leading-none">
                {unit}
              </span>
            </div>

            {/* Post-It explicativo oficial */}
            <PostItNote color="yellow" tilt="rotate-[1deg]" className="max-w-md w-full">
              <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                {caption}
              </p>
              <div className="mt-3 pt-2 border-t border-black/15 text-[10px] font-mono text-[#6B7280]">
                {source}
              </div>
            </PostItNote>
          </div>

          {/* Matriz 10x10 de votantes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                REPRESENTACIÓN CENSAL DE 100 VOTANTES EN LAS ELECCIONES DE 2024:
              </span>
              <span className="font-mono text-xs text-[#DC2626] font-bold">
                13 JÓVENES VS 87 ADULTOS
              </span>
            </div>

            <PersonMatrix100 />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
