"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.17, delayChildren: 0.15 } },
};

const LINE_LEFT = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const statements = [
  "Tu voto vale exactamente lo mismo que el de cualquier otro. El problema es que no está.",
  "14.8 millones de jóvenes están en la lista nominal. Su peso en el resultado depende de que lleguen a la casilla.",
  "En 2027 habrá otra elección. Los datos de las últimas seis muestran el espacio que queda por llenar.",
];

export function ConcienciaSection() {
  return (
    <section
      id="conciencia"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Franja bandera superior */}
      <div aria-hidden="true" style={{ display: "flex", height: "7px" }}>
        <div style={{ flex: 1, background: "var(--verde-mx)" }} />
        <div style={{ flex: 1, background: "#f2ead6" }} />
        <div style={{ flex: 1, background: "var(--rojo-mx)" }} />
      </div>

      <div
        className="relative min-h-svh flex flex-col justify-center"
        style={{ padding: "100px var(--margin) 96px" }}
      >
        {/* VOTA — marca de agua gigante */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4vw",
            top: "50%",
            transform: "translateY(-50%) rotate(-9deg)",
            fontSize: "clamp(9rem, 28vw, 36rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            color: "rgba(107, 33, 168, 0.045)",
            pointerEvents: "none",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.05em",
          }}
        >
          VOTA
        </div>

        {/* Etiqueta */}
        <FadeIn>
          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "var(--step-small)",
              color: "var(--ine-purple-bright)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "60px",
            }}
          >
            Para los que aún pueden decidir
          </p>
        </FadeIn>

        {/* Manifiesto principal — cada línea entra desde la izquierda */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={STAGGER}
          style={{ marginBottom: "72px" }}
        >
          <motion.p
            variants={LINE_LEFT}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 4.8rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--muted)",
              lineHeight: 1.2,
            }}
          >
            La brecha
          </motion.p>

          <motion.p
            variants={LINE_LEFT}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 4.8rem)",
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 1.15,
            }}
          >
            lleva seis elecciones
          </motion.p>

          <motion.p
            variants={LINE_LEFT}
            style={{
              fontFamily: "'General Sans', system-ui, sans-serif",
              fontSize: "clamp(3.4rem, 8vw, 8.5rem)",
              fontWeight: 800,
              color: "var(--ink)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              marginTop: "8px",
            }}
          >
            abierta.
          </motion.p>

          <motion.p
            variants={LINE_LEFT}
            style={{
              fontFamily: "'General Sans', system-ui, sans-serif",
              fontSize: "clamp(3.4rem, 8vw, 8.5rem)",
              fontWeight: 800,
              color: "var(--ine-purple-bright)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
            }}
          >
            ¿La séptima?
          </motion.p>

          <motion.p
            variants={LINE_LEFT}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 3.2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--rojo-mx)",
              lineHeight: 1.3,
              marginTop: "20px",
            }}
          >
            Esa depende de ti.
          </motion.p>
        </motion.div>

        {/* Tres frases de impacto con barra lateral */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "52ch", marginBottom: "72px" }}>
          {statements.map((msg, i) => (
            <FadeIn key={i} delay={0.12 * i}>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "3px",
                    flexShrink: 0,
                    background: i === 1 ? "var(--ine-purple-bright)" : "var(--rojo-mx)",
                    marginTop: "5px",
                    alignSelf: "stretch",
                    minHeight: "2.5em",
                  }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    fontSize: "var(--step-body)",
                    color: i === 2 ? "var(--ink)" : "var(--muted)",
                    lineHeight: 1.55,
                    fontStyle: i === 2 ? "normal" : "normal",
                  }}
                >
                  {msg}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#explora"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "var(--rojo-mx)",
                color: "#ffffff",
                fontSize: "var(--step-body)",
                fontWeight: 700,
                letterSpacing: "0.03em",
                textDecoration: "none",
                transition: "background 180ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#a50e1e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--rojo-mx)")}
            >
              Ver cómo cambia tu voto
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#acto-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 28px",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                color: "var(--ine-purple-bright)",
                fontSize: "var(--step-body)",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 180ms ease, color 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ine-purple-bright)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.35)";
                e.currentTarget.style.color = "var(--ine-purple-bright)";
              }}
            >
              Volver a los datos
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Franja bandera inferior */}
      <div aria-hidden="true" style={{ display: "flex", height: "7px" }}>
        <div style={{ flex: 1, background: "var(--rojo-mx)" }} />
        <div style={{ flex: 1, background: "#f2ead6" }} />
        <div style={{ flex: 1, background: "var(--verde-mx)" }} />
      </div>
    </section>
  );
}
