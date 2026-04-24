import * as Accordion from "@radix-ui/react-accordion";
import SectionReveal from "./SectionReveal";

const items = [
  {
    q: "When should I book travel?",
    a: "Santorini is busy in summer. We suggest booking flights and accommodation by early March 2026. We’ve arranged a block of rooms at two nearby hotels — details will follow after you RSVP.",
  },
  {
    q: "What is the dress code?",
    a: "Mediterranean formal. Think linen, long dresses, and open toes. Leave stilettos behind — the streets of Oia are cobbled, and the sunset is better barefoot.",
  },
  {
    q: "Can I bring a plus-one?",
    a: "Your invitation will note exactly how many seats are reserved for you. If you’d like to bring a guest not named on the card, please write to us — we’ll do our best.",
  },
  {
    q: "Will there be transportation?",
    a: "Yes. Shuttles from the recommended hotels to the ceremony and back after the reception are on us. Pick-up times will be sent a week before.",
  },
  {
    q: "Gifts?",
    a: "Your presence is the gift. If you insist, we’ve set up a small honeymoon fund — the link will appear on your printed invitation.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-28 md:py-40 px-6 bg-ivory overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 25%, #1B3A5C 0%, transparent 40%)",
        }}
      />

      <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
        <p className="uppercase tracking-[0.5em] text-xs text-gold-deep font-sans mb-4">
          Good to know
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-navy italic">
          Your <span className="gold-shimmer not-italic">questions</span>
        </h2>
        <div className="ornament-divider mt-8 max-w-sm mx-auto">
          <span>❖</span>
        </div>
      </SectionReveal>

      <SectionReveal className="max-w-3xl mx-auto">
        <Accordion.Root
          type="single"
          collapsible
          className="divide-y divide-gold/25 border-y border-gold/25"
        >
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="group"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 py-6 text-left font-display italic text-xl md:text-2xl text-navy transition-colors hover:text-terracotta-deep [&[data-state=open]]:text-terracotta-deep">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center text-gold text-lg transition-transform duration-500 group-data-[state=open]:rotate-45"
                  >
                    +
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-fade-up data-[state=closed]:animate-out data-[state=closed]:fade-out">
                <p className="pb-6 pr-10 font-serif text-lg text-navy/75 leading-relaxed">
                  {item.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </SectionReveal>
    </section>
  );
}
