import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[36rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/70" />
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {portfolioData.name}.
          </h1>
          <p className="text-gradient mt-3 text-2xl font-semibold sm:text-3xl">
            {portfolioData.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {portfolioData.tagline}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" /> {portfolioData.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="glow-accent inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={portfolioData.resumeUrl}
              className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-primary/50"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <SocialLinks className="mt-8 flex-wrap" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-primary to-accent p-[2px]">
              <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-card">
                <img
                  src={portfolioData.profileImage}
                  alt="Rohit Sharma - Full Stack Developer"
                  width={640}
                  height={640}
                  loading="eager"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
