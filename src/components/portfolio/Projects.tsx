import { ExternalLink, Github, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {(portfolioData.projects as Project[]).map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.08}
            className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
              aria-hidden="true"
            />
            {project.featured && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent">
                <Sparkles className="h-3.5 w-3.5" /> Featured
              </span>
            )}
            <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs text-foreground/90"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 pt-2">
              <a
                href={project.github}
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
