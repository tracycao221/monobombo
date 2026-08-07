import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Items and Rewards",
  description: "Monobombo wiki page for code, rewards, and items language that Roblox players keep searching for.",
  alternates: { canonical: `${siteConfig.domain}/wiki/items-and-rewards/` }
};

export default function WikiItemsRewardsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Items and Rewards", href: "/wiki/items-and-rewards" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Items and Rewards", href: "/wiki/items-and-rewards" }]} />
      <PageIntro
        eyebrow="Wiki topic"
        title="Monobombo items and rewards"
        description="Use this Monobombo wiki page for the code, rewards, and items terms that show up in Roblox searches even when public proof is still limited."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <span className="mini-label">Code status</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Code and rewards status</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">No public Monobombo code or reward text was confirmed on Friday, August 7, 2026, so this page treats code claims as pending until a checked source appears.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Items watch</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Items players keep asking about</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The Monobombo Roblox page does not expose a public items list yet, so any item claim should stay tied to visible screenshots or later official notes.</p>
        </article>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rewards notes"
          title="How this page handles rewards"
          copy="This Monobombo wiki route is for code, rewards, and items language only. It should stay strict about what a player can actually confirm on Roblox today."
        />
      </section>

      <AdsterraArticleBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open Monobombo codes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check the live Monobombo code status page before using any rewards list from another Roblox game.</p>
        </Link>
        <Link href="/updates" className="content-card">
          <span className="mini-label">Updates</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check latest status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the updates page when you need the newest checked code or status note.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki hub</span>
          <h2 className="mt-3 text-xl font-bold text-white">Return to the wiki hub</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Move back to the Monobombo wiki hub for quick answer and player routes.</p>
        </Link>
      </section>
    </main>
  );
}
