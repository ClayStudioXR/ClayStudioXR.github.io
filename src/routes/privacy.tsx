import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { withBasePath } from "@/lib/base-path";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ClayStudio" },
      {
        name: "description",
        content: "How ClayStudio handles your data. Short answer: we don't collect any.",
      },
      { property: "og:title", content: "Privacy Policy — ClayStudio" },
      {
        property: "og:description",
        content: "How ClayStudio handles your data on Apple Vision Pro.",
      },
    ],
    links: [{ rel: "canonical", href: withBasePath("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-16 pb-12 flex-1">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Legal</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-muted-foreground">Last updated: June 1, 2026</p>

        <div className="prose prose-neutral mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p className="text-muted-foreground">
              ClayStudio is a spatial pottery experience for Apple Vision Pro. The app runs locally
              on your device. We do not collect, store, or transmit any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data we collect</h2>
            <p className="text-muted-foreground">
              None. ClayStudio does not require an account, does not track usage, and does not
              contain analytics or third-party SDKs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Hand & camera data</h2>
            <p className="text-muted-foreground">
              ClayStudio uses visionOS hand-tracking APIs to let you shape the clay with your hands.
              This data is processed on-device by visionOS and is never sent to us or any third
              party. The app never records or stores video from the device cameras.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your creations</h2>
            <p className="text-muted-foreground">
              Anything you sculpt in ClayStudio stays on your device. We have no servers and no
              cloud storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children</h2>
            <p className="text-muted-foreground">
              ClayStudio does not knowingly collect data from anyone, including children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes</h2>
            <p className="text-muted-foreground">
              If this policy changes, we will update the date above and post the new version at this
              URL before the change takes effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Have ideas for features or improvements? We'd love to hear from you{" "}
              <a href="mailto:claystudio.xr@gmail.com" className="text-primary underline">
                claystudio.xr@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
