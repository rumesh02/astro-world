import SectionHeading from "../home/SectionHeading";

/* A deliberately packed bento mosaic. Spans are chosen so the eight photos —
   six landscape and two portrait — tile a clean 4-column grid with no gaps.
   `grid-flow-dense` lets the portrait tiles (row-span-2) slot in cleanly. */
const shots = [
  {
    src: "/tournament/tournamentImg7.jpg",
    span: "col-span-2 row-span-2",
    title: "Finals night",
    meta: "Champions Cup",
  },
  {
    src: "/tournament/tournamentImg1.jpg",
    span: "col-span-2",
    title: "Squad huddle",
    meta: "Before the toss",
  },
  {
    src: "/tournament/tournamentImg6.jpg",
    span: "row-span-2",
    title: "In the zone",
    meta: "Batter on strike",
    portrait: true,
  },
  {
    src: "/tournament/tournamentImg8.jpg",
    span: "row-span-2",
    title: "Full send",
    meta: "Bowler's run-up",
    portrait: true,
  },
  {
    src: "/tournament/tournamentImg2.jpg",
    span: "col-span-2",
    title: "Lights up",
    meta: "Match in motion",
  },
  {
    src: "/tournament/tournamentImg3.jpg",
    span: "col-span-2",
    title: "That winning feeling",
    meta: "Trophy lift",
  },
  {
    src: "/tournament/tournamentImg4.jpg",
    span: "",
    title: "Big hit",
    meta: "Over the ropes",
  },
  {
    src: "/tournament/tournamentImg5.jpg",
    span: "",
    title: "Crowd roar",
    meta: "Sideline energy",
  },
];

function ArenaGallery() {
  return (
    <section className="relative py-20 sm:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-pitch-700/15 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the arena"
          title="The moments that"
          highlight="make a season"
          subtitle="Sweat, cheers and last-ball finishes. This is what tournament nights at AstroWorld actually look like."
        />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-4 [grid-auto-flow:dense]">
          {shots.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-night-900 ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                  s.portrait ? "object-center" : "object-center"
                }`}
              />

              {/* Permanent subtle bottom fade + hover-deepened overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-pitch-950/0 transition-colors duration-300 group-hover:bg-pitch-950/30" />

              {/* Caption — slides up on hover */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pitch-300">
                  {s.meta}
                </span>
                <p className="text-base font-bold leading-tight text-white">
                  {s.title}
                </p>
              </figcaption>

              {/* Corner accent */}
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-pitch-400 opacity-0 shadow-[0_0_12px] shadow-pitch-400 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArenaGallery;
