"use client";

import { useState, useEffect, useRef } from "react";

type Era = "paper" | "digital";

export function Nav() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [era, setEra] = useState<Era>("paper");
  const lastScrollY = useRef(0);
  const eraRef = useRef<Era>("paper");
  const morphTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      /* Mostrar/ocultar según dirección de scroll */
      if (scrollY < 100) {
        setVisible(true);
      } else if (scrollY > lastScrollY.current + 5) {
        setVisible(false);
      } else if (scrollY < lastScrollY.current - 5) {
        setVisible(true);
      }
      lastScrollY.current = scrollY;

      /* Detección de era — morph al cruzar #acto-2 */
      const anchor = document.getElementById("acto-2");
      if (anchor) {
        const { top } = anchor.getBoundingClientRect();
        const newEra: Era = top < window.innerHeight * 0.5 ? "digital" : "paper";
        if (newEra !== eraRef.current) {
          eraRef.current = newEra;
          /* Deslizar hacia arriba → cambiar estilo → volver */
          setVisible(false);
          if (morphTimer.current) clearTimeout(morphTimer.current);
          morphTimer.current = setTimeout(() => {
            setEra(newEra);
            setVisible(true);
          }, 300);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (morphTimer.current) clearTimeout(morphTimer.current);
    };
  }, []);

  const isPaper = era === "paper";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: "22px var(--margin)",
        transform: visible ? "translateY(0)" : "translateY(-115%)",
        transition:
          "transform 320ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms ease, border-color 280ms ease",
        background: scrolled
          ? isPaper
            ? "rgba(242, 234, 214, 0.95)"
            : "rgba(13, 2, 33, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? isPaper
            ? "1px solid rgba(26, 18, 8, 0.18)"
            : "1px solid rgba(168, 85, 247, 0.22)"
          : "none",
      }}
    >
      {/* Logotipo */}
      <span
        className="font-bold tracking-tight"
        style={{
          fontSize: "var(--step-body)",
          fontFamily: isPaper ? "var(--font-serif)" : "'General Sans', system-ui, sans-serif",
          color: isPaper ? "var(--ink-press)" : "var(--ink)",
          transition: "color 280ms ease",
        }}
      >
        El Voto Joven
      </span>

      {/* Sección central — solo desktop */}
      <div
        className="hidden md:flex items-center gap-8"
        style={{
          marginLeft: "var(--axis)",
          fontSize: "var(--step-small)",
          color: isPaper ? "var(--ink-faded)" : "var(--muted)",
          transition: "color 280ms ease",
          fontFamily: isPaper ? "var(--font-serif)" : "'General Sans', system-ui, sans-serif",
        }}
      >
        {(
          [
            ["#acto-1", "La Brecha"],
            ["#acto-2", "El Vaivén"],
            ["#acto-3", "La Persistencia"],
          ] as [string, string][]
        ).map(([href, label]) => (
          <a
            key={href}
            href={href}
            style={{ color: "inherit", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = isPaper ? "var(--ink-press)" : "#fff")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#explora"
        style={{
          padding: "9px 18px",
          fontSize: "var(--step-small)",
          fontWeight: 600,
          background: isPaper ? "var(--ink-press)" : "var(--ine-purple)",
          color: isPaper ? "var(--paper)" : "#ffffff",
          transition: "background 280ms ease, color 280ms ease",
          textDecoration: "none",
          fontFamily: isPaper ? "var(--font-serif)" : "'General Sans', system-ui, sans-serif",
          letterSpacing: isPaper ? "0.04em" : "0",
        }}
      >
        Explorar por edad
      </a>
    </nav>
  );
}
