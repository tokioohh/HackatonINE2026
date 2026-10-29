"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { elections, participationByAge, ageGroups } from "@/lib/data";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { SpiralPaperCard } from "@/components/ui/NotebookPaper";
import { BarChart3, Filter } from "lucide-react";

type AgeKey = "18-24" | "25-34" | "35-44" | "45-59" | "60+";

export function ExplorerSection() {
  const [selectedGroup, setSelectedGroup] = useState<AgeKey>("18-24");

  const chartData = useMemo(() => {
    return participationByAge.map((entry) => ({
      year: entry.year,
      value: entry[selectedGroup],
      overall: elections.find((e) => e.year === entry.year)?.overallParticipation ?? 0,
    }));
  }, [selectedGroup]);

  const activeGroupMeta = ageGroups.find((g) => g.label === selectedGroup);

  const maxValue = 75;
  const chartHeight = 280;
  const chartWidth = 620;
  const barWidth = 54;
  const gap = (chartWidth - barWidth * chartData.length) / (chartData.length - 1);

  return (
    <section
      id="explora"
      className="relative py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Doodles tenues de fondo */}
      <NotebookBgDoodle
        src="/doodles/cactus.png"
        alt="Cactus fondo libreta"
        width={140}
        tilt={-6}
        opacity={0.15}
        className="top-20 left-10 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/calendarioaz.png"
        alt="Calendario fondo libreta"
        width={150}
        tilt={10}
        opacity={0.13}
        className="bottom-16 right-12 hidden md:block"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Doodle silueta joven al margen de los filtros */}
        <DoodleStamp
          src="/doodles/Usuario.png"
          alt="Usuario silueta dibujada"
          width={100}
          tilt={-4}
          className="absolute -top-10 right-4 hidden md:block z-20"
        />
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-10 pb-4 border-b border-dashed border-neutral-300">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="urgent-tag flex items-center gap-1 text-[10px]">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>EXPLORADOR CENSAL INTERACTIVO</span>
              </span>
              <span className="font-mono text-xs text-[#DC2626] font-bold">
                6 ELECCIONES · SERIE 2009–2024
              </span>
            </div>
            <h3 className="font-poster text-3xl sm:text-5xl text-[#141312] uppercase tracking-wide">
              EXPLORA TÚ MISMO LA EVOLUCIÓN
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] mt-1">
              Selecciona un grupo censal para comparar su comportamiento histórico frente al promedio nacional.
            </p>
          </div>
          <span className="text-xs font-mono text-[#4B5563] uppercase font-bold">
            CCPC INE OFICIAL
          </span>
        </div>

        {/* Contenedor tipo libreta con pestaña y cinta scotch */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Selector de Grupos estilo pestañas adhesivas */}
          <div className="lg:col-span-4 bg-white p-5 border border-neutral-300 shadow-sm relative space-y-3">
            <ScotchTape className="-top-3 left-6 w-20 h-5" tilt="-2deg" />

            <div className="flex items-center gap-2 pb-2 border-b border-dashed border-neutral-300">
              <Filter className="w-4 h-4 text-[#DC2626]" />
              <span className="font-mono text-xs font-bold uppercase text-[#141312]">
                SELECCIONA GRUPO DE EDAD:
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              {ageGroups.map((group) => {
                const isSelected = selectedGroup === group.label;
                return (
                  <button
                    key={group.label}
                    onClick={() => setSelectedGroup(group.label as AgeKey)}
                    className={`p-3 text-left border transition-all cursor-pointer rounded-xs flex justify-between items-center ${
                      isSelected
                        ? "bg-[#FFE66D] border-[#141312] shadow-xs translate-x-1 font-bold text-[#141312]"
                        : "bg-neutral-50 border-neutral-200 text-[#4B5563] hover:border-black hover:bg-white"
                    }`}
                  >
                    <span className="font-mono text-xs">{group.name}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-dashed border-neutral-300 text-xs font-mono text-[#6B7280] space-y-1">
              <div>Grupo activo: <strong>{activeGroupMeta?.name}</strong></div>
              <div>Fuente: 6 bases censales del CCPC INE.</div>
            </div>
          </div>

          {/* Gráfica SVG interactiva en libreta escolar */}
          <div className="lg:col-span-8 bg-[#FAF8F5] p-6 sm:p-8 border border-neutral-300 shadow-md relative rounded-xs">
            <ScotchTape className="-top-3.5 right-12 w-28 h-6" tilt="1deg" />

            {/* Leyenda superior */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-dashed border-neutral-300 text-xs font-mono">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 bg-[#DC2626]" />
                  <span className="font-bold text-[#141312]">
                    {selectedGroup} años
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 bg-neutral-300 border border-neutral-400" />
                  <span className="text-[#6B7280]">Promedio general nacional</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#6B7280]">
                Eje Y: 0% a 75%
              </span>
            </div>

            {/* SVG gráfico reactivo */}
            <div className="w-full overflow-x-auto py-2">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight + 45}`}
                className="w-full min-w-[500px] max-w-[650px] mx-auto h-auto select-none"
                role="img"
                aria-label={`Participación del grupo ${selectedGroup} por año`}
              >
                {/* Renglones guía horizontales */}
                {[20, 40, 60].map((level) => {
                  const y = chartHeight - (level / maxValue) * chartHeight;
                  return (
                    <g key={level}>
                      <line
                        x1="0"
                        y1={y}
                        x2={chartWidth}
                        y2={y}
                        stroke="#E5E7EB"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={chartWidth - 5}
                        y={y - 4}
                        textAnchor="end"
                        fill="#9CA3AF"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {level}%
                      </text>
                    </g>
                  );
                })}

                {/* Barras animadas por año */}
                {chartData.map((d, i) => {
                  const x = i * (barWidth + gap);
                  const barH = (d.value / maxValue) * chartHeight;
                  const overallH = (d.overall / maxValue) * chartHeight;

                  return (
                    <g key={d.year}>
                      {/* Barra de Promedio General (atrás, gris) */}
                      <motion.rect
                        x={x}
                        width={barWidth}
                        fill="#E5E7EB"
                        stroke="#D1D5DB"
                        strokeWidth="1"
                        initial={{ height: 0, y: chartHeight }}
                        animate={{
                          y: chartHeight - overallH,
                          height: overallH,
                        }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                      />

                      {/* Barra del Grupo de Edad Seleccionado (roja) */}
                      <motion.rect
                        x={x + 6}
                        width={barWidth - 12}
                        fill="#DC2626"
                        initial={{ height: 0, y: chartHeight }}
                        animate={{
                          y: chartHeight - barH,
                          height: barH,
                        }}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                      />

                      {/* Año */}
                      <text
                        x={x + barWidth / 2}
                        y={chartHeight + 22}
                        textAnchor="middle"
                        fill="#1F2937"
                        fontSize="13"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {d.year}
                      </text>

                      {/* Porcentaje arriba de la barra */}
                      <motion.text
                        x={x + barWidth / 2}
                        textAnchor="middle"
                        fill="#DC2626"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="monospace"
                        animate={{ y: chartHeight - barH - 6 }}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                      >
                        {d.value}%
                      </motion.text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 pt-3 border-t border-dashed border-neutral-300 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span>Las barras rojas muestran el grupo seleccionado; las barras grises indican el promedio nacional.</span>
              <span className="font-bold">INE CCPC 2009–2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
