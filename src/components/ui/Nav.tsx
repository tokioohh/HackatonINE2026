"use client";

import { useState, useEffect } from "react";
import { ScotchTape } from "@/components/ui/DoodleStickers";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Acto I · 2009", href: "#acto-1" },
  { label: "Votos Perdidos", href: "#votos-perdidos" },
  { label: "Línea de Tiempo", href: "#timeline" },
  { label: "Acto II · 2012–18", href: "#acto-2" },
  { label: "Mapa Nacional", href: "#mapa" },
  { label: "Acto III · 2024", href: "#acto-3" },
  { label: "Explora", href: "#explora" },
  { label: "Cierre", href: "#conciencia" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Find current section
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i] as HTMLElement | null;
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between pointer-events-auto">
        {/* Logo / Badge estilo etiqueta pegada */}
        <a
          href="#hero"
          className="relative bg-white text-[#111110] px-3.5 py-1.5 border border-neutral-300 shadow-md rotate-[-1deg] hover:rotate-0 transition-transform font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 select-none"
        >
          <ScotchTape className="-top-2.5 left-2 w-12 h-3.5" tilt="-3deg" />
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span>EL VOTO JOVEN</span>
          <span className="hidden sm:inline text-[#6B7280] font-normal text-[10px]">
            // INE 2026
          </span>
        </a>

        {/* Links estilo pestañas de libreta */}
        <div className="hidden lg:flex items-center gap-1.5 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1.5 border border-neutral-300 shadow-md rounded-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 text-[11px] font-mono transition-all uppercase rounded-xs ${
                  isActive
                    ? "bg-[#FFE66D] text-[#141312] font-black shadow-xs -translate-y-0.5 border border-neutral-400"
                    : "text-[#4B5563] hover:text-[#141312] hover:bg-black/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Indicador móvil */}
        <div className="lg:hidden bg-white/90 backdrop-blur-xs border border-neutral-300 px-3 py-1 text-[10px] font-mono font-bold uppercase shadow-sm">
          <span>HACKATÓN INE EJE 3</span>
        </div>
      </div>
    </nav>
  );
}
