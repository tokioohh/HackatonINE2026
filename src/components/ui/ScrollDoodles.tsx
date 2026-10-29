"use client";

import { motion } from "framer-motion";

interface DoodleStampProps {
  src: string;
  alt: string;
  tilt?: number;
  className?: string;
  caption?: string;
  width?: number;
}

/**
 * DoodleStamp
 * Animación de garabato escolar dibujado al hacer scroll.
 * Se revela de izquierda a derecha con un efecto de plumón/lápiz
 * y un ligero rebote elástico sobre el papel.
 */
export function DoodleStamp({
  src,
  alt,
  tilt = 0,
  className = "",
  caption,
  width = 140,
}: DoodleStampProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
        rotate: tilt - 12,
        clipPath: "inset(0% 100% 0% 0%)",
      }}
      whileInView={{
        opacity: [0, 0.5, 0.9, 1],
        scale: [0.6, 1.12, 0.96, 1],
        rotate: [tilt - 12, tilt + 3, tilt],
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`pointer-events-none select-none z-10 ${className}`}
    >
      <div className="relative inline-block">
        <img
          src={src}
          alt={alt}
          style={{ width: `${width}px` }}
          className="h-auto object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.12)] contrast-125"
          loading="lazy"
        />
        {caption && (
          <span className="block mt-0.5 text-[9px] font-mono uppercase tracking-widest text-neutral-400 opacity-60 text-center">
            {caption}
          </span>
        )}
      </div>
    </motion.div>
  );
}

interface NotebookBgDoodleProps {
  src: string;
  alt: string;
  tilt?: number;
  className?: string;
  width?: number;
  opacity?: number;
  blur?: boolean;
}

/**
 * NotebookBgDoodle
 * Garabato de fondo tenue estilo boceto a lápiz / marca de agua de libreta escolar.
 * Se funde con la textura del papel mediante mix-blend-multiply,
 * opacidad reducida (15-25%) y desenfoque suave para simular grafito o tinta desvanecida.
 */
export function NotebookBgDoodle({
  src,
  alt,
  tilt = 0,
  className = "",
  width = 160,
  opacity = 0.18,
  blur = true,
}: NotebookBgDoodleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: tilt - 5 }}
      whileInView={{
        opacity,
        scale: 1,
        rotate: tilt,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`absolute pointer-events-none select-none z-0 mix-blend-multiply ${
        blur ? "blur-[0.5px]" : ""
      } ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: `${width}px` }}
        className="h-auto object-contain filter contrast-125"
        loading="lazy"
        aria-hidden="true"
      />
    </motion.div>
  );
}
