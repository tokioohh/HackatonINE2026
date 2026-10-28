"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINE_MILESTONES } from "@/lib/data";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { SpiralPaperCard, PostItNote, TornPaperScrap } from "@/components/ui/NotebookPaper";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import {
  DoodleCircle,
  DoodleArrow,
  DoodleUnderline,
  ScotchTape,
} from "@/components/ui/DoodleStickers";
import { Megaphone, Smartphone, TrendingUp, Sparkles } from "lucide-react";

export function ActTwo() {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_MILESTONES[2]); // #YoSoy132

  return (
    <section
      id="acto-2"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de Acto */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO II // 2012–2018: LA MOVILIZACIÓN
            </span>
            <span className="font-mono text-xs uppercase text-[#1D4ED8] tracking-widest font-bold">
              ★ EL ESPEJISMO DE LA HIPERPARTICIPACIÓN
            </span>
          </div>

          {/* Dos renglones estables e independientes para que el typewriter no empuje el Ransom Note */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="LA CALLE Y LA"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="PANTALLA" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            131 universitarios encendieron la cámara de sus teléfonos. De pronto, la red social no era un pasatiempo: era la herramienta que convocaba marchas de 100,000 personas.
          </p>
        </motion.div>

        {/* 3 Columnas convertidas a Post-Its y pedazos de papel arrancados con cinta */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-8 mb-16 border-b border-dashed border-neutral-300 pb-12"
        >
          {/* Columna 1: Primerizos 2012 (Post-it amarillo) */}
          <PostItNote color="yellow" tilt="rotate-[-2deg]" className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-1.5 text-[#DC2626] font-mono text-xs font-bold">
                <Megaphone className="w-3.5 h-3.5" />
                <span>PRIMERIZOS (18-19 AÑOS)</span>
              </span>
              <span className="text-[10px] font-mono text-[#4B5563] font-bold">2012</span>
            </div>
            <div className="font-poster text-5xl sm:text-6xl text-[#DC2626] leading-none my-2">
              <DoodleCircle color="#DC2626">
                <span>6</span>
              </DoodleCircle>{" "}
              <span className="text-2xl sm:text-3xl text-[#141312]">DE 10</span>
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#141312] leading-relaxed pt-1">
              Más de <strong className="highlighter-yellow text-black font-bold">4.2 millones de jóvenes</strong> estrenaron su credencial para votar. El pico cívico más alto registrado tras el movimiento #YoSoy132.
            </p>
            <div className="mt-3 pt-2 border-t border-black/15 text-[9px] font-mono text-[#4B5563]">
              CCPC: 56.1% participación efectiva
            </div>
          </PostItNote>

          {/* Columna 2: Elección 2018 (Papel arrancado de libreta) */}
          <TornPaperScrap tilt="rotate-[1.5deg]" tapePosition="top" className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-1.5 text-[#141312] font-mono text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>RÉCORD HISTÓRICO</span>
              </span>
              <span className="text-[10px] font-mono text-[#4B5563] font-bold">2018</span>
            </div>
            <div className="font-poster text-5xl sm:text-6xl text-[#141312] leading-none my-2">
              56 <span className="text-2xl sm:text-3xl text-[#1D4ED8]">MILLONES</span>
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#141312] leading-relaxed pt-1">
              La mayor marea cívica contabilizada en México. Las redes sociales y las juventudes universitarias marcaron el ritmo de la conversación nacional.
            </p>
            <div className="mt-3 pt-2 border-t border-[#141312]/15 text-[9px] font-mono text-[#4B5563]">
              CCPC: 62.4% afluencia nacional
            </div>
          </TornPaperScrap>

          {/* Columna 3: La Mudanza al Smartphone (Post-it rosa / fanzine) */}
          <PostItNote color="pink" tilt="rotate-[-1deg]" className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-1.5 text-[#141312] font-mono text-xs font-bold">
                <Smartphone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>CIUDADANÍA EN EL BOLSILLO</span>
              </span>
              <span className="text-[10px] font-mono text-[#4B5563] font-bold">REDES</span>
            </div>
            <div className="font-poster text-5xl sm:text-6xl text-[#141312] leading-none my-2">
              80 <span className="text-2xl sm:text-3xl text-[#D97706]">MILLONES</span>
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#141312] leading-relaxed pt-1">
              Para 2018, 80 millones de mexicanos ya portaban un smartphone. La plaza pública se mudó de Paseo de la Reforma a las pantallas individuales.
            </p>
            <div className="mt-3 pt-2 border-t border-black/15 text-[9px] font-mono text-[#4B5563]">
              IFT / INEGI: 65.8% penetración digital
            </div>
          </PostItNote>
        </motion.div>

        {/* Cronología Documental Estilo Libreta de Apuntes */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-b border-dashed border-neutral-300 pb-12 mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6 pb-2 border-b border-dashed border-neutral-300">
            <div>
              <span className="font-mono text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                ★ ARCHIVO HEMEROGRÁFICO DE PROTESTA
              </span>
              <h3 className="font-poster text-3xl sm:text-4xl text-[#141312]">
                HITOS DE LA DEMOCRACIA DIGITAL MEXICANA
              </h3>
            </div>
            <span className="text-xs font-mono text-[#4B5563] uppercase font-bold">
              SELECCIONA UN EVENTO ↓
            </span>
          </div>

          {/* Botones de eventos tipo Post-Its de distintos colores con cinta adhesiva */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-8">
            {TIMELINE_MILESTONES.map((item, idx) => {
              const active = selectedMilestone.title === item.title;
              const postItStyles = [
                { bg: "bg-[#FEF08A]", text: "text-[#713F12]", border: "border-[#EAB308]/50", shadow: "shadow-[#EAB308]/20", defaultTilt: "-rotate-2" },
                { bg: "bg-[#BAE6FD]", text: "text-[#0369A1]", border: "border-[#38BDF8]/50", shadow: "shadow-[#38BDF8]/20", defaultTilt: "rotate-1" },
                { bg: "bg-[#FDE047]", text: "text-[#854D0E]", border: "border-[#CA8A04]/50", shadow: "shadow-[#CA8A04]/20", defaultTilt: "-rotate-1" },
                { bg: "bg-[#BBF7D0]", text: "text-[#166534]", border: "border-[#4ADE80]/50", shadow: "shadow-[#4ADE80]/20", defaultTilt: "rotate-2" },
                { bg: "bg-[#FBCFE8]", text: "text-[#9D174D]", border: "border-[#F472B6]/50", shadow: "shadow-[#F472B6]/20", defaultTilt: "-rotate-2" },
                { bg: "bg-[#FED7AA]", text: "text-[#9A3412]", border: "border-[#FB923C]/50", shadow: "shadow-[#FB923C]/20", defaultTilt: "rotate-1.5" },
                { bg: "bg-[#E9D5FF]", text: "text-[#6B21A8]", border: "border-[#C084FC]/50", shadow: "shadow-[#C084FC]/20", defaultTilt: "-rotate-1.5" },
                { bg: "bg-[#FECDD3]", text: "text-[#9F1239]", border: "border-[#FB7185]/50", shadow: "shadow-[#FB7185]/20", defaultTilt: "rotate-2" },
              ][idx % 8];

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestone(item)}
                  aria-pressed={active}
                  className={`group relative p-3 sm:p-3.5 text-left transition-all duration-200 cursor-pointer rounded-xs border ${
                    postItStyles.bg
                  } ${postItStyles.text} ${postItStyles.border} ${
                    active
                      ? "ring-2 ring-[#DC2626] ring-offset-2 scale-105 rotate-0 z-20 shadow-[4px_8px_16px_rgba(0,0,0,0.2)]"
                      : `${postItStyles.defaultTilt} hover:rotate-0 hover:scale-105 hover:z-10 shadow-[2px_4px_10px_rgba(0,0,0,0.1)]`
                  }`}
                >
                  {/* Cinta adhesiva semi-transparente en la parte superior del Post-it */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3.5 bg-white/70 shadow-xs border-l border-r border-dashed border-gray-400/50 backdrop-blur-xs pointer-events-none" />

                  {/* Indicador de activo */}
                  {active && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#DC2626] rounded-full border border-white shadow-xs animate-ping" />
                  )}

                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-poster text-xl sm:text-2xl leading-none">
                      {item.year}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider font-bold opacity-75">
                      {item.platform}
                    </span>
                  </div>

                  <div className="font-typewriter text-[11px] leading-tight line-clamp-2 pt-0.5 opacity-90">
                    {item.title}
                  </div>

                  {/* Sombra de despegado en la esquina inferior */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-black/15 to-transparent pointer-events-none" />
                </button>
              );
            })}
          </div>

          {/* Plana Desplegable del Evento dentro de SpiralPaperCard */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.title}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SpiralPaperCard tilt="rotate-[0.3deg]">
                <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
                  <div className="max-w-2xl space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-[#DC2626] font-bold uppercase">
                        {selectedMilestone.dateStr}
                      </span>
                      <span className="text-[#141312]/30">/</span>
                      <span className="text-[#4B5563] font-bold">
                        PLATAFORMA: {selectedMilestone.platform}
                      </span>
                    </div>

                    <h4 className="font-poster text-3xl sm:text-4xl text-[#141312] uppercase tracking-wide">
                      {selectedMilestone.title}
                    </h4>

                    {/* Impact Quote destacado dentro del hito */}
                    <ImpactQuote
                      quote={selectedMilestone.subtitle}
                      author={`Movimiento ${selectedMilestone.year}`}
                      color="yellow"
                      tilt="rotate-[0deg]"
                      className="my-3"
                    />

                    <p className="font-sans text-sm text-[#141312] leading-relaxed pt-1">
                      {selectedMilestone.description}
                    </p>
                  </div>

                  {selectedMilestone.electionContext && (
                    <div className="bg-[#FFE66D] border border-neutral-400 p-4 text-xs font-mono text-[#141312] min-w-[260px] self-start shadow-md rotate-1">
                      <div className="text-[10px] text-[#DC2626] font-black uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#DC2626]" />
                        REGISTRO CCPC OFICIAL:
                      </div>
                      <div className="font-bold text-sm leading-snug">
                        {selectedMilestone.electionContext}
                      </div>
                    </div>
                  )}
                </div>
              </SpiralPaperCard>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Manifiesto de Transición con ImpactQuote destacado */}
        <ImpactQuote
          quote="Pero la primavera digital fue breve: lo que empezó como protesta en las calles terminó en algoritmos de desafección y fatiga informativa."
          author="Crónica del Espejismo Cívico (2012–2024)"
          color="white"
          tilt="rotate-[-0.5deg]"
          className="w-full"
        />
      </div>
    </section>
  );
}
