import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Cpu, ExternalLink, Github, Sparkles, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

type ProjectImage = { src: string; alt: string };

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
  images?: ProjectImage[];
};

function Lightbox({
  images,
  index,
  onClose,
  onSelect,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onSelect: (i: number) => void;
}) {
  const current = images[index]!;

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onSelect((index + 1) % images.length);
      if (e.key === "ArrowLeft") onSelect((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onSelect],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-background/90 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Project photo gallery"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="glass-panel absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-xl text-foreground transition-colors hover:border-primary/50"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="flex min-h-0 flex-1 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full rounded-2xl border border-border object-contain"
        />
      </div>
      <div
        className="mx-auto mt-4 flex max-w-full gap-3 overflow-x-auto pb-1"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => onSelect(i)}
            aria-label={`View photo ${i + 1}`}
            className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
              i === index ? "border-primary" : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const cover = project.images?.[0];

  return (
    <Reveal
      delay={delay}
      className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-primary/40"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
        aria-hidden="true"
      />
      {cover && (
        <button
          onClick={() => setLightbox(0)}
          aria-label={`Open photo gallery for ${project.name}`}
          className="relative block w-full overflow-hidden border-b border-border"
        >
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5" /> Real Hardware Build
          </span>
          {project.images && project.images.length > 1 && (
            <span className="absolute bottom-4 right-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
              {project.images.length} photos
            </span>
          )}
        </button>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {!cover && project.featured && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Featured
          </span>
        )}
        <h3 className={`${cover ? "" : "mt-4"} text-xl font-semibold`}>{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
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
        {project.images && project.images.length > 1 && (
          <div className="mt-6 flex gap-3">
            {project.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox(i)}
                aria-label={`View photo ${i + 1} of ${project.name}`}
                className="h-16 w-20 overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary/60 hover:opacity-100 sm:opacity-80"
              >
                <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
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
      </div>
      {lightbox !== null &&
        project.images &&
        createPortal(
          <Lightbox
            images={project.images}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onSelect={setLightbox}
          />,
          document.body,
        )}
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {(portfolioData.projects as Project[]).map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}
