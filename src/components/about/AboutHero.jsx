import { Link } from "react-router-dom";
import { ArrowIcon, CricketBallIcon, StarIcon } from "../home/icons";
import { PinIcon } from "./icons";

const stats = [
  { value: "2019", label: "Established" },
  { value: "6", label: "Pro Lanes" },
  { value: "2k+", label: "Players" },
];

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient green glow accents */}
      <div className="pointer-events-none absolute -left-40 -top-24 -z-10 h-96 w-96 rounded-full bg-pitch-500/20 blur-[150px] animate-glow-pulse" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-pitch-700/20 blur-[140px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
            <span className="h-1.5 w-1.5 rounded-full bg-pitch-400" />
            Our Story
          </div>

          <h1 className="mx-auto mt-6 max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:mx-0">
            Where the game{" "}
            <span className="relative inline-block bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
              never stops
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60 lg:mx-0">
            AstroWorld began with a simple idea — that rain, darkness, or a
            packed schedule should never come between a player and the pitch. We
            built Sri Lanka's premier indoor cricket arena so the game can go on,
            any hour, any weather.
          </p>

          {/* Stat row */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-xs text-white/50">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex justify-center lg:justify-start">
            <Link
              to="/bookings"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Come Play With Us</span>
              <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Right — the brand mark, presented as a glowing tilted plate */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Glow halo behind the plate */}
          <div className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-[2.5rem] bg-gradient-to-br from-pitch-400/40 via-pitch-500/20 to-transparent blur-3xl" />

          {/* Slowly rotating dashed ring accent */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full border border-dashed border-pitch-400/20 [animation:gradient-x_20s_linear_infinite]" />

          <div className="group relative rotate-2 transition-transform duration-500 hover:rotate-0">
            {/* Gradient frame */}
            <div className="rounded-[2rem] bg-gradient-to-br from-pitch-400/40 via-white/10 to-pitch-700/30 p-[1.5px] shadow-2xl shadow-pitch-950/40">
              <div className="rounded-[2rem] border border-white/10 bg-night-900/80 p-4 backdrop-blur-xl sm:p-6">
                {/* The logo lives on a clean white plate so its white background
                    reads as an intentional brand panel rather than a stray edge. */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-inner sm:p-8">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pitch-400/10 blur-2xl" />
                  <img
                    src="/aboutUsImage.png"
                    alt="AstroWorld indoor cricket arena logo"
                    className="relative mx-auto w-full max-w-sm object-contain"
                  />
                </div>

                {/* Caption strip under the plate */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-sm font-semibold text-white">
                    AstroWorld Arena
                  </span>
                  <span className="flex items-center gap-1 text-pitch-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge — location */}
            <div className="absolute -left-4 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-night-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8 animate-float">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pitch-400/15 text-pitch-300">
                <PinIcon className="h-5 w-5" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Find us in
                </span>
                <span className="text-sm font-semibold text-white">
                  Moratuwa, LK
                </span>
              </div>
            </div>

            {/* Floating badge — cricket ball */}
            <div
              className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-night-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <CricketBallIcon className="h-7 w-7 text-pitch-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Open
                </span>
                <span className="text-sm font-semibold text-white">
                  Rain or shine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
