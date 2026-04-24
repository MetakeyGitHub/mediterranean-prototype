import SectionReveal from "./SectionReveal";

export default function Closing() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-gradient-to-b from-ivory-warm to-ivory overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <SectionReveal className="max-w-2xl mx-auto text-center">
        <div className="mb-8 text-4xl gold-shimmer inline-block">❖</div>
        <h2 className="font-display italic text-4xl md:text-6xl text-navy leading-tight">
          Until the sea breeze,
        </h2>
        <p className="font-display italic text-4xl md:text-6xl text-navy mt-2">
          and the last light.
        </p>
        <div className="ornament-divider my-10 max-w-md mx-auto">
          <span>❖</span>
        </div>
        <p className="font-serif text-lg md:text-xl text-navy/75">
          With all our love,
        </p>
        <p className="font-display italic text-3xl md:text-4xl text-navy mt-4">
          Sofia <span className="gold-shimmer not-italic">&amp;</span> Alessandro
        </p>
        <p className="mt-12 uppercase tracking-[0.5em] text-xs text-gold-deep font-sans">
          Santorini · Summer 2026
        </p>
      </SectionReveal>

      <footer className="relative mt-24 text-center font-sans text-[11px] uppercase tracking-[0.3em] text-navy/40">
        Made with care · A prototype invitation
      </footer>
    </section>
  );
}
