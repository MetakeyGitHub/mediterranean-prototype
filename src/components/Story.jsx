import SectionReveal from "./SectionReveal";

const moments = [
  {
    year: "2019",
    title: "A Chance Encounter",
    body: "A rainy afternoon in a Roman café. Two strangers share the last table — and an espresso that lasts three hours.",
  },
  {
    year: "2021",
    title: "Atlantic Crossings",
    body: "Letters across oceans become weekly calls, then monthly flights. A passport stamped with small courageous yeses.",
  },
  {
    year: "2023",
    title: "The Proposal",
    body: "Sunset on a Cycladic cliff, a ring from Alessandro’s grandmother, and a single word that changed everything.",
  },
  {
    year: "2026",
    title: "Our Wedding",
    body: "A summer gathering on the island that first held our future. We can’t imagine it without you.",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-28 md:py-40 px-6 bg-ivory overflow-hidden"
    >
      {/* Ambient ornamental background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C9A66B 0%, transparent 40%), radial-gradient(circle at 80% 70%, #C87856 0%, transparent 45%)",
        }}
      />

      <SectionReveal className="max-w-4xl mx-auto text-center mb-20 relative">
        <p className="uppercase tracking-[0.5em] text-xs text-gold-deep font-sans mb-4">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-navy italic">
          How we <span className="gold-shimmer not-italic">arrived</span> here
        </h2>
        <div className="ornament-divider mt-8 max-w-sm mx-auto">
          <span>❖</span>
        </div>
      </SectionReveal>

      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div
          aria-hidden="true"
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2"
        />

        <ol className="space-y-16 md:space-y-24">
          {moments.map((m, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <li
                key={m.year}
                className={`relative grid grid-cols-[auto_1fr] md:grid-cols-2 gap-6 md:gap-12 items-center ${
                  side === "right" ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Year medallion */}
                <SectionReveal
                  variant={side === "left" ? "left" : "right"}
                  className={`${
                    side === "right"
                      ? "md:text-left md:pl-16"
                      : "md:text-right md:pr-16"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-gold/60 bg-ivory shadow-[0_0_0_6px_rgba(201,166,107,0.12)] font-display text-2xl md:text-3xl text-navy">
                    {m.year}
                  </div>
                </SectionReveal>

                {/* Content card */}
                <SectionReveal
                  variant={side === "left" ? "right" : "left"}
                  className={`card-shine group rounded-sm border border-gold/30 bg-white/70 backdrop-blur-[2px] p-6 md:p-8 shadow-[0_20px_40px_-30px_rgba(27,58,92,0.4)] transition-transform duration-500 hover:scale-[1.02] ${
                    side === "right" ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <h3 className="font-display text-2xl md:text-3xl text-navy italic mb-3">
                    {m.title}
                  </h3>
                  <p className="font-serif text-base md:text-lg text-navy/75 leading-relaxed">
                    {m.body}
                  </p>
                </SectionReveal>

                {/* Dot on the center line */}
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,166,107,0.18)]"
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
