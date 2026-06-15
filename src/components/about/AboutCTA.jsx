import { Link } from "react-router-dom";
import { ArrowIcon } from "../home/icons";

function AboutCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-night-900 to-night-950 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-pitch-500/25 blur-[130px] animate-glow-pulse" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-pitch-700/25 blur-[130px]" />

          {/* Grid texture */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Your spot at the crease is{" "}
            <span className="bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-clip-text text-transparent">
              waiting
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
            Come see what we've built. Book a lane, rally your team, and find out
            why thousands of players call AstroWorld home.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/bookings"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Book a Lane</span>
              <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Talk to the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
