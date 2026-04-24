import { useEffect, useRef, useState } from "react";

/**
 * HTML Canvas 2D "scratch to reveal" card.
 * Uses globalCompositeOperation = "destination-out" to erase the foil.
 * Falls back gracefully for prefers-reduced-motion (no foil drawn).
 */
export default function ScratchCard({
  title,
  detail,
  foilLabel = "Scratch to reveal",
  className = "",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [reduce, setReduce] = useState(false);
  const drawingRef = useRef(false);
  const clearedRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e) => setReduce(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const dpr = window.devicePixelRatio || 1;

    const paint = () => {
      const { width, height } = wrap.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Gold foil gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#A4823F");
      grad.addColorStop(0.35, "#C9A66B");
      grad.addColorStop(0.6, "#EFD69A");
      grad.addColorStop(1, "#A4823F");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle speckle / texture
      ctx.globalAlpha = 0.12;
      for (let i = 0; i < Math.floor((width * height) / 180); i++) {
        ctx.fillStyle = Math.random() > 0.5 ? "#fff3d0" : "#7d5f28";
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
      }
      ctx.globalAlpha = 1;

      // Label
      ctx.fillStyle = "#132A43";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `italic 600 ${Math.max(
        14,
        Math.min(22, width * 0.045)
      )}px "Playfair Display", "Cormorant Garamond", serif`;
      ctx.fillText(foilLabel, width / 2, height / 2 - 8);

      ctx.font = `500 10px "Inter", sans-serif`;
      ctx.fillStyle = "rgba(19,42,67,0.7)";
      ctx.fillText("✦   ✦   ✦", width / 2, height / 2 + 14);
    };

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [reduce, foilLabel]);

  const scratchAt = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    clearedRef.current += 1;

    // Cheap progress check
    if (clearedRef.current % 8 === 0) {
      try {
        const dpr = window.devicePixelRatio || 1;
        const step = 24 * dpr;
        const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let cleared = 0;
        let total = 0;
        for (let py = 0; py < canvas.height; py += step) {
          for (let px = 0; px < canvas.width; px += step) {
            const idx = (py * canvas.width + px) * 4 + 3;
            total += 1;
            if (img.data[idx] < 32) cleared += 1;
          }
        }
        if (cleared / total > 0.45) setRevealed(true);
      } catch {
        /* no-op */
      }
    }
  };

  const toLocal = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handleDown = (e) => {
    if (revealed || reduce) return;
    drawingRef.current = true;
    const { x, y } = toLocal(e);
    scratchAt(x, y);
  };
  const handleMove = (e) => {
    if (!drawingRef.current || revealed || reduce) return;
    e.preventDefault?.();
    const { x, y } = toLocal(e);
    scratchAt(x, y);
  };
  const handleUp = () => {
    drawingRef.current = false;
  };

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-[4/3] rounded-sm overflow-hidden border border-gold/40 bg-white/80 shadow-[0_20px_40px_-30px_rgba(27,58,92,0.45)] ${className}`}
    >
      {/* Revealed content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center text-center">
        <p className="uppercase tracking-[0.35em] text-[10px] text-gold-deep font-sans mb-3">
          A little secret
        </p>
        <h3 className="font-display italic text-3xl md:text-4xl text-navy leading-tight mb-3">
          {title}
        </h3>
        <p className="font-serif text-base md:text-lg text-navy/75 max-w-sm">
          {detail}
        </p>
      </div>

      {/* Foil overlay */}
      {!reduce && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 touch-none cursor-crosshair transition-opacity duration-500 ${
            revealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}
          role="button"
          aria-label={`Scratch card: ${title}. ${foilLabel}.`}
        />
      )}
    </div>
  );
}
