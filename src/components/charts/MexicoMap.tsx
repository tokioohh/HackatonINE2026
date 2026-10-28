"use client";

import { useState } from "react";
import { STATES_DATA } from "@/lib/data";
import { StateParticipation } from "@/types";
import mexicoPaths from "@/lib/mexico-paths.json";
import { AlertCircle } from "lucide-react";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";

export function MexicoMap() {
  const [selectedStateCode, setSelectedStateCode] = useState<string>("BC");
  const [hoveredStateCode, setHoveredStateCode] = useState<string | null>(null);

  // Combine path data with state statistics
  const statesMap = new Map<string, StateParticipation>();
  STATES_DATA.forEach((s) => statesMap.set(s.code, s));

  const activeCode = hoveredStateCode || selectedStateCode;
  const activeState = statesMap.get(activeCode) || statesMap.get("BC")!;

  // Color logic: Menor porcentaje (más grave) = Color más intenso/fuerte
  const getStateColor = (rate: number, isSelected: boolean) => {
    if (isSelected) return "#DC2626"; // Resaltado al seleccionar
    if (rate < 32) return "#DC2626"; // Alerta máxima / Desierto grave
    if (rate < 37) return "#EA580C"; // Muy bajo
    if (rate < 43) return "#78716C"; // Bajo
    if (rate < 50) return "#44403C"; // Medio
    return "#171513"; // Relativamente alto (>50%)
  };

  return (
    <div className="py-6 border-t border-b border-dashed border-neutral-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-dashed border-neutral-300">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="urgent-tag flex items-center gap-1.5 text-[10px]">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>ATLAS CENSAL DE GRAVEDAD CÍVICA (2024)</span>
            </span>
            <span className="font-mono text-xs text-[#6B7280]">INE CCPC</span>
          </div>
          <h3 className="font-poster text-3xl sm:text-5xl text-[#141312] tracking-wide uppercase">
            GEOGRAFÍA DE LOS DESIERTOS ELECTORALES
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#4B5563] mt-1">
            Haz clic o pasa el cursor sobre cualquier entidad para consultar el registro censal de voto joven.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-1.5 text-[11px] font-mono bg-white p-3 border border-neutral-300 shrink-0 shadow-sm relative">
          <ScotchTape className="-top-3 right-4 w-16 h-5" tilt="1deg" />
          <div className="text-[10px] text-[#4B5563] uppercase font-bold">Intensidad de Abandono:</div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#DC2626]" />
            <span className="text-[#DC2626] font-bold">&lt; 32% (Crítico / Desierto)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#EA580C]" />
            <span className="text-[#141312]">32% – 37% (Grave)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#78716C]" />
            <span className="text-[#141312]">37% – 43% (Bajo)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#171513]" />
            <span className="text-[#6B7280]">&gt; 50% (Mayor concurrencia)</span>
          </div>
        </div>
      </div>

      {/* Grid con items-start para evitar saltos o temblor al cambiar de estado */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* SVG Mexico Map montado con cinta scotch */}
        <div className="lg:col-span-8 relative flex items-center justify-center p-4 bg-white border border-neutral-300 min-h-[460px] shadow-sm">
          <ScotchTape className="-top-3 left-8" tilt="-2deg" />
          <ScotchTape className="-top-3 right-8" tilt="3deg" />

          <svg
            viewBox="0 0 960 600"
            className="w-full h-auto max-h-[520px]"
          >
            {mexicoPaths.map((item) => {
              const stateData = statesMap.get(item.code);
              const rate = stateData ? stateData.youthParticipation2024 : 39;
              const isSelected = item.code === activeCode;
              const fillColor = getStateColor(rate, isSelected);

              return (
                <path
                  key={item.code}
                  d={item.path}
                  fill={fillColor}
                  stroke={isSelected ? "#141312" : "#FFFFFF"}
                  strokeWidth={1.2}
                  className="cursor-pointer transition-colors duration-100 hover:opacity-90"
                  onMouseEnter={() => setHoveredStateCode(item.code)}
                  onMouseLeave={() => setHoveredStateCode(null)}
                  onClick={() => setSelectedStateCode(item.code)}
                >
                  <title>{`${stateData?.name || item.rawName}: ${rate}%`}</title>
                </path>
              );
            })}
          </svg>

          {/* Map helper watermark */}
          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#6B7280] pointer-events-none">
            Proyección cartográfica oficial CCPC · México
          </div>
        </div>

        {/* Selected State Dossier Card con altura fija min-h-[460px] para prevenir temblores en el mapa */}
        <div className="lg:col-span-4 bg-[#FFE66D] border border-neutral-400 p-6 flex flex-col justify-between shadow-md relative rotate-1 min-h-[460px]">
          <ScotchTape className="-top-3.5 left-1/2 -translate-x-1/2 w-24 h-6" tilt="-1deg" />

          <div>
            <div className="flex justify-between items-center mb-3 border-b border-black/20 pb-2">
              <span className="uppercase font-bold text-xs font-mono">FICHA DE ENTIDAD</span>
              <span className="urgent-tag text-[9px] py-0 px-2">{activeState.region}</span>
            </div>

            <h4 className="font-poster text-4xl sm:text-5xl text-[#141312] uppercase tracking-wide leading-none mb-4">
              {activeState.name}
            </h4>

            {/* Main Stat Callout */}
            <div className="border-t border-b border-black/20 py-3 mb-4">
              <div className="text-[10px] font-mono text-[#1F2937] uppercase font-bold">
                PARTICIPACIÓN JUVENIL (18–24 AÑOS):
              </div>
              <div
                className={`font-poster text-6xl leading-none my-1 ${
                  activeState.youthParticipation2024 < 35
                    ? "text-[#DC2626]"
                    : "text-[#141312]"
                }`}
              >
                <DoodleCircle color="#DC2626">
                  <span>{activeState.youthParticipation2024}%</span>
                </DoodleCircle>
              </div>
              <div className="text-[11px] font-typewriter text-[#1F2937] pt-1 min-h-[34px]">
                {activeState.youthParticipation2024 < 35
                  ? "⚠ Desierto Cívico Grave: Menos de 3.5 de cada 10 votaron."
                  : activeState.youthParticipation2024 < 45
                  ? "Participación por debajo del estándar de adultos."
                  : "Por encima del promedio nacional juvenil."}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-2 font-mono text-xs text-[#1F2937]">
              <div className="flex justify-between border-b border-black/15 pb-1.5">
                <span>Caída vs. Pico Histórico:</span>
                <span className="text-[#DC2626] font-bold">{activeState.youthChange} pts</span>
              </div>
              <div className="flex justify-between border-b border-black/15 pb-1.5">
                <span>Voto General (2024):</span>
                <span className="font-bold">{activeState.participation2024}%</span>
              </div>
              <div className="flex justify-between border-b border-black/15 pb-1.5">
                <span>Voto General (2018):</span>
                <span>{activeState.participation2018}%</span>
              </div>
              <div className="flex justify-between border-b border-black/15 pb-1.5">
                <span>Voto General (2009):</span>
                <span>{activeState.participation2009}%</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/20 text-[10px] font-mono text-[#4B5563]">
            Haz clic en los estados norteños (Chihuahua, Baja California, Sonora) para ver el contraste con el sur (Yucatán, Chiapas).
          </div>
        </div>
      </div>
    </div>
  );
}
