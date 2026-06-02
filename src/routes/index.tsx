import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import icon from "@/assets/claystudio-icon.png";
import appShot from "@/assets/claystudio-app.png";
import { withBasePath } from "@/lib/base-path";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClayStudio — Pottery on Apple Vision Pro" },
      {
        name: "description",
        content:
          "Shape clay with your bare hands in spatial reality. A meditative pottery experience built for Apple Vision Pro.",
      },
      { property: "og:title", content: "ClayStudio — Pottery on Apple Vision Pro" },
      {
        property: "og:description",
        content:
          "Shape clay with your bare hands in spatial reality. A meditative pottery experience for Apple Vision Pro.",
      },
      { property: "og:image", content: icon },
      { name: "twitter:image", content: icon },
    ],
    links: [{ rel: "canonical", href: withBasePath("/") }],
  }),
  component: Index,
});

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            For Apple Vision Pro
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95]">
            Shape clay <em className="not-italic text-primary">with your hands.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            ClayStudio brings the potter's wheel into spatial reality. A spinning block of clay
            floats in front of you — form it directly with your fingertips. No controllers.
            Just craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.apple.com/apple-vision-pro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20"
            >
              Get it on App Store
            </a>
            <a
              href="#demo"
              className="inline-flex items-center rounded-full border border-border bg-card/60 px-6 py-3 font-medium hover:bg-card transition"
            >
              Watch the demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-8 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/20 blur-3xl rounded-full"
            aria-hidden
          />
          <img
            src={icon}
            alt="ClayStudio app icon"
            className="relative mx-auto w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-clay-deep/60"
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
          A potter's wheel in your room.
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Feature
            title="Bare-hand shaping"
            body="ClayStudio reads your hands directly — every gesture moves the clay in real time."
          />
          <Feature
            title="No controllers"
            body="The experience is the interface. Speed up the wheel with a gentle nudge. Smooth the rim with a fingertip."
          />
          <Feature
            title="Meditative by design"
            body="A calm creative space, wherever you are. No distractions, no notifications, no pressure — just you and the clay."
          />
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your potter's wheel <span className="text-primary">is ready.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md">
              Launch the app from your Apple Vision Pro home screen, raise your hands, and begin. Every session is
              yours — slow, tactile, unhurried.
            </p>
            <div className="mt-8 rounded-3xl border border-dashed border-border bg-card/40 p-8 text-center text-muted-foreground">
              <p className="text-sm uppercase tracking-widest">Coming soon</p>
              <p className="mt-2">Demo video will be embedded here.</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={appShot}
              alt="ClayStudio launch screen on visionOS"
              className="w-full rounded-[4rem] shadow-2xl shadow-clay-deep/60"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
