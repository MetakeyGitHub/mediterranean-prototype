import { motion, useReducedMotion } from "framer-motion";

/* ----- SVG pieces ----- */
function GreekColumn({ className = "" }) {
  return (
    <svg viewBox="0 0 120 420" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="colShade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#F3EADB" />
          <stop offset="50%" stopColor="#FAF6EF" />
          <stop offset="100%" stopColor="#E8DCC4" />
        </linearGradient>
      </defs>
      <g>
        {/* Capital */}
        <rect x="10" y="18" width="100" height="14" fill="url(#colShade)" />
        <rect x="16" y="32" width="88" height="10" fill="#E8DCC4" />
        <path
          d="M 18 42 Q 60 60 102 42 L 102 58 Q 60 72 18 58 Z"
          fill="url(#colShade)"
        />
        {/* Shaft with flutes */}
        <rect x="28" y="58" width="64" height="300" fill="url(#colShade)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1={32 + i * 11}
            x2={32 + i * 11}
            y1="62"
            y2="356"
            stroke="#C9A66B"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        ))}
        {/* Base */}
        <rect x="16" y="358" width="88" height="14" fill="#E8DCC4" />
        <rect x="10" y="372" width="100" height="16" fill="url(#colShade)" />
        <rect x="6" y="388" width="108" height="12" fill="#E8DCC4" />
      </g>
    </svg>
  );
}

function OliveWreath({ className = "" }) {
  // Simple wreath: two curved branches with elliptical leaves
  const leaves = 14;
  const arr = Array.from({ length: leaves });
  return (
    <svg viewBox="0 0 400 180" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="leafG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8CA47D" />
          <stop offset="100%" stopColor="#5D7A54" />
        </linearGradient>
      </defs>
      {/* Left branch */}
      <g>
        {arr.map((_, i) => {
          const t = i / (leaves - 1);
          const x = 200 - (1 - t) * 170;
          const y = 90 + Math.sin(t * Math.PI) * -60;
          const rot = -70 + t * 40;
          return (
            <ellipse
              key={`l-${i}`}
              cx={x}
              cy={y}
              rx="14"
              ry="5"
              fill="url(#leafG)"
              transform={`rotate(${rot} ${x} ${y})`}
            />
          );
        })}
      </g>
      {/* Right branch (mirrored) */}
      <g>
        {arr.map((_, i) => {
          const t = i / (leaves - 1);
          const x = 200 + (1 - t) * 170;
          const y = 90 + Math.sin(t * Math.PI) * -60;
          const rot = 70 - t * 40;
          return (
            <ellipse
              key={`r-${i}`}
              cx={x}
              cy={y}
              rx="14"
              ry="5"
              fill="url(#leafG)"
              transform={`rotate(${rot} ${x} ${y})`}
            />
          );
        })}
      </g>
      {/* Gold ribbon at top */}
      <path
        d="M 185 38 Q 200 28 215 38"
        stroke="#C9A66B"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="200" cy="38" r="3" fill="#C9A66B" />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ivory">
      {/* Subtle radial wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(201,166,107,0.12) 0%, transparent 55%), linear-gradient(180deg, #FAF6EF 0%, #F3EADB 100%)",
        }}
      />

      {/* Columns flanking */}
      <GreekColumn className="absolute left-4 md:left-12 bottom-0 h-[78%] w-auto opacity-90 animate-float-slow" />
      <GreekColumn className="absolute right-4 md:right-12 bottom-0 h-[78%] w-auto opacity-90 animate-float-slow [animation-delay:1.5s]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -14 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 w-[clamp(220px,40vw,360px)]"
        >
          <OliveWreath className="w-full" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.6 }}
          className="uppercase tracking-[0.5em] text-xs md:text-sm text-gold-deep font-sans"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.8 }}
          className="font-display italic text-5xl md:text-7xl lg:text-8xl mt-6 mb-4 text-navy leading-[1.05]"
        >
          Sofia <span className="gold-shimmer not-italic">&amp;</span> Alessandro
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? false : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="ornament-divider my-6 max-w-md mx-auto"
        >
          <span>❖</span>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.3 }}
          className="font-serif text-xl md:text-2xl text-navy/80 italic"
        >
          invite you to celebrate our wedding
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.5 }}
          className="mt-8 font-sans uppercase tracking-[0.35em] text-sm md:text-base text-navy"
        >
          Santorini &middot; Summer 2026
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? false : { opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="mt-16"
        >
          <div className="inline-flex flex-col items-center gap-2 text-gold-deep">
            <span className="text-[10px] uppercase tracking-[0.4em]">
              Scroll
            </span>
            <span className="block w-px h-10 bg-gradient-to-b from-gold to-transparent animate-float-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
