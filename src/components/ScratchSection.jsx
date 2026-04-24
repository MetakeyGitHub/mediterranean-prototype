import SectionReveal from "./SectionReveal";
import ScratchCard from "./ScratchCard";

const cards = [
  {
    title: "Ceremony at Oia",
    detail:
      "4 June 2026 · 18:30 · a cliffside chapel overlooking the caldera. Please arrive by 18:00.",
  },
  {
    title: "Dinner under the vines",
    detail:
      "Long tables, local wine, and our favorite dishes from the village where it all began.",
  },
  {
    title: "A small surprise",
    detail:
      "After dessert, look west. We’ve arranged something you won’t want to miss.",
  },
];

export default function ScratchSection() {
  return (
    <section
      id="details"
      className="relative py-28 md:py-40 px-6 bg-gradient-to-b from-ivory to-ivory-warm overflow-hidden"
    >
      <SectionReveal className="max-w-4xl mx-auto text-center mb-16">
        <p className="uppercase tracking-[0.5em] text-xs text-gold-deep font-sans mb-4">
          The Details
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-navy italic">
          <span className="gold-shimmer not-italic">Scratch</span> the foil
        </h2>
        <p className="mt-6 font-serif text-lg md:text-xl text-navy/70 max-w-2xl mx-auto">
          Little moments we’ve been quietly planning. Drag across each card to
          uncover.
        </p>
        <div className="ornament-divider mt-8 max-w-sm mx-auto">
          <span>❖</span>
        </div>
      </SectionReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <SectionReveal key={c.title} variant="scale" delay={i * 0.12}>
            <ScratchCard title={c.title} detail={c.detail} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
