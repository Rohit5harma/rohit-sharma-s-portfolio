import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const icons = { github: Github, linkedin: Linkedin, mail: Mail, code: Code2 } as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {portfolioData.socialLinks.map((link: { label: string; url: string; icon: string }) => {
        const Icon = icons[link.icon as keyof typeof icons] ?? Code2;
        const external = link.url.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.url}
            aria-label={link.label}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="glass-panel grid h-11 w-11 shrink-0 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
