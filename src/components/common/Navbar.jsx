import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Bookings", path: "/bookings" },
  { name: "Gallery", path: "/gallery" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-night-950/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(34,211,94,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pitch-400 to-pitch-600 opacity-80 blur-md transition-opacity duration-300 group-hover:opacity-100 animate-glow-pulse" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pitch-400 to-pitch-700 ring-1 ring-white/20">
              <CricketBallIcon className="h-6 w-6 text-night-950" />
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-white">
              ASTRO<span className="text-pitch-400">WORLD</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Indoor Cricket
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/bookings"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pitch-400 to-pitch-600 px-6 py-2.5 text-sm font-semibold text-night-950 shadow-lg shadow-pitch-500/25 transition-all duration-300 hover:shadow-pitch-500/50 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book a Slot</span>
            <ArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 lg:hidden"
        >
          <span className="flex w-5 flex-col items-end gap-1.5">
            <span
              className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "w-5 translate-y-2 rotate-45" : "w-5"
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-3.5"
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-4"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-night-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-2 border-l border-white/10 bg-night-900/95 px-6 pb-8 pt-24 shadow-2xl backdrop-blur-2xl transition-transform duration-400 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              style={{ transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms" }}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-medium transition-all duration-300 ${
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                } ${
                  isActive
                    ? "border-pitch-400/30 bg-pitch-400/10 text-white"
                    : "border-white/5 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
              <ArrowIcon className="h-4 w-4 opacity-50" />
            </NavLink>
          ))}

          <Link
            to="/bookings"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pitch-400 to-pitch-600 px-6 py-4 text-base font-semibold text-night-950 shadow-lg shadow-pitch-500/30"
          >
            Book a Slot
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function CricketBallIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path
        d="M12 3v18"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.2"
        strokeDasharray="1.5 1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default Navbar;
