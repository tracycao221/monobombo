import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes`,
  description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes`}
        description="No active official Monobombo codes were verified during the July 2, 2026 launch check. This page stays live so players can see the checked status without mixing Monobombo with Monkey Bomb Tag or other monkey bomb games."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Current verified codes"
          copy="A code is only added here after an official or trusted current source confirms it for Monobombo."
        />
        {activeCodes.length === 0 ? (
          <article className="content-card mt-6">
            <span className="status-pill">Pending</span>
            <h2 className="mt-4 text-2xl font-bold text-white">No active Monobombo codes verified yet</h2>
            <p className="mt-3 text-white/70">
              We found the official Roblox experience, but did not verify any public Monobombo code
              list, reward, or redemption UI during the launch check. Monkey Bomb Tag codes are not
              Monobombo codes.
            </p>
            <p className="mt-2 text-sm text-white/45">Checked: July 2, 2026</p>
          </article>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
            ))}
          </div>
        )}
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How redemption will be checked"
            copy="No Monobombo redemption panel was verified at launch. These checks are used before any future code is published."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Check whether the current build has a Codes, Rewards, Shop, or Settings panel.</li>
            <li>3. Confirm the code belongs to Monobombo, not a near-name Roblox game.</li>
            <li>4. Redeem in-game before publishing the reward text.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Codes show the date checked, source type, and conflict notes when trackers disagree. Unverified codes stay off the active list."
          />
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
