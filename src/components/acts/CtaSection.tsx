"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="relative notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300">
      {/* Franja bandera superior — verde / blanco / rojo */}
      <div aria-hidden="true" className="flex h-2 w-full">
        <div className="flex-1 bg-[#15803D]" />
        <div className="flex-1 bg-[#FAF8F5]" />
        <div className="flex-1 bg-[#DC2626]" />
      </div>

      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-8 md:px-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="font-serif text-xl sm:text-3xl text-[#141312] leading-snug max-w-2xl mx-auto">
            En seis elecciones, la brecha entre la participación juvenil y la de otros grupos no se ha cerrado. Los datos están abiertos.{" "}
            <a
              href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC2626] underline decoration-2 underline-offset-4 font-bold inline-flex items-center gap-1 hover:text-[#991B1B] transition-colors"
            >
              <span>Consulta los datos completos del INE</span>
              <ExternalLink className="w-5 h-5 inline-block" />
            </a>
            .
          </p>

          <p className="font-typewriter text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed pt-2">
            Este ensayo visual fue creado con datos abiertos de la Plataforma de Conteos Censales de Participación Ciudadana (CCPC) 2009–2024 del INE.
          </p>
        </motion.div>
      </div>

      {/* Franja bandera inferior — invertida */}
      <div aria-hidden="true" className="flex h-2 w-full">
        <div className="flex-1 bg-[#DC2626]" />
        <div className="flex-1 bg-[#FAF8F5]" />
        <div className="flex-1 bg-[#15803D]" />
      </div>
    </section>
  );
}
