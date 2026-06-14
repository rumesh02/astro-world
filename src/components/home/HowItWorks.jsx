import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { CalendarIcon, ClockIcon, CricketBallIcon, ArrowIcon } from "./icons";

const steps = [
  {
    icon: CalendarIcon,
    step: "01",
    title: "Pick a Date",
    desc: "Choose the day you want to play from our live booking calendar.",
  },
  {
    icon: ClockIcon,
    step: "02",
    title: "Grab a Slot",
    desc: "See real-time lane availability and lock the time that suits your crew.",
  },
  {
    icon: CricketBallIcon,
    step: "03",
    title: "Show Up & Play",
    desc: "Bring your team — we handle the rest. Bats, balls and gear on request.",
  },
];

function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-pitch-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From couch to crease in"
          highlight="three simple steps"
          subtitle="No phone calls, no waiting. Booking your lane at AstroWorld takes less time than padding up."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-pitch-400/30 to-transparent md:block" />

          {steps.map((s) => (
            <div
              key={s.step}
              className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center transition-all duration-500 hover:border-pitch-400/30"
            >
              <span className="relative flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-pitch-500/10 blur-xl transition-all duration-500 group-hover:bg-pitch-500/25" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-night-900 text-pitch-400 transition-colors duration-500 group-hover:text-pitch-300">
                  <s.icon className="h-9 w-9" />
                </span>
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pitch-400 to-pitch-600 text-xs font-bold text-night-950">
                  {s.step}
                </span>
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/bookings"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
          >
            Start Booking
            <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
