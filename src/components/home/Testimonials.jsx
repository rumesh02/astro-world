import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";

const testimonials = [
  {
    quote:
      "Best indoor pitch in the country, hands down. The bounce is true and the lighting makes night games feel like the real deal.",
    name: "Dinesh Perera",
    role: "Club Captain, Colombo Strikers",
    initials: "DP",
  },
  {
    quote:
      "We host our office league here every season. Booking is effortless and the lounge keeps everyone hanging around long after stumps.",
    name: "Aisha Rahman",
    role: "Events Lead, NexaSoft",
    initials: "AR",
  },
  {
    quote:
      "Brought my junior squad for practice — clean, safe, and the staff genuinely care. The kids never want to leave.",
    name: "Suresh Fernando",
    role: "Youth Coach",
    initials: "SF",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Player Stories"
          title="Loved by teams"
          highlight="all over the island"
          subtitle="From weekend warriors to corporate leagues, AstroWorld is where players keep coming back."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pitch-400/30"
            >
              <span className="font-serif text-6xl leading-none text-pitch-400/30">
                &ldquo;
              </span>

              <div className="-mt-4 flex items-center gap-1 text-pitch-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pitch-400 to-pitch-700 text-sm font-bold text-night-950">
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="text-xs text-white/50">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
