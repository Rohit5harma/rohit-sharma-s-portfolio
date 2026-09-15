import { BadgeCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type Cert = { name: string; issuer: string; date: string };

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials">
      <div className="grid gap-6 sm:grid-cols-2">
        {(portfolioData.certifications as Cert[]).map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.08} className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug">{cert.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
