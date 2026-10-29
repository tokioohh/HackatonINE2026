"use client";

import { motion } from "framer-motion";
import { ScotchTape, DoodleUnderline } from "@/components/ui/DoodleStickers";
import { DoodleStamp } from "@/components/ui/ScrollDoodles";
import { ExternalLink, ArrowUp } from "lucide-react";

const STATEMENTS = [
  "Tu voto vale exactamente lo mismo que el de cualquier otro. El problema es que no está.",
  "14.8 millones de jóvenes están en la lista nominal. Su peso en el resultado depende de que lleguen a la casilla.",
  "En 2027 habrá otra elección federal. Los datos de las últimas seis muestran el espacio que queda por llenar.",
];

export function ConcienciaSection() {
  return (
    <section
      id="conciencia"
      className="relative py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      {/* Pirámide prehispánica en el margen superior */}
      <DoodleStamp
        src="/doodles/piramide.png"
        alt="Pirámide mexicana prehispánica"
        width={130}
        tilt={-4}
        className="absolute top-12 left-6 sm:left-14 hidden lg:block"
      />

      {/* Franja Bandera Mexicana sutil en la parte superior */}
      <div className="max-w-4xl mx-auto h-2 flex rounded-full overflow-hidden shadow-xs mb-16">
        <div className="flex-1 bg-[#006847]" />
        <div className="flex-1 bg-[#FAF8F5]" />
        <div className="flex-1 bg-[#CE1126]" />
      </div>

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
        <div className="relative max-w-xl mx-auto bg-white p-3 border border-neutral-300 shadow-md rotate-[0.5deg] mb-14">
          <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-5" tilt="1deg" />
          <div className="aspect-[16/9] overflow-hidden bg-neutral-900">
            <img
              src="/images/elecciones-federales-de-mexico-de-2024-18.jpg"
              alt="Materiales electorales del INE: bolígrafos y tinta indeleble"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
          <p className="text-[10px] font-mono text-[#6B7280] text-center pt-2">
            Materiales electorales oficiales del INE · Licencia libre CC
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-6 py-3.5 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#B91C1C] transition-all shadow-md hover:scale-105"
          >
            <span>Consulta los datos abiertos del INE</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 bg-white text-[#141312] border border-neutral-300 px-5 py-3.5 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-sm"
          >
            <ArrowUp className="w-4 h-4 text-[#DC2626]" />
            <span>Volver al inicio</span>
          </a>
        </div>

        {/* Franja Bandera Mexicana sutil en la parte inferior */}
        <div className="max-w-4xl mx-auto h-2 flex rounded-full overflow-hidden shadow-xs mt-16">
          <div className="flex-1 bg-[#CE1126]" />
          <div className="flex-1 bg-[#FAF8F5]" />
          <div className="flex-1 bg-[#006847]" />
        </div>
      </div>
    </section>
  );
}
