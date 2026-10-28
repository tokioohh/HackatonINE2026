"use client";

import { motion } from "framer-motion";
import { ArrowDown, AlertCircle } from "lucide-react";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterHeroText } from "@/components/ui/TypewriterHeroText";
import { PostItNote } from "@/components/ui/NotebookPaper";
import {
  DoodleCircle,
  DoodleArrow,
  DoodleUnderline,
  ScotchTape,
} from "@/components/ui/DoodleStickers";

export function HeroSection() {
  return (
    <>
      {/* PANTALLA 1: PORTADA PURA A PANTALLA COMPLETA (100vh / 100dvh) */}
      <section
        id="hero"
        className="relative h-screen min-h-[640px] w-full text-[#111110] px-4 sm:px-8 md:px-14 py-8 flex flex-col justify-between notebook-canvas overflow-hidden"
      >
        {/* Scotch tape in top left corner of the notebook sheet */}
        <ScotchTape className="top-5 left-6" tilt="-5deg" />

        {/* Empty top buffer for breathing room */}
        <div className="pt-4" />

        {/* Centro de Pantalla: DOS RENGLONES CENTRADOS Y ESTABLES */}
        <div className="my-auto z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-3 sm:gap-6 w-full"
          >
            {/* Renglón 1: Tipografía JMH Typewriter tecleada orgánicamente con cursor parpadeante '|' */}
            <div className="flex items-center justify-center w-full min-h-[52px] sm:min-h-[72px] md:min-h-[90px]">
              <div className="relative inline-flex items-center justify-center">
                {/* Scotch tape holding the typed paper label */}
                <ScotchTape className="-top-3.5 left-1/2 -translate-x-1/2" tilt="1deg" />

                <div className="px-5 py-2 sm:px-8 sm:py-3 bg-[#FAF8F5]/90 border border-neutral-300 shadow-[3px_4px_12px_rgba(0,0,0,0.10)]">
                  <TypewriterHeroText
                    text="VOTAR SE VOLVIÓ"
                    speed={85}
                    delay={300}
                    triggerImmediately={true}
                    className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-[#1F2937]"
                  />
                </div>
              </div>
            </div>

            {/* Renglón 2: Tipografía estilo Ransom Note animada y centrada */}
            <div className="flex items-center justify-center w-full pt-2 sm:pt-4">
              <RansomNoteTitle text="COSA DE VIEJOS" size="xl" className="justify-center" />
            </div>
          </motion.div>
        </div>

        {/* Bottom: Aviso de deslizamiento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pb-6 z-10 flex flex-col items-center justify-center text-center font-mono text-xs text-[#5C5750]"
        >
          <a
            href="#pregunta-apertura"
            className="group inline-flex flex-col items-center gap-1.5 hover:text-[#DC2626] transition-colors"
          >
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase opacity-85 group-hover:opacity-100 font-bold">
              Abre el expediente ↓
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#DC2626]" />
          </a>
        </motion.div>
      </section>

      {/* PANTALLA 2: EL DILEMA Y EL HALLAZGO CENSAL */}
      <section
        id="pregunta-apertura"
        className="relative min-h-[90vh] text-[#111110] px-4 sm:px-8 md:px-14 py-20 md:py-28 flex flex-col justify-center notebook-canvas"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            {/* Pregunta dramática con margen de cuaderno escolar (línea roja lateral) */}
            <div className="lg:col-span-7 space-y-6 lg:border-r lg:border-dashed lg:border-neutral-300 lg:pr-10 border-l-4 border-[#DC2626] pl-5 sm:pl-8">
              <div className="flex items-center gap-3">
                <span className="urgent-tag">
                  EXPEDIENTE CCPC · LA PREGUNTA
                </span>
                <span className="font-mono text-xs text-[#DC2626] font-bold tracking-widest">
                  CONFIDENCIAL // ANÁLISIS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141312] leading-tight font-normal">
                ¿Cómo es que la generación con{" "}
                <span className="highlighter-yellow">
                  mayor acceso a internet y smartphones
                </span>{" "}
                en la historia de México terminó siendo la más ausente en las urnas?
              </h2>

              <p className="text-base sm:text-lg font-sans text-[#4B5563] leading-relaxed pt-2">
                Entre 2009 y 2024, la edad promedio del votante mexicano envejeció 2.3 años. Los jóvenes pasaron del silencio forzado de las plazas al estallido callejero del #YoSoy132, para luego quedar atrapados en la desafección del feed algorítmico.
              </p>

              {/* Hand-drawn underline doodle */}
              <div className="pt-2 max-w-sm">
                <DoodleUnderline color="#DC2626" />
              </div>
            </div>

            {/* Plana de Hallazgo Censal montada en un auténtico Post-It amarillo con Scotch Tape */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-6 lg:pt-0">
              <PostItNote tilt="rotate-[1.5deg]" className="w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-black/15 pb-2">
                    <span className="font-mono text-xs font-black uppercase text-[#1F2937] tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#DC2626]" />
                      DICTAMEN CENSAL
                    </span>
                    <span className="font-mono text-xs text-[#DC2626] font-bold">
                      2009–2024
                    </span>
                  </div>

                  {/* Número censal encerrado en círculo dibujado a mano */}
                  <div className="py-2 text-center sm:text-left">
                    <div className="font-poster text-7xl sm:text-8xl leading-none text-[#111110]">
                      <DoodleCircle color="#DC2626" className="mr-2">
                        <span>13</span>
                      </DoodleCircle>{" "}
                      <span className="text-3xl sm:text-4xl text-[#DC2626] block sm:inline">
                        DE CADA 100
                      </span>
                    </div>
                  </div>

                  <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed pt-1">
                    En la última elección presidencial, solo 13 de cada 100 votos provinieron de jóvenes de 18 a 24 años. Más de{" "}
                    <strong className="highlighter-yellow font-bold text-black">
                      14 millones de jóvenes
                    </strong>{" "}
                    no se presentaron a las urnas: el equivalente a dejar completamente vacías la Ciudad de México y Monterrey juntas.
                  </p>

                  <div className="pt-3 border-t border-black/15 text-[11px] font-mono text-[#374151] flex justify-between items-center">
                    <span>PADRÓN JUVENIL: 20M</span>
                    <span className="text-[#DC2626] font-bold">CCPC · REGISTRO NACIONAL</span>
                  </div>
                </div>
              </PostItNote>
            </div>
          </motion.div>

          {/* Enlace hacia el Acto 1 en tira de papel */}
          <div className="mt-14 pt-6 border-t border-dashed border-neutral-300 flex justify-between items-center text-xs font-mono">
            <span className="text-[#5C564E] uppercase tracking-wider font-bold">
              EXPEDIENTE ELECTORAL EN TRES ACTOS
            </span>
            <a
              href="#acto-1"
              className="inline-flex items-center gap-2 bg-[#141312] text-[#FAF8F5] px-5 py-2.5 font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
            >
              <span>Abrir Acto I: El Silencio</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
