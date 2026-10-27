"use client";

import { motion } from "framer-motion";

interface BigStatProps {
  figure: string;
  unit?: string;
  claim: string;
  caption: string;
  source: string;
  background?: string;
  figureColor?: string;
}

export function BigStat({ figure, unit, claim, caption, source, background, figureColor }: BigStatProps) {
  return (
    <section
      className="min-h-[90svh] flex flex-col justify-between relative"
      style={{
        padding: "var(--margin)",
        background: background || "var(--bg)",
      }}
    >
      <motion.p
        className="font-bold tracking-tight"
        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.75rem)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {claim}
      </motion.p>

      <div className="mt-auto">
        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-bold leading-[0.8] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(11rem, 23vw, 24rem)",
              color: figureColor || "var(--ink)",
            }}
          >
            {figure}
          </span>
          {unit && (
            <span
              className="font-bold leading-none mt-[0.05em]"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 8rem)",
                color: figureColor || "var(--ink)",
              }}
            >
              {unit}
            </span>
          )}
        </motion.div>

        <motion.p
          className="max-w-[32ch] mt-4 leading-[1.5]"
          style={{ fontSize: "var(--step-body)", color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {caption}
        </motion.p>
      </div>

      <p className="self-end mt-auto" style={{ fontSize: "13px", color: "var(--muted)" }}>
        {source}
      </p>
    </section>
  );
}
