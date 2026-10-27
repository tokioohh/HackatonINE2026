"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

function StampSlap({ children, delay, rotate = 0 }: { children: React.ReactNode; delay: number; rotate?: number }) {
  const ctrl = useAnimationControls();

  useEffect(() => {
    ctrl.start({
      opacity: 1,
      scale: 1,
      rotate,
      transition: { type: "spring", stiffness: 500, damping: 12, delay },
    });
  }, [ctrl, delay, rotate]);

  return (
    <motion.span
      animate={ctrl}
      initial={{ opacity: 0, scale: 2.5, rotate: rotate - 15 }}
      className="inline-block"
      style={{ lineHeight: "inherit", verticalAlign: "baseline" }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden torn-bottom"
      style={{ background: "var(--paper)" }}
    >
      {/* Texturas de papel real */}
      <div className="grain-overlay" aria-hidden="true" />
      <div className="paper-stains" aria-hidden="true" />

      {/* Foto de fondo — tratamiento de periódico viejo */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/elecciones-federales-de-mexico-de-2024-15.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.8) brightness(0.5)",
            opacity: 0.12,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Viñeta oscura en bordes — deterioro */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          boxShadow: "inset 0 0 150px rgba(60, 40, 10, 0.25), inset 0 0 40px rgba(60, 40, 10, 0.15)",
        }}
      />

      {/* ═══ MASTHEAD ═══ */}
      <div
        className="relative z-[3]"
        style={{
          padding: "28px var(--margin) 14px",
          borderBottom: "4px solid var(--ink-press)",
        }}
      >
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <span
            style={{
              fontFamily: "var(--font-typewriter)",
              fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
              color: "var(--ink-press)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            El Voto Joven
          </span>
          <span
            className="hidden md:block"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--step-small)",
              color: "var(--ink-faded)",
              fontStyle: "italic",
            }}
          >
            Eje 3: Storytelling con Datos
          </span>
          <span
            className="rubber-stamp"
            style={{
              fontSize: "clamp(0.55rem, 0.8vw, 0.7rem)",
              color: "var(--ink-aged)",
              borderWidth: "2px",
              padding: "2px 10px",
            }}
          >
            Oct. 2026
          </span>
        </div>
      </div>
      <div
        className="relative z-[3]"
        style={{ height: "1.5px", background: "var(--ink-press)", margin: "0 var(--margin)", opacity: 0.3 }}
        aria-hidden="true"
      />

      {/* Cinta adhesiva — como si el panfleto estuviera pegado en una pared */}
      <div
        className="tape-strip hidden md:block"
        style={{ top: "14px", left: "8%", width: "90px", height: "26px", transform: "rotate(-8deg)" }}
        aria-hidden="true"
      />
      <div
        className="tape-strip hidden md:block"
        style={{ top: "18px", right: "6%", width: "75px", height: "24px", transform: "rotate(6deg)" }}
        aria-hidden="true"
      />

      {/* Espaciador flexible */}
      <div className="relative z-[2] flex-1" style={{ minHeight: "60px" }} />

      {/* ═══ TITULAR PRINCIPAL ═══ */}
      <div className="relative z-[3]" style={{ padding: "0 var(--margin)" }}>
        <div className="md:flex md:items-end md:gap-12">

          {/* Subtítulo — anotación manuscrita */}
          <FadeIn delay={1.0}>
            <div
              className="handwritten-note max-w-[28ch] mb-8 md:mb-0 md:shrink-0 md:text-right md:pr-8"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)" }}
            >
              <p>De 2009 a 2024, los jóvenes de 18 a 24</p>
              <p>votan menos que cualquier otro grupo.</p>
              <p style={{ marginTop: "6px", fontWeight: 700 }}>
                Los datos muestran cuánto. No por qué.
              </p>
            </div>
          </FadeIn>

          {/* Titular — tipografía de protesta, mixta y agresiva */}
          <div className="flex-1">
            <h1
              style={{
                fontSize: "clamp(3.8rem, 8vw, 9rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            >
              {/* Línea 1: MÁS información. */}
              <span className="block" style={{ marginBottom: "0.06em" }}>
                <StampSlap delay={0.25} rotate={-1.5}>
                  <span
                    style={{
                      fontFamily: "'Impact', 'Arial Black', sans-serif",
                      fontWeight: 900,
                      color: "var(--ink-press)",
                      marginRight: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Seis
                  </span>
                </StampSlap>
                <motion.span
                  initial={{ opacity: 0, x: 50, rotate: 4 }}
                  animate={{ opacity: 1, x: 0, rotate: 0.5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 800,
                    fontStyle: "italic",
                    fontSize: "0.85em",
                    color: "var(--ink-press)",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                  }}
                >
                  elecciones.
                </motion.span>
              </span>

              {/* Línea 2: MENOS decisión. */}
              <span className="block">
                <motion.span
                  initial={{ opacity: 0, y: -60, scale: 1.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15, delay: 0.5 }}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-typewriter)",
                    fontSize: "0.78em",
                    color: "var(--ink-press)",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                    marginRight: "0.12em",
                    borderBottom: "4px solid var(--ink-press)",
                    paddingBottom: "2px",
                  }}
                >
                  Una
                </motion.span>
                <StampSlap delay={0.65} rotate={1}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 800,
                      color: "var(--ink-press)",
                    }}
                  >
                    brecha.
                  </span>
                </StampSlap>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ═══ CTA + PIE ═══ */}
      <div
        className="relative z-[3]"
        style={{ padding: "40px var(--margin) 0" }}
      >
        <FadeIn delay={0.9}>
          <a
            href="#acto-1"
            style={{
              display: "inline-block",
              background: "var(--ink-press)",
              color: "var(--paper)",
              padding: "14px 32px",
              fontFamily: "var(--font-typewriter)",
              fontSize: "var(--step-body)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Comenzar la historia ↓
          </a>
        </FadeIn>
      </div>

      {/* Stencil — marca de protesta en el papel */}
      <FadeIn delay={1.3} y={0}>
        <div
          className="absolute stencil-text hidden md:block"
          style={{
            bottom: "18%",
            right: "var(--margin)",
            fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
            color: "var(--ink-press)",
            opacity: 0.07,
            transform: "rotate(4deg)",
            zIndex: 2,
          }}
          aria-hidden="true"
        >
          ¿DÓNDE ESTÁN?
        </div>
      </FadeIn>

      {/* Regla inferior + scroll indicator */}
      <div className="relative z-[3] mt-auto">
        <div
          style={{
            margin: "0 var(--margin)",
            borderTop: "1.5px solid var(--ink-press)",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            margin: "3px var(--margin) 0",
            borderTop: "3px solid var(--ink-press)",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />
        <FadeIn delay={1.2}>
          <p
            className="text-center"
            style={{
              padding: "12px var(--margin) 20px",
              fontFamily: "var(--font-typewriter)",
              fontSize: "var(--step-small)",
              color: "var(--ink-ghost)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Desplaza para continuar ↓
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
