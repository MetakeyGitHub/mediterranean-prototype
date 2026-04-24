import { useEffect, useState } from "react";

/**
 * Two-panel door intro. Panels slide apart on mount (CSS keyframes),
 * then unmount themselves so the page below is fully interactive.
 * Honors prefers-reduced-motion by skipping straight to "open".
 */
export default function Door() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setGone(true);
      return;
    }
    // Kick off the slide after mount
    const t1 = setTimeout(() => setOpen(true), 50);
    // Remove from DOM once the animation finishes
    const t2 = setTimeout(() => setGone(true), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  const panelBase =
    "absolute top-0 h-full w-1/2 bg-navy-deep flex items-center justify-center " +
    "transition-transform duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none select-none"
    >
      {/* Left panel */}
      <div
        className={`${panelBase} left-0 ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #132A43 0%, #1B3A5C 55%, #2D5278 100%)",
          boxShadow: "inset -1px 0 0 rgba(201,166,107,0.4)",
        }}
      >
        <DoorOrnament side="left" />
      </div>
      {/* Right panel */}
      <div
        className={`${panelBase} right-0 ${
          open ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(225deg, #132A43 0%, #1B3A5C 55%, #2D5278 100%)",
          boxShadow: "inset 1px 0 0 rgba(201,166,107,0.4)",
        }}
      >
        <DoorOrnament side="right" />
      </div>
      {/* Gold seam */}
      <div
        className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]
          bg-gradient-to-b from-transparent via-gold to-transparent
          transition-opacity duration-700 ${
            open ? "opacity-0" : "opacity-100 animate-float-slow"
          }`}
      />
    </div>
  );
}

function DoorOrnament({ side }) {
  return (
    <svg
      viewBox="0 0 80 400"
      className="h-[60%] w-auto opacity-80"
      style={{
        transform: side === "left" ? "translateX(40%)" : "translateX(-40%)",
      }}
    >
      <defs>
        <linearGradient id={`g-${side}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E0C594" />
          <stop offset="50%" stopColor="#C9A66B" />
          <stop offset="100%" stopColor="#A4823F" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#g-${side})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <line x1="40" y1="20" x2="40" y2="380" />
        <circle cx="40" cy="30" r="6" />
        <circle cx="40" cy="200" r="10" />
        <circle cx="40" cy="370" r="6" />
        <path d="M 40 60 Q 60 90 40 120 Q 20 150 40 180" />
        <path d="M 40 220 Q 60 250 40 280 Q 20 310 40 340" />
      </g>
    </svg>
  );
}
