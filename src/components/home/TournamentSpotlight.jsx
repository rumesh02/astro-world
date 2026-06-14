import { Link } from "react-router-dom";
import { TrophyIcon, ArrowIcon } from "./icons";

const perks = [
  "Cash prize pools & trophies",
  "Live scoring & leaderboards",
  "Corporate & open leagues",
  "Pro umpires every match",
];

function TournamentSpotlight() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-night-900">
          {/* Background photo + overlays */}
          <img
            src="/homeHeroImage.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/90 to-night-950/40" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-pitch-500/20 blur-[120px]" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
                <TrophyIcon className="h-4 w-4" />
                Tournaments
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Bring your squad.{" "}
                <span className="bg-gradient-to-r from-pitch-300 to-pitch-500 bg-clip-text text-transparent">
                  Lift the trophy.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                Compete in season-long leagues and weekend knockouts. Real
                stakes, real glory — under the AstroWorld lights.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pitch-400/15 text-pitch-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/tournaments"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-7 py-3.5 text-sm font-semibold text-night-950 shadow-lg shadow-pitch-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
                >
                  View Tournaments
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  Register a Team
                </Link>
              </div>
            </div>

            {/* Stat card */}
            <div className="lg:justify-self-end">
              <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                <StatTile big value="12" label="Leagues / year" />
                <StatTile value="₨2M+" label="In prizes" />
                <StatTile value="120+" label="Teams" />
                <StatTile big value="98%" label="Return to play" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ value, label, big }) {
  return (
    <div
      className={`flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md ${
        big ? "row-span-1" : ""
      }`}
    >
      <span className="text-3xl font-bold text-white">{value}</span>
      <span className="mt-1 text-xs text-white/50">{label}</span>
    </div>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export default TournamentSpotlight;
