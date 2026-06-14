/* Consistent eyebrow + title + subtitle block used across home sections. */
function SectionHeading({ eyebrow, title, highlight, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-pitch-400/20 bg-pitch-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pitch-300">
          <span className="h-1.5 w-1.5 rounded-full bg-pitch-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-pitch-300 via-pitch-400 to-pitch-600 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-white/55 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
