"use client";

import { motion } from "framer-motion";
import { ScotchTape, DoodleUnderline } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

/* Chip de recorte de periódico / libreta para números clave */
function NewspaperChip({
  children,
  color = "#141312",
  bg = "#FAF8F5",
  rotate = "-1deg",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  bg?: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border border-neutral-300 shadow-[2px_3px_8px_rgba(0,0,0,0.12)] px-2 sm:px-3.5 py-0.5 sm:py-1 mx-1.5 align-baseline font-bold ${className}`}
      style={{
        color,
        background: bg,
        transform: `rotate(${rotate})`,
        transformOrigin: "center bottom",
      }}
    >
      {children}
    </span>
  );
}

export function StatsSentence() {
  return (
    <section
      id="sentencia-estadistica"
      className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Cintas adhesivas decorativas */}
      <ScotchTape className="top-8 left-10 w-28 h-6" tilt="-4deg" />
      <ScotchTape className="bottom-8 right-10 w-28 h-6" tilt="3deg" />

      {/* Doodle tenue de fondo */}
      <NotebookBgDoodle
        src="/doodles/calendarioaz.png"
        alt="Calendario fondo libreta"
        width={180}
        tilt={-10}
        opacity={0.15}
        className="left-8 bottom-12 hidden lg:block"
      />

      {/* Silueta de votante joven al margen */}
      <DoodleStamp
        src="/doodles/Usuario.png"
        alt="Votante joven silueta"
        width={105}
        tilt={4}
        className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 hidden md:block"
      />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Etiqueta de expediente */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="urgent-tag">
            DICTAMEN CENSAL // TENDENCIA HISTÓRICA
          </span>
        </motion.div>

        {/* Oración de gran impacto con recortes */}
        <motion.p
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.25] text-[#374151]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>En </span>
          <NewspaperChip rotate="0.8deg" className="font-serif text-[#141312] border-2 border-[#141312]">
            6 elecciones
          </NewspaperChip>
          <span>, la proporción de votos de menores de 35 pasó de </span>
          <NewspaperChip rotate="1.2deg" className="font-mono text-[#0369A1] bg-[#E0F2FE] border-[#38BDF8]">
            37 de cada 100
          </NewspaperChip>
          <span> a solo </span>
          <NewspaperChip
            rotate="-1.5deg"
            color="#DC2626"
            bg="#FEE2E2"
            className="font-poster text-3xl sm:text-6xl md:text-7xl border-2 border-[#DC2626] shadow-[3px_5px_15px_rgba(220,38,38,0.2)]"
          >
            31 de cada 100
          </NewspaperChip>
          <span>. Su peso en el resultado encoge mientras el padrón envejece.</span>
        </motion.p>

        {/* Garabato subrayado rojo */}
        <div className="pt-8 max-w-md">
          <DoodleUnderline color="#DC2626" />
        </div>
      </div>
    </section>
  );
}
