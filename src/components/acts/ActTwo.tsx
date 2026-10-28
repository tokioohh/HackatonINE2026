"use client";

import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote, SpiralPaperCard } from "@/components/ui/NotebookPaper";
import { ComparisonChart } from "@/components/charts/ComparisonChart";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import { participationByAge } from "@/lib/data";

export function ActTwo() {
  const data2012 = participationByAge.find((d) => d.year === 2012)!;
  const data2024 = participationByAge.find((d) => d.year === 2024)!;

  return (
    <section
      id="acto-2"
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
              ACTO II // PRESIDENCIALES 2012 · 2018 · 2024
            </span>
            <span className="font-mono text-xs uppercase text-[#1D4ED8] tracking-widest font-bold">
              ★ EL ESPEJISMO DE LA PARTICIPACIÓN
            </span>
          </div>

          {/* Dos renglones independientes para estabilidad */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL CICLO Y"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="EL VAIVÉN" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            El tipo de elección mueve las cifras generales, pero la distancia entre las juventudes y los adultos mayores permanece casi inamovible.
          </p>
        </motion.div>

        {/* ═══ FOTO DOCUMENTAL PERIODÍSTICA: CASILLA 2018 ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-3 sm:p-5 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.15)] rotate-[0.4deg]">
            <ScotchTape className="-top-3 left-12 w-28 h-6" tilt="2deg" />
            <ScotchTape className="-top-3 right-12 w-28 h-6" tilt="-3deg" />

            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src="/images/votacion-elecciones-federales-de-mexico-de-2018.jpg"
                alt="Afluencia de votantes en casilla electoral, México 2018"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono drop-shadow-md">
                Casilla electoral durante las elecciones federales de México 2018 · Foto: ProtoplasmaKid (CC BY-SA 4.0)
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span className="uppercase font-bold text-[#141312]">
                REGISTRO HISTÓRICO: ELECCIÓN PRESIDENCIAL 2018
              </span>
              <span>CCPC · 56 MILLONES DE VOTANTES</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ DOS COLUMNAS: TEXTO ARGUMENTAL + COMPARISON CHART ═══ */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Columna Izquierda: Crónica de dev */}
          <div className="lg:col-span-6 space-y-6">
            <PostItNote color="yellow" tilt="rotate-[-1deg]" className="w-full">
              <span className="font-mono text-xs font-bold uppercase text-[#1D4ED8] block mb-1">
                EL PATRÓN DE LAS PRESIDENCIALES
              </span>
              <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                En las elecciones presidenciales la afluencia sube para todos los grupos de edad. En <strong>2012</strong> los jóvenes alcanzaron su máximo histórico (<strong>55.6%</strong>). En <strong>2018</strong> llegaron al <strong>51%</strong>. En <strong>2024</strong>, bajó al <strong>47.1%</strong>.
              </p>
            </PostItNote>

            <div className="bg-white/80 p-6 border border-neutral-300 shadow-sm space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed">
                El patrón se repite en cada proceso presidencial: todos votan más cuando está en juego la titularidad del Ejecutivo, pero <strong className="text-[#DC2626]">la brecha entre jóvenes y adultos mayores se mantiene en torno a 14 puntos porcentuales</strong>.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed">
                La tecnología y los nuevos canales no rompieron esa inercia estructural. El tipo de elección mueve las cifras generales hacia arriba o hacia abajo, pero la distancia relativa entre edades se mantiene firme.
              </p>

              <div className="pt-3 border-t border-dashed border-neutral-300 flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-[#141312]">BRECHA GENERACIONAL:</span>
                <span className="font-bold text-[#DC2626]">~14 PUNTOS CONSTANTES</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Gráfica Comparativa 2012 vs 2024 */}
          <div className="lg:col-span-6">
            <SpiralPaperCard tilt="rotate-[0.5deg]">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-dashed border-neutral-300">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold block">
                    ★ ANÁLISIS DE EVOLUCIÓN CENSAL
                  </span>
                  <h4 className="font-poster text-2xl sm:text-3xl text-[#141312]">
                    CÓMO CAMBIÓ LA PARTICIPACIÓN
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#6B7280] font-bold">
                  2012 vs 2024
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#4B5563] mb-6">
                Comparativa por grupo de edad entre el pico juvenil de 2012 y la elección de 2024:
              </p>

              <ComparisonChart
                before={data2012}
                after={data2024}
                beforeLabel="2012 (Máximo #YoSoy132)"
                afterLabel="2024 (Presidencial)"
              />
            </SpiralPaperCard>
          </div>
        </div>

        {/* Cita de Cierre de Acto */}
        <ImpactQuote
          quote="El tipo de elección mueve las cifras globales; la distancia entre generaciones, no tanto. Catorce puntos porcentuales separan sistemáticamente a los jóvenes de los adultos mayores."
          author="CCPC INE — Diagnóstico Histórico 2009–2024"
          color="white"
          tilt="rotate-[-0.5deg]"
          className="w-full"
        />
      </div>
    </section>
  );
}
