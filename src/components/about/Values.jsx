import SectionHeading from "../home/SectionHeading";
import { HeartIcon, TargetIcon, UsersIcon, SparkleIcon } from "./icons";

const values = [
  {
    icon: TargetIcon,
    title: "The Game, Done Right",
    desc: "Pro-grade turf, true bounce, real match lighting. We obsess over the details so your game feels the way it should.",
  },
  {
    icon: HeartIcon,
    title: "Love for the Sport",
    desc: "We're players first. Every decision we make starts with one question — would we want to play here ourselves?",
  },
  {
    icon: UsersIcon,
    title: "A Community, Not a Crowd",
    desc: "From first-timers to league regulars, everyone gets a warm welcome and a fair go at the crease.",
  },
  {
    icon: SparkleIcon,
    title: "Always Levelling Up",
    desc: "New lanes, better gear, smarter booking. We keep raising the bar so the arena only ever gets better.",
  },
];

function Values() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we stand for"
          title="The values that"
          highlight="guide every over"
          subtitle="The arena is the easy part. These are the things that make AstroWorld feel like home."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pitch-400/30"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pitch-500/0 blur-3xl transition-all duration-500 group-hover:bg-pitch-500/20" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-night-900 text-pitch-400 transition-all duration-500 group-hover:border-pitch-400/40 group-hover:text-pitch-300">
                <value.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">
                {value.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
