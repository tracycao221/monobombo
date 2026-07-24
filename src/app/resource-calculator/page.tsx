import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Monobombo Resource Calculator",
  description: "Monobombo planner for practice cost, target rounds, and Roblox session time budgeting.",
  alternates: { canonical: `${siteConfig.domain}/resource-calculator/` }
};

const calculatorRows = [
  {
    title: "Practice target",
    copy: "Pick a target number of Monobombo rounds before you queue so the squad knows when the session is complete."
  },
  {
    title: "Time cost",
    copy: "Estimate the time cost of resets, discussion breaks, and role swaps so the team does not overrun the Roblox session."
  },
  {
    title: "Retry budget",
    copy: "Set a retry target for the session and stop when the team starts repeating the same mistake."
  }
];

export default function ResourceCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Resource Calculator", href: "/resource-calculator" }]} />
      <Breadcrumbs items={[{ label: "Resource Calculator", href: "/resource-calculator" }]} />
      <PageIntro
        eyebrow="Tool"
        title="Monobombo resource calculator"
        description="Use this Monobombo planner to set a practice target, estimate cost, and budget Roblox session time without inventing in-game currency or reward totals."
      />
      <AdsterraToolAd />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Planner"
          title="Planner rows for cost and target"
          copy="This page treats Monobombo as a practice planner. It focuses on target rounds, session cost, and retry control instead of made-up reward math."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {calculatorRows.map((row) => (
            <article key={row.title} className="content-card">
              <span className="mini-label">Target</span>
              <h2 className="mt-3 text-2xl font-bold text-white">{row.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{row.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <AdsterraToolBottom />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/squad-planner" className="content-card">
          <span className="mini-label">Planner</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the squad planner</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Move from target planning into the next Monobombo role decision and risk assignment.</p>
        </Link>
        <Link href="/guides/farming" className="content-card">
          <span className="mini-label">Guide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Read the farming guide</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the farming guide when you want a repeatable Roblox practice loop instead of a longer strategy page.</p>
        </Link>
        <Link href="/updates" className="content-card">
          <span className="mini-label">Status</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check update status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the update status page before adjusting the practice target around a fresh Monobombo patch.</p>
        </Link>
      </section>
    </main>
  );
}
