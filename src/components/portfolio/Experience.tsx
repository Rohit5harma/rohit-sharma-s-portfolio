import { Building2, CalendarDays, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building">
      <div className="relative pl-8 sm:pl-10">
        <div
          className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-3"
          aria-hidden="true"
        />
        {(portfolioData.experience as Job[]).map((job, i) => (
          <Reveal key={job.role + job.company} delay={i * 0.08} className="relative">
            <span
              className="glow-accent absolute -left-8 top-7 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background sm:-left-[2.1rem]"
              aria-hidden="true"
            />
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 shrink-0 text-primary" /> {job.company}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-primary" /> {job.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
