import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type SkillGroup = { category: string; items: string[] };

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(portfolioData.skills as SkillGroup[]).map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.06}
            className="glass-panel group rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
