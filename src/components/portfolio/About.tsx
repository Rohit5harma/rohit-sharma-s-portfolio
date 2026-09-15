import { GraduationCap, Briefcase, Target } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

export function About() {
  const edu = portfolioData.education[0]!;

  return (
    <Section id="about" eyebrow="About" title="A developer who ships end to end">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="truncate text-lg font-semibold">Educational Background</h3>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            I&apos;m currently in my {edu.status} of {edu.degree} at {edu.institution}, affiliated
            with {edu.affiliation} ({edu.period}). My coursework in data structures, algorithms,
            databases and web technologies is the foundation I build real projects on.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
              <Briefcase className="h-5 w-5" />
            </span>
            <h3 className="truncate text-lg font-semibold">Real-World Experience</h3>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            As a Software Engineer Intern at 509 Army Base Workshop, Agra Cantt, I work on
            production-facing software tasks in a disciplined, professional environment — gathering
            requirements, building web modules, and testing features alongside senior engineers.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-2">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="truncate text-lg font-semibold">Currently Focused On</h3>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {portfolioData.focusAreas.map((item: string) => (
              <li
                key={item}
                className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
