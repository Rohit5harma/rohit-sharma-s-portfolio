import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Reveal, Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60";

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Great">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-panel rounded-2xl p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a role, project or idea in mind? I&apos;d love to hear about it. Reach out directly
            or send a message using the form.
          </p>
          <div className="mt-7 space-y-4">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex min-w-0 items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <span className="truncate">{portfolioData.email}</span>
            </a>
            <a
              href={`tel:${portfolioData.phone}`}
              className="flex min-w-0 items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <span className="truncate">{portfolioData.phone}</span>
            </a>
            <p className="flex min-w-0 items-center gap-3 text-sm text-foreground/90">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="min-w-0">{portfolioData.location}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass-panel rounded-2xl p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={field}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a little about it..."
                className={`${field} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <p className="flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> Thanks! Your message has been
                prepared.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
