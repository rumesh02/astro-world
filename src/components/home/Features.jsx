import SectionHeading from "./SectionHeading";
import {
  TurfIcon,
  LightIcon,
  ShieldIcon,
  ClockIcon,
  CafeIcon,
  BoltIcon,
} from "./icons";

const features = [
  {
    icon: TurfIcon,
    title: "Pro-Grade Turf",
    desc: "International-spec synthetic pitches with true bounce and consistent pace, lane after lane.",
  },
  {
    icon: LightIcon,
    title: "Stadium Lighting",
    desc: "Glare-free LED floodlights replicate a real night match — perfect visibility, zero shadows.",
  },
  {
    icon: ClockIcon,
    title: "Open Round the Clock",
    desc: "Early mornings to late nights. Reserve a lane whenever the mood to play strikes.",
  },
  {
    icon: ShieldIcon,
    title: "Safe & Enclosed",
    desc: "Fully netted, climate-friendly indoor arena. Rain or shine, your game is always on.",
  },
  {
    icon: CafeIcon,
    title: "Lounge & Café",
    desc: "Refuel between overs with a courtside café, cold drinks, and a chill spectator lounge.",
  },
  {
    icon: BoltIcon,
    title: "Instant Booking",
    desc: "Live slot availability and a 30-second checkout. Lock your lane before someone else does.",
  },
];

function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why AstroWorld"
          title="Built for players who"
          highlight="take the game seriously"
          subtitle="Every detail of the arena is engineered for the purest indoor cricket experience — from the turf beneath your feet to the lights above your head."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pitch-400/30"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pitch-500/0 blur-3xl transition-all duration-500 group-hover:bg-pitch-500/20" />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-night-900 text-pitch-400 transition-all duration-500 group-hover:border-pitch-400/40 group-hover:text-pitch-300">
                <feature.icon className="h-7 w-7" />
              </span>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
