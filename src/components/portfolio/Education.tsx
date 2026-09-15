import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type Edu = {
  institution: string;
  affiliation: string;
  degree: string;
  period: string;
  status: string;
};

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="grid gap-6">
        {(portfolioData.education as Edu[]).map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.08} className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="mt-1 text-sm text-foreground/90">{edu.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">{edu.affiliation}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
