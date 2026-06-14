import { Link } from "react-router-dom";
import { ArrowIcon, PlayIcon, StarIcon } from "./icons";

const heroStats = [
  { value: "6", label: "Pro Lanes" },
  { value: "24/7", label: "Open Play" },
  { value: "10k+", label: "Matches Played" },
];

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      {/* Background photo of the venue */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/homeHeroImage.png"
          alt="AstroWorld indoor cricket arena"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Cinematic dark overlays — keep text legible while letting the venue show through */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night-950/95 via-night-950/55 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-950 via-transparent to-night-950/30" />

      {/* Ambient green glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-pitch-500/20 blur-[140px] animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-pitch-700/20 blur-[120px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pitch-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pitch-400" />
            </span>
            <span className="text-xs font-medium text-white/70">
              Lanes available tonight — book in seconds
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Play cricket
            <br />
            <span className="relative inline-block bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
              under the lights
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            AstroWorld is Sri Lanka's premium indoor cricket arena — pro-grade
            turf, stadium lighting, and electric matchdays. Rain or shine, day or
            night, the game never stops.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/bookings"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Book Your Slot</span>
              <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/gallery"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pitch-400/20 text-pitch-300 transition-colors group-hover:bg-pitch-400/30">
                <PlayIcon className="h-3 w-3 translate-x-px" />
              </span>
              Take a Tour
            </Link>
          </div>

          {/* Rating + stats row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1 text-pitch-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-xs text-white/50">
                Rated <span className="font-semibold text-white/80">4.9/5</span>{" "}
                by 2,000+ players
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-pitch-400" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
