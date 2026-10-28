"use client";

import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote } from "@/components/ui/NotebookPaper";
import { PersonMatrix100 } from "@/components/charts/PersonMatrix100";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { AlertCircle, HelpCircle } from "lucide-react";

export function ActThree() {
  return (
    <section
      id="acto-3"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de Acto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO III // 2021–2024: EL PRESENTE
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ LA PERSISTENCIA DE LA BRECHA
            </span>
          </div>

          {/* Dos renglones independientes para estabilidad */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL ENVEJECIMIENTO Y"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="LA PERSISTENCIA" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            La paradoja contemporánea: una juventud con conectividad absoluta las 24 horas del día, pero ausente en las urnas. La política se convirtió en un feed que se desliza sin votar.
          </p>
        </motion.div>

        {/* ═══ FOTO DOCUMENTAL PERIODÍSTICA: TINTA INDELEBLE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-3 sm:p-5 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.15)] rotate-[-0.3deg]">
            <ScotchTape className="-top-3 left-14 w-28 h-6" tilt="-2deg" />
            <ScotchTape className="-top-3 right-14 w-28 h-6" tilt="3deg" />

            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src="/images/tinta-electoral.jpg"
                alt="Pulgar con tinta indeleble electoral en México 2024"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono drop-shadow-md">
                Tinta indeleble electoral, Elecciones Federales 2024 · Foto: Battroid (CC BY 4.0)
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span className="uppercase font-bold text-[#141312]">
                REGISTRO CENSAL 2024: EL PESO JUVENIL EN EL PADRÓN
              </span>
              <span>CCPC · 59.7% PARTICIPACIÓN TOTAL</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ 3 PREGUNTAS CLAVE DE DEV ═══ */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Pregunta 1: ¿Se está cerrando? */}
          <PostItNote color="yellow" tilt="rotate-[-1deg]" className="w-full">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#DC2626] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>¿LA BRECHA SE ESTÁ CERRANDO?</span>
            </div>
            <div className="font-poster text-4xl text-[#141312] leading-none mb-2">
              NO. EL PADRÓN ENVEJECE
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
              El votante promedio mexicano tenía <strong>42.2 años</strong> en 2012. En 2024 escaló a <strong>45.5 años</strong>. La proporción de votos jóvenes en el total cayó de 15.3% a 12.8%.
            </p>
          </PostItNote>

          {/* Pregunta 2: ¿Votan menos que antes? */}
          <PostItNote color="blue" tilt="rotate-[1.5deg]" className="w-full">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0369A1] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>¿VOTAN MENOS QUE ANTES?</span>
            </div>
            <div className="font-poster text-4xl text-[#141312] leading-none mb-2">
              DEPENDE DEL CICLO
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
              En 2024, el <strong>47.1%</strong> de los jóvenes inscritos votó — más que en 2009 (36%) o 2015 (36%). Pero menos que en 2012 (55.6%). La oscilación depende del tipo de elección, no de una caída lineal.
            </p>
          </PostItNote>

          {/* Pregunta 3: ¿El peso en el resultado? */}
          <PostItNote color="pink" tilt="rotate-[-1.5deg]" className="w-full">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#9D174D] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>¿PESO EN LAS DECISIONES?</span>
            </div>
            <div className="font-poster text-4xl text-[#141312] leading-none mb-2">
              ENCOGE CADA PROCESO
            </div>
            <p className="font-typewriter text-xs sm:text-sm text-[#1F2937] leading-relaxed">
              Aunque el padrón juvenil suma casi 15 millones de credenciales, en 2024 representaron apenas <strong>13 de cada 100 votos reales</strong>. Las decisiones públicas las siguen tomando los adultos mayores.
            </p>
          </PostItNote>
        </div>

        {/* ═══ BIGSTAT: 13 DE CADA 100 VOTANTES (PERSON MATRIX 100) ═══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          className="mb-16 border-b border-dashed border-neutral-300 pb-14"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 border-b border-dashed border-neutral-300 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                  PROPORCIÓN REAL EN LAS CASILLAS DE 2024:
                </span>
                <span className="urgent-tag text-[10px]">12.8% EFECTIVO</span>
              </div>
              <h3 className="font-poster text-7xl sm:text-9xl text-[#141312] leading-none">
                <DoodleCircle color="#DC2626" className="mr-2">
                  <span>13</span>
                </DoodleCircle>{" "}
                <span className="text-[#DC2626]">DE CADA 100</span>
              </h3>
            </div>

            {/* Post-It con la redacción exacta de dev */}
            <PostItNote color="yellow" tilt="rotate-[1deg]" className="max-w-md w-full">
              <p className="text-xs sm:text-sm font-typewriter text-[#1F2937] leading-relaxed">
                De cada 100 personas que emitieron su voto en 2024,{" "}
                <strong className="highlighter-yellow font-bold text-black">
                  solo 13 eran jóvenes de 18 a 24 años
                </strong>
                . El 47% de los jóvenes inscritos sí votó — pero su proporción en el total sigue siendo la menor de todos los grupos de edad.
              </p>
              <div className="mt-2 pt-2 border-t border-black/15 text-[10px] font-mono text-[#6B7280]">
                Fuente: CCPC INE 2024 — Conteo censal de participación ciudadana
              </div>
            </PostItNote>
          </div>

          {/* Matriz Gráfica 10x10 de personas en hoja rayada */}
          <PersonMatrix100 />
        </motion.div>

        {/* Cita de Cierre de Acto */}
        <ImpactQuote
          quote="La juventud mexicana es la más conectada de la historia, pero en la urna su presencia equivale a solo 13 de cada 100 votos."
          author="CCPC INE 2024 — Estudio Censal de Participación"
          color="white"
          tilt="rotate-[-0.5deg]"
          className="w-full"
        />
      </div>
    </section>
  );
}
