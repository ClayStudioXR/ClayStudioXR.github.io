import { Link } from "@tanstack/react-router";
import logo from "@/assets/claystudio-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <img src={logo} alt="ClayStudio" className="h-8 w-auto m-auto md:ml-0" />
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <a href="mailto:claystudio.xr@gmail.com" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-muted-foreground">
        ® 2026 ClayStudio, Martyna Talaga &amp; Paweł Wasilewski. All rights reserved.
      </div>
    </footer>
  );
}
