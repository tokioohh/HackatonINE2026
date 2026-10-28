"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterHeroText } from "@/components/ui/TypewriterHeroText";
import { ScotchTape, DoodleUnderline } from "@/components/ui/DoodleStickers";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full text-[#111110] px-4 sm:px-8 md:px-14 pt-24 pb-12 flex flex-col justify-between notebook-canvas overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Cintas adhesivas en las esquinas superiores */}
      <ScotchTape className="top-16 left-6 sm:left-12 w-28 sm:w-36 h-7 sm:h-9" tilt="-5deg" />
      <ScotchTape className="top-16 right-6 sm:right-12 w-24 sm:w-32 h-7 sm:h-9" tilt="4deg" />

      {/* ═══ MASTHEAD / CABECERA DE CUADERNO / EXPEDIENTE ═══ */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 pb-6 border-b-2 border-[#141312]">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="font-typewriter text-xs sm:text-sm text-[#141312] font-bold tracking-[0.2em] uppercase">
              EL VOTO JOVEN // CCPC INE
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span className="hidden sm:inline-block font-mono text-xs text-[#4B5563] italic">
              Eje 3: Storytelling con Datos
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-widest text-[#B91C1C] border-2 border-[#B91C1C] px-2.5 py-0.5 rotate-[-2deg] bg-white/70 shadow-xs">
              OCT. 2026
            </span>
            <span className="font-mono text-xs text-[#6B7280]">
              MÉXICO 2009–2024
            </span>
          </div>
        </div>
      </div>

      {/* ═══ CENTRO: TITULAR PRINCIPAL DE DEV CON ESTILO OSKAR ═══ */}
      <div className="my-auto z-10 max-w-6xl mx-auto w-full py-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-3 sm:gap-6 w-full"
        >
          {/* Renglón 1: Tipografía JMH Typewriter tecleada con cursor parpadeante '|' */}
          <div className="flex items-center justify-center w-full min-h-[52px] sm:min-h-[72px] md:min-h-[85px]">
            <div className="relative inline-flex items-center justify-center">
              <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-6" tilt="0.5deg" />

              <div className="px-6 py-2 sm:px-10 sm:py-3.5 bg-[#FAF8F5] border border-neutral-300 shadow-[3px_5px_15px_rgba(0,0,0,0.12)]">
                <TypewriterHeroText
                  text="SEIS ELECCIONES."
                  speed={80}
                  delay={250}
                  triggerImmediately={true}
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#1F2937] tracking-wider"
                />
              </div>
            </div>
          </div>

          {/* Renglón 2: Ransom Note Title */}
          <div className="flex items-center justify-center w-full pt-1 sm:pt-3">
            <RansomNoteTitle text="UNA BRECHA." size="xl" className="justify-center" />
          </div>

          {/* Anotación manuscrita destacada */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 sm:mt-8 max-w-2xl px-6 py-4 bg-white/80 border border-neutral-300 shadow-sm rotate-[-0.8deg] relative"
          >
            <ScotchTape className="-top-3 right-6 w-20 h-5" tilt="2deg" />
            <p className="font-serif italic text-lg sm:text-2xl text-[#374151] leading-snug">
              &ldquo;De 2009 a 2024, los jóvenes de 18 a 24 votan menos que cualquier otro grupo. Los datos muestran cuánto. No por qué.&rdquo;
            </p>
            <div className="pt-2 max-w-[200px] mx-auto opacity-75">
              <DoodleUnderline color="#DC2626" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══ PIE DEL HERO: CTA + ESTÉNCIL ═══ */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Esténcil de protesta al margen */}
        <div
          className="font-poster text-2xl sm:text-3xl text-[#141312]/15 tracking-widest uppercase rotate-[-2deg] select-none"
          aria-hidden="true"
        >
          ¿DÓNDE ESTÁN?
        </div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#acto-1"
            className="inline-flex items-center gap-2.5 bg-[#141312] text-[#FAF8F5] px-6 py-3 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#DC2626] transition-all shadow-[3px_4px_12px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95"
          >
            <span>Comenzar la historia</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#DC2626]" />
          </a>
        </motion.div>

        {/* Nota censal */}
        <div className="font-mono text-[11px] text-[#6B7280] uppercase tracking-wider text-center sm:text-right">
          Datos oficiales CCPC · INE
        </div>
      </div>
    </section>
  );
}
