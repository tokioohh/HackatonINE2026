"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { ExternalLink, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full min-h-screen py-20 px-4 sm:px-8 flex flex-col items-center justify-between overflow-hidden notebook-canvas">
      {/* Doodles tenues de fondo en la hoja final */}
      <NotebookBgDoodle
        src="/doodles/Quetzalcoatl.png"
        alt="Quetzalcóatl fondo libreta"
        width={170}
        tilt={-5}
        opacity={0.14}
        className="top-16 left-12 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/bandera.png"
        alt="Bandera fondo libreta"
        width={150}
        tilt={8}
        opacity={0.14}
        className="bottom-24 right-14 hidden md:block"
      />

      {/* ═══ POSTER FINAL ARRANCADO A PANTALLA COMPLETA ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] my-auto"
      >
        <ScotchTape className="top-[22%] left-[10%] sm:left-[14%] w-24 sm:w-36 h-7 sm:h-9" tilt="-6deg" />
        <ScotchTape className="top-[22%] right-[10%] sm:right-[14%] w-24 sm:w-36 h-7 sm:h-9" tilt="5deg" />

        {/* Doodle Pulgar con tinta indeleble decorando la hoja arrancada */}
        <DoodleStamp
          src="/doodles/pulgarvoto.png"
          alt="Pulgar entintado: Tu voto también vale"
          width={125}
          tilt={12}
          className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-14 md:right-24 z-30"
        />

        <div className="relative w-full aspect-[1024/682] select-none flex items-center justify-center">
          <img
            src="/textures/notebook/footer-torn-paper.png"
            alt="Hoja arrancada: Tu voto también vale"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />

          <div className="absolute top-[28%] bottom-[24%] left-[8%] right-[8%] flex flex-col items-center justify-center text-center gap-2 sm:gap-4 z-10">
            <div className="flex items-center justify-center w-full">
              <TypewriterText
                text="TU VOTO"
                speed={70}
                delay={200}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-[#1F2937] tracking-[0.18em]"
              />
            </div>

            <div className="flex items-center justify-center w-full pt-1 sm:pt-2">
              <RansomNoteTitle
                text="TAMBIÉN VALE"
                size="xl"
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ BOTONES DE ACCIÓN FINAL AL FINAL DE LA PÁGINA ═══ */}
      <div className="w-full max-w-2xl mx-auto z-20 my-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white px-6 py-3.5 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#B91C1C] transition-all shadow-md hover:scale-105 active:scale-95"
        >
          <span>Consulta los datos abiertos del INE</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        <a
          href="#hero"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#141312] border-2 border-black px-5 py-3.5 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-[3px_3px_0px_#000] hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-4 h-4 text-[#DC2626]" />
          <span>Volver al inicio</span>
        </a>
      </div>

      {/* ═══ CRÉDITOS OFICIALES Y METADATOS DE DEV EN HOJA DE FICHA ═══ */}
      <div className="w-full max-w-5xl mx-auto z-10 pt-10 border-t-2 border-dashed border-neutral-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#4B5563]">
          <div>
            <p className="font-bold uppercase text-[#141312] mb-2 border-b border-neutral-300 pb-1">
              DATOS
            </p>
            <ul className="space-y-1">
              <li>CCPC INE 2009–2024</li>
              <li>98.3M lista nominal 2024</li>
              <li>32 entidades federativas</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-2 border-b border-neutral-300 pb-1">
              HACKATÓN
            </p>
            <ul className="space-y-1">
              <li>Hackatón INE 2026</li>
              <li>Eje 3: Storytelling</li>
              <li>Participación Ciudadana</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-2 border-b border-neutral-300 pb-1">
              TECNOLOGÍA
            </p>
            <ul className="space-y-1">
              <li>Next.js 15 + TypeScript</li>
              <li>Tailwind CSS + Motion</li>
              <li>SVG GeoJSON Nacional</li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase text-[#141312] mb-2 border-b border-neutral-300 pb-1">
              FOTOGRAFÍAS
            </p>
            <ul className="space-y-1">
              <li>ProtoplasmaKid (CC BY-SA 4.0)</li>
              <li>Battroid (CC BY 4.0)</li>
              <li>Randal Sheppard (CC BY-SA 2.0)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-dashed border-neutral-300 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-[#6B7280] gap-2">
          <span className="font-bold text-[#141312]">
            EL VOTO JOVEN // UNA HISTORIA EN TRES ACTOS
          </span>
          <span>
            Hackea la Participación: Datos que Construyen Democracia — INE 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
