const features = [
  {
    icon: "📍",
    title: "Site Tracking",
    desc: "Monitor all active sites from a single dashboard. Get real-time status updates without leaving the office.",
  },
  {
    icon: "👷",
    title: "Team Management",
    desc: "Assign tasks, track crew progress, and surface blockers before they become delays.",
  },
  {
    icon: "📂",
    title: "Document Storage",
    desc: "Keep permits, blueprints, and inspection reports organised and always a click away.",
  },
  {
    icon: "📊",
    title: "Project Timeline",
    desc: "Visualise milestones and dependencies with Gantt-style views built for construction workflows.",
  },
  {
    icon: "🔔",
    title: "Smart Alerts",
    desc: "Get notified about schedule drift, budget overruns, or safety incidents the moment they happen.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    desc: "Connect to your existing accounting, ERP, and procurement tools with zero custom code.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Everything your team needs on-site and off
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Purpose-built features for the way construction companies actually
            work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 block text-2xl">{f.icon}</span>
              <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
