import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <button
          onClick={() => go("hero")}
          className="flex min-w-0 items-center gap-3"
          aria-label="Go to top"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
            RS
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            {portfolioData.name}
          </span>
        </button>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
          <a
            href={portfolioData.resumeUrl}
            download="Rohit_Sharma_Resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="glass-panel ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-xl lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-lg px-2 py-3 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
            <a
              href={portfolioData.resumeUrl}
              download="Rohit_Sharma_Resume.pdf"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
