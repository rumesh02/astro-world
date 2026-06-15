import SectionHeading from "../home/SectionHeading";
import { TurfIcon, LightIcon, TrophyIcon } from "../home/icons";
import { FlagIcon as StartFlag, GrowthIcon } from "./icons";

const milestones = [
  {
    year: "2019",
    icon: StartFlag,
    title: "The first ball",
    desc: "A group of rained-out cricketers sign the lease on an empty warehouse in Moratuwa and start sketching lanes on the floor.",
  },
  {
    year: "2020",
    icon: TurfIcon,
    title: "Turf goes down",
    desc: "International-spec synthetic pitches are laid and the very first social matches light up the arena.",
  },
  {
    year: "2022",
    icon: LightIcon,
    title: "Lights up, 24/7",
    desc: "Glare-free stadium floodlights and round-the-clock weekend play turn AstroWorld into the city's after-dark home of cricket.",
  },
  {
    year: "2024",
    icon: TrophyIcon,
    title: "Leagues & finals",
    desc: "Corporate leagues, knockout tournaments and a dedicated scoreboard crew make matchdays feel like the real thing.",
  },
  {
    year: "Today",
    icon: GrowthIcon,
    title: "Still growing",
    desc: "Six pro lanes, thousands of players, and a community that keeps the arena buzzing from dawn till the small hours.",
  },
];

function Journey() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The journey"
          title="From an empty warehouse"
          highlight="to a full house"
          subtitle="Every great innings has a story. Here's how ours has played out so far."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-pitch-400/60 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-pitch-400/30 bg-night-900 text-pitch-400 shadow-lg shadow-pitch-950/40 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <m.icon className="h-6 w-6" />
                </div>

                {/* Card */}
                <div className={`w-full sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:pr-0" : "sm:pl-0"}`}>
                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-pitch-400/30">
                    <span className="inline-flex items-center rounded-full border border-pitch-400/20 bg-pitch-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pitch-300">
                      {m.year}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
