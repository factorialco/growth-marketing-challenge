export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <span className="font-semibold text-foreground">BuildFlow</span>
        <p>© {new Date().getFullYear()} BuildFlow, Inc. All rights reserved.</p>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-foreground">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
