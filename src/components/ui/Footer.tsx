"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

export function Footer() {
  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 pt-4 sm:pt-6 pb-4 overflow-hidden notebook-canvas bg-transparent">
      {/* Doodles tenues de fondo en la hoja final */}
      <NotebookBgDoodle
        src="/doodles/Quetzalcoatl.png"
        alt="Quetzalcóatl fondo libreta"
        width={160}
        tilt={-5}
        opacity={0.14}
        className="top-6 left-10 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/bandera.png"
        alt="Bandera fondo libreta"
        width={140}
        tilt={8}
        opacity={0.14}
        className="bottom-14 right-12 hidden md:block"
      />

      {/* ═══ POSTER FINAL: "TU VOTO TAMBIÉN VALE" (TAMAÑO HEROICO Y BALANCEADO) ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto z-20 drop-shadow-[0_16px_36px_rgba(0,0,0,0.22)] my-auto select-none"
      >
        <ScotchTape className="top-[16%] left-[10%] sm:left-[14%] w-24 sm:w-36 md:w-44 h-6 sm:h-9 md:h-11" tilt="-6deg" />
        <ScotchTape className="top-[16%] right-[10%] sm:right-[14%] w-24 sm:w-36 md:w-44 h-6 sm:h-9 md:h-11" tilt="5deg" />

        {/* Doodle Pulgar con tinta indeleble decorando la hoja arrancada */}
        <DoodleStamp
          src="/doodles/pulgarvoto.png"
          alt="Pulgar entintado: Tu voto también vale"
          width={135}
          tilt={12}
          className="absolute -bottom-5 sm:-bottom-8 right-2 sm:right-6 md:right-12 z-30 hidden sm:block"
        />

        <div className="relative w-full aspect-[1024/682] max-h-[440px] sm:max-h-[480px] md:max-h-[520px] select-none flex items-center justify-center">
          <img
            src="/textures/notebook/footer-torn-paper.png"
            alt="Hoja arrancada: Tu voto también vale"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />

          <div className="absolute top-[22%] bottom-[18%] left-[6%] right-[6%] flex flex-col items-center justify-center text-center gap-2 sm:gap-3 md:gap-4 z-10">
            <div className="flex items-center justify-center w-full">
              <TypewriterText
                text="TU VOTO"
                speed={70}
                delay={200}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-[#1F2937] tracking-[0.16em] sm:tracking-[0.2em]"
              />
            </div>

            <div className="flex items-center justify-center w-full pt-0.5 sm:pt-1">
              <RansomNoteTitle
                text="TAMBIÉN VALE"
                size="xl"
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ CRÉDITOS Y METADATOS TÉCNICOS: SUBEN SUAVEMENTE (FONDO TOTALMENTE TRANSPARENTE) ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl sm:max-w-4xl mx-auto z-10 pt-3 pb-4 border-t border-dashed border-neutral-300/80 bg-transparent shrink-0"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] font-mono text-[#4B5563]">
          <div>
            <p className="font-bold uppercase text-[#141312] mb-1 border-b border-neutral-300/80 pb-0.5">
              DATOS
            </p>
            <ul className="space-y-0.5 text-[10px]">
              <li>CCPC INE 2009–2024</li>
              <li>98.3M lista nominal 2024</li>
              <li>32 entidades federativas</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-1 border-b border-neutral-300/80 pb-0.5">
              HACKATÓN
            </p>
            <ul className="space-y-0.5 text-[10px]">
              <li>Hackatón INE 2026</li>
              <li>Eje 3: Storytelling</li>
              <li>Participación Ciudadana</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-1 border-b border-neutral-300/80 pb-0.5">
              TECNOLOGÍA
            </p>
            <ul className="space-y-0.5 text-[10px]">
              <li>Next.js 15 + TypeScript</li>
              <li>Tailwind CSS + Motion</li>
              <li>SVG GeoJSON Nacional</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-1 border-b border-neutral-300/80 pb-0.5">
              FOTOGRAFÍAS
            </p>
            <ul className="space-y-0.5 text-[10px]">
              <li>ProtoplasmaKid (CC BY-SA 4.0)</li>
              <li>WendyAvilesR (CC0)</li>
              <li>PetrohsW (CC BY-SA 4.0)</li>
            </ul>
          </div>
        </div>

        {/* Equipo de desarrollo */}
        <div className="mt-6 pt-4 border-t border-dashed border-neutral-300/80">
          <p className="font-bold uppercase text-[#141312] text-center mb-3 text-xs tracking-wider">
            EQUIPO DE DESARROLLO
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] font-mono text-[#4B5563]">
            <div className="text-center">
              <p className="font-semibold text-[#141312]">Luis Fernando</p>
              <p className="uppercase">López Padilla</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#141312]">Oskar Armenta</p>
              <p className="uppercase">Muñoz</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#141312]">René Gaspar</p>
              <p className="uppercase">Montaño</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#141312]">Joe Brayan</p>
              <p className="uppercase">Barrios Secundino</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
