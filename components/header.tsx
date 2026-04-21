import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            BF
          </span>
          <span className="text-lg font-bold text-foreground">BuildFlow</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Features", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#demo-form"
          className="rounded-md bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          Request Demo
        </a>
      </div>
    </header>
  );
}
