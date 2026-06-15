import { Link } from "react-router-dom";
import SectionHeading from "../home/SectionHeading";
import { ArrowIcon } from "../home/icons";
import { UsersIcon } from "./icons";

const fixtures = [
  {
    day: "27",
    month: "Jun",
    name: "Champions Cup Finals",
    format: "Knockout · 8 overs",
    prize: "₨750k",
    slots: "4 slots left",
    status: "filling",
  },
  {
    day: "05",
    month: "Jul",
    name: "Open Smash League — S7",
    format: "Season · 8 weeks",
    prize: "₨500k",
    slots: "9 slots left",
    status: "open",
  },
  {
    day: "12",
    month: "Jul",
    name: "Corporate Cup",
    format: "One-day · 6 overs",
    prize: "₨300k",
    slots: "12 slots left",
    status: "open",
  },
  {
    day: "18",
    month: "Jul",
    name: "Ladies Premier League",
    format: "Season · 6 weeks",
    prize: "₨350k",
    slots: "Waitlist only",
    status: "full",
  },
  {
    day: "25",
    month: "Jul",
    name: "Night Knockout #14",
    format: "Friday night · 5 overs",
    prize: "₨150k",
    slots: "6 slots left",
    status: "open",
  },
];

const statusStyles = {
  open: "border-pitch-400/30 bg-pitch-400/10 text-pitch-300",
  filling: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  full: "border-white/15 bg-white/5 text-white/45",
};

function UpcomingFixtures() {
  return (
    <section id="fixtures" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fixture list"
          title="What's coming"
          highlight="up next"
          subtitle="Lock in your team early — popular brackets fill within days of opening."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01]">
          <ul className="divide-y divide-white/[0.07]">
            {fixtures.map((f) => (
              <li
                key={f.name}
                className="group flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                {/* Date block */}
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-pitch-400/20 bg-night-900 text-center">
                  <span className="text-2xl font-extrabold leading-none text-white">
                    {f.day}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-pitch-300">
                    {f.month}
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-bold text-white">
                    {f.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/50">{f.format}</p>
                </div>

                {/* Prize */}
                <div className="hidden text-right sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    Prize
                  </span>
                  <p className="text-base font-bold text-white">{f.prize}</p>
                </div>

                {/* Slots */}
                <div
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyles[f.status]}`}
                >
                  <UsersIcon className="h-3.5 w-3.5" />
                  {f.slots}
                </div>

                {/* CTA */}
                <Link
                  to="/bookings"
                  aria-label={`Register for ${f.name}`}
                  className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    f.status === "full"
                      ? "cursor-default border border-white/10 bg-white/5 text-white/40"
                      : "bg-gradient-to-r from-pitch-400 to-pitch-600 text-night-950 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pitch-500/30"
                  }`}
                >
                  {f.status === "full" ? "Join waitlist" : "Register"}
                  {f.status !== "full" && (
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UpcomingFixtures;
