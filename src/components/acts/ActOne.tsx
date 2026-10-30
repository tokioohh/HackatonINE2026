"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote, SpiralPaperCard } from "@/components/ui/NotebookPaper";
import { HandDrawnBarChart } from "@/components/charts/HandDrawnBarChart";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import { participationByAge } from "@/lib/data";

export function ActOne() {
  const data2009 = participationByAge.find((d) => d.year === 2009)!;

  return (
    <section
      id="acto-1"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Doodles tenues de fondo (marcas de lápiz en la libreta) */}
      <NotebookBgDoodle
        src="/doodles/cactus.png"
        alt="Cactus fondo libreta"
        width={140}
        tilt={12}
        opacity={0.16}
        className="top-36 right-8 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/Sdibujo.png"
        alt="S fondo libreta"
        width={80}
        tilt={-8}
        opacity={0.14}
        className="bottom-20 left-10 hidden md:block"
      />

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
              ACTO I // 2009
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ ELECCIÓN INTERMEDIA · EL PUNTO DE PARTIDA
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL ORIGEN DE"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="LA BRECHA" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            La brecha entre menores y mayores de 35 ya existía antes de las redes sociales, antes de los memes y antes de TikTok. Es el punto de partida de esta historia.
          </p>
        </motion.div>

        {/* ═══ FOTO DOCUMENTAL PERIODÍSTICA: CASILLA ELECTORAL ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-3 sm:p-5 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.15)] rotate-[-0.5deg]">
            <ScotchTape className="-top-3 left-10 w-28 h-6" tilt="-3deg" />
            <ScotchTape className="-top-3 right-10 w-28 h-6" tilt="2deg" />

            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
              <Image
                src="/images/elecciones-mx/11-ciudadano-votando-2012.jpg"
                alt="Ciudadano depositando su voto en las elecciones federales de México 2012"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                quality={85}
                className="object-cover contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono drop-shadow-md">
                Ciudadano votando, CDMX 2012 · Foto: ProtoplasmaKid (CC BY-SA 4.0)
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span className="uppercase font-bold text-[#141312]">
                ARCHIVO CENSAL: ELECCIÓN INTERMEDIA 2009
              </span>
              <span>CCPC · REGISTRO CENSAL NACIONAL</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ DOS COLUMNAS: TEXTO NARRATIVO + GRÁFICA DE BARRAS ═══ */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Columna Izquierda: Crónica textual exacta de dev */}
          <div className="lg:col-span-6 space-y-6">
            <PostItNote color="yellow" tilt="rotate-[-1deg]" className="w-full">
              <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                2009. Elección intermedia. Las campañas eran carteles pegados en las bardas y anuncios en la tele a las ocho de la noche. La participación general fue baja — <strong>43%</strong> — y la de los menores de 35 fue aún peor: tanto los de 18–24 (<strong>36%</strong>) como los de 25–34 (<strong>35%</strong>) quedaron muy por debajo.
              </p>
            </PostItNote>

            <div className="bg-white/80 p-6 border border-neutral-300 shadow-sm space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed">
                De cada 10 menores de 35 inscritos, solo <strong className="text-[#DC2626]">3 o 4 fueron a la casilla</strong>. No era un problema de un solo grupo: 18–24 y 25–34 participaron casi igual (~35%). La brecha real estaba con los mayores de 35, que superaban el 43%, y los de 45+, que pasaban del 50%.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed">
                La brecha entre menores y mayores de 35 ya existía antes de las redes sociales, antes de los memes y antes de TikTok. Es el punto de partida de esta historia.
              </p>

              {/* Anotación manuscrita al margen */}
              <div className="pt-3 border-t border-dashed border-neutral-300">
                <p className="font-serif italic text-base sm:text-lg text-[#DC2626] font-normal">
                  &ldquo;La brecha no empezó después. Ya estaba ahí antes de que alguien la nombrara.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Gráfica de Barras Hand-Drawn de 2009 */}
          <div className="lg:col-span-6 relative">
            {/* Doodle Casilla Marcada sobre la tarjeta de la gráfica */}
            <DoodleStamp
              src="/doodles/casillamarcada.png"
              alt="Casilla marcada"
              width={105}
              tilt={-6}
              className="absolute -top-7 -right-4 hidden sm:block z-20"
            />
            <SpiralPaperCard tilt="rotate-[0.5deg]">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-dashed border-neutral-300">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#DC2626] font-bold block">
                    ★ REGISTRO OFICIAL DE URNAS
                  </span>
                  <h4 className="font-poster text-2xl sm:text-3xl text-[#141312]">
                    ¿QUIÉN VOTÓ EN 2009?
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#6B7280] font-bold">
                  CCPC INE
                </span>
              </div>

              <HandDrawnBarChart data={data2009} year={2009} />
            </SpiralPaperCard>
          </div>
        </div>

        {/* Dato de Impacto */}
        <ImpactQuote
          quote="Participación de menores de 35 en 2009: ~36% — 13 puntos por debajo de los mayores de 35."
          author="INE — Conteos Censales de Participación Ciudadana"
          color="white"
          tilt="rotate-[-0.5deg]"
          className="w-full"
        />
      </div>
    </section>
  );
}
