import { PinIcon, ArrowIcon } from "./icons";

function MapSection() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900">
          {/* Map embed */}
          <div className="relative h-[420px] w-full sm:h-[480px]">
            <iframe
              title="AstroWorld Indoor Cricket location"
              src="https://www.google.com/maps?q=6.7914581,79.9001815&z=17&output=embed"
              className="h-full w-full grayscale-[0.4] contrast-[1.1]"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Edge fade so the map blends into the dark theme */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-night-950/30" />

            {/* Floating location card */}
            <div className="pointer-events-auto absolute bottom-6 left-6 right-6 max-w-sm rounded-2xl border border-white/10 bg-night-950/80 p-6 backdrop-blur-xl sm:left-8 sm:bottom-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pitch-400 to-pitch-600 text-night-950">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    AstroWorld Arena
                  </h3>
                  <p className="text-xs text-white/50">Moratuwa, Colombo</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                553 A, De Soysa Rd, Moratuwa — free on-site parking, just 25
                minutes from Colombo Fort.
              </p>
              <a
                href="https://maps.app.goo.gl/EWXyuBbb4s5ak3AU9"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-5 py-2.5 text-sm font-semibold text-night-950 shadow-lg shadow-pitch-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pitch-500/50"
              >
                Open in Google Maps
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
