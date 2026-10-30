"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterHeroText } from "@/components/ui/TypewriterHeroText";
import { ScotchTape, DoodleUnderline } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] w-full text-[#111110] px-4 sm:px-8 md:px-14 py-8 flex flex-col justify-between notebook-canvas overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Scotch tape en la esquina superior izquierda como en la rama Oskar */}
      <ScotchTape className="top-5 left-6 w-28 sm:w-36 h-7 sm:h-9" tilt="-5deg" />

      {/* Doodles tenues de fondo (efecto bocetos a lápiz en la libreta) */}
      <NotebookBgDoodle
        src="/doodles/3enraya.png"
        alt="Gato en libreta fondo"
        width={150}
        tilt={-10}
        opacity={0.16}
        className="top-16 left-12 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/ojos.png"
        alt="Ojos fondo libreta"
        width={140}
        tilt={6}
        opacity={0.14}
        className="bottom-24 right-16 hidden md:block"
      />

      {/* Doodles dibujados en los márgenes de la portada */}
      <DoodleStamp
        src="/doodles/Sdibujo.png"
        alt="S escolar"
        width={75}
        tilt={10}
        className="absolute right-6 sm:right-12 md:right-20 top-24 hidden sm:block"
      />
      <DoodleStamp
        src="/doodles/calendarioaz.png"
        alt="Calendario electoral"
        width={130}
        tilt={-5}
        className="absolute left-4 sm:left-10 md:left-16 bottom-20 hidden md:block"
      />
      <DoodleStamp
        src="/doodles/Vota.png"
        alt="Sello Vota a mano"
        width={100}
        tilt={-8}
        className="absolute right-12 sm:right-28 bottom-24 hidden lg:block"
      />

      {/* Espaciador superior limpio para aire visual */}
      <div className="pt-4" />

      {/* ═══ CENTRO: TITULAR PRINCIPAL DE DEV CON ESTILO OSKAR ═══ */}
      <div className="my-auto z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center">
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
              &ldquo;De 2009 a 2024, los menores de 35 votan significativamente menos que el resto. Los datos muestran cuánto. No por qué.&rdquo;
            </p>
            <div className="pt-2 max-w-[200px] mx-auto opacity-75">
              <DoodleUnderline color="#DC2626" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══ PIE DEL HERO: CTA + ESTÉNCIL ═══ */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 pb-2 flex flex-col sm:flex-row justify-between items-center gap-4">
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
