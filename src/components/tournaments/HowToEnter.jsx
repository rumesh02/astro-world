import SectionHeading from "../home/SectionHeading";
import { UsersIcon, TicketIcon, WhistleIcon } from "./icons";
import { TrophyIcon } from "../home/icons";

const steps = [
  {
    icon: UsersIcon,
    title: "Build your squad",
    desc: "Round up 6 to 8 players and pick a team name worth chanting from the sidelines.",
  },
  {
    icon: TicketIcon,
    title: "Pick a competition",
    desc: "Choose the format and date that suits your crew, then reserve your slot online in minutes.",
  },
  {
    icon: WhistleIcon,
    title: "Show up & play",
    desc: "Turn up on matchday. Pro umpires, live scoring and floodlit lanes are all set for you.",
  },
  {
    icon: TrophyIcon,
    title: "Lift the trophy",
    desc: "Battle through the bracket, top the table and take home the silverware and the cash.",
  },
];

function HowToEnter() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From signup to"
          highlight="silverware"
          subtitle="Entering a tournament takes about as long as padding up. Here's the whole journey in four steps."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              {/* Connector line on large screens */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-pitch-400/40 to-transparent lg:block" />
              )}

              <div className="group flex flex-col items-center text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-pitch-400/30 bg-night-900 text-pitch-400 shadow-lg shadow-pitch-950/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pitch-400/60">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pitch-400 to-pitch-600 text-xs font-bold text-night-950">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToEnter;
