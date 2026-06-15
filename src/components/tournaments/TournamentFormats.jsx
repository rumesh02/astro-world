import SectionHeading from "../home/SectionHeading";
import { BoltIcon, TrophyIcon, ClockIcon } from "../home/icons";
import { MedalIcon, FireIcon } from "./icons";

const formats = [
  {
    icon: FireIcon,
    name: "Open Smash League",
    tag: "Most popular",
    accent: true,
    overs: "8 overs · 6-a-side",
    schedule: "Season · 8 weeks",
    prize: "₨500,000",
    desc: "Our flagship social league. Eight weeks of round-robin fixtures, a playoff weekend and bragging rights that last all year.",
  },
  {
    icon: TrophyIcon,
    name: "Corporate Cup",
    tag: "Team building",
    overs: "6 overs · 8-a-side",
    schedule: "One-day event",
    prize: "₨300,000",
    desc: "Office rivalries settled under the lights. A fast one-day knockout built for company squads, complete with a catered pavilion.",
  },
  {
    icon: BoltIcon,
    name: "Night Knockout",
    tag: "Adrenaline",
    overs: "5 overs · 6-a-side",
    schedule: "Every Friday · 9 PM",
    prize: "₨150,000",
    desc: "Win or go home. Lightning-fast Friday-night brackets where every ball counts and the trophy is decided before midnight.",
  },
  {
    icon: MedalIcon,
    name: "Ladies Premier",
    tag: "Women only",
    overs: "8 overs · 6-a-side",
    schedule: "Season · 6 weeks",
    prize: "₨350,000",
    desc: "A dedicated league championing the women's game — competitive, welcoming, and growing fast across the city.",
  },
];

function TournamentFormats() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pick your format"
          title="Four ways to"
          highlight="chase glory"
          subtitle="Whatever your squad's style — slow-burn league or all-out Friday sprint — there's a competition with your name on it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f) => (
            <article
              key={f.name}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                f.accent
                  ? "border-pitch-400/30 bg-gradient-to-b from-pitch-500/[0.12] to-white/[0.02] hover:border-pitch-400/50"
                  : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-pitch-400/30"
              }`}
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pitch-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pitch-400/30 bg-pitch-400/10 text-pitch-300">
                  <f.icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/55">
                  {f.tag}
                </span>
              </div>

              <h3 className="relative mt-5 text-xl font-bold text-white">
                {f.name}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/55">
                {f.desc}
              </p>

              <dl className="relative mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
                <div className="flex items-center gap-2 text-white/60">
                  <BoltIcon className="h-4 w-4 text-pitch-400" />
                  {f.overs}
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <ClockIcon className="h-4 w-4 text-pitch-400" />
                  {f.schedule}
                </div>
              </dl>

              <div className="relative mt-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    Prize pool
                  </span>
                  <p className="bg-gradient-to-r from-pitch-300 to-pitch-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    {f.prize}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TournamentFormats;
