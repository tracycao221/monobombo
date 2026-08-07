import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Updates",
  description: "Monobombo update, code, checked, and status page for Roblox players who need the latest public source boundary.",
  alternates: { canonical: `${siteConfig.domain}/updates/` }
};

const updateRows = [
  {
    title: "Official Roblox page updated",
    detail: "The Roblox source-of-record still resolves to Monobombo on Friday, August 7, 2026, and the universe lookup still maps place 112531085636442 to universe 10357992717. The public Roblox games summary refreshed to 1,538 playing, 54,301,819 visits, and 142,649 favorites, while the votes API refreshed to 44,563 upvotes and 2,025 downvotes."
  },
  {
    title: "Codes still pending",
    detail: "No public Monobombo code, reward string, or redeem panel was confirmed during the Friday, August 7, 2026 check."
  },
  {
    title: "Community status still pending",
    detail: "No official Trello, Discord invite, or public wiki source was verified for Monobombo on Friday, August 7, 2026."
  }
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Checked status"
        title="Monobombo updates"
        description="Use this Monobombo update page when you need one checked status view for the latest code watch, source watch, and Roblox update note."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Update status"
          title="Latest checked update status"
          copy="This Monobombo update page keeps code, checked, and status language together so Roblox players can see what changed without mixing in rumors."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {updateRows.map((row) => (
            <article key={row.title} className="content-card">
              <span className="mini-label">Status</span>
              <h2 className="mt-3 text-xl font-bold text-white">{row.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{row.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <span className="mini-label">Code watch</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Code watch</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">If a public Monobombo code appears, this page should note the checked date, source type, and whether the reward text matches the official Roblox or creator post.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Status watch</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Status watch</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">If a Trello board, Discord invite, or wiki appears later, this route should update the status note and link players to the right source page.</p>
        </article>
      </section>

      <AdsterraArticleBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check the codes page</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep Monobombo codes separate from Monkey Bomb Tag and other unrelated Roblox code pages.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Community</span>
          <h2 className="mt-3 text-xl font-bold text-white">Review Trello and Discord status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the Monobombo status route to check whether official community links exist yet.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the wiki hub</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Move into the Monobombo wiki hub when you need role facts, systems, or player routes.</p>
        </Link>
      </section>
    </main>
  );
}
