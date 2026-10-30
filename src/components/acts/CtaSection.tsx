"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUp } from "lucide-react";

const CTA_PHRASES = [
  "36.8 millones de menores de 35 en la lista nominal. ¿Cuántos llegarán a la casilla?",
  "Si tú no hablas, alguien más decide por ti. Y ya lo han hecho — seis veces.",
  "La séptima elección no se gana con datos. Se gana con tu presencia.",
];

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="w-full py-28 sm:py-36 px-4 sm:px-8 md:px-14">
        {/* Bloque 1: Conclusión — frase de impacto grande */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center mb-24 sm:mb-32"
        >
          <p className="font-poster text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#141312] leading-[1.1] tracking-tight">
            Si la tendencia no cambia,{" "}
            <span className="text-[#DC2626]">en 2027 otros volverán a decidir por ti.</span>
          </p>
        </motion.div>

        {/* Bloque 2: Reflexión — frases CTA escalonadas con aire */}
        <div className="max-w-3xl mx-auto space-y-16 sm:space-y-20 mb-28 sm:mb-36">
          {CTA_PHRASES.map((phrase, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`font-typewriter text-lg sm:text-2xl md:text-3xl leading-relaxed ${
                idx % 2 === 0
                  ? "text-[#1F2937] text-left pl-0 sm:pl-8"
                  : "text-[#374151] text-right pr-0 sm:pr-8 italic"
              }`}
            >
              {phrase}
            </motion.p>
          ))}
        </div>

        {/* Bloque 3: Cierre + Acción */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#141312] leading-snug">
            Los datos ya están.{" "}
            <span className="text-[#DC2626] font-bold not-italic">Lo que falta eres tú.</span>
          </p>

          {/* Botones con espacio generoso */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white px-8 py-4 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#B91C1C] transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>Consulta los datos del INE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#hero"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#141312] border-2 border-black px-7 py-4 font-typewriter text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-[3px_3px_0px_#000] hover:scale-105 active:scale-95"
            >
              <ArrowUp className="w-4 h-4 text-[#DC2626]" />
              <span>Volver al inicio</span>
            </a>
          </div>

          {/* Nota de fuente — discreta */}
          <p className="font-typewriter text-[10px] sm:text-xs text-[#9CA3AF] max-w-lg mx-auto leading-relaxed pt-8">
            Ensayo visual creado con datos abiertos de la Plataforma de Conteos Censales de Participación Ciudadana (CCPC) 2009–2024 del INE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
