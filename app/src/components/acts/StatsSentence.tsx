"use client";

import { motion } from "framer-motion";

interface StatsSentenceProps {
  id?: string;
  background?: string;
}

/* Chip de periódico para números clave dentro del párrafo */
function Chip({
  children,
  color = "var(--ink-press)",
  bg = "#f8f4ec",
  rotate = "-0.8deg",
  font = "var(--font-serif)",
}: {
  children: React.ReactNode;
  color?: string;
  bg?: string;
  rotate?: string;
  font?: string;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: font,
        fontWeight: 800,
        color,
        background: bg,
        padding: "1px 8px 3px",
        margin: "0 3px",
        transform: `rotate(${rotate})`,
        transformOrigin: "center bottom",
        boxShadow: "0 1px 4px rgba(0,0,0,0.14), 0 0 0 0.5px rgba(0,0,0,0.07)",
        verticalAlign: "baseline",
        lineHeight: "inherit",
      }}
    >
      {children}
    </span>
  );
}

export function StatsSentence({ id, background }: StatsSentenceProps) {
  return (
    <section
      id={id}
      className="min-h-[85svh] flex items-center relative overflow-hidden"
      style={{
        padding: "0 var(--margin)",
        background: background || "var(--paper-dark)",
      }}
    >
      {/* Grano de papel — zona de transición */}
      <div className="grain-overlay" aria-hidden="true" />

      <motion.p
        className="relative z-[2] max-w-[55ch]"
        style={{
          marginLeft: "4%",
          fontSize: "clamp(1.5rem, 4.4vw, 4.5rem)",
          lineHeight: 1.18,
          fontFamily: "var(--font-serif)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span style={{ color: "var(--ink-faded)", fontWeight: 400 }}>En </span>
        <Chip rotate="-1deg">15 años</Chip>
        <span style={{ color: "var(--ink-faded)", fontWeight: 400 }}> y </span>
        <Chip rotate="0.6deg" font="'Times New Roman', serif">6 elecciones</Chip>
        <span style={{ color: "var(--ink-faded)", fontWeight: 400 }}>
          , los jóvenes pasaron de llenar{" "}
        </span>
        <Chip rotate="1.1deg" font="'Courier New', monospace">1 de cada 7 votos</Chip>
        <span style={{ color: "var(--ink-faded)", fontWeight: 400 }}> a llenar apenas </span>
        <Chip
          color="var(--headline-red)"
          bg="#fff5f5"
          rotate="-1.4deg"
          font="'Times New Roman', serif"
        >
          1 de cada 8
        </Chip>
        <span style={{ color: "var(--ink-faded)", fontWeight: 400 }}>
          . Parece poco. Son millones de voces que no se escucharon.
        </span>
      </motion.p>
    </section>
  );
}
