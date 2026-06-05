import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { withBasePath } from "@/lib/base-path";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "App Privacy Policy — ClayStudio" },
      {
        name: "description",
        content:
          "How the ClayStudio app for Apple Vision Pro handles app data, hand interaction, and platform-provided services.",
      },
      { property: "og:title", content: "App Privacy Policy — ClayStudio" },
      {
        property: "og:description",
        content:
          "How the ClayStudio app for Apple Vision Pro handles app data, hand interaction, and platform-provided services.",
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
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">App Privacy Policy</h1>
        <p className="mt-3 text-muted-foreground">Last updated: June 5, 2026</p>

        <div className="prose prose-neutral mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p className="text-muted-foreground">
              This policy applies to the ClayStudio app for Apple Vision Pro. The current public
              release is designed to run locally on device and does not require a ClayStudio
              account. ClayStudio does not use its own advertising network and does not intentionally
              use ClayStudio-operated analytics inside the current app release.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What this policy covers</h2>
            <p className="text-muted-foreground">
              This document describes how the ClayStudio app currently handles app-related data.
              It does not replace the privacy terms of Apple or other third-party platform
              providers. If you visit the ClayStudio website or contact us by email, please also
              review our{" "}
              <a href={withBasePath("/website-privacy")} className="text-primary underline">
                Website Privacy Notice
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Who is responsible</h2>
            <p className="text-muted-foreground">
              ClayStudio is operated by Martyna Talaga and Paweł Wasilewski. For privacy questions
              or requests, contact us at{" "}
              <a href="mailto:claystudio.xr@gmail.com" className="text-primary underline">
                claystudio.xr@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data we collect</h2>
            <p className="text-muted-foreground">
              The current ClayStudio app does not require a ClayStudio user account, does not ask
              you to submit profile information to us, and does not currently provide a
              ClayStudio-operated cloud sync or ClayStudio-operated telemetry dashboard. We do not
              sell personal information and we do not use in-app behavior for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Hand interaction and camera-related data</h2>
            <p className="text-muted-foreground">
              ClayStudio relies on visionOS interaction capabilities so that you can shape the clay
              with your hands. Based on the current product design, these interactions are handled
              on device by the platform in order to operate the experience. ClayStudio does not
              receive raw camera video through this website and does not intentionally upload hand
              interaction data to ClayStudio-operated servers for analytics or advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your creations</h2>
            <p className="text-muted-foreground">
              The current public release does not provide a ClayStudio-operated cloud storage
              service for your pottery creations. If you export, back up, or share content using
              Apple or other platform features, that processing is governed by the provider you use
              for export, storage, sync, or sharing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Apple and other platform providers</h2>
            <p className="text-muted-foreground">
              Apple and other platform providers may independently process information related to
              app downloads, purchases, crash diagnostics, device configuration, network activity,
              and platform security. Their processing is governed by their own terms, privacy
              notices, and device settings, not by this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-party SDKs and advertising</h2>
            <p className="text-muted-foreground">
              Based on the current public release, ClayStudio does not intentionally include its own
              advertising SDKs or third-party analytics services for behavioral profiling. If that
              changes in a future release, we will update this policy before or when the change
              becomes effective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children</h2>
            <p className="text-muted-foreground">
              ClayStudio is not directed to children in cases where parental consent is required by
              applicable law. If you believe personal information about a child was provided to us
              through app-related support or direct contact without appropriate consent, contact us
              and we will review the request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes</h2>
            <p className="text-muted-foreground">
              If app-related data practices materially change, we will update this policy and post
              the revised version at this URL before or when the change becomes effective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              For app privacy requests, support, or product feedback, contact us at{" "}
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
