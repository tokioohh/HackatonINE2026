"use client";

import { useState } from "react";
import { states, StateData } from "@/lib/data";
import mexicoPaths from "@/lib/mexico-paths.json";
import { AlertCircle, Calendar } from "lucide-react";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";

const YEARS = [2009, 2012, 2015, 2018, 2021, 2024] as const;

export function MexicoMap() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedStateCode, setSelectedStateCode] = useState<string>("BC");
  const [hoveredStateCode, setHoveredStateCode] = useState<string | null>(null);

  // Map state data by path code (e.g. "BC", "CDMX", etc.)
  const statesMap = new Map<string, StateData>();
  states.forEach((s) => statesMap.set(s.code, s));

  const activeCode = hoveredStateCode || selectedStateCode;
  const activeState = statesMap.get(activeCode) || states[1]; // fallback to Baja California

  // Calculate rate for current selected year
  const activeRate = activeState.youthParticipation[selectedYear] ?? 0;
  const activeOverallRate = activeState.overallParticipation[selectedYear] ?? 0;

  // Calculate difference vs previous election
  const yearIdx = YEARS.indexOf(selectedYear as typeof YEARS[number]);
  const prevYear = yearIdx > 0 ? YEARS[yearIdx - 1] : null;
  const prevRate = prevYear ? (activeState.youthParticipation[prevYear] ?? 0) : null;
  const diff = prevRate !== null ? Number((activeRate - prevRate).toFixed(1)) : null;

  // Color logic for map paths based on youth participation rate:
  // Menor porcentaje (más grave desierto electoral) = Rojo más intenso
  const getStateColor = (rate: number, isSelected: boolean) => {
    if (isSelected) return "#B91C1C"; // Resaltado al seleccionar
    if (rate < 30) return "#DC2626"; // Desierto crítico (<30%)
    if (rate < 38) return "#EA580C"; // Bajo severo (30-38%)
    if (rate < 45) return "#CA8A04"; // Medio-bajo (38-45%)
    if (rate < 52) return "#4B5563"; // Regular (45-52%)
    return "#1F2937"; // Mayor concurrencia (>52%)
  };

  return (
    <section id="mapa" className="py-12 border-b border-dashed border-neutral-300 relative overflow-hidden">
      {/* Doodles tenues de fondo (efecto libreta) */}
      <NotebookBgDoodle
        src="/doodles/piramide.png"
        alt="Pirámide fondo libreta"
        width={160}
        tilt={-4}
        opacity={0.14}
        className="bottom-6 left-8 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/3enraya.png"
        alt="3 en raya fondo libreta"
        width={130}
        tilt={6}
        opacity={0.12}
        className="top-12 right-12 hidden md:block"
      />

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-8 pb-4 border-b border-dashed border-neutral-300 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="urgent-tag flex items-center gap-1.5 text-[10px]">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>MAPA INTERACTIVO NACIONAL</span>
            </span>
            <span className="font-mono text-xs text-[#DC2626] font-bold">INE CCPC // 32 ENTIDADES FEDERATIVAS</span>
          </div>
          <h3 className="font-poster text-3xl sm:text-5xl text-[#141312] tracking-wide uppercase">
            PARTICIPACIÓN JUVENIL POR ESTADO
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#4B5563] mt-1 max-w-2xl">
            El color más oscuro indica mayor participación de 18–24 años. Selecciona un año y haz clic en un estado para ver su dato.
          </p>
        </div>

        {/* Selector de Años estilo tira de masking tape / etiquetas sueltas */}
        <div className="flex items-center gap-1.5 bg-[#FFFDF7] p-2 border-2 border-black/80 shadow-[3px_3px_0px_#141312] rotate-[-0.5deg] relative">
          <ScotchTape className="-top-3 right-4 w-16 h-4" tilt="1deg" />
          <span className="text-[10px] font-mono text-[#141312] font-black uppercase mr-1 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#DC2626]" />
            AÑO:
          </span>
          {YEARS.map((y) => {
            const isYearActive = selectedYear === y;
            return (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-2.5 py-1 text-xs font-mono font-bold transition-all rounded-xs cursor-pointer ${
                  isYearActive
                    ? "bg-[#FFE66D] text-[#141312] border-2 border-black shadow-[2px_2px_0px_#000] scale-105"
                    : "text-[#4B5563] hover:text-[#141312] hover:bg-neutral-100"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid orgánico: Mapa libre sobre el papel + Ficha bibliográfica inclinada */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* SVG Mexico Map: Sin caja rígida, descansa directo sobre el papel */}
        <div className="lg:col-span-8 relative flex flex-col items-center justify-center p-2 sm:p-4 min-h-[460px]">
          {/* Sutil cinta masking en una esquina como si estuviera pegado en la libreta */}
          <ScotchTape className="-top-2 left-4 w-24 h-5 opacity-75" tilt="-3deg" />

          {/* Doodles en los espacios libres del mapa (Océano Pacífico, Norte y Golfo de México) */}
          <DoodleStamp
            src="/doodles/cactus.png"
            alt="Cactus del norte"
            width={85}
            tilt={8}
            className="absolute top-2 left-28 hidden md:block z-20"
          />
          <DoodleStamp
            src="/doodles/INE.png"
            alt="Logotipo INE garabateado"
            width={110}
            tilt={-4}
            className="absolute top-1/3 left-2 sm:left-6 hidden sm:block z-20"
          />
          <DoodleStamp
            src="/doodles/bandera.png"
            alt="Bandera de México"
            width={105}
            tilt={5}
            className="absolute top-6 right-8 sm:right-16 hidden md:block z-20"
          />

          {/* SVG del mapa exacto de Oskar */}
          <svg
            viewBox="0 0 1000 650"
            className="w-full h-auto max-h-[500px] select-none"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.08))" }}
          >
            {mexicoPaths.map((item) => {
              const stateData = statesMap.get(item.code);
              const rate = stateData ? (stateData.youthParticipation[selectedYear] ?? 0) : 35;
              const isSelected = activeCode === item.code;

              return (
                <path
                  key={item.code}
                  d={item.path}
                  fill={getStateColor(rate, isSelected)}
                  stroke="#FAF8F5"
                  strokeWidth={1.2}
                  className="transition-colors duration-200 cursor-pointer hover:opacity-85"
                  onMouseEnter={() => setHoveredStateCode(item.code)}
                  onMouseLeave={() => setHoveredStateCode(null)}
                  onClick={() => setSelectedStateCode(item.code)}
                >
                  <title>{`${stateData?.name || item.rawName}: ${rate}% (${selectedYear})`}</title>
                </path>
              );
            })}
          </svg>

          {/* Leyenda al pie del mapa estilo anotación al margen */}
          <div className="w-full mt-4 pt-3 border-t border-dashed border-neutral-300 flex flex-wrap justify-between items-center gap-3 text-[11px] font-mono">
            <span className="text-[#6B7280] font-bold">
              ESCALA ({selectedYear}):
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#DC2626]" />
                <span className="text-[#DC2626] font-bold">&lt; 30% (Crítico)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#EA580C]" />
                <span>30%–38%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#CA8A04]" />
                <span>38%–45%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#4B5563]" />
                <span>45%–52%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#1F2937]" />
                <span>&gt; 52% (Mayor voto)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ficha bibliográfica / Post-it inclinado del estado seleccionado */}
        <div className="lg:col-span-4 bg-[#FFFDF7] p-6 border-2 border-[#141312] shadow-[6px_6px_0px_#141312] rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 relative min-h-[460px] flex flex-col justify-between">
          <ScotchTape className="-top-3 right-8 w-24 h-5" tilt="2deg" />

          <div>
            <div className="flex justify-between items-start border-b border-black/15 pb-3 mb-4">
              <div>
                <span className="font-mono text-[10px] text-[#DC2626] font-black uppercase tracking-widest block">
                  EXPEDIENTE ESTATAL // {activeState.code}
                </span>
                <h4 className="font-poster text-3xl sm:text-4xl text-[#141312] leading-none mt-1">
                  {activeState.name}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold bg-[#FFE66D] px-2 py-1 border border-black shadow-xs rotate-[-2deg]">
                {activeState.region}
              </span>
            </div>

            {/* Gran dato porcentual juvenil */}
            <div className="my-4">
              <span className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                Participación juvenil en {selectedYear}:
              </span>
              <div className="font-poster text-6xl text-[#DC2626] leading-none">
                <DoodleCircle color="#DC2626">
                  <span>{activeRate}%</span>
                </DoodleCircle>
              </div>

              {/* Barra de progreso */}
              <div className="mt-3 h-3 w-full bg-neutral-200 border border-neutral-300 relative overflow-hidden rounded-xs">
                <div
                  className="h-full bg-[#DC2626]"
                  style={{ width: `${Math.min(100, activeRate)}%` }}
                />
              </div>
            </div>

            {/* Comparativa vs elección anterior */}
            <div className="space-y-3 py-3 border-t border-b border-dashed border-neutral-300 text-xs font-mono">
              {diff !== null && prevYear && (
                <div className="flex justify-between items-center">
                  <span className="text-[#4B5563]">Variación vs {prevYear}:</span>
                  <span
                    className={`font-bold ${
                      diff >= 0 ? "text-[#16A34A]" : "text-[#DC2626]"
                    }`}
                  >
                    {diff >= 0 ? `+${diff}` : diff} pp
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-[#4B5563]">Promedio general estatal:</span>
                <span className="font-bold text-[#141312]">{activeOverallRate}%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#4B5563]">Brecha interna con jóvenes:</span>
                <span className="font-bold text-[#DC2626]">
                  {(activeOverallRate - activeRate).toFixed(1)} pp
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-dashed border-neutral-300 text-[10px] font-mono text-[#6B7280] relative">
            {/* Águila en la esquina de la ficha bibliográfica */}
            <DoodleStamp
              src="/doodles/Aguila.png"
              alt="Águila mexicana"
              width={105}
              tilt={5}
              className="absolute -bottom-10 -right-8 hidden md:block"
            />
            <div>INE · Conteos Censales de Participación Ciudadana</div>
            <div className="text-[9px] text-[#9CA3AF] mt-0.5">
              Cálculo de participación juvenil sobre lista nominal de 18 a 24 años.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
