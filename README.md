# Mediterranean Prototype

A cinematic single-page wedding invitation prototype — Sofia & Alessandro, Santorini, Summer 2026. Built with React + Vite, Tailwind, Framer Motion, and Radix UI.

## Signature effects

- **Door-opens hero intro** — two CSS-animated panels slide apart on load (`src/components/Door.jsx`).
- **Scroll-triggered reveals** — Framer Motion `whileInView` with fade-up / slide-in / scale-in variants (`src/components/SectionReveal.jsx`).
- **Scratch-to-reveal cards** — HTML Canvas 2D with `globalCompositeOperation = "destination-out"` (`src/components/ScratchCard.jsx`).
- **Custom keyframes** — ambient shimmer, float, shine-sweep, door slide, fade-up, scale-in (see `tailwind.config.js` and `src/index.css`).
- **Radix accordion FAQ** with shadcn-style custom triggers.
- **Hover microinteractions** — scale and shine-sweep on cards (`.card-shine`).
- **`prefers-reduced-motion` honored** globally via a CSS override and per-component `useReducedMotion()` / `matchMedia` checks.

## Sections (top → bottom)

1. Door intro (overlay)
2. Ornamental hero — Greek columns + olive wreath (SVG)
3. Our story — timeline
4. The details — scratch-to-reveal cards
5. RSVP form
6. FAQ accordion
7. Closing

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Palette

- Navy `#1B3A5C`
- Terracotta `#C87856`
- Warm gold `#C9A66B`
- Ivory `#FAF6EF`

## Fonts

Cormorant Garamond + Playfair Display + Inter (Google Fonts).
