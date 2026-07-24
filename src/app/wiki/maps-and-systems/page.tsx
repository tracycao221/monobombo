import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Maps and Systems",
  description: "Monobombo wiki page for systems, round flow, and outcome notes that help Roblox teams solve the next bomb.",
  alternates: { canonical: `${siteConfig.domain}/wiki/maps-and-systems/` }
};

export default function WikiMapsSystemsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Maps and Systems", href: "/wiki/maps-and-systems" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Maps and Systems", href: "/wiki/maps-and-systems" }]} />
      <PageIntro
        eyebrow="Wiki topic"
        title="Monobombo maps and systems"
        description="Use this Monobombo wiki page for systems, round flow, and outcome notes when your Roblox squad wants the cleanest summary of what the game publicly explains."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Systems</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Systems overview</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The confirmed Monobombo systems are the shared bomb-defusal goal and the three communication limits called out on the official Roblox page.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Round flow</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Round flow</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Each Monobombo round works best when the team sets the caller order before the round, confirms one clue at a time, and resets after a bad input.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Outcome</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Outcome notes</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The useful outcome check is whether the team solved the bomb with a clean callout chain, not whether an unverified wiki post guessed a hidden mode rule.</p>
        </article>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Player routes"
          title="Which systems page should you open next?"
          copy="If you need role detail, move to the guide. If you need code status, move to the codes page. If you need ranking language, move to builds and entities."
        />
      </section>

      <AdsterraArticleBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/guide" className="content-card">
          <span className="mini-label">Guide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Read the main guide</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Open the Monobombo role guide when your next Roblox round needs a clearer handoff.</p>
        </Link>
        <Link href="/squad-planner" className="content-card">
          <span className="mini-label">Planner</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the squad planner</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the planner to assign the next systems decision and round risk.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki hub</span>
          <h2 className="mt-3 text-xl font-bold text-white">Return to the wiki hub</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Jump back to the Monobombo wiki hub for quick answer and FAQ links.</p>
        </Link>
      </section>
    </main>
  );
}
