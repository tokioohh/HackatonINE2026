"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUp } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="relative notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300">
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-8 md:px-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="font-typewriter text-base sm:text-xl md:text-2xl text-[#141312] leading-relaxed max-w-2xl mx-auto">
            En seis elecciones, la brecha entre la participación juvenil y la de otros grupos no se ha cerrado. Los datos están abiertos.{" "}
            <a
              href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC2626] underline decoration-2 underline-offset-4 font-bold inline-flex items-center gap-1 hover:text-[#991B1B] transition-colors"
            >
              <span>Consulta los datos completos del INE</span>
              <ExternalLink className="w-4 h-4 inline-block" />
            </a>
            .
          </p>

          <p className="font-typewriter text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Este ensayo visual fue creado con datos abiertos de la Plataforma de Conteos Censales de Participación Ciudadana (CCPC) 2009–2024 del INE.
          </p>

          {/* Botones de Acción directos debajo de la consulta */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
        </motion.div>
      </div>
    </section>
  );
}
