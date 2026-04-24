import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function RSVP() {
  const reduce = useReducedMotion();
  const [state, setState] = useState({
    name: "",
    email: "",
    guests: 1,
    attending: "yes",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="rsvp"
      className="relative py-28 md:py-40 px-6 bg-navy text-ivory overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 120%, rgba(200,120,86,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% -10%, rgba(201,166,107,0.25) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(201,166,107,0.4) 0 1px, transparent 1px 28px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <SectionReveal className="text-center mb-12">
          <p className="uppercase tracking-[0.5em] text-xs text-gold font-sans mb-4">
            Kindly Reply
          </p>
          <h2 className="font-display text-4xl md:text-6xl italic">
            Will you <span className="gold-shimmer not-italic">join us?</span>
          </h2>
          <div className="ornament-divider mt-8 max-w-sm mx-auto text-gold">
            <span>❖</span>
          </div>
          <p className="mt-6 font-serif text-lg md:text-xl text-ivory/80 max-w-xl mx-auto">
            Please respond by 1 May 2026 so we can plan the long tables just
            right.
          </p>
        </SectionReveal>

        <SectionReveal
          variant="scale"
          className="relative rounded-sm border border-gold/30 bg-navy-deep/60 backdrop-blur-sm p-8 md:p-12 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
        >
          {sent ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={reduce ? false : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-6 gold-shimmer inline-block">❖</div>
              <h3 className="font-display italic text-3xl md:text-4xl mb-4">
                Thank you, {state.name || "friend"}
              </h3>
              <p className="font-serif text-lg text-ivory/80">
                Your reply means the world. We’ll be in touch with details very
                soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="Your name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block uppercase tracking-[0.3em] text-[10px] text-gold mb-2">
                    Attending
                  </label>
                  <div className="flex gap-2">
                    {[
                      { v: "yes", l: "Joyfully" },
                      { v: "no", l: "Regretfully" },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() =>
                          setState((s) => ({ ...s, attending: opt.v }))
                        }
                        className={`flex-1 py-3 px-4 font-serif italic text-base border transition-all duration-300 hover:scale-[1.02] ${
                          state.attending === opt.v
                            ? "border-gold bg-gold/15 text-ivory"
                            : "border-ivory/20 text-ivory/70 hover:border-gold/60"
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>

                <Field
                  label="Guests (including you)"
                  name="guests"
                  type="number"
                  min="1"
                  max="6"
                  value={state.guests}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block uppercase tracking-[0.3em] text-[10px] text-gold mb-2">
                  A note for us
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={state.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ivory/30 focus:border-gold outline-none py-2 font-serif italic text-lg text-ivory placeholder:text-ivory/40 transition-colors"
                  placeholder="Say hello, or tell us your song request…"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="card-shine group relative inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-[0.35em] text-xs font-sans transition-all duration-300 hover:scale-[1.03] hover:bg-gold hover:text-navy-deep"
                >
                  Send our reply
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block uppercase tracking-[0.3em] text-[10px] text-gold mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-ivory/30 focus:border-gold outline-none py-2 font-serif italic text-lg text-ivory placeholder:text-ivory/40 transition-colors"
      />
    </div>
  );
}
