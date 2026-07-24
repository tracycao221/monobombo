import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Squad Planner",
  description: "Monobombo planner for role decisions, round risk, and the next squad handoff in Roblox.",
  alternates: { canonical: `${siteConfig.domain}/squad-planner/` }
};

const plannerRows = [
  ["Caller order", "Who makes the first decision?", "Which role carries the highest round risk if the call is wrong?"],
  ["Confirm word", "What short word locks the final decision?", "What happens if two players confirm different clues?"],
  ["Reset rule", "When does the team stop and reset?", "What risk grows if the team keeps talking over the reset?"]
] as const;

export default function SquadPlannerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Squad Planner", href: "/squad-planner" }]} />
      <Breadcrumbs items={[{ label: "Squad Planner", href: "/squad-planner" }]} />
      <PageIntro
        eyebrow="Tool"
        title="Monobombo squad planner"
        description="Use this Monobombo planner to assign the next Roblox role decision, note the main round risk, and keep the squad aligned before the bomb timer starts."
      />
      <AdsterraToolAd />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Planner"
          title="Planner rows for the next decision"
          copy="Each row gives your Monobombo squad one planner decision and one risk check so the team can practice without inventing hidden mechanics."
        />
        <div className="mt-6 grid gap-4">
          {plannerRows.map(([heading, decision, risk]) => (
            <article key={heading} className="content-card">
              <span className="mini-label">{heading}</span>
              <h2 className="mt-3 text-2xl font-bold text-white">{decision}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{risk}</p>
            </article>
          ))}
        </div>
      </section>

      <AdsterraToolBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/resource-calculator" className="content-card">
          <span className="mini-label">Calculator</span>
          <h2 className="mt-3 text-xl font-bold text-white">Set a practice target</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the resource calculator when the squad wants a time and retry target for the next Roblox session.</p>
        </Link>
        <Link href="/guides/progression" className="content-card">
          <span className="mini-label">Guide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Read the progression guide</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the Monobombo progression guide when the same decision keeps slowing your team down.</p>
        </Link>
        <Link href="/wiki/maps-and-systems" className="content-card">
          <span className="mini-label">Wiki</span>
          <h2 className="mt-3 text-xl font-bold text-white">Review systems and outcomes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Open the systems wiki page when you need a better round outcome checklist before the next run.</p>
        </Link>
      </section>
    </main>
  );
}
