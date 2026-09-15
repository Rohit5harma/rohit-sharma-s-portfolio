import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Rohit Sharma | Full Stack Developer";
const description =
  "Rohit Sharma is a Full Stack Developer from Agra, India, building React, Node.js and Python projects — portfolio, experience, skills and contact.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rohit Sharma",
          jobTitle: "Full Stack Developer",
          email: "mailto:kaushikrohit6396@gmail.com",
          telephone: "+919058029848",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Agra",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/Rohit5harma",
            "https://linkedin.com/in/rohit-sharma-7ab028312",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
