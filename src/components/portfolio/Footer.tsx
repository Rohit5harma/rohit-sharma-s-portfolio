import { portfolioData } from "@/data/portfolioData";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <p className="min-w-0 text-sm text-muted-foreground">
          © 2026 {portfolioData.name}. All rights reserved.
        </p>
        <SocialLinks className="flex-wrap" />
      </div>
    </footer>
  );
}
