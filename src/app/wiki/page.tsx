import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for roles, bomb-defusal basics, source status, modes, and Roblox game facts.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this Monobombo wiki hub for the three monkey roles, bomb-defusal basics, source status, and checked mode notes."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Quick answer"
          title="Quick answer"
          copy="The Monobombo wiki is the player-facing hub for Roblox role facts, code status, systems notes, and the next route your squad should open."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">Core systems</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Core systems</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">The known Monobombo systems are the shared bomb-defusal goal plus the sight, hearing, and speech limits described on the official Roblox page.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Current facts</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Current facts</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">As of Thursday, July 30, 2026, Monobombo still has no public code list, no checked Trello board, no checked Discord invite, and no checked public wiki link.</p>
          </article>
        </div>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Player routes"
          title="Player routes"
          copy="Choose the Monobombo route that matches your next Roblox question."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Wiki topic pages"
          title="Wiki topic pages"
          copy="These topic pages split Monobombo rewards, systems, and ranking language into clear sections instead of leaving everything in one hub."
        />
      </section>
      <AdsterraArticleBottom />

      <section className="mt-10">
        <SectionHeader
          eyebrow="FAQ"
          title="FAQ"
          copy="These quick Monobombo wiki answers help players decide which route to open next."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <h3 className="text-lg font-bold text-white">Which Monobombo wiki page should I open first?</h3>
            <p className="mt-2 text-sm leading-6 text-white/68">Start with the wiki hub when you need a quick answer, then move into rewards, systems, or ranking pages depending on the question.</p>
          </article>
          <article className="content-card">
            <h3 className="text-lg font-bold text-white">Does the Monobombo wiki confirm hidden codes or boards?</h3>
            <p className="mt-2 text-sm leading-6 text-white/68">No. The wiki only records public facts and checked status notes for Roblox players.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
