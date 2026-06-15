import { Link } from "react-router-dom";
import { ArrowIcon } from "../home/icons";

function TournamentCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* Background photo */}
          <img
            src="/tournament/tournamentImg3.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-night-950/90 via-night-950/85 to-pitch-950/80" />

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-pitch-500/25 blur-[130px] animate-glow-pulse" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-pitch-700/25 blur-[130px]" />

          <span className="inline-flex items-center gap-2 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-400" />
            Season 7 entries close 24 Jun
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            The trophy won't{" "}
            <span className="bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-clip-text text-transparent">
              lift itself
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Gather your team, claim your slot, and write your name into the
            AstroWorld record books. The arena is waiting — and so is the
            silverware.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/bookings"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Register Your Team</span>
              <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TournamentCTA;
