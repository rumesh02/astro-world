import { useState } from "react";
import {
  PinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  WhatsAppIcon,
} from "./icons";

const infoCards = [
  {
    icon: PinIcon,
    title: "Visit the arena",
    lines: ["553 A, De Soysa Rd,", "Moratuwa, Colombo, Sri Lanka"],
    action: { label: "Get directions", href: "https://maps.app.goo.gl/EWXyuBbb4s5ak3AU9" },
  },
  {
    icon: PhoneIcon,
    title: "Give us a ring",
    lines: ["077 465 6009", "Mon–Sun, anytime"],
    action: { label: "Call now", href: "tel:+94774656009" },
  },
  {
    icon: MailIcon,
    title: "Drop an email",
    lines: ["hello@astroworld.lk", "We reply within an hour"],
    action: { label: "Send email", href: "mailto:hello@astroworld.lk" },
  },
];

const hours = [
  { day: "Mon – Thu", time: "6:00 AM – 12:00 AM" },
  { day: "Fri – Sat", time: "Open 24 hours" },
  { day: "Sunday", time: "6:00 AM – 1:00 AM" },
];

const socials = [
  { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/94774656009" },
  { name: "Instagram", icon: InstagramIcon, href: "#" },
  { name: "Facebook", icon: FacebookIcon, href: "#" },
  { name: "X", icon: XIcon, href: "#" },
];

const reasons = [
  "Book a lane",
  "Tournament enquiry",
  "Corporate / group event",
  "Coaching & academy",
  "Something else",
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-night-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-pitch-400/50 focus:bg-night-900 focus:ring-2 focus:ring-pitch-400/20";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: reasons[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — surface a success state so the form feels alive.
    setSent(true);
    setForm({ name: "", email: "", phone: "", reason: reasons[0], message: "" });
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* ---------- Left: info column ---------- */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-pitch-400/30"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pitch-500/0 blur-3xl transition-all duration-500 group-hover:bg-pitch-500/20" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-night-900 text-pitch-400 transition-all duration-500 group-hover:border-pitch-400/40 group-hover:text-pitch-300">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-white/55">
                        {line}
                      </p>
                    ))}
                    <a
                      href={card.action.href}
                      target={card.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.action.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-pitch-300 transition-colors hover:text-pitch-200"
                    >
                      {card.action.label}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {/* Opening hours */}
            <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-night-900 text-pitch-400">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">
                  Opening hours
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-white/5 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-white/55">{h.day}</span>
                    <span className="font-medium text-white">{h.time}</span>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  Follow
                </span>
                <div className="flex gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={s.name}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-pitch-400/40 hover:bg-pitch-400/10 hover:text-pitch-300"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 sm:p-9">
              {/* Ambient corner glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pitch-500/10 blur-3xl" />
              {/* Top gradient hairline */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pitch-400/60 to-transparent" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-pitch-400" />
                  Send a message
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Tell us what you need
                </h2>
                <p className="mt-2 text-sm text-white/55">
                  Fill in the form and we'll get back to you faster than a yorker.
                </p>

                {sent ? (
                  <div className="mt-8 flex flex-col items-center rounded-2xl border border-pitch-400/30 bg-pitch-400/10 px-6 py-12 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pitch-400 to-pitch-600 text-night-950 shadow-lg shadow-pitch-500/30 animate-glow-pulse">
                      <CheckIcon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      Message sent — howzat!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-white/60">
                      Thanks for reaching out. A member of the AstroWorld team
                      will be in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"
                        >
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Kumar Sangakkara"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="077 123 4567"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        What's this about?
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2388f0a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                        }}
                      >
                        {reasons.map((r) => (
                          <option key={r} value={r} className="bg-night-900">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your game, group size, preferred dates…"
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-8 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative">Send message</span>
                      <SendIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
