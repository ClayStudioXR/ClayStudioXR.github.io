import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { withBasePath } from "@/lib/base-path";

export const Route = createFileRoute("/website-privacy")({
  head: () => ({
    meta: [
      { title: "Website Privacy Notice — ClayStudio" },
      {
        name: "description",
        content:
          "How the ClayStudio website and direct email contact handle hosting data, messages, and privacy rights.",
      },
      { property: "og:title", content: "Website Privacy Notice — ClayStudio" },
      {
        property: "og:description",
        content:
          "How the ClayStudio website and direct email contact handle hosting data, messages, and privacy rights.",
      },
    ],
    links: [{ rel: "canonical", href: withBasePath("/website-privacy") }],
  }),
  component: WebsitePrivacyPage,
});

function WebsitePrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-16 pb-12 flex-1">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Legal</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">Website Privacy Notice</h1>
        <p className="mt-3 text-muted-foreground">Last updated: June 5, 2026</p>

        <div className="prose prose-neutral mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p className="text-muted-foreground">
              This notice applies to the ClayStudio website and to direct contact you initiate with
              us by email. It does not cover the Apple Vision Pro app itself; for app-specific
              information, see our{" "}
              <a href={withBasePath("/privacy")} className="text-primary underline">
                App Privacy Policy
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
            <h2 className="text-2xl font-semibold mb-3">Website access and hosting</h2>
            <p className="text-muted-foreground">
              The ClayStudio website is currently hosted via GitHub Pages. When you visit the site,
              GitHub and related network infrastructure may process technical information such as
              your IP address, browser or device information, request headers, referrer, and basic
              access logs in order to deliver the website, keep it available, and protect against
              abuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact emails</h2>
            <p className="text-muted-foreground">
              If you contact us by email, we process the information you choose to send, which may
              include your email address, name, message content, attachments, and associated email
              metadata. We use that information to respond to you, handle support or feedback,
              maintain reasonable business records, and protect our rights when necessary.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our public contact address is hosted through Gmail, so Google also processes email
              content and metadata as our email provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cookies and tracking</h2>
            <p className="text-muted-foreground">
              The current ClayStudio website does not intentionally use analytics cookies, ad
              pixels, or similar tracking technologies. If that changes, we will update this notice
              before or when the change becomes effective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why we process data</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To deliver and secure the website.</li>
              <li>To respond to messages, feedback, or support requests that you send us.</li>
              <li>To comply with legal obligations and protect our rights if needed.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              If you are in the EEA, UK, or Switzerland, our legal bases generally include
              legitimate interests, steps taken at your request before entering into a potential
              relationship with you, and compliance with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Sharing and processors</h2>
            <p className="text-muted-foreground">We may share or make information available to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>GitHub and GitHub Pages for website hosting and delivery.</li>
              <li>Google/Gmail for email handling.</li>
              <li>Network, security, and infrastructure providers needed to deliver the site.</li>
              <li>Professional advisers or public authorities where required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">International transfers</h2>
            <p className="text-muted-foreground">
              The providers we rely on may process information outside the country where you live.
              Where applicable, such transfers are governed by the provider's contractual,
              organizational, or legal safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Retention</h2>
            <p className="text-muted-foreground">
              Website access logs are primarily controlled by the hosting and infrastructure
              providers that deliver the site, and may be retained according to their policies.
              Emails and related correspondence are kept only as long as reasonably necessary to
              respond, maintain records, or resolve legal, safety, or security issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children</h2>
            <p className="text-muted-foreground">
              The ClayStudio website is not directed to children in cases where parental consent is
              required by applicable law. If you believe a child provided personal information to
              us without appropriate consent, contact us and we will review the request and delete
              that information where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your rights</h2>
            <p className="text-muted-foreground">
              Depending on where you live, you may have the right to request access, correction,
              deletion, restriction, objection, or a copy of personal information we hold about
              you, and to lodge a complaint with your local data protection authority. Because we
              do not operate website user accounts, the information we can act on will usually be
              limited to emails or records associated with your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes</h2>
            <p className="text-muted-foreground">
              If this notice changes, we will update the date above and post the new version at
              this URL before the change takes effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              For website privacy requests, support, or general questions, contact us at{" "}
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