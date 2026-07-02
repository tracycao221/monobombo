import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, tierPreview } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Role Priority Guide`,
  description: `${siteConfig.gameName} role notes for the blindfolded, headphones, and quiet monkey teammates. No character or item tier list is verified yet.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Role Priority Guide`,
    description: `${siteConfig.gameName} role notes with source-backed confidence labels.`,
    url: `${siteConfig.domain}/tier-list`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Role Priority Guide`,
    description: `${siteConfig.gameName} role notes with source-backed confidence labels.`,
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Role Priority Guide", href: "/tier-list" }]} />
      <FaqJsonLd items={siteConfig.gameName ? [{ q: "Is there a Monobombo character tier list?", a: "No source-backed character, item, or mode tier list was verified at launch. This page keeps the route focused on confirmed role priorities until real ranking demand appears." }] : []} />
      <Breadcrumbs items={[{ label: "Role Priority Guide", href: "/tier-list" }]} />
      <PageIntro
        eyebrow="Checked route"
        title={`${siteConfig.gameName} role priority guide`}
        description="Monobombo does not have a verified character or item ranking yet. The safe launch version explains the three confirmed team roles and points players to the main guide."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Confirmed roles"
          title="Compare the three communication limits"
          copy="These notes are based on the official Roblox description. Do not treat them as a hidden meta ranking or item list."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tierPreview.map((item) => (
            <article key={item.name} className="content-card">
              <span className="status-pill">{item.confidence}</span>
              <h2 className="mt-4 text-xl font-bold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-white/70">{item.reason}</p>
              <p className="mt-3 text-sm text-white/50">{item.teamNote}</p>
            </article>
          ))}
        </div>
      </section>
      <AdsterraArticleBottom />

      <section className="mt-10">
        <Link href="/guide" className="button-primary">
          Read the full guide
        </Link>
      </section>
    </main>
  );
}
