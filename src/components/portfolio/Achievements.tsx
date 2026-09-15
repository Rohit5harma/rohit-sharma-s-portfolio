import { Trophy, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type Achievement = {
  title: string;
  description: string;
  link?: { label: string; url: string };
};

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Consistency, proven">
      <div className="grid gap-6 sm:grid-cols-2">
        {(portfolioData.achievements as Achievement[]).map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.08}
            className="glass-panel flex h-full flex-col rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Trophy className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                {item.link.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
