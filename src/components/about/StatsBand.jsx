const stats = [
  { value: "10k+", label: "Matches played" },
  { value: "6", label: "Pro lanes" },
  { value: "24/7", label: "Weekend play" },
  { value: "4.9", label: "Average rating" },
];

function StatsBand() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-pitch-500/[0.12] via-white/[0.04] to-transparent p-10 sm:p-14">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pitch-500/20 blur-[120px] animate-glow-pulse" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-pitch-700/20 blur-[120px]" />

          {/* Grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid gap-8 text-center sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 text-sm text-white/55">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
