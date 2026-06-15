import SectionHeading from "../home/SectionHeading";
import { QuoteIcon } from "./icons";

function OurStory() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From the ground up"
          title="Built by players,"
          highlight="for players"
          subtitle="What started as a weekend dream between cricket-mad friends grew into the arena thousands now call their second home."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative */}
          <div className="space-y-6 text-base leading-relaxed text-white/65 lg:col-span-7">
            <p>
              We were the team that kept getting rained out. Tournaments
              cancelled, practice sessions cut short, evening games swallowed by
              the dark. So in 2019 we set out to build the one thing Sri Lanka's
              cricket community was missing — a world-class arena where the
              weather and the clock simply don't get a vote.
            </p>
            <p>
              Every inch of AstroWorld is engineered around the feel of the real
              game: international-spec turf with true bounce, glare-free stadium
              floodlights, and a fully enclosed space that turns a drizzly
              Tuesday night into a floodlit final. No compromises, no excuses —
              just pure, uninterrupted cricket.
            </p>
            <p>
              Today, AstroWorld is more than a venue. It's where office leagues
              settle scores, where kids take their first proper swing, and where
              friendships are forged one over at a time. The pitch is always
              ready. The lights are always on. The game never stops.
            </p>
          </div>

          {/* Pull quote card */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pitch-500/15 blur-3xl" />
              <QuoteIcon className="h-10 w-10 text-pitch-400/60" />
              <p className="relative mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">
                "We didn't want to build a cricket cage. We wanted to build the
                place we always wished we could play in."
              </p>
              <div className="relative mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pitch-400 to-pitch-600 text-lg font-bold text-night-950">
                  AW
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    The AstroWorld Founders
                  </span>
                  <span className="text-xs text-white/50">
                    Moratuwa, Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
