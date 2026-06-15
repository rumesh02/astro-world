import { PhoneIcon, MailIcon, WhatsAppIcon } from "./icons";

const quickContacts = [
  {
    icon: PhoneIcon,
    label: "Call us",
    value: "077 465 6009",
    href: "tel:+94774656009",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/94774656009",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@astroworld.lk",
    href: "mailto:hello@astroworld.lk",
  },
];

function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background photo of the arena */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/contactUsImage.png"
          alt="Batsman playing a shot at the AstroWorld indoor cricket arena"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Cinematic overlays — darken just enough to keep the centered text legible
          while letting the arena photo show through. */}
      <div className="absolute inset-0 -z-10 bg-night-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-950/70 via-transparent to-night-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,9,18,0.6)_100%)]" />

      {/* Ambient green glow accents */}
      <div className="pointer-events-none absolute -left-40 -top-24 -z-10 h-96 w-96 rounded-full bg-pitch-500/20 blur-[150px] animate-glow-pulse" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-pitch-700/20 blur-[130px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pitch-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pitch-400" />
          </span>
          <span className="text-xs font-medium text-white/70">
            We usually reply within an hour
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-7 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Let's talk{" "}
          <span className="relative inline-block bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            cricket
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          Booking a lane, planning a tournament, or just have a question? The
          AstroWorld team is courtside and ready to help — pick whatever's
          easiest for you.
        </p>

        {/* Quick contact chips */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {quickContacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-pitch-400/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pitch-500/0 blur-2xl transition-all duration-500 group-hover:bg-pitch-500/20" />
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-night-900 text-pitch-400 transition-colors duration-300 group-hover:border-pitch-400/40 group-hover:text-pitch-300">
                <c.icon className="h-5 w-5" />
              </span>
              <span className="relative flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                  {c.label}
                </span>
                <span className="text-sm font-semibold text-white">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
