import { Link } from "react-router-dom";
import {
  ArrowIcon,
  TrophyIcon,
  CalendarIcon,
  CricketBallIcon,
} from "../home/icons";
import { FireIcon, UsersIcon } from "./icons";

const countdown = [
  { value: "12", label: "Days" },
  { value: "06", label: "Hrs" },
  { value: "44", label: "Min" },
  { value: "18", label: "Sec" },
];

function TournamentHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background photo + overlays */}
      <img
        src="/tournament/tournamentImg7.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950/80 via-night-950/85 to-night-950" />

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

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
            <FireIcon className="h-3.5 w-3.5" />
            Season 7 · Now Open
          </div>

          <h1 className="mx-auto mt-6 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:mx-0">
            Step onto the{" "}
            <span className="relative inline-block bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
              big stage
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60 lg:mx-0">
            Floodlit nights, roaring squads and silverware on the line. Sign up
            your team for AstroWorld's flagship indoor cricket tournaments —
            where weekend warriors become champions.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/bookings"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Register Your Team</span>
              <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#fixtures"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              View Fixtures
            </a>
          </div>

          {/* Mini trust row */}
          <div className="mt-9 flex items-center justify-center gap-6 text-sm text-white/50 lg:justify-start">
            <span className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4 text-pitch-400" />
              120+ teams
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span className="flex items-center gap-2">
              <TrophyIcon className="h-4 w-4 text-pitch-400" />
              ₨2M+ prize pool
            </span>
          </div>
        </div>

        {/* Right — featured tournament card with countdown */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-[2.5rem] bg-gradient-to-br from-pitch-400/40 via-pitch-500/20 to-transparent blur-3xl" />

          <div className="group relative rotate-1 transition-transform duration-500 hover:rotate-0">
            <div className="rounded-[2rem] bg-gradient-to-br from-pitch-400/40 via-white/10 to-pitch-700/30 p-[1.5px] shadow-2xl shadow-pitch-950/40">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-night-900/85 backdrop-blur-xl">
                {/* Card photo */}
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src="/tournament/tournamentImg2.jpg"
                    alt="AstroWorld Champions Cup action"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/30 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-pitch-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-night-950">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-night-950" />
                    Registrations live
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-pitch-300">
                    <CalendarIcon className="h-4 w-4" />
                    Fri 27 Jun · 6 PM
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Champions Cup Finals
                  </h3>
                  <p className="mt-1 text-sm text-white/55">
                    Featured headline event · Knockout · ₨750k pool
                  </p>

                  {/* Countdown */}
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {countdown.map((c) => (
                      <div
                        key={c.label}
                        className="rounded-xl border border-white/10 bg-white/[0.04] py-3 text-center backdrop-blur-md"
                      >
                        <span className="block text-2xl font-bold tabular-nums text-white">
                          {c.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-white/40">
                          {c.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-night-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <CricketBallIcon className="h-7 w-7 text-pitch-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Only
                </span>
                <span className="text-sm font-semibold text-white">
                  4 slots left
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TournamentHero;
