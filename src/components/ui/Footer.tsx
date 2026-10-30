"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

export function Footer() {
  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 pt-6 pb-4 overflow-hidden notebook-canvas bg-transparent">
      {/* Doodles tenues de fondo en la hoja final */}
      <NotebookBgDoodle
        src="/doodles/Quetzalcoatl.png"
        alt="Quetzalcóatl fondo libreta"
        width={150}
        tilt={-5}
        opacity={0.14}
        className="top-8 left-10 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/bandera.png"
        alt="Bandera fondo libreta"
        width={130}
        tilt={8}
        opacity={0.14}
        className="bottom-14 right-12 hidden md:block"
      />

      {/* ═══ POSTER FINAL: "TU VOTO TAMBIÉN VALE" (ESCALA ÓPTIMA: NUNCA SE CORTA AL BAJAR) ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto z-20 drop-shadow-[0_12px_25px_rgba(0,0,0,0.18)] my-auto select-none"
      >
        <ScotchTape className="top-[20%] left-[10%] sm:left-[14%] w-20 sm:w-28 h-5 sm:h-7" tilt="-6deg" />
        <ScotchTape className="top-[20%] right-[10%] sm:right-[14%] w-20 sm:w-28 h-5 sm:h-7" tilt="5deg" />

        {/* Doodle Pulgar con tinta indeleble decorando la hoja arrancada */}
        <DoodleStamp
          src="/doodles/pulgarvoto.png"
          alt="Pulgar entintado: Tu voto también vale"
          width={110}
          tilt={12}
          className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-6 md:right-10 z-30"
        />

        <div className="relative w-full aspect-[1024/640] max-h-[380px] select-none flex items-center justify-center">
          <img
            src="/textures/notebook/footer-torn-paper.png"
            alt="Hoja arrancada: Tu voto también vale"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />

          <div className="absolute top-[26%] bottom-[22%] left-[8%] right-[8%] flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2.5 z-10">
            <div className="flex items-center justify-center w-full">
              <TypewriterText
                text="TU VOTO"
                speed={70}
                delay={200}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#1F2937] tracking-[0.18em]"
              />
            </div>

            <div className="flex items-center justify-center w-full pt-0.5">
              <RansomNoteTitle
                text="TAMBIÉN VALE"
                size="lg"
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
              <li>Battroid (CC BY 4.0)</li>
              <li>Randal Sheppard (CC BY-SA 2.0)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
