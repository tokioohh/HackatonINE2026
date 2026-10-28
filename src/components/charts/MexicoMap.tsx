"use client";

import { useState } from "react";
import { states, StateData } from "@/lib/data";
import mexicoPaths from "@/lib/mexico-paths.json";
import { AlertCircle, Calendar } from "lucide-react";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";

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
    <section id="mapa" className="py-12 border-b border-dashed border-neutral-300">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-8 pb-4 border-b border-dashed border-neutral-300">
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

        {/* Selector de Años estilo pestañas de libreta */}
        <div className="flex items-center gap-1.5 bg-white p-2 border border-neutral-300 shadow-sm relative">
          <ScotchTape className="-top-3 right-4 w-16 h-4" tilt="1deg" />
          <span className="text-[10px] font-mono text-[#6B7280] font-bold uppercase mr-1 flex items-center gap-1">
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
                    ? "bg-[#FFE66D] text-[#141312] border border-[#141312] shadow-xs scale-105"
                    : "text-[#4B5563] hover:text-[#141312] hover:bg-neutral-100"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid estable sin temblores (items-start) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* SVG Mexico Map montado con cinta scotch */}
        <div className="lg:col-span-8 relative flex flex-col items-center justify-center p-4 sm:p-6 bg-white border border-neutral-300 min-h-[480px] shadow-sm">
          <ScotchTape className="-top-3 left-8 w-28 h-6" tilt="-2deg" />
          <ScotchTape className="-top-3 right-8 w-28 h-6" tilt="3deg" />

          {/* SVG del mapa exacto de Oskar */}
          <svg
            viewBox="0 0 1000 650"
            className="w-full h-auto max-h-[500px] select-none"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" }}
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

          {/* Leyenda al pie del mapa */}
          <div className="w-full mt-4 pt-3 border-t border-dashed border-neutral-200 flex flex-wrap justify-between items-center gap-3 text-[11px] font-mono">
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

        {/* Ficha lateral fija del estado seleccionado (sin temblores) */}
        <div className="lg:col-span-4 bg-[#FAF8F5] p-6 border border-neutral-300 shadow-sm relative min-h-[480px] flex flex-col justify-between">
          <ScotchTape className="-top-3 left-6 w-20 h-5" tilt="-1deg" />

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
              <span className="text-xs font-mono font-bold bg-white px-2 py-1 border border-neutral-300 shadow-xs">
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

          <div className="pt-4 border-t border-dashed border-neutral-300 text-[10px] font-mono text-[#6B7280]">
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
