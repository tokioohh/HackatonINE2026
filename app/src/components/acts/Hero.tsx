"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

/* "Menos" — cae como sello, luego pulsa rojo: la caída de la participación */
function DramaticMenos() {
  const ctrl = useAnimationControls();

  useEffect(() => {
    ctrl
      .start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 1.1,
        transition: { type: "spring", stiffness: 370, damping: 10, delay: 0.48 },
      })
      .then(() => {
        ctrl.start({
          color: ["var(--rojo-mx)", "#e8152a", "var(--rojo-mx)"],
          scale: [1, 1.06, 1],
          transition: { duration: 1.8, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" },
        });
      });
  }, [ctrl]);

  return (
    <motion.span
      animate={ctrl}
      initial={{ opacity: 0, y: -100, scale: 1.65, rotate: -11 }}
      style={{
        display: "inline-block",
        fontFamily: "'Times New Roman', serif",
        fontWeight: 900,
        color: "var(--rojo-mx)",
        marginRight: "0.22em",
        lineHeight: "inherit",
        verticalAlign: "baseline",
      }}
    >
      Menos
    </motion.span>
  );
}

export function Hero() {
  const FS = "clamp(3.2rem, 6.8vw, 6.8rem)";

  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden"
      style={{ background: "var(--paper)" }}
    >
      <div className="grain-overlay" aria-hidden="true" />

      {/* Foto con halftone — mitad derecha */}
      <div
        className="absolute top-0 right-0 w-[46%] h-full hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/images/elecciones-federales-de-mexico-de-2024-15.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "grayscale(1) contrast(1.45) brightness(0.8)", opacity: 0.55 }}
        />
        <div className="halftone-dots" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--paper) 0%, transparent 55%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 55%, var(--paper) 98%)" }}
        />
      </div>

      {/* Masthead */}
      <div
        className="relative z-[2]"
        style={{ padding: "28px var(--margin) 16px", borderBottom: "3px double var(--ink-press)" }}
      >
        <div className="flex items-baseline justify-between">
          <span
            className="font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.75rem, 1vw, 0.875rem)", color: "var(--ink-press)", letterSpacing: "0.12em" }}
          >
            El Voto Joven
          </span>
          <span
            className="hidden md:block text-center"
            style={{ fontFamily: "var(--font-serif)", fontSize: "var(--step-small)", color: "var(--ink-faded)", fontStyle: "italic" }}
          >
            Hackatón INE 2026 · Eje 3: Storytelling con Datos
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--step-small)", color: "var(--ink-faded)" }}>
            Octubre 2026
          </span>
        </div>
      </div>
      <div
        className="relative z-[2]"
        style={{ height: "1px", background: "var(--ink-press)", margin: "0 var(--margin)", opacity: 0.3 }}
        aria-hidden="true"
      />

      <div className="relative z-[2] flex-1" style={{ minHeight: "80px" }} />

      {/* Titular animado + subtítulo */}
      <div className="relative z-[2]" style={{ padding: "0 var(--margin) 64px" }}>
        <div className="md:flex md:items-end md:gap-12">
          {/* Subtítulo lateral */}
          <FadeIn delay={1.0}>
            <p
              className="max-w-[32ch] mb-6 md:mb-0 md:shrink-0 md:text-right md:pr-12 leading-[1.55]"
              style={{
                width: "clamp(0px, var(--axis), 100%)",
                fontFamily: "var(--font-serif)",
                fontSize: "var(--step-body)",
                color: "var(--ink-faded)",
                fontStyle: "italic",
              }}
            >
              La generación más conectada puede decidir el futuro de México.
              Pero primero tiene que aparecer.
            </p>
          </FadeIn>

          {/* Titular — recortes animados */}
          <div className="flex-1">
            <h1 style={{ fontSize: FS, letterSpacing: "-0.02em" }}>

              {/* Línea 1: "Más información." */}
              <span style={{ display: "block", lineHeight: 1.05, paddingBottom: "0.06em" }}>
                {/* "Más" — Courier en chip blanco, entra desde arriba-izquierda */}
                <motion.span
                  initial={{ opacity: 0, y: -45, x: -18, rotate: -13, scale: 0.78 }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: -1.4, scale: 1 }}
                  transition={{ type: "spring", stiffness: 240, damping: 17, delay: 0.16 }}
                  style={{
                    display: "inline-block",
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 700,
                    fontSize: "0.78em",
                    color: "var(--ink-press)",
                    background: "#ffffff",
                    padding: "0 7px 4px",
                    marginRight: "0.22em",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.15), 0 0 0 0.5px rgba(0,0,0,0.08)",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                  }}
                >
                  Más
                </motion.span>

                {/* "información." — Georgia itálica en chip crema, entra desde arriba-derecha */}
                <motion.span
                  initial={{ opacity: 0, y: -55, x: 22, rotate: 8, scale: 0.83 }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: 0.6, scale: 1 }}
                  transition={{ type: "spring", stiffness: 215, damping: 20, delay: 0.3 }}
                  style={{
                    display: "inline-block",
                    fontFamily: "'Georgia', serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "0.88em",
                    color: "var(--ink-press)",
                    background: "#f8f4ec",
                    padding: "0 7px 4px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                  }}
                >
                  información.
                </motion.span>
              </span>

              {/* Línea 2: "Menos decisión." */}
              <span style={{ display: "block", lineHeight: 1.05 }}>
                {/* "Menos" — sello rojo que cae con rebote duro, pulsa infinitamente */}
                <DramaticMenos />

                {/* "decisión." — Playfair en chip papel oscuro, entra desde izquierda */}
                <motion.span
                  initial={{ opacity: 0, y: -40, x: -26, rotate: -7, scale: 0.74 }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: -0.5, scale: 1 }}
                  transition={{ type: "spring", stiffness: 228, damping: 18, delay: 0.64 }}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 800,
                    fontStyle: "italic",
                    fontSize: "0.95em",
                    color: "var(--ink-press)",
                    background: "#ede0cb",
                    padding: "0 7px 4px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.13), 0 0 0 0.5px rgba(0,0,0,0.06)",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                  }}
                >
                  decisión.
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        <FadeIn delay={0.9} className="mt-8 md:mt-6 md:ml-[var(--axis)]">
          <a href="#acto-1" className="btn-newspaper" style={{ fontSize: "var(--step-body)" }}>
            Explorar los datos
          </a>
        </FadeIn>
      </div>

      {/* Regla inferior doble */}
      <div
        className="relative z-[2]"
        style={{ margin: "0 var(--margin)", borderTop: "1px solid var(--ink-press)", opacity: 0.4 }}
        aria-hidden="true"
      />
      <div
        className="relative z-[2]"
        style={{ margin: "3px var(--margin) 0", borderTop: "3px solid var(--ink-press)", opacity: 0.6 }}
        aria-hidden="true"
      />

      <FadeIn delay={1.2}>
        <p
          className="relative z-[2] text-center"
          style={{
            padding: "10px var(--margin) 16px",
            fontFamily: "var(--font-serif)",
            fontSize: "var(--step-small)",
            color: "var(--ink-faded)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Desplaza para continuar ↓
        </p>
      </FadeIn>
    </section>
  );
}
