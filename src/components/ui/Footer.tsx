"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { ScotchTape } from "@/components/ui/DoodleStickers";

export function Footer() {
  return (
    <footer className="relative w-full min-h-screen py-24 sm:py-36 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden notebook-canvas">
      {/* El pedazo de papel arrancado GRANDE, encimado directamente sobre el lienzo de cuadrícula */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
      >
        {/* Cinta adhesiva en el borde rasgado superior del papel */}
        <ScotchTape className="top-[22%] left-[10%] sm:left-[14%] w-24 sm:w-36 h-7 sm:h-9" tilt="-6deg" />
        <ScotchTape className="top-[22%] right-[10%] sm:right-[14%] w-24 sm:w-36 h-7 sm:h-9" tilt="5deg" />

        {/* Contenedor del papel arrancado a gran escala */}
        <div className="relative w-full aspect-[1024/682] select-none flex items-center justify-center">
          {/* Imagen de papel arrancado sin recorte artificial, grande y nítida */}
          <img
            src="/textures/notebook/footer-torn-paper.png"
            alt="Hoja arrancada: Tu voto también vale"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />

          {/* Contenido centrado dentro de la hoja arrancada */}
          <div className="absolute top-[28%] bottom-[24%] left-[8%] right-[8%] flex flex-col items-center justify-center text-center gap-2 sm:gap-4 z-10">
            {/* Renglón 1: "TU VOTO" en JMH Typewriter tecleada */}
            <div className="flex items-center justify-center w-full">
              <TypewriterText
                text="TU VOTO"
                speed={70}
                delay={200}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-[#1F2937] tracking-[0.18em]"
              />
            </div>

            {/* Renglón 2: "TAMBIÉN VALE" en Ransom Notes animadas y estables */}
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
    </footer>
  );
}
