import React from "react";

// Hand-drawn arrow doodle
export function DoodleArrow({
  className = "w-12 h-12 text-[#B91C1C]",
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "left" | "down" | "curved-down" | "curved-up";
}) {
  if (direction === "curved-down") {
    return (
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M10 15 C 45 10, 80 25, 75 65"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 52 L 75 66 L 85 48"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "down") {
    return (
      <svg
        viewBox="0 0 60 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M28 8 C 30 25, 27 50, 30 68"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M15 54 C 22 62, 28 69, 30 70 C 32 69, 38 61, 46 53"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "left") {
    return (
      <svg
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M72 20 C 50 18, 30 22, 12 21"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M24 10 L 10 21 L 25 32"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default right arrow
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 20 C 30 22, 50 18, 68 21"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M56 10 L 70 21 L 55 32"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn rough circle doodle to circle stats or text
export function DoodleCircle({
  children,
  className = "",
  color = "#B91C1C", // Red pen default
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -inset-2.5 sm:-inset-3.5 w-[calc(100%+1.25rem)] sm:w-[calc(100%+1.75rem)] h-[calc(100%+1.25rem)] sm:h-[calc(100%+1.75rem)] pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          d="M20,40 C 15,18 45,8 100,8 C 160,8 190,20 188,42 C 185,65 145,74 95,73 C 40,72 10,60 16,36 C 18,28 35,14 70,12"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Hand-drawn rough underline doodle
export function DoodleUnderline({
  color = "#1D4ED8", // Blue Bic pen default
  className = "w-full h-3",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 11 C 60 7, 140 14, 210 9 C 250 6, 280 12, 297 8"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 13 C 80 10, 160 15, 230 11 C 265 9, 285 14, 292 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

// Hand-drawn cross/X doodle (as if crossed out with a marker or red pen)
export function DoodleCross({
  className = "w-6 h-6 text-[#B91C1C]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8 C 14 16, 24 26, 32 32"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 9 C 24 16, 16 26, 8 33"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Scotch Tape realistic overlay strip
export function ScotchTape({
  className = "",
  tilt = "-2deg",
}: {
  className?: string;
  tilt?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${tilt})` }}
      className={`absolute w-24 h-7 bg-white/40 shadow-[0_1px_4px_rgba(0,0,0,0.15)] border-l-2 border-r-2 border-dashed border-neutral-300/60 pointer-events-none backdrop-blur-[0.5px] z-20 ${className}`}
    />
  );
}
