import LeadCaptureForm from "@/components/lead-capture-form";

export default function DemoFormSection() {
  return (
    <section id="demo-form" className="border-b border-border bg-muted py-24">
      <div className="mx-auto max-w-2xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            Request a Demo
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in the details below and our team will be in touch shortly.
          </p>
        </div>

        {/* Card wrapper */}
        <div className="rounded-xl border border-border bg-card p-8 shadow-md">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
