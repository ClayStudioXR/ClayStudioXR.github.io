import { Link } from "@tanstack/react-router";
import logo from "@/assets/claystudio-logo.png";
import { withBasePath } from "@/lib/base-path";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ClayStudio" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <a
            href={withBasePath("/#experience")}
            className="hidden sm:inline px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            Experience
          </a>
          <a
            href={withBasePath("/#demo")}
            className="hidden sm:inline px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="https://www.apple.com/apple-vision-pro/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-primary-foreground font-medium hover:opacity-90 transition"
          >
            App Store
          </a>
        </nav>
      </div>
    </header>
  );
}
