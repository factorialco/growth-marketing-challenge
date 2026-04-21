export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary py-28 text-center">
      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.9 0 0) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <span className="mb-4 inline-block rounded-full border border-secondary/40 bg-secondary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
          For Construction Teams
        </span>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
          Manage your construction projects better.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/70">
          BuildFlow brings your teams, timelines, and sites together so nothing
          slips through the cracks.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#demo-form"
            className="rounded-md bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-opacity hover:opacity-90"
          >
            Request Demo
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-primary-foreground/70 underline-offset-4 hover:underline"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
