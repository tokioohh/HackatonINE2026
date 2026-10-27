"use client";

/* Efecto recorte de periódico — cada palabra con tipografía y chip de papel distintos.
   Estilos deterministas (por índice) para render estable en servidor y cliente. */

interface WordConfig {
  font: string;
  weight: number;
  sizeScale: number;
  rotate: string;
  ty: string;
  chip: string | null;
  fontStyle?: string;
}

const CONFIGS: WordConfig[] = [
  { font: "var(--font-serif)", weight: 800, sizeScale: 1, rotate: "-1.5deg", ty: "0px", chip: null },
  { font: "'Georgia', serif", weight: 700, sizeScale: 0.91, rotate: "0.8deg", ty: "-2px", chip: "#f8f4ec", fontStyle: "italic" },
  { font: "'Times New Roman', serif", weight: 900, sizeScale: 1.09, rotate: "-0.4deg", ty: "1px", chip: null },
  { font: "'Courier New', monospace", weight: 700, sizeScale: 0.84, rotate: "1.3deg", ty: "-3px", chip: "#ffffff" },
  { font: "var(--font-serif)", weight: 800, sizeScale: 1.04, rotate: "0.1deg", ty: "2px", chip: null, fontStyle: "italic" },
  { font: "'Georgia', serif", weight: 700, sizeScale: 0.94, rotate: "-0.9deg", ty: "0px", chip: "#f2ead6" },
  { font: "'Times New Roman', serif", weight: 800, sizeScale: 1.12, rotate: "1.5deg", ty: "-1px", chip: null },
  { font: "var(--font-serif)", weight: 700, sizeScale: 0.88, rotate: "0.4deg", ty: "3px", chip: "#ede0cb" },
];

interface RansomTextProps {
  words: string[];
  /** Color base del texto — heredado por todas las palabras */
  color?: string;
  /** Desplazar el índice inicial de CONFIGS (para variar entre líneas del mismo bloque) */
  offset?: number;
  className?: string;
}

export function RansomText({ words, color = "var(--ink-press)", offset = 0, className }: RansomTextProps) {
  return (
    <span className={className}>
      {words.map((word, i) => {
        const cfg = CONFIGS[(i + offset) % CONFIGS.length];
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              fontFamily: cfg.font,
              fontWeight: cfg.weight,
              fontSize: `${cfg.sizeScale}em`,
              fontStyle: cfg.fontStyle ?? "normal",
              color,
              transform: `rotate(${cfg.rotate}) translateY(${cfg.ty})`,
              transformOrigin: "center bottom",
              background: cfg.chip ?? "transparent",
              padding: cfg.chip ? "0 6px 3px" : "0",
              marginRight: i < words.length - 1 ? "0.26em" : "0",
              lineHeight: "inherit",
              boxShadow: cfg.chip
                ? "0 1px 3px rgba(0,0,0,0.13), 0 0 0 0.5px rgba(0,0,0,0.07)"
                : "none",
              verticalAlign: "baseline",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
