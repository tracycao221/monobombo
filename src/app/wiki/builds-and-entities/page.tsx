import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Builds and Entities",
  description: "Monobombo wiki page for entities, value language, and ranking notes tied to the three known Roblox roles.",
  alternates: { canonical: `${siteConfig.domain}/wiki/builds-and-entities/` }
};

const buildRows = [
  {
    title: "Blindfolded monkey",
    detail: "This role has the highest value when the squad already uses short visual descriptions and clear final confirmations."
  },
  {
    title: "Headphones monkey",
    detail: "This role gains value when the team replaces longer voice lines with repeated keywords, pings, or typed notes."
  },
  {
    title: "Quiet monkey",
    detail: "This role gains value when the team uses a ranking system for yes-no and left-right confirmations instead of long explanations."
  }
];

export default function WikiBuildsEntitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Builds and Entities", href: "/wiki/builds-and-entities" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Builds and Entities", href: "/wiki/builds-and-entities" }]} />
      <PageIntro
        eyebrow="Wiki topic"
        title="Monobombo builds and entities"
        description="Use this Monobombo wiki page for entities, value, and ranking language when Roblox players want to compare the three known roles without inventing a hidden meta."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Entities and ranking"
          title="How this page handles entities, value, and ranking"
          copy="The known Monobombo entities are the blindfolded, headphones, and quiet monkey roles. The value and ranking notes below are practical team guidance, not a made-up item list."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {buildRows.map((row) => (
            <article key={row.title} className="content-card">
              <span className="mini-label">Ranking</span>
              <h2 className="mt-3 text-xl font-bold text-white">{row.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{row.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Player routes"
          title="Where should a player go next?"
          copy="Use the tier list for ranking confidence, the guide for full role steps, and the updates page when a new Monobombo patch shifts the value discussion."
        />
      </section>

      <AdsterraArticleBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Tier list</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open role ranking confidence</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the Monobombo tier list when you need a simple ranking view for the three roles.</p>
        </Link>
        <Link href="/guide" className="content-card">
          <span className="mini-label">Guide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Read the role guide</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the Monobombo guide when you need full step-by-step callout help for a Roblox team.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki hub</span>
          <h2 className="mt-3 text-xl font-bold text-white">Return to the wiki hub</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Jump back to the Monobombo wiki hub for quick answer and FAQ coverage.</p>
        </Link>
      </section>
    </main>
  );
}
