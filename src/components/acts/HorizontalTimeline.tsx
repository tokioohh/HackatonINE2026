"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { elections } from "@/lib/data";
import { SpiralPaperCard } from "@/components/ui/NotebookPaper";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { Sparkles, Calendar, TrendingUp } from "lucide-react";

export function HorizontalTimeline() {
  const [selectedYear, setSelectedYear] = useState<number>(2012); // Default to historic peak 2012
  const activeElection = elections.find((e) => e.year === selectedYear) || elections[1];

  const POSTIT_COLORS = [
    { bg: "bg-[#FEF08A]", text: "text-[#713F12]", border: "border-[#EAB308]/60", tilt: "-rotate-2" }, // 2009
    { bg: "bg-[#BAE6FD]", text: "text-[#0369A1]", border: "border-[#38BDF8]/60", tilt: "rotate-1.5" }, // 2012
    { bg: "bg-[#BBF7D0]", text: "text-[#166534]", border: "border-[#4ADE80]/60", tilt: "-rotate-1" }, // 2015
    { bg: "bg-[#FED7AA]", text: "text-[#9A3412]", border: "border-[#FB923C]/60", tilt: "rotate-2" }, // 2018
    { bg: "bg-[#E9D5FF]", text: "text-[#6B21A8]", border: "border-[#C084FC]/60", tilt: "-rotate-2" }, // 2021
    { bg: "bg-[#FECDD3]", text: "text-[#9F1239]", border: "border-[#FB7185]/60", tilt: "rotate-1" }, // 2024
  ];

  return (
    <section
      id="timeline"
      className="relative py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de la Línea de Tiempo */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-8 pb-4 border-b border-dashed border-neutral-300">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="urgent-tag text-[10px]">
                CRONOLOGÍA COMPARADA (2009–2024)
              </span>
              <span className="font-mono text-xs text-[#DC2626] font-bold">
                CCPC · SEIS ELECCIONES FEDERALES
              </span>
            </div>
            <h3 className="font-poster text-3xl sm:text-5xl text-[#141312] uppercase tracking-wide">
              HITOS Y ELECCIONES EN EL TIEMPO
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] mt-1">
              Haz clic en cualquiera de los Post-Its para abrir el expediente del proceso electoral.
            </p>
          </div>
          <span className="text-xs font-mono text-[#DC2626] uppercase font-bold shrink-0">
            SELECCIONA UN AÑO ↓
          </span>
        </div>

        {/* ═══ 6 POST-ITS MULTICOLORES CON CINTA ADHESIVA ═══ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {elections.map((item, idx) => {
            const active = selectedYear === item.year;
            const style = POSTIT_COLORS[idx % POSTIT_COLORS.length];

            return (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                aria-pressed={active}
                className={`group relative p-3.5 sm:p-4 text-left transition-all duration-200 cursor-pointer rounded-xs border ${
                  style.bg
                } ${style.text} ${style.border} ${
                  active
                    ? "ring-2 ring-[#DC2626] ring-offset-2 scale-105 rotate-0 z-20 shadow-[4px_8px_18px_rgba(0,0,0,0.22)]"
                    : `${style.tilt} hover:rotate-0 hover:scale-105 hover:z-10 shadow-[2px_4px_10px_rgba(0,0,0,0.1)]`
                }`}
              >
                {/* Cinta adhesiva en la parte superior del Post-It */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/70 shadow-xs border-l border-r border-dashed border-gray-400/50 backdrop-blur-xs pointer-events-none" />

                {/* Indicador de activo */}
                {active && (
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#DC2626] rounded-full border border-white shadow-xs animate-ping" />
                )}

                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-poster text-2xl sm:text-3xl leading-none">
                    {item.year}
                  </span>
                  <span className="text-[9px] font-mono uppercase font-black opacity-80">
                    {item.type}
                  </span>
                </div>

                <div className="font-typewriter text-[11px] font-bold leading-tight line-clamp-2 pt-0.5 opacity-90">
                  {item.milestone}
                </div>

                {/* Micro dato porcentual */}
                <div className="mt-3 pt-2 border-t border-black/15 flex justify-between items-center text-[10px] font-mono">
                  <span>Jóvenes:</span>
                  <span className="font-bold text-[#DC2626]">{item.youthParticipation}%</span>
                </div>

                {/* Sombra de despegado en esquina inferior */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-black/15 to-transparent pointer-events-none" />
              </button>
            );
          })}
        </div>

        {/* ═══ EXPEDIENTE DESPLEGABLE EN HOJA DE LIBRETA ═══ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeElection.year}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <SpiralPaperCard tilt="rotate-[0.2deg]">
              <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
                {/* Bloque Izquierdo: Narrativa del hito */}
                <div className="lg:max-w-2xl space-y-4">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-[#DC2626] font-bold uppercase tracking-wider">
                      PROCESO FEDERAL {activeElection.year} // {activeElection.type.toUpperCase()}
                    </span>
                    <span className="text-neutral-400">/</span>
                    <span className="text-[#4B5563] font-bold">
                      ERA: {activeElection.platformSummary}
                    </span>
                  </div>

                  <h4 className="font-poster text-3xl sm:text-5xl text-[#141312] uppercase tracking-wide">
                    {activeElection.milestone}
                  </h4>

                  <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed pt-1">
                    {activeElection.milestoneDetail}
                  </p>

                  <div className="pt-2">
                    <ImpactQuote
                      quote={`En ${activeElection.year}, la participación juvenil fue de ${activeElection.youthParticipation}%, frente a un promedio nacional de ${activeElection.overallParticipation}%.`}
                      author={`Diagnóstico Electoral ${activeElection.year}`}
                      color="yellow"
                      tilt="rotate-[0deg]"
                      className="my-2"
                    />
                  </div>
                </div>

                {/* Bloque Derecho: Tarjeta de Métricas Comparativas */}
                <div className="w-full lg:w-[320px] bg-white p-5 border border-neutral-300 shadow-md rotate-[0.5deg] space-y-4 shrink-0">
                  <div className="flex items-center gap-2 pb-2 border-b border-dashed border-neutral-300">
                    <Calendar className="w-4 h-4 text-[#DC2626]" />
                    <span className="font-mono text-xs font-bold uppercase text-[#141312]">
                      REGISTRO CCPC OFICIAL:
                    </span>
                  </div>

                  {/* Comparativa General vs Juventud */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#4B5563]">Participación General:</span>
                        <span className="font-bold text-[#141312]">{activeElection.overallParticipation}%</span>
                      </div>
                      <div className="h-3 w-full bg-neutral-200 relative overflow-hidden rounded-xs">
                        <div
                          className="h-full bg-[#1F2937]"
                          style={{ width: `${activeElection.overallParticipation}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#DC2626] font-bold">Juventud (18–24 años):</span>
                        <span className="font-bold text-[#DC2626]">{activeElection.youthParticipation}%</span>
                      </div>
                      <div className="h-3 w-full bg-neutral-200 relative overflow-hidden rounded-xs">
                        <div
                          className="h-full bg-[#DC2626]"
                          style={{ width: `${activeElection.youthParticipation}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Datos complementarios */}
                  <div className="pt-3 border-t border-dashed border-neutral-300 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Edad media del votante:</span>
                      <span className="font-bold">{activeElection.averageVoterAge} años</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Peso juvenil en urnas:</span>
                      <span className="font-bold text-[#DC2626]">{activeElection.youthShareOfVoters}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Lista Nominal Total:</span>
                      <span className="font-bold">{(activeElection.listaNominal / 1_000_000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </div>
            </SpiralPaperCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
