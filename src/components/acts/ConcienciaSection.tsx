"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScotchTape, DoodleUnderline } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

const STATEMENTS = [
  "Tu voto vale exactamente lo mismo que el de cualquier otro. El problema es que no está.",
  "36.8 millones de menores de 35 están en la lista nominal. Su peso en el resultado depende de que lleguen a la casilla.",
  "En 2027 habrá otra elección federal. Los datos de las últimas seis muestran el espacio que queda por llenar.",
];

export function ConcienciaSection() {
  return (
    <section
      id="conciencia"
      className="relative py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      {/* Doodles tenues de fondo */}
      <NotebookBgDoodle
        src="/doodles/pulgarvoto.png"
        alt="Pulgar fondo libreta"
        width={120}
        tilt={-10}
        opacity={0.15}
        className="bottom-20 left-12 hidden md:block"
      />
      <NotebookBgDoodle
        src="/doodles/casillamarcada.png"
        alt="Casilla fondo libreta"
        width={125}
        tilt={8}
        opacity={0.14}
        className="top-1/2 right-10 hidden lg:block"
      />

      {/* Doodles dibujados en los márgenes */}
      <DoodleStamp
        src="/doodles/piramide.png"
        alt="Pirámide mexicana prehispánica"
        width={130}
        tilt={-4}
        className="absolute top-12 left-6 sm:left-14 hidden lg:block"
      />
      <DoodleStamp
        src="/doodles/Vota.png"
        alt="Sello Vota a mano"
        width={110}
        tilt={7}
        className="absolute top-16 right-6 sm:right-16 hidden lg:block"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Etiqueta */}
        <div className="inline-block mb-6">
          <span className="urgent-tag text-xs font-mono font-bold tracking-widest uppercase">
            ★ PARA LOS QUE AÚN PUEDEN DECIDIR
          </span>
        </div>

        {/* Manifiesto Tipográfico Escalonado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-12"
        >
          <p className="font-serif italic text-2xl sm:text-4xl text-[#4B5563]">
            La brecha
          </p>
          <p className="font-poster text-4xl sm:text-6xl text-[#141312] leading-none">
            LLEVA SEIS ELECCIONES ABIERTA.
          </p>
          <p className="font-poster text-5xl sm:text-7xl md:text-8xl text-[#1D4ED8] leading-none pt-2">
            ¿LA SÉPTIMA?
          </p>
          <p className="font-serif italic text-3xl sm:text-5xl text-[#DC2626] font-bold pt-2">
            Esa depende de ti.
          </p>

          <div className="max-w-xs mx-auto pt-2">
            <DoodleUnderline color="#DC2626" />
          </div>
        </motion.div>

        {/* 3 Frases de Impacto con barras laterales */}
        <div className="space-y-4 max-w-2xl mx-auto text-left mb-14">
          {STATEMENTS.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex items-start gap-3.5 bg-white p-4 border border-neutral-300 shadow-sm rotate-[-0.3deg]"
            >
              <div
                className={`w-1 self-stretch shrink-0 ${
                  idx === 1 ? "bg-[#1D4ED8]" : "bg-[#DC2626]"
                }`}
              />
              <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                {msg}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fotografía de Materiales Electorales INE */}
        <div className="relative max-w-xl mx-auto bg-white p-3 border border-neutral-300 shadow-md rotate-[0.5deg]">
          <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-5" tilt="1deg" />
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
            <Image
              src="/images/elecciones-mx/10-personas-votando-cdmx-2018.jpg"
              alt="Personas votando en las elecciones generales de México, CDMX 2018"
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              quality={85}
              className="object-cover contrast-105"
            />
          </div>
          <p className="text-[10px] font-mono text-[#6B7280] text-center pt-2">
            Jornada electoral, CDMX 2018 · Foto: ProtoplasmaKid (CC BY-SA 4.0)
          </p>
        </div>
      </div>
    </section>
  );
}
