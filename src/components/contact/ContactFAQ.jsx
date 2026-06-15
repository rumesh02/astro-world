import { useState } from "react";
import SectionHeading from "../home/SectionHeading";
import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "How do I book a lane?",
    a: "Head to our Bookings page, pick a date and time slot, choose your lane, and check out in under 30 seconds. You can also call or WhatsApp us and we'll lock it in for you.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open from 6:00 AM daily, with extended late-night sessions and full 24-hour play on Fridays and Saturdays. Night matches under the floodlights are our specialty.",
  },
  {
    q: "Do you provide bats, balls, and gear?",
    a: "Yes — quality bats and soft/hard cricket balls are available to rent at the front desk. You're welcome to bring your own gear too. Flat-soled shoes are required on the turf.",
  },
  {
    q: "Can I host a tournament or corporate event?",
    a: "Absolutely. We run leagues, knockout tournaments, and private corporate matchdays with custom packages, refreshments, and a scoreboard crew. Use the form above with 'Tournament' or 'Corporate event' and we'll plan it with you.",
  },
  {
    q: "Is there parking and a place to relax?",
    a: "Free on-site parking is available, plus a courtside café and spectator lounge so friends and family can watch in comfort between overs.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Reschedule or cancel up to 6 hours before your slot for a full credit. Just give us a call or drop a message and we'll sort it out — no hassle.",
  },
];

function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, before you"
          highlight="step up to the crease"
          subtitle="Can't find what you're looking for? Send us a message above — we're happy to help."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-pitch-400/30 bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-pitch-400/40 bg-pitch-400/15 text-pitch-300"
                        : "border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;
