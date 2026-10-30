"use client";

import { motion } from "framer-motion";
import { PersonMatrix100 } from "@/components/charts/PersonMatrix100";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { PostItNote } from "@/components/ui/NotebookPaper";

interface BigStatProps {
  figure?: string;
  unit?: string;
  claim?: string;
  caption?: string;
  source?: string;
}

export function BigStat({
  figure = "12.8",
  unit = "%",
  claim = "De cada 100 votos en 2024,",
  caption = "solo 13 vinieron de alguien de 18 a 24 años. El 47% de los jóvenes inscritos sí votó — pero su proporción en el total sigue siendo la menor de todos los grupos de edad.",
  source = "Fuente: CCPC INE 2024 — Conteo censal de participación ciudadana",
}: BigStatProps) {
  return (
    <section
      id="gran-estadistica"
      className="relative min-h-[90vh] py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Doodles tenues de fondo */}
      <NotebookBgDoodle
        src="/doodles/Aguila.png"
        alt="Águila fondo libreta"
        width={160}
        tilt={8}
        opacity={0.14}
        className="top-24 left-10 hidden md:block"
      />
      <NotebookBgDoodle
        src="/doodles/Sdibujo.png"
        alt="S fondo libreta"
        width={90}
        tilt={-10}
        opacity={0.16}
        className="bottom-12 right-16 hidden lg:block"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Quetzalcóatl dibujado en el margen superior */}
        <DoodleStamp
          src="/doodles/Quetzalcoatl.png"
          alt="Quetzalcóatl dibujado a lápiz"
          width={130}
          tilt={5}
          className="absolute -top-12 right-4 sm:right-12 hidden md:block z-20"
        />
        {/* Cabecera del BigStat */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="urgent-tag">
              CCPC 2024 // PROPORCIÓN REAL EN URNAS
            </span>
            <span className="font-mono text-xs text-[#DC2626] font-bold">
              ★ DATO DE IMPACTO
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-tight">
            {claim}
          </h3>
        </motion.div>

        {/* Duelo Visual tipo Street Fighter: 13 vs 87 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative min-h-[70vh] flex flex-col items-center justify-center py-16"
        >
          {/* Arena del enfrentamiento */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Grid de batalla con dos lados */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 sm:gap-8 md:gap-16 items-center">

              {/* LADO IZQUIERDO: JÓVENES (18-24) */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative text-center md:text-right"
              >
                {/* Etiqueta flotante */}
                <div className="mb-4 inline-block rotate-[-2deg]">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-[#DC2626] bg-white border-2 border-[#DC2626] px-3 py-1.5 shadow-[3px_3px_0px_#DC2626]">
                    ★ JÓVENES 18-24
                  </span>
                </div>

                {/* Número gigante flotante */}
                <div className="relative">
                  <motion.span
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-1, 1, -1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block font-poster text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] text-[#DC2626] leading-none tracking-tighter drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                    style={{
                      WebkitTextStroke: "3px #141312",
                      paintOrder: "stroke fill"
                    }}
                  >
                    13
                  </motion.span>

                  {/* Detalles flotantes */}
                  <div className="absolute -bottom-8 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 rotate-[2deg]">
                    <span className="font-typewriter text-xs sm:text-sm text-[#DC2626] bg-white px-3 py-1 border border-[#DC2626] shadow-sm whitespace-nowrap">
                      de cada 100 votos
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* CENTRO: VS RANSOM NOTE */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative flex-shrink-0"
              >
                <div className="relative">
                  {/* Fondo explosivo */}
                  <div className="absolute inset-0 -m-8 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,#DC2626_0%,transparent_70%)]" />
                  </div>

                  {/* VS Ransom Note Style */}
                  <div className="relative bg-yellow-400 border-4 border-black px-4 py-6 sm:px-6 sm:py-8 rotate-[-3deg] shadow-[8px_8px_0px_#141312]">
                    <span className="font-poster text-5xl sm:text-7xl md:text-8xl text-black leading-none block transform -skew-x-6">
                      V
                    </span>
                    <span className="font-poster text-5xl sm:text-7xl md:text-8xl text-black leading-none block transform skew-x-6 -mt-2">
                      S
                    </span>
                  </div>

                  {/* Efectos de impacto */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-6 -left-6 w-8 h-8 border-4 border-[#DC2626] rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#DC2626] rotate-45"
                  />
                </div>
              </motion.div>

              {/* LADO DERECHO: ADULTOS (25+) */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative text-center md:text-left"
              >
                {/* Etiqueta flotante */}
                <div className="mb-4 inline-block rotate-[2deg]">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-[#1D4ED8] bg-white border-2 border-[#1D4ED8] px-3 py-1.5 shadow-[3px_3px_0px_#1D4ED8]">
                    ★ ADULTOS 25+
                  </span>
                </div>

                {/* Número gigante flotante */}
                <div className="relative">
                  <motion.span
                    animate={{
                      y: [0, -8, 0],
                      rotate: [1, -1, 1]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block font-poster text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] text-[#1D4ED8] leading-none tracking-tighter drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                    style={{
                      WebkitTextStroke: "3px #141312",
                      paintOrder: "stroke fill"
                    }}
                  >
                    87
                  </motion.span>

                  {/* Detalles flotantes */}
                  <div className="absolute -bottom-8 left-0 md:left-auto md:right-1/2 md:translate-x-1/2 rotate-[-2deg]">
                    <span className="font-typewriter text-xs sm:text-sm text-[#1D4ED8] bg-white px-3 py-1 border border-[#1D4ED8] shadow-sm whitespace-nowrap">
                      de cada 100 votos
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Post-It explicativo debajo del duelo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <PostItNote color="yellow" tilt="rotate-[1deg]" className="w-full">
              <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                {caption}
              </p>
              <div className="mt-3 pt-2 border-t border-black/15 text-[10px] font-mono text-[#6B7280]">
                {source}
              </div>
            </PostItNote>
          </motion.div>

          {/* Representación visual con iconos flotantes */}
          <div className="mt-24 w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                PROPORCIÓN REAL EN CADA 100 VOTOS:
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* IZQUIERDA: 13 Jóvenes en grupo compacto */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Número 13 arriba */}
                <div className="text-center">
                  <span className="font-poster text-7xl sm:text-8xl md:text-9xl text-[#DC2626] leading-none block">
                    13
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B91C1C] font-bold block mt-2">
                    Jóvenes 18-24
                  </span>
                </div>

                {/* Grid compacto de 13 iconos rojos */}
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5 place-items-center">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="p-0.5"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-6 sm:w-6 sm:h-7" fill="none">
                        <g fill="#B91C1C">
                          <circle cx="12" cy="6" r="3.2" />
                          <path d="M6 19.5 C 6 15 8.5 12.5 12 12.5 C 15.5 12.5 18 15 18 19.5 C 18 20 17.5 20.5 17 20.5 L 7 20.5 C 6.5 20.5 6 20 6 19.5 Z" />
                        </g>
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* DERECHA: 87 Adultos en grid grande */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Número 87 arriba */}
                <div className="text-center">
                  <span className="font-poster text-7xl sm:text-8xl md:text-9xl text-[#1D4ED8] leading-none block">
                    87
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1D4ED8] font-bold block mt-2">
                    Adultos 25+
                  </span>
                </div>

                {/* Grid 10x9 de 87 iconos azules (outline) */}
                <div className="grid grid-cols-10 gap-1 sm:gap-1.5 place-items-center max-w-md">
                  {Array.from({ length: 87 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.008 }}
                      className="p-0.5"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-6 sm:w-6 sm:h-7" fill="none">
                        <g stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                          <circle cx="12" cy="6" r="3" />
                          <path d="M6.5 20 C 6.5 15.8 8.8 13.5 12 13.5 C 15.2 13.5 17.5 15.8 17.5 20" />
                          <line x1="6.5" y1="20" x2="17.5" y2="20" />
                        </g>
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Nota explicativa */}
            <p className="text-center text-xs font-typewriter text-[#6B7280] mt-8 max-w-2xl mx-auto">
              Cada figura representa votantes reales. Los 13 jóvenes (rojo) y 87 adultos (azul) muestran la proporción exacta en las elecciones de 2024.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
