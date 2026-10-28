"use client";

import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote } from "@/components/ui/NotebookPaper";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { HelpCircle } from "lucide-react";
import { getLostVotes } from "@/lib/data";

export function ActThree() {
  const lostVotes = getLostVotes();

  return (
    <section
      id="acto-3"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de Acto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO III // INTERMEDIA 2021 – PRESIDENCIAL 2024
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ EL PRESENTE ELECTORAL
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL PRESENTE Y"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="LA PERSISTENCIA" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            La brecha lleva seis elecciones abierta. ¿Se está cerrando? ¿Votan menos? Las respuestas que arrojan los datos del CCPC.
          </p>
        </motion.div>

        {/* ═══ FOTO DOCUMENTAL PERIODÍSTICA: TINTA INDELEBLE 2024 ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-3 sm:p-5 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.15)] rotate-[-0.3deg]">
            <ScotchTape className="-top-3 left-14 w-28 h-6" tilt="-2deg" />
            <ScotchTape className="-top-3 right-14 w-28 h-6" tilt="3deg" />

            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src="/images/tinta-electoral.jpg"
                alt="Pulgar con tinta indeleble después de votar en las elecciones de México 2024"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono drop-shadow-md">
                Tinta indeleble electoral, 2024 · Foto: Battroid (CC BY 4.0)
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span className="uppercase font-bold text-[#141312]">
                REGISTRO CENSAL: ELECCIÓN FEDERAL 2024
              </span>
              <span>CCPC · 59.7% PARTICIPACIÓN TOTAL</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ LAS 3 PREGUNTAS CLAVE TEXTUALES DE DEV ═══ */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pregunta 1: ¿La brecha se está cerrando? */}
          <PostItNote color="yellow" tilt="rotate-[-1deg]" className="w-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#DC2626] mb-3 border-b border-black/10 pb-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>¿LA BRECHA SE ESTÁ CERRANDO?</span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                No. El votante promedio tenía <strong className="text-[#DC2626]">42 años</strong> en 2012. En 2024 tiene <strong className="text-[#DC2626]">45</strong>. La proporción de votos jóvenes en el total pasó de 15% a 13%. El peso de los jóvenes en el resultado encoge.
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] uppercase">
              ENVEJECIMIENTO DEL PADRÓN
            </div>
          </PostItNote>

          {/* Pregunta 2: ¿Los jóvenes votan menos que antes? */}
          <PostItNote color="blue" tilt="rotate-[1.5deg]" className="w-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0369A1] mb-3 border-b border-black/10 pb-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>¿LOS JÓVENES VOTAN MENOS QUE ANTES?</span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                Depende de la comparación. En 2024, el <strong className="text-[#0369A1]">47%</strong> de los jóvenes inscritos votó — más que en 2009 (36%), 2015 (36%) y 2021 (42%). Pero menos que en el pico de 2012 (56%). El patrón varía con el tipo de elección, no con una tendencia lineal.
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] uppercase">
              COMPORTAMIENTO CÍCLICO
            </div>
          </PostItNote>

          {/* Pregunta 3: ¿Cuántos votos más habría con la tasa de 2012? */}
          <PostItNote color="pink" tilt="rotate-[-1.2deg]" className="w-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#9D174D] mb-3 border-b border-black/10 pb-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>¿CUÁNTOS VOTOS MÁS HABRÍA CON LA TASA DE 2012?</span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                Escenario hipotético: si en 2024 los jóvenes hubieran participado al 55.6% (su máximo histórico, en 2012), habría habido aproximadamente:
              </p>
              <div className="my-2 py-1 px-3 bg-white/70 border border-pink-300 rounded-xs">
                <span className="font-poster text-3xl sm:text-4xl text-[#DC2626]">
                  {(lostVotes / 1_000_000).toFixed(1)} millones
                </span>
                <span className="block text-xs font-mono text-[#9D174D]">
                  de votos jóvenes adicionales.
                </span>
              </div>
              <p className="font-typewriter text-xs text-[#6B7280]">
                Un ejercicio con supuestos, no una predicción.
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] uppercase">
              PROYECCIÓN HIPOTÉTICA
            </div>
          </PostItNote>
        </div>
      </div>
    </section>
  );
}
