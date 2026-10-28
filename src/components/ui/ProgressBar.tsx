"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Sleek, precise editorial red progress indicator */}
      <motion.div
        className="h-1 bg-[#A82B18] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
